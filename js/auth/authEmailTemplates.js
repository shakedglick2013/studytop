// טקסטים ותצוגה למודל "אימייל" מקומי מדומה (הרשמה/שחזור סיסמה) - שום מייל לא נשלח באמת,
// גם לא מ-studytop41@gmail.com (הכתובת המוצגת היא תוכן קוסמטי בלבד, לא שולחת בפועל).

import { openModal } from '../components/modal.js';
import { escapeHtml } from '../utils/htmlUtils.js';

const SENDER_LINE = 'מאת: StudyTop <studytop41@gmail.com>';

/** @param {{username:string, password:string}} opts @returns {string} */
export function buildWelcomeEmailText({ username, password }) {
  return `${SENDER_LINE}

היי ${username},
ברוכים הבאים ל StudyTop -
אנחנו שמחים שהצטרפת אלינו.
פרטי החשבון שלך:
שם משתמש: ${username}
סיסמה: ${password}
בעזרת האפליקציה שלנו תוכלו ללמוד בצורה מסודרת, בלי להיזכר בדברים ברגע האחרון.
ב StudyTop - תוכלו לסכם טקסטים, להמיר יחידות, לתכנן את השבוע כך שיהיה לכם זמן גם ללמוד וגם ליהנות, לתרגל למבחנים בלי לשבור את הראש ועוד המון.
כל מה שנשאר הוא להיכנס ולהתחיל ללמוד.
מחכים לך,
צוות StudyTop`;
}

/** @param {{username:string}} opts @returns {string} */
export function buildPasswordRecoveryEmailText({ username }) {
  return `${SENDER_LINE}

היי ${username},
ביקשת מ-StudyTop לשחזר סיסמה.
לחצי על הקישור למטה כדי לקבוע סיסמה חדשה וקבועה לחשבון שלך.
אם לא ביקשת זאת, אפשר להתעלם מההודעה - הסיסמה שלך לא תשתנה.

צוות StudyTop`;
}

/** @param {{title:string, bodyText:string, onClose?:() => void}} opts */
export function showAuthEmailModal({ title, bodyText, onClose }) {
  openModal({
    title,
    bodyHtml: `
      <p class="placeholder-note">זהו מייל מדומה מקומי - לא נשלח מייל אמיתי.</p>
      <p class="auth-email-preview">${escapeHtml(bodyText)}</p>
    `,
    actions: [{ label: 'הבנתי, ממשיכים', className: 'btn-primary' }],
    onClose,
  });
}

/**
 * מציגה מודל "אימייל שחזור סיסמה" מדומה, עם קישור פנימי שאפשר ללחוץ עליו כדי לעבור
 * למסך קביעת סיסמה חדשה. לחיצה על הקישור סוגרת את המודל וקוראת ל-onFollowLink; סגירה
 * אחרת (הכפתור, Escape, הרקע) לא עושה כלום - המשתמשת נשארת במסך "שכחתי סיסמה".
 * @param {{username:string, token:string, onFollowLink:(token:string) => void}} opts
 */
export function showPasswordResetEmailModal({ username, token, onFollowLink }) {
  const bodyText = buildPasswordRecoveryEmailText({ username });
  const close = openModal({
    title: 'קישור לשחזור סיסמה נשלח',
    bodyHtml: `
      <p class="placeholder-note">זהו מייל מדומה מקומי - לא נשלח מייל אמיתי.</p>
      <p class="auth-email-preview">${escapeHtml(bodyText)}</p>
      <a href="#" id="auth-reset-link" class="auth-reset-link">לקביעת סיסמה חדשה</a>
    `,
    actions: [{ label: 'סגירה', className: 'btn-secondary' }],
  });

  document.getElementById('auth-reset-link').addEventListener('click', (event) => {
    event.preventDefault();
    close();
    onFollowLink(token);
  });
}
