import { ROUTES } from '../router.js';

/** @param {HTMLElement} navEl */
export function renderSidebar(navEl) {
  navEl.innerHTML = ROUTES.map(
    (r) => `
      <li>
        <a href="#${r.hash}" class="sidebar-link" data-hash="${r.hash}">
          <span class="icon" aria-hidden="true">${r.icon}</span>
          <span>${r.label}</span>
        </a>
      </li>
    `
  ).join('');
}

/**
 * @param {HTMLElement} navEl
 * @param {string} activeHash
 */
export function updateActiveLink(navEl, activeHash) {
  navEl.querySelectorAll('.sidebar-link').forEach((link) => {
    const isActive = link.dataset.hash === activeHash;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * מחבר את כפתור ההמבורגר לפתיחה/סגירה של הסיידבר במובייל, וסוגר בבחירת קישור.
 * @param {HTMLElement} toggleBtn
 * @param {HTMLElement} sidebarEl
 */
export function setupMobileToggle(toggleBtn, sidebarEl) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = sidebarEl.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  sidebarEl.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      sidebarEl.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
