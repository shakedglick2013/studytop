import { loginFormHTML, wireLoginForm } from './loginForm.js';
import { registerFormHTML, wireRegisterForm } from './registerForm.js';

/**
 * מציגה את מסך ההתחברות/הרשמה בתוך rootEl, עם מעבר בין שני המצבים.
 * @param {HTMLElement} rootEl
 * @param {{onAuthenticated: () => void}} opts
 */
export function renderAuthScreen(rootEl, { onAuthenticated }) {
  let mode = 'login';

  function render() {
    rootEl.innerHTML = `
      <div class="auth-screen">
        <div class="auth-card">
          <div class="auth-header">
            <div class="auth-logo" aria-hidden="true">📘</div>
            <h1 class="auth-title">StudyTop</h1>
            <p class="auth-subtitle">${mode === 'login' ? 'התחברות לחשבון שלך' : 'יצירת חשבון חדש'}</p>
          </div>
          ${mode === 'login' ? loginFormHTML() : registerFormHTML()}
          <p class="auth-switch-line">
            ${mode === 'login' ? 'אין לך חשבון? ' : 'יש לך כבר חשבון? '}
            <button type="button" id="auth-switch-btn">${mode === 'login' ? 'הרשמה' : 'התחברות'}</button>
          </p>
        </div>
      </div>
    `;

    if (mode === 'login') wireLoginForm(onAuthenticated);
    else wireRegisterForm(onAuthenticated);

    document.getElementById('auth-switch-btn').addEventListener('click', () => {
      mode = mode === 'login' ? 'register' : 'login';
      render();
    });
  }

  render();
}
