import { checkSpelling, applyReplacement, issueKey } from '../utils/spellCheck.js';
import { textStats } from '../utils/summarizer.js';
import { escapeHtml } from '../utils/htmlUtils.js';
import { showToast } from '../components/toast.js';
import { emptyStateHTML } from '../components/emptyState.js';

export function render(container) {
  container.innerHTML = `
    <header class="page-header">
      <div>
        <h1 class="page-title">בודק איות</h1>
        <p class="page-subtitle">מדביקים או כותבים טקסט בעברית, ומקבלים הצעות תיקון למילים חשודות.</p>
      </div>
    </header>

    <div class="card" style="background:var(--color-warning-bg); border-color:transparent;">
      <p style="color:var(--color-warning); font-weight:600;">🔒 הבדיקה קורית כולה במחשב שלך - שום טקסט לא נשלח לשום מקום.</p>
    </div>

    <div class="card">
      <div class="field">
        <label for="spell-input">הטקסט לבדיקה</label>
        <textarea id="spell-input" style="min-height:200px;" placeholder="הדביקו כאן את הטקסט..."></textarea>
      </div>
      <p id="spell-stats" class="page-subtitle">0 מילים · 0 משפטים</p>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <button id="spell-check-btn" class="btn btn-primary">🔍 בדיקת איות</button>
        <button id="spell-copy-btn" class="btn btn-secondary">📋 העתקת הטקסט המתוקן</button>
      </div>
    </div>

    <div class="card">
      <h3 style="margin-bottom:10px;">מילים חשודות</h3>
      <div id="spell-issues"></div>
    </div>

    <div class="card" style="background:var(--color-surface-alt); border-color:transparent;">
      <p class="page-subtitle">💡 זו גרסת דמו בסיסית - כלל אותיות סופיות, זיהוי הקלדה כפולה, וכמה טעויות נפוצות ומוכרות בלבד (לא מילון מלא). לבדיקת איות מדויקת יותר מול כללי האקדמיה ללשון העברית, אפשר להדביק את הטקסט כאן בצ'אט ולהריץ <code>/spell</code>.</p>
    </div>
  `;

  const inputEl = document.getElementById('spell-input');
  const statsEl = document.getElementById('spell-stats');
  const issuesEl = document.getElementById('spell-issues');

  let ignoredKeys = new Set();
  let currentIssues = [];
  let hasChecked = false;

  function updateStats() {
    const { words, sentences } = textStats(inputEl.value);
    statsEl.textContent = `${words} מילים · ${sentences} משפטים`;
  }

  function renderIssues() {
    if (currentIssues.length === 0) {
      issuesEl.innerHTML = hasChecked
        ? emptyStateHTML({
            icon: '✅',
            title: 'הבדיקה רצה - לא נמצאו מילים חשודות',
            description: 'שימו לב: זו בדיקה בסיסית לפי כללים (לא מילון מלא ולא הבנת הקשר), אז יכול להיות שיש טעויות שהיא לא תפסה.',
          })
        : emptyStateHTML({
            icon: '📝',
            title: 'עדיין לא נבדק',
            description: 'הדביקי טקסט ולחצי על "בדיקת איות".',
          });
      return;
    }

    issuesEl.innerHTML = currentIssues
      .map(
        (issue) => `
        <div class="card" style="padding:12px; margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap;">
            <div>
              <p><span style="text-decoration:line-through; color:var(--color-danger);">${escapeHtml(issue.word)}</span> ← <strong style="color:var(--color-success);">${escapeHtml(issue.suggestion)}</strong></p>
              <p class="page-subtitle">${escapeHtml(issue.rule)}</p>
            </div>
            <div style="display:flex; gap:6px;">
              <button class="btn btn-secondary" data-accept="${issue.id}">✅ החלפה</button>
              <button class="btn btn-secondary" data-ignore="${issue.id}">🚫 התעלמות</button>
            </div>
          </div>
        </div>`
      )
      .join('');

    issuesEl.querySelectorAll('[data-accept]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const issue = currentIssues.find((it) => it.id === btn.dataset.accept);
        if (!issue) return;
        inputEl.value = applyReplacement(inputEl.value, issue, issue.suggestion);
        updateStats();
        runCheck();
        showToast('המילה הוחלפה', 'success');
      });
    });

    issuesEl.querySelectorAll('[data-ignore]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const issue = currentIssues.find((it) => it.id === btn.dataset.ignore);
        if (!issue) return;
        ignoredKeys.add(issueKey(issue));
        currentIssues = currentIssues.filter((it) => it.id !== issue.id);
        renderIssues();
      });
    });
  }

  function runCheck() {
    const text = inputEl.value.trim();
    if (!text) {
      showToast('צריך להדביק טקסט קודם', 'error');
      return;
    }
    currentIssues = checkSpelling(inputEl.value).filter((issue) => !ignoredKeys.has(issueKey(issue)));
    hasChecked = true;
    renderIssues();
  }

  inputEl.addEventListener('input', updateStats);
  document.getElementById('spell-check-btn').addEventListener('click', runCheck);

  document.getElementById('spell-copy-btn').addEventListener('click', async () => {
    if (!inputEl.value.trim()) {
      showToast('אין טקסט להעתקה', 'error');
      return;
    }
    try {
      await navigator.clipboard.writeText(inputEl.value);
      showToast('הועתק ללוח', 'success');
    } catch {
      showToast('לא הצלחתי להעתיק - אפשר לסמן ולהעתיק ידנית', 'error');
    }
  });

  renderIssues();
}
