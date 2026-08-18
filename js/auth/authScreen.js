import { loginFormHTML, wireLoginForm } from './loginForm.js';
import { registerFormHTML, wireRegisterForm } from './registerForm.js';
import { forgotPasswordFormHTML, wireForgotPasswordForm } from './forgotPasswordForm.js';

const SUBTITLES = {
  login: 'התחברות לחשבון שלך',
  register: 'יצירת חשבון חדש',
  'forgot-password': 'שחזור סיסמה',
};

/**
 * מציגה את מסך ההתחברות/הרשמה/שחזור סיסמה בתוך rootEl, עם מעבר בין שלושת המצבים.
 * @param {HTMLElement} rootEl
 * @param {{onAuthenticated: () => void}} opts
 */
export function renderAuthScreen(rootEl, { onAuthenticated }) {
  let mode = 'login'; // 'login' | 'register' | 'forgot-password'

  function render() {
    const formHTML = mode === 'login' ? loginFormHTML() : mode === 'register' ? registerFormHTML() : forgotPasswordFormHTML();

    const footerHTML =
      mode === 'forgot-password'
        ? `<p class="auth-switch-line"><button type="button" id="auth-back-to-login-btn">חזרה להתחברות</button></p>`
        : `
        <p class="auth-switch-line">
          ${mode === 'login' ? 'אין לך חשבון? ' : 'יש לך כבר חשבון? '}
          <button type="button" id="auth-switch-btn">${mode === 'login' ? 'הרשמה' : 'התחברות'}</button>
        </p>
        ${mode === 'login' ? `<p class="auth-switch-line"><button type="button" id="auth-forgot-btn">שכחתי סיסמה</button></p>` : ''}
      `;

    rootEl.innerHTML = `
      <div class="auth-screen">
        <div class="auth-card">
          <div class="auth-header">
            <div class="auth-logo" aria-hidden="true">📘</div>
            <h1 class="auth-title">StudyTop</h1>
            <p class="auth-subtitle">${SUBTITLES[mode]}</p>
          </div>
          ${formHTML}
          ${footerHTML}
        </div>
      </div>
    `;

    if (mode === 'login') wireLoginForm(onAuthenticated);
    else if (mode === 'register') wireRegisterForm(onAuthenticated);
    else {
      wireForgotPasswordForm(() => {
        mode = 'login';
        render();
      });
    }

    if (mode === 'forgot-password') {
      document.getElementById('auth-back-to-login-btn').addEventListener('click', () => {
        mode = 'login';
        render();
      });
    } else {
      document.getElementById('auth-switch-btn').addEventListener('click', () => {
        mode = mode === 'login' ? 'register' : 'login';
        render();
      });
      if (mode === 'login') {
        document.getElementById('auth-forgot-btn').addEventListener('click', () => {
          mode = 'forgot-password';
          render();
        });
      }
    }
  }

  render();
}
