// רישום המשתמשים המקומי של המכשיר (לא נתונים לימודיים - רק "מי יש לנו כאן").
// נשמר תחת מפתח אחד גלובלי, נפרד לגמרי מהנתונים הלימודיים של כל משתמש.

import { genId } from '../utils/id.js';
import { createPasswordRecord, verifyPassword, generateTemporaryPassword } from './passwordService.js';
import { clearAllData } from '../data/storage.js';
import { getCurrentUserId, clearCurrentUserId } from './session.js';
import { normalizeEmail } from '../utils/validation.js';

const USERS_KEY = 'studytop:users';

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

/** @param {string} username @returns {import('../models/types.js').LocalUser|undefined} */
export function findUserByUsername(username) {
  return readUsers().find((u) => u.username === username);
}

/** @param {string} email @returns {import('../models/types.js').LocalUser|undefined} */
export function findUserByEmail(email) {
  const normalized = normalizeEmail(email);
  return readUsers().find((u) => u.email === normalized);
}

/** @param {string} identifier - שם משתמש או אימייל @returns {import('../models/types.js').LocalUser|undefined} */
export function findUserByUsernameOrEmail(identifier) {
  return findUserByUsername(identifier) || findUserByEmail(identifier);
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
 * בודקת שם משתמש/אימייל+סיסמה. מחזירה את המשתמש אם תקין, אחרת null (בלי לחשוף אם הבעיה בזיהוי או בסיסמה).
 * @param {string} identifier - שם משתמש או אימייל
 * @param {string} password
 * @returns {Promise<import('../models/types.js').LocalUser|null>}
 */
export async function verifyLogin(identifier, password) {
  const user = findUserByUsernameOrEmail(identifier);
  if (!user) return null;
  const ok = await verifyPassword(password, user.passwordHash, user.passwordSalt);
  return ok ? user : null;
}

/**
 * מאפסת את הסיסמה של משתמש לסיסמה זמנית שנוצרת אוטומטית, ושומרת רק את ה-hash שלה.
 * לא עוברת דרך updateUserProfile (שמתועדת כ"לא נוגעת בסיסמה") - כותבת ישירות לרשימת המשתמשים.
 * @param {string} userId
 * @returns {Promise<string>} הסיסמה הזמנית בטקסט גלוי - להצגה חד-פעמית במודל ה"אימייל" בלבד, לא נשמרת בשום מקום.
 * @throws {Error} אם המשתמש לא נמצא
 */
export async function resetPasswordForUser(userId) {
  if (!findUserById(userId)) throw new Error('המשתמש לא נמצא');
  const tempPassword = generateTemporaryPassword();
  const { passwordHash, passwordSalt } = await createPasswordRecord(tempPassword);
  writeUsers(readUsers().map((u) => (u.id === userId ? { ...u, passwordHash, passwordSalt } : u)));
  return tempPassword;
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
