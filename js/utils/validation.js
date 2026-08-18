// ולידציה כללית של קלט טקסט חופשי (כרגע: פורמט אימייל).

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** @param {string} email @returns {boolean} */
export function isValidEmail(email) {
  return EMAIL_REGEX.test(email);
}

/** @param {string} email @returns {string} */
export function normalizeEmail(email) {
  return email.trim().toLowerCase();
}
