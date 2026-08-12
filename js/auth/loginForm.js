import { verifyLogin } from './userAccounts.js';
import { setCurrentUserId } from './session.js';
import { passwordFieldHTML, wirePasswordField } from './passwordFieldUI.js';

const LOGIN_ERROR_MESSAGE = 'יש שגיאה בשם המשתמש או בסיסמה, נא לנסות שוב';

export function loginFormHTML() {
  return `
    <form id="login-form" novalidate>
      <div id="login-general-error"></div>
      <div class="field">
        <label for="login-username">שם משתמש</label>
        <input type="text" id="login-username" autocomplete="username" required>
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
  const passwordEl = document.getElementById('login-password');
  const submitBtn = document.getElementById('login-submit-btn');
  const generalErrorEl = document.getElementById('login-general-error');

  function showError() {
    generalErrorEl.innerHTML = `<div class="auth-general-error">${LOGIN_ERROR_MESSAGE}</div>`;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    generalErrorEl.innerHTML = '';

    const username = usernameEl.value.trim();
    const password = passwordEl.value;

    if (!username || !password) {
      showError();
      passwordEl.value = '';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'בודקת...';

    const user = await verifyLogin(username, password);

    if (!user) {
      showError();
      passwordEl.value = '';
      submitBtn.disabled = false;
      submitBtn.textContent = 'כניסה';
      return;
    }

    setCurrentUserId(user.id);
    onSuccess();
  });
}
