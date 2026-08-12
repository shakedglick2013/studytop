// רכיב שדה סיסמה משותף (הצגה/הסתרה + התראת Caps Lock), בשימוש בטופסי ההתחברות וההרשמה.

/** @param {{id:string, label:string, autocomplete:string}} opts @returns {string} */
export function passwordFieldHTML({ id, label, autocomplete }) {
  return `
    <div class="field">
      <label for="${id}">${label}</label>
      <div class="password-field-wrap">
        <input type="password" id="${id}" autocomplete="${autocomplete}" required>
        <button type="button" class="btn btn-icon btn-secondary password-toggle-btn" data-toggle-password="${id}" aria-label="הצגת הסיסמה">👁</button>
      </div>
      <p class="caps-lock-warning" id="${id}-capslock" style="display:none;">⚠ שימו לב, Caps Lock פעיל</p>
      <p class="field-error" id="${id}-error"></p>
    </div>
  `;
}

/** @param {string} id - חייב להתאים ל-id שהועבר ל-passwordFieldHTML */
export function wirePasswordField(id) {
  const input = document.getElementById(id);
  const toggleBtn = document.querySelector(`[data-toggle-password="${id}"]`);
  const capsWarning = document.getElementById(`${id}-capslock`);

  toggleBtn.addEventListener('click', () => {
    const isCurrentlyHidden = input.type === 'password';
    input.type = isCurrentlyHidden ? 'text' : 'password';
    toggleBtn.textContent = isCurrentlyHidden ? '🙈' : '👁';
    toggleBtn.setAttribute('aria-label', isCurrentlyHidden ? 'הסתרת הסיסמה' : 'הצגת הסיסמה');
  });

  function checkCapsLock(event) {
    if (typeof event.getModifierState === 'function') {
      capsWarning.style.display = event.getModifierState('CapsLock') ? 'block' : 'none';
    }
  }
  input.addEventListener('keyup', checkCapsLock);
  input.addEventListener('keydown', checkCapsLock);
}

/** @param {string} id @returns {HTMLElement} אלמנט הודעת השגיאה של שדה הסיסמה */
export function passwordFieldError(id) {
  return document.getElementById(`${id}-error`);
}
