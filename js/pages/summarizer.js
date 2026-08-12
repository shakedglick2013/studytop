import { summarizeText, extractKeyPoints, generateReviewQuestions, textStats } from '../utils/summarizer.js';
import { escapeHtml } from '../utils/htmlUtils.js';
import { showToast } from '../components/toast.js';
import { emptyStateHTML } from '../components/emptyState.js';

const MODE_LABELS = {
  short: 'סיכום קצר',
  medium: 'סיכום בינוני',
  detailed: 'סיכום מפורט',
  points: 'נקודות מרכזיות',
  questions: 'שאלות תרגול',
};

function renderResult(mode, text) {
  if (mode === 'points') {
    const points = extractKeyPoints(text, 5);
    if (!points.length) return emptyStateHTML({ icon: '🤔', title: 'לא נמצאו מספיק נקודות', description: 'נסי להדביק טקסט ארוך יותר.' });
    return `<ul style="display:flex; flex-direction:column; gap:8px; padding-inline-start:20px; list-style:disc;">
      ${points.map((p) => `<li>${escapeHtml(p)}</li>`).join('')}
    </ul>`;
  }

  if (mode === 'questions') {
    const questions = generateReviewQuestions(text, 5);
    if (!questions.length) return emptyStateHTML({ icon: '🤔', title: 'לא הצלחתי להכין שאלות', description: 'נסי להדביק טקסט ארוך וברור יותר.' });
    return `<div style="display:flex; flex-direction:column; gap:14px;">
      ${questions
        .map(
          (q, i) => `
        <div class="card" style="padding:14px;">
          <p><strong>${i + 1}.</strong> ${escapeHtml(q.question)}</p>
          <details style="margin-top:6px;">
            <summary style="cursor:pointer; color:var(--color-primary); font-weight:600;">הצג תשובה</summary>
            <p style="margin-top:6px;">${escapeHtml(q.answer)}</p>
          </details>
        </div>`
        )
        .join('')}
    </div>`;
  }

  const summary = summarizeText(text, mode);
  if (!summary) return emptyStateHTML({ icon: '🤔', title: 'אין מספיק טקסט לסיכום', description: 'נסי להדביק טקסט ארוך יותר.' });
  return `<p style="white-space:pre-wrap; line-height:1.7;">${escapeHtml(summary)}</p>`;
}

function copyResultText(mode, text) {
  if (mode === 'points') return extractKeyPoints(text, 5).map((p) => `• ${p}`).join('\n');
  if (mode === 'questions') return generateReviewQuestions(text, 5).map((q, i) => `${i + 1}. ${q.question}\nתשובה: ${q.answer}`).join('\n\n');
  return summarizeText(text, mode);
}

export function render(container) {
  container.innerHTML = `
    <header class="page-header">
      <div>
        <h1 class="page-title">מסכם טקסטים</h1>
        <p class="page-subtitle">מדביקים טקסט - סיפור, עבודה, שיחה, כל דבר - ומקבלים סיכום, נקודות מרכזיות או שאלות תרגול.</p>
      </div>
    </header>

    <div class="card" style="background:var(--color-warning-bg); border-color:transparent;">
      <p style="color:var(--color-warning); font-weight:600;">🔒 לפרטיות שלך: כל הסיכום קורה במחשב שלך בלבד ולא נשלח לשום מקום - אבל בכל זאת, עדיף לא להדביק כאן מידע אישי או רגיש.</p>
    </div>

    <div class="card">
      <div class="field">
        <label for="summarizer-input">הטקסט לסיכום</label>
        <textarea id="summarizer-input" style="min-height:220px;" placeholder="הדביקו כאן את הטקסט..."></textarea>
      </div>
      <p id="summarizer-stats" class="page-subtitle">0 מילים · 0 משפטים</p>

      <div class="field">
        <label for="summarizer-mode">סוג הפלט</label>
        <select id="summarizer-mode">
          ${Object.entries(MODE_LABELS)
            .map(([value, label]) => `<option value="${value}">${label}</option>`)
            .join('')}
        </select>
      </div>

      <button id="summarizer-generate" class="btn btn-primary">✨ יצירה</button>
    </div>

    <div id="summarizer-result-card" class="card" style="display:none;">
      <div class="page-header" style="margin-bottom:12px;">
        <h3 id="summarizer-result-title"></h3>
        <button id="summarizer-copy" class="btn btn-secondary">📋 העתקה</button>
      </div>
      <div id="summarizer-result"></div>
    </div>

    <div class="card" style="background:var(--color-surface-alt); border-color:transparent;">
      <p class="page-subtitle">💡 זו גרסת דמו פשוטה שרצה במחשב שלך בלי אינטרנט. לסיכום מעמיק יותר עם בדיקת עובדות ברשת ושאלות תרגול חכמות, אפשר להדביק את הטקסט בצ'אט של Claude Code ולהריץ <code>/sum</code>.</p>
    </div>
  `;

  const inputEl = document.getElementById('summarizer-input');
  const statsEl = document.getElementById('summarizer-stats');
  const modeEl = document.getElementById('summarizer-mode');
  const resultCard = document.getElementById('summarizer-result-card');
  const resultEl = document.getElementById('summarizer-result');
  const resultTitleEl = document.getElementById('summarizer-result-title');

  inputEl.addEventListener('input', () => {
    const { words, sentences } = textStats(inputEl.value);
    statsEl.textContent = `${words} מילים · ${sentences} משפטים`;
  });

  document.getElementById('summarizer-generate').addEventListener('click', () => {
    const text = inputEl.value.trim();
    if (!text) {
      showToast('צריך להדביק טקסט קודם', 'error');
      return;
    }
    const mode = modeEl.value;
    resultTitleEl.textContent = MODE_LABELS[mode];
    resultEl.innerHTML = renderResult(mode, text);
    resultCard.style.display = 'block';
  });

  document.getElementById('summarizer-copy').addEventListener('click', async () => {
    const text = inputEl.value.trim();
    const mode = modeEl.value;
    try {
      await navigator.clipboard.writeText(copyResultText(mode, text));
      showToast('הועתק ללוח', 'success');
    } catch {
      showToast('לא הצלחתי להעתיק - אפשר לסמן ולהעתיק ידנית', 'error');
    }
  });
}
