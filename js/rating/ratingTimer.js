// מנהל את הטיימר של חלון דירוג האפליקציה: 60 דקות ממושב מצטבר מהכניסה הראשונה לדשבורד
// (לא ממושב יחיד/רענון), עם צינון של 24 שעות אם המשתמשת רק סגרה בלי לדרג.

import { getData, updateData } from '../data/storage.js';
import { showRatingModal } from './ratingModal.js';

const PROMPT_DELAY_MS = 60 * 60 * 1000; // 60 דקות
const DISMISS_COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 שעות

let scheduledTimeoutId = null;
let promptShownThisSession = false;

function clearScheduledPrompt() {
  if (scheduledTimeoutId !== null) {
    clearTimeout(scheduledTimeoutId);
    scheduledTimeoutId = null;
  }
}

function defaultRatingState() {
  return { firstDashboardEntryAt: null, ratingPromptShown: false, ratingPromptDismissedAt: null, rating: null, ratedAt: null };
}

/** קוראת פעם אחת בכל כניסה לדשבורד (לא בכל ניווט בין דפים) - קובעת מתי (ואם) להציג את חלון הדירוג. */
export function initRatingPrompt() {
  clearScheduledPrompt();
  promptShownThisSession = false;

  let data = getData();
  let ratingState = data.ratingState ?? defaultRatingState();

  if (ratingState.rating != null) return; // כבר דירגה - אין צורך בטיימר בכלל

  let firstEntryMs = ratingState.firstDashboardEntryAt ? new Date(ratingState.firstDashboardEntryAt).getTime() : NaN;
  if (!Number.isFinite(firstEntryMs)) {
    // אין עדיין זמן כניסה ראשונה, או שהזמן השמור פגום - קובעים (או מאתחלים) עכשיו, פעם אחת בלבד.
    data = updateData((d) => {
      d.ratingState = { ...defaultRatingState(), ...d.ratingState, firstDashboardEntryAt: new Date().toISOString() };
      return d;
    });
    ratingState = data.ratingState;
    firstEntryMs = new Date(ratingState.firstDashboardEntryAt).getTime();
  }

  function attemptShow() {
    if (promptShownThisSession) return;
    const freshState = getData().ratingState ?? defaultRatingState();
    if (freshState.rating != null) return;
    if (freshState.ratingPromptDismissedAt) {
      const sinceDismissMs = Date.now() - new Date(freshState.ratingPromptDismissedAt).getTime();
      if (Number.isFinite(sinceDismissMs) && sinceDismissMs < DISMISS_COOLDOWN_MS) return;
    }
    promptShownThisSession = true;
    showRatingModal();
  }

  const remaining = PROMPT_DELAY_MS - (Date.now() - firstEntryMs);
  if (remaining <= 0) {
    attemptShow();
  } else {
    scheduledTimeoutId = setTimeout(attemptShow, remaining);
  }
}

/** מנקה טיימר מתוזמן (למשל לפני logout). */
export function stopRatingPrompt() {
  clearScheduledPrompt();
}
