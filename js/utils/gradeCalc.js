/** @param {number[]} scores @returns {number|null} */
export function simpleAverage(scores) {
  if (scores.length === 0) return null;
  return scores.reduce((sum, s) => sum + s, 0) / scores.length;
}

/**
 * ממוצע משוקלל לפי weightPercent. אם סכום המשקלים הוא 0, נופל לממוצע רגיל.
 * @param {import('../models/types.js').Grade[]} grades
 * @returns {number|null}
 */
export function weightedAverage(grades) {
  if (grades.length === 0) return null;
  const totalWeight = grades.reduce((sum, g) => sum + g.weightPercent, 0);
  if (totalWeight === 0) return simpleAverage(grades.map((g) => g.score));
  const weightedSum = grades.reduce((sum, g) => sum + g.score * g.weightPercent, 0);
  return weightedSum / totalWeight;
}

/**
 * @param {import('../models/types.js').Grade[]} grades
 * @param {string} subjectId
 * @returns {number|null}
 */
export function subjectAverage(grades, subjectId) {
  return weightedAverage(grades.filter((g) => g.subjectId === subjectId));
}

/**
 * ממוצע כללי = ממוצע של ממוצעי המקצועות (כל מקצוע נשקל שווה, לא לפי מספר הציונים בו).
 * @param {import('../models/types.js').Grade[]} grades
 * @param {import('../models/types.js').Subject[]} subjects
 * @returns {number|null}
 */
export function overallAverage(grades, subjects) {
  const perSubject = subjects
    .map((s) => subjectAverage(grades, s.id))
    .filter((avg) => avg !== null);
  return simpleAverage(perSubject);
}

/**
 * בודק אם סכום המשקלים של מקצוע שונה מ-100%, כדי להציג אזהרה ידידותית (לא שיפוטית).
 * @param {import('../models/types.js').Grade[]} grades
 * @param {string} subjectId
 * @returns {number} סכום המשקלים באחוזים
 */
export function subjectWeightSum(grades, subjectId) {
  return grades.filter((g) => g.subjectId === subjectId).reduce((sum, g) => sum + g.weightPercent, 0);
}

/**
 * כמה נקודות (בממוצע המשוקלל) חסרות כדי להגיע ליעד, בהנחה שהמשקל שנותר יתחלק על מטלות עתידיות בציון היעד עצמו.
 * מחזיר null אם אין דרך משמעותית לחשב (למשל כשאין משקל שנותר).
 * @param {number} currentAverage
 * @param {number} targetAverage
 * @returns {number|null}
 */
export function pointsNeededForGoal(currentAverage, targetAverage) {
  if (currentAverage === null) return null;
  const diff = targetAverage - currentAverage;
  return diff > 0 ? Math.round(diff * 10) / 10 : 0;
}
