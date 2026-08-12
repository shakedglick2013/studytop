import { getData, updateData, genId } from '../data/storage.js';
import { todayISO, formatDateShort } from '../utils/dateUtils.js';
import { subjectAverage } from '../utils/gradeCalc.js';
import { openModal, confirmDialog } from '../components/modal.js';
import { showToast } from '../components/toast.js';
import { emptyStateHTML } from '../components/emptyState.js';
import { escapeHtml } from '../utils/htmlUtils.js';

const DEFAULT_COLOR = '#4f6df5';

function subjectFormBody(subject) {
  return `
    <form id="subject-form">
      <div class="field">
        <label for="subject-name">שם המקצוע</label>
        <input type="text" id="subject-name" value="${escapeHtml(subject?.name ?? '')}" required>
      </div>
      <div class="field">
        <label for="subject-teacher">מורה (לא חובה)</label>
        <input type="text" id="subject-teacher" value="${escapeHtml(subject?.teacher ?? '')}">
      </div>
      <div class="field">
        <label for="subject-color">צבע</label>
        <input type="color" id="subject-color" value="${subject?.color ?? DEFAULT_COLOR}" style="height:42px; padding:4px;">
      </div>
      <p id="subject-form-error" class="field-error"></p>
    </form>
  `;
}

function openSubjectModal(container, subject) {
  openModal({
    title: subject ? 'עריכת מקצוע' : 'הוספת מקצוע',
    bodyHtml: subjectFormBody(subject),
    actions: [
      { label: 'ביטול', className: 'btn-secondary' },
      {
        label: subject ? 'שמירה' : 'הוספה',
        className: 'btn-primary',
        onClick: (event) => {
          event.preventDefault();
          const errorEl = document.getElementById('subject-form-error');
          const name = document.getElementById('subject-name').value.trim();
          if (!name) {
            errorEl.textContent = 'צריך לכתוב שם מקצוע';
            return false;
          }

          const newSubject = {
            id: subject?.id ?? genId(),
            name,
            teacher: document.getElementById('subject-teacher').value.trim() || undefined,
            color: document.getElementById('subject-color').value,
          };

          updateData((d) => {
            d.subjects = subject ? d.subjects.map((s) => (s.id === subject.id ? newSubject : s)) : [...d.subjects, newSubject];
            return d;
          });

          showToast(subject ? 'המקצוע עודכן' : 'המקצוע נוסף', 'success');
          render(container);
        },
      },
    ],
  });
}

function deleteSubject(container, subject) {
  const data = getData();
  const lessonsCount = data.lessons.filter((l) => l.subjectId === subject.id).length;
  const tasksCount = data.homeworkTasks.filter((t) => t.subjectId === subject.id).length;
  const examsCount = data.exams.filter((e) => e.subjectId === subject.id).length;
  const gradesCount = data.grades.filter((g) => g.subjectId === subject.id).length;
  const quizzesCount = data.quizzes.filter((q) => q.subjectId === subject.id).length;

  confirmDialog({
    title: `מחיקת "${subject.name}"`,
    message: `זה ימחק גם ${lessonsCount} שיעורים, ${tasksCount} משימות שיעורי בית, ${examsCount} מבחנים, ${gradesCount} ציונים ו-${quizzesCount} בחנים ששייכים למקצוע הזה. אי אפשר לבטל את זה - להמשיך?`,
    confirmLabel: 'מחיקה סופית',
    onConfirm: () => {
      updateData((d) => {
        const taskIds = new Set(d.homeworkTasks.filter((t) => t.subjectId === subject.id).map((t) => t.id));
        const quizIds = new Set(d.quizzes.filter((q) => q.subjectId === subject.id).map((q) => q.id));
        d.subjects = d.subjects.filter((s) => s.id !== subject.id);
        d.lessons = d.lessons.filter((l) => l.subjectId !== subject.id);
        d.homeworkTasks = d.homeworkTasks.filter((t) => t.subjectId !== subject.id);
        d.scheduledStudyBlocks = d.scheduledStudyBlocks.filter((b) => !taskIds.has(b.homeworkTaskId));
        d.exams = d.exams.filter((e) => e.subjectId !== subject.id);
        d.grades = d.grades.filter((g) => g.subjectId !== subject.id);
        d.quizzes = d.quizzes.filter((q) => q.subjectId !== subject.id);
        d.quizAttempts = d.quizAttempts.filter((a) => !quizIds.has(a.quizId));
        return d;
      });
      showToast('המקצוע וכל הנתונים שלו נמחקו', 'success');
      render(container);
    },
  });
}

function subjectCardHTML(subject, data, today) {
  const lessonsCount = data.lessons.filter((l) => l.subjectId === subject.id).length;
  const openTasks = data.homeworkTasks.filter((t) => t.subjectId === subject.id && t.status !== 'done').length;
  const upcomingExams = data.exams.filter((e) => e.subjectId === subject.id && e.date >= today).sort((a, b) => (a.date < b.date ? -1 : 1));
  const average = subjectAverage(data.grades, subject.id);
  const subjectQuizIds = new Set(data.quizzes.filter((q) => q.subjectId === subject.id).map((q) => q.id));
  const lastAttempt = data.quizAttempts.filter((a) => subjectQuizIds.has(a.quizId)).sort((a, b) => (a.date < b.date ? 1 : -1))[0];

  return `
    <div class="card">
      <div class="page-header" style="margin-bottom:10px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="subject-dot" style="background:${subject.color}"></span>
          <h3>${escapeHtml(subject.name)}</h3>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="btn btn-icon btn-secondary" data-edit="${subject.id}" aria-label="עריכת מקצוע">✏️</button>
          <button class="btn btn-icon btn-secondary" data-delete="${subject.id}" aria-label="מחיקת מקצוע">🗑️</button>
        </div>
      </div>
      ${subject.teacher ? `<p class="page-subtitle">מורה: ${escapeHtml(subject.teacher)}</p>` : ''}
      <div class="card-grid" style="margin-top:12px; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));">
        <div><p class="page-subtitle">שיעורים בשבוע</p><p style="font-weight:700;">${lessonsCount}</p></div>
        <div><p class="page-subtitle">משימות פתוחות</p><p style="font-weight:700;">${openTasks}</p></div>
        <div><p class="page-subtitle">ממוצע נוכחי</p><p style="font-weight:700;">${average !== null ? average.toFixed(1) : '—'}</p></div>
        <div><p class="page-subtitle">בוחן אחרון</p><p style="font-weight:700;">${lastAttempt ? `${Math.round(lastAttempt.scorePercent)}%` : '—'}</p></div>
      </div>
      ${
        upcomingExams.length
          ? `<p class="page-subtitle" style="margin-top:10px;">מבחן קרוב: ${escapeHtml(upcomingExams[0].topic ?? '')} · ${formatDateShort(upcomingExams[0].date)}</p>`
          : ''
      }
    </div>
  `;
}

export function render(container) {
  const data = getData();
  const today = todayISO();

  container.innerHTML = `
    <header class="page-header">
      <div>
        <h1 class="page-title">מקצועות</h1>
        <p class="page-subtitle">כל המקצועות שלך, עם סיכום מהיר של מה שקורה בכל אחד.</p>
      </div>
      <button id="add-subject-btn" class="btn btn-primary">+ הוספת מקצוע</button>
    </header>

    ${
      data.subjects.length
        ? `<div class="card-grid">${data.subjects.map((s) => subjectCardHTML(s, data, today)).join('')}</div>`
        : emptyStateHTML({ icon: '📚', title: 'אין עדיין מקצועות', description: 'לחצי על "הוספת מקצוע" כדי להתחיל.' })
    }
  `;

  document.getElementById('add-subject-btn').addEventListener('click', () => openSubjectModal(container, null));

  container.querySelectorAll('[data-edit]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const subject = data.subjects.find((s) => s.id === btn.dataset.edit);
      openSubjectModal(container, subject);
    });
  });

  container.querySelectorAll('[data-delete]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const subject = data.subjects.find((s) => s.id === btn.dataset.delete);
      deleteSubject(container, subject);
    });
  });
}
