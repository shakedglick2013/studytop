import { getData, updateData, genId } from '../data/storage.js';
import { todayISO, formatDateWithDay } from '../utils/dateUtils.js';
import { getSubjectById } from '../utils/subjectUtils.js';
import { planHomework } from '../utils/homeworkPlanner.js';
import { openModal, confirmDialog } from '../components/modal.js';
import { showToast } from '../components/toast.js';
import { emptyStateHTML } from '../components/emptyState.js';
import { escapeHtml } from '../utils/htmlUtils.js';

function generatePlan(container) {
  const data = getData();
  if (data.settings.freeHours.length === 0) {
    showToast('כדי לתזמן צריך להגדיר קודם שעות פנויות במסך "הגדרות"', 'error');
    return;
  }
  if (data.homeworkTasks.filter((t) => t.status !== 'done').length === 0) {
    showToast('אין כרגע שיעורי בית פתוחים לתזמון', 'error');
    return;
  }

  const confirmedBlocks = data.scheduledStudyBlocks.filter((b) => b.userConfirmed);
  const proposals = planHomework({
    tasks: data.homeworkTasks,
    lessons: data.lessons,
    exams: data.exams,
    subjects: data.subjects,
    settings: data.settings,
    existingBlocks: confirmedBlocks,
    today: todayISO(),
    genId,
  });

  updateData((d) => {
    // מחליפים הצעות ישנות (לא מאושרות) בהצעות החדשות, ושומרים על מה שכבר אושר
    d.scheduledStudyBlocks = [...confirmedBlocks, ...proposals];
    return d;
  });

  showToast(`נוצרה הצעת תזמון ל-${proposals.length} מקטעי לימוד`, 'success');
  render(container);
}

function acceptBlock(container, blockId) {
  updateData((d) => {
    d.scheduledStudyBlocks = d.scheduledStudyBlocks.map((b) => (b.id === blockId ? { ...b, userConfirmed: true } : b));
    return d;
  });
  showToast('התזמון אושר', 'success');
  render(container);
}

function removeBlock(container, blockId) {
  updateData((d) => {
    d.scheduledStudyBlocks = d.scheduledStudyBlocks.filter((b) => b.id !== blockId);
    return d;
  });
  render(container);
}

function editBlockTime(container, block) {
  openModal({
    title: 'שינוי זמן לימוד',
    bodyHtml: `
      <form id="block-form">
        <div class="field">
          <label for="block-date">תאריך</label>
          <input type="date" id="block-date" value="${block.date}" required>
        </div>
        <div class="field">
          <label for="block-time">שעת התחלה</label>
          <input type="time" id="block-time" value="${block.startTime}" required>
        </div>
      </form>
    `,
    actions: [
      { label: 'ביטול', className: 'btn-secondary' },
      {
        label: 'שמירה',
        className: 'btn-primary',
        onClick: (event) => {
          event.preventDefault();
          const date = document.getElementById('block-date').value;
          const startTime = document.getElementById('block-time').value;
          updateData((d) => {
            d.scheduledStudyBlocks = d.scheduledStudyBlocks.map((b) =>
              b.id === block.id ? { ...b, date, startTime, userConfirmed: true, reason: 'זמן שנבחר ידנית' } : b
            );
            return d;
          });
          showToast('הזמן עודכן', 'success');
          render(container);
        },
      },
    ],
  });
}

function blockRowHTML(block, task, subject) {
  return `
    <div class="card">
      <div style="display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap;">
        <div>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="subject-dot" style="background:${subject?.color ?? '#999'}"></span>
            <strong>${escapeHtml(subject?.name ?? 'מקצוע')}</strong>
            <span class="badge ${block.userConfirmed ? 'badge-success' : 'badge-warning'}">${block.userConfirmed ? 'מאושר' : 'הצעה'}</span>
          </div>
          <p style="margin-top:4px;">${escapeHtml(task?.description ?? 'משימה נמחקה')}</p>
          <p class="page-subtitle" style="margin-top:4px;">${formatDateWithDay(block.date)}, ${block.startTime} · ${block.durationMinutes} דק׳</p>
          <p class="page-subtitle" style="margin-top:4px;">${escapeHtml(block.reason)}</p>
        </div>
        <div style="display:flex; flex-direction:column; gap:4px;">
          ${!block.userConfirmed ? `<button class="btn btn-secondary" data-accept="${block.id}">✅ אישור</button>` : ''}
          <button class="btn btn-secondary" data-edit-time="${block.id}">🕒 שינוי זמן</button>
          <button class="btn btn-danger" data-remove="${block.id}">הסרה</button>
        </div>
      </div>
    </div>
  `;
}

export function render(container) {
  const data = getData();
  const blocks = [...data.scheduledStudyBlocks].sort((a, b) => (a.date + a.startTime).localeCompare(b.date + b.startTime));

  container.innerHTML = `
    <header class="page-header">
      <div>
        <h1 class="page-title">מתכנן שבועי חכם</h1>
        <p class="page-subtitle">הצעות תזמון לשיעורי בית, לפי מערכת השעות, מבחנים קרובים והשעות הפנויות שלך.</p>
      </div>
      <button id="generate-plan-btn" class="btn btn-primary">✨ יצירת הצעת תזמון</button>
    </header>

    ${
      blocks.length
        ? blocks
            .map((b) => {
              const task = data.homeworkTasks.find((t) => t.id === b.homeworkTaskId);
              return blockRowHTML(b, task, getSubjectById(data.subjects, task?.subjectId));
            })
            .join('')
        : emptyStateHTML({ icon: '🧠', title: 'עדיין אין תזמון', description: 'לחצי על "יצירת הצעת תזמון" כדי לקבל המלצות מתי לעשות כל שיעורי בית.' })
    }
  `;

  document.getElementById('generate-plan-btn').addEventListener('click', () => generatePlan(container));

  container.querySelectorAll('[data-accept]').forEach((btn) => {
    btn.addEventListener('click', () => acceptBlock(container, btn.dataset.accept));
  });

  container.querySelectorAll('[data-edit-time]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const block = data.scheduledStudyBlocks.find((b) => b.id === btn.dataset.editTime);
      editBlockTime(container, block);
    });
  });

  container.querySelectorAll('[data-remove]').forEach((btn) => {
    btn.addEventListener('click', () => {
      confirmDialog({
        title: 'הסרת תזמון',
        message: 'להסיר את מקטע הלימוד הזה מהתזמון?',
        confirmLabel: 'הסרה',
        onConfirm: () => removeBlock(container, btn.dataset.remove),
      });
    });
  });
}
