// טקסטים ותצוגה למודל "אימייל" מקומי מדומה (הרשמה/שחזור סיסמה) - שום מייל לא נשלח באמת.

import { openModal } from '../components/modal.js';
import { escapeHtml } from '../utils/htmlUtils.js';

/** @param {{username:string, password:string}} opts @returns {string} */
export function buildWelcomeEmailText({ username, password }) {
  return `היי ${username},
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

/** @param {{username:string, password:string}} opts @returns {string} */
export function buildPasswordRecoveryEmailText({ username, password }) {
  return `היי ${username},
ביקשת לשחזר את הסיסמה שלך ב StudyTop -
לאחר שאימתנו את החשבון שלך, הנה פרטי ההתחברות שלך:
שם משתמש: ${username}
סיסמה: ${password}
עכשיו אפשר לחזור ל-StudyTop ולהמשיך ללמוד.
אם לא ביקשת לשחזר את הסיסמה, מומלץ לשנות אותה בהקדם.

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
