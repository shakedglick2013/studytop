// הגדרות טיפוסים (JSDoc) לכל מודלי הנתונים באפליקציה.
// אין כאן קוד רץ - הקובץ משמש לתיעוד ולהשלמה אוטומטית בעורך.

/** @typedef {Object} LocalUser - רשומת חשבון מקומי (ב-"studytop:users", לא נתונים לימודיים)
 * @property {string} id
 * @property {string} username
 * @property {string} passwordHash - Base64, PBKDF2
 * @property {string} passwordSalt - Base64
 * @property {string} createdAt
 * @property {string} firstName
 * @property {string} [lastName]
 * @property {string} grade - למשל 'ח׳'
 * @property {boolean} onboardingCompleted
 * @property {number} [gradeAdvancedForYear] - שנת הלימודים (קלנדרית, לפי 1 בספטמבר) שעבורה הכיתה עודכנה/אושרה לאחרונה
 */

/** @typedef {Object} UserSettings
 * @property {string} displayName
 * @property {'light'|'dark'} theme
 * @property {{day:number, start:string, end:string}[]} freeHours
 * @property {number} preferredBlockMinutes
 * @property {boolean} notificationsEnabled
 */

/** @typedef {Object} Subject
 * @property {string} id
 * @property {string} name
 * @property {string} color
 * @property {string} [teacher]
 * @property {boolean} [isCustom] - הוזן ידנית ע"י המשתמשת (למשל בהגדרת הפרופיל) ולא נבחר מרשימה מוכנה
 */

/** @typedef {Object} Lesson
 * @property {string} id
 * @property {string} subjectId
 * @property {number} day
 * @property {string} startTime
 * @property {string} endTime
 * @property {string} [teacher]
 * @property {string} [room]
 */

/** @typedef {Object} HomeworkTask
 * @property {string} id
 * @property {string} subjectId
 * @property {string} description
 * @property {string} dueDate
 * @property {number} estimatedMinutes
 * @property {'easy'|'medium'|'hard'} difficulty
 * @property {'low'|'medium'|'high'} priority
 * @property {'todo'|'in_progress'|'done'} status
 * @property {string} [notes]
 */

/** @typedef {Object} ScheduledStudyBlock
 * @property {string} id
 * @property {string} homeworkTaskId
 * @property {string} date
 * @property {string} startTime
 * @property {number} durationMinutes
 * @property {string} reason
 * @property {boolean} userConfirmed
 */

/** @typedef {Object} Exam
 * @property {string} id
 * @property {string} subjectId
 * @property {string} date
 * @property {string} [topic]
 */

/** @typedef {Object} Grade
 * @property {string} id
 * @property {string} subjectId
 * @property {string} title
 * @property {number} score
 * @property {number} weightPercent
 * @property {string} date
 * @property {string} type
 */

/** @typedef {Object} QuizQuestion
 * @property {string} id
 * @property {'multiple_choice'|'true_false'|'open'|'matching'} type
 * @property {string} subjectId
 * @property {string} topic
 * @property {'easy'|'medium'|'hard'} difficulty
 * @property {string} question
 * @property {string[]} [options]
 * @property {string|string[]} correctAnswer
 */

/** @typedef {Object} Quiz
 * @property {string} id
 * @property {string} subjectId
 * @property {string[]} topics - שם(ות) הנושא/ים שהבוחן מבוסס עליהם (אפשר יותר מנושא אחד)
 * @property {QuizQuestion[]} questions
 */

/** @typedef {'not_started'|'currently_learning'|'learned'|'hidden'} TopicLearningStatus */

/** @typedef {Object} CurriculumTopic - נושא בקטלוג הלימודי המקומי (לא מאומת מול מקור רשמי - ראו curriculumCatalog.js)
 * @property {string} id
 * @property {string} subjectName
 * @property {string} grade
 * @property {string} title
 * @property {string[]} subtopics - תצוגה בלבד בשלב הזה, לא סינון שאלות
 * @property {'unverified'} confidence - תמיד 'unverified' - זו רשימה שנכתבה ידנית, לא נשלפה/אומתה מול מקור חי
 */

/** @typedef {Object} CustomTopic - נושא שהמשתמשת הוסיפה ידנית (כשלא נמצא נושא מתאים בקטלוג), פר-משתמש בלבד
 * @property {string} id
 * @property {string} subjectName
 * @property {string} grade
 * @property {string} title
 * @property {string} addedAt
 */

/** @typedef {Object} QuizAttempt
 * @property {string} id
 * @property {string} quizId
 * @property {string} date
 * @property {number} scorePercent
 * @property {{questionId:string, givenAnswer:string, correct:boolean}[]} answers
 */

/** @typedef {Object} Notification
 * @property {string} id
 * @property {string} message
 * @property {string} createdAt
 * @property {boolean} read
 */

/** @typedef {Object} RatingState - מצב חלון דירוג האפליקציה, פר-משתמש (חלק מ-data.ratingState)
 * @property {string|null} firstDashboardEntryAt - ISO string, נשמר פעם אחת בלבד בכניסה הראשונה לדשבורד
 * @property {boolean} ratingPromptShown - האם חלון הדירוג הוצג לפחות פעם אחת (דירגה או רק סגרה)
 * @property {string|null} ratingPromptDismissedAt - ISO string, מתי נסגר החלון בלי דירוג (לצורך צינון 24 שעות)
 * @property {number|null} rating - 1-5
 * @property {string|null} ratedAt - ISO string
 */

export {};
