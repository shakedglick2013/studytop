import { resetPasswordWithToken } from './userAccounts.js';
import { passwordFieldHTML, wirePasswordField, passwordFieldError } from './passwordFieldUI.js';

export function resetPasswordFormHTML() {
  return `
    <form id="reset-password-form" novalidate>
      <p class="page-subtitle">בחרי סיסמה חדשה וקבועה לחשבון שלך.</p>
      <div id="reset-password-general-error"></div>
      ${passwordFieldHTML({ id: 'reset-password-new', label: 'סיסמה חדשה', autocomplete: 'new-password' })}
      ${passwordFieldHTML({ id: 'reset-password-confirm', label: 'אימות סיסמה', autocomplete: 'new-password' })}
      <button type="submit" id="reset-password-submit-btn" class="btn btn-primary auth-submit-btn">שמירת סיסמה</button>
    </form>
  `;
}

/**
 * @param {string} token
 * @param {() => void} onSuccess - נקראת אחרי קביעת הסיסמה החדשה בהצלחה
 */
export function wireResetPasswordForm(token, onSuccess) {
  wirePasswordField('reset-password-new');
  wirePasswordField('reset-password-confirm');

  const form = document.getElementById('reset-password-form');
  const newEl = document.getElementById('reset-password-new');
  const confirmEl = document.getElementById('reset-password-confirm');
  const submitBtn = document.getElementById('reset-password-submit-btn');
  const generalErrorEl = document.getElementById('reset-password-general-error');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    generalErrorEl.innerHTML = '';
    passwordFieldError('reset-password-new').textContent = '';
    passwordFieldError('reset-password-confirm').textContent = '';

    const newPassword = newEl.value;
    const confirmPassword = confirmEl.value;

    let hasError = false;
    if (!newPassword) {
      passwordFieldError('reset-password-new').textContent = 'יש להזין סיסמה';
      hasError = true;
    } else if (newPassword.length < 6) {
      passwordFieldError('reset-password-new').textContent = 'הסיסמה צריכה להכיל לפחות 6 תווים';
      hasError = true;
    }
    if (!hasError && newPassword !== confirmPassword) {
      passwordFieldError('reset-password-confirm').textContent = 'הסיסמאות אינן תואמות.';
      hasError = true;
    }
    if (hasError) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'שומרת...';

    try {
      await resetPasswordWithToken(token, newPassword);
      onSuccess();
    } catch (err) {
      generalErrorEl.innerHTML = `<div class="auth-general-error">${err.message}</div>`;
      submitBtn.disabled = false;
      submitBtn.textContent = 'שמירת סיסמה';
    }
  });
}
