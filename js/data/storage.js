// שכבת התמדה (persistence) - כל האפליקציה קוראת/כותבת נתונים רק דרך הקובץ הזה.
// כל האוספים נשמרים כאובייקט JSON יחיד תחת מפתח אחד ב-localStorage.

import { buildSampleData } from './sampleData.js';
import { getCurrentUserId } from '../auth/session.js';
import { genId } from '../utils/id.js';

export { genId };

const SCHEMA_VERSION = 1;

/** @returns {string} מפתח ה-localStorage של נתוני המשתמש המחובר כרגע */
function storageKeyForCurrentUser() {
  const userId = getCurrentUserId();
  if (!userId) throw new Error('אין משתמש מחובר - אי אפשר לגשת לנתונים');
  return `studytop-user-data-${userId}`;
}

/** @returns {object} מבנה נתונים ריק (בלי מקצועות/שיעורים/וכו') - "לוח נקי" למשתמש חדש */
export function emptyData() {
  return {
    schemaVersion: SCHEMA_VERSION,
    settings: {
      displayName: 'תלמידה',
      theme: 'light',
      freeHours: [],
      preferredBlockMinutes: 40,
      notificationsEnabled: true,
    },
    subjects: [],
    lessons: [],
    homeworkTasks: [],
    scheduledStudyBlocks: [],
    exams: [],
    grades: [],
    quizzes: [],
    quizAttempts: [],
    notifications: [],
    topicStatuses: {},
    customTopics: [],
    ratingState: {
      firstDashboardEntryAt: null,
      ratingPromptShown: false,
      ratingPromptDismissedAt: null,
      rating: null,
      ratedAt: null,
    },
  };
}

/** קורא את הנתונים מה-localStorage. מחזיר null אם אין נתונים תקינים. */
function readRaw() {
  try {
    const raw = window.localStorage.getItem(storageKeyForCurrentUser());
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return null;
    return parsed;
  } catch (err) {
    console.error('שגיאה בקריאת נתונים שמורים:', err);
    return null;
  }
}

function writeRaw(data) {
  window.localStorage.setItem(storageKeyForCurrentUser(), JSON.stringify(data));
}

/**
 * זורעת נתוני דוגמה בעברית אם אין עדיין נתונים. לא נקראת אוטומטית יותר (מאז שיש הגדרת פרופיל
 * אמיתית ב-onboarding) - נשארת זמינה לשימוש עתידי, למשל כפתור "טעינת נתוני דוגמה" בהגדרות.
 * @returns {object} הנתונים הנוכחיים
 */
export function initData() {
  let data = readRaw();
  if (!data) {
    data = buildSampleData(emptyData(), genId);
    writeRaw(data);
  }
  return data;
}

/** @returns {object} הנתונים הנוכחיים, או מבנה ריק אם המשתמשת עדיין לא שמרה כלום */
export function getData() {
  return readRaw() ?? emptyData();
}

/** @param {object} data */
export function setData(data) {
  writeRaw(data);
}

/**
 * עדכון חלקי נוח: updater מקבל עותק של הנתונים, יכול לשנות אותו ולהחזיר אותו.
 * @param {(data: object) => object} updater
 */
export function updateData(updater) {
  const data = getData();
  const next = updater(data) ?? data;
  setData(next);
  return next;
}

/** @returns {string} כל הנתונים כמחרוזת JSON מסודרת, לייצוא */
export function exportJSON() {
  return JSON.stringify(getData(), null, 2);
}

/**
 * מייבא נתונים ממחרוזת JSON ומחליף את כל הנתונים הקיימים.
 * @param {string} jsonString
 * @throws {Error} אם המחרוזת אינה JSON תקין או שאין בה שדה schemaVersion
 */
export function importJSON(jsonString) {
  const parsed = JSON.parse(jsonString);
  if (!parsed || typeof parsed !== 'object' || typeof parsed.schemaVersion !== 'number') {
    throw new Error('קובץ הנתונים אינו בפורמט תקין של StudyTop');
  }
  writeRaw(parsed);
  return parsed;
}

/** מוחק את כל הנתונים השמורים של המשתמש המחובר (אחרי אישור מפורש ממנו/ה). */
export function clearAllData() {
  window.localStorage.removeItem(storageKeyForCurrentUser());
}
