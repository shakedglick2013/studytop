import { getData } from './data/storage.js';
import { renderSidebar, updateActiveLink, setupMobileToggle } from './components/sidebar.js';
import { initRouter } from './router.js';
import { applyTheme } from './utils/theme.js';
import { isLoggedIn, getCurrentUserId, clearCurrentUserId } from './auth/session.js';
import { findUserById } from './auth/userAccounts.js';
import { maybeAdvanceGrade } from './auth/gradeProgression.js';
import { renderAuthScreen } from './auth/authScreen.js';
import { renderOnboardingScreen } from './onboarding/onboardingScreen.js';
import { initRatingPrompt } from './rating/ratingTimer.js';

/** מציגה את הדשבורד (נקראת פעם אחת בלבד לכל טעינת עמוד: או מיד אם כבר יש session+פרופיל מושלם, או אחרי התחברות/הרשמה/onboarding מוצלחים). */
function showApp() {
  document.getElementById('auth-screen').style.display = 'none';
  document.querySelector('.app-shell').style.display = '';

  const data = getData();
  applyTheme(data.settings.theme);

  const navEl = document.getElementById('sidebar-nav');
  const mainEl = document.getElementById('main-content');
  const sidebarEl = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle');
  const logoutBtn = document.getElementById('logout-btn');

  renderSidebar(navEl);
  setupMobileToggle(toggleBtn, sidebarEl);

  initRouter(mainEl, (route) => {
    updateActiveLink(navEl, route.hash);
    document.title = `StudyTop | ${route.label}`;
  });

  logoutBtn.addEventListener('click', () => {
    clearCurrentUserId();
    window.location.reload();
  });

  initRatingPrompt();
}

function showAuth() {
  document.querySelector('.app-shell').style.display = 'none';
  const authRootEl = document.getElementById('auth-screen');
  authRootEl.style.display = '';
  renderAuthScreen(authRootEl, { onAuthenticated: boot });
}

function showOnboarding(user) {
  document.querySelector('.app-shell').style.display = 'none';
  const authRootEl = document.getElementById('auth-screen');
  authRootEl.style.display = '';
  renderOnboardingScreen(authRootEl, user, { onComplete: showApp });
}

function boot() {
  if (!isLoggedIn()) {
    showAuth();
    return;
  }
  const user = findUserById(getCurrentUserId());
  if (!user || !user.onboardingCompleted) {
    showOnboarding(user);
  } else {
    maybeAdvanceGrade(user); // מקדם כיתה אוטומטית אם התחילה שנת לימודים חדשה (1 בספטמבר) מאז הפעם האחרונה
    showApp();
  }
}

document.addEventListener('DOMContentLoaded', boot);
