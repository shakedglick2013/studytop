import { updateUserProfile } from '../auth/userAccounts.js';
import { currentSchoolYearStart } from '../auth/gradeProgression.js';
import { emptyData, setData, genId } from '../data/storage.js';
import { GRADES, COMMON_SUBJECTS, colorForIndex } from './subjectCatalog.js';
import { escapeHtml } from '../utils/htmlUtils.js';

const DUPLICATE_MESSAGE = 'המקצוע הזה כבר נוסף';

/**
 * מציגה את מסך הגדרת הפרופיל הלימודי (שם, כיתה, מקצועות) - פעם אחת, למשתמש חדש בלבד.
 * @param {HTMLElement} rootEl
 * @param {import('../models/types.js').LocalUser} user
 * @param {{onComplete: () => void}} opts
 */
export function renderOnboardingScreen(rootEl, user, { onComplete }) {
  const selectedPredefined = new Set();
  const customSubjects = [];

  rootEl.innerHTML = `
    <div class="auth-screen">
      <div class="auth-card" style="max-width:520px;">
        <div class="auth-header">
          <div class="auth-logo" aria-hidden="true">📘</div>
          <h1 class="auth-title">בואי נכיר אותך</h1>
          <p class="auth-subtitle">כמה פרטים לפני שמתחילים - זה ייקח דקה</p>
        </div>
        <form id="onboarding-form" novalidate>
          <div class="field">
            <label for="onb-first-name">שם פרטי</label>
            <input type="text" id="onb-first-name" required>
            <p class="field-error" id="onb-first-name-error"></p>
          </div>
          <div class="field">
            <label for="onb-last-name">שם משפחה (לא חובה)</label>
            <input type="text" id="onb-last-name">
          </div>
          <div class="field">
            <label for="onb-grade">כיתה</label>
            <select id="onb-grade">
              <option value="">בחרי כיתה...</option>
              ${GRADES.map((g) => `<option value="${g}">${g}</option>`).join('')}
            </select>
            <p class="field-error" id="onb-grade-error"></p>
          </div>
          <div class="field">
            <label>מקצועות לימוד</label>
            <div class="chip-grid" id="onb-subject-grid">
              ${COMMON_SUBJECTS.map((name) => `<button type="button" class="chip-toggle" data-subject-name="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join('')}
            </div>
            <div id="onb-custom-area" style="margin-top:10px;"></div>
            <p class="field-error" id="onb-custom-error"></p>
            <p class="field-error" id="onb-subjects-error"></p>
          </div>
          <div class="field">
            <label>מקצועות שנבחרו</label>
            <div id="onb-selected-chips" class="chip-grid"></div>
          </div>
          <button type="submit" id="onb-submit-btn" class="btn btn-primary auth-submit-btn" disabled>שמירה והמשך</button>
        </form>
      </div>
    </div>
  `;

  const firstNameEl = document.getElementById('onb-first-name');
  const lastNameEl = document.getElementById('onb-last-name');
  const gradeEl = document.getElementById('onb-grade');
  const customAreaEl = document.getElementById('onb-custom-area');
  const customErrorEl = document.getElementById('onb-custom-error');
  const subjectsErrorEl = document.getElementById('onb-subjects-error');
  const selectedChipsEl = document.getElementById('onb-selected-chips');
  const submitBtn = document.getElementById('onb-submit-btn');
  const firstNameErrorEl = document.getElementById('onb-first-name-error');
  const gradeErrorEl = document.getElementById('onb-grade-error');

  function allSelectedNames() {
    return [...selectedPredefined, ...customSubjects];
  }

  function updateSubmitState() {
    const hasName = firstNameEl.value.trim().length > 0;
    const hasGrade = gradeEl.value !== '';
    const hasSubject = allSelectedNames().length > 0;
    submitBtn.disabled = !(hasName && hasGrade && hasSubject);
  }

  function renderSelectedChips() {
    selectedChipsEl.innerHTML = allSelectedNames()
      .map(
        (name) => `
        <span class="chip">
          ${escapeHtml(name)}
          <button type="button" data-remove-subject="${escapeHtml(name)}" aria-label="הסרת ${escapeHtml(name)}">✕</button>
        </span>`
      )
      .join('');

    selectedChipsEl.querySelectorAll('[data-remove-subject]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const name = btn.dataset.removeSubject;
        selectedPredefined.delete(name);
        const customIndex = customSubjects.indexOf(name);
        if (customIndex !== -1) customSubjects.splice(customIndex, 1);
        const toggleBtn = document.querySelector(`[data-subject-name="${CSS.escape(name)}"]`);
        if (toggleBtn) toggleBtn.classList.remove('selected');
        renderSelectedChips();
        updateSubmitState();
      });
    });
  }

  document.querySelectorAll('[data-subject-name]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.subjectName;
      customErrorEl.textContent = '';
      if (selectedPredefined.has(name)) {
        selectedPredefined.delete(name);
        btn.classList.remove('selected');
      } else {
        if (customSubjects.includes(name)) {
          customErrorEl.textContent = DUPLICATE_MESSAGE;
          return;
        }
        selectedPredefined.add(name);
        btn.classList.add('selected');
      }
      renderSelectedChips();
      updateSubmitState();
    });
  });

  /** מציגה שדה טקסט + כפתור הוספה להזנת מקצוע מותאם-אישית אחד. */
  function renderCustomInputState() {
    customAreaEl.innerHTML = `
      <div style="display:flex; gap:8px;">
        <input type="text" id="onb-custom-subject" placeholder="מקצוע אחר...">
        <button type="button" id="onb-add-custom-btn" class="btn btn-secondary">+ הוספה</button>
      </div>
    `;
    const customInputEl = document.getElementById('onb-custom-subject');
    document.getElementById('onb-add-custom-btn').addEventListener('click', () => {
      customErrorEl.textContent = '';
      const name = customInputEl.value.trim();
      if (!name) return;
      if (allSelectedNames().includes(name)) {
        customErrorEl.textContent = DUPLICATE_MESSAGE;
        return;
      }
      customSubjects.push(name);
      renderSelectedChips();
      updateSubmitState();
      renderAskMoreState();
    });
  }

  /** לאחר הוספת מקצוע - שואלת אם יש עוד, ומאפשרת לחזור לשדה הזנה (לולאה עד "לא"). */
  function renderAskMoreState() {
    customAreaEl.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
        <span>האם יש עוד מקצועות?</span>
        <button type="button" id="onb-more-yes-btn" class="btn btn-secondary">כן</button>
        <button type="button" id="onb-more-no-btn" class="btn btn-secondary">לא</button>
      </div>
    `;
    document.getElementById('onb-more-yes-btn').addEventListener('click', renderCustomInputState);
    document.getElementById('onb-more-no-btn').addEventListener('click', () => {
      customAreaEl.innerHTML = '';
    });
  }

  renderCustomInputState();

  firstNameEl.addEventListener('input', updateSubmitState);
  gradeEl.addEventListener('change', updateSubmitState);

  document.getElementById('onboarding-form').addEventListener('submit', (event) => {
    event.preventDefault();
    firstNameErrorEl.textContent = '';
    gradeErrorEl.textContent = '';
    subjectsErrorEl.textContent = '';

    const firstName = firstNameEl.value.trim();
    const grade = gradeEl.value;
    const subjectNames = allSelectedNames();

    let hasError = false;
    if (!firstName) {
      firstNameErrorEl.textContent = 'נא להזין שם פרטי';
      hasError = true;
    }
    if (!grade) {
      gradeErrorEl.textContent = 'נא לבחור כיתה';
      hasError = true;
    }
    if (subjectNames.length === 0) {
      subjectsErrorEl.textContent = 'נא לבחור לפחות מקצוע אחד';
      hasError = true;
    }
    if (hasError) return;

    const subjects = subjectNames.map((name, index) => ({
      id: genId(),
      name,
      color: colorForIndex(index),
      isCustom: customSubjects.includes(name),
    }));

    const data = emptyData();
    data.subjects = subjects;
    data.settings.displayName = firstName;
    setData(data);

    updateUserProfile(user.id, {
      firstName,
      lastName: lastNameEl.value.trim(),
      grade,
      onboardingCompleted: true,
      gradeAdvancedForYear: currentSchoolYearStart(),
    });

    window.sessionStorage.setItem('studytop:justOnboarded', firstName);
    onComplete();
  });
}
