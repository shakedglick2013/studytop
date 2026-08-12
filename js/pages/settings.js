import { getData, updateData, exportJSON, importJSON, clearAllData } from '../data/storage.js';
import { DAY_NAMES_HE, timeToMinutes } from '../utils/dateUtils.js';
import { applyTheme } from '../utils/theme.js';
import { openModal, confirmDialog } from '../components/modal.js';
import { showToast } from '../components/toast.js';
import { emptyStateHTML } from '../components/emptyState.js';
import { escapeHtml } from '../utils/htmlUtils.js';
import { getCurrentUserId } from '../auth/session.js';
import { findUserById, updateUserProfile, deleteUserAccount } from '../auth/userAccounts.js';
import { verifyPassword } from '../auth/passwordService.js';
import { passwordFieldHTML, wirePasswordField, passwordFieldError } from '../auth/passwordFieldUI.js';
import { currentSchoolYearStart } from '../auth/gradeProgression.js';
import { GRADES } from '../onboarding/subjectCatalog.js';
import { renderStarRating } from '../components/starRating.js';

const DELETE_ACCOUNT_CONFIRM_TEXT = 'מחק את החשבון שלי';

/** שלב 2: בקשת סיסמה + טקסט אישור. מוחקת רק אחרי שהסיסמה אומתה בפועל. @param {import('../models/types.js').LocalUser} user */
function openDeleteAccountPasswordModal(user) {
  const bodyHtml = `
    <p>כדי לאשר את מחיקת החשבון, נא להזין את הסיסמה שלך.</p>
    ${passwordFieldHTML({ id: 'delete-account-password', label: 'סיסמה', autocomplete: 'current-password' })}
    <div class="field">
      <label for="delete-account-confirm-text">לאישור נוסף, הקלידי בדיוק: "${DELETE_ACCOUNT_CONFIRM_TEXT}"</label>
      <input type="text" id="delete-account-confirm-text" autocomplete="off">
    </div>
    <p id="delete-account-general-error" class="field-error"></p>
  `;

  let submitting = false;

  const close = openModal({
    title: 'אימות מחיקת חשבון',
    bodyHtml,
    actions: [
      { label: 'ביטול', className: 'btn-secondary' },
      {
        label: 'מחיקה לצמיתות',
        className: 'btn-danger',
        onClick: (event) => {
          event.preventDefault();
          if (submitting) return false;

          const passwordEl = document.getElementById('delete-account-password');
          const confirmTextEl = document.getElementById('delete-account-confirm-text');
          const passwordErrorEl = passwordFieldError('delete-account-password');
          const generalErrorEl = document.getElementById('delete-account-general-error');
          passwordErrorEl.textContent = '';
          generalErrorEl.textContent = '';

          const password = passwordEl.value;
          const confirmText = confirmTextEl.value.trim();

          if (confirmText !== DELETE_ACCOUNT_CONFIRM_TEXT) {
            generalErrorEl.textContent = `נא להקליד בדיוק "${DELETE_ACCOUNT_CONFIRM_TEXT}" לאישור`;
            return false;
          }
          if (!password) {
            passwordErrorEl.textContent = 'נא להזין את הסיסמה שלך';
            return false;
          }

          submitting = true;
          const submitBtn = event.currentTarget;
          submitBtn.disabled = true;

          verifyPassword(password, user.passwordHash, user.passwordSalt).then((ok) => {
            if (!ok) {
              passwordErrorEl.textContent = 'הסיסמה שהוזנה אינה נכונה';
              passwordEl.value = '';
              submitting = false;
              submitBtn.disabled = false;
              return;
            }
            try {
              deleteUserAccount(user.id);
              close();
              showToast('החשבון וכל הנתונים השייכים אליו נמחקו מהמכשיר.', 'success');
              setTimeout(() => window.location.reload(), 800);
            } catch (err) {
              generalErrorEl.textContent = `שגיאה במחיקת החשבון: ${err.message}`;
              submitting = false;
              submitBtn.disabled = false;
            }
          });

          return false; // המודל נשאר פתוח עד שהאימות האסינכרוני מסתיים
        },
      },
    ],
  });

  wirePasswordField('delete-account-password');

  // בזמן הפתיחה של המודל הזה ייתכן שמודל השלב הראשון עדיין בתהליך סגירה - לכן מאתרים
  // את הכפתור לפי המודל האחרון שנפתח (זה שהרגע יצרנו), לא לפי querySelector גלובלי.
  const overlays = document.querySelectorAll('#modal-root .modal-overlay');
  const myOverlay = overlays[overlays.length - 1];
  const submitBtnEl = myOverlay.querySelector('.btn-danger');
  const passwordInputEl = document.getElementById('delete-account-password');
  const confirmTextInputEl = document.getElementById('delete-account-confirm-text');

  function updateSubmitState() {
    const ready = passwordInputEl.value.length > 0 && confirmTextInputEl.value.trim() === DELETE_ACCOUNT_CONFIRM_TEXT;
    submitBtnEl.disabled = !ready;
  }
  submitBtnEl.disabled = true;
  passwordInputEl.addEventListener('input', updateSubmitState);
  confirmTextInputEl.addEventListener('input', updateSubmitState);
}

/** שלב 1: אזהרה כללית לפני מחיקת חשבון. @param {import('../models/types.js').LocalUser} user */
function openDeleteAccountWarningModal(user) {
  openModal({
    title: 'מחיקת החשבון',
    bodyHtml: `<p>מחיקת החשבון תמחק לצמיתות את כל הפרטים והנתונים שלך מהמכשיר הזה. לא יהיה ניתן לשחזר אותם. האם להמשיך?</p>`,
    actions: [
      { label: 'ביטול', className: 'btn-secondary' },
      {
        label: 'המשך למחיקת החשבון',
        className: 'btn-danger',
        onClick: () => {
          openDeleteAccountPasswordModal(user);
        },
      },
    ],
  });
}

function freeHourFormBody() {
  const dayOptions = DAY_NAMES_HE.map((name, i) => `<option value="${i}">${name}</option>`).join('');
  return `
    <form id="free-hour-form">
      <div class="field">
        <label for="fh-day">יום</label>
        <select id="fh-day">${dayOptions}</select>
      </div>
      <div class="field">
        <label for="fh-start">משעה</label>
        <input type="time" id="fh-start" value="16:00" required>
      </div>
      <div class="field">
        <label for="fh-end">עד שעה</label>
        <input type="time" id="fh-end" value="18:00" required>
      </div>
      <p id="fh-form-error" class="field-error"></p>
    </form>
  `;
}

function openFreeHourModal(container) {
  openModal({
    title: 'הוספת חלון שעות פנויות',
    bodyHtml: freeHourFormBody(),
    actions: [
      { label: 'ביטול', className: 'btn-secondary' },
      {
        label: 'הוספה',
        className: 'btn-primary',
        onClick: (event) => {
          event.preventDefault();
          const errorEl = document.getElementById('fh-form-error');
          const start = document.getElementById('fh-start').value;
          const end = document.getElementById('fh-end').value;
          if (timeToMinutes(start) >= timeToMinutes(end)) {
            errorEl.textContent = 'שעת הסיום צריכה להיות אחרי שעת ההתחלה';
            return false;
          }
          const day = Number(document.getElementById('fh-day').value);
          updateData((d) => {
            d.settings.freeHours = [...d.settings.freeHours, { day, start, end }];
            return d;
          });
          showToast('חלון השעות נוסף', 'success');
          render(container);
        },
      },
    ],
  });
}

function removeFreeHour(container, index) {
  updateData((d) => {
    d.settings.freeHours = d.settings.freeHours.filter((_, i) => i !== index);
    return d;
  });
  render(container);
}

function handleExport() {
  const json = exportJSON();
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `studytop-data-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast('הקובץ יוצא', 'success');
}

function handleImportFile(container, file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      importJSON(reader.result);
      showToast('הנתונים יובאו בהצלחה - טוענים מחדש...', 'success');
      setTimeout(() => window.location.reload(), 800);
    } catch (err) {
      showToast(`שגיאה בייבוא: ${err.message}`, 'error');
    }
  };
  reader.onerror = () => showToast('לא הצלחתי לקרוא את הקובץ', 'error');
  reader.readAsText(file);
}

function handleDeleteAll(container) {
  confirmDialog({
    title: 'מחיקת כל הנתונים',
    message: 'זה ימחק לצמיתות את כל המקצועות, השיעורים, המשימות, הציונים והבחנים שלך (החשבון עצמו יישאר). אי אפשר לבטל את זה - להמשיך?',
    confirmLabel: 'מחיקה סופית',
    onConfirm: () => {
      clearAllData();
      showToast('הנתונים נמחקו - טוענים מחדש...', 'success');
      setTimeout(() => window.location.reload(), 800);
    },
  });
}

export function render(container) {
  const data = getData();
  const settings = data.settings;
  const user = findUserById(getCurrentUserId());

  container.innerHTML = `
    <header class="page-header">
      <div>
        <h1 class="page-title">הגדרות</h1>
        <p class="page-subtitle">התאמה אישית של StudyTop</p>
      </div>
    </header>

    <div class="card">
      <h3 style="margin-bottom:10px;">עריכת פרופיל לימודי</h3>
      <div class="field">
        <label for="profile-first-name">שם פרטי</label>
        <input type="text" id="profile-first-name" value="${escapeHtml(user?.firstName ?? '')}">
        <p class="field-error" id="profile-first-name-error"></p>
      </div>
      <div class="field">
        <label for="profile-last-name">שם משפחה (לא חובה)</label>
        <input type="text" id="profile-last-name" value="${escapeHtml(user?.lastName ?? '')}">
      </div>
      <div class="field">
        <label for="profile-grade">כיתה</label>
        <select id="profile-grade">
          ${GRADES.map((g) => `<option value="${g}" ${user?.grade === g ? 'selected' : ''}>${g}</option>`).join('')}
        </select>
      </div>
      <button id="profile-save-btn" class="btn btn-primary">שמירת פרופיל</button>
      <p class="page-subtitle" style="margin-top:10px;">לניהול רשימת המקצועות שלך (הוספה/הסרה) - עברי למסך <a href="#subjects" style="color:var(--color-primary); font-weight:700;">מקצועות</a>.</p>
    </div>

    <div class="card">
      <div class="field">
        <label for="settings-name">שם תצוגה</label>
        <input type="text" id="settings-name" value="${escapeHtml(settings.displayName)}">
      </div>

      <div class="field">
        <label>ערכת נושא</label>
        <div style="display:flex; gap:8px;">
          <button id="theme-light-btn" class="btn ${settings.theme === 'light' ? 'btn-primary' : 'btn-secondary'}">☀️ בהיר</button>
          <button id="theme-dark-btn" class="btn ${settings.theme === 'dark' ? 'btn-primary' : 'btn-secondary'}">🌙 כהה</button>
        </div>
      </div>

      <div class="field">
        <label for="settings-block-minutes">אורך מומלץ למקטע לימוד (בדקות)</label>
        <input type="number" id="settings-block-minutes" min="10" step="5" value="${settings.preferredBlockMinutes}">
      </div>

      <div class="field">
        <label style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" id="settings-notifications" ${settings.notificationsEnabled ? 'checked' : ''}>
          קבלת התראות בתוך האפליקציה
        </label>
      </div>
    </div>

    <div class="card">
      <div class="page-header" style="margin-bottom:10px;">
        <h3>שעות פנויות ללימוד</h3>
        <button id="add-free-hour-btn" class="btn btn-secondary">+ הוספה</button>
      </div>
      <p class="page-subtitle" style="margin-bottom:10px;">המתכנן השבועי החכם משתמש בשעות האלה כדי להציע מתי לעשות שיעורי בית.</p>
      ${
        settings.freeHours.length
          ? settings.freeHours
              .map(
                (fh, i) => `
              <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 0; border-bottom:1px solid var(--color-border);">
                <span>${DAY_NAMES_HE[fh.day]}: ${fh.start}-${fh.end}</span>
                <button class="btn btn-icon btn-secondary" data-remove-fh="${i}" aria-label="הסרת חלון זמן">🗑️</button>
              </div>`
              )
              .join('')
          : emptyStateHTML({ icon: '🕒', title: 'אין עדיין שעות פנויות מוגדרות', description: 'הוסיפי לפחות חלון זמן אחד כדי שהמתכנן החכם יוכל להציע תזמון.' })
      }
    </div>

    <div class="card">
      <h3 style="margin-bottom:10px;">גיבוי ונתונים</h3>
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px;">
        <button id="export-btn" class="btn btn-secondary">⬇️ ייצוא נתונים ל-JSON</button>
        <label class="btn btn-secondary" style="cursor:pointer;">
          ⬆️ ייבוא נתונים מקובץ JSON
          <input type="file" id="import-input" accept="application/json" style="display:none;">
        </label>
      </div>
      <button id="delete-all-btn" class="btn btn-danger">🗑️ מחיקת כל הנתונים</button>
    </div>

    <div class="card">
      <h3 style="margin-bottom:10px;">דירוג האפליקציה</h3>
      <div id="settings-rating-stars" style="margin-bottom:8px;"></div>
      <p id="settings-rating-label" class="page-subtitle"></p>
    </div>

    <div class="card">
      <h3 style="margin-bottom:10px;">אזור מסוכן</h3>
      <p class="page-subtitle" style="margin-bottom:12px;">מחיקת החשבון תמחק לצמיתות את הפרופיל, הסיסמה וכל הנתונים הלימודיים שלך מהמכשיר הזה. משתמשים אחרים על אותו מכשיר לא ייפגעו.</p>
      <button id="delete-account-btn" class="btn btn-danger">מחיקת החשבון</button>
    </div>
  `;

  document.getElementById('profile-save-btn').addEventListener('click', () => {
    const errorEl = document.getElementById('profile-first-name-error');
    const firstName = document.getElementById('profile-first-name').value.trim();
    if (!firstName) {
      errorEl.textContent = 'נא להזין שם פרטי';
      return;
    }
    errorEl.textContent = '';

    const lastName = document.getElementById('profile-last-name').value.trim();
    const grade = document.getElementById('profile-grade').value;
    // שמירה ידנית "מאפסת את השעון" של הקידום האוטומטי עד ה-1 בספטמבר הבא, כדי שלא תידרס מיד.
    updateUserProfile(getCurrentUserId(), { firstName, lastName, grade, gradeAdvancedForYear: currentSchoolYearStart() });
    showToast('הפרופיל נשמר', 'success');
    render(container);
  });

  const nameEl = document.getElementById('settings-name');
  nameEl.addEventListener('change', () => {
    updateData((d) => {
      d.settings.displayName = nameEl.value.trim() || 'תלמידה';
      return d;
    });
    showToast('שם התצוגה נשמר', 'success');
  });

  document.getElementById('theme-light-btn').addEventListener('click', () => {
    updateData((d) => {
      d.settings.theme = 'light';
      return d;
    });
    applyTheme('light');
    render(container);
  });
  document.getElementById('theme-dark-btn').addEventListener('click', () => {
    updateData((d) => {
      d.settings.theme = 'dark';
      return d;
    });
    applyTheme('dark');
    render(container);
  });

  document.getElementById('settings-block-minutes').addEventListener('change', (e) => {
    const value = Number(e.target.value);
    if (!value || value < 10) {
      showToast('אורך המקטע צריך להיות לפחות 10 דקות', 'error');
      return;
    }
    updateData((d) => {
      d.settings.preferredBlockMinutes = value;
      return d;
    });
    showToast('נשמר', 'success');
  });

  document.getElementById('settings-notifications').addEventListener('change', (e) => {
    updateData((d) => {
      d.settings.notificationsEnabled = e.target.checked;
      return d;
    });
  });

  document.getElementById('add-free-hour-btn').addEventListener('click', () => openFreeHourModal(container));
  container.querySelectorAll('[data-remove-fh]').forEach((btn) => {
    btn.addEventListener('click', () => removeFreeHour(container, Number(btn.dataset.removeFh)));
  });

  document.getElementById('export-btn').addEventListener('click', handleExport);
  document.getElementById('import-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleImportFile(container, file);
  });
  document.getElementById('delete-all-btn').addEventListener('click', () => handleDeleteAll(container));

  document.getElementById('delete-account-btn').addEventListener('click', () => {
    if (user) openDeleteAccountWarningModal(user);
  });

  const ratingState = data.ratingState ?? { rating: null };
  const ratingLabelEl = document.getElementById('settings-rating-label');
  function updateRatingLabel(value) {
    ratingLabelEl.textContent = value > 0 ? `הדירוג שלך: ${value} מתוך 5` : 'עדיין לא נבחר דירוג';
  }
  updateRatingLabel(ratingState.rating ?? 0);
  renderStarRating({
    container: document.getElementById('settings-rating-stars'),
    initialRating: ratingState.rating ?? 0,
    onChange: (value) => {
      updateData((d) => {
        d.ratingState = { ...d.ratingState, rating: value, ratedAt: new Date().toISOString(), ratingPromptShown: true };
        return d;
      });
      updateRatingLabel(value);
      showToast('הדירוג עודכן', 'success');
    },
  });
}
