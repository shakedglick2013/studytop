import { CATEGORIES, convert, explanationText } from '../utils/unitConversion.js';
import { escapeHtml } from '../utils/htmlUtils.js';

function unitOptions(categoryKey, selectedUnit) {
  const cat = CATEGORIES[categoryKey];
  return Object.entries(cat.units)
    .map(([key, unit]) => `<option value="${key}" ${key === selectedUnit ? 'selected' : ''}>${escapeHtml(unit.label)}</option>`)
    .join('');
}

function defaultUnits(categoryKey) {
  const keys = Object.keys(CATEGORIES[categoryKey].units);
  return { from: keys[0], to: keys[1] ?? keys[0] };
}

export function render(container) {
  const categoryKeys = Object.keys(CATEGORIES);
  let currentCategory = categoryKeys[0];
  let { from, to } = defaultUnits(currentCategory);

  container.innerHTML = `
    <header class="page-header">
      <div>
        <h1 class="page-title">ממיר יחידות</h1>
        <p class="page-subtitle">אורך, מסה, נפח, זמן, טמפרטורה, שטח ומהירות - כולל דרך החישוב.</p>
      </div>
    </header>

    <div class="card">
      <div class="field">
        <label for="conv-category">קטגוריה</label>
        <select id="conv-category">
          ${categoryKeys.map((key) => `<option value="${key}">${escapeHtml(CATEGORIES[key].label)}</option>`).join('')}
        </select>
      </div>

      <div class="field">
        <label for="conv-amount">כמות</label>
        <input type="number" id="conv-amount" placeholder="הכניסו מספר">
        <p id="conv-error" class="field-error"></p>
      </div>

      <div style="display:grid; grid-template-columns: 1fr auto 1fr; gap:10px; align-items:end;">
        <div class="field" style="margin-bottom:0;">
          <label for="conv-from">מיחידה</label>
          <select id="conv-from">${unitOptions(currentCategory, from)}</select>
        </div>
        <button id="conv-swap" class="btn btn-secondary btn-icon" aria-label="החלפת כיוון" style="margin-bottom:14px;">⇄</button>
        <div class="field" style="margin-bottom:0;">
          <label for="conv-to">ליחידה</label>
          <select id="conv-to">${unitOptions(currentCategory, to)}</select>
        </div>
      </div>
    </div>

    <div id="conv-result-card" class="card" style="display:none;">
      <p class="page-subtitle">תוצאה</p>
      <p id="conv-result" style="font-size:32px; font-weight:800; color:var(--color-primary);"></p>
      <p id="conv-explanation" class="page-subtitle"></p>
    </div>
  `;

  const categoryEl = document.getElementById('conv-category');
  const amountEl = document.getElementById('conv-amount');
  const fromEl = document.getElementById('conv-from');
  const toEl = document.getElementById('conv-to');
  const errorEl = document.getElementById('conv-error');
  const resultCard = document.getElementById('conv-result-card');
  const resultEl = document.getElementById('conv-result');
  const explanationEl = document.getElementById('conv-explanation');

  function calculate() {
    errorEl.textContent = '';
    const raw = amountEl.value.trim();
    if (raw === '') {
      resultCard.style.display = 'none';
      return;
    }
    const value = Number(raw);
    if (Number.isNaN(value)) {
      errorEl.textContent = 'זה לא נראה כמו מספר';
      resultCard.style.display = 'none';
      return;
    }
    if (currentCategory !== 'temperature' && value < 0) {
      errorEl.textContent = 'מספר שלילי לא הגיוני בקטגוריה הזו';
      resultCard.style.display = 'none';
      return;
    }

    const result = convert(currentCategory, value, fromEl.value, toEl.value);
    resultEl.textContent = `${result}`;
    explanationEl.textContent = explanationText(currentCategory, value, fromEl.value, toEl.value, result);
    resultCard.style.display = 'block';
  }

  categoryEl.addEventListener('change', () => {
    currentCategory = categoryEl.value;
    const units = defaultUnits(currentCategory);
    fromEl.innerHTML = unitOptions(currentCategory, units.from);
    toEl.innerHTML = unitOptions(currentCategory, units.to);
    calculate();
  });

  document.getElementById('conv-swap').addEventListener('click', () => {
    const fromValue = fromEl.value;
    fromEl.value = toEl.value;
    toEl.value = fromValue;
    calculate();
  });

  amountEl.addEventListener('input', calculate);
  fromEl.addEventListener('change', calculate);
  toEl.addEventListener('change', calculate);
}
