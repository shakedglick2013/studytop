import { loginFormHTML, wireLoginForm } from './loginForm.js';
import { registerFormHTML, wireRegisterForm } from './registerForm.js';
import { forgotPasswordFormHTML, wireForgotPasswordForm } from './forgotPasswordForm.js';
import { resetPasswordFormHTML, wireResetPasswordForm } from './resetPasswordForm.js';

const SUBTITLES = {
  login: 'התחברות לחשבון שלך',
  register: 'יצירת חשבון חדש',
  'forgot-password': 'שחזור סיסמה',
  'reset-password': 'קביעת סיסמה חדשה',
};

const BACK_TO_LOGIN_MODES = ['forgot-password', 'reset-password'];

/**
 * מציגה את מסך ההתחברות/הרשמה/שחזור סיסמה בתוך rootEl, עם מעבר בין המצבים.
 * @param {HTMLElement} rootEl
 * @param {{onAuthenticated: () => void}} opts
 */
export function renderAuthScreen(rootEl, { onAuthenticated }) {
  let mode = 'login'; // 'login' | 'register' | 'forgot-password' | 'reset-password'
  let resetToken = null;
  let showResetSuccessMessage = false;

  function goToLogin() {
    mode = 'login';
    resetToken = null;
    render();
  }

  function render() {
    const formHTML =
      mode === 'login'
        ? loginFormHTML()
        : mode === 'register'
          ? registerFormHTML()
          : mode === 'forgot-password'
            ? forgotPasswordFormHTML()
            : resetPasswordFormHTML();

    const footerHTML = BACK_TO_LOGIN_MODES.includes(mode)
      ? `<p class="auth-switch-line"><button type="button" id="auth-back-to-login-btn">חזרה להתחברות</button></p>`
      : `
        <p class="auth-switch-line">
          ${mode === 'login' ? 'אין לך חשבון? ' : 'יש לך כבר חשבון? '}
          <button type="button" id="auth-switch-btn">${mode === 'login' ? 'הרשמה' : 'התחברות'}</button>
        </p>
        ${mode === 'login' ? `<p class="auth-switch-line"><button type="button" id="auth-forgot-btn">שכחתי סיסמה</button></p>` : ''}
      `;

    const successMessageHTML =
      mode === 'login' && showResetSuccessMessage
        ? `<p class="auth-info-message">הסיסמה עודכנה בהצלחה - אפשר להתחבר עם הסיסמה החדשה.</p>`
        : '';
    showResetSuccessMessage = false;

    rootEl.innerHTML = `
      <div class="auth-screen">
        <div class="auth-card">
          <div class="auth-header">
            <div class="auth-logo" aria-hidden="true">📘</div>
            <h1 class="auth-title">StudyTop</h1>
            <p class="auth-subtitle">${SUBTITLES[mode]}</p>
          </div>
          ${successMessageHTML}
          ${formHTML}
          ${footerHTML}
        </div>
      </div>
    `;

    if (mode === 'login') wireLoginForm(onAuthenticated);
    else if (mode === 'register') wireRegisterForm(onAuthenticated);
    else if (mode === 'forgot-password') {
      wireForgotPasswordForm((token) => {
        mode = 'reset-password';
        resetToken = token;
        render();
      });
    } else {
      wireResetPasswordForm(resetToken, () => {
        showResetSuccessMessage = true;
        goToLogin();
      });
    }

    if (BACK_TO_LOGIN_MODES.includes(mode)) {
      document.getElementById('auth-back-to-login-btn').addEventListener('click', goToLogin);
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
