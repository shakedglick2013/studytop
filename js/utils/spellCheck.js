// שכבת שירות לבדיקת איות. גרסת דמו מקומית (בלי אינטרנט/AI) - שלושה כללים בסיסיים בלבד:
// 1. שימוש נכון באותיות סופיות/לא-סופיות (כלל אורתוגרפי עברי מדויק ומוחלט, בלי חריגים).
// 2. הקלדה כפולה בטעות (אותה אות 3+ פעמים ברצף - לא קורה במילה עברית תקנית).
// 3. רשימה קטנה ומצומצמת של טעויות נפוצות ומוכרות (לא מילון מלא).
// אפשר להחליף בעתיד בשירות בדיקה אמיתי (מילון מלא / API) בלי לשנות את מסך spellcheck.js,
// כי הפונקציות כאן הן שכבת החוזה.

const FINAL_FORMS = { כ: 'ך', מ: 'ם', נ: 'ן', פ: 'ף', צ: 'ץ' };
const NON_FINAL_FORMS = { ך: 'כ', ם: 'מ', ן: 'נ', ף: 'פ', ץ: 'צ' };

// טעויות נפוצות ומוכרות בלבד - לא מילון מקיף. עדיף לפספס תיקון מאשר "לתקן" מילה נכונה.
const COMMON_MISTAKES = {
  בעייה: 'בעיה',
  חויה: 'חוויה',
};

/** @param {string} word @returns {string} המילה עם תיקון אותיות סופיות/לא-סופיות אם צריך */
function correctFinalForms(word) {
  if (!word) return word;
  const chars = word.split('');
  for (let i = 0; i < chars.length - 1; i++) {
    if (NON_FINAL_FORMS[chars[i]]) chars[i] = NON_FINAL_FORMS[chars[i]];
  }
  const lastIndex = chars.length - 1;
  if (FINAL_FORMS[chars[lastIndex]]) chars[lastIndex] = FINAL_FORMS[chars[lastIndex]];
  return chars.join('');
}

/** @param {string} word @returns {string} המילה בלי הקלדה כפולה בטעות (3+ אותיות זהות ברצף) */
function collapseRepeatedLetters(word) {
  return word.replace(/(.)\1{2,}/g, '$1');
}

/** @param {string} text @returns {{word:string,start:number,end:number}[]} */
function findWordTokens(text) {
  return [...text.matchAll(/[א-ת]+/g)].map((m) => ({ word: m[0], start: m.index, end: m.index + m[0].length }));
}

/**
 * בודק איות בסיסי. מחזיר רשימת בעיות עם הצעת תיקון, מבוססת על מיקום המילה בטקסט הנוכחי
 * (יש להריץ מחדש אחרי כל תיקון כדי לקבל מיקומים עדכניים).
 * @param {string} text
 * @returns {{id:string, word:string, suggestion:string, rule:string, start:number, end:number}[]}
 */
export function checkSpelling(text) {
  const tokens = findWordTokens(text);
  const issues = [];

  tokens.forEach((token, i) => {
    let suggestion = null;
    let rule = null;

    if (COMMON_MISTAKES[token.word]) {
      suggestion = COMMON_MISTAKES[token.word];
      rule = 'טעות נפוצה ומוכרת';
    } else {
      const finalFormFixed = correctFinalForms(token.word);
      if (finalFormFixed !== token.word) {
        suggestion = finalFormFixed;
        rule = 'שימוש שגוי באות סופית / לא-סופית';
      } else {
        const repeatFixed = collapseRepeatedLetters(token.word);
        if (repeatFixed !== token.word && repeatFixed.length >= 2) {
          suggestion = repeatFixed;
          rule = 'יתכן שזו הקלדה כפולה בטעות';
        }
      }
    }

    if (suggestion) {
      issues.push({ id: `${token.start}-${i}`, word: token.word, suggestion, rule, start: token.start, end: token.end });
    }
  });

  return issues;
}

/**
 * מחליף בעיה ספציפית בטקסט לפי המיקום שלה.
 * @param {string} text
 * @param {{start:number,end:number}} issue
 * @param {string} replacement
 * @returns {string}
 */
export function applyReplacement(text, issue, replacement) {
  return text.slice(0, issue.start) + replacement + text.slice(issue.end);
}

/** מפתח ייחודי לבעיה, לשימוש במעקב "התעלמויות" שישרוד גם אחרי סריקה מחדש */
export function issueKey(issue) {
  return `${issue.word}=>${issue.suggestion}=>${issue.rule}`;
}
