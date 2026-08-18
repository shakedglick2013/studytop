// רישום המשתמשים המקומי של המכשיר (לא נתונים לימודיים - רק "מי יש לנו כאן").
// נשמר תחת מפתח אחד גלובלי, נפרד לגמרי מהנתונים הלימודיים של כל משתמש.

import { genId } from '../utils/id.js';
import { createPasswordRecord, verifyPassword, generateResetToken } from './passwordService.js';
import { clearAllData } from '../data/storage.js';
import { getCurrentUserId, clearCurrentUserId } from './session.js';
import { normalizeEmail } from '../utils/validation.js';

const USERS_KEY = 'studytop:users';
const RESET_TOKEN_KEY = 'studytop:passwordResetToken';
const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // שעה

function readUsers() {
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('שגיאה בקריאת רשימת המשתמשים:', err);
    return [];
  }
}

function writeUsers(users) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function readResetToken() {
  try {
    const raw = window.localStorage.getItem(RESET_TOKEN_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error('שגיאה בקריאת טוקן שחזור הסיסמה:', err);
    return null;
  }
}

function writeResetToken(record) {
  if (record) window.localStorage.setItem(RESET_TOKEN_KEY, JSON.stringify(record));
  else window.localStorage.removeItem(RESET_TOKEN_KEY);
}

/** @param {string} username @returns {import('../models/types.js').LocalUser|undefined} */
export function findUserByUsername(username) {
  return readUsers().find((u) => u.username === username);
}

/** @param {string} email @returns {import('../models/types.js').LocalUser|undefined} */
export function findUserByEmail(email) {
  const normalized = normalizeEmail(email);
  return readUsers().find((u) => u.email === normalized);
}

/** @param {string} userId @returns {import('../models/types.js').LocalUser|undefined} */
export function findUserById(userId) {
  return readUsers().find((u) => u.id === userId);
}

/**
 * יוצרת משתמש חדש. זורקת שגיאה עם code='USERNAME_TAKEN' אם השם כבר קיים, או
 * code='EMAIL_TAKEN' אם האימייל כבר רשום (רק אם שם המשתמש פנוי).
 * @param {string} username
 * @param {string} email
 * @param {string} password
 * @returns {Promise<import('../models/types.js').LocalUser>}
 */
export async function registerUser(username, email, password) {
  if (findUserByUsername(username)) {
    const err = new Error('שם המשתמש כבר קיים');
    err.code = 'USERNAME_TAKEN';
    throw err;
  }
  if (findUserByEmail(email)) {
    const err = new Error('כתובת האימייל כבר רשומה');
    err.code = 'EMAIL_TAKEN';
    throw err;
  }

  const { passwordHash, passwordSalt } = await createPasswordRecord(password);
  const user = {
    id: genId(),
    username,
    email: normalizeEmail(email),
    passwordHash,
    passwordSalt,
    createdAt: new Date().toISOString(),
    firstName: '',
    lastName: '',
    grade: '',
    onboardingCompleted: false,
    gradeAdvancedForYear: null,
  };
  writeUsers([...readUsers(), user]);
  return user;
}

/**
 * מעדכנת שדות פרופיל (שם/כיתה/סטטוס onboarding) על רשומת המשתמש. לא נוגעת בסיסמה.
 * @param {string} userId
 * @param {Partial<import('../models/types.js').LocalUser>} patch
 * @returns {import('../models/types.js').LocalUser|undefined} המשתמש המעודכן
 */
export function updateUserProfile(userId, patch) {
  const users = readUsers();
  let updatedUser;
  const nextUsers = users.map((u) => {
    if (u.id !== userId) return u;
    updatedUser = { ...u, ...patch };
    return updatedUser;
  });
  writeUsers(nextUsers);
  return updatedUser;
}

/**
 * בודקת שם משתמש+סיסמה. מחזירה את המשתמש אם תקין, אחרת null (בלי לחשוף אם הבעיה בשם או בסיסמה).
 * @param {string} username
 * @param {string} password
 * @returns {Promise<import('../models/types.js').LocalUser|null>}
 */
export async function verifyLogin(username, password) {
  const user = findUserByUsername(username);
  if (!user) return null;
  const ok = await verifyPassword(password, user.passwordHash, user.passwordSalt);
  return ok ? user : null;
}

/**
 * יוצרת טוקן חד-פעמי לשחזור סיסמה עבור משתמש (בתוקף לשעה), ושומרת אותו - יש טוקן פעיל
 * אחד בלבד למכשיר; בקשה חדשה מבטלת טוקן קודם, כמו רוב מנגנוני שחזור הסיסמה האמיתיים.
 * @param {string} userId
 * @returns {string} הטוקן
 */
export function createPasswordResetToken(userId) {
  const token = generateResetToken();
  writeResetToken({ userId, token, createdAt: Date.now() });
  return token;
}

/**
 * בודקת אם טוקן שחזור סיסמה תקין (קיים ולא פג תוקף) ומחזירה את המשתמש המשויך אליו. לא צורכת את הטוקן.
 * @param {string} token
 * @returns {import('../models/types.js').LocalUser|null}
 */
export function findUserByResetToken(token) {
  const record = readResetToken();
  if (!record || record.token !== token) return null;
  if (Date.now() - record.createdAt > RESET_TOKEN_TTL_MS) {
    writeResetToken(null);
    return null;
  }
  return findUserById(record.userId) ?? null;
}

/**
 * קובעת סיסמה חדשה וקבועה למשתמש לפי טוקן שחזור תקין, ומבטלת (צורכת) את הטוקן - שימוש חד-פעמי.
 * @param {string} token
 * @param {string} newPassword
 * @returns {Promise<import('../models/types.js').LocalUser>}
 * @throws {Error} אם הטוקן לא תקין או שפג תוקפו
 */
export async function resetPasswordWithToken(token, newPassword) {
  const user = findUserByResetToken(token);
  if (!user) throw new Error('קישור שחזור הסיסמה אינו תקין או שפג תוקפו. אפשר לבקש קישור חדש דרך "שכחתי סיסמה".');
  const { passwordHash, passwordSalt } = await createPasswordRecord(newPassword);
  writeUsers(readUsers().map((u) => (u.id === user.id ? { ...u, passwordHash, passwordSalt } : u)));
  writeResetToken(null);
  return user;
}

/**
 * מוחקת לצמיתות את החשבון המחובר כרגע: רשומת המשתמש (שם משתמש, סיסמה, פרופיל), כל הנתונים
 * הלימודיים שלו, ואת מצב ההתחברות. לא נוגעת בחשבונות או בנתונים של משתמשים אחרים על אותו מכשיר.
 * יש לקרוא לפונקציה הזו רק לאחר אימות סיסמה מחדש - היא לא בודקת סיסמה בעצמה.
 * @param {string} userId
 * @throws {Error} אם המשתמש לא קיים, או אם הוא אינו המשתמש המחובר כרגע
 */
export function deleteUserAccount(userId) {
  if (!findUserById(userId)) {
    throw new Error('המשתמש לא נמצא');
  }
  if (getCurrentUserId() !== userId) {
    throw new Error('אפשר למחוק רק את החשבון המחובר כרגע');
  }

  // קודם מוחקים את נתוני המשתמש (תלוי בסשן הפעיל), ורק אז את רשומת החשבון ואת הסשן עצמו.
  clearAllData();
  writeUsers(readUsers().filter((u) => u.id !== userId));
  clearCurrentUserId();
}
