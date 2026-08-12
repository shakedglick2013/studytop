/**
 * מציג הודעת טוסט זמנית בפינת המסך.
 * @param {string} message
 * @param {'success'|'error'} [type]
 */
export function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.setAttribute('role', 'status');
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}
