import { registerUser } from './userAccounts.js';
import { setCurrentUserId } from './session.js';
import { passwordFieldHTML, wirePasswordField, passwordFieldError } from './passwordFieldUI.js';

export function registerFormHTML() {
  return `
    <form id="register-form" novalidate>
      <div class="field">
        <label for="register-username">שם משתמש</label>
        <input type="text" id="register-username" autocomplete="username" required>
        <p class="field-error" id="register-username-error"></p>
      </div>
      ${passwordFieldHTML({ id: 'register-password', label: 'צרו סיסמה', autocomplete: 'new-password' })}
      ${passwordFieldHTML({ id: 'register-confirm', label: 'אימות סיסמה', autocomplete: 'new-password' })}
      <button type="submit" id="register-submit-btn" class="btn btn-primary auth-submit-btn">הרשמה</button>
    </form>
  `;
}

/** @param {() => void} onSuccess */
export function wireRegisterForm(onSuccess) {
  wirePasswordField('register-password');
  wirePasswordField('register-confirm');

  const form = document.getElementById('register-form');
  const usernameEl = document.getElementById('register-username');
  const passwordEl = document.getElementById('register-password');
  const confirmEl = document.getElementById('register-confirm');
  const submitBtn = document.getElementById('register-submit-btn');
  const usernameErrorEl = document.getElementById('register-username-error');

  function clearErrors() {
    usernameErrorEl.textContent = '';
    passwordFieldError('register-password').textContent = '';
    passwordFieldError('register-confirm').textContent = '';
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearErrors();

    const username = usernameEl.value.trim();
    const password = passwordEl.value;
    const confirmPassword = confirmEl.value;

    let hasError = false;
    if (!username) {
      usernameErrorEl.textContent = 'יש להזין שם משתמש';
      hasError = true;
    }
    if (!password) {
      passwordFieldError('register-password').textContent = 'יש להזין סיסמה';
      hasError = true;
    } else if (password.length < 6) {
      passwordFieldError('register-password').textContent = 'הסיסמה צריכה להכיל לפחות 6 תווים';
      hasError = true;
    }
    if (!hasError && password !== confirmPassword) {
      passwordFieldError('register-confirm').textContent = 'הסיסמאות אינן תואמות.';
      hasError = true;
    }
    if (hasError) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'נרשמת...';

    try {
      const user = await registerUser(username, password);
      setCurrentUserId(user.id);
      onSuccess();
    } catch (err) {
      if (err.code === 'USERNAME_TAKEN') {
        usernameErrorEl.textContent = 'שם המשתמש כבר קיים. נא לבחור שם משתמש אחר.';
      } else {
        usernameErrorEl.textContent = 'משהו השתבש, נסי שוב.';
      }
      submitBtn.disabled = false;
      submitBtn.textContent = 'הרשמה';
    }
  });
}
