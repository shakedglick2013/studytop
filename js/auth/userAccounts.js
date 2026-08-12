// רישום המשתמשים המקומי של המכשיר (לא נתונים לימודיים - רק "מי יש לנו כאן").
// נשמר תחת מפתח אחד גלובלי, נפרד לגמרי מהנתונים הלימודיים של כל משתמש.

import { genId } from '../utils/id.js';
import { createPasswordRecord, verifyPassword } from './passwordService.js';
import { clearAllData } from '../data/storage.js';
import { getCurrentUserId, clearCurrentUserId } from './session.js';

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

/** @param {string} userId @returns {import('../models/types.js').LocalUser|undefined} */
export function findUserById(userId) {
  return readUsers().find((u) => u.id === userId);
}

/**
 * יוצרת משתמש חדש. זורקת שגיאה עם code='USERNAME_TAKEN' אם השם כבר קיים.
 * @param {string} username
 * @param {string} password
 * @returns {Promise<import('../models/types.js').LocalUser>}
 */
export async function registerUser(username, password) {
  if (findUserByUsername(username)) {
    const err = new Error('שם המשתמש כבר קיים');
    err.code = 'USERNAME_TAKEN';
    throw err;
  }

  const { passwordHash, passwordSalt } = await createPasswordRecord(password);
  const user = {
    id: genId(),
    username,
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
