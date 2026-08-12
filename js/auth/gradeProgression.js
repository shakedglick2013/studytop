// קידום כיתה אוטומטי בתחילת כל שנת לימודים (1 בספטמבר) - לא תלוי בשנה קונקרטית, מחושב יחסית
// לתאריך הנוכחי בכל פעם. המשתמשת יכולה תמיד לשנות את הכיתה ידנית אחר כך (מסך הגדרות) -
// שינוי ידני "מאפס את השעון" עד הספטמבר הבא, ולא נדרס מיד על ידי הקידום האוטומטי.

import { GRADES } from '../onboarding/subjectCatalog.js';
import { updateUserProfile } from './userAccounts.js';

const SCHOOL_YEAR_START_MONTH = 8; // ספטמבר (ינואר=0)
const SCHOOL_YEAR_START_DAY = 1;

/**
 * @param {Date} [date]
 * @returns {number} השנה הקלנדרית שבה מתחילה שנת הלימודים הנוכחית (למשל 2025 גם עבור ינואר 2026)
 */
export function currentSchoolYearStart(date = new Date()) {
  const year = date.getFullYear();
  const cutoff = new Date(year, SCHOOL_YEAR_START_MONTH, SCHOOL_YEAR_START_DAY);
  return date >= cutoff ? year : year - 1;
}

/** @param {string} grade @returns {string} הכיתה הבאה, או אותה כיתה אם זו הגבוהה ביותר (י"ב) */
export function nextGrade(grade) {
  const index = GRADES.indexOf(grade);
  if (index === -1 || index === GRADES.length - 1) return grade;
  return GRADES[index + 1];
}

/**
 * אם התחילה שנת לימודים חדשה מאז שהכיתה עודכנה/אושרה לאחרונה - מקדמת אותה בכיתה אחת (עד י"ב).
 * קריאה בטוחה לכל טעינת עמוד: אם לא התחילה שנה חדשה, לא עושה כלום.
 * @param {import('../models/types.js').LocalUser} user
 * @returns {import('../models/types.js').LocalUser} המשתמש, מעודכן אם היה קידום
 */
export function maybeAdvanceGrade(user) {
  if (!user || !user.grade) return user;

  const currentYear = currentSchoolYearStart();
  if ((user.gradeAdvancedForYear ?? -Infinity) >= currentYear) return user;

  const advanced = nextGrade(user.grade);
  return updateUserProfile(user.id, { grade: advanced, gradeAdvancedForYear: currentYear }) ?? user;
}
