// ניתוב מבוסס hash - בלי ספריית ניתוב חיצונית ובלי שלב build.

export const ROUTES = [
  { hash: 'home', label: 'דף הבית', icon: '🏠', load: () => import('./pages/home.js') },
  { hash: 'schedule', label: 'מערכת שעות', icon: '🗓️', load: () => import('./pages/schedule.js') },
  { hash: 'homework', label: 'שיעורי בית', icon: '📝', load: () => import('./pages/homework.js') },
  { hash: 'planner', label: 'מתכנן שבועי', icon: '🧠', load: () => import('./pages/planner.js') },
  { hash: 'quiz', label: 'מחולל בחנים', icon: '❓', load: () => import('./pages/quiz.js') },
  { hash: 'summarizer', label: 'מסכם טקסטים', icon: '📄', load: () => import('./pages/summarizer.js') },
  { hash: 'spellcheck', label: 'בודק איות', icon: '✔️', load: () => import('./pages/spellcheck.js') },
  { hash: 'converter', label: 'ממיר יחידות', icon: '📏', load: () => import('./pages/converter.js') },
  { hash: 'grades', label: 'מחשבון ציונים', icon: '📊', load: () => import('./pages/grades.js') },
  { hash: 'subjects', label: 'מקצועות', icon: '📚', load: () => import('./pages/subjects.js') },
  { hash: 'settings', label: 'הגדרות', icon: '⚙️', load: () => import('./pages/settings.js') },
];

export function getRouteFromHash() {
  const hash = window.location.hash.replace('#', '') || 'home';
  return ROUTES.find((r) => r.hash === hash) ?? ROUTES[0];
}

async function renderRoute(container) {
  const route = getRouteFromHash();
  container.innerHTML = '';
  const module = await route.load();
  module.render(container);
  return route;
}

/**
 * מפעיל את הניתוב: מציג את הדף המתאים ל-hash הנוכחי, ומאזין לשינויים.
 * @param {HTMLElement} container - אזור התוכן הראשי
 * @param {(route: object) => void} [onRouteChange]
 */
export function initRouter(container, onRouteChange) {
  async function handle() {
    const route = await renderRoute(container);
    container.focus();
    onRouteChange?.(route);
  }
  window.addEventListener('hashchange', handle);
  handle();
}
