import { getData, updateData, genId } from '../data/storage.js';
import { todayISO, formatDateWithDay } from '../utils/dateUtils.js';
import { escapeHtml } from '../utils/htmlUtils.js';
import { showToast } from '../components/toast.js';
import { emptyStateHTML } from '../components/emptyState.js';
import { pickQuestions, isCorrect, shuffleArray, hasQuestionsFor, countAvailableQuestions } from '../utils/quizBank.js';
import { topicsFor, suggestSimilarSubjects } from '../quiz/curriculumCatalog.js';
import { getCurrentUserId } from '../auth/session.js';
import { findUserById } from '../auth/userAccounts.js';
import { openModal } from '../components/modal.js';

// מקצועות שקיימים בפרופיל הלימודי אבל לא רלוונטיים למחולל הבחנים (למשל מקצוע לא-עיוני)
const QUIZ_EXCLUDED_SUBJECTS = ['חינוך גופני'];

const DIFFICULTY_LABELS = { all: 'כל הרמות', easy: 'קל', medium: 'בינוני', hard: 'קשה' };
const TYPE_LABELS = { multiple_choice: 'אמריקאיות', true_false: 'נכון / לא נכון', open: 'פתוחות', matching: 'התאמה' };
const STATUS_LABELS = { not_started: 'עדיין לא התחלתי', currently_learning: 'לומדת עכשיו', learned: 'כבר למדתי', hidden: 'מוסתר' };

/** @returns {string} סטטוס הלמידה של נושא - ברירת המחדל היא "לומדת עכשיו" (לא "לא התחלתי"), כדי שרשימת הנושאים לא תיראה ריקה למשתמשת חדשה שעדיין לא סימנה כלום. */
function getTopicStatus(data, topicId) {
  return data.topicStatuses[topicId] ?? 'currently_learning';
}

function setTopicStatus(topicId, status) {
  return updateData((d) => {
    d.topicStatuses = { ...d.topicStatuses, [topicId]: status };
    return d;
  });
}

/** מאחדת נושאי קטלוג (משותפים) עם נושאים אישיים שהמשתמשת הוסיפה, לצמד מקצוע+כיתה נתון */
function allTopicsFor(data, subjectName, grade) {
  const catalogTopics = topicsFor(subjectName, grade);
  const customTopics = data.customTopics
    .filter((t) => t.subjectName === subjectName && t.grade === grade)
    .map((t) => ({ id: t.id, subjectName, grade, title: t.title, subtopics: [], confidence: 'personal' }));
  return [...catalogTopics, ...customTopics];
}

function questionPromptHTML(question, index) {
  const name = `q-${index}`;
  if (question.type === 'multiple_choice') {
    return `
      <div style="display:flex; flex-direction:column; gap:6px; margin-top:8px;">
        ${question.options
          .map(
            (opt) => `
          <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
            <input type="radio" name="${name}" value="${escapeHtml(opt)}">
            <span>${escapeHtml(opt)}</span>
          </label>`
          )
          .join('')}
      </div>`;
  }
  if (question.type === 'true_false') {
    return `
      <div style="display:flex; gap:16px; margin-top:8px;">
        <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="radio" name="${name}" value="נכון"> נכון</label>
        <label style="display:flex; align-items:center; gap:6px; cursor:pointer;"><input type="radio" name="${name}" value="לא נכון"> לא נכון</label>
      </div>`;
  }
  if (question.type === 'matching') {
    const rights = question._shuffledRights || (question._shuffledRights = shuffleArray(question.pairs.map((p) => p.right)));
    return `
      <div style="display:flex; flex-direction:column; gap:8px; margin-top:8px;">
        ${question.pairs
          .map(
            (pair) => `
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="min-width:140px;">${escapeHtml(pair.left)}</span>
            <select data-match-name="${name}" data-match-left="${escapeHtml(pair.left)}">
              <option value="">בחרו התאמה...</option>
              ${rights.map((r) => `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`).join('')}
            </select>
          </div>`
          )
          .join('')}
      </div>`;
  }
  // open
  return `<input type="text" name="${name}" class="field" style="margin-top:8px; padding:9px 12px; border-radius:12px; border:1px solid var(--color-border); width:100%;" placeholder="הקלידו את התשובה...">`;
}

function readAnswer(question, index) {
  const name = `q-${index}`;
  if (question.type === 'matching') {
    const answer = {};
    document.querySelectorAll(`[data-match-name="${name}"]`).forEach((sel) => {
      answer[sel.dataset.matchLeft] = sel.value;
    });
    return answer;
  }
  if (question.type === 'open') {
    const input = document.querySelector(`input[name="${name}"]`);
    return input ? input.value.trim() : '';
  }
  const checked = document.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : '';
}

function correctAnswerLabel(question) {
  if (question.type === 'matching') return question.pairs.map((p) => `${p.left} ← ${p.right}`).join(', ');
  return Array.isArray(question.correctAnswer) ? question.correctAnswer.join(' / ') : question.correctAnswer;
}

function givenAnswerLabel(question, answer) {
  if (question.type === 'matching') {
    if (!answer || typeof answer !== 'object') return '(לא נענה)';
    return Object.entries(answer)
      .map(([left, right]) => `${left} ← ${right || '?'}`)
      .join(', ');
  }
  return answer || '(לא נענה)';
}

export function render(container) {
  let data = getData();
  const user = findUserById(getCurrentUserId());
  const grade = user?.grade ?? '';

  let activeQuiz = null;

  function renderHistory() {
    const freshData = getData();
    const attempts = [...freshData.quizAttempts].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 5);
    if (attempts.length === 0) return '';
    return `
      <div class="card">
        <h3 style="margin-bottom:10px;">היסטוריית בחנים אחרונה</h3>
        <div style="display:flex; flex-direction:column; gap:6px;">
          ${attempts
            .map((a) => {
              const quiz = freshData.quizzes.find((q) => q.id === a.quizId);
              const topicsLabel = quiz ? quiz.topics.join(', ') : 'בוחן';
              return `<p>${escapeHtml(topicsLabel)} · ${formatDateWithDay(a.date)} · <strong>${Math.round(a.scorePercent)}%</strong></p>`;
            })
            .join('')}
        </div>
      </div>`;
  }

  function openAddCustomTopicModal(subjectName, onAdded) {
    openModal({
      title: 'הוספת נושא ידני',
      bodyHtml: `
        <form id="custom-topic-form">
          <div class="field">
            <label for="custom-topic-title">שם הנושא</label>
            <input type="text" id="custom-topic-title" required>
            <p class="field-error" id="custom-topic-error"></p>
          </div>
          <p class="page-subtitle">הנושא יסומן כ"נושא אישי — לא אומת מול תוכנית לימודים רשמית", וישמר רק עבורך.</p>
        </form>
      `,
      actions: [
        { label: 'ביטול', className: 'btn-secondary' },
        {
          label: 'הוספה',
          className: 'btn-primary',
          onClick: (event) => {
            event.preventDefault();
            const titleEl = document.getElementById('custom-topic-title');
            const errorEl = document.getElementById('custom-topic-error');
            const title = titleEl.value.trim();
            if (!title) {
              errorEl.textContent = 'נא להזין שם נושא';
              return false;
            }
            const newTopic = { id: genId(), subjectName, grade, title, addedAt: new Date().toISOString() };
            data = updateData((d) => {
              d.customTopics = [...d.customTopics, newTopic];
              return d;
            });
            onAdded();
          },
        },
      ],
    });
  }

  function renderSetup() {
    const quizSubjects = data.subjects.filter((s) => !QUIZ_EXCLUDED_SUBJECTS.includes(s.name));
    if (quizSubjects.length === 0) {
      container.innerHTML = `
        <header class="page-header"><div><h1 class="page-title">מחולל בחנים</h1></div></header>
        ${emptyStateHTML({ icon: '❓', title: 'אין עדיין מקצועות', description: 'עברי למסך "מקצועות" כדי להוסיף מקצוע לפני יצירת בוחן.' })}
      `;
      return;
    }

    let subject = quizSubjects[0].name;
    let showAllStatuses = false;
    let selectedTopicTitles = new Set();

    /** מעדכנת את המקסימום (ואת הרמז) של "מספר שאלות" לפי כמה שאלות באמת זמינות לצירוף הנוכחי של נושאים/רמת קושי/סוגים. */
    function updateCountMax() {
      const countEl = document.getElementById('quiz-count');
      const hintEl = document.getElementById('quiz-count-hint');
      if (!countEl || !hintEl) return;

      const difficulty = document.getElementById('quiz-difficulty').value;
      const types = [...document.querySelectorAll('.quiz-type-check:checked')].map((cb) => cb.value);
      const topics = [...selectedTopicTitles];
      const available = topics.length ? countAvailableQuestions({ subjectName: subject, topics, difficulty, types }) : 0;
      const max = Math.max(1, available);
      const previousMax = Number(countEl.max) || 1;

      countEl.max = String(max);
      if (Number(countEl.value) > max) {
        countEl.value = String(max);
      } else if (previousMax <= 1 && max > 1) {
        // מעבר ראשון מ"אין נושאים זמינים" לזמינות אמיתית - ברירת מחדל נוחה במקום להישאר תקועה על 1
        countEl.value = String(Math.min(5, max));
      }
      hintEl.textContent = available > 0 ? `זמינות עד ${available} שאלות בקריטריונים הנוכחיים` : 'בחרי נושא (עם שאלות זמינות) כדי לראות כמה שאלות אפשר לכלול';
    }

    function topicRowHTML(t) {
      const status = getTopicStatus(data, t.id);
      const isPersonal = t.confidence === 'personal';
      const questionsExist = hasQuestionsFor(subject, t.title);
      const checked = selectedTopicTitles.has(t.title);
      return `
        <div class="card" style="padding:12px;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px; flex-wrap:wrap;">
            <label style="display:flex; align-items:flex-start; gap:8px; ${questionsExist ? 'cursor:pointer;' : 'opacity:0.6;'}">
              <input type="checkbox" data-topic-check="${escapeHtml(t.title)}" ${checked ? 'checked' : ''} ${questionsExist ? '' : 'disabled'} style="margin-top:4px;">
              <span>
                <strong>${escapeHtml(t.title)}</strong>
                ${isPersonal ? '<span class="badge badge-neutral">נושא אישי</span>' : ''}
                ${!questionsExist ? '<p class="page-subtitle">עדיין אין שאלות מוכנות לנושא הזה</p>' : ''}
                ${t.subtopics.length ? `<p class="page-subtitle">תתי-נושאים: ${t.subtopics.map(escapeHtml).join(', ')}</p>` : ''}
              </span>
            </label>
            <select data-topic-status="${escapeHtml(t.id)}" aria-label="סטטוס למידה עבור ${escapeHtml(t.title)}">
              ${Object.entries(STATUS_LABELS).map(([k, l]) => `<option value="${k}" ${status === k ? 'selected' : ''}>${l}</option>`).join('')}
            </select>
          </div>
        </div>`;
    }

    function renderTopicsArea() {
      const topicsEl = document.getElementById('quiz-topics-area');
      const allTopics = allTopicsFor(data, subject, grade).filter((t) => getTopicStatus(data, t.id) !== 'hidden');
      const visibleTopics = showAllStatuses ? allTopics : allTopics.filter((t) => ['currently_learning', 'learned'].includes(getTopicStatus(data, t.id)));

      if (allTopics.length === 0) {
        const suggestions = suggestSimilarSubjects(subject).filter((s) => s !== subject);
        topicsEl.innerHTML = `
          ${emptyStateHTML({
            icon: '📭',
            title: 'עדיין לא נמצאו נושאים מאומתים למקצוע הזה ולכיתה שלך',
            description:
              suggestions.length > 0
                ? `לא נמצאה התאמה מדויקת בשם "${escapeHtml(subject)}". האם התכוונת ל: ${suggestions.map(escapeHtml).join(', ')}? אפשר גם לערוך את שם המקצוע במסך "מקצועות", או להוסיף נושא ידנית.`
                : 'אפשר להוסיף נושא ידנית, או לערוך את שם/פרטי המקצוע במסך "מקצועות".',
          })}
          <button id="add-custom-topic-btn" class="btn btn-secondary">+ הוספת נושא ידני</button>
        `;
        document.getElementById('add-custom-topic-btn').addEventListener('click', () => {
          openAddCustomTopicModal(subject, () => {
            showToast('הנושא נוסף', 'success');
            renderTopicsArea();
          });
        });
        return;
      }

      topicsEl.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <label style="display:flex; align-items:center; gap:6px; font-size:13px;">
            <input type="checkbox" id="show-all-statuses-check" ${showAllStatuses ? 'checked' : ''}>
            הצג את כל נושאי התוכנית (כולל "עדיין לא התחלתי")
          </label>
          <button id="add-custom-topic-btn-2" class="btn btn-secondary">+ נושא ידני</button>
        </div>
        <p class="page-subtitle" style="margin-bottom:10px;">הנושאים מבוססים על תוכניות לימודים כלליות שנכתבו ידנית - לא אומתו מול מקור רשמי בזמן אמת. ייתכן שסדר הלימוד בבית הספר שלך שונה.</p>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${visibleTopics.length ? visibleTopics.map(topicRowHTML).join('') : '<p class="placeholder-note">אין נושאים בסינון הנוכחי - נסי "הצג את כל נושאי התוכנית".</p>'}
        </div>
      `;

      document.getElementById('show-all-statuses-check').addEventListener('change', (e) => {
        showAllStatuses = e.target.checked;
        renderTopicsArea();
      });
      document.getElementById('add-custom-topic-btn-2').addEventListener('click', () => {
        openAddCustomTopicModal(subject, () => {
          showToast('הנושא נוסף', 'success');
          renderTopicsArea();
        });
      });
      topicsEl.querySelectorAll('[data-topic-check]').forEach((cb) => {
        cb.addEventListener('change', () => {
          if (cb.checked) selectedTopicTitles.add(cb.dataset.topicCheck);
          else selectedTopicTitles.delete(cb.dataset.topicCheck);
          updateCountMax();
        });
      });
      topicsEl.querySelectorAll('[data-topic-status]').forEach((sel) => {
        sel.addEventListener('change', () => {
          data = setTopicStatus(sel.dataset.topicStatus, sel.value);
          renderTopicsArea();
        });
      });
    }

    container.innerHTML = `
      <header class="page-header">
        <div>
          <h1 class="page-title">מחולל בחנים</h1>
          <p class="page-subtitle">${grade ? `מותאם למקצועות שלך ולכיתה ${escapeHtml(grade)}` : 'בחרי מקצוע ונושאים לתרגול'}</p>
        </div>
      </header>

      <div class="card">
        <div class="field">
          <label for="quiz-subject">מקצוע</label>
          <select id="quiz-subject">${quizSubjects.map((s) => `<option value="${escapeHtml(s.name)}">${escapeHtml(s.name)}</option>`).join('')}</select>
        </div>
        <div class="field">
          <label>נושאים (אפשר לבחור כמה)</label>
          <div id="quiz-topics-area"></div>
        </div>
        <div class="field">
          <label for="quiz-difficulty">רמת קושי</label>
          <select id="quiz-difficulty">${Object.entries(DIFFICULTY_LABELS).map(([k, l]) => `<option value="${k}">${l}</option>`).join('')}</select>
        </div>
        <div class="field">
          <label for="quiz-count">מספר שאלות</label>
          <input type="number" id="quiz-count" min="1" max="1" value="1">
          <p id="quiz-count-hint" class="page-subtitle"></p>
        </div>
        <div class="field">
          <label>סוגי שאלות</label>
          <div style="display:flex; gap:14px; flex-wrap:wrap;">
            ${Object.entries(TYPE_LABELS)
              .map(([k, l]) => `<label style="display:flex; align-items:center; gap:6px;"><input type="checkbox" value="${k}" class="quiz-type-check" checked>${l}</label>`)
              .join('')}
          </div>
        </div>
        <button id="quiz-start-btn" class="btn btn-primary">✨ התחלת בוחן</button>
      </div>

      <details class="card">
        <summary style="cursor:pointer; font-weight:700;">על סמך אילו נושאים זה מבוסס?</summary>
        <p class="page-subtitle" style="margin-top:8px;">רשימת הנושאים היא קטלוג מקומי שנכתב ידנית לפי תוכניות לימודים כלליות - <strong>היא לא נשלפה או אומתה מול מקור רשמי (כמו משרד החינוך) בזמן אמת</strong>, כי לאתר הזה אין חיבור לאינטרנט לחיפוש כזה. הכיסוי חלקי במכוון. נושאים שסימנת "אישי" הוספת בעצמך ואינם חלק מהקטלוג המשותף.</p>
      </details>

      ${renderHistory()}
    `;

    const subjectEl = document.getElementById('quiz-subject');
    renderTopicsArea();
    updateCountMax();

    subjectEl.addEventListener('change', () => {
      subject = subjectEl.value;
      selectedTopicTitles = new Set();
      renderTopicsArea();
      updateCountMax();
    });

    document.getElementById('quiz-difficulty').addEventListener('change', updateCountMax);
    document.querySelectorAll('.quiz-type-check').forEach((cb) => {
      cb.addEventListener('change', updateCountMax);
    });

    document.getElementById('quiz-start-btn').addEventListener('click', () => {
      const difficulty = document.getElementById('quiz-difficulty').value;
      const count = Number(document.getElementById('quiz-count').value) || 5;
      const types = [...document.querySelectorAll('.quiz-type-check:checked')].map((cb) => cb.value);

      if (selectedTopicTitles.size === 0) {
        showToast('בחרי לפחות נושא אחד', 'error');
        return;
      }
      if (types.length === 0) {
        showToast('בחרי לפחות סוג שאלה אחד', 'error');
        return;
      }

      const topics = [...selectedTopicTitles];
      const questions = pickQuestions({ subjectName: subject, topics, difficulty, types, count });
      if (questions.length === 0) {
        showToast('אין מספיק שאלות בקריטריונים האלה - נסי לשנות רמת קושי או סוגי שאלות', 'error');
        return;
      }

      const subjectObj = data.subjects.find((s) => s.name === subject);
      const quiz = { id: genId(), subjectId: subjectObj?.id ?? '', topics, questions };
      updateData((d) => {
        d.quizzes = [...d.quizzes, quiz];
        return d;
      });

      activeQuiz = quiz;
      renderTaking();
    });
  }

  function renderTaking() {
    container.innerHTML = `
      <header class="page-header">
        <div>
          <h1 class="page-title">בוחן: ${escapeHtml(activeQuiz.topics.join(', '))}</h1>
          <p class="page-subtitle">${activeQuiz.questions.length} שאלות - עני על כולן ולחצי על "בדיקת תשובות" בסוף.</p>
        </div>
      </header>

      ${activeQuiz.questions
        .map(
          (q, i) => `
        <div class="card">
          <p><strong>${i + 1}.</strong> ${escapeHtml(q.question)}</p>
          <span class="badge badge-neutral">${TYPE_LABELS[q.type]}</span>
          ${questionPromptHTML(q, i)}
        </div>`
        )
        .join('')}

      <button id="quiz-submit-btn" class="btn btn-primary">✅ בדיקת תשובות</button>
    `;

    document.getElementById('quiz-submit-btn').addEventListener('click', () => {
      const answers = activeQuiz.questions.map((q, i) => {
        const givenAnswer = readAnswer(q, i);
        const correct = isCorrect(q, givenAnswer);
        return { questionId: q.id, givenAnswer, correct };
      });

      const scorePercent = Math.round((answers.filter((a) => a.correct).length / answers.length) * 100);
      const attempt = { id: genId(), quizId: activeQuiz.id, date: todayISO(), scorePercent, answers };
      updateData((d) => {
        d.quizAttempts = [...d.quizAttempts, attempt];
        return d;
      });

      renderResults(attempt);
    });
  }

  function renderResults(attempt) {
    const encouraging = attempt.scorePercent >= 80 ? 'כל הכבוד, ביצוע מצוין! 🎉' : attempt.scorePercent >= 50 ? 'התחלה טובה - עוד קצת תרגול וזה יישב מצוין. 💪' : 'זה בסדר גמור לא לדעת הכל - זו בדיוק ההזדמנות ללמוד מה כדאי לחזק. 🌱';

    container.innerHTML = `
      <header class="page-header">
        <div>
          <h1 class="page-title">תוצאות הבוחן</h1>
          <p class="page-subtitle">${escapeHtml(activeQuiz.topics.join(', '))}</p>
        </div>
      </header>

      <div class="card" style="text-align:center;">
        <p style="font-size:40px; font-weight:800; color:var(--color-primary);">${attempt.scorePercent}%</p>
        <p class="page-subtitle">${encouraging}</p>
      </div>

      ${activeQuiz.questions
        .map((q, i) => {
          const answerRow = attempt.answers[i];
          return `
          <div class="card" style="border-color:${answerRow.correct ? 'var(--color-success)' : 'var(--color-danger)'};">
            <p><strong>${i + 1}. ${escapeHtml(q.question)}</strong> ${answerRow.correct ? '✅' : '❌'}</p>
            <p class="page-subtitle" style="margin-top:6px;">התשובה שלך: ${escapeHtml(givenAnswerLabel(q, answerRow.givenAnswer))}</p>
            ${!answerRow.correct ? `<p class="page-subtitle">התשובה הנכונה: ${escapeHtml(correctAnswerLabel(q))}</p>` : ''}
          </div>`;
        })
        .join('')}

      <div style="display:flex; gap:8px; margin-top:10px;">
        <button id="quiz-retry-btn" class="btn btn-primary">🔁 ניסיון נוסף באותם נושאים</button>
        <button id="quiz-new-btn" class="btn btn-secondary">🆕 בוחן חדש</button>
      </div>
    `;

    document.getElementById('quiz-retry-btn').addEventListener('click', () => {
      const subjectObj = data.subjects.find((s) => s.id === activeQuiz.subjectId);
      const questions = pickQuestions({
        subjectName: subjectObj?.name ?? '',
        topics: activeQuiz.topics,
        count: activeQuiz.questions.length,
        types: Object.keys(TYPE_LABELS),
      });
      if (questions.length === 0) {
        showToast('אין מספיק שאלות לנושאים האלה', 'error');
        return;
      }
      const quiz = { id: genId(), subjectId: activeQuiz.subjectId, topics: activeQuiz.topics, questions };
      updateData((d) => {
        d.quizzes = [...d.quizzes, quiz];
        return d;
      });
      activeQuiz = quiz;
      renderTaking();
    });

    document.getElementById('quiz-new-btn').addEventListener('click', () => {
      renderSetup();
    });
  }

  renderSetup();
}
