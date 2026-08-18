import { findUserByEmail, createPasswordResetToken } from './userAccounts.js';
import { isValidEmail } from '../utils/validation.js';
import { showPasswordResetEmailModal } from './authEmailTemplates.js';

export function forgotPasswordFormHTML() {
  return `
    <form id="forgot-password-form" novalidate>
      <p class="page-subtitle">הזיני את כתובת האימייל שאיתה נרשמת, ונשלח אליה קישור לשחזור סיסמה.</p>
      <div class="field">
        <label for="forgot-password-email">אימייל</label>
        <input type="email" id="forgot-password-email" autocomplete="email">
        <p class="field-error" id="forgot-password-email-error"></p>
      </div>
      <div id="forgot-password-info-message"></div>
      <button type="submit" id="forgot-password-submit-btn" class="btn btn-primary auth-submit-btn">שליחת קישור</button>
    </form>
  `;
}

/** @param {(token:string) => void} onFollowResetLink - נקראת רק אם המשתמשת לוחצת על הקישור במודל ה"אימייל" */
export function wireForgotPasswordForm(onFollowResetLink) {
  const form = document.getElementById('forgot-password-form');
  const emailEl = document.getElementById('forgot-password-email');
  const emailErrorEl = document.getElementById('forgot-password-email-error');
  const infoEl = document.getElementById('forgot-password-info-message');
  const submitBtn = document.getElementById('forgot-password-submit-btn');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    emailErrorEl.textContent = '';
    infoEl.innerHTML = '';

    const email = emailEl.value.trim();
    if (!email) {
      emailErrorEl.textContent = 'יש להזין אימייל';
      return;
    }
    if (!isValidEmail(email)) {
      emailErrorEl.textContent = 'כתובת אימייל לא תקינה';
      return;
    }

    submitBtn.disabled = true;
    const user = findUserByEmail(email);
    if (!user) {
      infoEl.innerHTML = `<p class="auth-info-message">אם קיים חשבון עם כתובת האימייל הזו, נשלח אליו קישור לשחזור סיסמה.</p>`;
      submitBtn.disabled = false;
      return;
    }

    const token = createPasswordResetToken(user.id);
    submitBtn.disabled = false;
    showPasswordResetEmailModal({ username: user.username, token, onFollowLink: onFollowResetLink });
  });
}
