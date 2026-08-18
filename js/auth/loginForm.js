import { verifyLogin } from './userAccounts.js';
import { setCurrentUserId } from './session.js';
import { passwordFieldHTML, wirePasswordField, passwordFieldError } from './passwordFieldUI.js';

const LOGIN_ERROR_MESSAGE = 'יש שגיאה בשם המשתמש או בסיסמה, נא לנסות שוב';

export function loginFormHTML() {
  return `
    <form id="login-form" novalidate>
      <div id="login-general-error"></div>
      <div class="field">
        <label for="login-username">שם משתמש</label>
        <input type="text" id="login-username" autocomplete="username">
        <p class="auth-identifier-divider">או</p>
        <label for="login-email">אימייל</label>
        <input type="email" id="login-email" autocomplete="email">
        <p class="field-error" id="login-identifier-error"></p>
      </div>
      ${passwordFieldHTML({ id: 'login-password', label: 'סיסמה', autocomplete: 'current-password' })}
      <button type="submit" id="login-submit-btn" class="btn btn-primary auth-submit-btn">כניסה</button>
    </form>
  `;
}

/** @param {() => void} onSuccess */
export function wireLoginForm(onSuccess) {
  wirePasswordField('login-password');

  const form = document.getElementById('login-form');
  const usernameEl = document.getElementById('login-username');
  const emailEl = document.getElementById('login-email');
  const passwordEl = document.getElementById('login-password');
  const submitBtn = document.getElementById('login-submit-btn');
  const generalErrorEl = document.getElementById('login-general-error');
  const identifierErrorEl = document.getElementById('login-identifier-error');

  function showCredentialsError() {
    generalErrorEl.innerHTML = `<div class="auth-general-error">${LOGIN_ERROR_MESSAGE}</div>`;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    generalErrorEl.innerHTML = '';
    identifierErrorEl.textContent = '';
    passwordFieldError('login-password').textContent = '';

    const username = usernameEl.value.trim();
    const email = emailEl.value.trim();
    const password = passwordEl.value;

    let hasError = false;
    const filledCount = (username ? 1 : 0) + (email ? 1 : 0);
    if (filledCount === 0) {
      identifierErrorEl.textContent = 'יש למלא שם משתמש או אימייל';
      hasError = true;
    } else if (filledCount === 2) {
      identifierErrorEl.textContent = 'יש למלא רק אחד מהשדות - שם משתמש או אימייל';
      hasError = true;
    }
    if (!password) {
      passwordFieldError('login-password').textContent = 'יש למלא סיסמה';
      hasError = true;
    }
    if (hasError) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'בודקת...';

    const user = await verifyLogin(username || email, password);

    if (!user) {
      showCredentialsError();
      passwordEl.value = '';
      submitBtn.disabled = false;
      submitBtn.textContent = 'כניסה';
      return;
    }

    setCurrentUserId(user.id);
    onSuccess();
  });
}
