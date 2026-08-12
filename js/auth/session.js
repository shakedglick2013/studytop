// זיהוי "מי מחובר עכשיו" - רק ב-sessionStorage (לא localStorage), ורק ה-id, לא הסיסמה.
// נעלם כשסוגרים את הטאב/דפדפן; לא משותף בין משתמשים על אותו מכשיר.

const SESSION_KEY = 'currentUserId';

/** @returns {string|null} */
export function getCurrentUserId() {
  return window.sessionStorage.getItem(SESSION_KEY);
}

/** @param {string} userId */
export function setCurrentUserId(userId) {
  window.sessionStorage.setItem(SESSION_KEY, userId);
}

export function clearCurrentUserId() {
  window.sessionStorage.removeItem(SESSION_KEY);
}

/** @returns {boolean} */
export function isLoggedIn() {
  return getCurrentUserId() !== null;
}
