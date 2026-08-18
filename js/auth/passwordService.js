// הצפנת סיסמאות מקומית באמצעות Web Crypto API. אף פעם לא שומרים/מדפיסים את הסיסמה עצמה -
// רק hash + salt (שניהם ב-Base64), לפי PBKDF2.

const PBKDF2_ITERATIONS = 100000;
const HASH_ALGORITHM = 'SHA-256';
const KEY_LENGTH_BITS = 256;
const SALT_LENGTH_BYTES = 16;

function bufferToBase64(bytes) {
  let binary = '';
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary);
}

function base64ToBuffer(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function generateSaltBase64() {
  const saltBytes = crypto.getRandomValues(new Uint8Array(SALT_LENGTH_BYTES));
  return bufferToBase64(saltBytes);
}

async function deriveHash(password, saltBase64) {
  const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  const derivedBits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: base64ToBuffer(saltBase64), iterations: PBKDF2_ITERATIONS, hash: HASH_ALGORITHM },
    keyMaterial,
    KEY_LENGTH_BITS
  );
  return bufferToBase64(new Uint8Array(derivedBits));
}

/**
 * יוצר salt חדש ומחשב hash לסיסמה - לשימוש בהרשמה.
 * @param {string} password
 * @returns {Promise<{passwordHash:string, passwordSalt:string}>}
 */
export async function createPasswordRecord(password) {
  const passwordSalt = generateSaltBase64();
  const passwordHash = await deriveHash(password, passwordSalt);
  return { passwordHash, passwordSalt };
}

/**
 * בודק אם סיסמה שהוזנה תואמת ל-hash/salt השמורים - לשימוש בהתחברות.
 * @param {string} password
 * @param {string} passwordHash
 * @param {string} passwordSalt
 * @returns {Promise<boolean>}
 */
export async function verifyPassword(password, passwordHash, passwordSalt) {
  const computedHash = await deriveHash(password, passwordSalt);
  return computedHash === passwordHash;
}

/** @returns {string} טוקן אקראי חד-פעמי לקישור שחזור סיסמה */
export function generateResetToken() {
  return crypto.randomUUID().replaceAll('-', '');
}
