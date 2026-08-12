/**
 * מבטיח שטקסט חופשי שהמשתמשת הקלידה (תיאור, הערות, שם מורה...) לא ישבור את ה-HTML
 * כשמציגים אותו בתוך innerHTML - למשל אם היא כותבת "5 < 10 גרם".
 * @param {string} value
 * @returns {string}
 */
export function escapeHtml(value) {
  if (value == null) return '';
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
