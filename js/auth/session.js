// זיהוי "מי מחובר עכשיו" - ב-localStorage, ורק ה-id, לא הסיסמה.
// נשאר עד יציאה מפורשת, לא נעלם בסגירת טאב/דפדפן ("להישאר מחוברת").

const SESSION_KEY = 'studytop:currentUserId';

/** @returns {string|null} */
export function getCurrentUserId() {
  return window.localStorage.getItem(SESSION_KEY);
}

/** @param {string} userId */
export function setCurrentUserId(userId) {
  window.localStorage.setItem(SESSION_KEY, userId);
}

export function clearCurrentUserId() {
  window.localStorage.removeItem(SESSION_KEY);
}

/** @returns {boolean} */
export function isLoggedIn() {
  return getCurrentUserId() !== null;
}
