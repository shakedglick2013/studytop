/**
 * מחזיר HTML למצב "אין נתונים עדיין".
 * @param {{icon?:string, title:string, description:string}} opts
 * @returns {string}
 */
export function emptyStateHTML({ icon = '📭', title, description }) {
  return `
    <div class="empty-state">
      <div class="empty-icon" aria-hidden="true">${icon}</div>
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
  `;
}
