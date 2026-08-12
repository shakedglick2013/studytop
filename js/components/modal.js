/**
 * פותח חלון מודאלי גנרי. אם action.onClick מחזיר false במפורש (למשל ולידציה שנכשלה),
 * המודל נשאר פתוח כדי שאפשר יהיה להציג שגיאה ולתקן.
 * @param {{title:string, bodyHtml:string, actions:{label:string, className?:string, onClick?:Function}[], onClose?:() => void}} opts
 * @returns {() => void} פונקציה לסגירת המודל
 */
export function openModal({ title, bodyHtml, actions, onClose }) {
  const root = document.getElementById('modal-root');
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <h2 id="modal-title" class="modal-title">${title}</h2>
      <div class="modal-body">${bodyHtml}</div>
      <div class="modal-actions"></div>
    </div>
  `;
  root.appendChild(overlay);

  function close() {
    overlay.remove();
    document.removeEventListener('keydown', onKeydown);
    onClose?.();
  }

  function onKeydown(event) {
    if (event.key === 'Escape') close();
  }
  document.addEventListener('keydown', onKeydown);

  const actionsEl = overlay.querySelector('.modal-actions');
  actions.forEach((action) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `btn ${action.className ?? 'btn-secondary'}`;
    btn.textContent = action.label;
    btn.addEventListener('click', (event) => {
      const result = action.onClick?.(event);
      if (result !== false) close();
    });
    actionsEl.appendChild(btn);
  });

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) close();
  });

  overlay.querySelector('.modal').focus?.();
  return close;
}

/**
 * חלון אישור לפני פעולה בלתי הפיכה (כמו מחיקה).
 * @param {{title:string, message:string, confirmLabel?:string, onConfirm:Function}} opts
 */
export function confirmDialog({ title, message, confirmLabel = 'מחיקה', onConfirm }) {
  openModal({
    title,
    bodyHtml: `<p>${message}</p>`,
    actions: [
      { label: 'ביטול', className: 'btn-secondary' },
      { label: confirmLabel, className: 'btn-danger', onClick: onConfirm },
    ],
  });
}
