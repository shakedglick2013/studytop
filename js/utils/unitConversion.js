// לוגיקת ממיר היחידות. קטגוריות "רגילות" (אורך/מסה/נפח/זמן/שטח/מהירות) הן יחס ליניארי
// מול יחידת בסיס, ולכן ניתנות להמרה גנרית. טמפרטורה שונה (יש לה גם היסט, לא רק יחס),
// ומטופלת בנפרד עם נוסחאות משלה.

export const CATEGORIES = {
  length: {
    label: 'אורך',
    units: {
      mm: { label: 'מ"מ', factor: 0.001 },
      cm: { label: 'ס"מ', factor: 0.01 },
      m: { label: 'מטר', factor: 1 },
      km: { label: 'ק"מ', factor: 1000 },
      inch: { label: 'אינטש', factor: 0.0254 },
      ft: { label: 'רגל', factor: 0.3048 },
    },
  },
  mass: {
    label: 'מסה',
    units: {
      mg: { label: 'מ"ג', factor: 0.001 },
      g: { label: 'גרם', factor: 1 },
      kg: { label: 'ק"ג', factor: 1000 },
      ton: { label: 'טון', factor: 1000000 },
      oz: { label: 'אונקיה', factor: 28.3495 },
      lb: { label: 'ליברה', factor: 453.592 },
    },
  },
  volume: {
    label: 'נפח',
    units: {
      ml: { label: 'מ"ל', factor: 0.001 },
      l: { label: 'ליטר', factor: 1 },
      m3: { label: 'מ"ק', factor: 1000 },
      cup: { label: 'כוס', factor: 0.236588 },
    },
  },
  time: {
    label: 'זמן',
    units: {
      sec: { label: 'שנייה', factor: 1 },
      min: { label: 'דקה', factor: 60 },
      hour: { label: 'שעה', factor: 3600 },
      day: { label: 'יום', factor: 86400 },
      week: { label: 'שבוע', factor: 604800 },
    },
  },
  area: {
    label: 'שטח',
    units: {
      cm2: { label: 'ס"מ רבוע', factor: 0.0001 },
      m2: { label: 'מ"ר', factor: 1 },
      dunam: { label: 'דונם', factor: 1000 },
      hectare: { label: 'הקטר', factor: 10000 },
      km2: { label: 'ק"מ רבוע', factor: 1000000 },
    },
  },
  speed: {
    label: 'מהירות',
    units: {
      ms: { label: 'מטר לשנייה', factor: 1 },
      kmh: { label: 'קילומטר לשעה', factor: 1000 / 3600 },
      mph: { label: 'מייל לשעה', factor: 0.44704 },
    },
  },
  temperature: {
    label: 'טמפרטורה',
    special: true,
    units: {
      c: { label: 'צלזיוס' },
      f: { label: 'פרנהייט' },
      k: { label: 'קלווין' },
    },
  },
};

function toCelsius(value, unit) {
  if (unit === 'c') return value;
  if (unit === 'f') return ((value - 32) * 5) / 9;
  return value - 273.15; // k
}

function fromCelsius(celsius, unit) {
  if (unit === 'c') return celsius;
  if (unit === 'f') return (celsius * 9) / 5 + 32;
  return celsius + 273.15; // k
}

/** @returns {number} מעוגל ל-4 ספרות אחרי הנקודה, בלי אפסים מיותרים */
export function roundResult(n) {
  return Math.round(n * 10000) / 10000;
}

/**
 * @param {string} category
 * @param {number} value
 * @param {string} fromUnit
 * @param {string} toUnit
 * @returns {number}
 */
export function convert(category, value, fromUnit, toUnit) {
  const cat = CATEGORIES[category];
  if (cat.special) return roundResult(fromCelsius(toCelsius(value, fromUnit), toUnit));
  const factorFrom = cat.units[fromUnit].factor;
  const factorTo = cat.units[toUnit].factor;
  return roundResult((value * factorFrom) / factorTo);
}

/** @returns {string} הסבר קצר של דרך החישוב, להצגה למשתמשת */
export function explanationText(category, value, fromUnit, toUnit, result) {
  const cat = CATEGORIES[category];
  const fromLabel = cat.units[fromUnit].label;
  const toLabel = cat.units[toUnit].label;

  if (cat.special) {
    if (fromUnit === 'c' && toUnit === 'f') return `${value}°C × 9/5 + 32 = ${result}°F`;
    if (fromUnit === 'f' && toUnit === 'c') return `(${value}°F − 32) × 5/9 = ${result}°C`;
    if (fromUnit === 'c' && toUnit === 'k') return `${value}°C + 273.15 = ${result}K`;
    if (fromUnit === 'k' && toUnit === 'c') return `${value}K − 273.15 = ${result}°C`;
    if (fromUnit === toUnit) return `אותה יחידה - אין צורך בהמרה.`;
    return `המרה דרך צלזיוס: ${fromLabel} → °C → ${toLabel} = ${result}°${toUnit.toUpperCase()}`;
  }

  const factorFrom = cat.units[fromUnit].factor;
  const factorTo = cat.units[toUnit].factor;
  return `${value} ${fromLabel} × ${factorFrom} ÷ ${factorTo} = ${result} ${toLabel}`;
}
