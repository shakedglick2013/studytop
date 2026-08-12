import { getData, updateData, genId } from '../data/storage.js';
import { todayISO, daysFromToday, formatDateWithDay } from '../utils/dateUtils.js';
import { getSubjectById } from '../utils/subjectUtils.js';
import { openModal, confirmDialog } from '../components/modal.js';
import { showToast } from '../components/toast.js';
import { emptyStateHTML } from '../components/emptyState.js';
import { escapeHtml } from '../utils/htmlUtils.js';

const DIFFICULTY_LABELS = { easy: 'קל', medium: 'בינוני', hard: 'קשה' };
const PRIORITY_LABELS = { low: 'נמוכה', medium: 'בינונית', high: 'גבוהה' };
const STATUS_LABELS = { todo: 'לא התחלתי', in_progress: 'בתהליך', done: 'הושלם' };

function taskFormBody(subjects, task) {
  const subjectOptions = subjects
    .map((s) => `<option value="${s.id}" ${task?.subjectId === s.id ? 'selected' : ''}>${escapeHtml(s.name)}</option>`)
    .join('');
  const optionsFor = (labels, current) =>
    Object.entries(labels)
      .map(([value, label]) => `<option value="${value}" ${current === value ? 'selected' : ''}>${label}</option>`)
      .join('');

  return `
    <form id="task-form">
      <div class="field">
        <label for="task-subject">מקצוע</label>
        <select id="task-subject" required>${subjectOptions}</select>
      </div>
      <div class="field">
        <label for="task-desc">תיאור המשימה</label>
        <textarea id="task-desc" required>${escapeHtml(task?.description ?? '')}</textarea>
      </div>
      <div class="field">
        <label for="task-due">תאריך הגשה</label>
        <input type="date" id="task-due" value="${task?.dueDate ?? todayISO()}" required>
      </div>
      <div class="field">
        <label for="task-minutes">זמן משוער (בדקות)</label>
        <input type="number" id="task-minutes" min="5" step="5" value="${task?.estimatedMinutes ?? 30}" required>
      </div>
      <div class="field">
        <label for="task-difficulty">רמת קושי</label>
        <select id="task-difficulty">${optionsFor(DIFFICULTY_LABELS, task?.difficulty ?? 'medium')}</select>
      </div>
      <div class="field">
        <label for="task-priority">עדיפות</label>
        <select id="task-priority">${optionsFor(PRIORITY_LABELS, task?.priority ?? 'medium')}</select>
      </div>
      <div class="field">
        <label for="task-status">סטטוס</label>
        <select id="task-status">${optionsFor(STATUS_LABELS, task?.status ?? 'todo')}</select>
      </div>
      <div class="field">
        <label for="task-notes">הערות (לא חובה)</label>
        <textarea id="task-notes">${escapeHtml(task?.notes ?? '')}</textarea>
      </div>
      <p id="task-form-error" class="field-error"></p>
    </form>
  `;
}

function openTaskModal(container, task) {
  const data = getData();
  if (data.subjects.length === 0) {
    showToast('כדי להוסיף משימה צריך קודם להוסיף מקצוע במסך "מקצועות"', 'error');
    return;
  }

  openModal({
    title: task ? 'עריכת משימה' : 'הוספת שיעורי בית',
    bodyHtml: taskFormBody(data.subjects, task),
    actions: [
      { label: 'ביטול', className: 'btn-secondary' },
      {
        label: task ? 'שמירה' : 'הוספה',
        className: 'btn-primary',
        onClick: (event) => {
          event.preventDefault();
          const errorEl = document.getElementById('task-form-error');
          const description = document.getElementById('task-desc').value.trim();
          if (!description) {
            errorEl.textContent = 'צריך לכתוב תיאור למשימה';
            return false;
          }

          const newTask = {
            id: task?.id ?? genId(),
            subjectId: document.getElementById('task-subject').value,
            description,
            dueDate: document.getElementById('task-due').value,
            estimatedMinutes: Number(document.getElementById('task-minutes').value) || 30,
            difficulty: document.getElementById('task-difficulty').value,
            priority: document.getElementById('task-priority').value,
            status: document.getElementById('task-status').value,
            notes: document.getElementById('task-notes').value.trim() || undefined,
          };

          updateData((d) => {
            d.homeworkTasks = task ? d.homeworkTasks.map((t) => (t.id === task.id ? newTask : t)) : [...d.homeworkTasks, newTask];
            return d;
          });

          showToast(task ? 'המשימה עודכנה' : 'המשימה נוספה', 'success');
          render(container);
        },
      },
    ],
  });
}

function deleteTask(container, taskId) {
  confirmDialog({
    title: 'מחיקת משימה',
    message: 'למחוק את משימת שיעורי הבית הזו?',
    onConfirm: () => {
      updateData((d) => {
        d.homeworkTasks = d.homeworkTasks.filter((t) => t.id !== taskId);
        d.scheduledStudyBlocks = d.scheduledStudyBlocks.filter((b) => b.homeworkTaskId !== taskId);
        return d;
      });
      showToast('המשימה נמחקה', 'success');
      render(container);
    },
  });
}

function toggleDone(container, taskId) {
  updateData((d) => {
    d.homeworkTasks = d.homeworkTasks.map((t) => (t.id === taskId ? { ...t, status: t.status === 'done' ? 'todo' : 'done' } : t));
    return d;
  });
  render(container);
}

function taskRowHTML(task, subject) {
  const diff = daysFromToday(task.dueDate);
  const isOverdue = diff < 0 && task.status !== 'done';
  const dueLabel = diff < 0 ? `באיחור ${Math.abs(diff)} ימים` : diff === 0 ? 'להגשה היום' : `בעוד ${diff} ימים`;

  return `
    <div class="card" style="${isOverdue ? 'border-color:var(--color-danger);' : ''}">
      <div style="display:flex; justify-content:space-between; gap:10px; align-items:flex-start;">
        <div style="display:flex; gap:10px; align-items:flex-start;">
          <input type="checkbox" data-toggle="${task.id}" ${task.status === 'done' ? 'checked' : ''} aria-label="סימון כהושלם" style="margin-top:4px;">
          <div>
            <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
              <span class="subject-dot" style="background:${subject?.color ?? '#999'}"></span>
              <strong>${escapeHtml(subject?.name ?? 'מקצוע')}</strong>
              <span class="badge badge-neutral">${DIFFICULTY_LABELS[task.difficulty]}</span>
              <span class="badge badge-neutral">עדיפות ${PRIORITY_LABELS[task.priority]}</span>
              <span class="badge ${isOverdue ? 'badge-danger' : 'badge-neutral'}">${dueLabel}</span>
              <span class="badge badge-neutral">${STATUS_LABELS[task.status]}</span>
            </div>
            <p style="margin-top:6px; ${task.status === 'done' ? 'text-decoration:line-through; color:var(--color-text-muted);' : ''}">${escapeHtml(task.description)}</p>
            ${task.notes ? `<p class="page-subtitle" style="margin-top:4px;">${escapeHtml(task.notes)}</p>` : ''}
            <p class="page-subtitle" style="margin-top:4px;">הגשה: ${formatDateWithDay(task.dueDate)} · זמן משוער: ${task.estimatedMinutes} דק׳</p>
          </div>
        </div>
        <div style="display:flex; gap:4px;">
          <button class="btn btn-icon btn-secondary" data-edit="${task.id}" aria-label="עריכת משימה">✏️</button>
          <button class="btn btn-icon btn-secondary" data-delete="${task.id}" aria-label="מחיקת משימה">🗑️</button>
        </div>
      </div>
    </div>
  `;
}

export function render(container) {
  const data = getData();
  const tasks = [...data.homeworkTasks].sort((a, b) => (a.dueDate < b.dueDate ? -1 : 1));

  container.innerHTML = `
    <header class="page-header">
      <div>
        <h1 class="page-title">שיעורי בית</h1>
        <p class="page-subtitle">כל המשימות שלך במקום אחד</p>
      </div>
      <button id="add-task-btn" class="btn btn-primary">+ הוספת משימה</button>
    </header>

    ${
      tasks.length
        ? tasks.map((t) => taskRowHTML(t, getSubjectById(data.subjects, t.subjectId))).join('')
        : emptyStateHTML({ icon: '📝', title: 'אין עדיין שיעורי בית', description: 'לחצי על "הוספת משימה" כדי להתחיל.' })
    }
  `;

  document.getElementById('add-task-btn').addEventListener('click', () => openTaskModal(container, null));

  container.querySelectorAll('[data-edit]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const task = data.homeworkTasks.find((t) => t.id === btn.dataset.edit);
      openTaskModal(container, task);
    });
  });

  container.querySelectorAll('[data-delete]').forEach((btn) => {
    btn.addEventListener('click', () => deleteTask(container, btn.dataset.delete));
  });

  container.querySelectorAll('[data-toggle]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => toggleDone(container, checkbox.dataset.toggle));
  });
}
