// שכבת שירות לסיכום טקסט. זו גרסת דמו מבוססת-כללים (ניתוח תדירות מילים, בלי AI חיצוני) -
// לא מבינה משמעות באמת, רק מזהה אילו משפטים "מרכזיים" סטטיסטית. אפשר להחליף אותה בעתיד
// בקריאה לשירות AI אמיתי בלי לשנות את מסך summarizer.js, כי הפונקציות כאן הן שכבת החוזה.

const STOPWORDS_HE = new Set([
  'של', 'את', 'עם', 'על', 'אל', 'זה', 'זאת', 'זו', 'הוא', 'היא', 'הם', 'הן',
  'אני', 'אתה', 'את', 'אנחנו', 'אתם', 'אתן', 'גם', 'רק', 'כל', 'כמו', 'אבל',
  'כי', 'אם', 'לא', 'כן', 'יש', 'אין', 'היה', 'היתה', 'היו', 'יהיה', 'תהיה',
  'אשר', 'מה', 'מי', 'איך', 'למה', 'מדוע', 'כאשר', 'אז', 'כך', 'הזה', 'הזו',
  'אלה', 'אלו', 'שם', 'כאן', 'עוד', 'כבר', 'לכן', 'בין', 'לפני', 'אחרי',
  'תוך', 'לפי', 'עד', 'או', 'וגם', 'ולכן', 'למשל',
]);

/** @param {string} text @returns {string[]} משפטים לא ריקים, ללא רווחים מיותרים */
function splitSentences(text) {
  return text
    .split(/(?<=[.!?׃\n])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** @param {string} text @returns {string[]} מילים בלבד (בלי סימני פיסוק), לא כולל מילות קישור נפוצות */
function meaningfulWords(text) {
  const words = text.match(/[א-תa-zA-Z]+/g) || [];
  return words.filter((w) => w.length > 1 && !STOPWORDS_HE.has(w));
}

/** בונה מפת תדירות מילים על פני כל הטקסט (לא כולל מילות קישור) */
function buildFrequencyMap(text) {
  const freq = new Map();
  meaningfulWords(text).forEach((w) => freq.set(w, (freq.get(w) || 0) + 1));
  return freq;
}

/** מנקד כל משפט לפי סכום תדירויות המילים המשמעותיות בו, מנורמל לאורך המשפט */
function scoreSentences(sentences, freq) {
  return sentences.map((sentence, index) => {
    const words = meaningfulWords(sentence);
    const rawScore = words.reduce((sum, w) => sum + (freq.get(w) || 0), 0);
    const score = words.length ? rawScore / words.length : 0;
    return { sentence, index, score };
  });
}

const LENGTH_RATIOS = { short: 0.15, medium: 0.3, detailed: 0.5 };
const LENGTH_MAX_SENTENCES = { short: 3, medium: 6, detailed: 10 };

/**
 * מפיק סיכום חילוצי (extractive) - בוחר את המשפטים "החשובים" ביותר סטטיסטית ומחזיר אותם בסדר המקורי.
 * שומר על מספר משפטים קטן ומדויק (לא רק אחוז מהטקסט) כדי שהסיכום יישאר ממוקד גם בטקסטים ארוכים.
 * @param {string} text
 * @param {'short'|'medium'|'detailed'} length
 * @returns {string}
 */
export function summarizeText(text, length = 'medium') {
  const sentences = splitSentences(text);
  if (sentences.length === 0) return '';
  if (sentences.length <= 2) return sentences.join(' ');

  const freq = buildFrequencyMap(text);
  const scored = scoreSentences(sentences, freq);
  const byRatio = Math.round(sentences.length * (LENGTH_RATIOS[length] ?? 0.3));
  const targetCount = Math.max(1, Math.min(LENGTH_MAX_SENTENCES[length] ?? 6, byRatio));

  const top = [...scored].sort((a, b) => b.score - a.score).slice(0, targetCount);
  const inOrder = top.sort((a, b) => a.index - b.index);
  return inOrder.map((s) => s.sentence).join(' ');
}

/**
 * מחזיר את נקודות המפתח של הטקסט כרשימת משפטים (הכי חשובים, בסדר המקורי).
 * @param {string} text
 * @param {number} maxPoints
 * @returns {string[]}
 */
export function extractKeyPoints(text, maxPoints = 5) {
  const sentences = splitSentences(text);
  if (sentences.length === 0) return [];

  const freq = buildFrequencyMap(text);
  const scored = scoreSentences(sentences, freq);
  const count = Math.min(maxPoints, sentences.length);
  const top = [...scored].sort((a, b) => b.score - a.score).slice(0, count);
  return top.sort((a, b) => a.index - b.index).map((s) => s.sentence);
}

/**
 * בונה שאלות "השלמת מילה חסרה" מתוך המשפטים המרכזיים - שיטה מכנית ולא באמת "מבינה" את הטקסט,
 * אבל שימושית כתרגול מהיר בלי AI.
 * @param {string} text
 * @param {number} maxQuestions
 * @returns {{question:string, answer:string}[]}
 */
export function generateReviewQuestions(text, maxQuestions = 5) {
  const sentences = splitSentences(text);
  if (sentences.length === 0) return [];

  const freq = buildFrequencyMap(text);
  const scored = scoreSentences(sentences, freq)
    .sort((a, b) => b.score - a.score)
    .slice(0, Math.min(maxQuestions * 2, sentences.length));

  const questions = [];
  for (const { sentence } of scored) {
    const words = meaningfulWords(sentence);
    if (words.length === 0) continue;
    const keyWord = [...words].sort((a, b) => (freq.get(b) || 0) - (freq.get(a) || 0))[0];
    const blankPattern = new RegExp(`(^|[^\\u05D0-\\u05EAa-zA-Z])${keyWord}([^\\u05D0-\\u05EAa-zA-Z]|$)`);
    if (!blankPattern.test(sentence)) continue;
    const question = sentence.replace(blankPattern, (match, before, after) => `${before}______${after}`);
    questions.push({ question, answer: keyWord });
    if (questions.length >= maxQuestions) break;
  }
  return questions;
}

/** @param {string} text @returns {{words:number, sentences:number}} */
export function textStats(text) {
  const words = (text.match(/[א-תa-zA-Z0-9]+/g) || []).length;
  const sentences = splitSentences(text).length;
  return { words, sentences };
}
