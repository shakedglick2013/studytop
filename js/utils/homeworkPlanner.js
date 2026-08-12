// אלגוריתם מתכנן שיעורי הבית החכם - מבוסס כללים בלבד, בלי שירות AI חיצוני.
// ראו הסבר מלא ב-README ובתכנון (שלב 1).

import { addDaysISO, dayIndexOf, daysFromToday, timeToMinutes, minutesToTime, DAY_NAMES_HE } from './dateUtils.js';
import { getSubjectById } from './subjectUtils.js';

const DAY_CAP_MINUTES = 90; // תקרת דקות שיעורי בית ליום, כדי לא להעמיס יום אחד
const EXAM_PROXIMITY_DAYS = 2; // "כלל רך": העדפה לא להעמיס יום שיש בו מבחן קרוב במקצוע אחר

/**
 * מחפש את השעה הפנויה הראשונה ביום נתון, בהתחשב במה שכבר תפוס באותו יום.
 * @param {string} date
 * @param {number} duration
 * @param {number} usedMinutes - דקות שכבר שובצו לאותו יום (בריצה הזו + בלוקים קיימים)
 * @param {{day:number,start:string,end:string}[]} freeHours
 * @returns {string|null} שעת התחלה "HH:MM" או null אם אין מקום
 */
function findStartTime(date, duration, usedMinutes, freeHours) {
  const windows = freeHours
    .filter((w) => w.day === dayIndexOf(date))
    .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));

  let offset = usedMinutes;
  for (const w of windows) {
    const start = timeToMinutes(w.start);
    const end = timeToMinutes(w.end);
    const windowLength = end - start;
    if (offset < windowLength) {
      const slotStart = start + offset;
      if (slotStart + duration <= end) return minutesToTime(slotStart);
      return null; // המקטע גדול מדי בשביל מה שנשאר בחלון הזה
    }
    offset -= windowLength;
  }
  return null;
}

function hasNearbyExam(date, task, exams) {
  return exams.some(
    (exam) => exam.subjectId !== task.subjectId && Math.abs(daysFromToday(exam.date) - daysFromToday(date)) <= EXAM_PROXIMITY_DAYS
  );
}

function buildReason({ date, task, subjects, lessons, isUrgent }) {
  const dayName = DAY_NAMES_HE[dayIndexOf(date)];
  if (isUrgent) {
    return `⚠ שובץ ליום ${dayName} כי זה הזמן הפנוי האחרון שנשאר לפני ההגשה - כדאי להתחיל בהקדם.`;
  }
  const subject = getSubjectById(subjects, task.subjectId);
  const dueDayIndex = dayIndexOf(task.dueDate);
  const dueDayName = DAY_NAMES_HE[dueDayIndex];
  const hasLessonOnDueDay = lessons.some((l) => l.subjectId === task.subjectId && l.day === dueDayIndex);
  if (hasLessonOnDueDay && subject) {
    return `שובץ ליום ${dayName} כי יש לך שיעור ${subject.name} ביום ${dueDayName} (מועד ההגשה), וזה הזמן הפנוי הקרוב ביותר לפני כן.`;
  }
  return `שובץ ליום ${dayName} כי ההגשה היא ביום ${dueDayName} וזה זמן פנוי מתאים מראש, בלי ללחוץ ברגע האחרון.`;
}

/**
 * בונה הצעות שיבוץ (ScheduledStudyBlock) למשימות שיעורי בית פתוחות.
 * @param {{
 *   tasks: import('../models/types.js').HomeworkTask[],
 *   lessons: import('../models/types.js').Lesson[],
 *   exams: import('../models/types.js').Exam[],
 *   subjects: import('../models/types.js').Subject[],
 *   settings: import('../models/types.js').UserSettings,
 *   existingBlocks: import('../models/types.js').ScheduledStudyBlock[],
 *   today: string,
 *   genId: () => string,
 * }} input
 * @returns {import('../models/types.js').ScheduledStudyBlock[]} בלוקים חדשים בלבד (לא כוללים existingBlocks)
 */
export function planHomework({ tasks, lessons, exams, subjects, settings, existingBlocks, today, genId }) {
  const openTasks = tasks.filter((t) => t.status !== 'done');
  const priorityRank = { high: 0, medium: 1, low: 2 };

  const sortedTasks = [...openTasks].sort((a, b) => {
    if (a.dueDate !== b.dueDate) return a.dueDate < b.dueDate ? -1 : 1;
    if (priorityRank[a.priority] !== priorityRank[b.priority]) return priorityRank[a.priority] - priorityRank[b.priority];
    return b.estimatedMinutes - a.estimatedMinutes;
  });

  const blockMinutes = settings.preferredBlockMinutes || 40;
  const usedMinutesByDay = {};
  existingBlocks.forEach((b) => {
    usedMinutesByDay[b.date] = (usedMinutesByDay[b.date] || 0) + b.durationMinutes;
  });
  // גם משימות שכבר שובצו בריצה הזו לא ייספרו פעמיים
  const alreadyPlannedTaskIds = new Set(existingBlocks.map((b) => b.homeworkTaskId));

  const newBlocks = [];

  for (const task of sortedTasks) {
    if (alreadyPlannedTaskIds.has(task.id)) continue;
    if (task.dueDate < today) continue; // לא משבצים משימות שכבר איחרו - אלה מוצגות בנפרד כ"באיחור"

    const totalMinutes = task.estimatedMinutes;
    const chunkCount = totalMinutes > 45 ? Math.ceil(totalMinutes / blockMinutes) : 1;
    const baseChunk = Math.round(totalMinutes / chunkCount);

    // טווח מועדף: מהיום עד יום לפני ההגשה. אם אין טווח (הגשה היום/מחר), מועד ההגשה עצמו הוא הנפילה היחידה.
    const preferredLastDay = addDaysISO(task.dueDate, -1);
    const preferredDays = [];
    for (let d = today; d <= preferredLastDay; d = addDaysISO(d, 1)) preferredDays.push(d);

    for (let i = 0; i < chunkCount; i++) {
      const duration = i === chunkCount - 1 ? totalMinutes - baseChunk * (chunkCount - 1) : baseChunk;

      // ניסיון ראשון: בטווח המועדף, בלי ימים עם מבחן קרוב, בלי לחרוג מתקרת היום
      let placement = tryPlaceInDays(preferredDays, duration, task, usedMinutesByDay, settings.freeHours, exams, {
        skipExamProximity: true,
        respectDayCap: true,
      });

      // ניסיון שני: אותו טווח, בלי כלל המבחן (רק אם באמת אין ברירה)
      if (!placement) {
        placement = tryPlaceInDays(preferredDays, duration, task, usedMinutesByDay, settings.freeHours, exams, {
          skipExamProximity: false,
          respectDayCap: true,
        });
      }

      // ניסיון אחרון: מועד ההגשה עצמו, גם בלי תקרת יום - עדיף לאחר מאשר לא לשבץ בכלל
      let isUrgent = false;
      if (!placement) {
        placement = tryPlaceInDays([task.dueDate], duration, task, usedMinutesByDay, settings.freeHours, exams, {
          skipExamProximity: false,
          respectDayCap: false,
        });
        isUrgent = true;
      }

      if (!placement) continue; // אין בכלל שעות פנויות מוגדרות - לא ניתן לשבץ

      usedMinutesByDay[placement.date] = (usedMinutesByDay[placement.date] || 0) + duration;
      newBlocks.push({
        id: genId(),
        homeworkTaskId: task.id,
        date: placement.date,
        startTime: placement.startTime,
        durationMinutes: duration,
        reason: buildReason({ date: placement.date, task, subjects, lessons, isUrgent }),
        userConfirmed: false,
      });
    }
  }

  return newBlocks;
}

function tryPlaceInDays(days, duration, task, usedMinutesByDay, freeHours, exams, { skipExamProximity, respectDayCap }) {
  for (const date of days) {
    if (skipExamProximity && hasNearbyExam(date, task, exams)) continue;
    const used = usedMinutesByDay[date] || 0;
    if (respectDayCap && used + duration > DAY_CAP_MINUTES) continue;

    const startTime = findStartTime(date, duration, used, freeHours);
    if (startTime) return { date, startTime };
  }
  return null;
}
