// נתוני דוגמה בעברית - נזרעים אוטומטית בהרצה ראשונה כדי שהאפליקציה תיראה "חיה" מיד.

function toISODate(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(base, days) {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}

/**
 * ממלא אובייקט נתונים ריק בנתוני דוגמה.
 * @param {object} base - תוצאה של emptyData()
 * @param {() => string} genId
 * @returns {object}
 */
export function buildSampleData(base, genId) {
  const today = new Date();

  const subjects = [
    { id: genId(), name: 'מתמטיקה', color: '#4f6df5', teacher: 'מורה נעמי' },
    { id: genId(), name: 'מדעים', color: '#2f9e63', teacher: 'מורה איתי' },
    { id: genId(), name: 'אנגלית', color: '#e07a5f', teacher: 'מורה דנה' },
    { id: genId(), name: 'היסטוריה', color: '#b8860b', teacher: 'מורה יעל' },
    { id: genId(), name: 'עברית', color: '#8e44ad', teacher: 'מורה רונית' },
    { id: genId(), name: 'תנ"ך', color: '#16a3b0', teacher: 'מורה שירה' },
  ];
  const [math, science, english, history, hebrew, bible] = subjects;

  // day: 0=ראשון .. 5=שישי
  const lessons = [
    { id: genId(), subjectId: math.id, day: 0, startTime: '08:00', endTime: '08:45', room: '204' },
    { id: genId(), subjectId: hebrew.id, day: 0, startTime: '08:50', endTime: '09:35', room: '204' },
    { id: genId(), subjectId: science.id, day: 1, startTime: '08:00', endTime: '08:45', room: 'מעבדה 1' },
    { id: genId(), subjectId: english.id, day: 1, startTime: '08:50', endTime: '09:35', room: '204' },
    { id: genId(), subjectId: history.id, day: 2, startTime: '09:40', endTime: '10:25', room: '204' },
    { id: genId(), subjectId: math.id, day: 2, startTime: '10:40', endTime: '11:25', room: '204' },
    { id: genId(), subjectId: science.id, day: 3, startTime: '08:00', endTime: '08:45', room: 'מעבדה 1' },
    { id: genId(), subjectId: bible.id, day: 3, startTime: '08:50', endTime: '09:35', room: '204' },
    { id: genId(), subjectId: english.id, day: 4, startTime: '08:00', endTime: '08:45', room: '204' },
    { id: genId(), subjectId: hebrew.id, day: 4, startTime: '08:50', endTime: '09:35', room: '204' },
  ];

  const homeworkTasks = [
    {
      id: genId(),
      subjectId: science.id,
      description: 'תרגילים על מסה, נפח וצפיפות - עמ׳ 42-44',
      dueDate: toISODate(addDays(today, 3)),
      estimatedMinutes: 40,
      difficulty: 'medium',
      priority: 'high',
      status: 'todo',
      notes: '',
    },
    {
      id: genId(),
      subjectId: math.id,
      description: 'תרגול משוואות עם נעלם אחד',
      dueDate: toISODate(addDays(today, 5)),
      estimatedMinutes: 30,
      difficulty: 'easy',
      priority: 'medium',
      status: 'todo',
      notes: '',
    },
    {
      id: genId(),
      subjectId: english.id,
      description: 'כתיבת פסקה קצרה ב-Present Simple',
      dueDate: toISODate(addDays(today, 2)),
      estimatedMinutes: 25,
      difficulty: 'easy',
      priority: 'medium',
      status: 'in_progress',
      notes: '',
    },
    {
      id: genId(),
      subjectId: history.id,
      description: 'סיכום פרק על ימי הביניים',
      dueDate: toISODate(addDays(today, 7)),
      estimatedMinutes: 60,
      difficulty: 'hard',
      priority: 'low',
      status: 'todo',
      notes: '',
    },
  ];

  const exams = [
    { id: genId(), subjectId: science.id, date: toISODate(addDays(today, 6)), topic: 'מסה, נפח וצפיפות' },
  ];

  const grades = [
    { id: genId(), subjectId: math.id, title: 'מבחן פרק 3', score: 88, weightPercent: 40, date: toISODate(addDays(today, -20)), type: 'מבחן' },
    { id: genId(), subjectId: math.id, title: 'מטלת בית', score: 95, weightPercent: 10, date: toISODate(addDays(today, -10)), type: 'מטלה' },
    { id: genId(), subjectId: english.id, title: 'מבחן אמצע', score: 91, weightPercent: 50, date: toISODate(addDays(today, -15)), type: 'מבחן' },
    { id: genId(), subjectId: hebrew.id, title: 'חיבור', score: 84, weightPercent: 30, date: toISODate(addDays(today, -8)), type: 'מטלה' },
  ];

  return {
    ...base,
    settings: {
      ...base.settings,
      freeHours: [
        { day: 0, start: '16:00', end: '19:00' },
        { day: 1, start: '16:00', end: '19:00' },
        { day: 2, start: '16:00', end: '19:00' },
        { day: 3, start: '16:00', end: '19:00' },
        { day: 4, start: '15:00', end: '18:00' },
        { day: 6, start: '10:00', end: '20:00' },
      ],
    },
    subjects,
    lessons,
    homeworkTasks,
    exams,
    grades,
  };
}
