import { getData } from '../data/storage.js';
import { todayISO, dayIndexOf, formatDateWithDay, daysFromToday, addDaysISO } from '../utils/dateUtils.js';
import { getSubjectById, subjectBadgeHTML } from '../utils/subjectUtils.js';
import { overallAverage } from '../utils/gradeCalc.js';
import { emptyStateHTML } from '../components/emptyState.js';
import { escapeHtml } from '../utils/htmlUtils.js';
import { showToast } from '../components/toast.js';

const ENCOURAGING_MESSAGES = [
  'צעד אחד בכל פעם - את מתקדמת בקצב שלך, וזה בדיוק מספיק. 💪',
  'כל שיעורי בית שמתחילים מוקדם הוא ניצחון קטן על הלחץ של הרגע האחרון.',
  'לא חייבים להספיק הכל היום - רק את הצעד הבא.',
  'הלמידה שלך היא מסע שלך בלבד, בלי השוואות למישהו אחר.',
];

function quickLinks() {
  const links = [
    { hash: 'homework', label: 'שיעורי בית', icon: '📝' },
    { hash: 'planner', label: 'מתכנן שבועי', icon: '🧠' },
    { hash: 'quiz', label: 'מחולל בחנים', icon: '❓' },
    { hash: 'converter', label: 'ממיר יחידות', icon: '📏' },
    { hash: 'grades', label: 'מחשבון ציונים', icon: '📊' },
  ];
  return `
    <div class="card-grid">
      ${links
        .map(
          (l) => `
        <a href="#${l.hash}" class="card" style="text-align:center; text-decoration:none;">
          <div style="font-size:26px;">${l.icon}</div>
          <div style="font-weight:700; margin-top:6px;">${l.label}</div>
        </a>`
        )
        .join('')}
    </div>
  `;
}

function weekProgress(data, today) {
  const startISO = addDaysISO(today, -dayIndexOf(today));
  const endISO = addDaysISO(startISO, 6);

  const weekTasks = data.homeworkTasks.filter((t) => t.dueDate >= startISO && t.dueDate <= endISO);
  const doneCount = weekTasks.filter((t) => t.status === 'done').length;
  const percent = weekTasks.length ? Math.round((doneCount / weekTasks.length) * 100) : 100;

  return `
    <div class="card">
      <h3 style="margin-bottom:8px;">התקדמות שבועית</h3>
      <p class="page-subtitle" style="margin-bottom:10px;">${doneCount} מתוך ${weekTasks.length} משימות השבוע הושלמו</p>
      <div style="background:var(--color-surface-alt); border-radius:999px; height:10px; overflow:hidden;">
        <div style="background:var(--color-primary); width:${percent}%; height:100%;"></div>
      </div>
    </div>
  `;
}

export function render(container) {
  const data = getData();
  const today = todayISO();

  const justOnboardedName = window.sessionStorage.getItem('studytop:justOnboarded');
  if (justOnboardedName) {
    window.sessionStorage.removeItem('studytop:justOnboarded');
    showToast(`שלום ${justOnboardedName}, ברוכה הבאה ל-StudyTop! 🎉`, 'success');
  }
  const todayIdx = dayIndexOf(today);

  const todayLessons = data.lessons.filter((l) => l.day === todayIdx).sort((a, b) => a.startTime.localeCompare(b.startTime));

  const upcomingHomework = data.homeworkTasks
    .filter((t) => t.status !== 'done')
    .sort((a, b) => (a.dueDate < b.dueDate ? -1 : 1))
    .slice(0, 5);

  const nearestExam = data.exams
    .filter((e) => e.date >= today)
    .sort((a, b) => (a.date < b.date ? -1 : 1))[0];

  const todayBlocks = data.scheduledStudyBlocks
    .filter((b) => b.date === today)
    .sort((a, b) => a.startTime.localeCompare(b.startTime));
  const todayDueHomework = data.homeworkTasks.filter((t) => t.status !== 'done' && t.dueDate === today);

  const average = overallAverage(data.grades, data.subjects);
  const message = ENCOURAGING_MESSAGES[Math.floor(Math.random() * ENCOURAGING_MESSAGES.length)];

  container.innerHTML = `
    <div class="sticky-top-block">
      <header class="page-header">
        <div>
          <h1 class="page-title">היי ${escapeHtml(data.settings.displayName)}, בהצלחה היום! 👋</h1>
          <p class="page-subtitle">${formatDateWithDay(today)}</p>
        </div>
      </header>

      <div class="card" style="background:var(--color-success-bg); border-color:transparent;">
        <p style="color:var(--color-success); font-weight:600;">${message}</p>
      </div>
    </div>

    ${quickLinks()}

    <div class="card-grid" style="margin-top:16px;">
      <div class="card">
        <h3 style="margin-bottom:10px;">השיעורים של היום</h3>
        ${
          todayLessons.length
            ? `<ul style="display:flex; flex-direction:column; gap:8px;">
                ${todayLessons
                  .map((l) => {
                    const subject = getSubjectById(data.subjects, l.subjectId);
                    return `<li style="display:flex; align-items:center; gap:8px;">
                      <span class="subject-dot" style="background:${subject?.color ?? '#999'}"></span>
                      <strong>${escapeHtml(subject?.name ?? 'מקצוע')}</strong>
                      <span class="page-subtitle">${l.startTime}-${l.endTime}${l.room ? ` · חדר ${escapeHtml(l.room)}` : ''}</span>
                    </li>`;
                  })
                  .join('')}
              </ul>`
            : emptyStateHTML({ icon: '🎉', title: 'אין שיעורים היום', description: 'יום פנוי ממערכת - זמן טוב להתקדם עם שיעורי בית.' })
        }
      </div>

      <div class="card">
        <h3 style="margin-bottom:10px;">שיעורי בית קרובים</h3>
        ${
          upcomingHomework.length
            ? `<ul style="display:flex; flex-direction:column; gap:8px;">
                ${upcomingHomework
                  .map((t) => {
                    const diff = daysFromToday(t.dueDate);
                    const dueLabel = diff < 0 ? `באיחור ${Math.abs(diff)} ימים` : diff === 0 ? 'להיום' : `בעוד ${diff} ימים`;
                    return `<li>
                      ${subjectBadgeHTML(data.subjects, t.subjectId)}
                      <span>${escapeHtml(t.description)}</span>
                      <span class="badge ${diff < 0 ? 'badge-danger' : 'badge-neutral'}">${dueLabel}</span>
                    </li>`;
                  })
                  .join('')}
              </ul>`
            : emptyStateHTML({ icon: '✅', title: 'אין שיעורי בית פתוחים', description: 'כל הכבוד, הכל מעודכן!' })
        }
      </div>

      <div class="card">
        <h3 style="margin-bottom:10px;">המבחן הקרוב ביותר</h3>
        ${
          nearestExam
            ? `<p>${subjectBadgeHTML(data.subjects, nearestExam.subjectId)} ${nearestExam.topic ? `- ${escapeHtml(nearestExam.topic)}` : ''}</p>
               <p class="page-subtitle" style="margin-top:6px;">${formatDateWithDay(nearestExam.date)} (בעוד ${daysFromToday(nearestExam.date)} ימים)</p>`
            : emptyStateHTML({ icon: '🗓️', title: 'אין מבחנים קרובים', description: 'ברגע שיתווסף מבחן, הוא יופיע כאן.' })
        }
      </div>

      <div class="card">
        <h3 style="margin-bottom:10px;">להיום</h3>
        ${
          todayBlocks.length || todayDueHomework.length
            ? `<ul style="display:flex; flex-direction:column; gap:8px;">
                ${todayBlocks
                  .map((b) => {
                    const task = data.homeworkTasks.find((t) => t.id === b.homeworkTaskId);
                    return task ? `<li>${b.startTime} · ${escapeHtml(task.description)}</li>` : '';
                  })
                  .join('')}
                ${todayDueHomework
                  .filter((t) => !todayBlocks.some((b) => b.homeworkTaskId === t.id))
                  .map((t) => `<li>להגשה היום: ${escapeHtml(t.description)}</li>`)
                  .join('')}
              </ul>`
            : emptyStateHTML({ icon: '☀️', title: 'אין משימות מתוזמנות להיום', description: 'אפשר לבדוק את המתכנן השבועי לתזמון חדש.' })
        }
      </div>
    </div>

    <div class="card-grid" style="margin-top:16px;">
      <div class="card">
        <h3 style="margin-bottom:10px;">ממוצע ציונים כללי</h3>
        ${
          average !== null
            ? `<p style="font-size:32px; font-weight:800; color:var(--color-primary);">${average.toFixed(1)}</p>`
            : emptyStateHTML({ icon: '📊', title: 'עדיין אין ציונים', description: 'ציונים שיתווספו יופיעו כאן כממוצע כללי.' })
        }
      </div>
      ${weekProgress(data, today)}
    </div>
  `;
}
