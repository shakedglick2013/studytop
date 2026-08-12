import { getData, updateData, genId } from '../data/storage.js';
import { formatDateShort, todayISO } from '../utils/dateUtils.js';
import { subjectAverage, overallAverage, subjectWeightSum, pointsNeededForGoal } from '../utils/gradeCalc.js';
import { openModal, confirmDialog } from '../components/modal.js';
import { showToast } from '../components/toast.js';
import { emptyStateHTML } from '../components/emptyState.js';
import { escapeHtml } from '../utils/htmlUtils.js';

const TYPE_OPTIONS = ['מבחן', 'מטלה', 'בוחן', 'אחר'];

function gradeFormBody(subjects, grade) {
  const subjectOptions = subjects
    .map((s) => `<option value="${s.id}" ${grade?.subjectId === s.id ? 'selected' : ''}>${escapeHtml(s.name)}</option>`)
    .join('');
  const typeOptions = TYPE_OPTIONS.map((t) => `<option value="${t}" ${grade?.type === t ? 'selected' : ''}>${t}</option>`).join('');

  return `
    <form id="grade-form">
      <div class="field">
        <label for="grade-subject">מקצוע</label>
        <select id="grade-subject" required>${subjectOptions}</select>
      </div>
      <div class="field">
        <label for="grade-title">שם המטלה/מבחן</label>
        <input type="text" id="grade-title" value="${escapeHtml(grade?.title ?? '')}" required>
      </div>
      <div class="field">
        <label for="grade-score">ציון (0-100)</label>
        <input type="number" id="grade-score" min="0" max="100" value="${grade?.score ?? ''}" required>
      </div>
      <div class="field">
        <label for="grade-weight">משקל באחוזים</label>
        <input type="number" id="grade-weight" min="0" max="100" value="${grade?.weightPercent ?? ''}" required>
      </div>
      <div class="field">
        <label for="grade-type">סוג</label>
        <select id="grade-type">${typeOptions}</select>
      </div>
      <div class="field">
        <label for="grade-date">תאריך</label>
        <input type="date" id="grade-date" value="${grade?.date ?? todayISO()}" required>
      </div>
      <p id="grade-form-error" class="field-error"></p>
    </form>
  `;
}

function openGradeModal(container, grade) {
  const data = getData();
  if (data.subjects.length === 0) {
    showToast('כדי להוסיף ציון צריך קודם להוסיף מקצוע במסך "מקצועות"', 'error');
    return;
  }

  openModal({
    title: grade ? 'עריכת ציון' : 'הוספת ציון',
    bodyHtml: gradeFormBody(data.subjects, grade),
    actions: [
      { label: 'ביטול', className: 'btn-secondary' },
      {
        label: grade ? 'שמירה' : 'הוספה',
        className: 'btn-primary',
        onClick: (event) => {
          event.preventDefault();
          const errorEl = document.getElementById('grade-form-error');
          const title = document.getElementById('grade-title').value.trim();
          const score = Number(document.getElementById('grade-score').value);
          const weightPercent = Number(document.getElementById('grade-weight').value);

          if (!title) {
            errorEl.textContent = 'צריך לכתוב שם למטלה/מבחן';
            return false;
          }
          if (Number.isNaN(score) || score < 0 || score > 100) {
            errorEl.textContent = 'הציון צריך להיות מספר בין 0 ל-100';
            return false;
          }
          if (Number.isNaN(weightPercent) || weightPercent < 0 || weightPercent > 100) {
            errorEl.textContent = 'המשקל צריך להיות מספר בין 0 ל-100';
            return false;
          }

          const newGrade = {
            id: grade?.id ?? genId(),
            subjectId: document.getElementById('grade-subject').value,
            title,
            score,
            weightPercent,
            type: document.getElementById('grade-type').value,
            date: document.getElementById('grade-date').value,
          };

          updateData((d) => {
            d.grades = grade ? d.grades.map((g) => (g.id === grade.id ? newGrade : g)) : [...d.grades, newGrade];
            return d;
          });

          showToast(grade ? 'הציון עודכן' : 'הציון נוסף', 'success');
          render(container);
        },
      },
    ],
  });
}

function deleteGrade(container, gradeId) {
  confirmDialog({
    title: 'מחיקת ציון',
    message: 'למחוק את הציון הזה?',
    onConfirm: () => {
      updateData((d) => {
        d.grades = d.grades.filter((g) => g.id !== gradeId);
        return d;
      });
      showToast('הציון נמחק', 'success');
      render(container);
    },
  });
}

function subjectCardHTML(subject, grades) {
  const subjectGrades = grades.filter((g) => g.subjectId === subject.id).sort((a, b) => (a.date < b.date ? 1 : -1));
  const avg = subjectAverage(grades, subject.id);
  const weightSum = subjectWeightSum(grades, subject.id);
  const showWeightWarning = subjectGrades.length > 0 && weightSum !== 100;

  return `
    <div class="card">
      <div class="page-header" style="margin-bottom:10px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="subject-dot" style="background:${subject.color}"></span>
          <h3>${escapeHtml(subject.name)}</h3>
        </div>
        <p style="font-size:20px; font-weight:800; color:var(--color-primary);">${avg !== null ? avg.toFixed(1) : '—'}</p>
      </div>

      ${
        showWeightWarning
          ? `<p class="badge badge-warning" style="margin-bottom:10px;">שימו לב: סך המשקלים במקצוע הזה הוא ${weightSum}% ולא 100% - הממוצע עדיין מחושב, אבל כדאי לבדוק שהמשקלים נכונים.</p>`
          : ''
      }

      ${
        subjectGrades.length
          ? `<div style="display:flex; flex-direction:column; gap:8px;">
              ${subjectGrades
                .map(
                  (g) => `
                <div style="display:flex; justify-content:space-between; align-items:center; gap:8px; padding:8px 0; border-bottom:1px solid var(--color-border);">
                  <div>
                    <strong>${escapeHtml(g.title)}</strong>
                    <span class="badge badge-neutral">${escapeHtml(g.type)}</span>
                    <p class="page-subtitle">${formatDateShort(g.date)} · משקל ${g.weightPercent}%</p>
                  </div>
                  <div style="display:flex; align-items:center; gap:8px;">
                    <span style="font-weight:700; font-size:18px;">${g.score}</span>
                    <button class="btn btn-icon btn-secondary" data-edit="${g.id}" aria-label="עריכת ציון">✏️</button>
                    <button class="btn btn-icon btn-secondary" data-delete="${g.id}" aria-label="מחיקת ציון">🗑️</button>
                  </div>
                </div>`
                )
                .join('')}
            </div>`
          : `<p class="placeholder-note">אין עדיין ציונים במקצוע הזה</p>`
      }
    </div>
  `;
}

export function render(container) {
  const data = getData();
  const overall = overallAverage(data.grades, data.subjects);

  container.innerHTML = `
    <header class="page-header">
      <div>
        <h1 class="page-title">מחשבון ציונים</h1>
        <p class="page-subtitle">מעקב אחרי ציונים לפי מקצוע, בלי השוואות ובלי לחץ - רק מידע שיעזור לך.</p>
      </div>
      <button id="add-grade-btn" class="btn btn-primary">+ הוספת ציון</button>
    </header>

    <div class="card-grid">
      <div class="card">
        <h3 style="margin-bottom:10px;">ממוצע כללי</h3>
        <p style="font-size:32px; font-weight:800; color:var(--color-primary);">${overall !== null ? overall.toFixed(1) : '—'}</p>
        <p class="page-subtitle">ממוצע של ממוצעי כל המקצועות</p>
      </div>

      <div class="card">
        <h3 style="margin-bottom:10px;">כמה חסר ליעד?</h3>
        <div class="field" style="margin-bottom:8px;">
          <label for="goal-input">ציון יעד</label>
          <input type="number" id="goal-input" min="0" max="100" placeholder="למשל 90">
        </div>
        <p id="goal-result" class="page-subtitle"></p>
      </div>
    </div>

    <div style="margin-top:16px; display:flex; flex-direction:column; gap:16px;">
      ${
        data.subjects.length
          ? data.subjects.map((s) => subjectCardHTML(s, data.grades)).join('')
          : emptyStateHTML({ icon: '📊', title: 'אין עדיין מקצועות', description: 'עברו למסך "מקצועות" כדי להוסיף מקצוע לפני הוספת ציונים.' })
      }
    </div>
  `;

  document.getElementById('add-grade-btn').addEventListener('click', () => openGradeModal(container, null));

  container.querySelectorAll('[data-edit]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const grade = data.grades.find((g) => g.id === btn.dataset.edit);
      openGradeModal(container, grade);
    });
  });

  container.querySelectorAll('[data-delete]').forEach((btn) => {
    btn.addEventListener('click', () => deleteGrade(container, btn.dataset.delete));
  });

  const goalInput = document.getElementById('goal-input');
  const goalResult = document.getElementById('goal-result');
  goalInput.addEventListener('input', () => {
    const target = Number(goalInput.value);
    if (goalInput.value.trim() === '' || Number.isNaN(target)) {
      goalResult.textContent = '';
      return;
    }
    if (overall === null) {
      goalResult.textContent = 'עדיין אין ציונים לחשב מהם.';
      return;
    }
    const needed = pointsNeededForGoal(overall, target);
    goalResult.textContent =
      needed > 0 ? `חסרות עוד כ-${needed} נקודות ממוצע כדי להגיע ל-${target}. את בדרך הנכונה! 💪` : `כל הכבוד, הממוצע שלך כבר ${overall.toFixed(1)} - מעל היעד! 🎉`;
  });
}
