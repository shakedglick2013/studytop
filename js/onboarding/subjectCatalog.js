// רשימת מקצועות נפוצים להצעה במסך הגדרת הפרופיל, פלטת צבעים קטנה להקצאה אוטומטית, ורשימת הכיתות.

export const GRADES = ["ז'", "ח'", "ט'", "י'", 'י"א', 'י"ב'];

export const COMMON_SUBJECTS = [
  'מתמטיקה', 'אנגלית', 'עברית', 'לשון', 'ספרות', 'מדעים', 'פיזיקה', 'כימיה', 'ביולוגיה',
  'היסטוריה', 'תנ"ך', 'גאוגרפיה', 'אזרחות', 'ערבית', 'מחשבים', 'חינוך גופני', 'אמנות', 'מוזיקה',
  'תרבות ישראלית יהודית',
];

const COLOR_PALETTE = ['#4f6df5', '#2f9e63', '#e07a5f', '#b8860b', '#8e44ad', '#16a3b0', '#c0392b', '#2c7be5', '#7f8c8d'];

/** @param {number} index @returns {string} */
export function colorForIndex(index) {
  return COLOR_PALETTE[index % COLOR_PALETTE.length];
}
