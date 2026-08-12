// עזרי תאריכים ושעות. עובדים על תאריכים כמחרוזות ISO ("YYYY-MM-DD") כדי להימנע
// מבעיות אזור-זמן, ומפרשים אותם כתאריך מקומי (לא UTC).

export const DAY_NAMES_HE = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

/** @param {string} isoDate "YYYY-MM-DD" @returns {Date} */
function parseISODate(isoDate) {
  const [y, m, d] = isoDate.split('-').map(Number);
  return new Date(y, m - 1, d);
}

/** @param {Date} date @returns {string} "YYYY-MM-DD" */
function toISODate(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** @returns {string} תאריך היום כ-ISO */
export function todayISO() {
  return toISODate(new Date());
}

/** @param {string} isoDate @returns {number} 0=ראשון .. 6=שבת */
export function dayIndexOf(isoDate) {
  return parseISODate(isoDate).getDay();
}

/** @param {string} isoDate @param {number} days @returns {string} */
export function addDaysISO(isoDate, days) {
  const d = parseISODate(isoDate);
  d.setDate(d.getDate() + days);
  return toISODate(d);
}

/** @param {string} isoDate @returns {number} כמה ימים מהיום (שלילי = עבר) */
export function daysFromToday(isoDate) {
  const msPerDay = 24 * 60 * 60 * 1000;
  const today = parseISODate(todayISO());
  const target = parseISODate(isoDate);
  return Math.round((target - today) / msPerDay);
}

/** @param {string} isoDate @returns {string} לדוגמה "27/07" */
export function formatDateShort(isoDate) {
  const d = parseISODate(isoDate);
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
}

/** @param {string} isoDate @returns {string} לדוגמה "יום ראשון, 27/07" */
export function formatDateWithDay(isoDate) {
  return `יום ${DAY_NAMES_HE[dayIndexOf(isoDate)]}, ${formatDateShort(isoDate)}`;
}

/** @param {string} time "HH:MM" @returns {number} דקות מחצות */
export function timeToMinutes(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

/** @param {number} minutes @returns {string} "HH:MM" */
export function minutesToTime(minutes) {
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/** @param {number} minutes @returns {string} לדוגמה "שעה ו-10 דק'" */
export function formatDuration(minutes) {
  if (minutes < 60) return `${minutes} דק׳`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const hoursLabel = h === 1 ? 'שעה' : `${h} שעות`;
  return m > 0 ? `${hoursLabel} ו-${m} דק׳` : hoursLabel;
}
