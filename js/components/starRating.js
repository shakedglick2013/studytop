// רכיב שורת דירוג בכוכבים (1-5), לשימוש חוזר (חלון דירוג האפליקציה + עמוד הגדרות).
// שורת הכוכבים תמיד בכיוון LTR (כוכב שמאלי=1, כוכב ימני=5) גם כשהיא מוטמעת בתוך ממשק RTL.

const STAR_COUNT = 5;
const FILLED_CHAR = '★';
const EMPTY_CHAR = '☆';

/**
 * מרנדרת ומחברת שורת כוכבים אינטראקטיבית בתוך container נתון.
 * @param {{container: HTMLElement, initialRating?: number, onChange: (rating:number) => void}} opts
 */
export function renderStarRating({ container, initialRating = 0, onChange }) {
  let selected = initialRating;

  container.innerHTML = `
    <div class="star-rating" dir="ltr" role="radiogroup" aria-label="דירוג בכוכבים מ-1 עד 5">
      ${Array.from({ length: STAR_COUNT }, (_, i) => i + 1)
        .map((n) => `<button type="button" class="star-btn" data-star="${n}" role="radio" aria-checked="false" aria-label="דירוג של ${n} מתוך 5">${EMPTY_CHAR}</button>`)
        .join('')}
    </div>
  `;

  const starButtons = [...container.querySelectorAll('.star-btn')];

  function paint(highlightUpTo) {
    starButtons.forEach((btn) => {
      const n = Number(btn.dataset.star);
      const filled = n <= highlightUpTo;
      btn.textContent = filled ? FILLED_CHAR : EMPTY_CHAR;
      btn.classList.toggle('filled', filled);
      btn.setAttribute('aria-checked', String(n === selected));
    });
  }

  paint(selected);

  starButtons.forEach((btn) => {
    const n = Number(btn.dataset.star);
    btn.addEventListener('mouseenter', () => paint(n));
    btn.addEventListener('mouseleave', () => paint(selected));
    btn.addEventListener('focus', () => paint(n));
    btn.addEventListener('blur', () => paint(selected));
    btn.addEventListener('click', () => {
      selected = n;
      paint(selected);
      onChange(selected);
    });
  });
}
