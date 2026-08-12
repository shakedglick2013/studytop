import { getData, updateData, genId } from '../data/storage.js';
import { DAY_NAMES_HE, timeToMinutes } from '../utils/dateUtils.js';
import { getSubjectById } from '../utils/subjectUtils.js';
import { openModal, confirmDialog } from '../components/modal.js';
import { showToast } from '../components/toast.js';
import { emptyStateHTML } from '../components/emptyState.js';
import { escapeHtml } from '../utils/htmlUtils.js';

const SCHOOL_DAYS = [0, 1, 2, 3, 4, 5]; // ראשון עד שישי

function lessonsOverlap(a, b) {
  if (a.day !== b.day) return false;
  const aStart = timeToMinutes(a.startTime);
  const aEnd = timeToMinutes(a.endTime);
  const bStart = timeToMinutes(b.startTime);
  const bEnd = timeToMinutes(b.endTime);
  return aStart < bEnd && bStart < aEnd;
}

function conflictsFor(lesson, allLessons) {
  return allLessons.filter((l) => l.id !== lesson.id && lessonsOverlap(l, lesson));
}

function lessonFormBody(subjects, lesson) {
  const subjectOptions = subjects
    .map((s) => `<option value="${s.id}" ${lesson?.subjectId === s.id ? 'selected' : ''}>${escapeHtml(s.name)}</option>`)
    .join('');
  const dayOptions = SCHOOL_DAYS.map(
    (d) => `<option value="${d}" ${lesson?.day === d ? 'selected' : ''}>${DAY_NAMES_HE[d]}</option>`
  ).join('');

  return `
    <form id="lesson-form">
      <div class="field">
        <label for="lesson-subject">מקצוע</label>
        <select id="lesson-subject" required>${subjectOptions}</select>
      </div>
      <div class="field">
        <label for="lesson-day">יום</label>
        <select id="lesson-day" required>${dayOptions}</select>
      </div>
      <div class="field">
        <label for="lesson-start">שעת התחלה</label>
        <input type="time" id="lesson-start" value="${lesson?.startTime ?? '08:00'}" required>
      </div>
      <div class="field">
        <label for="lesson-end">שעת סיום</label>
        <input type="time" id="lesson-end" value="${lesson?.endTime ?? '08:45'}" required>
      </div>
      <div class="field">
        <label for="lesson-teacher">מורה (לא חובה)</label>
        <input type="text" id="lesson-teacher" value="${escapeHtml(lesson?.teacher ?? '')}">
      </div>
      <div class="field">
        <label for="lesson-room">חדר (לא חובה)</label>
        <input type="text" id="lesson-room" value="${escapeHtml(lesson?.room ?? '')}">
      </div>
      <p id="lesson-form-error" class="field-error"></p>
    </form>
  `;
}

function openLessonModal(container, lesson) {
  const data = getData();
  if (data.subjects.length === 0) {
    showToast('כדי להוסיף שיעור צריך קודם להוסיף מקצוע במסך "מקצועות"', 'error');
    return;
  }

  openModal({
    title: lesson ? 'עריכת שיעור' : 'הוספת שיעור',
    bodyHtml: lessonFormBody(data.subjects, lesson),
    actions: [
      { label: 'ביטול', className: 'btn-secondary' },
      {
        label: lesson ? 'שמירה' : 'הוספה',
        className: 'btn-primary',
        onClick: (event) => {
          event.preventDefault();
          const errorEl = document.getElementById('lesson-form-error');
          const subjectId = document.getElementById('lesson-subject').value;
          const day = Number(document.getElementById('lesson-day').value);
          const startTime = document.getElementById('lesson-start').value;
          const endTime = document.getElementById('lesson-end').value;
          const teacher = document.getElementById('lesson-teacher').value.trim();
          const room = document.getElementById('lesson-room').value.trim();

          if (timeToMinutes(startTime) >= timeToMinutes(endTime)) {
            errorEl.textContent = 'שעת הסיום צריכה להיות אחרי שעת ההתחלה';
            return false;
          }

          const newLesson = {
            id: lesson?.id ?? genId(),
            subjectId,
            day,
            startTime,
            endTime,
            teacher: teacher || undefined,
            room: room || undefined,
          };

          const updated = updateData((d) => {
            d.lessons = lesson ? d.lessons.map((l) => (l.id === lesson.id ? newLesson : l)) : [...d.lessons, newLesson];
            return d;
          });

          if (conflictsFor(newLesson, updated.lessons).length > 0) {
            showToast('השיעור נשמר, אבל שימי לב - יש חפיפת שעות עם שיעור אחר', 'error');
          } else {
            showToast(lesson ? 'השיעור עודכן' : 'השיעור נוסף', 'success');
          }

          render(container);
        },
      },
    ],
  });
}

function deleteLesson(container, lessonId) {
  confirmDialog({
    title: 'מחיקת שיעור',
    message: 'למחוק את השיעור הזה ממערכת השעות?',
    onConfirm: () => {
      updateData((d) => {
        d.lessons = d.lessons.filter((l) => l.id !== lessonId);
        return d;
      });
      showToast('השיעור נמחק', 'success');
      render(container);
    },
  });
}

function dayColumnHTML(data, day) {
  const dayLessons = data.lessons.filter((l) => l.day === day).sort((a, b) => a.startTime.localeCompare(b.startTime));
  return `
    <div class="card">
      <h3 style="margin-bottom:10px;">${DAY_NAMES_HE[day]}</h3>
      ${
        dayLessons.length
          ? dayLessons
              .map((l) => {
                const subject = getSubjectById(data.subjects, l.subjectId);
                const conflict = conflictsFor(l, data.lessons).length > 0;
                return `
                <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:8px 0; border-bottom:1px solid var(--color-border);">
                  <div>
                    <div style="display:flex; align-items:center; gap:6px;">
                      <span class="subject-dot" style="background:${subject?.color ?? '#999'}"></span>
                      <strong>${escapeHtml(subject?.name ?? 'מקצוע')}</strong>
                      ${conflict ? '<span class="badge badge-danger">⚠ חפיפת שעות</span>' : ''}
                    </div>
                    <div class="page-subtitle">${l.startTime}-${l.endTime}${l.teacher ? ` · ${escapeHtml(l.teacher)}` : ''}${l.room ? ` · חדר ${escapeHtml(l.room)}` : ''}</div>
                  </div>
                  <div style="display:flex; gap:4px;">
                    <button class="btn btn-icon btn-secondary" data-edit="${l.id}" aria-label="עריכת שיעור">✏️</button>
                    <button class="btn btn-icon btn-secondary" data-delete="${l.id}" aria-label="מחיקת שיעור">🗑️</button>
                  </div>
                </div>`;
              })
              .join('')
          : `<p class="placeholder-note">אין שיעורים ביום זה</p>`
      }
    </div>
  `;
}

export function render(container) {
  const data = getData();

  container.innerHTML = `
    <header class="page-header">
      <div>
        <h1 class="page-title">מערכת שעות</h1>
        <p class="page-subtitle">השיעורים השבועיים שלך, ראשון עד שישי</p>
      </div>
      <button id="add-lesson-btn" class="btn btn-primary">+ הוספת שיעור</button>
    </header>

    ${
      data.subjects.length === 0
        ? emptyStateHTML({ icon: '📚', title: 'צריך קודם להוסיף מקצוע', description: 'עברו למסך "מקצועות" כדי להוסיף מקצוע לפני הוספת שיעורים.' })
        : `<div class="card-grid">${SCHOOL_DAYS.map((d) => dayColumnHTML(data, d)).join('')}</div>`
    }
  `;

  document.getElementById('add-lesson-btn').addEventListener('click', () => openLessonModal(container, null));

  container.querySelectorAll('[data-edit]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lesson = data.lessons.find((l) => l.id === btn.dataset.edit);
      openLessonModal(container, lesson);
    });
  });

  container.querySelectorAll('[data-delete]').forEach((btn) => {
    btn.addEventListener('click', () => deleteLesson(container, btn.dataset.delete));
  });
}
