// מאגר שאלות לדוגמה. שאלה מקושרת ל"שם מקצוע" (לא subjectId, כי המקצועות בנתוני המשתמשת
// נוצרים דינמית) - במסך הבוחן מתאימים לפי שם המקצוע שבחרה מתוך המקצועות שהיא הגדירה בפועל.

export const QUESTION_BANK = [
  // ===== מתמטיקה - משוואות ופונקציות =====
  { subjectName: 'מתמטיקה', topic: 'משוואות ופונקציות', difficulty: 'easy', type: 'multiple_choice', question: 'מהו הפתרון של המשוואה x + 5 = 12?', options: ['6', '7', '8', '17'], correctAnswer: '7' },
  { subjectName: 'מתמטיקה', topic: 'משוואות ופונקציות', difficulty: 'easy', type: 'open', question: 'כמה הוא הפתרון של x - 10 = 0?', correctAnswer: '10' },
  { subjectName: 'מתמטיקה', topic: 'משוואות ופונקציות', difficulty: 'easy', type: 'true_false', question: 'המשוואה 3x = 9 פתרונה x=3.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'משוואות ופונקציות', difficulty: 'medium', type: 'multiple_choice', question: 'מהו הפתרון של המשוואה 2x - 4 = 10?', options: ['3', '5', '7', '14'], correctAnswer: '7' },
  { subjectName: 'מתמטיקה', topic: 'משוואות ופונקציות', difficulty: 'medium', type: 'true_false', question: 'בפונקציה y=2x+1, כאשר x=3, מתקבל y=6.', correctAnswer: 'לא נכון' },
  { subjectName: 'מתמטיקה', topic: 'משוואות ופונקציות', difficulty: 'medium', type: 'open', question: 'פתרו את המשוואה: 4x + 2 = 18 (מהו x?)', correctAnswer: '4' },
  {
    subjectName: 'מתמטיקה', topic: 'משוואות ופונקציות', difficulty: 'medium', type: 'matching', question: 'התאימו כל פונקציה לצורת הגרף שלה',
    pairs: [{ left: 'y = 2x', right: 'קו ישר דרך הראשית' }, { left: 'x²', right: 'פרבולה' }, { left: 'y = 5', right: 'קו אופקי' }],
  },
  { subjectName: 'מתמטיקה', topic: 'משוואות ופונקציות', difficulty: 'hard', type: 'multiple_choice', question: 'מהו שיפוע הישר y = -3x + 5?', options: ['-3', '5', '3', '-5'], correctAnswer: '-3' },

  // ===== מדעים - מסה, נפח וצפיפות =====
  { subjectName: 'מדעים', topic: 'מסה, נפח וצפיפות', difficulty: 'easy', type: 'multiple_choice', question: 'מהי יחידת המידה הבסיסית למסה?', options: ['גרם', 'קילוגרם', 'ליטר', 'מטר'], correctAnswer: 'קילוגרם' },
  { subjectName: 'מדעים', topic: 'מסה, נפח וצפיפות', difficulty: 'easy', type: 'true_false', question: 'צפיפות מחושבת לפי הנוסחה: צפיפות = מסה חלקי נפח.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'מסה, נפח וצפיפות', difficulty: 'easy', type: 'open', question: 'מהי יחידת המידה הנפוצה לנפח נוזלים?', correctAnswer: 'ליטר' },
  { subjectName: 'מדעים', topic: 'מסה, נפח וצפיפות', difficulty: 'medium', type: 'open', question: 'לגוף מסה של 20 גרם ונפח של 4 סמ"ק. מהי הצפיפות שלו בגרם לסמ"ק?', correctAnswer: '5' },
  { subjectName: 'מדעים', topic: 'מסה, נפח וצפיפות', difficulty: 'medium', type: 'multiple_choice', question: 'חפץ שצפיפותו גדולה מצפיפות המים - מה יקרה לו כשנכניס אותו למים?', options: ['יצוף', 'ישקע', 'יישאר במקום', 'יתפרק'], correctAnswer: 'ישקע' },
  { subjectName: 'מדעים', topic: 'מסה, נפח וצפיפות', difficulty: 'medium', type: 'true_false', question: 'נפח של 1 ליטר מים שווה ל-1000 סמ"ק.', correctAnswer: 'נכון' },
  {
    subjectName: 'מדעים', topic: 'מסה, נפח וצפיפות', difficulty: 'medium', type: 'matching', question: 'התאימו כל מושג להגדרה שלו',
    pairs: [{ left: 'מסה', right: 'כמות החומר בגוף' }, { left: 'נפח', right: 'כמות המקום שהגוף תופס' }, { left: 'צפיפות', right: 'מסה חלקי נפח' }],
  },
  { subjectName: 'מדעים', topic: 'מסה, נפח וצפיפות', difficulty: 'hard', type: 'multiple_choice', question: 'לגוף נפח 2 ליטר ומסה 1 ק"ג. מהי צפיפותו בגרם לסמ"ק?', options: ['0.5', '2', '500', '5000'], correctAnswer: '0.5' },

  // ===== אנגלית - Present Simple =====
  { subjectName: 'אנגלית', topic: 'Present Simple', difficulty: 'easy', type: 'multiple_choice', question: 'Choose the correct form: She ___ to school every day.', options: ['go', 'goes', 'going', 'gone'], correctAnswer: 'goes' },
  { subjectName: 'אנגלית', topic: 'Present Simple', difficulty: 'easy', type: 'open', question: 'Complete: He ___ (work) in a bank.', correctAnswer: 'works' },
  { subjectName: 'אנגלית', topic: 'Present Simple', difficulty: 'easy', type: 'true_false', question: 'The sentence "I plays football" is grammatically correct.', correctAnswer: 'לא נכון' },
  { subjectName: 'אנגלית', topic: 'Present Simple', difficulty: 'medium', type: 'multiple_choice', question: 'Which question is correct?', options: ['Does she likes tea?', 'Does she like tea?', 'Do she like tea?', 'Is she like tea?'], correctAnswer: 'Does she like tea?' },
  { subjectName: 'אנגלית', topic: 'Present Simple', difficulty: 'medium', type: 'true_false', question: 'We add "s" to the verb in Present Simple for he, she, and it.', correctAnswer: 'נכון' },
  { subjectName: 'אנגלית', topic: 'Present Simple', difficulty: 'medium', type: 'open', question: 'Complete: They ___ (not / like) vegetables.', correctAnswer: "don't like" },
  {
    subjectName: 'אנגלית', topic: 'Present Simple', difficulty: 'medium', type: 'matching', question: 'Match the pronoun to the correct form of "to be"',
    pairs: [{ left: 'I', right: 'am' }, { left: 'She', right: 'is' }, { left: 'They', right: 'are' }],
  },
  { subjectName: 'אנגלית', topic: 'Present Simple', difficulty: 'hard', type: 'multiple_choice', question: "Choose the correct negative form: He doesn't ___ coffee.", options: ['drink', 'drinks', 'drank', 'drinking'], correctAnswer: 'drink' },

  // ===== היסטוריה - ימי הביניים =====
  { subjectName: 'היסטוריה', topic: 'ימי הביניים', difficulty: 'easy', type: 'multiple_choice', question: 'ימי הביניים הם התקופה שבין נפילת רומא לבין...', options: ['המהפכה התעשייתית', 'העת החדשה (הרנסנס)', 'מלחמת העולם הראשונה', 'תור הזהב היווני'], correctAnswer: 'העת החדשה (הרנסנס)' },
  { subjectName: 'היסטוריה', topic: 'ימי הביניים', difficulty: 'easy', type: 'true_false', question: 'בימי הביניים באירופה הייתה לכנסייה השפעה מרכזית על החיים.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'ימי הביניים', difficulty: 'easy', type: 'open', question: 'מי המציא את הדפוס באירופה?', correctAnswer: 'גוטנברג' },
  { subjectName: 'היסטוריה', topic: 'ימי הביניים', difficulty: 'medium', type: 'open', question: 'איך נקרא המבנה החברתי-כלכלי באירופה בימי הביניים, שבו איכרים עבדו על אדמות האציל תמורת הגנה?', correctAnswer: 'פיאודליזם' },
  { subjectName: 'היסטוריה', topic: 'ימי הביניים', difficulty: 'medium', type: 'multiple_choice', question: 'מסעות הצלב היו מסעות מלחמה שמטרתם הייתה בעיקר...', options: ['כיבוש ירושלים והמזרח התיכון', 'גילוי אמריקה', 'סחר עם הודו', 'כיבוש רומא'], correctAnswer: 'כיבוש ירושלים והמזרח התיכון' },
  { subjectName: 'היסטוריה', topic: 'ימי הביניים', difficulty: 'medium', type: 'true_false', question: 'הדפוס הומצא בימי הביניים המוקדמים, במאה ה-5.', correctAnswer: 'לא נכון' },
  {
    subjectName: 'היסטוריה', topic: 'ימי הביניים', difficulty: 'medium', type: 'matching', question: 'התאימו כל מושג להסבר שלו',
    pairs: [{ left: 'פיאודליזם', right: 'מבנה חברתי של אדונים ואיכרים' }, { left: 'מסעות הצלב', right: 'מלחמות דת לכיבוש ירושלים' }, { left: 'גוטנברג', right: 'ממציא הדפוס' }],
  },
  { subjectName: 'היסטוריה', topic: 'ימי הביניים', difficulty: 'hard', type: 'multiple_choice', question: 'מי היה הראשון שהדפיס באמצעות אותיות דפוס נעות באירופה?', options: ['גוטנברג', 'קולומבוס', 'קופרניקוס', 'דה וינצ\'י'], correctAnswer: 'גוטנברג' },

  // ===== מתמטיקה - אחוזים (כיתה ח') =====
  { subjectName: 'מתמטיקה', topic: 'אחוזים', difficulty: 'easy', type: 'multiple_choice', question: 'כמה זה 20% מתוך 50?', options: ['5', '10', '15', '20'], correctAnswer: '10' },
  { subjectName: 'מתמטיקה', topic: 'אחוזים', difficulty: 'easy', type: 'true_false', question: '50% שווה לחצי מהכמות.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'אחוזים', difficulty: 'medium', type: 'open', question: 'מחיר מוצר עלה מ-200 ש"ח ל-250 ש"ח. באחוזים, בכמה עלה המחיר?', correctAnswer: '25' },
  { subjectName: 'מתמטיקה', topic: 'אחוזים', difficulty: 'medium', type: 'multiple_choice', question: 'כמה זה 15% מתוך 200?', options: ['15', '20', '30', '45'], correctAnswer: '30' },

  // ===== מתמטיקה - פונקציה קווית (כיתה ט') =====
  { subjectName: 'מתמטיקה', topic: 'פונקציה קווית', difficulty: 'easy', type: 'multiple_choice', question: 'מהו השיפוע של הפונקציה y = 4x - 1?', options: ['4', '-1', '1', '0'], correctAnswer: '4' },
  { subjectName: 'מתמטיקה', topic: 'פונקציה קווית', difficulty: 'medium', type: 'true_false', question: 'הפונקציה y = 3x חותכת את ציר ה-y בנקודה (0,0).', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'פונקציה קווית', difficulty: 'medium', type: 'open', question: 'בפונקציה y = 2x + 3, מהו הערך של y כאשר x=5?', correctAnswer: '13' },
  { subjectName: 'מתמטיקה', topic: 'פונקציה קווית', difficulty: 'hard', type: 'multiple_choice', question: 'שני ישרים מקבילים - מה משותף להם?', options: ['אותו שיפוע', 'אותה נקודת חיתוך עם ציר y', 'אותו אורך', 'שום דבר'], correctAnswer: 'אותו שיפוע' },

  // ===== מדעים - תאים ורקמות (כיתה ח') =====
  { subjectName: 'מדעים', topic: 'תאים ורקמות', difficulty: 'easy', type: 'true_false', question: 'לתא צמח יש דופן תא, ולתא בעל חיים אין.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'תאים ורקמות', difficulty: 'easy', type: 'multiple_choice', question: 'מהו האברון האחראי על ייצור אנרגיה בתא?', options: ['גרעין', 'מיטוכונדריה', 'כלורופלסט', 'קרום התא'], correctAnswer: 'מיטוכונדריה' },
  { subjectName: 'מדעים', topic: 'תאים ורקמות', difficulty: 'medium', type: 'open', question: 'איך נקרא האברון בתא צמח שמבצע פוטוסינתזה?', correctAnswer: 'כלורופלסט' },
  { subjectName: 'מדעים', topic: 'תאים ורקמות', difficulty: 'medium', type: 'multiple_choice', question: 'מהי רקמה?', options: ['קבוצת תאים דומים המבצעים תפקיד משותף', 'סוג של אברון', 'איבר שלם', 'סוג של מולקולה'], correctAnswer: 'קבוצת תאים דומים המבצעים תפקיד משותף' },

  // ===== מדעים - כוח ותנועה (כיתה ט') =====
  { subjectName: 'מדעים', topic: 'כוח ותנועה', difficulty: 'easy', type: 'true_false', question: 'גוף שאין עליו כוח שקול ימשיך לנוע במהירות קבועה (או יישאר במנוחה).', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'כוח ותנועה', difficulty: 'easy', type: 'multiple_choice', question: 'מהי יחידת המידה של כוח?', options: ['ניוטון', 'ג\'אול', 'וואט', 'קילוגרם'], correctAnswer: 'ניוטון' },
  { subjectName: 'מדעים', topic: 'כוח ותנועה', difficulty: 'medium', type: 'open', question: 'גוף נע במהירות קבועה של 10 מ"ש במשך 5 שניות. איזה מרחק הוא עבר במטרים?', correctAnswer: '50' },
  { subjectName: 'מדעים', topic: 'כוח ותנועה', difficulty: 'medium', type: 'multiple_choice', question: 'איזה חוק של ניוטון קובע שלכל פעולה יש תגובה שווה ומנוגדת?', options: ['החוק הראשון', 'החוק השני', 'החוק השלישי', 'אף אחד מהם'], correctAnswer: 'החוק השלישי' },

  // ===== אנגלית - Past Simple (כיתה ח') =====
  { subjectName: 'אנגלית', topic: 'Past Simple', difficulty: 'easy', type: 'multiple_choice', question: 'Choose the correct past form: She ___ to school yesterday.', options: ['go', 'goes', 'went', 'gone'], correctAnswer: 'went' },
  { subjectName: 'אנגלית', topic: 'Past Simple', difficulty: 'easy', type: 'open', question: 'Complete: They ___ (play) football last week.', correctAnswer: 'played' },
  { subjectName: 'אנגלית', topic: 'Past Simple', difficulty: 'medium', type: 'true_false', question: 'The past tense of "eat" is "eated".', correctAnswer: 'לא נכון' },
  { subjectName: 'אנגלית', topic: 'Past Simple', difficulty: 'medium', type: 'multiple_choice', question: 'Which sentence is correct?', options: ['She didn\'t went home.', 'She didn\'t go home.', 'She not went home.', 'She no went home.'], correctAnswer: 'She didn\'t go home.' },

  // ===== אנגלית - Future Tense (כיתה ט') =====
  { subjectName: 'אנגלית', topic: 'Future Tense', difficulty: 'easy', type: 'multiple_choice', question: 'Choose the correct form: I ___ visit my grandma tomorrow.', options: ['will', 'am', 'do', 'was'], correctAnswer: 'will' },
  { subjectName: 'אנגלית', topic: 'Future Tense', difficulty: 'medium', type: 'open', question: 'Complete: Look at those clouds! It ___ (rain) soon.', correctAnswer: 'is going to rain' },
  { subjectName: 'אנגלית', topic: 'Future Tense', difficulty: 'medium', type: 'true_false', question: '"Going to" is often used for plans decided before the moment of speaking.', correctAnswer: 'נכון' },

  // ===== היסטוריה - יוון ורומא העתיקה (כיתה ח') =====
  { subjectName: 'היסטוריה', topic: 'יוון ורומא העתיקה', difficulty: 'easy', type: 'multiple_choice', question: 'באיזו עיר יוונית התפתחה הדמוקרטיה הראשונה בעולם?', options: ['אתונה', 'ספרטה', 'רומא', 'קורינתוס'], correctAnswer: 'אתונה' },
  { subjectName: 'היסטוריה', topic: 'יוון ורומא העתיקה', difficulty: 'easy', type: 'true_false', question: 'האימפריה הרומית שלטה על שטחים נרחבים סביב הים התיכון.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'יוון ורומא העתיקה', difficulty: 'medium', type: 'open', question: 'איך נקראה מועצת האזרחים שקיבלה החלטות באתונה הדמוקרטית?', correctAnswer: 'האקלסיה' },
  { subjectName: 'היסטוריה', topic: 'יוון ורומא העתיקה', difficulty: 'medium', type: 'multiple_choice', question: 'מה היה תפקידה של הסנאט ברומא העתיקה?', options: ['גוף מייעץ ומחוקק', 'צבא רומא', 'בית משפט דתי', 'שוק מסחרי'], correctAnswer: 'גוף מייעץ ומחוקק' },
  { subjectName: 'היסטוריה', topic: 'יוון ורומא העתיקה', difficulty: 'medium', type: 'open', question: 'מהי הבירה של האימפריה הרומית?', correctAnswer: 'רומא' },
  { subjectName: 'היסטוריה', topic: 'יוון ורומא העתיקה', difficulty: 'hard', type: 'true_false', question: 'האולימפיאדות של העת העתיקה נערכו לראשונה ביוון.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'יוון ורומא העתיקה', difficulty: 'hard', type: 'multiple_choice', question: "מה היה 'הקולוסיאום' ברומא העתיקה?", options: ['אמפיתיאטרון להצגות וקרבות גלדיאטורים', 'מקדש לאלים', 'ארמון הקיסר', 'ספרייה'], correctAnswer: 'אמפיתיאטרון להצגות וקרבות גלדיאטורים' },

  // ===== היסטוריה - העת החדשה המוקדמת - עידן התגליות (כיתה ט') =====
  { subjectName: 'היסטוריה', topic: 'העת החדשה המוקדמת - עידן התגליות', difficulty: 'easy', type: 'multiple_choice', question: 'מי יצא במסע שהוביל לגילוי אמריקה ב-1492?', options: ['קולומבוס', 'מגלן', 'וסקו דה גמה', 'גוטנברג'], correctAnswer: 'קולומבוס' },
  { subjectName: 'היסטוריה', topic: 'העת החדשה המוקדמת - עידן התגליות', difficulty: 'easy', type: 'true_false', question: 'עידן התגליות התאפשר בין השאר בזכות שיפורים בטכנולוגיית השיט.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'העת החדשה המוקדמת - עידן התגליות', difficulty: 'medium', type: 'open', question: 'איזו יבשת גילה קולומבוס בטעות בעודו מחפש דרך ים להודו?', correctAnswer: 'אמריקה' },
  { subjectName: 'היסטוריה', topic: 'העת החדשה המוקדמת - עידן התגליות', difficulty: 'medium', type: 'multiple_choice', question: 'מי היה הראשון שיצא במסע שהושלם כמסע ההקפה הראשון של כדור הארץ (המסע הושלם לאחר מותו)?', options: ['מגלן', 'קולומבוס', 'וסקו דה גמה', 'קוק'], correctAnswer: 'מגלן' },
  { subjectName: 'היסטוריה', topic: 'העת החדשה המוקדמת - עידן התגליות', difficulty: 'medium', type: 'true_false', question: 'וסקו דה גמה מצא דרך ים מאירופה להודו דרך דרום אפריקה.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'העת החדשה המוקדמת - עידן התגליות', difficulty: 'hard', type: 'multiple_choice', question: 'מה הייתה אחת התוצאות המרכזיות של עידן התגליות?', options: ['מפגש בין יבשות והתפתחות סחר עולמי', 'סיום השימוש בספינות', 'בידוד אירופה משאר העולם', 'ירידה במסחר'], correctAnswer: 'מפגש בין יבשות והתפתחות סחר עולמי' },
  { subjectName: 'היסטוריה', topic: 'העת החדשה המוקדמת - עידן התגליות', difficulty: 'hard', type: 'true_false', question: 'לעידן התגליות היו גם השלכות קשות על אוכלוסיות ילידים באמריקה.', correctAnswer: 'נכון' },

  // ===== היסטוריה - המהפכה הצרפתית והמהפכה התעשייתית (כיתה ח') =====
  { subjectName: 'היסטוריה', topic: 'המהפכה הצרפתית והמהפכה התעשייתית', difficulty: 'easy', type: 'multiple_choice', question: 'באיזו שנה פרצה המהפכה הצרפתית?', options: ['1789', '1689', '1889', '1699'], correctAnswer: '1789' },
  { subjectName: 'היסטוריה', topic: 'המהפכה הצרפתית והמהפכה התעשייתית', difficulty: 'easy', type: 'true_false', question: 'המהפכה הצרפתית הביאה לסיום שלטון המלוכה המוחלטת בצרפת.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'המהפכה הצרפתית והמהפכה התעשייתית', difficulty: 'easy', type: 'multiple_choice', question: 'מי היה מלך צרפת שהוצא להורג במהלך המהפכה?', options: ['לואי ה-16', 'נפוליאון', 'לואי ה-14', 'שארל הראשון'], correctAnswer: 'לואי ה-16' },
  { subjectName: 'היסטוריה', topic: 'המהפכה הצרפתית והמהפכה התעשייתית', difficulty: 'medium', type: 'multiple_choice', question: 'מהי הסיסמה המרכזית של המהפכה הצרפתית?', options: ['חירות, שוויון, אחווה', 'דת, מלך, מולדת', 'עבודה, משפחה, מולדת', 'כוח, תהילה, ניצחון'], correctAnswer: 'חירות, שוויון, אחווה' },
  { subjectName: 'היסטוריה', topic: 'המהפכה הצרפתית והמהפכה התעשייתית', difficulty: 'medium', type: 'true_false', question: 'המהפכה התעשייתית החלה תחילה באנגליה.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'המהפכה הצרפתית והמהפכה התעשייתית', difficulty: 'medium', type: 'open', question: 'איזו המצאה טכנולוגית הניעה במידה רבה את המהפכה התעשייתית?', correctAnswer: 'מכונת הקיטור' },
  { subjectName: 'היסטוריה', topic: 'המהפכה הצרפתית והמהפכה התעשייתית', difficulty: 'hard', type: 'multiple_choice', question: 'מה אפיין את תנאי העבודה בבתי החרושת בתחילת המהפכה התעשייתית?', options: ['שעות עבודה ארוכות ותנאים קשים, כולל עבודת ילדים', 'שעות עבודה קצרות ותנאים נוחים', 'עבודה מהבית בלבד', 'חופשות ארוכות ושכר גבוה'], correctAnswer: 'שעות עבודה ארוכות ותנאים קשים, כולל עבודת ילדים' },
  { subjectName: 'היסטוריה', topic: 'המהפכה הצרפתית והמהפכה התעשייתית', difficulty: 'hard', type: 'true_false', question: 'המהפכה התעשייתית האיצה את המעבר מכלכלה חקלאית לכלכלה תעשייתית ועירונית.', correctAnswer: 'נכון' },

  // ===== היסטוריה - אירופה בין שתי מלחמות העולם (כיתה ט') =====
  { subjectName: 'היסטוריה', topic: 'אירופה בין שתי מלחמות העולם', difficulty: 'easy', type: 'true_false', question: 'מלחמת העולם הראשונה הסתיימה ב-1918.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'אירופה בין שתי מלחמות העולם', difficulty: 'easy', type: 'multiple_choice', question: 'איזה חוזה סיים רשמית את מלחמת העולם הראשונה עם גרמניה?', options: ['חוזה ורסאי', 'חוזה מינכן', 'הצהרת בלפור', 'חוזה קמפ דיוויד'], correctAnswer: 'חוזה ורסאי' },
  { subjectName: 'היסטוריה', topic: 'אירופה בין שתי מלחמות העולם', difficulty: 'easy', type: 'open', question: 'מי היה מנהיג המפלגה הפשיסטית באיטליה?', correctAnswer: 'מוסוליני' },
  { subjectName: 'היסטוריה', topic: 'אירופה בין שתי מלחמות העולם', difficulty: 'medium', type: 'multiple_choice', question: 'מה היה אחד הגורמים המרכזיים לעליית הנאציזם בגרמניה?', options: ['משבר כלכלי קשה ותחושת השפלה לאומית אחרי המלחמה', 'שגשוג כלכלי גדול', 'ניצחון גרמניה במלחמה', 'שיתוף פעולה עם צרפת'], correctAnswer: 'משבר כלכלי קשה ותחושת השפלה לאומית אחרי המלחמה' },
  { subjectName: 'היסטוריה', topic: 'אירופה בין שתי מלחמות העולם', difficulty: 'medium', type: 'true_false', question: 'המשבר הכלכלי העולמי של 1929 (השפל הגדול) החריף את המצב הכלכלי באירופה.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'אירופה בין שתי מלחמות העולם', difficulty: 'medium', type: 'open', question: 'מי היה מנהיג המפלגה הנאצית שעלה לשלטון בגרמניה ב-1933?', correctAnswer: 'היטלר' },
  { subjectName: 'היסטוריה', topic: 'אירופה בין שתי מלחמות העולם', difficulty: 'hard', type: 'multiple_choice', question: "מהו 'טוטליטריזם'?", options: ['שלטון שמבקש לשלוט בכל תחומי החיים ואינו סובל התנגדות', 'שיטת ממשל דמוקרטית', 'שלטון מקומי בלבד', 'שיטת בחירות חופשיות'], correctAnswer: 'שלטון שמבקש לשלוט בכל תחומי החיים ואינו סובל התנגדות' },
  { subjectName: 'היסטוריה', topic: 'אירופה בין שתי מלחמות העולם', difficulty: 'hard', type: 'true_false', question: 'התקופה שבין שתי מלחמות העולם התאפיינה גם בעליית משטרים טוטליטריים באיטליה ובגרמניה.', correctAnswer: 'נכון' },

  // ===== היסטוריה - לאומיות וציונות (כיתה י') =====
  { subjectName: 'היסטוריה', topic: 'לאומיות וציונות', difficulty: 'easy', type: 'multiple_choice', question: "מי נחשב לאבי הציונות המדינית וכתב את הספר 'מדינת היהודים'?", options: ['בנימין זאב הרצל', 'חיים ויצמן', 'דוד בן גוריון', "זאב ז'בוטינסקי"], correctAnswer: 'בנימין זאב הרצל' },
  { subjectName: 'היסטוריה', topic: 'לאומיות וציונות', difficulty: 'easy', type: 'true_false', question: 'הקונגרס הציוני הראשון התכנס בבזל, שוויץ.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'לאומיות וציונות', difficulty: 'easy', type: 'open', question: 'איך נקראת התנועה שמאמינה בזכותו של עם להגדרה עצמית ומדינה משלו?', correctAnswer: 'לאומיות' },
  { subjectName: 'היסטוריה', topic: 'לאומיות וציונות', difficulty: 'medium', type: 'multiple_choice', question: 'מה הייתה מטרתו המרכזית של הקונגרס הציוני הראשון (1897)?', options: ['לקדם הקמת בית לאומי ליהודים בארץ ישראל', 'להקים ממשלה בגלות', 'לארגן עלייה להודו', 'לבטל את השבת'], correctAnswer: 'לקדם הקמת בית לאומי ליהודים בארץ ישראל' },
  { subjectName: 'היסטוריה', topic: 'לאומיות וציונות', difficulty: 'medium', type: 'true_false', question: 'הצהרת בלפור (1917) הייתה הצהרה בריטית שתמכה בהקמת בית לאומי ליהודים בארץ ישראל.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'לאומיות וציונות', difficulty: 'medium', type: 'open', question: 'איך נקראת תנועת ההגירה וההתיישבות היהודית לארץ ישראל?', correctAnswer: 'עלייה' },
  { subjectName: 'היסטוריה', topic: 'לאומיות וציונות', difficulty: 'hard', type: 'multiple_choice', question: 'מי היה נשיאה הראשון של ההסתדרות הציונית העולמית?', options: ['בנימין זאב הרצל', 'דוד בן גוריון', 'חיים ויצמן', 'מנחם בגין'], correctAnswer: 'בנימין זאב הרצל' },
  { subjectName: 'היסטוריה', topic: 'לאומיות וציונות', difficulty: 'hard', type: 'true_false', question: 'הלאומיות היהודית (הציונות) התפתחה כתגובה, בין השאר, לגל האנטישמיות באירופה במאה ה-19.', correctAnswer: 'נכון' },

  // ===== היסטוריה - נאציזם, אנטישמיות ומלחמת העולם השנייה (כיתה י"א) =====
  { subjectName: 'היסטוריה', topic: 'נאציזם, אנטישמיות ומלחמת העולם השנייה', difficulty: 'easy', type: 'true_false', question: 'מלחמת העולם השנייה החלה ב-1939 עם פלישת גרמניה לפולין.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'נאציזם, אנטישמיות ומלחמת העולם השנייה', difficulty: 'easy', type: 'multiple_choice', question: 'מי היה מנהיג גרמניה הנאצית במהלך מלחמת העולם השנייה?', options: ['אדולף היטלר', 'בניטו מוסוליני', "ווינסטון צ'רצ'יל", 'סטלין'], correctAnswer: 'אדולף היטלר' },
  { subjectName: 'היסטוריה', topic: 'נאציזם, אנטישמיות ומלחמת העולם השנייה', difficulty: 'easy', type: 'open', question: 'כיצד נקראת שנאת/רדיפת היהודים?', correctAnswer: 'אנטישמיות' },
  { subjectName: 'היסטוריה', topic: 'נאציזם, אנטישמיות ומלחמת העולם השנייה', difficulty: 'medium', type: 'multiple_choice', question: "מהם 'חוקי נירנברג' (1935)?", options: ['חוקים נאציים ששללו זכויות אזרח מיהודים בגרמניה', 'חוקי סחר בין-לאומי', 'חוקי בחירות דמוקרטיים', 'הסכם שלום'], correctAnswer: 'חוקים נאציים ששללו זכויות אזרח מיהודים בגרמניה' },
  { subjectName: 'היסטוריה', topic: 'נאציזם, אנטישמיות ומלחמת העולם השנייה', difficulty: 'medium', type: 'true_false', question: 'מלחמת העולם השנייה הייתה המלחמה הגדולה והקטלנית ביותר בהיסטוריה, ובה השתתפו מדינות רבות ברחבי העולם.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'נאציזם, אנטישמיות ומלחמת העולם השנייה', difficulty: 'medium', type: 'open', question: 'כיצד נקרא הכינוי לתוכנית הנאצית להשמדת העם היהודי?', correctAnswer: 'הפתרון הסופי' },
  { subjectName: 'היסטוריה', topic: 'נאציזם, אנטישמיות ומלחמת העולם השנייה', difficulty: 'hard', type: 'multiple_choice', question: 'מתי הסתיימה מלחמת העולם השנייה באירופה?', options: ['1945', '1943', '1939', '1948'], correctAnswer: '1945' },
  { subjectName: 'היסטוריה', topic: 'נאציזם, אנטישמיות ומלחמת העולם השנייה', difficulty: 'hard', type: 'true_false', question: 'הנאצים הקימו מחנות ריכוז והשמדה כחלק מרדיפת היהודים ואוכלוסיות נוספות.', correctAnswer: 'נכון' },

  // ===== היסטוריה - השואה, שארית הפליטה והקמת מדינת ישראל (כיתה י"ב) =====
  { subjectName: 'היסטוריה', topic: 'השואה, שארית הפליטה והקמת מדינת ישראל', difficulty: 'easy', type: 'true_false', question: 'כשישה מיליון יהודים נרצחו בשואה.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'השואה, שארית הפליטה והקמת מדינת ישראל', difficulty: 'easy', type: 'multiple_choice', question: 'כיצד נקראים ניצולי השואה שנותרו לאחר המלחמה?', options: ['שארית הפליטה', 'העלייה השנייה', 'הבריגדה היהודית', 'הפלמ"ח'], correctAnswer: 'שארית הפליטה' },
  { subjectName: 'היסטוריה', topic: 'השואה, שארית הפליטה והקמת מדינת ישראל', difficulty: 'easy', type: 'open', question: 'באיזו שנה הוקמה מדינת ישראל?', correctAnswer: '1948' },
  { subjectName: 'היסטוריה', topic: 'השואה, שארית הפליטה והקמת מדינת ישראל', difficulty: 'medium', type: 'multiple_choice', question: 'מי הכריז על הקמת מדינת ישראל ב-1948?', options: ['דוד בן גוריון', 'חיים ויצמן', 'בנימין זאב הרצל', 'מנחם בגין'], correctAnswer: 'דוד בן גוריון' },
  { subjectName: 'היסטוריה', topic: 'השואה, שארית הפליטה והקמת מדינת ישראל', difficulty: 'medium', type: 'true_false', question: 'לאחר מלחמת העולם השנייה, ניצולי שואה רבים שהו במחנות עקורים (מחנות DP) באירופה.', correctAnswer: 'נכון' },
  { subjectName: 'היסטוריה', topic: 'השואה, שארית הפליטה והקמת מדינת ישראל', difficulty: 'medium', type: 'open', question: 'איזו מלחמה פרצה מיד לאחר הכרזת העצמאות של מדינת ישראל?', correctAnswer: 'מלחמת העצמאות' },
  { subjectName: 'היסטוריה', topic: 'השואה, שארית הפליטה והקמת מדינת ישראל', difficulty: 'hard', type: 'multiple_choice', question: "מהי 'תנועת הבריחה'?", options: ['תנועה שסייעה לניצולי שואה לברוח מאירופה לארץ ישראל', 'ארגון צבאי בריטי', 'תנועה נגד הקמת המדינה', 'מפלגה פוליטית'], correctAnswer: 'תנועה שסייעה לניצולי שואה לברוח מאירופה לארץ ישראל' },
  { subjectName: 'היסטוריה', topic: 'השואה, שארית הפליטה והקמת מדינת ישראל', difficulty: 'hard', type: 'true_false', question: 'עצרת האו"ם אישרה ב-29 בנובמבר 1947 את תוכנית החלוקה לארץ ישראל.', correctAnswer: 'נכון' },

  // ===== מתמטיקה - אחוזים (כיתה ח') - השלמה ל-10 שאלות =====
  { subjectName: 'מתמטיקה', topic: 'אחוזים', difficulty: 'easy', type: 'multiple_choice', question: 'כמה זה 10% מתוך 90?', options: ['9', '10', '19', '90'], correctAnswer: '9' },
  { subjectName: 'מתמטיקה', topic: 'אחוזים', difficulty: 'easy', type: 'open', question: 'כמה זה 50% מתוך 80?', correctAnswer: '40' },
  { subjectName: 'מתמטיקה', topic: 'אחוזים', difficulty: 'medium', type: 'true_false', question: '100% מכמות מסוימת שווה לכל הכמות.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'אחוזים', difficulty: 'medium', type: 'multiple_choice', question: 'מספר עלה מ-80 ל-100. באחוזים, בכמה הוא עלה?', options: ['20', '25', '80', '100'], correctAnswer: '25' },
  { subjectName: 'מתמטיקה', topic: 'אחוזים', difficulty: 'hard', type: 'open', question: 'מחיר מוצר ירד מ-150 ש"ח ל-120 ש"ח. באחוזים, בכמה ירד המחיר?', correctAnswer: '20' },
  { subjectName: 'מתמטיקה', topic: 'אחוזים', difficulty: 'hard', type: 'multiple_choice', question: 'יש לך 40% הנחה על מוצר שעולה 200 ש"ח. כמה תשלמי בסוף?', options: ['80', '120', '160', '200'], correctAnswer: '120' },

  // ===== מתמטיקה - פונקציה קווית (כיתה ט') - השלמה ל-10 שאלות =====
  { subjectName: 'מתמטיקה', topic: 'פונקציה קווית', difficulty: 'easy', type: 'open', question: 'בפונקציה y = x - 2, מהו y כאשר x=0?', correctAnswer: '-2' },
  { subjectName: 'מתמטיקה', topic: 'פונקציה קווית', difficulty: 'easy', type: 'true_false', question: 'בפונקציה y = -2x, כאשר x גדל, y קטן.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'פונקציה קווית', difficulty: 'medium', type: 'multiple_choice', question: 'מהי נקודת החיתוך עם ציר ה-y בפונקציה y = 5x + 7?', options: ['(0,7)', '(7,0)', '(0,5)', '(5,0)'], correctAnswer: '(0,7)' },
  { subjectName: 'מתמטיקה', topic: 'פונקציה קווית', difficulty: 'medium', type: 'open', question: 'מהו השיפוע של הפונקציה y = -x + 10?', correctAnswer: '-1' },
  { subjectName: 'מתמטיקה', topic: 'פונקציה קווית', difficulty: 'hard', type: 'multiple_choice', question: 'לשתי הפונקציות y=2x+1 ו-y=2x-3 יש אותו שיפוע. מה זה אומר עליהן?', options: ['הן מקבילות', 'הן מאונכות', 'הן אותה פונקציה', 'אין קשר ביניהן'], correctAnswer: 'הן מקבילות' },
  { subjectName: 'מתמטיקה', topic: 'פונקציה קווית', difficulty: 'hard', type: 'open', question: 'מצאי את הערך של x כאשר y=0 בפונקציה y = 3x - 9', correctAnswer: '3' },

  // ===== מתמטיקה - שברים ומספרים עשרוניים (כיתה ז') =====
  { subjectName: 'מתמטיקה', topic: 'שברים ומספרים עשרוניים', difficulty: 'easy', type: 'multiple_choice', question: 'כמה זה 1/2 + 1/4?', options: ['3/4', '2/6', '1/6', '2/4'], correctAnswer: '3/4' },
  { subjectName: 'מתמטיקה', topic: 'שברים ומספרים עשרוניים', difficulty: 'easy', type: 'open', question: 'כמה זה 3/4 בתור מספר עשרוני?', correctAnswer: '0.75' },
  { subjectName: 'מתמטיקה', topic: 'שברים ומספרים עשרוניים', difficulty: 'easy', type: 'true_false', question: '1/2 גדול מ-1/3.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'שברים ומספרים עשרוניים', difficulty: 'medium', type: 'multiple_choice', question: 'כמה זה 2/3 * 3/4?', options: ['1/2', '3/4', '5/12', '2/3'], correctAnswer: '1/2' },
  { subjectName: 'מתמטיקה', topic: 'שברים ומספרים עשרוניים', difficulty: 'medium', type: 'true_false', question: '0.6 שווה ל-3/5.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'שברים ומספרים עשרוניים', difficulty: 'medium', type: 'multiple_choice', question: 'כמה זה 3/8 + 2/8?', options: ['5/8', '5/16', '1/8', '6/16'], correctAnswer: '5/8' },
  { subjectName: 'מתמטיקה', topic: 'שברים ומספרים עשרוניים', difficulty: 'hard', type: 'open', question: 'מהו 3/4 בתור אחוזים? (כתבי רק את המספר, בלי %)', correctAnswer: '75' },
  { subjectName: 'מתמטיקה', topic: 'שברים ומספרים עשרוניים', difficulty: 'hard', type: 'multiple_choice', question: 'איזה שבר גדול יותר: 2/3 או 3/5?', options: ['2/3', '3/5', 'שווים', 'אי אפשר לדעת'], correctAnswer: '2/3' },

  // ===== מתמטיקה - מערכת משוואות (כיתה ט') =====
  { subjectName: 'מתמטיקה', topic: 'מערכת משוואות', difficulty: 'easy', type: 'true_false', question: 'פתרון מערכת משוואות הוא הנקודה שבה שני הישרים נחתכים.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'מערכת משוואות', difficulty: 'easy', type: 'multiple_choice', question: 'במערכת המשוואות y=x+1 ו-y=2x, מהו x בפתרון?', options: ['1', '2', '0', '-1'], correctAnswer: '1' },
  { subjectName: 'מתמטיקה', topic: 'מערכת משוואות', difficulty: 'medium', type: 'open', question: 'פתרי: y = x + 3, y = 2x + 1. מהו x?', correctAnswer: '2' },
  { subjectName: 'מתמטיקה', topic: 'מערכת משוואות', difficulty: 'medium', type: 'multiple_choice', question: 'בשיטת ההצבה, מה עושים קודם?', options: ['מבודדים משתנה אחד ומציבים במשוואה השנייה', 'מכפילים את שתי המשוואות ב-0', 'מציירים גרף בלבד', 'מנחשים פתרון'], correctAnswer: 'מבודדים משתנה אחד ומציבים במשוואה השנייה' },
  { subjectName: 'מתמטיקה', topic: 'מערכת משוואות', difficulty: 'hard', type: 'open', question: 'פתרי: 2x + y = 10, y = x - 2. מהו x?', correctAnswer: '4' },
  { subjectName: 'מתמטיקה', topic: 'מערכת משוואות', difficulty: 'hard', type: 'true_false', question: 'למערכת משוואות של שני ישרים מקבילים (שאינם זהים) אין פתרון.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'מערכת משוואות', difficulty: 'medium', type: 'multiple_choice', question: "מה המשמעות של 'פתרון יחיד' במערכת משוואות של שני ישרים?", options: ['יש בדיוק נקודת חיתוך אחת בין הישרים', 'אין פתרון בכלל', 'יש אינסוף פתרונות', 'הישרים מקבילים'], correctAnswer: 'יש בדיוק נקודת חיתוך אחת בין הישרים' },

  // ===== מדעים - תאים ורקמות (כיתה ח') - השלמה ל-10 שאלות =====
  { subjectName: 'מדעים', topic: 'תאים ורקמות', difficulty: 'easy', type: 'true_false', question: 'הגרעין בתא אחראי על ניהול הפעילות התאית ומכיל את ה-DNA.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'תאים ורקמות', difficulty: 'easy', type: 'multiple_choice', question: 'מהו התפקיד העיקרי של קרום התא?', options: ['להגן על התא ולשלוט במעבר חומרים', 'לייצר אנרגיה', 'לבצע פוטוסינתזה', 'לאחסן מים בלבד'], correctAnswer: 'להגן על התא ולשלוט במעבר חומרים' },
  { subjectName: 'מדעים', topic: 'תאים ורקמות', difficulty: 'medium', type: 'open', question: 'כיצד נקרא הנוזל שממלא את התא מסביב לאברונים?', correctAnswer: 'ציטופלזמה' },
  { subjectName: 'מדעים', topic: 'תאים ורקמות', difficulty: 'medium', type: 'true_false', question: 'לתא בעל חיים יש כלורופלסט לביצוע פוטוסינתזה.', correctAnswer: 'לא נכון' },
  { subjectName: 'מדעים', topic: 'תאים ורקמות', difficulty: 'hard', type: 'multiple_choice', question: 'איזה מהאברונים הבאים אחראי על ייצור חלבונים בתא?', options: ['ריבוזום', 'מיטוכונדריה', 'גרעין', 'קרום התא'], correctAnswer: 'ריבוזום' },
  { subjectName: 'מדעים', topic: 'תאים ורקמות', difficulty: 'hard', type: 'open', question: 'מהו שם התהליך שבו התא מתחלק לשני תאים חדשים?', correctAnswer: 'חלוקת תא' },

  // ===== מדעים - כוח ותנועה (כיתה ט') - השלמה ל-10 שאלות =====
  { subjectName: 'מדעים', topic: 'כוח ותנועה', difficulty: 'easy', type: 'open', question: 'מהי יחידת המידה של מהירות (במערכת היחידות הבינלאומית)?', correctAnswer: 'מטר לשנייה' },
  { subjectName: 'מדעים', topic: 'כוח ותנועה', difficulty: 'easy', type: 'true_false', question: 'תאוצה היא קצב השינוי של המהירות.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'כוח ותנועה', difficulty: 'medium', type: 'multiple_choice', question: 'גוף עם מסה גדולה יותר יזדקק ל____ כוח כדי להאיץ אותו באותה תאוצה.', options: ['יותר', 'פחות', 'אותו', 'אין קשר'], correctAnswer: 'יותר' },
  { subjectName: 'מדעים', topic: 'כוח ותנועה', difficulty: 'medium', type: 'open', question: 'גוף מאיץ מ-0 ל-20 מ"ש תוך 4 שניות. מהי התאוצה שלו במטר לשנייה בריבוע?', correctAnswer: '5' },
  { subjectName: 'מדעים', topic: 'כוח ותנועה', difficulty: 'hard', type: 'multiple_choice', question: 'חוק ניוטון הראשון ידוע גם בשם?', options: ['חוק ההתמדה', 'חוק הפעולה והתגובה', 'חוק הכבידה', 'חוק שימור האנרגיה'], correctAnswer: 'חוק ההתמדה' },
  { subjectName: 'מדעים', topic: 'כוח ותנועה', difficulty: 'hard', type: 'true_false', question: 'כוח חיכוך פועל תמיד בכיוון התנועה.', correctAnswer: 'לא נכון' },

  // ===== מדעים - מבוא למדידה ויחידות (כיתה ז') =====
  { subjectName: 'מדעים', topic: 'מבוא למדידה ויחידות', difficulty: 'easy', type: 'multiple_choice', question: 'מהי יחידת המידה הבסיסית לאורך?', options: ['מטר', 'גרם', 'ליטר', 'שנייה'], correctAnswer: 'מטר' },
  { subjectName: 'מדעים', topic: 'מבוא למדידה ויחידות', difficulty: 'easy', type: 'true_false', question: '1 ק"מ שווה ל-1000 מטר.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'מבוא למדידה ויחידות', difficulty: 'easy', type: 'open', question: 'כמה סנטימטרים יש במטר אחד?', correctAnswer: '100' },
  { subjectName: 'מדעים', topic: 'מבוא למדידה ויחידות', difficulty: 'medium', type: 'multiple_choice', question: 'איזה כלי משמש למדידת נפח נוזלים?', options: ['מיכל מדידה', 'סרגל', 'משקל', 'שעון עצר'], correctAnswer: 'מיכל מדידה' },
  { subjectName: 'מדעים', topic: 'מבוא למדידה ויחידות', difficulty: 'medium', type: 'open', question: 'כמה גרם יש בקילוגרם אחד?', correctAnswer: '1000' },
  { subjectName: 'מדעים', topic: 'מבוא למדידה ויחידות', difficulty: 'medium', type: 'true_false', question: 'משקל (מאזניים) משמש למדידת מסה.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'מבוא למדידה ויחידות', difficulty: 'hard', type: 'open', question: 'כמה מיליליטר יש בליטר אחד?', correctAnswer: '1000' },
  { subjectName: 'מדעים', topic: 'מבוא למדידה ויחידות', difficulty: 'hard', type: 'multiple_choice', question: 'איזה כלי משמש למדידת אורך בדיוק רב בבית ספר?', options: ['סרגל', 'מד לחץ', 'מד חום', 'משקל'], correctAnswer: 'סרגל' },

  // ===== מדעים - מערכות בגוף האדם (כיתה ט') =====
  { subjectName: 'מדעים', topic: 'מערכות בגוף האדם', difficulty: 'easy', type: 'multiple_choice', question: 'איזו מערכת אחראית על פירוק המזון בגוף?', options: ['מערכת העיכול', 'מערכת הנשימה', 'מערכת הדם', 'מערכת השרירים'], correctAnswer: 'מערכת העיכול' },
  { subjectName: 'מדעים', topic: 'מערכות בגוף האדם', difficulty: 'easy', type: 'true_false', question: 'הלב הוא חלק ממערכת הדם וכלי הדם.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'מערכות בגוף האדם', difficulty: 'medium', type: 'open', question: 'מהו האיבר המרכזי במערכת הנשימה שאחראי על חילופי גזים?', correctAnswer: 'ריאות' },
  { subjectName: 'מדעים', topic: 'מערכות בגוף האדם', difficulty: 'medium', type: 'multiple_choice', question: 'מהו תפקידם העיקרי של תאי הדם האדומים?', options: ['נשיאת חמצן', 'לחימה בזיהומים', 'קרישת דם', 'עיכול מזון'], correctAnswer: 'נשיאת חמצן' },
  { subjectName: 'מדעים', topic: 'מערכות בגוף האדם', difficulty: 'hard', type: 'open', question: 'איזה איבר מפרק את המזון בעזרת חומצה?', correctAnswer: 'קיבה' },
  { subjectName: 'מדעים', topic: 'מערכות בגוף האדם', difficulty: 'hard', type: 'true_false', question: 'מערכת העצבים שולטת ומתאמת בין מערכות הגוף השונות.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'מערכות בגוף האדם', difficulty: 'medium', type: 'true_false', question: 'מערכת השרירים והשלד יחד אחראית על תנועת הגוף.', correctAnswer: 'נכון' },

  // ===== אנגלית - Present Simple (כיתה ח') - השלמה ל-10 שאלות =====
  { subjectName: 'אנגלית', topic: 'Present Simple', difficulty: 'easy', type: 'multiple_choice', question: 'Choose the correct form: We ___ breakfast every morning.', options: ['eat', 'eats', 'ate', 'eating'], correctAnswer: 'eat' },
  { subjectName: 'אנגלית', topic: 'Present Simple', difficulty: 'medium', type: 'open', question: "Complete: My sister ___ (not / like) coffee.", correctAnswer: "doesn't like" },

  // ===== אנגלית - Past Simple (כיתה ח') - השלמה ל-10 שאלות =====
  { subjectName: 'אנגלית', topic: 'Past Simple', difficulty: 'easy', type: 'multiple_choice', question: 'Choose the correct past form: I ___ my homework yesterday.', options: ['do', 'did', 'done', 'doing'], correctAnswer: 'did' },
  { subjectName: 'אנגלית', topic: 'Past Simple', difficulty: 'easy', type: 'open', question: 'Complete: We ___ (watch) a movie last night.', correctAnswer: 'watched' },
  { subjectName: 'אנגלית', topic: 'Past Simple', difficulty: 'medium', type: 'true_false', question: "The past tense of 'go' is 'goed'.", correctAnswer: 'לא נכון' },
  { subjectName: 'אנגלית', topic: 'Past Simple', difficulty: 'medium', type: 'multiple_choice', question: 'Which question is correct?', options: ['Did you went home?', 'Did you go home?', 'Did you goes home?', 'You did go home?'], correctAnswer: 'Did you go home?' },
  { subjectName: 'אנגלית', topic: 'Past Simple', difficulty: 'hard', type: 'open', question: "Complete: She ___ (not / finish) her homework.", correctAnswer: "didn't finish" },
  { subjectName: 'אנגלית', topic: 'Past Simple', difficulty: 'hard', type: 'true_false', question: "'Was' is the past form of 'is', and 'were' is the past form of 'are'.", correctAnswer: 'נכון' },

  // ===== אנגלית - Future Tense (כיתה ט') - השלמה ל-10 שאלות =====
  { subjectName: 'אנגלית', topic: 'Future Tense', difficulty: 'easy', type: 'true_false', question: "We use 'will' for quick decisions made at the moment of speaking.", correctAnswer: 'נכון' },
  { subjectName: 'אנגלית', topic: 'Future Tense', difficulty: 'easy', type: 'open', question: 'Complete: I think it ___ (be) sunny tomorrow.', correctAnswer: 'will be' },
  { subjectName: 'אנגלית', topic: 'Future Tense', difficulty: 'medium', type: 'multiple_choice', question: 'Choose the correct form: They ___ to the party tonight.', options: ['will go', 'goes', 'went', 'going'], correctAnswer: 'will go' },
  { subjectName: 'אנגלית', topic: 'Future Tense', difficulty: 'medium', type: 'true_false', question: "'Going to' is often used for predictions based on evidence we can see now.", correctAnswer: 'נכון' },
  { subjectName: 'אנגלית', topic: 'Future Tense', difficulty: 'medium', type: 'open', question: 'Complete: She ___ (not / come) to school tomorrow because she is sick.', correctAnswer: "won't come" },
  { subjectName: 'אנגלית', topic: 'Future Tense', difficulty: 'hard', type: 'multiple_choice', question: "Which sentence correctly uses 'going to'?", options: ['She is going to study tonight.', 'She going to study tonight.', 'She is go to study tonight.', 'She is going study tonight.'], correctAnswer: 'She is going to study tonight.' },
  { subjectName: 'אנגלית', topic: 'Future Tense', difficulty: 'hard', type: 'open', question: 'Complete: Look out! That glass ___ (fall)!', correctAnswer: 'is going to fall' },

  // ===== אנגלית - Present Progressive (כיתה ח') =====
  { subjectName: 'אנגלית', topic: 'Present Progressive', difficulty: 'easy', type: 'multiple_choice', question: 'Choose the correct form: She ___ TV right now.', options: ['watch', 'watches', 'is watching', 'watched'], correctAnswer: 'is watching' },
  { subjectName: 'אנגלית', topic: 'Present Progressive', difficulty: 'easy', type: 'true_false', question: 'We use Present Progressive for actions happening right now.', correctAnswer: 'נכון' },
  { subjectName: 'אנגלית', topic: 'Present Progressive', difficulty: 'easy', type: 'open', question: 'Complete: I ___ (write) an email at the moment.', correctAnswer: 'am writing' },
  { subjectName: 'אנגלית', topic: 'Present Progressive', difficulty: 'medium', type: 'multiple_choice', question: 'Choose the correct form: They ___ football now.', options: ['plays', 'play', 'are playing', 'played'], correctAnswer: 'are playing' },
  { subjectName: 'אנגלית', topic: 'Present Progressive', difficulty: 'medium', type: 'open', question: 'Complete: He ___ (not / listen) to music right now.', correctAnswer: "isn't listening" },
  { subjectName: 'אנגלית', topic: 'Present Progressive', difficulty: 'medium', type: 'true_false', question: "The Present Progressive is formed with 'to be' + verb + ing.", correctAnswer: 'נכון' },
  { subjectName: 'אנגלית', topic: 'Present Progressive', difficulty: 'hard', type: 'multiple_choice', question: 'Which question is correct?', options: ['What you are doing?', 'What are you doing?', 'What do you doing?', 'What is you doing?'], correctAnswer: 'What are you doing?' },
  { subjectName: 'אנגלית', topic: 'Present Progressive', difficulty: 'hard', type: 'open', question: 'Complete: Look! It ___ (rain) outside.', correctAnswer: 'is raining' },

  // ===== אנגלית - Past Progressive (כיתה ט') =====
  { subjectName: 'אנגלית', topic: 'Past Progressive', difficulty: 'easy', type: 'multiple_choice', question: 'Choose the correct form: I ___ TV when she called.', options: ['watch', 'was watching', 'watched', 'watches'], correctAnswer: 'was watching' },
  { subjectName: 'אנגלית', topic: 'Past Progressive', difficulty: 'easy', type: 'true_false', question: 'Past Progressive describes an action that was in progress at a specific time in the past.', correctAnswer: 'נכון' },
  { subjectName: 'אנגלית', topic: 'Past Progressive', difficulty: 'easy', type: 'open', question: 'Complete: They ___ (play) outside when it started to rain.', correctAnswer: 'were playing' },
  { subjectName: 'אנגלית', topic: 'Past Progressive', difficulty: 'medium', type: 'multiple_choice', question: 'Choose the correct form: She ___ dinner when the phone rang.', options: ['was cooking', 'cook', 'cooked', 'cooks'], correctAnswer: 'was cooking' },
  { subjectName: 'אנגלית', topic: 'Past Progressive', difficulty: 'medium', type: 'open', question: 'Complete: I ___ (not / sleep) when you called.', correctAnswer: "wasn't sleeping" },
  { subjectName: 'אנגלית', topic: 'Past Progressive', difficulty: 'medium', type: 'true_false', question: "Past Progressive is formed with 'was/were' + verb + ing.", correctAnswer: 'נכון' },
  { subjectName: 'אנגלית', topic: 'Past Progressive', difficulty: 'hard', type: 'multiple_choice', question: 'Which sentence correctly uses Past Progressive?', options: ['She was study when I arrived.', 'She studying when I arrived.', 'She was studying when I arrived.', 'She studied when I was arriving.'], correctAnswer: 'She was studying when I arrived.' },
  { subjectName: 'אנגלית', topic: 'Past Progressive', difficulty: 'hard', type: 'open', question: 'Complete: We ___ (walk) home when we saw the accident.', correctAnswer: 'were walking' },

  // ===== עברית - הבנת הנקרא וניתוח טקסט (כיתה ז') =====
  { subjectName: 'עברית', topic: 'הבנת הנקרא וניתוח טקסט', difficulty: 'easy', type: 'multiple_choice', question: "מהו 'רעיון מרכזי' בטקסט?", options: ['הנושא העיקרי שהטקסט עוסק בו', 'המילה הראשונה בטקסט', 'שם הכותב', 'אורך הטקסט'], correctAnswer: 'הנושא העיקרי שהטקסט עוסק בו' },
  { subjectName: 'עברית', topic: 'הבנת הנקרא וניתוח טקסט', difficulty: 'easy', type: 'true_false', question: "'הסקת מסקנות' פירושה להבין דבר-מה שלא נכתב במפורש בטקסט, אך משתמע ממנו.", correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'הבנת הנקרא וניתוח טקסט', difficulty: 'easy', type: 'open', question: "איך נקראת מילה שיש לה משמעות דומה למילה אחרת (למשל 'שמח' ו'עליז')?", correctAnswer: 'מילה נרדפת' },
  { subjectName: 'עברית', topic: 'הבנת הנקרא וניתוח טקסט', difficulty: 'medium', type: 'multiple_choice', question: "מהי 'מילה מנחה' בטקסט?", options: ['מילה שחוזרת ומרמזת על נושא הטקסט', 'המילה האחרונה בטקסט', 'שם הסופר', 'כותרת הפרק'], correctAnswer: 'מילה שחוזרת ומרמזת על נושא הטקסט' },
  { subjectName: 'עברית', topic: 'הבנת הנקרא וניתוח טקסט', difficulty: 'medium', type: 'true_false', question: 'עובדה היא משהו שניתן להוכיח, ודעה היא עמדה אישית של הכותב.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'הבנת הנקרא וניתוח טקסט', difficulty: 'medium', type: 'open', question: "מה ההפך למילה 'יתרון'?", correctAnswer: 'חיסרון' },
  { subjectName: 'עברית', topic: 'הבנת הנקרא וניתוח טקסט', difficulty: 'hard', type: 'multiple_choice', question: 'כאשר קוראים טקסט ומזהים את מטרת הכתיבה שלו (למשל לשכנע, להסביר, לספר) - זה נקרא?', options: ['זיהוי מטרת הכתיבה', 'ניקוד', 'תחביר', 'הטיה'], correctAnswer: 'זיהוי מטרת הכתיבה' },
  { subjectName: 'עברית', topic: 'הבנת הנקרא וניתוח טקסט', difficulty: 'hard', type: 'open', question: "איזו מילה נרדפת למילה 'מיד' מבין: 'לאחר זמן', 'תכף', 'אולי', 'אתמול'?", correctAnswer: 'תכף' },

  // ===== עברית - כללי כתיב וניקוד בסיסיים (כיתה ז') =====
  { subjectName: 'עברית', topic: 'כללי כתיב וניקוד בסיסיים', difficulty: 'easy', type: 'true_false', question: "כתיב מלא משתמש באותיות אימות קריאה (כמו ו' ו-י') יותר מכתיב חסר.", correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'כללי כתיב וניקוד בסיסיים', difficulty: 'easy', type: 'multiple_choice', question: "איך כותבים בכתיב מלא את המילה 'חלום' ברבים?", options: ['חלומות', 'חלמות', 'חלומת', 'חלמת'], correctAnswer: 'חלומות' },
  { subjectName: 'עברית', topic: 'כללי כתיב וניקוד בסיסיים', difficulty: 'easy', type: 'open', question: "כיצד כותבים נכון: 'אחראי' או 'אחרעי'?", correctAnswer: 'אחראי' },
  { subjectName: 'עברית', topic: 'כללי כתיב וניקוד בסיסיים', difficulty: 'medium', type: 'multiple_choice', question: 'איזו מהמילים הבאות כתובה נכון?', options: ['תודה', 'תודא', 'תודע', 'תוודה'], correctAnswer: 'תודה' },
  { subjectName: 'עברית', topic: 'כללי כתיב וניקוד בסיסיים', difficulty: 'medium', type: 'true_false', question: "המילה 'בית ספר' נכתבת כשתי מילים נפרדות.", correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'כללי כתיב וניקוד בסיסיים', difficulty: 'medium', type: 'open', question: "מהו השורש (שלוש אותיות) של המילה 'מסתכלת'?", correctAnswer: 'סכל' },
  { subjectName: 'עברית', topic: 'כללי כתיב וניקוד בסיסיים', difficulty: 'hard', type: 'multiple_choice', question: 'איזו מהאותיות הבאות היא אות גרונית?', options: ['א', 'ב', 'ג', 'ד'], correctAnswer: 'א' },
  { subjectName: 'עברית', topic: 'כללי כתיב וניקוד בסיסיים', difficulty: 'hard', type: 'true_false', question: "בעברית, האות 'ך' (כף סופית) משמשת רק בסוף מילה.", correctAnswer: 'נכון' },

  // ===== עברית - סוגי משפטים (כיתה ח') =====
  { subjectName: 'עברית', topic: 'סוגי משפטים', difficulty: 'easy', type: 'multiple_choice', question: "'הילד קרא ספר' - איזה סוג משפט זה?", options: ['משפט חיווי', 'משפט שאלה', 'משפט קריאה', 'משפט ציווי'], correctAnswer: 'משפט חיווי' },
  { subjectName: 'עברית', topic: 'סוגי משפטים', difficulty: 'easy', type: 'true_false', question: 'משפט מורכב מכיל לפחות שתי פסוקיות.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'סוגי משפטים', difficulty: 'easy', type: 'open', question: 'איזה סימן פיסוק מסיים משפט שאלה?', correctAnswer: '?' },
  { subjectName: 'עברית', topic: 'סוגי משפטים', difficulty: 'medium', type: 'multiple_choice', question: "'כאשר ירד גשם, נשארנו בבית' - זהו משפט מורכב עם פסוקית...", options: ['זמן', 'מטרה', 'תוצאה', 'ויתור'], correctAnswer: 'זמן' },
  { subjectName: 'עברית', topic: 'סוגי משפטים', difficulty: 'medium', type: 'true_false', question: 'משפט פשוט מכיל נושא ונשוא אחד בלבד (בלי פסוקית).', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'סוגי משפטים', difficulty: 'medium', type: 'open', question: 'איזה סימן פיסוק משמש למשפט קריאה (התרגשות)?', correctAnswer: '!' },
  { subjectName: 'עברית', topic: 'סוגי משפטים', difficulty: 'hard', type: 'multiple_choice', question: '\'הילדה שגרה לידינו טסה לחו"ל\' - מהי הפסוקית במשפט?', options: ['שגרה לידינו', 'הילדה טסה', 'לחו"ל', 'אין פסוקית'], correctAnswer: 'שגרה לידינו' },
  { subjectName: 'עברית', topic: 'סוגי משפטים', difficulty: 'hard', type: 'true_false', question: 'משפט ציווי משמש לבקש או להורות למישהו לעשות משהו.', correctAnswer: 'נכון' },

  // ===== עברית - שמות פועל ובניינים (כיתה ח') =====
  { subjectName: 'עברית', topic: 'שמות פועל ובניינים', difficulty: 'easy', type: 'multiple_choice', question: 'כמה בניינים יש בעברית?', options: ['שבעה', 'חמישה', 'עשרה', 'שלושה'], correctAnswer: 'שבעה' },
  { subjectName: 'עברית', topic: 'שמות פועל ובניינים', difficulty: 'easy', type: 'true_false', question: "בניין 'פיעל' הוא אחד משבעת הבניינים בעברית.", correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'שמות פועל ובניינים', difficulty: 'easy', type: 'open', question: "מהו שם הפועל (המקור) של 'כתב'?", correctAnswer: 'לכתוב' },
  { subjectName: 'עברית', topic: 'שמות פועל ובניינים', difficulty: 'medium', type: 'multiple_choice', question: "המילה 'התלבש' שייכת לאיזה בניין?", options: ['התפעל', 'קל', 'פיעל', 'הפעיל'], correctAnswer: 'התפעל' },
  { subjectName: 'עברית', topic: 'שמות פועל ובניינים', difficulty: 'medium', type: 'true_false', question: "בניין 'הפעיל' מבטא לרוב פעולה שגורמים למישהו אחר לעשות.", correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'שמות פועל ובניינים', difficulty: 'medium', type: 'open', question: "מהו השורש של המילה 'לשחק'?", correctAnswer: 'שחק' },
  { subjectName: 'עברית', topic: 'שמות פועל ובניינים', difficulty: 'hard', type: 'multiple_choice', question: "המילה 'נשבר' שייכת לאיזה בניין?", options: ['נפעל', 'קל', 'פועל', 'הופעל'], correctAnswer: 'נפעל' },
  { subjectName: 'עברית', topic: 'שמות פועל ובניינים', difficulty: 'hard', type: 'open', question: "מהו שם הפועל של 'רץ' (מהשורש רו\"ץ)?", correctAnswer: 'לרוץ' },

  // ===== עברית - כתיבת חיבור טיעוני (כיתה ט') =====
  { subjectName: 'עברית', topic: 'כתיבת חיבור טיעוני', difficulty: 'easy', type: 'multiple_choice', question: 'מהו החלק הראשון במבנה חיבור טיעוני?', options: ['פתיחה המציגה את הנושא והעמדה', 'סיכום', 'דוגמה אישית', 'ציטוט בלבד'], correctAnswer: 'פתיחה המציגה את הנושא והעמדה' },
  { subjectName: 'עברית', topic: 'כתיבת חיבור טיעוני', difficulty: 'easy', type: 'true_false', question: 'בחיבור טיעוני צריך להציג עמדה ברורה ולתמוך אותה בנימוקים.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'כתיבת חיבור טיעוני', difficulty: 'easy', type: 'open', question: 'איך נקרא הנימוק שתומך בעמדה שלך בחיבור?', correctAnswer: 'טיעון' },
  { subjectName: 'עברית', topic: 'כתיבת חיבור טיעוני', difficulty: 'medium', type: 'multiple_choice', question: 'מהי הדרך הנכונה להתמודד עם עמדה מנוגדת בחיבור טיעוני?', options: ['להציג אותה ולהסביר למה העמדה שלך חזקה יותר', 'להתעלם ממנה לגמרי', 'לכתוב שהיא טיפשית', 'לא לציין עמדות אחרות בכלל'], correctAnswer: 'להציג אותה ולהסביר למה העמדה שלך חזקה יותר' },
  { subjectName: 'עברית', topic: 'כתיבת חיבור טיעוני', difficulty: 'medium', type: 'true_false', question: 'פסקת הסיכום בחיבור טיעוני חוזרת על העמדה המרכזית ומחזקת אותה.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'כתיבת חיבור טיעוני', difficulty: 'medium', type: 'open', question: 'כיצד נקראת הפסקה הראשונה בחיבור, שבה מוצג הנושא?', correctAnswer: 'פתיחה' },
  { subjectName: 'עברית', topic: 'כתיבת חיבור טיעוני', difficulty: 'hard', type: 'multiple_choice', question: "מה תפקידן של מילות קישור (כגון 'לכן', 'אולם', 'בנוסף') בחיבור טיעוני?", options: ['לחבר בין רעיונות וליצור זרימה הגיונית', 'לקשט את הטקסט בלבד', 'להאריך את החיבור', 'אין להן תפקיד מיוחד'], correctAnswer: 'לחבר בין רעיונות וליצור זרימה הגיונית' },
  { subjectName: 'עברית', topic: 'כתיבת חיבור טיעוני', difficulty: 'hard', type: 'true_false', question: 'אפשר לכתוב חיבור טיעוני טוב גם בלי לתמוך את העמדה בנימוקים או דוגמאות.', correctAnswer: 'לא נכון' },

  // ===== עברית - ניתוח שיר (כיתה ט') =====
  { subjectName: 'עברית', topic: 'ניתוח שיר', difficulty: 'easy', type: 'multiple_choice', question: "מהי 'מטאפורה'?", options: ['השוואה סמויה בין שני דברים בלי מילת השוואה', 'חריזה בסוף שורות', 'כותרת השיר', 'מספר הבתים בשיר'], correctAnswer: 'השוואה סמויה בין שני דברים בלי מילת השוואה' },
  { subjectName: 'עברית', topic: 'ניתוח שיר', difficulty: 'easy', type: 'true_false', question: 'חריזה היא דמיון צלילי בין סופי שורות בשיר.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'ניתוח שיר', difficulty: 'easy', type: 'open', question: 'איך נקרא הרעיון או התחושה המרכזית שהשיר מנסה להעביר?', correctAnswer: 'מסר' },
  { subjectName: 'עברית', topic: 'ניתוח שיר', difficulty: 'medium', type: 'multiple_choice', question: "'הרוח בכתה בלילה' - זוהי דוגמה ל...", options: ['האנשה', 'חריזה', 'קצב', 'בית'], correctAnswer: 'האנשה' },
  { subjectName: 'עברית', topic: 'ניתוח שיר', difficulty: 'medium', type: 'true_false', question: "'דימוי' הוא השוואה בין שני דברים תוך שימוש במילת השוואה כמו 'כמו' או 'כ-'.", correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'ניתוח שיר', difficulty: 'medium', type: 'open', question: "איך נקרא חלק בשיר המקביל ל'פסקה' בטקסט רגיל?", correctAnswer: 'בית' },
  { subjectName: 'עברית', topic: 'ניתוח שיר', difficulty: 'hard', type: 'multiple_choice', question: 'מה חשוב לבדוק כשמנתחים שיר?', options: ['נושא, מבנה, אמצעים אמנותיים ומסר', 'רק את מספר המילים', 'רק את שם המשורר', 'רק את שנת הכתיבה'], correctAnswer: 'נושא, מבנה, אמצעים אמנותיים ומסר' },
  { subjectName: 'עברית', topic: 'ניתוח שיר', difficulty: 'hard', type: 'true_false', question: 'לשיר יכול להיות יותר ממסר אחד, בהתאם לפרשנות הקורא.', correctAnswer: 'נכון' },

  // ===== עברית - תחביר: ניתוח משפטים מורכבים (כיתה י') =====
  { subjectName: 'עברית', topic: 'תחביר - ניתוח משפטים מורכבים', difficulty: 'easy', type: 'true_false', question: "פסוקית זיקה מתחילה בדרך כלל במילה 'ש' או 'אשר'.", correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'תחביר - ניתוח משפטים מורכבים', difficulty: 'easy', type: 'multiple_choice', question: "'הספר שקראתי היה מעניין' - מהי הפסוקית?", options: ['שקראתי', 'הספר היה מעניין', 'היה מעניין', 'אין פסוקית'], correctAnswer: 'שקראתי' },
  { subjectName: 'עברית', topic: 'תחביר - ניתוח משפטים מורכבים', difficulty: 'easy', type: 'open', question: "איך נקראת הפסוקית המשלימה את הפועל ועונה על השאלה 'מה?' או 'את מי?'", correctAnswer: 'פסוקית מושא' },
  { subjectName: 'עברית', topic: 'תחביר - ניתוח משפטים מורכבים', difficulty: 'medium', type: 'multiple_choice', question: "'כיוון שהיה עייף, הוא הלך לישון' - זוהי פסוקית...", options: ['סיבה', 'תוצאה', 'תנאי', 'זמן'], correctAnswer: 'סיבה' },
  { subjectName: 'עברית', topic: 'תחביר - ניתוח משפטים מורכבים', difficulty: 'medium', type: 'true_false', question: 'פסוקית לוואי מתארת שם עצם במשפט העיקרי, בדומה לתואר.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'תחביר - ניתוח משפטים מורכבים', difficulty: 'medium', type: 'open', question: 'מהי הפסוקית שיכולה לעמוד לבד כמשפט שלם?', correctAnswer: 'פסוקית עיקרית' },
  { subjectName: 'עברית', topic: 'תחביר - ניתוח משפטים מורכבים', difficulty: 'hard', type: 'multiple_choice', question: "'אם ירד גשם, נישאר בבית' - זוהי פסוקית...", options: ['תנאי', 'ויתור', 'מטרה', 'תוצאה'], correctAnswer: 'תנאי' },
  { subjectName: 'עברית', topic: 'תחביר - ניתוח משפטים מורכבים', difficulty: 'hard', type: 'true_false', question: 'משפט יכול להכיל יותר מפסוקית אחת.', correctAnswer: 'נכון' },

  // ===== עברית - הרחבת אוצר מילים: גזירה ותורת הצורות (כיתה י') =====
  { subjectName: 'עברית', topic: 'הרחבת אוצר מילים - גזירה ותורת הצורות', difficulty: 'easy', type: 'multiple_choice', question: "מהי 'גזירה' בעברית?", options: ['יצירת מילה חדשה משורש קיים', 'תרגום מילה משפה זרה', 'שינוי הניקוד בלבד', 'הוספת פיסוק'], correctAnswer: 'יצירת מילה חדשה משורש קיים' },
  { subjectName: 'עברית', topic: 'הרחבת אוצר מילים - גזירה ותורת הצורות', difficulty: 'easy', type: 'true_false', question: "מילים כמו 'טלפון' ו'אינטרנט' הן מילים שאולות משפות זרות.", correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'הרחבת אוצר מילים - גזירה ותורת הצורות', difficulty: 'easy', type: 'open', question: "מהו השורש המשותף למילים 'כתיבה', 'מכתב' ו'כתב'?", correctAnswer: 'כתב' },
  { subjectName: 'עברית', topic: 'הרחבת אוצר מילים - גזירה ותורת הצורות', difficulty: 'medium', type: 'multiple_choice', question: "'הצטרפות' (שרשור) היא תהליך שבו...", options: ['שתי מילים מתחברות למילה אחת חדשה', 'מילה משנה את הניקוד שלה', 'מילה מתורגמת משפה זרה', 'אות נעלמת מהמילה'], correctAnswer: 'שתי מילים מתחברות למילה אחת חדשה' },
  { subjectName: 'עברית', topic: 'הרחבת אוצר מילים - גזירה ותורת הצורות', difficulty: 'medium', type: 'true_false', question: 'משקל המילה קובע לרוב את המשמעות הכללית שלה (למשל שם פעולה, שם כלי וכו׳).', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'הרחבת אוצר מילים - גזירה ותורת הצורות', difficulty: 'medium', type: 'open', question: 'איך נקרא תהליך שבו מילה מגיעה משפה זרה ונקלטת בעברית כמעט כפי שהיא?', correctAnswer: 'שאילה' },
  { subjectName: 'עברית', topic: 'הרחבת אוצר מילים - גזירה ותורת הצורות', difficulty: 'hard', type: 'multiple_choice', question: "'מכתבה' היא שם כלי שנוצר מהשורש...", options: ['כתב', 'מכתב', 'תוכן', 'ספר'], correctAnswer: 'כתב' },
  { subjectName: 'עברית', topic: 'הרחבת אוצר מילים - גזירה ותורת הצורות', difficulty: 'hard', type: 'true_false', question: 'לכל מילה בעברית יש בהכרח שורש בן שלוש אותיות בלבד.', correctAnswer: 'לא נכון' },

  // ===== עברית - תחביר מתקדם: סוגי פסוקיות (כיתה י"א) =====
  { subjectName: 'עברית', topic: 'תחביר מתקדם - סוגי פסוקיות', difficulty: 'easy', type: 'multiple_choice', question: "'למרות שירד גשם, יצאנו לטייל' - זוהי פסוקית...", options: ['ויתור', 'תנאי', 'סיבה', 'זמן'], correctAnswer: 'ויתור' },
  { subjectName: 'עברית', topic: 'תחביר מתקדם - סוגי פסוקיות', difficulty: 'easy', type: 'true_false', question: 'פסוקית תוצאה מסבירה מה קרה בעקבות דבר-מה שנאמר במשפט העיקרי.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'תחביר מתקדם - סוגי פסוקיות', difficulty: 'easy', type: 'open', question: 'איזו מילת חיבור פותחת בדרך כלל פסוקית תנאי?', correctAnswer: 'אם' },
  { subjectName: 'עברית', topic: 'תחביר מתקדם - סוגי פסוקיות', difficulty: 'medium', type: 'multiple_choice', question: "'עבד קשה כל כך, עד שהצליח' - זוהי פסוקית...", options: ['תוצאה', 'סיבה', 'תנאי', 'ויתור'], correctAnswer: 'תוצאה' },
  { subjectName: 'עברית', topic: 'תחביר מתקדם - סוגי פסוקיות', difficulty: 'medium', type: 'true_false', question: 'משפט יכול לכלול כמה סוגי פסוקיות בו-זמנית.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'תחביר מתקדם - סוגי פסוקיות', difficulty: 'medium', type: 'multiple_choice', question: 'איזו מהמילים הבאות פותחת פסוקית ויתור?', options: ['למרות ש', 'כיוון ש', 'כדי ש', 'אם'], correctAnswer: 'למרות ש' },
  { subjectName: 'עברית', topic: 'תחביר מתקדם - סוגי פסוקיות', difficulty: 'hard', type: 'multiple_choice', question: "'כדי שנצליח, עלינו להתאמן' - זוהי פסוקית...", options: ['מטרה', 'תוצאה', 'תנאי', 'זמן'], correctAnswer: 'מטרה' },
  { subjectName: 'עברית', topic: 'תחביר מתקדם - סוגי פסוקיות', difficulty: 'hard', type: 'true_false', question: 'ניתן לזהות סוג פסוקית לפי מילת החיבור שפותחת אותה, ולפי המשמעות במשפט.', correctAnswer: 'נכון' },

  // ===== עברית - הבעה בכתב: כתיבת תלקיט ומאמר (כיתה י"א) =====
  { subjectName: 'עברית', topic: 'הבעה בכתב - כתיבת תלקיט ומאמר', difficulty: 'easy', type: 'multiple_choice', question: "מהו 'תלקיט' (בהקשר של הבעה בכתב)?", options: ['תיק עבודות הכולל טיוטות ומוצר כתיבה סופי', 'סוג של שיר', 'מבחן בעל פה', 'ציון בגרות'], correctAnswer: 'תיק עבודות הכולל טיוטות ומוצר כתיבה סופי' },
  { subjectName: 'עברית', topic: 'הבעה בכתב - כתיבת תלקיט ומאמר', difficulty: 'easy', type: 'true_false', question: 'תהליך כתיבה כולל בדרך כלל טיוטה ראשונה, משוב, ותיקון.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'הבעה בכתב - כתיבת תלקיט ומאמר', difficulty: 'easy', type: 'open', question: 'איך נקראת הפעולה שבה קוראים טקסט של מישהו אחר ונותנים הערות לשיפור?', correctAnswer: 'משוב' },
  { subjectName: 'עברית', topic: 'הבעה בכתב - כתיבת תלקיט ומאמר', difficulty: 'medium', type: 'multiple_choice', question: "מהי 'שילוב מקורות' בכתיבת מאמר?", options: ['שימוש במידע ובציטוטים ממקורות חיצוניים באופן מוסמך', 'העתקה מדויקת בלי ציון המקור', 'כתיבה מהזיכרון בלבד', 'ציור בתוך הטקסט'], correctAnswer: 'שימוש במידע ובציטוטים ממקורות חיצוניים באופן מוסמך' },
  { subjectName: 'עברית', topic: 'הבעה בכתב - כתיבת תלקיט ומאמר', difficulty: 'medium', type: 'true_false', question: 'יש לציין תמיד את מקור הציטוט או המידע שמשלבים במאמר.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'הבעה בכתב - כתיבת תלקיט ומאמר', difficulty: 'medium', type: 'open', question: 'איך נקראת הטיוטה הראשונה שכותבים לפני התיקון הסופי?', correctAnswer: 'טיוטה' },
  { subjectName: 'עברית', topic: 'הבעה בכתב - כתיבת תלקיט ומאמר', difficulty: 'hard', type: 'multiple_choice', question: "מה מטרת ה'כתיבה הממזגת' (המוזכרת בתוכנית הלימודים)?", options: ['לשלב יחד מיומנויות הבנה, הבעה ולשון בטקסט אחד', 'לכתוב רק סיפורים בדיוניים', 'להעתיק טקסטים קיימים', 'לכתוב בלי מבנה מוגדר'], correctAnswer: 'לשלב יחד מיומנויות הבנה, הבעה ולשון בטקסט אחד' },
  { subjectName: 'עברית', topic: 'הבעה בכתב - כתיבת תלקיט ומאמר', difficulty: 'hard', type: 'true_false', question: 'אפשר להגיש תלקיט בלי לעבור תהליך של טיוטה ומשוב.', correctAnswer: 'לא נכון' },

  // ===== עברית - תקינות לשונית לבגרות (כיתה י"ב) =====
  { subjectName: 'עברית', topic: 'תקינות לשונית לבגרות', difficulty: 'easy', type: 'multiple_choice', question: "מהי 'תקינות לשונית'?", options: ['כתיבה נכונה לפי כללי הדקדוק והתחביר המקובלים', 'כתיבה יצירתית וחופשית', 'כתיבה בשפה מדוברת בלבד', 'שימוש בסלנג'], correctAnswer: 'כתיבה נכונה לפי כללי הדקדוק והתחביר המקובלים' },
  { subjectName: 'עברית', topic: 'תקינות לשונית לבגרות', difficulty: 'easy', type: 'true_false', question: 'פסיק משמש להפריד בין חלקים במשפט ולהקל על הקריאה.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'תקינות לשונית לבגרות', difficulty: 'easy', type: 'open', question: 'איזה סימן פיסוק מציין ציטוט ישיר של דברי מישהו?', correctAnswer: 'מרכאות' },
  { subjectName: 'עברית', topic: 'תקינות לשונית לבגרות', difficulty: 'medium', type: 'multiple_choice', question: 'מהי טעות תקינות נפוצה שכדאי להימנע ממנה בכתיבה לבגרות?', options: ['ערבוב בין לשון זכר ולשון נקבה', 'שימוש נכון בסימני פיסוק', 'כתיבת משפטים ברורים', 'חלוקה לפסקאות'], correctAnswer: 'ערבוב בין לשון זכר ולשון נקבה' },
  { subjectName: 'עברית', topic: 'תקינות לשונית לבגרות', difficulty: 'medium', type: 'true_false', question: 'יש להקפיד על התאמה בין מספר (יחיד/רבים) של הנושא לנשוא במשפט.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'תקינות לשונית לבגרות', difficulty: 'medium', type: 'open', question: 'איזה סימן פיסוק מסיים משפט חיווי רגיל?', correctAnswer: 'נקודה' },
  { subjectName: 'עברית', topic: 'תקינות לשונית לבגרות', difficulty: 'hard', type: 'multiple_choice', question: "מהי הבעיה במשפט: 'הילדים הלכה הביתה'?", options: ['אין התאמה בין נושא ברבים לנשוא ביחיד', 'חסר פיסוק', 'המשפט ארוך מדי', 'אין בעיה'], correctAnswer: 'אין התאמה בין נושא ברבים לנשוא ביחיד' },
  { subjectName: 'עברית', topic: 'תקינות לשונית לבגרות', difficulty: 'hard', type: 'true_false', question: "ניקוד שגוי יכול לשנות את משמעות המילה.", correctAnswer: 'נכון' },

  // ===== עברית - הבנה והבעה למבחן הבגרות (כיתה י"ב) =====
  { subjectName: 'עברית', topic: 'הבנה והבעה למבחן הבגרות', difficulty: 'easy', type: 'multiple_choice', question: "מהו 'טקסט עיוני'?", options: ['טקסט מידעי שמטרתו להסביר או לשכנע', 'שיר', 'סיפור בדיוני', 'מכתב אישי'], correctAnswer: 'טקסט מידעי שמטרתו להסביר או לשכנע' },
  { subjectName: 'עברית', topic: 'הבנה והבעה למבחן הבגרות', difficulty: 'easy', type: 'true_false', question: 'בכתיבת חיבור מנומק יש לתמוך את העמדה בנימוקים ובדוגמאות.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'הבנה והבעה למבחן הבגרות', difficulty: 'easy', type: 'open', question: 'איך נקרא הרעיון העיקרי שכותב הטקסט רוצה להעביר לקורא?', correctAnswer: 'מסר' },
  { subjectName: 'עברית', topic: 'הבנה והבעה למבחן הבגרות', difficulty: 'medium', type: 'multiple_choice', question: 'מה חשוב לזהות בטקסט עיוני לפני שעונים על שאלות הבנה?', options: ['הנושא, המבנה ועמדת הכותב', 'רק את אורך הטקסט', 'רק את שם הכותב', 'רק את תאריך הפרסום'], correctAnswer: 'הנושא, המבנה ועמדת הכותב' },
  { subjectName: 'עברית', topic: 'הבנה והבעה למבחן הבגרות', difficulty: 'medium', type: 'true_false', question: 'אפשר לבסס תשובה בשאלת הבנה על ציטוט מהטקסט עצמו.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'הבנה והבעה למבחן הבגרות', difficulty: 'medium', type: 'open', question: "כאשר שואלים 'מהי עמדת הכותב', צריך לענות לפי דעתו של מי?", correctAnswer: 'הכותב' },
  { subjectName: 'עברית', topic: 'הבנה והבעה למבחן הבגרות', difficulty: 'hard', type: 'multiple_choice', question: 'מה ההבדל בין טקסט טיעוני לטקסט תיאורי?', options: ['טקסט טיעוני משכנע בעמדה, טקסט תיאורי מתאר מצב או דבר', 'אין הבדל', 'טקסט תיאורי תמיד ארוך יותר', 'טקסט טיעוני הוא תמיד שיר'], correctAnswer: 'טקסט טיעוני משכנע בעמדה, טקסט תיאורי מתאר מצב או דבר' },
  { subjectName: 'עברית', topic: 'הבנה והבעה למבחן הבגרות', difficulty: 'hard', type: 'true_false', question: 'בכתיבת חיבור למבחן הבגרות, מומלץ לתכנן את המבנה לפני הכתיבה.', correctAnswer: 'נכון' },

  // ===== ספרות - ניתוח סיפור קצר - מבוא (כיתה ז') =====
  { subjectName: 'ספרות', topic: 'ניתוח סיפור קצר - מבוא', difficulty: 'easy', type: 'multiple_choice', question: "מהי 'עלילה' בסיפור?", options: ['רצף האירועים המתרחשים בסיפור', 'תיאור המקום בלבד', 'רשימת הדמויות', 'שם הסיפור'], correctAnswer: 'רצף האירועים המתרחשים בסיפור' },
  { subjectName: 'ספרות', topic: 'ניתוח סיפור קצר - מבוא', difficulty: 'easy', type: 'true_false', question: 'בכל סיפור יש לפחות דמות אחת.', correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'ניתוח סיפור קצר - מבוא', difficulty: 'easy', type: 'open', question: 'איך נקראת הדמות המרכזית שהעלילה סובבת סביבה?', correctAnswer: 'גיבור' },
  { subjectName: 'ספרות', topic: 'ניתוח סיפור קצר - מבוא', difficulty: 'medium', type: 'multiple_choice', question: "מהו 'קונפליקט' בסיפור?", options: ['התנגשות או בעיה מרכזית שהדמות מתמודדת איתה', 'סוף הסיפור', 'תיאור הנוף', 'שם המחבר'], correctAnswer: 'התנגשות או בעיה מרכזית שהדמות מתמודדת איתה' },
  { subjectName: 'ספרות', topic: 'ניתוח סיפור קצר - מבוא', difficulty: 'medium', type: 'true_false', question: "מספר 'יודע-כל' מכיר את מחשבותיהן ורגשותיהן של כל הדמויות בסיפור.", correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'ניתוח סיפור קצר - מבוא', difficulty: 'medium', type: 'open', question: 'איך נקראת נקודת השיא שבה הקונפליקט מגיע לשיאו?', correctAnswer: 'שיא' },
  { subjectName: 'ספרות', topic: 'ניתוח סיפור קצר - מבוא', difficulty: 'hard', type: 'multiple_choice', question: 'מה ההבדל בין מספר יודע-כל למספר מוגבל?', options: ['מספר מוגבל מכיר רק את נקודת המבט של דמות אחת (או מעטות)', 'אין הבדל ביניהם', 'מספר יודע-כל הוא תמיד דמות בסיפור', 'מספר מוגבל תמיד כותב בגוף ראשון'], correctAnswer: 'מספר מוגבל מכיר רק את נקודת המבט של דמות אחת (או מעטות)' },
  { subjectName: 'ספרות', topic: 'ניתוח סיפור קצר - מבוא', difficulty: 'hard', type: 'true_false', question: 'סוף פתוח הוא סוף שבו כל השאלות בעלילה נפתרות באופן חד-משמעי.', correctAnswer: 'לא נכון' },

  // ===== ספרות - יסודות השירה - משקל וחריזה (כיתה ח') =====
  { subjectName: 'ספרות', topic: 'יסודות השירה - משקל וחריזה', difficulty: 'easy', type: 'multiple_choice', question: 'מהי חריזה בשיר?', options: ['דמיון צלילי בין סופי שורות (או מילים)', 'מספר השורות בשיר', 'שם השיר', 'הנושא של השיר'], correctAnswer: 'דמיון צלילי בין סופי שורות (או מילים)' },
  { subjectName: 'ספרות', topic: 'יסודות השירה - משקל וחריזה', difficulty: 'easy', type: 'true_false', question: "שורה בודדת בשיר נקראת 'טור'.", correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'יסודות השירה - משקל וחריזה', difficulty: 'easy', type: 'open', question: 'איך נקראת קבוצת שורות המהוות יחידה בתוך השיר?', correctAnswer: 'בית' },
  { subjectName: 'ספרות', topic: 'יסודות השירה - משקל וחריזה', difficulty: 'medium', type: 'multiple_choice', question: "מהי 'חריזה צולבת'?", options: ['תבנית חריזה מהסוג א-ב-א-ב', 'חריזה שבה כל השורות מתחרזות זו עם זו', 'שיר בלי חריזה כלל', 'חריזה רק בתחילת השורה'], correctAnswer: 'תבנית חריזה מהסוג א-ב-א-ב' },
  { subjectName: 'ספרות', topic: 'יסודות השירה - משקל וחריזה', difficulty: 'medium', type: 'true_false', question: 'משקל בשיר קשור למספר ההברות והדגשים בכל שורה.', correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'יסודות השירה - משקל וחריזה', difficulty: 'medium', type: 'open', question: "איך נקרא שיר שאין בו חריזה וגם לא משקל קבוע?", correctAnswer: 'שיר חופשי' },
  { subjectName: 'ספרות', topic: 'יסודות השירה - משקל וחריזה', difficulty: 'hard', type: 'multiple_choice', question: "בתבנית חריזה 'א-א-ב-ב', אילו שורות מתחרזות זו עם זו?", options: ['השורה הראשונה עם השנייה, והשלישית עם הרביעית', 'כל השורות מתחרזות זו עם זו', 'הראשונה עם השלישית בלבד', 'אין חריזה בתבנית זו'], correctAnswer: 'השורה הראשונה עם השנייה, והשלישית עם הרביעית' },
  { subjectName: 'ספרות', topic: 'יסודות השירה - משקל וחריזה', difficulty: 'hard', type: 'true_false', question: 'לכל שיר חייב להיות משקל וחריזה קבועים.', correctAnswer: 'לא נכון' },

  // ===== ספרות - מבוא לניתוח מחזה (דרמה) (כיתה ט') =====
  { subjectName: 'ספרות', topic: 'מבוא לניתוח מחזה (דרמה)', difficulty: 'easy', type: 'multiple_choice', question: 'מהו דיאלוג במחזה?', options: ['שיחה בין שתי דמויות או יותר', 'תיאור הבמה', 'הערת הבמאי', 'שם המחזאי'], correctAnswer: 'שיחה בין שתי דמויות או יותר' },
  { subjectName: 'ספרות', topic: 'מבוא לניתוח מחזה (דרמה)', difficulty: 'easy', type: 'true_false', question: 'מחזה נועד בעיקרו להיות מוצג על במה לפני קהל.', correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'מבוא לניתוח מחזה (דרמה)', difficulty: 'easy', type: 'open', question: "איך נקרא הטקסט שבו דמות מדברת לבדה (עם עצמה או עם הקהל)?", correctAnswer: 'מונולוג' },
  { subjectName: 'ספרות', topic: 'מבוא לניתוח מחזה (דרמה)', difficulty: 'medium', type: 'multiple_choice', question: "מה תפקידן של 'הוראות הבמה' במחזה?", options: ['להנחות כיצד לבצע את התפאורה, התנועה וההבעה על הבמה', 'להוסיף חריזה לטקסט', 'לספר את הסוף מראש', 'להחליף את הדיאלוג'], correctAnswer: 'להנחות כיצד לבצע את התפאורה, התנועה וההבעה על הבמה' },
  { subjectName: 'ספרות', topic: 'מבוא לניתוח מחזה (דרמה)', difficulty: 'medium', type: 'true_false', question: 'מחזה בדרך כלל מחולק למערכות ולתמונות.', correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'מבוא לניתוח מחזה (דרמה)', difficulty: 'medium', type: 'open', question: 'איך נקראת ההתנגשות המרכזית שמניעה את עלילת המחזה?', correctAnswer: 'קונפליקט דרמטי' },
  { subjectName: 'ספרות', topic: 'מבוא לניתוח מחזה (דרמה)', difficulty: 'hard', type: 'multiple_choice', question: 'מה ההבדל בין דיאלוג למונולוג?', options: ['דיאלוג הוא שיחה בין דמויות, מונולוג הוא דיבור של דמות אחת', 'אין הבדל ביניהם', 'מונולוג הוא תמיד קצר יותר מדיאלוג', 'דיאלוג מופיע רק בסוף המחזה'], correctAnswer: 'דיאלוג הוא שיחה בין דמויות, מונולוג הוא דיבור של דמות אחת' },
  { subjectName: 'ספרות', topic: 'מבוא לניתוח מחזה (דרמה)', difficulty: 'hard', type: 'true_false', question: 'הוראות הבמה מיועדות להיאמר בקול על ידי השחקנים בהצגה.', correctAnswer: 'לא נכון' },

  // ===== ספרות - שירת ימי הביניים העברית (כיתה י') =====
  { subjectName: 'ספרות', topic: 'שירת ימי הביניים העברית', difficulty: 'easy', type: 'multiple_choice', question: "מהו 'פיוט'?", options: ['שיר דתי המיועד לתפילה או לטקס', 'סיפור קצר חילוני', 'מחזה עממי', 'מאמר עיתונאי'], correctAnswer: 'שיר דתי המיועד לתפילה או לטקס' },
  { subjectName: 'ספרות', topic: 'שירת ימי הביניים העברית', difficulty: 'easy', type: 'true_false', question: 'שירת ימי הביניים העברית פרחה בעיקר בספרד תחת השלטון המוסלמי.', correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'שירת ימי הביניים העברית', difficulty: 'easy', type: 'open', question: 'מי מהמשוררים הבאים ידוע בזכות פיוטי הגעגוע לציון שכתב? (שם משפחה)', correctAnswer: 'הלוי' },
  { subjectName: 'ספרות', topic: 'שירת ימי הביניים העברית', difficulty: 'medium', type: 'multiple_choice', question: "שירת ימי הביניים מחולקת בדרך כלל לשני סוגים עיקריים:", options: ['שירת קודש ושירת חול', 'שירה חופשית ושירה כתובה', 'שירה עצובה ושירה שמחה', 'שירה קצרה ושירה ארוכה'], correctAnswer: 'שירת קודש ושירת חול' },
  { subjectName: 'ספרות', topic: 'שירת ימי הביניים העברית', difficulty: 'medium', type: 'true_false', question: 'שירת החול עסקה בנושאים כמו אהבה, ידידות ויין, ולא רק בנושאים דתיים.', correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'שירת ימי הביניים העברית', difficulty: 'medium', type: 'open', question: 'מאיזו תרבות שכנה הושפעו משוררי ספרד בימי הביניים במשקל ובצורות השיר?', correctAnswer: 'הערבית' },
  { subjectName: 'ספרות', topic: 'שירת ימי הביניים העברית', difficulty: 'hard', type: 'multiple_choice', question: "יהודה הלוי נודע במיוחד בזכות שירי געגוע לאן?", options: ['ציון וארץ ישראל', 'רומא', 'בבל', 'מצרים'], correctAnswer: 'ציון וארץ ישראל' },
  { subjectName: 'ספרות', topic: 'שירת ימי הביניים העברית', difficulty: 'hard', type: 'true_false', question: 'משוררי ימי הביניים בספרד כתבו אך ורק בעברית ולא הכירו כלל שירה ערבית.', correctAnswer: 'לא נכון' },

  // ===== ספרות - שירה עברית מודרנית (כיתה י"א) =====
  { subjectName: 'ספרות', topic: 'שירה עברית מודרנית', difficulty: 'easy', type: 'multiple_choice', question: "מי מבין המשוררים הבאים נחשב ל'משורר הלאומי' בתקופת התחייה?", options: ['חיים נחמן ביאליק', 'יהודה הלוי', 'שאול טשרניחובסקי בלבד', 'רבי יהודה אלחריזי'], correctAnswer: 'חיים נחמן ביאליק' },
  { subjectName: 'ספרות', topic: 'שירה עברית מודרנית', difficulty: 'easy', type: 'true_false', question: 'שירה עברית מודרנית נכתבה במסגרת תחיית השפה העברית כשפה מדוברת וכתובה.', correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'שירה עברית מודרנית', difficulty: 'easy', type: 'open', question: 'מי כתבה שירים אישיים וכמיהה, ונחשבת למשוררת מרכזית בעלייה השלישית? (שם פרטי)', correctAnswer: 'רחל' },
  { subjectName: 'ספרות', topic: 'שירה עברית מודרנית', difficulty: 'medium', type: 'multiple_choice', question: 'אילו נושאים מרכזיים אופייניים לשירה העברית של המאה ה-20?', options: ['הזהות הלאומית, המלחמה, והחיים בארץ ישראל', 'רק אהבה ורומנטיקה', 'רק טבע וחקלאות', 'רק תיאורי בעלי חיים'], correctAnswer: 'הזהות הלאומית, המלחמה, והחיים בארץ ישראל' },
  { subjectName: 'ספרות', topic: 'שירה עברית מודרנית', difficulty: 'medium', type: 'true_false', question: 'יהודה עמיחי נחשב לאחד המשוררים העבריים המרכזיים של המאה ה-20, וכתב בשפה יומיומית ופשוטה יחסית.', correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'שירה עברית מודרנית', difficulty: 'medium', type: 'open', question: 'איך נקראת התנועה שבמסגרתה הפכה העברית לשפה מדוברת מחדש בארץ ישראל?', correctAnswer: 'תחיית השפה העברית' },
  { subjectName: 'ספרות', topic: 'שירה עברית מודרנית', difficulty: 'hard', type: 'multiple_choice', question: 'מה מייחד את שירתו של יהודה עמיחי בהשוואה לשירה העברית הקלאסית?', options: ['שימוש בשפה יומיומית ובדימויים מהחיים המודרניים', 'כתיבה במשקל המקראי הקלאסי בלבד', 'הימנעות מוחלטת מנושאים אישיים', 'כתיבה בערבית'], correctAnswer: 'שימוש בשפה יומיומית ובדימויים מהחיים המודרניים' },
  { subjectName: 'ספרות', topic: 'שירה עברית מודרנית', difficulty: 'hard', type: 'true_false', question: 'כל המשוררים העבריים במאה ה-20 כתבו אך ורק שירה לאומית וללא שירה אישית.', correctAnswer: 'לא נכון' },

  // ===== ספרות - פרוזה וסיפורת (כיתה י"ב) =====
  { subjectName: 'ספרות', topic: 'פרוזה וסיפורת', difficulty: 'easy', type: 'multiple_choice', question: "מהי 'נקודת תצפית' (זוית ראייה) בסיפור?", options: ['העמדה שממנה מסופר הסיפור ונתפסים האירועים', 'המקום שבו מתרחש הסיפור', 'שם הספר', 'אורך היצירה'], correctAnswer: 'העמדה שממנה מסופר הסיפור ונתפסים האירועים' },
  { subjectName: 'ספרות', topic: 'פרוזה וסיפורת', difficulty: 'easy', type: 'true_false', question: "סיפור יכול להיות מסופר בגוף ראשון או בגוף שלישי.", correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'פרוזה וסיפורת', difficulty: 'easy', type: 'open', question: "איך נקראת חזרה בסיפור אל אירועים שקרו לפני נקודת ההתחלה של העלילה?", correctAnswer: 'רטרוספקציה' },
  { subjectName: 'ספרות', topic: 'פרוזה וסיפורת', difficulty: 'medium', type: 'multiple_choice', question: "מהו 'מספר לא מהימן'?", options: ['מספר שהקורא לומד שאין לסמוך לגמרי על גרסתו לאירועים', 'מספר שיודע הכל על כל הדמויות', 'מספר שמדבר בגוף שני', 'מספר שאינו מופיע ביצירה'], correctAnswer: 'מספר שהקורא לומד שאין לסמוך לגמרי על גרסתו לאירועים' },
  { subjectName: 'ספרות', topic: 'פרוזה וסיפורת', difficulty: 'medium', type: 'true_false', question: 'שימוש ברטרוספקציה יכול לשנות את הבנת הקורא את מניעי הדמויות.', correctAnswer: 'נכון' },
  { subjectName: 'ספרות', topic: 'פרוזה וסיפורת', difficulty: 'medium', type: 'open', question: 'איך נקרא סדר האירועים כפי שהם מוצגים בפועל בטקסט (לא בהכרח כרונולוגי)?', correctAnswer: 'מבנה העלילה' },
  { subjectName: 'ספרות', topic: 'פרוזה וסיפורת', difficulty: 'hard', type: 'multiple_choice', question: 'מדוע סופר עשוי לבחור לספר סיפור מנקודת תצפית של מספר מוגבל דווקא?', options: ['כדי ליצור מתח, הזדהות או הגבלה מכוונת של המידע הנחשף לקורא', 'כי אין לו ברירה אחרת', 'כדי להאריך את הטקסט', 'כדי להימנע משימוש בדיאלוג'], correctAnswer: 'כדי ליצור מתח, הזדהות או הגבלה מכוונת של המידע הנחשף לקורא' },
  { subjectName: 'ספרות', topic: 'פרוזה וסיפורת', difficulty: 'hard', type: 'true_false', question: 'רטרוספקציה ומבנה עלילתי לא-כרונולוגי הם כלים ספרותיים שמעולם לא משמשים בסיפורת מודרנית.', correctAnswer: 'לא נכון' },
  // ===== ביולוגיה - גוף האדם - מערכות ותפקוד (כיתה י') =====
  { subjectName: 'ביולוגיה', topic: 'גוף האדם - מערכות ותפקוד', difficulty: 'easy', type: 'multiple_choice', question: 'מהו תפקידה העיקרי של מערכת העיכול?', options: ['פירוק המזון וספיגת חומרי הזנה', 'הובלת חמצן לתאים', 'ויסות טמפרטורת הגוף', 'ייצור תאי דם'], correctAnswer: 'פירוק המזון וספיגת חומרי הזנה' },
  { subjectName: 'ביולוגיה', topic: 'גוף האדם - מערכות ותפקוד', difficulty: 'easy', type: 'true_false', question: 'הריאות הן האיבר המרכזי במערכת הנשימה.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'גוף האדם - מערכות ותפקוד', difficulty: 'easy', type: 'open', question: 'מהו האיבר המרכזי במערכת הדם, השואב את הדם לכל הגוף?', correctAnswer: 'הלב' },
  { subjectName: 'ביולוגיה', topic: 'גוף האדם - מערכות ותפקוד', difficulty: 'medium', type: 'multiple_choice', question: 'מה תפקידן העיקרי של כדוריות הדם האדומות?', options: ['נשיאת חמצן לתאי הגוף', 'הפרשת אינסולין', 'עיכול שומנים', 'ייצור נוגדנים בלבד'], correctAnswer: 'נשיאת חמצן לתאי הגוף' },
  { subjectName: 'ביולוגיה', topic: 'גוף האדם - מערכות ותפקוד', difficulty: 'medium', type: 'true_false', question: 'בקיבה מתבצע פירוק כימי ומכני של המזון בעזרת חומצה ואנזימים.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'גוף האדם - מערכות ותפקוד', difficulty: 'medium', type: 'open', question: 'איך נקרא הצינור המחבר בין הפה לקיבה?', correctAnswer: 'ושט' },
  { subjectName: 'ביולוגיה', topic: 'גוף האדם - מערכות ותפקוד', difficulty: 'medium', type: 'multiple_choice', question: 'היכן מתבצע חילוף הגזים (חמצן ופחמן דו-חמצני) בין הריאות לדם?', options: ['בנאדיות הריאה', 'בקנה הנשימה', 'בוושט', 'בקיבה'], correctAnswer: 'בנאדיות הריאה' },
  { subjectName: 'ביולוגיה', topic: 'גוף האדם - מערכות ותפקוד', difficulty: 'hard', type: 'multiple_choice', question: 'מה קורה לדם לאחר שהוא עובר דרך הריאות?', options: ['הוא מתעשר בחמצן ומשתחרר מעודף פחמן דו-חמצני', 'הוא מאבד את כל כדוריות הדם האדומות', 'הוא הופך לדם ורידי בלבד', 'הוא מפסיק לזרום זמנית'], correctAnswer: 'הוא מתעשר בחמצן ומשתחרר מעודף פחמן דו-חמצני' },
  { subjectName: 'ביולוגיה', topic: 'גוף האדם - מערכות ותפקוד', difficulty: 'hard', type: 'true_false', question: 'מערכת העיכול ומערכת הנשימה פועלות בנפרד לחלוטין וללא כל קשר ביניהן.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'גוף האדם - מערכות ותפקוד', difficulty: 'hard', type: 'open', question: 'איך נקראים כלי הדם הקטנים ביותר, שבהם מתבצע חילוף חומרים בין הדם לתאים?', correctAnswer: 'נימים' },

  // ===== ביולוגיה - הומיאוסטזיס - ויסות בגוף האדם (כיתה י') =====
  { subjectName: 'ביולוגיה', topic: 'הומיאוסטזיס - ויסות בגוף האדם', difficulty: 'easy', type: 'multiple_choice', question: 'מהי הומיאוסטזיס?', options: ['שמירה על סביבה פנימית יציבה בגוף', 'תהליך העיכול בקיבה', 'חלוקת תאים ליצירת רקמה חדשה', 'שינוי גובה הגוף עם הגיל'], correctAnswer: 'שמירה על סביבה פנימית יציבה בגוף' },
  { subjectName: 'ביולוגיה', topic: 'הומיאוסטזיס - ויסות בגוף האדם', difficulty: 'easy', type: 'true_false', question: 'הזעה היא אחת הדרכים שבהן הגוף מווסת עודף חום.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'הומיאוסטזיס - ויסות בגוף האדם', difficulty: 'easy', type: 'open', question: 'איזה הורמון מוריד את רמת הסוכר בדם?', correctAnswer: 'אינסולין' },
  { subjectName: 'ביולוגיה', topic: 'הומיאוסטזיס - ויסות בגוף האדם', difficulty: 'medium', type: 'multiple_choice', question: "מהו 'משוב שלילי' בהקשר של ויסות הגוף?", options: ['תהליך שמתקן סטייה מהערך התקין ומחזיר לאיזון', 'תהליך שמגביר עוד יותר את הסטייה מהערך התקין', 'הפסקה מוחלטת של כל פעילות הגוף', 'תגובה שאינה קשורה לערך שהשתנה'], correctAnswer: 'תהליך שמתקן סטייה מהערך התקין ומחזיר לאיזון' },
  { subjectName: 'ביולוגיה', topic: 'הומיאוסטזיס - ויסות בגוף האדם', difficulty: 'medium', type: 'true_false', question: 'רעד (צמרמורת) הוא מנגנון שמעלה את חום הגוף באמצעות ייצור חום מפעילות שרירים.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'הומיאוסטזיס - ויסות בגוף האדם', difficulty: 'medium', type: 'open', question: 'איזה הורמון מעלה את רמת הסוכר בדם כאשר היא נמוכה מדי?', correctAnswer: 'גלוקגון' },
  { subjectName: 'ביולוגיה', topic: 'הומיאוסטזיס - ויסות בגוף האדם', difficulty: 'medium', type: 'multiple_choice', question: 'איזה איבר מייצר את ההורמונים אינסולין וגלוקגון?', options: ['הלבלב', 'הכבד', 'הכליה', 'בלוטת התריס'], correctAnswer: 'הלבלב' },
  { subjectName: 'ביולוגיה', topic: 'הומיאוסטזיס - ויסות בגוף האדם', difficulty: 'hard', type: 'multiple_choice', question: 'מה קורה כאשר חום הגוף עולה מעל הטווח התקין?', options: ['כלי הדם בעור מתרחבים וההזעה גוברת כדי לפזר חום', 'כלי הדם בעור מתכווצים כדי לשמור על החום', 'הגוף מפסיק לייצר זיעה', 'קצב הלב יורד באופן מיידי'], correctAnswer: 'כלי הדם בעור מתרחבים וההזעה גוברת כדי לפזר חום' },
  { subjectName: 'ביולוגיה', topic: 'הומיאוסטזיס - ויסות בגוף האדם', difficulty: 'hard', type: 'true_false', question: 'מנגנון משוב שלילי פועל כך שהתגובה מגבירה עוד יותר את הסטייה מהערך התקין.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'הומיאוסטזיס - ויסות בגוף האדם', difficulty: 'hard', type: 'open', question: 'איך נקרא הטווח היציב שבו הגוף שואף לשמור על פרמטרים פיזיולוגיים כמו טמפרטורה או ריכוז סוכר?', correctAnswer: 'איזון הומיאוסטטי' },

  // ===== ביולוגיה - מבנה התא ואברונים (כיתה י"א) =====
  { subjectName: 'ביולוגיה', topic: 'מבנה התא ואברונים', difficulty: 'easy', type: 'multiple_choice', question: 'באיזה אברון בתא מתבצעת נשימה תאית לייצור אנרגיה?', options: ['מיטוכונדריון', 'גרעין התא', 'ריבוזום', 'קרום התא'], correctAnswer: 'מיטוכונדריון' },
  { subjectName: 'ביולוגיה', topic: 'מבנה התא ואברונים', difficulty: 'easy', type: 'true_false', question: 'לתא פרוקריוטי אין גרעין תחום בקרום.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'מבנה התא ואברונים', difficulty: 'easy', type: 'open', question: 'מהו שם האברון האחראי על ביצוע פוטוסינתזה בתאי צמח?', correctAnswer: 'כלורופלסט' },
  { subjectName: 'ביולוגיה', topic: 'מבנה התא ואברונים', difficulty: 'medium', type: 'multiple_choice', question: 'מה ההבדל המרכזי בין תא פרוקריוטי לתא איקריוטי?', options: ['תא איקריוטי מכיל גרעין ואברונים תחומי קרום, תא פרוקריוטי לא', 'רק לתא פרוקריוטי יש קרום תא', 'תא איקריוטי קטן יותר תמיד', 'אין הבדל משמעותי ביניהם'], correctAnswer: 'תא איקריוטי מכיל גרעין ואברונים תחומי קרום, תא פרוקריוטי לא' },
  { subjectName: 'ביולוגיה', topic: 'מבנה התא ואברונים', difficulty: 'medium', type: 'true_false', question: 'הריבוזום אחראי על סינתזת חלבונים בתא.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'מבנה התא ואברונים', difficulty: 'medium', type: 'open', question: 'איזה אברון בתא אחראי על מיון, אריזה והפרשה של חלבונים?', correctAnswer: 'מכשיר גולג׳י' },
  { subjectName: 'ביולוגיה', topic: 'מבנה התא ואברונים', difficulty: 'medium', type: 'multiple_choice', question: 'מהו תפקידו העיקרי של קרום התא (הממברנה)?', options: ['להפריד בין תוכן התא לסביבה ולווסת מעבר חומרים', 'לייצר אנרגיה לתא', 'לאחסן את החומר התורשתי', 'לפרק חלבונים פגומים בלבד'], correctAnswer: 'להפריד בין תוכן התא לסביבה ולווסת מעבר חומרים' },
  { subjectName: 'ביולוגיה', topic: 'מבנה התא ואברונים', difficulty: 'hard', type: 'multiple_choice', question: 'מה ייחודי במבנה הריבוזום בהשוואה לרוב אברוני התא?', options: ['אינו תחום בקרום כלל', 'הוא האברון הגדול ביותר בתא', 'הוא קיים רק בתאי צמח', 'הוא אחראי על חלוקת התא'], correctAnswer: 'אינו תחום בקרום כלל' },
  { subjectName: 'ביולוגיה', topic: 'מבנה התא ואברונים', difficulty: 'hard', type: 'true_false', question: 'לתאי בעלי חיים יש דופן תא נוקשה, בדיוק כמו לתאי צמחים.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'מבנה התא ואברונים', difficulty: 'hard', type: 'open', question: 'איך נקראת הרשת הפנימית של קרומים וצינוריות בתא, המעורבת בייצור והובלה של חלבונים ושומנים?', correctAnswer: 'רשתית אנדופלזמית' },

  // ===== ביולוגיה - חלוקת תאים - מיטוזה ומיוזה (כיתה י"א) =====
  { subjectName: 'ביולוגיה', topic: 'חלוקת תאים - מיטוזה ומיוזה', difficulty: 'easy', type: 'multiple_choice', question: 'מהי מטרתה העיקרית של המיטוזה?', options: ['יצירת שני תאי בת זהים לתא האם, לצורך גדילה ותיקון רקמות', 'יצירת תאי מין (זרע וביצית)', 'פירוק תאים ישנים', 'ייצור אנרגיה לתא'], correctAnswer: 'יצירת שני תאי בת זהים לתא האם, לצורך גדילה ותיקון רקמות' },
  { subjectName: 'ביולוגיה', topic: 'חלוקת תאים - מיטוזה ומיוזה', difficulty: 'easy', type: 'true_false', question: 'מיוזה מייצרת תאי מין - זרע וביצית.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'חלוקת תאים - מיטוזה ומיוזה', difficulty: 'easy', type: 'open', question: 'כמה תאי בת נוצרים בסיום מיטוזה אחת?', correctAnswer: 'שניים' },
  { subjectName: 'ביולוגיה', topic: 'חלוקת תאים - מיטוזה ומיוזה', difficulty: 'medium', type: 'multiple_choice', question: 'מה ההבדל במספר הכרומוזומים בין תאי הבת שנוצרים במיטוזה לאלה שנוצרים במיוזה?', options: ['במיטוזה תאי הבת דיפלואידים כמו התא המקורי, במיוזה הם הפלואידים (מחצית הכמות)', 'אין שום הבדל בין השניים', 'במיוזה תאי הבת מכילים כפול כרומוזומים מהתא המקורי', 'רק במיטוזה נוצרים תאים עם כרומוזומים בכלל'], correctAnswer: 'במיטוזה תאי הבת דיפלואידים כמו התא המקורי, במיוזה הם הפלואידים (מחצית הכמות)' },
  { subjectName: 'ביולוגיה', topic: 'חלוקת תאים - מיטוזה ומיוזה', difficulty: 'medium', type: 'true_false', question: 'מיוזה כוללת שני סבבים של חלוקת תא.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'חלוקת תאים - מיטוזה ומיוזה', difficulty: 'medium', type: 'open', question: 'איך נקרא שלב חילופי הקטעים בין כרומוזומים הומולוגיים במיוזה, היוצר שונות גנטית?', correctAnswer: 'חצייה' },
  { subjectName: 'ביולוגיה', topic: 'חלוקת תאים - מיטוזה ומיוזה', difficulty: 'medium', type: 'multiple_choice', question: 'מדוע השונות הגנטית שנוצרת במיוזה חשובה מבחינה ביולוגית?', options: ['היא תורמת למגוון גנטי באוכלוסייה ומאפשרת הסתגלות אבולוציונית', 'היא גורמת לכל הצאצאים להיות זהים לחלוטין', 'היא מונעת התפתחות של תאי מין', 'אין לה כל השפעה על האוכלוסייה'], correctAnswer: 'היא תורמת למגוון גנטי באוכלוסייה ומאפשרת הסתגלות אבולוציונית' },
  { subjectName: 'ביולוגיה', topic: 'חלוקת תאים - מיטוזה ומיוזה', difficulty: 'hard', type: 'multiple_choice', question: 'כמה תאי בת נוצרים בסיום מיוזה שלמה (לאחר שני הסבבים)?', options: ['ארבעה', 'שניים', 'שמונה', 'אחד'], correctAnswer: 'ארבעה' },
  { subjectName: 'ביולוגיה', topic: 'חלוקת תאים - מיטוזה ומיוזה', difficulty: 'hard', type: 'true_false', question: 'תאים בגוף האדם המשמשים לגדילה ותיקון רקמות, כמו תאי עור, מתחלקים במיוזה.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'חלוקת תאים - מיטוזה ומיוזה', difficulty: 'hard', type: 'open', question: 'איך נקרא השלב שבו מתבצעת הכפלת ה-DNA לפני תחילת חלוקת התא?', correctAnswer: 'שלב הכפלת ה-DNA' },

  // ===== ביולוגיה - תורשה וגנטיקה מולקולרית (כיתה י"ב) =====
  { subjectName: 'ביולוגיה', topic: 'תורשה וגנטיקה מולקולרית', difficulty: 'easy', type: 'multiple_choice', question: "מי נחשב ל'אבי הגנטיקה' בזכות ניסויי הצלבה בצמחי אפונה?", options: ['גרגור מנדל', 'צ׳רלס דרווין', 'לואי פסטר', 'ג׳יימס וטסון'], correctAnswer: 'גרגור מנדל' },
  { subjectName: 'ביולוגיה', topic: 'תורשה וגנטיקה מולקולרית', difficulty: 'easy', type: 'true_false', question: 'מולקולת ה-DNA בנויה מארבעה סוגי בסיסים חנקניים.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'תורשה וגנטיקה מולקולרית', difficulty: 'easy', type: 'open', question: 'מהם ראשי התיבות של החומר התורשתי המצוי בתא?', correctAnswer: 'DNA' },
  { subjectName: 'ביולוגיה', topic: 'תורשה וגנטיקה מולקולרית', difficulty: 'medium', type: 'multiple_choice', question: 'מהו אלל דומיננטי?', options: ['אלל שתכונתו באה לידי ביטוי גם כשיש ממנו עותק אחד בלבד', 'אלל שלעולם אינו בא לידי ביטוי', 'אלל שקיים רק אצל נקבות', 'אלל שנוצר אך ורק ממוטציה'], correctAnswer: 'אלל שתכונתו באה לידי ביטוי גם כשיש ממנו עותק אחד בלבד' },
  { subjectName: 'ביולוגיה', topic: 'תורשה וגנטיקה מולקולרית', difficulty: 'medium', type: 'true_false', question: 'אדם עם שני אללים זהים לתכונה מסוימת נקרא הומוזיגוטי לתכונה זו.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'תורשה וגנטיקה מולקולרית', difficulty: 'medium', type: 'open', question: 'מהו השינוי הפתאומי והתורשתי ברצף ה-DNA, שעשוי להשפיע על תכונה?', correctAnswer: 'מוטציה' },
  { subjectName: 'ביולוגיה', topic: 'תורשה וגנטיקה מולקולרית', difficulty: 'medium', type: 'multiple_choice', question: 'איזה מבנה תלת-ממדי מייחד את מולקולת ה-DNA?', options: ['סליל כפול', 'שרשרת בודדת ישרה', 'כדור מלא', 'משושה שטוח'], correctAnswer: 'סליל כפול' },
  { subjectName: 'ביולוגיה', topic: 'תורשה וגנטיקה מולקולרית', difficulty: 'hard', type: 'multiple_choice', question: 'מהי ההסתברות לצאצא בעל תכונה רצסיבית מהצלבת שני הורים הטרוזיגוטיים (Aa x Aa)?', options: ['רבע (25%)', 'חצי (50%)', 'שלושת רבעים (75%)', 'אפס'], correctAnswer: 'רבע (25%)' },
  { subjectName: 'ביולוגיה', topic: 'תורשה וגנטיקה מולקולרית', difficulty: 'hard', type: 'true_false', question: 'כל מוטציה היא בהכרח מזיקה לאורגניזם.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'תורשה וגנטיקה מולקולרית', difficulty: 'hard', type: 'open', question: 'איך נקרא התהליך שבו רצף ה-mRNA מתורגם לרצף חומצות אמינו ביצירת חלבון?', correctAnswer: 'תרגום' },

  // ===== ביולוגיה - אקולוגיה ואבולוציה (כיתה י"ב) =====
  { subjectName: 'ביולוגיה', topic: 'אקולוגיה ואבולוציה', difficulty: 'easy', type: 'multiple_choice', question: "מהי 'אוכלוסייה' באקולוגיה?", options: ['קבוצת פרטים מאותו המין החיים באותו אזור באותו הזמן', 'כל בעלי החיים בעולם', 'קבוצת צמחים בלבד באזור מסוים', 'מערכת אקולוגית שלמה'], correctAnswer: 'קבוצת פרטים מאותו המין החיים באותו אזור באותו הזמן' },
  { subjectName: 'ביולוגיה', topic: 'אקולוגיה ואבולוציה', difficulty: 'easy', type: 'true_false', question: 'שרשרת מזון מתארת את זרימת האנרגיה מיצרנים לצרכנים.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'אקולוגיה ואבולוציה', difficulty: 'easy', type: 'open', question: 'מי נחשב לאבי תורת הברירה הטבעית?', correctAnswer: 'צ׳רלס דרווין' },
  { subjectName: 'ביולוגיה', topic: 'אקולוגיה ואבולוציה', difficulty: 'medium', type: 'multiple_choice', question: "מהי 'ברירה טבעית'?", options: ['תהליך שבו פרטים בעלי תכונות מסתגלות שורדים ומעבירים אותן לצאצאיהם ביתר הצלחה', 'תהליך שבו כל הפרטים באוכלוסייה שורדים באופן שווה', 'בחירה מודעת של בעל חיים את תכונותיו', 'תהליך שמתרחש רק בבני אדם'], correctAnswer: 'תהליך שבו פרטים בעלי תכונות מסתגלות שורדים ומעבירים אותן לצאצאיהם ביתר הצלחה' },
  { subjectName: 'ביולוגיה', topic: 'אקולוגיה ואבולוציה', difficulty: 'medium', type: 'true_false', question: 'יצרנים, כגון צמחים, מסוגלים לייצר חומר אורגני מאנרגיית אור.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'אקולוגיה ואבולוציה', difficulty: 'medium', type: 'open', question: 'איך נקראת התחרות בין פרטים על משאב משותף, כמו מזון או שטח?', correctAnswer: 'תחרות' },
  { subjectName: 'ביולוגיה', topic: 'אקולוגיה ואבולוציה', difficulty: 'medium', type: 'multiple_choice', question: 'מהו תפקידם של המפרקים (כמו פטריות וחיידקים) במערכת האקולוגית?', options: ['פירוק חומר אורגני מת והחזרת חומרים לסביבה', 'ייצור חומר אורגני מאור השמש', 'טריפת בעלי חיים חיים בלבד', 'ייצור חמצן דרך פוטוסינתזה'], correctAnswer: 'פירוק חומר אורגני מת והחזרת חומרים לסביבה' },
  { subjectName: 'ביולוגיה', topic: 'אקולוגיה ואבולוציה', difficulty: 'hard', type: 'multiple_choice', question: "מהו 'כושר הסתגלות' (fitness) במונחי אבולוציה?", options: ['מידת ההצלחה של פרט להעביר את הגנים שלו לדור הבא', 'הכוח הגופני של הפרט', 'גודלו הפיזי של הפרט', 'משך חייו של הפרט בלבד'], correctAnswer: 'מידת ההצלחה של פרט להעביר את הגנים שלו לדור הבא' },
  { subjectName: 'ביולוגיה', topic: 'אקולוגיה ואבולוציה', difficulty: 'hard', type: 'true_false', question: 'שינויים שעובר פרט במהלך חייו, כמו שריר שהתחזק מאימון, עוברים בתורשה לצאצאיו.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'אקולוגיה ואבולוציה', difficulty: 'hard', type: 'open', question: 'איך נקרא תהליך היווצרות מין חדש כתוצאה מהצטברות שינויים אבולוציוניים לאורך זמן?', correctAnswer: 'ספיציאציה' },

  // ===== ביולוגיה - מאפייני החיים ומיון יצורים חיים (כיתה ז') =====
  { subjectName: 'ביולוגיה', topic: 'מאפייני החיים ומיון יצורים חיים', difficulty: 'easy', type: 'multiple_choice', question: 'איזה מהבאים הוא מאפיין חיים בסיסי?', options: ['נשימה', 'צבע', 'מחיר', 'שם'], correctAnswer: 'נשימה' },
  { subjectName: 'ביולוגיה', topic: 'מאפייני החיים ומיון יצורים חיים', difficulty: 'easy', type: 'true_false', question: 'כל היצורים החיים זקוקים למזון כדי לקבל אנרגיה.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'מאפייני החיים ומיון יצורים חיים', difficulty: 'easy', type: 'open', question: 'איך נקרא התהליך שבו יצור חי מייצר צאצאים דומים לו?', correctAnswer: 'רבייה' },
  { subjectName: 'ביולוגיה', topic: 'מאפייני החיים ומיון יצורים חיים', difficulty: 'medium', type: 'multiple_choice', question: "מהי 'תגובה לגירוי'?", options: ['יכולת של יצור חי להגיב לשינוי בסביבתו', 'יכולת לגדול לגובה בלבד', 'יכולת לנוע במהירות', 'יכולת לצבור שומן'], correctAnswer: 'יכולת של יצור חי להגיב לשינוי בסביבתו' },
  { subjectName: 'ביולוגיה', topic: 'מאפייני החיים ומיון יצורים חיים', difficulty: 'medium', type: 'true_false', question: 'גדילה והתפתחות הם מאפיינים ייחודיים לבעלי חיים בלבד, ולא לצמחים.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'מאפייני החיים ומיון יצורים חיים', difficulty: 'medium', type: 'open', question: 'איך נקרא הסידור המדורג שבו ממיינים יצורים חיים מקבוצות גדולות לקבוצות קטנות וספציפיות יותר?', correctAnswer: 'מדרג ביולוגי' },
  { subjectName: 'ביולוגיה', topic: 'מאפייני החיים ומיון יצורים חיים', difficulty: 'medium', type: 'multiple_choice', question: "מהי 'הפרשה', כמאפיין חיים?", options: ['סילוק פסולת וחומרים מיותרים מגוף היצור החי', 'קליטת מזון לגוף', 'תנועה ממקום למקום', 'ייצור צאצאים'], correctAnswer: 'סילוק פסולת וחומרים מיותרים מגוף היצור החי' },
  { subjectName: 'ביולוגיה', topic: 'מאפייני החיים ומיון יצורים חיים', difficulty: 'hard', type: 'multiple_choice', question: 'מדוע מיון יצורים חיים לקבוצות מסייע למדענים?', options: ['מאפשר להשוות בין מינים, לזהות קרבה ולארגן את הידע על מגוון החיים', 'רק כדי לתת שמות יפים ליצורים', 'כדי להקטין את מספר היצורים בטבע', 'אין לכך כל תועלת מדעית'], correctAnswer: 'מאפשר להשוות בין מינים, לזהות קרבה ולארגן את הידע על מגוון החיים' },
  { subjectName: 'ביולוגיה', topic: 'מאפייני החיים ומיון יצורים חיים', difficulty: 'hard', type: 'true_false', question: 'כל היצורים החיים בנויים מתא אחד או יותר.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'מאפייני החיים ומיון יצורים חיים', difficulty: 'hard', type: 'open', question: 'איזו קבוצת מיון היא הקטנה והספציפית ביותר במדרג הביולוגי, המאחדת יצורים שיכולים להתרבות זה עם זה?', correctAnswer: 'מין' },

  // ===== ביולוגיה - התא ומערכת ההובלה באדם (כיתה ז') =====
  { subjectName: 'ביולוגיה', topic: 'התא ומערכת ההובלה באדם', difficulty: 'easy', type: 'multiple_choice', question: 'מהו התא?', options: ['יחידת הבניין הבסיסית של כל היצורים החיים', 'איבר בגוף האדם', 'סוג של רקמה בלבד', 'חומר תורשתי'], correctAnswer: 'יחידת הבניין הבסיסית של כל היצורים החיים' },
  { subjectName: 'ביולוגיה', topic: 'התא ומערכת ההובלה באדם', difficulty: 'easy', type: 'true_false', question: 'לתא צמח יש דופן תא, ולתא בעל חיים אין.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'התא ומערכת ההובלה באדם', difficulty: 'easy', type: 'open', question: 'איזה איבר בגוף האדם שואב את הדם ומזרים אותו לכל הגוף?', correctAnswer: 'הלב' },
  { subjectName: 'ביולוגיה', topic: 'התא ומערכת ההובלה באדם', difficulty: 'medium', type: 'multiple_choice', question: 'מהו תפקידה העיקרי של מערכת ההובלה (הדם) בגוף?', options: ['הובלת חמצן וחומרי מזון לתאים, והרחקת פסולת', 'עיכול המזון בלבד', 'ייצור תאי עור חדשים', 'שמיעה וראייה'], correctAnswer: 'הובלת חמצן וחומרי מזון לתאים, והרחקת פסולת' },
  { subjectName: 'ביולוגיה', topic: 'התא ומערכת ההובלה באדם', difficulty: 'medium', type: 'true_false', question: 'כל התאים בגוף האדם נראים ומתפקדים באופן זהה לחלוטין.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'התא ומערכת ההובלה באדם', difficulty: 'medium', type: 'open', question: 'איך נקרא הנוזל שבו שטים תאי הדם?', correctAnswer: 'פלזמה' },
  { subjectName: 'ביולוגיה', topic: 'התא ומערכת ההובלה באדם', difficulty: 'medium', type: 'multiple_choice', question: "מהו 'מאזן חום' בגוף האדם?", options: ['שמירה על טמפרטורת גוף יציבה', 'עלייה מתמדת בטמפרטורת הגוף', 'מדידת חום הסביבה בלבד', 'ירידה מתמדת בטמפרטורת הגוף'], correctAnswer: 'שמירה על טמפרטורת גוף יציבה' },
  { subjectName: 'ביולוגיה', topic: 'התא ומערכת ההובלה באדם', difficulty: 'hard', type: 'multiple_choice', question: 'כיצד הגוף מאבד עודפי חום ביום חם?', options: ['באמצעות הזעה והתרחבות כלי דם בעור', 'באמצעות רעד שרירים', 'באמצעות עצירת נשימה', 'באמצעות הפחתת קצב הלב לאפס'], correctAnswer: 'באמצעות הזעה והתרחבות כלי דם בעור' },
  { subjectName: 'ביולוגיה', topic: 'התא ומערכת ההובלה באדם', difficulty: 'hard', type: 'true_false', question: 'מאזן המים בגוף עוסק בשמירה על איזון בין כמות המים שנכנסת לגוף לכמות היוצאת ממנו.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'התא ומערכת ההובלה באדם', difficulty: 'hard', type: 'open', question: 'איך נקרא המבנה העוטף את התא, שדרכו נכנסים ויוצאים חומרים מהתא?', correctAnswer: 'קרום התא' },

  // ===== ביולוגיה - הזנה בצמח ובאדם (כיתה ח') =====
  { subjectName: 'ביולוגיה', topic: 'הזנה בצמח ובאדם', difficulty: 'easy', type: 'multiple_choice', question: 'מהו התהליך שבו צמחים מייצרים מזון מאור השמש?', options: ['פוטוסינתזה', 'נשימה תאית', 'עיכול', 'הפרשה'], correctAnswer: 'פוטוסינתזה' },
  { subjectName: 'ביולוגיה', topic: 'הזנה בצמח ובאדם', difficulty: 'easy', type: 'true_false', question: 'מערכת העיכול באדם מפרקת מזון לחומרים שהגוף יכול לספוג.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'הזנה בצמח ובאדם', difficulty: 'easy', type: 'open', question: 'אילו שני חומרים, מלבד אור, נדרשים לצמח לביצוע פוטוסינתזה? (מספיק לציין אחד)', correctAnswer: 'מים' },
  { subjectName: 'ביולוגיה', topic: 'הזנה בצמח ובאדם', difficulty: 'medium', type: 'multiple_choice', question: 'היכן בצמח מתבצעת בעיקר הפוטוסינתזה?', options: ['בעלים', 'בשורשים', 'בפרחים בלבד', 'בגזע בלבד'], correctAnswer: 'בעלים' },
  { subjectName: 'ביולוגיה', topic: 'הזנה בצמח ובאדם', difficulty: 'medium', type: 'true_false', question: 'עיכול מכני הוא למשל לעיסת המזון בפה, ועיכול כימי הוא פירוק המזון בעזרת אנזימים.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'הזנה בצמח ובאדם', difficulty: 'medium', type: 'open', question: 'היכן בגוף מתבצעת בעיקר ספיגת חומרי המזון אל הדם?', correctAnswer: 'במעי הדק' },
  { subjectName: 'ביולוגיה', topic: 'הזנה בצמח ובאדם', difficulty: 'medium', type: 'multiple_choice', question: 'מהם תוצרי הפוטוסינתזה העיקריים?', options: ['גלוקוז (סוכר) וחמצן', 'מים ופחמן דו-חמצני בלבד', 'חנקן וחמצן', 'שומן וחלבון'], correctAnswer: 'גלוקוז (סוכר) וחמצן' },
  { subjectName: 'ביולוגיה', topic: 'הזנה בצמח ובאדם', difficulty: 'hard', type: 'multiple_choice', question: 'מדוע חמצן משתחרר כתוצר לוואי בתהליך הפוטוסינתזה?', options: ['הוא נוצר מפירוק מולקולות המים בתהליך', 'הוא נשאב ישירות מהאוויר ומשתחרר שוב ללא שינוי', 'הוא תוצר של פירוק הגלוקוז', 'הוא מגיע מהקרקע דרך השורשים'], correctAnswer: 'הוא נוצר מפירוק מולקולות המים בתהליך' },
  { subjectName: 'ביולוגיה', topic: 'הזנה בצמח ובאדם', difficulty: 'hard', type: 'true_false', question: 'כל המזון שאדם אוכל נספג ישירות בפה ואינו עובר שינוי נוסף במערכת העיכול.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'הזנה בצמח ובאדם', difficulty: 'hard', type: 'open', question: 'איך נקרא האנזים המצוי ברוק ומתחיל לפרק עמילן כבר בפה?', correctAnswer: 'עמילאז' },

  // ===== ביולוגיה - מערכות הנשימה וההפרשה באדם (כיתה ח') =====
  { subjectName: 'ביולוגיה', topic: 'מערכות הנשימה וההפרשה באדם', difficulty: 'easy', type: 'multiple_choice', question: 'מהו האיבר המרכזי במערכת הנשימה?', options: ['הריאות', 'הכליות', 'הכבד', 'הלב'], correctAnswer: 'הריאות' },
  { subjectName: 'ביולוגיה', topic: 'מערכות הנשימה וההפרשה באדם', difficulty: 'easy', type: 'true_false', question: 'הכליות הן חלק ממערכת ההפרשה בגוף.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'מערכות הנשימה וההפרשה באדם', difficulty: 'easy', type: 'open', question: 'מהו הגז שאנו שואפים ונחוץ לגוף לנשימה תאית?', correctAnswer: 'חמצן' },
  { subjectName: 'ביולוגיה', topic: 'מערכות הנשימה וההפרשה באדם', difficulty: 'medium', type: 'multiple_choice', question: 'מהו תפקידן העיקרי של הכליות?', options: ['סינון פסולת ועודפי מים מהדם ויצירת שתן', 'שאיבת דם לכל הגוף', 'ייצור תאי דם אדומים', 'עיכול המזון'], correctAnswer: 'סינון פסולת ועודפי מים מהדם ויצירת שתן' },
  { subjectName: 'ביולוגיה', topic: 'מערכות הנשימה וההפרשה באדם', difficulty: 'medium', type: 'true_false', question: 'פחמן דו-חמצני הוא גז פסולת שהגוף פולט בנשיפה.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'מערכות הנשימה וההפרשה באדם', difficulty: 'medium', type: 'open', question: 'היכן בריאות מתבצע חילוף הגזים בין האוויר לדם?', correctAnswer: 'בנאדיות' },
  { subjectName: 'ביולוגיה', topic: 'מערכות הנשימה וההפרשה באדם', difficulty: 'medium', type: 'multiple_choice', question: 'מה קורה לאוויר בדרכו מהאף אל הריאות?', options: ['הוא מתחמם, מסונן ומתלחלח', 'הוא מתקרר ומתייבש', 'הוא הופך לפחמן דו-חמצני', 'שום דבר, הוא נכנס בדיוק כפי שהוא'], correctAnswer: 'הוא מתחמם, מסונן ומתלחלח' },
  { subjectName: 'ביולוגיה', topic: 'מערכות הנשימה וההפרשה באדם', difficulty: 'hard', type: 'multiple_choice', question: "מדוע חשוב לגוף לסלק פסולת חנקנית (כמו אוריאה) דרך הכליות?", options: ['כי הצטברותה בגוף רעילה ומזיקה לתאים', 'כי היא מקור אנרגיה חשוב לגוף', 'כי היא נחוצה לבניית שרירים', 'אין סיבה מיוחדת'], correctAnswer: 'כי הצטברותה בגוף רעילה ומזיקה לתאים' },
  { subjectName: 'ביולוגיה', topic: 'מערכות הנשימה וההפרשה באדם', difficulty: 'hard', type: 'true_false', question: 'מערכת ההפרשה כוללת רק את הכליות, ואינה קשורה כלל לריאות או לעור.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'מערכות הנשימה וההפרשה באדם', difficulty: 'hard', type: 'open', question: 'איך נקרא הצינור שדרכו זורם שתן מהכליה אל שלפוחית השתן?', correctAnswer: 'שופכן' },

  // ===== ביולוגיה - תורשה - מבוא (כיתה ט') =====
  { subjectName: 'ביולוגיה', topic: 'תורשה - מבוא', difficulty: 'easy', type: 'multiple_choice', question: 'מהו החומר התורשתי המצוי בתאי הגוף?', options: ['DNA', 'חלבון בלבד', 'סוכר', 'מים'], correctAnswer: 'DNA' },
  { subjectName: 'ביולוגיה', topic: 'תורשה - מבוא', difficulty: 'easy', type: 'true_false', question: 'ילדים דומים בדרך כלל להוריהם בגלל תורשה.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'תורשה - מבוא', difficulty: 'easy', type: 'open', question: 'איך נקראת תכונה שעוברת מהורים לצאצאים?', correctAnswer: 'תכונה תורשתית' },
  { subjectName: 'ביולוגיה', topic: 'תורשה - מבוא', difficulty: 'medium', type: 'multiple_choice', question: 'היכן בתא נמצא רוב החומר התורשתי?', options: ['בגרעין התא', 'בקרום התא', 'בריבוזום', 'מחוץ לתא'], correctAnswer: 'בגרעין התא' },
  { subjectName: 'ביולוגיה', topic: 'תורשה - מבוא', difficulty: 'medium', type: 'true_false', question: 'לכל בני האדם יש בדיוק את אותו החומר התורשתי, ולכן כולם נראים זהים.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'תורשה - מבוא', difficulty: 'medium', type: 'open', question: 'איך נקראת השונות בתכונות הקיימת בין פרטים שונים באוכלוסייה?', correctAnswer: 'שונות גנטית' },
  { subjectName: 'ביולוגיה', topic: 'תורשה - מבוא', difficulty: 'medium', type: 'multiple_choice', question: 'מדוע שונות גנטית באוכלוסייה חשובה?', options: ['היא מאפשרת הסתגלות טובה יותר לשינויים בסביבה', 'היא גורמת לכל הפרטים להיות זהים', 'אין לה כל חשיבות ביולוגית', 'היא מונעת רבייה'], correctAnswer: 'היא מאפשרת הסתגלות טובה יותר לשינויים בסביבה' },
  { subjectName: 'ביולוגיה', topic: 'תורשה - מבוא', difficulty: 'hard', type: 'multiple_choice', question: 'מה ההבדל בין תכונה תורשתית לתכונה נרכשת?', options: ['תכונה תורשתית עוברת בגנים מההורים, ותכונה נרכשת מתפתחת במהלך החיים ואינה עוברת בתורשה', 'אין הבדל ביניהן', 'תכונה נרכשת תמיד חזקה יותר מתכונה תורשתית', 'תכונה תורשתית משתנה כל יום'], correctAnswer: 'תכונה תורשתית עוברת בגנים מההורים, ותכונה נרכשת מתפתחת במהלך החיים ואינה עוברת בתורשה' },
  { subjectName: 'ביולוגיה', topic: 'תורשה - מבוא', difficulty: 'hard', type: 'true_false', question: 'תכונות שנרכשות במהלך החיים, כמו כושר גופני, עוברות בתורשה לילדים.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'תורשה - מבוא', difficulty: 'hard', type: 'open', question: 'איך נקראות היחידות התורשתיות הנמצאות על ה-DNA ואחראיות לתכונות שונות?', correctAnswer: 'גנים' },

  // ===== ביולוגיה - אבולוציה - מבוא (כיתה ט') =====
  { subjectName: 'ביולוגיה', topic: 'אבולוציה - מבוא', difficulty: 'easy', type: 'multiple_choice', question: 'מיהו החוקר המזוהה בעיקר עם תיאוריית האבולוציה?', options: ['צ׳רלס דרווין', 'אלברט איינשטיין', 'לואי פסטר', 'איזק ניוטון'], correctAnswer: 'צ׳רלס דרווין' },
  { subjectName: 'ביולוגיה', topic: 'אבולוציה - מבוא', difficulty: 'easy', type: 'true_false', question: 'אבולוציה היא תהליך של שינוי באוכלוסיות יצורים חיים לאורך זמן רב.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'אבולוציה - מבוא', difficulty: 'easy', type: 'open', question: 'איך נקרא התהליך שבו יצורים בעלי תכונות מסתגלות שורדים ומתרבים בהצלחה רבה יותר?', correctAnswer: 'ברירה טבעית' },
  { subjectName: 'ביולוגיה', topic: 'אבולוציה - מבוא', difficulty: 'medium', type: 'multiple_choice', question: "מהי 'רבייה עודפת'?", options: ['יצורים חיים מייצרים בדרך כלל יותר צאצאים ממה שיכולים לשרוד בסביבתם', 'כל היצורים מתרבים פעם אחת בלבד בחייהם', 'רבייה המתבצעת רק בשבי', 'רבייה ללא יצירת צאצאים'], correctAnswer: 'יצורים חיים מייצרים בדרך כלל יותר צאצאים ממה שיכולים לשרוד בסביבתם' },
  { subjectName: 'ביולוגיה', topic: 'אבולוציה - מבוא', difficulty: 'medium', type: 'true_false', question: 'אבולוציה מתרחשת באוכלוסיות שלמות לאורך דורות רבים, ולא אצל יצור בודד במהלך חייו.', correctAnswer: 'נכון' },
  { subjectName: 'ביולוגיה', topic: 'אבולוציה - מבוא', difficulty: 'medium', type: 'open', question: 'איזה סוג שרידים קדומים של יצורים חיים עוזר למדענים לחקור אבולוציה?', correctAnswer: 'מאובנים' },
  { subjectName: 'ביולוגיה', topic: 'אבולוציה - מבוא', difficulty: 'medium', type: 'multiple_choice', question: "מהו 'מאבק קיום'?", options: ['תחרות בין יצורים על משאבים מוגבלים כמו מזון ומרחב מחיה', 'קרב פיזי בין שני יצורים ממינים שונים', 'תהליך שבו יצור נלחם רק על טריטוריה', 'מצב שבו אין תחרות כלל בטבע'], correctAnswer: 'תחרות בין יצורים על משאבים מוגבלים כמו מזון ומרחב מחיה' },
  { subjectName: 'ביולוגיה', topic: 'אבולוציה - מבוא', difficulty: 'hard', type: 'multiple_choice', question: 'מדוע יצורים המסתגלים היטב לסביבתם נוטים לשרוד ולהתרבות יותר?', options: ['יש להם יתרון בהשגת משאבים ובהימנעות מסכנות, מה שמעלה את סיכויי ההישרדות וההתרבות שלהם', 'הם תמיד גדולים יותר מיצורים אחרים', 'אין קשר בין הסתגלות להישרדות', 'הם מפסיקים להתרבות'], correctAnswer: 'יש להם יתרון בהשגת משאבים ובהימנעות מסכנות, מה שמעלה את סיכויי ההישרדות וההתרבות שלהם' },
  { subjectName: 'ביולוגיה', topic: 'אבולוציה - מבוא', difficulty: 'hard', type: 'true_false', question: 'כל היצורים החיים כיום זהים מבחינה גנטית ליצורים שחיו לפני מיליוני שנים.', correctAnswer: 'לא נכון' },
  { subjectName: 'ביולוגיה', topic: 'אבולוציה - מבוא', difficulty: 'hard', type: 'open', question: 'איזה סוג ראיה, המבוסס על השוואת מבנה גוף בין מינים שונים, תומך בתיאוריית האבולוציה?', correctAnswer: 'אנטומיה השוואתית' },

  // ===== מתמטיקה - מספרים שליליים (כיתה ז') =====
  { subjectName: 'מתמטיקה', topic: 'מספרים שליליים', difficulty: 'easy', type: 'multiple_choice', question: 'מהי התוצאה של -3 + 5?', options: ['2', '-2', '8', '-8'], correctAnswer: '2' },
  { subjectName: 'מתמטיקה', topic: 'מספרים שליליים', difficulty: 'easy', type: 'true_false', question: 'מספר שלילי תמיד קטן מכל מספר חיובי.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'מספרים שליליים', difficulty: 'easy', type: 'open', question: 'מהו המספר הנגדי (ההפכי בסימן) של -7?', correctAnswer: '7' },
  { subjectName: 'מתמטיקה', topic: 'מספרים שליליים', difficulty: 'medium', type: 'multiple_choice', question: 'מהי התוצאה של -4 - 6?', options: ['-10', '10', '-2', '2'], correctAnswer: '-10' },
  { subjectName: 'מתמטיקה', topic: 'מספרים שליליים', difficulty: 'medium', type: 'true_false', question: 'כפל של שני מספרים שליליים נותן תוצאה חיובית.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'מספרים שליליים', difficulty: 'medium', type: 'open', question: 'מהי התוצאה של -8 + (-2)?', correctAnswer: '-10' },
  { subjectName: 'מתמטיקה', topic: 'מספרים שליליים', difficulty: 'hard', type: 'multiple_choice', question: 'מהי התוצאה של (-3) × (-4)?', options: ['12', '-12', '7', '-7'], correctAnswer: '12' },
  { subjectName: 'מתמטיקה', topic: 'מספרים שליליים', difficulty: 'hard', type: 'true_false', question: 'על ציר המספרים, ככל שמתרחקים ימינה מהאפס - המספרים גדלים.', correctAnswer: 'נכון' },

  // ===== מתמטיקה - ביטויים אלגבריים בסיסיים (כיתה ז') =====
  { subjectName: 'מתמטיקה', topic: 'ביטויים אלגבריים בסיסיים', difficulty: 'easy', type: 'multiple_choice', question: "מהו 'ביטוי אלגברי'?", options: ['ביטוי מתמטי שמכיל משתנים (אותיות) ומספרים', 'משוואה עם שוויון בלבד', 'מספר שלם בלבד', 'צורה גיאומטרית'], correctAnswer: 'ביטוי מתמטי שמכיל משתנים (אותיות) ומספרים' },
  { subjectName: 'מתמטיקה', topic: 'ביטויים אלגבריים בסיסיים', difficulty: 'easy', type: 'true_false', question: "בביטוי 3x+2, האות x מייצגת משתנה.", correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'ביטויים אלגבריים בסיסיים', difficulty: 'easy', type: 'open', question: 'מהי התוצאה של הביטוי 2x כאשר x=5?', correctAnswer: '10' },
  { subjectName: 'מתמטיקה', topic: 'ביטויים אלגבריים בסיסיים', difficulty: 'medium', type: 'multiple_choice', question: "מהם 'איברים דומים' בביטוי אלגברי?", options: ['איברים עם אותו משתנה באותה חזקה', 'איברים עם אותו מקדם בלבד', 'איברים עם משתנים שונים', 'כל האיברים בביטוי'], correctAnswer: 'איברים עם אותו משתנה באותה חזקה' },
  { subjectName: 'מתמטיקה', topic: 'ביטויים אלגבריים בסיסיים', difficulty: 'medium', type: 'true_false', question: 'אפשר לכנס (לחבר) רק איברים דומים בביטוי אלגברי.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'ביטויים אלגבריים בסיסיים', difficulty: 'medium', type: 'open', question: 'כנסי (פשטי) את הביטוי: 3x + 2x', correctAnswer: '5x' },
  { subjectName: 'מתמטיקה', topic: 'ביטויים אלגבריים בסיסיים', difficulty: 'hard', type: 'multiple_choice', question: 'מהי התוצאה של פישוט הביטוי 4x + 3 - x + 5?', options: ['3x + 8', '5x + 8', '3x + 2', '4x + 8'], correctAnswer: '3x + 8' },
  { subjectName: 'מתמטיקה', topic: 'ביטויים אלגבריים בסיסיים', difficulty: 'hard', type: 'true_false', question: "בביטוי 5x, המספר 5 נקרא 'המקדם' של x.", correctAnswer: 'נכון' },

  // ===== מתמטיקה - יחס ופרופורציה (כיתה ז') =====
  { subjectName: 'מתמטיקה', topic: 'יחס ופרופורציה', difficulty: 'easy', type: 'multiple_choice', question: 'יחס של 2:3 פירושו...', options: ['על כל 2 יחידות מהראשון יש 3 מהשני', 'הראשון גדול פי 2 מהשני', 'הסכום הוא 2', 'ההפרש הוא 3'], correctAnswer: 'על כל 2 יחידות מהראשון יש 3 מהשני' },
  { subjectName: 'מתמטיקה', topic: 'יחס ופרופורציה', difficulty: 'easy', type: 'true_false', question: 'אפשר לכתוב יחס גם בצורת שבר.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'יחס ופרופורציה', difficulty: 'easy', type: 'open', question: 'אם היחס בין בנים לבנות בכיתה הוא 2:3 ויש 12 בנים, כמה בנות יש?', correctAnswer: '18' },
  { subjectName: 'מתמטיקה', topic: 'יחס ופרופורציה', difficulty: 'medium', type: 'multiple_choice', question: "מהי 'פרופורציה'?", options: ['שוויון בין שני יחסים', 'הפרש בין שני מספרים', 'מכפלה של שני מספרים', 'סוג של צורה גיאומטרית'], correctAnswer: 'שוויון בין שני יחסים' },
  { subjectName: 'מתמטיקה', topic: 'יחס ופרופורציה', difficulty: 'medium', type: 'true_false', question: 'בפרופורציה, מכפלת האיברים החיצוניים שווה למכפלת האיברים הפנימיים.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'יחס ופרופורציה', difficulty: 'medium', type: 'open', question: 'פתרי את הפרופורציה: 3/4 = x/12. מהו x?', correctAnswer: '9' },
  { subjectName: 'מתמטיקה', topic: 'יחס ופרופורציה', difficulty: 'hard', type: 'multiple_choice', question: 'אם 5 עטים עולים 20 ש"ח, כמה יעלו 8 עטים לפי אותו יחס?', options: ['32', '25', '40', '16'], correctAnswer: '32' },
  { subjectName: 'מתמטיקה', topic: 'יחס ופרופורציה', difficulty: 'hard', type: 'true_false', question: 'יחס בין שני גדלים נשאר זהה גם אם מכפילים את שניהם באותו מספר.', correctAnswer: 'נכון' },

  // ===== מתמטיקה - היקף ושטח של צורות בסיסיות (כיתה ז') =====
  { subjectName: 'מתמטיקה', topic: 'היקף ושטח של צורות בסיסיות', difficulty: 'easy', type: 'multiple_choice', question: 'מהו היקף מלבן שאורכו 5 ורוחבו 3?', options: ['16', '15', '8', '10'], correctAnswer: '16' },
  { subjectName: 'מתמטיקה', topic: 'היקף ושטח של צורות בסיסיות', difficulty: 'easy', type: 'true_false', question: 'שטח מלבן מחושב לפי אורך × רוחב.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'היקף ושטח של צורות בסיסיות', difficulty: 'easy', type: 'open', question: 'מהו שטח ריבוע שאורך צלעו 4?', correctAnswer: '16' },
  { subjectName: 'מתמטיקה', topic: 'היקף ושטח של צורות בסיסיות', difficulty: 'medium', type: 'multiple_choice', question: 'מהו שטח משולש שבסיסו 6 וגובהו 4?', options: ['12', '24', '10', '20'], correctAnswer: '12' },
  { subjectName: 'מתמטיקה', topic: 'היקף ושטח של צורות בסיסיות', difficulty: 'medium', type: 'true_false', question: 'היקף מעגל מחושב לפי הנוסחה 2πr.', correctAnswer: 'נכון' },
  { subjectName: 'מתמטיקה', topic: 'היקף ושטח של צורות בסיסיות', difficulty: 'medium', type: 'open', question: 'מהו היקף מעגל שרדיוסו 5 (π≈3.14)? (מספר שלם, לקרב)', correctAnswer: '31' },
  { subjectName: 'מתמטיקה', topic: 'היקף ושטח של צורות בסיסיות', difficulty: 'hard', type: 'multiple_choice', question: 'מהו שטח מעגל שרדיוסו 3 (π≈3.14)?', options: ['כ-28.26', 'כ-18.84', 'כ-9', 'כ-6.28'], correctAnswer: 'כ-28.26' },
  { subjectName: 'מתמטיקה', topic: 'היקף ושטח של צורות בסיסיות', difficulty: 'hard', type: 'true_false', question: 'ככל שרדיוס המעגל גדל פי 2, גם שטחו גדל פי 2 בלבד.', correctAnswer: 'לא נכון' },

  // ===== מדעים - מצבי צבירה של החומר (כיתה ז') =====
  { subjectName: 'מדעים', topic: 'מצבי צבירה של החומר', difficulty: 'easy', type: 'multiple_choice', question: 'מהם שלושת מצבי הצבירה העיקריים של החומר?', options: ['מוצק, נוזל, גז', 'קר, חם, פושר', 'קטן, בינוני, גדול', 'מתכת, עץ, פלסטיק'], correctAnswer: 'מוצק, נוזל, גז' },
  { subjectName: 'מדעים', topic: 'מצבי צבירה של החומר', difficulty: 'easy', type: 'true_false', question: 'כאשר קרח נמס הוא הופך ממוצק לנוזל.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'מצבי צבירה של החומר', difficulty: 'easy', type: 'open', question: 'איך נקרא התהליך שבו נוזל הופך לגז?', correctAnswer: 'אידוי' },
  { subjectName: 'מדעים', topic: 'מצבי צבירה של החומר', difficulty: 'medium', type: 'multiple_choice', question: 'איך נקרא התהליך שבו נוזל הופך למוצק?', options: ['הקפאה', 'אידוי', 'עיבוי', 'המסה'], correctAnswer: 'הקפאה' },
  { subjectName: 'מדעים', topic: 'מצבי צבירה של החומר', difficulty: 'medium', type: 'true_false', question: 'לחומר במצב מוצק יש צורה קבועה, ואילו לנוזל ולגז אין צורה קבועה משלהם.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'מצבי צבירה של החומר', difficulty: 'medium', type: 'open', question: 'איך נקרא התהליך שבו גז הופך לנוזל?', correctAnswer: 'עיבוי' },
  { subjectName: 'מדעים', topic: 'מצבי צבירה של החומר', difficulty: 'hard', type: 'multiple_choice', question: 'מה ההבדל בין אידוי לרתיחה?', options: ['אידוי מתרחש בכל טמפרטורה מפני השטח בלבד, רתיחה מתרחשת בטמפרטורה מסוימת בכל הנוזל', 'אין הבדל ביניהם', 'רתיחה קורית רק בקור', 'אידוי קורה רק בתוך הנוזל'], correctAnswer: 'אידוי מתרחש בכל טמפרטורה מפני השטח בלבד, רתיחה מתרחשת בטמפרטורה מסוימת בכל הנוזל' },
  { subjectName: 'מדעים', topic: 'מצבי צבירה של החומר', difficulty: 'hard', type: 'true_false', question: 'גז יכול להפוך ישירות למוצק בלי לעבור דרך מצב נוזלי.', correctAnswer: 'נכון' },

  // ===== מדעים - תופעות בטבע: עונות ומזג אוויר (כיתה ז') =====
  { subjectName: 'מדעים', topic: 'תופעות בטבע - עונות ומזג אוויר', difficulty: 'easy', type: 'multiple_choice', question: 'מה גורם בעיקר להיווצרות עונות השנה?', options: ['נטיית ציר כדור הארץ תוך כדי הקפתו סביב השמש', 'המרחק המשתנה של הירח מכדור הארץ', 'כמות הכוכבים בשמיים', 'מהירות סיבוב כדור הארץ סביב צירו'], correctAnswer: 'נטיית ציר כדור הארץ תוך כדי הקפתו סביב השמש' },
  { subjectName: 'מדעים', topic: 'תופעות בטבע - עונות ומזג אוויר', difficulty: 'easy', type: 'true_false', question: 'כדור הארץ מקיף את השמש פעם אחת בכל שנה.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'תופעות בטבע - עונות ומזג אוויר', difficulty: 'easy', type: 'open', question: 'איך נקרא מסלול התנועה של כדור הארץ סביב השמש?', correctAnswer: 'הקפה' },
  { subjectName: 'מדעים', topic: 'תופעות בטבע - עונות ומזג אוויר', difficulty: 'medium', type: 'multiple_choice', question: "מהו 'מחזור המים בטבע'?", options: ['תהליך מתמשך של אידוי, עיבוי ומשקעים בין הים, האוויר והיבשה', 'תהליך שבו מים נעלמים לצמיתות', 'זרימת נהרות בלבד', 'ייצור מים מלאכותי'], correctAnswer: 'תהליך מתמשך של אידוי, עיבוי ומשקעים בין הים, האוויר והיבשה' },
  { subjectName: 'מדעים', topic: 'תופעות בטבע - עונות ומזג אוויר', difficulty: 'medium', type: 'true_false', question: 'כאשר בישראל קיץ, בחצי הכדור הדרומי (כמו באוסטרליה) חורף.', correctAnswer: 'נכון' },
  { subjectName: 'מדעים', topic: 'תופעות בטבע - עונות ומזג אוויר', difficulty: 'medium', type: 'open', question: 'איך נקרא תהליך ירידת המים מהעננים בצורת גשם, שלג או ברד?', correctAnswer: 'משקעים' },
  { subjectName: 'מדעים', topic: 'תופעות בטבע - עונות ומזג אוויר', difficulty: 'hard', type: 'multiple_choice', question: 'מדוע יש הבדל בטמפרטורות בין עונות השנה?', options: ['בגלל זווית הארה שונה של קרני השמש, כתוצאה מנטיית ציר כדור הארץ', 'בגלל שינוי במרחק כדור הארץ מהשמש בין עונה לעונה', 'בגלל שינוי בגודל השמש', 'אין הסבר מדעי לכך'], correctAnswer: 'בגלל זווית הארה שונה של קרני השמש, כתוצאה מנטיית ציר כדור הארץ' },
  { subjectName: 'מדעים', topic: 'תופעות בטבע - עונות ומזג אוויר', difficulty: 'hard', type: 'true_false', question: 'סיבוב כדור הארץ סביב צירו (לא סביב השמש) הוא זה שגורם ליום ולילה, בעוד ההקפה סביב השמש עם נטיית הציר גורמת לעונות.', correctAnswer: 'נכון' },

  // ===== אנגלית - Basic Vocabulary & Present Simple (כיתה ז') =====
  { subjectName: 'אנגלית', topic: 'Basic Vocabulary & Present Simple', difficulty: 'easy', type: 'multiple_choice', question: 'Choose the correct form: "She ___ to school every day."', options: ['go', 'goes', 'going', 'gone'], correctAnswer: 'goes' },
  { subjectName: 'אנגלית', topic: 'Basic Vocabulary & Present Simple', difficulty: 'easy', type: 'true_false', question: '"I like pizza" is written in the Present Simple tense.', correctAnswer: 'נכון' },
  { subjectName: 'אנגלית', topic: 'Basic Vocabulary & Present Simple', difficulty: 'easy', type: 'open', question: 'Complete: "They ___ (play) football on Sundays."', correctAnswer: 'play' },
  { subjectName: 'אנגלית', topic: 'Basic Vocabulary & Present Simple', difficulty: 'medium', type: 'multiple_choice', question: 'Choose the correct negative form: "He does not ___ coffee."', options: ['like', 'likes', 'liked', 'liking'], correctAnswer: 'like' },
  { subjectName: 'אנגלית', topic: 'Basic Vocabulary & Present Simple', difficulty: 'medium', type: 'true_false', question: 'In Present Simple, we add "-s" to the verb for he, she, and it.', correctAnswer: 'נכון' },
  { subjectName: 'אנגלית', topic: 'Basic Vocabulary & Present Simple', difficulty: 'medium', type: 'open', question: 'Complete the question: "___ you like ice cream?"', correctAnswer: 'Do' },
  { subjectName: 'אנגלית', topic: 'Basic Vocabulary & Present Simple', difficulty: 'hard', type: 'multiple_choice', question: 'Which sentence is grammatically correct?', options: ["She doesn't like vegetables.", "She don't likes vegetables.", "She not like vegetables.", "She doesn't likes vegetables."], correctAnswer: "She doesn't like vegetables." },
  { subjectName: 'אנגלית', topic: 'Basic Vocabulary & Present Simple', difficulty: 'hard', type: 'true_false', question: 'The Present Simple tense is mainly used to describe actions happening right now, at this exact moment.', correctAnswer: 'לא נכון' },

  // ===== תנ"ך - ספר בראשית (כיתה ז') =====
  { subjectName: 'תנ"ך', topic: 'ספר בראשית', difficulty: 'easy', type: 'multiple_choice', question: 'מי משלושת האבות נחשב לראשון?', options: ['אברהם', 'יצחק', 'יעקב', 'יוסף'], correctAnswer: 'אברהם' },
  { subjectName: 'תנ"ך', topic: 'ספר בראשית', difficulty: 'easy', type: 'true_false', question: 'לפי ספר בראשית, העולם נברא בשישה ימים.', correctAnswer: 'נכון' },
  { subjectName: 'תנ"ך', topic: 'ספר בראשית', difficulty: 'easy', type: 'open', question: 'מי היה אביו של יעקב?', correctAnswer: 'יצחק' },
  { subjectName: 'תנ"ך', topic: 'ספר בראשית', difficulty: 'medium', type: 'multiple_choice', question: 'מי מבני יעקב נמכר לעבדות במצרים בידי אחיו, לפי הסיפור המקראי?', options: ['יוסף', 'ראובן', 'בנימין', 'שמעון'], correctAnswer: 'יוסף' },
  { subjectName: 'תנ"ך', topic: 'ספר בראשית', difficulty: 'medium', type: 'true_false', question: 'שרה הייתה אשתו של אברהם, לפי ספר בראשית.', correctAnswer: 'נכון' },
  { subjectName: 'תנ"ך', topic: 'ספר בראשית', difficulty: 'medium', type: 'open', question: 'איך נקראת אשתו של יצחק?', correctAnswer: 'רבקה' },
  { subjectName: 'תנ"ך', topic: 'ספר בראשית', difficulty: 'hard', type: 'multiple_choice', question: 'כמה בנים היו ליעקב, לפי ספר בראשית?', options: ['שנים עשר', 'עשרה', 'שבעה', 'ארבעה עשר'], correctAnswer: 'שנים עשר' },
  { subjectName: 'תנ"ך', topic: 'ספר בראשית', difficulty: 'hard', type: 'true_false', question: 'לפי הסיפור המקראי, אברהם היה אביהם של יצחק וישמעאל.', correctAnswer: 'נכון' },

  // ===== תנ"ך - ספר שמות: יציאת מצרים (כיתה ז') =====
  { subjectName: 'תנ"ך', topic: 'ספר שמות - יציאת מצרים', difficulty: 'easy', type: 'multiple_choice', question: 'מי הוביל, לפי המקרא, את בני ישראל ביציאת מצרים?', options: ['משה', 'אהרן', 'יהושע', 'יוסף'], correctAnswer: 'משה' },
  { subjectName: 'תנ"ך', topic: 'ספר שמות - יציאת מצרים', difficulty: 'easy', type: 'true_false', question: 'לפי המקרא, בני ישראל היו משועבדים במצרים לפני היציאה.', correctAnswer: 'נכון' },
  { subjectName: 'תנ"ך', topic: 'ספר שמות - יציאת מצרים', difficulty: 'easy', type: 'open', question: 'איך נקרא מלך מצרים בספר שמות?', correctAnswer: 'פרעה' },
  { subjectName: 'תנ"ך', topic: 'ספר שמות - יציאת מצרים', difficulty: 'medium', type: 'multiple_choice', question: 'כמה מכות הביא אלוהים על מצרים, לפי הסיפור המקראי?', options: ['עשר', 'שבע', 'שתים עשרה', 'חמש'], correctAnswer: 'עשר' },
  { subjectName: 'תנ"ך', topic: 'ספר שמות - יציאת מצרים', difficulty: 'medium', type: 'true_false', question: 'קריעת ים סוף מתוארת בספר שמות כחלק מסיפור יציאת מצרים.', correctAnswer: 'נכון' },
  { subjectName: 'תנ"ך', topic: 'ספר שמות - יציאת מצרים', difficulty: 'medium', type: 'open', question: 'באיזה הר קיבלו בני ישראל, לפי המקרא, את התורה?', correctAnswer: 'הר סיני' },
  { subjectName: 'תנ"ך', topic: 'ספר שמות - יציאת מצרים', difficulty: 'hard', type: 'multiple_choice', question: 'מי היה אחיו של משה שסייע לו לדבר אל פרעה, לפי המקרא?', options: ['אהרן', 'יהושע', 'כלב', 'חור'], correctAnswer: 'אהרן' },
  { subjectName: 'תנ"ך', topic: 'ספר שמות - יציאת מצרים', difficulty: 'hard', type: 'true_false', question: 'לפי המקרא, בני ישראל נדדו במדבר ארבעים שנה לפני הכניסה לארץ.', correctAnswer: 'נכון' },

  // ===== גאוגרפיה - מפות וקואורדינטות (כיתה ז') =====
  { subjectName: 'גאוגרפיה', topic: 'מפות וקואורדינטות', difficulty: 'easy', type: 'multiple_choice', question: 'מה מציין קו רוחב על מפה?', options: ['מרחק מקו המשווה צפונה או דרומה', 'מרחק מקו גריניץ׳ מזרחה או מערבה', 'גובה מעל פני הים', 'מרחק מהקוטב הצפוני בלבד'], correctAnswer: 'מרחק מקו המשווה צפונה או דרומה' },
  { subjectName: 'גאוגרפיה', topic: 'מפות וקואורדינטות', difficulty: 'easy', type: 'true_false', question: 'קווי אורך מחברים בין הקוטב הצפוני לקוטב הדרומי.', correctAnswer: 'נכון' },
  { subjectName: 'גאוגרפיה', topic: 'מפות וקואורדינטות', difficulty: 'easy', type: 'open', question: 'איך נקרא קו הרוחב שנמצא במרכז כדור הארץ, בין הקוטב הצפוני לדרומי?', correctAnswer: 'קו המשווה' },
  { subjectName: 'גאוגרפיה', topic: 'מפות וקואורדינטות', difficulty: 'medium', type: 'multiple_choice', question: 'מהי מטרת המקרא (legend) במפה?', options: ['להסביר את משמעות הסימנים המופיעים במפה', 'להראות את שם המדינה בלבד', 'לציין את שנת הפקת המפה', 'להראות את קנה המידה בלבד'], correctAnswer: 'להסביר את משמעות הסימנים המופיעים במפה' },
  { subjectName: 'גאוגרפיה', topic: 'מפות וקואורדינטות', difficulty: 'medium', type: 'true_false', question: 'ככל שמתקרבים לקטבים, קווי האורך מתקרבים זה לזה.', correctAnswer: 'נכון' },
  { subjectName: 'גאוגרפיה', topic: 'מפות וקואורדינטות', difficulty: 'medium', type: 'open', question: 'איך נקרא קו האורך שממנו מתחילים למדוד את קווי האורך (0 מעלות)?', correctAnswer: 'קו האורך של גריניץ׳' },
  { subjectName: 'גאוגרפיה', topic: 'מפות וקואורדינטות', difficulty: 'hard', type: 'multiple_choice', question: 'איך נקראת נקודת המפגש של קו רוחב וקו אורך על מפה?', options: ['קואורדינטות', 'מקרא', 'קנה מידה', 'תמצית'], correctAnswer: 'קואורדינטות' },
  { subjectName: 'גאוגרפיה', topic: 'מפות וקואורדינטות', difficulty: 'hard', type: 'true_false', question: 'קווי הרוחב מקבילים זה לזה ואינם נפגשים לעולם.', correctAnswer: 'נכון' },

  // ===== גאוגרפיה - אקלים ומזג אוויר (כיתה ז') =====
  { subjectName: 'גאוגרפיה', topic: 'אקלים ומזג אוויר', difficulty: 'easy', type: 'multiple_choice', question: 'מהו ההבדל בין אקלים למזג אוויר?', options: ['אקלים הוא מצב ממוצע לאורך שנים, מזג אוויר הוא מצב רגעי', 'אין שום הבדל ביניהם', 'מזג אוויר נמדד רק בקיץ', 'אקלים נמדד רק בים'], correctAnswer: 'אקלים הוא מצב ממוצע לאורך שנים, מזג אוויר הוא מצב רגעי' },
  { subjectName: 'גאוגרפיה', topic: 'אקלים ומזג אוויר', difficulty: 'easy', type: 'true_false', question: 'אזורים הקרובים לקו המשווה נוטים להיות חמים יותר.', correctAnswer: 'נכון' },
  { subjectName: 'גאוגרפיה', topic: 'אקלים ומזג אוויר', difficulty: 'easy', type: 'open', question: 'איך נקרא מכשיר למדידת טמפרטורת האוויר?', correctAnswer: 'מדחום' },
  { subjectName: 'גאוגרפיה', topic: 'אקלים ומזג אוויר', difficulty: 'medium', type: 'multiple_choice', question: 'מהם מרכיבי מזג האוויר העיקריים?', options: ['טמפרטורה, לחות, משקעים ורוח', 'רק טמפרטורה', 'רק משקעים', 'צבע השמיים בלבד'], correctAnswer: 'טמפרטורה, לחות, משקעים ורוח' },
  { subjectName: 'גאוגרפיה', topic: 'אקלים ומזג אוויר', difficulty: 'medium', type: 'true_false', question: 'אזורי האקלים בעולם משתנים בהתאם למרחק מקו המשווה ולגובה מעל פני הים.', correctAnswer: 'נכון' },
  { subjectName: 'גאוגרפיה', topic: 'אקלים ומזג אוויר', difficulty: 'medium', type: 'open', question: 'איך נקרא מכשיר למדידת לחץ האוויר?', correctAnswer: 'ברומטר' },
  { subjectName: 'גאוגרפיה', topic: 'אקלים ומזג אוויר', difficulty: 'hard', type: 'multiple_choice', question: 'מדוע האקלים באזורים הרריים וגבוהים נוטה להיות קר יותר?', options: ['ככל שעולים בגובה, הטמפרטורה יורדת', 'כי יש שם פחות שמש בקיץ', 'כי אין שם רוחות בכלל', 'כי הם רחוקים יותר מהים תמיד'], correctAnswer: 'ככל שעולים בגובה, הטמפרטורה יורדת' },
  { subjectName: 'גאוגרפיה', topic: 'אקלים ומזג אוויר', difficulty: 'hard', type: 'true_false', question: 'אקלים ומזג אוויר הם בדיוק אותו הדבר, ואפשר להשתמש במונחים בלי הבדל.', correctAnswer: 'לא נכון' },

  // ===== פיזיקה - כוח ותנועה - מבוא (כיתה ז') =====
  { subjectName: 'פיזיקה', topic: 'כוח ותנועה - מבוא', difficulty: 'easy', type: 'multiple_choice', question: "מהי 'תנועה' בפיזיקה?", options: ['שינוי מיקום של גוף עם הזמן', 'שינוי צבעו של גוף', 'שינוי משקלו של גוף', 'שינוי טמפרטורת גוף'], correctAnswer: 'שינוי מיקום של גוף עם הזמן' },
  { subjectName: 'פיזיקה', topic: 'כוח ותנועה - מבוא', difficulty: 'easy', type: 'true_false', question: 'מהירות היא המרחק שעובר גוף ביחידת זמן.', correctAnswer: 'נכון' },
  { subjectName: 'פיזיקה', topic: 'כוח ותנועה - מבוא', difficulty: 'easy', type: 'open', question: 'מהי היחידה הנפוצה למדידת מהירות של מכונית?', correctAnswer: 'קמ"ש' },
  { subjectName: 'פיזיקה', topic: 'כוח ותנועה - מבוא', difficulty: 'medium', type: 'multiple_choice', question: "מהו 'כוח' בפיזיקה?", options: ['השפעה שיכולה לשנות את מהירותו או כיוונו של גוף', 'התכונה הצבעונית של גוף', 'הטמפרטורה של גוף', 'הצליל שגוף משמיע'], correctAnswer: 'השפעה שיכולה לשנות את מהירותו או כיוונו של גוף' },
  { subjectName: 'פיזיקה', topic: 'כוח ותנועה - מבוא', difficulty: 'medium', type: 'true_false', question: 'כוח הכבידה הוא הכוח שמושך גופים לכיוון מרכז כדור הארץ.', correctAnswer: 'נכון' },
  { subjectName: 'פיזיקה', topic: 'כוח ותנועה - מבוא', difficulty: 'medium', type: 'open', question: 'איך נקרא המכשיר המשמש למדידת כוח?', correctAnswer: 'דינמומטר' },
  { subjectName: 'פיזיקה', topic: 'כוח ותנועה - מבוא', difficulty: 'hard', type: 'multiple_choice', question: 'אם מכונית נוסעת 90 ק"מ תוך שעה וחצי בקצב קבוע, מהי מהירותה הממוצעת?', options: ['60 קמ"ש', '90 קמ"ש', '45 קמ"ש', '135 קמ"ש'], correctAnswer: '60 קמ"ש' },
  { subjectName: 'פיזיקה', topic: 'כוח ותנועה - מבוא', difficulty: 'hard', type: 'true_false', question: 'כאשר גוף נח (לא זז), בהכרח אין עליו אף כוח פועל.', correctAnswer: 'לא נכון' },

  // ===== כימיה - מבנה החומר - מבוא (כיתה ז') =====
  { subjectName: 'כימיה', topic: 'מבנה החומר - מבוא', difficulty: 'easy', type: 'multiple_choice', question: 'מהו החלקיק הקטן ביותר של יסוד השומר על תכונותיו?', options: ['אטום', 'תא', 'מולקולה בלבד', 'יון בלבד'], correctAnswer: 'אטום' },
  { subjectName: 'כימיה', topic: 'מבנה החומר - מבוא', difficulty: 'easy', type: 'true_false', question: 'מולקולה בנויה משני אטומים או יותר המחוברים יחד.', correctAnswer: 'נכון' },
  { subjectName: 'כימיה', topic: 'מבנה החומר - מבוא', difficulty: 'easy', type: 'open', question: 'איך נקרא חומר טהור המורכב מסוג אחד בלבד של אטום?', correctAnswer: 'יסוד' },
  { subjectName: 'כימיה', topic: 'מבנה החומר - מבוא', difficulty: 'medium', type: 'multiple_choice', question: "מהי 'תרכובת'?", options: ['חומר המורכב משני יסודות או יותר המחוברים כימית', 'ערבוב פיזיקלי של שני חומרים', 'סוג של תא', 'שם אחר לאטום'], correctAnswer: 'חומר המורכב משני יסודות או יותר המחוברים כימית' },
  { subjectName: 'כימיה', topic: 'מבנה החומר - מבוא', difficulty: 'medium', type: 'true_false', question: 'מים (H2O) הם תרכובת המורכבת ממימן וחמצן.', correctAnswer: 'נכון' },
  { subjectName: 'כימיה', topic: 'מבנה החומר - מבוא', difficulty: 'medium', type: 'open', question: 'איך נקרא שילוב של שני חומרים או יותר שלא הגיבו כימית ביניהם?', correctAnswer: 'תערובת' },
  { subjectName: 'כימיה', topic: 'מבנה החומר - מבוא', difficulty: 'hard', type: 'multiple_choice', question: 'מה ההבדל בין תרכובת לתערובת?', options: ['בתרכובת החומרים מחוברים כימית ביחס קבוע, בתערובת אין קשר כימי והיחס יכול להשתנות', 'אין הבדל ביניהן', 'תערובת תמיד נוזלית ותרכובת תמיד מוצקה', 'תרכובת מכילה תמיד יסוד אחד בלבד'], correctAnswer: 'בתרכובת החומרים מחוברים כימית ביחס קבוע, בתערובת אין קשר כימי והיחס יכול להשתנות' },
  { subjectName: 'כימיה', topic: 'מבנה החומר - מבוא', difficulty: 'hard', type: 'true_false', question: 'אפשר להפריד תערובת בשיטות פיזיקליות פשוטות (כמו סינון), אבל להפריד תרכובת דורש תהליך כימי.', correctAnswer: 'נכון' },

  // ===== ערבית - אותיות (כיתה ז') =====
  { subjectName: 'ערבית', topic: 'אותיות', difficulty: 'easy', type: 'multiple_choice', question: 'איזו אות ערבית מקבילה בצליל לאות העברית מ׳?', options: ['م', 'ن', 'ب', 'ت'], correctAnswer: 'م' },
  { subjectName: 'ערבית', topic: 'אותיות', difficulty: 'easy', type: 'true_false', question: 'האות ب מקבילה בצליל לאות העברית ב׳.', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'אותיות', difficulty: 'easy', type: 'open', question: 'כתבו את האות הערבית המקבילה בצליל לעברית ס׳ (רק את האות עצמה).', correctAnswer: 'س' },
  { subjectName: 'ערבית', topic: 'אותיות', difficulty: 'medium', type: 'multiple_choice', question: 'איזו אות מקבילה בצליל לעברית ק׳?', options: ['ق', 'ك', 'غ', 'ح'], correctAnswer: 'ق' },
  { subjectName: 'ערבית', topic: 'אותיות', difficulty: 'medium', type: 'true_false', question: 'האות ع (עין) מקבילה בצליל לאות העברית ע׳.', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'אותיות', difficulty: 'medium', type: 'open', question: 'כתבו את האות הערבית המקבילה בצליל לעברית פ׳ (רק את האות עצמה).', correctAnswer: 'ف' },
  {
    subjectName: 'ערבית', topic: 'אותיות', difficulty: 'medium', type: 'matching', question: 'התאימו כל אות ערבית לצליל העברי המקביל לה',
    pairs: [{ left: 'م', right: 'מ' }, { left: 'ل', right: 'ל' }, { left: 'ن', right: 'נ' }],
  },
  { subjectName: 'ערבית', topic: 'אותיות', difficulty: 'hard', type: 'true_false', question: 'לרוב אותיות הערבית יש עד ארבע צורות כתיבה שונות, בהתאם למיקומן במילה (נפרדת, בתחילה, באמצע, בסוף).', correctAnswer: 'נכון' },

  // ===== ערבית - אותיות שאינן מתחברות מצד שמאל (כיתה ז') =====
  { subjectName: 'ערבית', topic: 'אותיות שאינן מתחברות מצד שמאל', difficulty: 'easy', type: 'multiple_choice', question: 'איזו מהאותיות הבאות אינה מתחברת לאות שאחריה?', options: ['ا', 'ب', 'م', 'ن'], correctAnswer: 'ا' },
  { subjectName: 'ערבית', topic: 'אותיות שאינן מתחברות מצד שמאל', difficulty: 'easy', type: 'true_false', question: 'האות د (דאל) אינה מתחברת לאות שבאה אחריה במילה.', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'אותיות שאינן מתחברות מצד שמאל', difficulty: 'easy', type: 'open', question: 'כתבו אחת מהאותיות הערביות שאינן מתחברות לאות הבאה אחריהן (מספיק אחת).', correctAnswer: ['ا', 'د', 'ذ', 'ر', 'ز', 'و'] },
  { subjectName: 'ערבית', topic: 'אותיות שאינן מתחברות מצד שמאל', difficulty: 'medium', type: 'multiple_choice', question: 'איזו מבין האותיות הבאות היא אות שמתחברת בשני הכיוונים (גם קדימה וגם אחורה)?', options: ['م', 'و', 'ر', 'ا'], correctAnswer: 'م' },
  { subjectName: 'ערבית', topic: 'אותיות שאינן מתחברות מצד שמאל', difficulty: 'medium', type: 'true_false', question: 'כאשר אות שאינה מתחברת שמאלה (כמו ر) מופיעה במילה, האות שאחריה תופיע בצורתה הנפרדת/ההתחלתית, כאילו היא פותחת מילה חדשה.', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'אותיות שאינן מתחברות מצד שמאל', difficulty: 'medium', type: 'multiple_choice', question: 'מה קורה לאות שמופיעה מיד אחרי אות שאינה מתחברת שמאלה (כמו ر)?', options: ['היא מקבלת צורה נפרדת/התחלתית, כאילו מתחילה מילה חדשה', 'היא נעלמת מהמילה', 'היא הופכת לאות שאינה מתחברת גם היא', 'אין לכך כל השפעה'], correctAnswer: 'היא מקבלת צורה נפרדת/התחלתית, כאילו מתחילה מילה חדשה' },
  { subjectName: 'ערבית', topic: 'אותיות שאינן מתחברות מצד שמאל', difficulty: 'hard', type: 'multiple_choice', question: 'איזו מהאותיות הבאות אינה שייכת לקבוצת האותיות שאינן מתחברות משמאל?', options: ['ب', 'ز', 'و', 'د'], correctAnswer: 'ب' },
  { subjectName: 'ערבית', topic: 'אותיות שאינן מתחברות מצד שמאל', difficulty: 'hard', type: 'true_false', question: 'אות שאינה מתחברת שמאלה עדיין כן מתחברת לאות שלפניה (מימין).', correctAnswer: 'נכון' },

  // ===== ערבית - ניקוד (כיתה ז') =====
  { subjectName: 'ערבית', topic: 'ניקוד', difficulty: 'easy', type: 'multiple_choice', question: 'איזה סימן ניקוד יוצר את הצליל "אַ" (a קצרה)?', options: ['פתחה', 'כסרה', 'דמה', 'סוכון'], correctAnswer: 'פתחה' },
  { subjectName: 'ערבית', topic: 'ניקוד', difficulty: 'easy', type: 'true_false', question: 'כסרה (ـِ) היא סימן ניקוד שנכתב מתחת לאות.', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'ניקוד', difficulty: 'easy', type: 'open', question: 'איך נקרא סימן הניקוד שיוצר את הצליל "אֻ" (u)?', correctAnswer: 'דמה' },
  { subjectName: 'ערבית', topic: 'ניקוד', difficulty: 'medium', type: 'multiple_choice', question: 'מה מציין הסימן ـْ (סוכון) מעל אות?', options: ['שאין אחרי האות תנועה - האות "שקטה"', 'שהאות מוכפלת', 'שהאות בתחילת משפט', 'שהמילה בנקבה'], correctAnswer: 'שאין אחרי האות תנועה - האות "שקטה"' },
  { subjectName: 'ערבית', topic: 'ניקוד', difficulty: 'medium', type: 'true_false', question: 'שדה (ـّ) הוא סימן שמציין הכפלה של הגיית האות.', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'ניקוד', difficulty: 'medium', type: 'open', question: 'איזה סימן ניקוד יוצר את הצליל "אִ" (i קצרה)?', correctAnswer: 'כסרה' },
  {
    subjectName: 'ערבית', topic: 'ניקוד', difficulty: 'medium', type: 'matching', question: 'התאימו בין סימן הניקוד לשמו',
    pairs: [{ left: 'ـَ', right: 'פתחה' }, { left: 'ـِ', right: 'כסרה' }, { left: 'ـُ', right: 'דמה' }],
  },
  { subjectName: 'ערבית', topic: 'ניקוד', difficulty: 'hard', type: 'true_false', question: 'אפשר לשנות את משמעות והגיית המילה בערבית רק על ידי שינוי סימן הניקוד, גם אם האותיות עצמן זהות.', correctAnswer: 'נכון' },

  // ===== ערבית - אל הידיעה (כיתה ז') =====
  { subjectName: 'ערבית', topic: 'אל הידיעה', difficulty: 'easy', type: 'multiple_choice', question: 'מהי אל הידיעה בערבית?', options: ['ال - תוספת בתחילת מילה שמשמעותה "ה" הידיעה', 'סימן ניקוד', 'סוג של תא מרבוטה', 'אות שאינה מתחברת'], correctAnswer: 'ال - תוספת בתחילת מילה שמשמעותה "ה" הידיעה' },
  { subjectName: 'ערבית', topic: 'אל הידיעה', difficulty: 'easy', type: 'true_false', question: 'אל הידיעה בערבית מקבילה במשמעותה ל"ה" הידיעה בעברית.', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'אל הידיעה', difficulty: 'easy', type: 'open', question: 'כתבו את אל הידיעה בערבית (שתי האותיות).', correctAnswer: 'ال' },
  { subjectName: 'ערבית', topic: 'אל הידיעה', difficulty: 'medium', type: 'multiple_choice', question: 'מהי הצורה המיודעת (עם אל הידיעה) של המילה بَيْت (בית)?', options: ['الْبَيْت', 'بَيْتِي', 'بَيْتَان', 'بُيُوت'], correctAnswer: 'الْبَيْت' },
  { subjectName: 'ערבית', topic: 'אל הידיעה', difficulty: 'medium', type: 'true_false', question: 'אל הידיעה נכתבת כתוספת בתחילת המילה, ולא באמצעה או בסופה.', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'אל הידיעה', difficulty: 'medium', type: 'multiple_choice', question: 'מה ההבדל במשמעות בין بَيْت ל-الْبَيْت?', options: ['بَيْت פירושו "בית" (סתמי), الْبَيْت פירושו "הבית" (מיודע)', 'אין הבדל במשמעות ביניהן', 'بَيْت הוא ברבים, الْبَيْت ביחיד', 'אין קשר בין המילים'], correctAnswer: 'بَيْت פירושו "בית" (סתמי), الْبَيْت פירושו "הבית" (מיודע)' },
  {
    subjectName: 'ערבית', topic: 'אל הידיעה', difficulty: 'hard', type: 'matching', question: 'התאימו כל מילה סתמית לצורתה המיודעת (עם אל הידיעה)',
    pairs: [{ left: 'بَيْت', right: 'الْبَيْت' }, { left: 'كِتَاب', right: 'الْكِتَاب' }, { left: 'قَلَم', right: 'الْقَلَم' }],
  },
  { subjectName: 'ערבית', topic: 'אל הידיעה', difficulty: 'hard', type: 'true_false', question: 'אפשר להסיר את אל הידיעה ממילה מיודעת ולקבל בחזרה את הצורה הסתמית (הלא-מיודעת) שלה.', correctAnswer: 'נכון' },

  // ===== ערבית - תא מרבוטה (כיתה ז') =====
  { subjectName: 'ערבית', topic: 'תא מרבוטה', difficulty: 'easy', type: 'multiple_choice', question: 'איזו מהאותיות/הסימנים הבאים הוא תא מרבוטה?', options: ['ة', 'ت', 'ه', 'د'], correctAnswer: 'ة' },
  { subjectName: 'ערבית', topic: 'תא מרבוטה', difficulty: 'easy', type: 'true_false', question: 'תא מרבוטה (ة) מופיעה תמיד בסוף מילה, ולא בתחילתה או באמצעה.', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'תא מרבוטה', difficulty: 'easy', type: 'open', question: 'כתבו את הסימן הערבי הנקרא "תא מרבוטה".', correctAnswer: 'ة' },
  { subjectName: 'ערבית', topic: 'תא מרבוטה', difficulty: 'medium', type: 'multiple_choice', question: 'איזו מהמילים הבאות מסתיימת בתא מרבוטה?', options: ['مَدْرَسَة', 'كِتَاب', 'بَيْت', 'قَلَم'], correctAnswer: 'مَدْرَسَة' },
  { subjectName: 'ערבית', topic: 'תא מרבוטה', difficulty: 'medium', type: 'true_false', question: 'תא מרבוטה (ة) שונה מהאות ה (ه) הרגילה, גם אם הן נראות דומות בסוף מילה.', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'תא מרבוטה', difficulty: 'medium', type: 'open', question: 'כתבו את האות הערבית ה"רגילה" (לא תא מרבוטה) שיכולה להיראות דומה בסוף מילה.', correctAnswer: 'ه' },
  { subjectName: 'ערבית', topic: 'תא מרבוטה', difficulty: 'hard', type: 'multiple_choice', question: 'מילים המסתיימות בתא מרבוטה שייכות לרוב לאיזו קטגוריה דקדוקית בערבית (ברמת מבוא)?', options: ['שם עצם בנקבה', 'שם עצם בזכר', 'פועל בעבר', 'מילת שאלה'], correctAnswer: 'שם עצם בנקבה' },
  { subjectName: 'ערבית', topic: 'תא מרבוטה', difficulty: 'hard', type: 'true_false', question: 'תא מרבוטה (ة) והאות תא הרגילה (ت) הן בדיוק אותה אות, רק בכתיב שונה.', correctAnswer: 'לא נכון' },

  // ===== ערבית - מילים (כיתה ז') =====
  { subjectName: 'ערבית', topic: 'מילים', difficulty: 'easy', type: 'multiple_choice', question: 'מהי המשמעות של המילה بَيْت?', options: ['בית', 'ספר', 'עט', 'מים'], correctAnswer: 'בית' },
  { subjectName: 'ערבית', topic: 'מילים', difficulty: 'easy', type: 'true_false', question: 'המילה كِتَاب פירושה "ספר".', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'מילים', difficulty: 'easy', type: 'open', question: 'מהי המשמעות (בעברית) של המילה قَلَم?', correctAnswer: 'עט' },
  { subjectName: 'ערבית', topic: 'מילים', difficulty: 'medium', type: 'multiple_choice', question: 'איזו מהמילים הבאות פירושה "מים"?', options: ['مَاء', 'شَمْس', 'قَمَر', 'بَاب'], correctAnswer: 'مَاء' },
  { subjectName: 'ערבית', topic: 'מילים', difficulty: 'medium', type: 'true_false', question: 'המילה شَمْس פירושה "ירח".', correctAnswer: 'לא נכון' },
  { subjectName: 'ערבית', topic: 'מילים', difficulty: 'medium', type: 'open', question: 'מהי המילה הערבית שפירושה "דלת"?', correctAnswer: 'بَاب' },
  {
    subjectName: 'ערבית', topic: 'מילים', difficulty: 'medium', type: 'matching', question: 'התאימו בין מילה ערבית למשמעותה בעברית',
    pairs: [{ left: 'شَمْس', right: 'שמש' }, { left: 'قَمَر', right: 'ירח' }, { left: 'مَاء', right: 'מים' }],
  },
  { subjectName: 'ערבית', topic: 'מילים', difficulty: 'hard', type: 'multiple_choice', question: 'השלימו נכון: "بَيْت" פירושו ___, ו-"مَدْرَسَة" פירושו ___', options: ['בית; בית ספר', 'בית ספר; בית', 'עט; ספר', 'שמש; ירח'], correctAnswer: 'בית; בית ספר' },

  // ===== ערבית - משפטים (כיתה ז') =====
  { subjectName: 'ערבית', topic: 'משפטים', difficulty: 'easy', type: 'multiple_choice', question: 'קראו את המשפט: "أَنَا مِنْ تَلّ أَبِيب" (אני מ-תל אביב). מהיכן הדובר/ת?', options: ['תל אביב', 'חיפה', 'ירושלים', 'חדרה'], correctAnswer: 'תל אביב' },
  { subjectName: 'ערבית', topic: 'משפטים', difficulty: 'easy', type: 'true_false', question: 'המשפט "أَنَا إِسْرَائِيلِيّ" פירושו "אני ישראלי".', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'משפטים', difficulty: 'easy', type: 'open', question: 'תרגמו לעברית: "بَيْتِي"', correctAnswer: ['הבית שלי', 'ביתי'] },
  { subjectName: 'ערבית', topic: 'משפטים', difficulty: 'medium', type: 'multiple_choice', question: 'סדרו את המילים הבאות למשפט נכון: "بَيْتِي" (הבית שלי) / "فِي" (ב-) / "أَنَا" (אני)', options: ['أَنَا فِي بَيْتِي', 'فِي أَنَا بَيْتِي', 'بَيْتِي أَنَا فِي', 'فِي بَيْتِي أَنَا'], correctAnswer: 'أَنَا فِي بَيْتِي' },
  { subjectName: 'ערבית', topic: 'משפטים', difficulty: 'medium', type: 'true_false', question: 'המשפט "هُوَ مُدِير" פירושו "הוא מנהל".', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'משפטים', difficulty: 'medium', type: 'open', question: 'השלימו בעברית: "أَنَا اسْمِي سَامِي" פירושו "אני ___ סאמי"', correctAnswer: ['השם שלי', 'שמי'] },
  { subjectName: 'ערבית', topic: 'משפטים', difficulty: 'hard', type: 'multiple_choice', question: 'סדרו את המילים הבאות למשפט נכון: "يَوْم" (יום) / "وَلَيْل" (ולילה)', options: ['يَوْم وَلَيْل', 'وَلَيْل يَوْم', 'يَوْم لَيْل وَ', 'وَ يَوْم لَيْل'], correctAnswer: 'يَوْم وَلَيْل' },
  { subjectName: 'ערבית', topic: 'משפטים', difficulty: 'hard', type: 'multiple_choice', question: 'כמה פעמים מופיעה האות ل (לאם) במשפט: "يَوْم وَلَيْل"?', options: ['2', '1', '3', '0'], correctAnswer: '2' },

  // ===== ערבית - מספרים (כיתה ז') =====
  { subjectName: 'ערבית', topic: 'מספרים', difficulty: 'easy', type: 'multiple_choice', question: 'איך נראה המספר 15 בספרות ערביות?', options: ['١٥', '٥١', '١٦', '٥٦'], correctAnswer: '١٥' },
  { subjectName: 'ערבית', topic: 'מספרים', difficulty: 'easy', type: 'multiple_choice', question: 'איך נראה המספר 8 בספרות ערביות?', options: ['٨', '٦', '٩', '٣'], correctAnswer: '٨' },
  { subjectName: 'ערבית', topic: 'מספרים', difficulty: 'easy', type: 'open', question: 'כתבו כיצד אומרים את המספר 10 בערבית, בתעתיק עברי.', correctAnswer: ['עשרה', 'אשרה'] },
  { subjectName: 'ערבית', topic: 'מספרים', difficulty: 'medium', type: 'multiple_choice', question: 'איזה מספר מיוצג על ידי הספרות הערביות ٢٠؟', options: ['20', '12', '02', '200'], correctAnswer: '20' },
  { subjectName: 'ערבית', topic: 'מספרים', difficulty: 'medium', type: 'open', question: 'איך אומרים את המספר 34 בערבית? כתבו בתעתיק עברי.', correctAnswer: ['ארבע ותלאתין', 'ארבעה ותלאתין', 'ארבע ותלתין', 'ארבעה ותלתין'] },
  {
    subjectName: 'ערבית', topic: 'מספרים', difficulty: 'medium', type: 'matching', question: 'התאימו בין הספרה הערבית למספר הרגיל שהיא מייצגת',
    pairs: [{ left: '٥', right: '5' }, { left: '٧', right: '7' }, { left: '٩', right: '9' }],
  },
  { subjectName: 'ערבית', topic: 'מספרים', difficulty: 'hard', type: 'multiple_choice', question: 'מהי הספרה הרגילה (לועזית) המקבילה לספרה הערבית ٤؟', options: ['4', '6', '9', '3'], correctAnswer: '4' },
  { subjectName: 'ערבית', topic: 'מספרים', difficulty: 'hard', type: 'open', question: 'כיצד כותבים את המספר 12 בספרות ערביות?', correctAnswer: '١٢' },

  // ===== ערבית - תרגול משולב (כיתה ז') =====
  { subjectName: 'ערבית', topic: 'תרגול משולב', difficulty: 'easy', type: 'multiple_choice', question: 'איזו מהמילים הבאות היא הצורה המיודעת (עם אל הידיעה) של بَيْت?', options: ['الْبَيْت', 'بَيْتِي', 'بَيْتَان', 'بُيُوت'], correctAnswer: 'الْبَيْت' },
  { subjectName: 'ערבית', topic: 'תרגול משולב', difficulty: 'easy', type: 'true_false', question: 'המילה مَدْرَسَة מסתיימת בתא מרבוטה, ומשמעותה "בית ספר".', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'תרגול משולב', difficulty: 'medium', type: 'multiple_choice', question: 'איזה סימן חסר בסוף המילה כדי לקבל "בית ספר" - مَدْرَس___؟', options: ['ة', 'ت', 'ه', 'د'], correctAnswer: 'ة' },
  { subjectName: 'ערבית', topic: 'תרגול משולב', difficulty: 'medium', type: 'open', question: 'כתבו את הצורה המיודעת (עם אל הידיעה) של המילה قَلَم (עט).', correctAnswer: 'الْقَلَم' },
  { subjectName: 'ערבית', topic: 'תרגול משולב', difficulty: 'medium', type: 'multiple_choice', question: 'באיזו מהמילים הבאות מופיעה אות שאינה מתחברת שמאלה (כמו ا)?', options: ['بَاب', 'قَلَم', 'كَتَبَ', 'سَمَك'], correctAnswer: 'بَاب' },
  { subjectName: 'ערבית', topic: 'תרגול משולב', difficulty: 'medium', type: 'true_false', question: 'המילה بَيْت אינה מסתיימת בתא מרבוטה.', correctAnswer: 'נכון' },
  { subjectName: 'ערבית', topic: 'תרגול משולב', difficulty: 'hard', type: 'multiple_choice', question: 'איזה ניקוד מופיע על האות הראשונה במילה بَيْت?', options: ['פתחה', 'כסרה', 'דמה', 'סוכון'], correctAnswer: 'פתחה' },
  { subjectName: 'ערבית', topic: 'תרגול משולב', difficulty: 'hard', type: 'true_false', question: 'אפשר להוסיף אל הידיעה למילה שמסתיימת בתא מרבוטה, בדיוק כמו לכל מילה אחרת (למשל: مَدْرَسَة ← الْمَدْرَسَة).', correctAnswer: 'נכון' },

  // ===== מחשבים - יסודות מחשב ובטיחות ברשת (כיתה ז') =====
  { subjectName: 'מחשבים', topic: 'יסודות מחשב ובטיחות ברשת', difficulty: 'easy', type: 'multiple_choice', question: 'איזה מהבאים הוא רכיב חומרה (hardware) במחשב?', options: ['מעבד (CPU)', 'דפדפן אינטרנט', 'קובץ טקסט', 'סיסמה'], correctAnswer: 'מעבד (CPU)' },
  { subjectName: 'מחשבים', topic: 'יסודות מחשב ובטיחות ברשת', difficulty: 'easy', type: 'true_false', question: 'תוכנה (software) היא קבוצת הוראות שהמחשב מבצע.', correctAnswer: 'נכון' },
  { subjectName: 'מחשבים', topic: 'יסודות מחשב ובטיחות ברשת', difficulty: 'easy', type: 'open', question: 'איך נקרא הרכיב ששומר קבצים לטווח ארוך, גם כשהמחשב כבוי?', correctAnswer: 'כונן קשיח' },
  { subjectName: 'מחשבים', topic: 'יסודות מחשב ובטיחות ברשת', difficulty: 'medium', type: 'multiple_choice', question: 'מהי דרך טובה להגן על חשבון מקוון?', options: ['להשתמש בסיסמה חזקה וייחודית ולא לשתף אותה', 'להשתמש באותה סיסמה בכל האתרים', 'לכתוב את הסיסמה על פתק ליד המחשב', 'לשתף את הסיסמה עם חברים'], correctAnswer: 'להשתמש בסיסמה חזקה וייחודית ולא לשתף אותה' },
  { subjectName: 'מחשבים', topic: 'יסודות מחשב ובטיחות ברשת', difficulty: 'medium', type: 'true_false', question: 'מומלץ לפתוח קבצים מצורפים מאנשים לא מוכרים בלי לבדוק אותם קודם.', correctAnswer: 'לא נכון' },
  { subjectName: 'מחשבים', topic: 'יסודות מחשב ובטיחות ברשת', difficulty: 'medium', type: 'open', question: 'איך נקרא ארגון קבצים במחשב לפי נושאים?', correctAnswer: 'תיקיות' },
  { subjectName: 'מחשבים', topic: 'יסודות מחשב ובטיחות ברשת', difficulty: 'hard', type: 'multiple_choice', question: "מהי 'הנדסה חברתית' (social engineering) בהקשר של אבטחת מידע?", options: ['ניסיון לרמות אדם כדי שיחשוף מידע רגיש מרצונו', 'תכנון רשתות מחשבים', 'בניית אתרי אינטרנט', 'תיקון תקלות חומרה'], correctAnswer: 'ניסיון לרמות אדם כדי שיחשוף מידע רגיש מרצונו' },
  { subjectName: 'מחשבים', topic: 'יסודות מחשב ובטיחות ברשת', difficulty: 'hard', type: 'true_false', question: 'פרסום פרטים אישיים (כתובת, טלפון) ברשתות חברתיות ציבוריות תמיד בטוח לחלוטין.', correctAnswer: 'לא נכון' },

  // ===== תרבות ישראלית יהודית - זהות יהודית-ישראלית: חגים וערכים (כיתה ז') =====
  { subjectName: 'תרבות ישראלית יהודית', topic: 'זהות יהודית-ישראלית: חגים וערכים', difficulty: 'easy', type: 'multiple_choice', question: 'איזה יום בשבוע הוא יום המנוחה היהודי המסורתי?', options: ['שבת', 'יום ראשון', 'יום שישי בבוקר', 'יום רביעי'], correctAnswer: 'שבת' },
  { subjectName: 'תרבות ישראלית יהודית', topic: 'זהות יהודית-ישראלית: חגים וערכים', difficulty: 'easy', type: 'true_false', question: 'יום כיפור נחשב ליום הקדוש ביותר בלוח השנה היהודי.', correctAnswer: 'נכון' },
  { subjectName: 'תרבות ישראלית יהודית', topic: 'זהות יהודית-ישראלית: חגים וערכים', difficulty: 'easy', type: 'open', question: 'באיזה גיל נחגגת בת מצווה לבנות, לפי המנהג המקובל?', correctAnswer: '12' },
  { subjectName: 'תרבות ישראלית יהודית', topic: 'זהות יהודית-ישראלית: חגים וערכים', difficulty: 'medium', type: 'multiple_choice', question: 'מה מציין יום הזיכרון ליצחק רבין?', options: ['יום הזיכרון לרצח ראש הממשלה יצחק רבין', 'יום העצמאות', 'יום הולדתו של יצחק רבין', 'חג דתי מקראי'], correctAnswer: 'יום הזיכרון לרצח ראש הממשלה יצחק רבין' },
  { subjectName: 'תרבות ישראלית יהודית', topic: 'זהות יהודית-ישראלית: חגים וערכים', difficulty: 'medium', type: 'true_false', question: 'ל"ג בעומר חל בתוך תקופת ספירת העומר, בין פסח לשבועות.', correctAnswer: 'נכון' },
  { subjectName: 'תרבות ישראלית יהודית', topic: 'זהות יהודית-ישראלית: חגים וערכים', difficulty: 'medium', type: 'open', question: 'באיזה גיל נחגגת בר מצווה לבנים, לפי המנהג המקובל?', correctAnswer: '13' },
  { subjectName: 'תרבות ישראלית יהודית', topic: 'זהות יהודית-ישראלית: חגים וערכים', difficulty: 'hard', type: 'multiple_choice', question: 'לוח השנה העברי מבוסס בעיקר על...', options: ['מחזור הירח, עם התאמות לשנת השמש', 'שנת השמש בלבד', 'מחזור הירח בלבד, ללא כל התאמה', 'מספר קבוע של 365 ימים תמיד'], correctAnswer: 'מחזור הירח, עם התאמות לשנת השמש' },
  { subjectName: 'תרבות ישראלית יהודית', topic: 'זהות יהודית-ישראלית: חגים וערכים', difficulty: 'hard', type: 'true_false', question: 'כל הקהילות והזרמים ביהדות חוגגים את החגים בדיוק באותה הצורה, ללא כל הבדלים.', correctAnswer: 'לא נכון' },

  // ===== עברית - שם המספר: זכר ונקבה וכתיבה בספרות (כיתה ז') =====
  { subjectName: 'עברית', topic: 'שם המספר - זכר ונקבה וכתיבה בספרות', difficulty: 'easy', type: 'multiple_choice', question: 'מהי הצורה הנכונה לפני שם עצם בזכר, כמו "בנים"?', options: ['שלושה בנים', 'שלוש בנים', 'שלושת בנים', 'שלש בנים'], correctAnswer: 'שלושה בנים' },
  { subjectName: 'עברית', topic: 'שם המספר - זכר ונקבה וכתיבה בספרות', difficulty: 'easy', type: 'true_false', question: 'המספר "שלוש" משמש לפני שם עצם בנקבה, כמו "שלוש בנות".', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'שם המספר - זכר ונקבה וכתיבה בספרות', difficulty: 'easy', type: 'open', question: 'כיצד כותבים בספרות את המספר "שבעה עשר"?', correctAnswer: '17' },
  { subjectName: 'עברית', topic: 'שם המספר - זכר ונקבה וכתיבה בספרות', difficulty: 'medium', type: 'multiple_choice', question: 'מהי הצורה הנכונה: "___ ילדות שיחקו בחצר" (5 ילדות)?', options: ['חמש ילדות', 'חמישה ילדות', 'חמשת ילדות', 'חמישית ילדות'], correctAnswer: 'חמש ילדות' },
  { subjectName: 'עברית', topic: 'שם המספר - זכר ונקבה וכתיבה בספרות', difficulty: 'medium', type: 'true_false', question: 'עם המספר "אחת" משתמשים לפני שם עצם בנקבה, כמו "בת אחת".', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'שם המספר - זכר ונקבה וכתיבה בספרות', difficulty: 'medium', type: 'open', question: 'כתבו בספרות: "עשרים ושתיים"', correctAnswer: '22' },
  { subjectName: 'עברית', topic: 'שם המספר - זכר ונקבה וכתיבה בספרות', difficulty: 'hard', type: 'multiple_choice', question: 'מהי הצורה הנכונה: "___ תלמידים הגיעו למסיבה" (2 תלמידים)?', options: ['שני תלמידים', 'שתיים תלמידים', 'שתי תלמידים', 'שניים תלמידים'], correctAnswer: 'שני תלמידים' },

  // ===== עברית - שם המספר: עשרות מאות אלפים ואחוזים (כיתה ח') =====
  { subjectName: 'עברית', topic: 'שם המספר - עשרות מאות אלפים ואחוזים', difficulty: 'easy', type: 'multiple_choice', question: 'איך כותבים במילים את המספר 30?', options: ['שלושים', 'שלושה', 'שלושת', 'שלושתיים'], correctAnswer: 'שלושים' },
  { subjectName: 'עברית', topic: 'שם המספר - עשרות מאות אלפים ואחוזים', difficulty: 'easy', type: 'true_false', question: 'המספר 100 נכתב במילים "מאה".', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'שם המספר - עשרות מאות אלפים ואחוזים', difficulty: 'easy', type: 'open', question: 'כתבו במילים את המספר 1000.', correctAnswer: 'אלף' },
  { subjectName: 'עברית', topic: 'שם המספר - עשרות מאות אלפים ואחוזים', difficulty: 'medium', type: 'multiple_choice', question: 'איך כותבים במילים 45%?', options: ['ארבעים וחמישה אחוזים', 'ארבעים וחמש אחוזים', 'ארבעה חמישה אחוזים', 'ארבעים חמישה אחוז'], correctAnswer: 'ארבעים וחמישה אחוזים' },
  { subjectName: 'עברית', topic: 'שם המספר - עשרות מאות אלפים ואחוזים', difficulty: 'medium', type: 'true_false', question: 'המספר 1,000,000 נכתב במילים "מיליון".', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'שם המספר - עשרות מאות אלפים ואחוזים', difficulty: 'medium', type: 'open', question: 'כתבו בספרות את המספר "מאתיים וחמישים".', correctAnswer: '250' },
  { subjectName: 'עברית', topic: 'שם המספר - עשרות מאות אלפים ואחוזים', difficulty: 'hard', type: 'multiple_choice', question: 'מהי הצורה הנכונה: "המחיר עלה ___" (פי 3)?', options: ['פי שלושה', 'פי שלוש', 'שלוש פעמים פי', 'פי שלושת'], correctAnswer: 'פי שלושה' },

  // ===== עברית - שם המספר: מספר סתמי וסודר (כיתה ט') =====
  { subjectName: 'עברית', topic: 'שם המספר - מספר סתמי וסודר', difficulty: 'easy', type: 'multiple_choice', question: 'מהו "מספר סודר"?', options: ['מספר המציין את מקומו של דבר בסדר, כמו ראשון או שני', 'מספר המונה כמות, כמו שלוש או ארבע', 'מספר עשרוני', 'מספר שלילי'], correctAnswer: 'מספר המציין את מקומו של דבר בסדר, כמו ראשון או שני' },
  { subjectName: 'עברית', topic: 'שם המספר - מספר סתמי וסודר', difficulty: 'easy', type: 'true_false', question: '"שלוש" הוא מספר סתמי (מונה), ו"שלישי" הוא מספר סודר.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'שם המספר - מספר סתמי וסודר', difficulty: 'easy', type: 'open', question: 'מהו המספר הסודר (בזכר) המקביל למספר הסתמי "אחת"?', correctAnswer: 'ראשון' },
  { subjectName: 'עברית', topic: 'שם המספר - מספר סתמי וסודר', difficulty: 'medium', type: 'multiple_choice', question: 'באיזה מהמשפטים הבאים מופיע מספר סודר?', options: ['היא סיימה במקום השני', 'יש לי שני ספרים', 'קניתי שני עטים', 'שני הילדים ישנים'], correctAnswer: 'היא סיימה במקום השני' },
  { subjectName: 'עברית', topic: 'שם המספר - מספר סתמי וסודר', difficulty: 'medium', type: 'true_false', question: 'מספר סודר משתנה לפי מין שם העצם, למשל "ראשון" בזכר ו"ראשונה" בנקבה.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'שם המספר - מספר סתמי וסודר', difficulty: 'medium', type: 'open', question: 'מהו המספר הסודר (בזכר) המתאים למספר הסתמי "עשר"?', correctAnswer: 'עשירי' },
  { subjectName: 'עברית', topic: 'שם המספר - מספר סתמי וסודר', difficulty: 'hard', type: 'multiple_choice', question: 'מה ההבדל העיקרי בין מספר סתמי לסודר?', options: ['מספר סתמי סופר כמות, מספר סודר מציין מיקום בסדר', 'אין הבדל ביניהם', 'מספר סודר תמיד גדול ממספר סתמי', 'מספר סתמי משמש רק לתאריכים'], correctAnswer: 'מספר סתמי סופר כמות, מספר סודר מציין מיקום בסדר' },

  // ===== עברית - מערכת הפועל: גופים (כיתה ז') =====
  { subjectName: 'עברית', topic: 'מערכת הפועל - גופים', difficulty: 'easy', type: 'multiple_choice', question: 'הפועל במשפט "אני הולך" הוא בגוף...', options: ['ראשון (מדבר)', 'שני (נוכח)', 'שלישי (נסתר)', 'אין גוף לפועל זה'], correctAnswer: 'ראשון (מדבר)' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - גופים', difficulty: 'easy', type: 'true_false', question: '"אתה הולך" הוא פועל בגוף שני (נוכח).', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - גופים', difficulty: 'easy', type: 'open', question: 'מהו כינוי הגוף המתאר גוף שלישי יחיד זכר?', correctAnswer: 'הוא' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - גופים', difficulty: 'medium', type: 'multiple_choice', question: 'מהי הצורה הנכונה של הפועל "הלך" בגוף ראשון יחיד נקבה, בהווה?', options: ['הולכת', 'הולך', 'הולכים', 'הולכות'], correctAnswer: 'הולכת' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - גופים', difficulty: 'medium', type: 'true_false', question: '"הם הולכים" הוא פועל בגוף שלישי רבים.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - גופים', difficulty: 'medium', type: 'open', question: 'שנו את "אני כותבת" לגוף שני יחיד נקבה (את).', correctAnswer: 'את כותבת' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - גופים', difficulty: 'hard', type: 'multiple_choice', question: 'מהי הצורה הנכונה של "לכתוב" בגוף שלישי רבות (הן), בהווה?', options: ['כותבות', 'כותבים', 'כותבת', 'כותב'], correctAnswer: 'כותבות' },

  // ===== עברית - מערכת הפועל: שורשים (כיתה ח') =====
  { subjectName: 'עברית', topic: 'מערכת הפועל - שורשים', difficulty: 'easy', type: 'multiple_choice', question: 'מהו השורש של הפועל "לרקוד"?', options: ['רק"ד', 'לר"ד', 'רקד"ד', 'קו"ד'], correctAnswer: 'רק"ד' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - שורשים', difficulty: 'easy', type: 'true_false', question: 'שורש בעברית הוא בדרך כלל בן שלוש אותיות.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - שורשים', difficulty: 'easy', type: 'open', question: 'מהו השורש של הפועל "כתב"? (בכתיב עם גרשיים)', correctAnswer: 'כת"ב' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - שורשים', difficulty: 'medium', type: 'multiple_choice', question: 'איזו מהמילים הבאות שייכת לאותו שורש כמו "שמירה"?', options: ['שומר', 'שיר', 'ישר', 'משהו'], correctAnswer: 'שומר' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - שורשים', difficulty: 'medium', type: 'true_false', question: 'המילים "מכתב", "כתיבה" ו"כתב" שייכות לאותו שורש.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - שורשים', difficulty: 'medium', type: 'open', question: 'מהו השורש של הפועל "למד"? (בכתיב עם גרשיים)', correctAnswer: 'למ"ד' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - שורשים', difficulty: 'hard', type: 'multiple_choice', question: 'מהו השורש של המילה "התלמיד"?', options: ['למ"ד', 'תל"ד', 'מי"ד', 'לת"ד'], correctAnswer: 'למ"ד' },

  // ===== עברית - מערכת הפועל: זמנים (כיתה ט') =====
  { subjectName: 'עברית', topic: 'מערכת הפועל - זמנים', difficulty: 'easy', type: 'multiple_choice', question: 'הפועל "הלכתי" הוא בזמן...', options: ['עבר', 'הווה', 'עתיד', 'ציווי'], correctAnswer: 'עבר' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - זמנים', difficulty: 'easy', type: 'true_false', question: 'הפועל "אלך" הוא בזמן עתיד.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - זמנים', difficulty: 'easy', type: 'open', question: 'כתבו את הפועל "הלך" (הוא, עבר) בזמן הווה.', correctAnswer: 'הולך' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - זמנים', difficulty: 'medium', type: 'multiple_choice', question: 'מהי הצורה הנכונה של "לכתוב" בציווי, לגוף שני יחיד זכר?', options: ['כתוב', 'תכתוב', 'כותב', 'לכתוב'], correctAnswer: 'כתוב' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - זמנים', difficulty: 'medium', type: 'true_false', question: 'לזמן ציווי אין צורה בגוף ראשון.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - זמנים', difficulty: 'medium', type: 'open', question: 'שנו את "היא כותבת" (הווה) לזמן עתיד.', correctAnswer: 'היא תכתוב' },
  { subjectName: 'עברית', topic: 'מערכת הפועל - זמנים', difficulty: 'hard', type: 'multiple_choice', question: 'מהי הצורה הנכונה של "לקרוא" בעבר, גוף ראשון רבים (אנחנו)?', options: ['קראנו', 'קוראים', 'נקרא', 'קראתי'], correctAnswer: 'קראנו' },

  // ===== עברית - חלקי דיבור: שם עצם ושם תואר (כיתה ז') =====
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם עצם ושם תואר', difficulty: 'easy', type: 'multiple_choice', question: 'מהו "שם עצם"?', options: ['מילה המציינת אדם, בעל חיים, חפץ, מקום או מושג', 'מילה המתארת פעולה', 'מילה המתארת תכונה', 'מילת קישור בין משפטים'], correctAnswer: 'מילה המציינת אדם, בעל חיים, חפץ, מקום או מושג' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם עצם ושם תואר', difficulty: 'easy', type: 'true_false', question: 'המילה "יפה" היא שם תואר.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם עצם ושם תואר', difficulty: 'easy', type: 'open', question: 'מהו שם התואר במשפט: "הילדה החכמה קראה ספר"?', correctAnswer: 'חכמה' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם עצם ושם תואר', difficulty: 'medium', type: 'multiple_choice', question: 'שם תואר צריך להתאים לשם העצם ב...', options: ['מין (זכר/נקבה) ומספר (יחיד/רבים)', 'צבע בלבד', 'אורך המילה', 'סדר האותיות'], correctAnswer: 'מין (זכר/נקבה) ומספר (יחיד/רבים)' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם עצם ושם תואר', difficulty: 'medium', type: 'true_false', question: 'במשפט "הכלב הגדול נבח", המילה "הגדול" היא שם עצם.', correctAnswer: 'לא נכון' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם עצם ושם תואר', difficulty: 'medium', type: 'open', question: 'מהו שם העצם הראשון במשפט: "הספר המעניין נמצא על השולחן"?', correctAnswer: 'ספר' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם עצם ושם תואר', difficulty: 'hard', type: 'multiple_choice', question: 'איזו מהמילים הבאות היא שם תואר?', options: ['יפה', 'שולחן', 'רצה', 'מהר'], correctAnswer: 'יפה' },

  // ===== עברית - חלקי דיבור: שם הפועל (כיתה ח') =====
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפועל', difficulty: 'easy', type: 'multiple_choice', question: 'מהו "שם הפועל"?', options: ['צורת הפועל הבסיסית שמתחילה ב"ל", כמו "לרוץ"', 'שם עצם המתאר פעולה', 'שם תואר המתאר פועל', 'כינוי גוף'], correctAnswer: 'צורת הפועל הבסיסית שמתחילה ב"ל", כמו "לרוץ"' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפועל', difficulty: 'easy', type: 'true_false', question: '"לכתוב" הוא שם הפועל של הפועל "כתב".', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפועל', difficulty: 'easy', type: 'open', question: 'מהו שם הפועל של "רץ" (הוא רץ)?', correctAnswer: 'לרוץ' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפועל', difficulty: 'medium', type: 'multiple_choice', question: 'מהו שם הפועל של "למד" (הוא למד)?', options: ['ללמוד', 'למד', 'לומד', 'למידה'], correctAnswer: 'ללמוד' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפועל', difficulty: 'medium', type: 'true_false', question: 'שם הפועל אינו משתנה לפי גוף, מין או זמן.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפועל', difficulty: 'medium', type: 'open', question: 'מהו שם הפועל של "אכל"?', correctAnswer: 'לאכול' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפועל', difficulty: 'hard', type: 'multiple_choice', question: 'באיזה מהמשפטים הבאים משמש שם הפועל?', options: ['אני אוהב לקרוא ספרים', 'אני קורא ספר', 'קראתי ספר אתמול', 'הספר קריא מאוד'], correctAnswer: 'אני אוהב לקרוא ספרים' },

  // ===== עברית - חלקי דיבור: שם הפעולה (כיתה ט') =====
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפעולה', difficulty: 'easy', type: 'multiple_choice', question: 'מהו "שם הפעולה"?', options: ['שם עצם המתאר פעולה או תהליך, כמו "ריצה" או "כתיבה"', 'צורת הפועל הבסיסית "לרוץ"', 'שם תואר המתאר פעולה', 'כינוי גוף המחליף פועל'], correctAnswer: 'שם עצם המתאר פעולה או תהליך, כמו "ריצה" או "כתיבה"' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפעולה', difficulty: 'easy', type: 'true_false', question: '"כתיבה" היא שם הפעולה של הפועל "כתב".', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפעולה', difficulty: 'easy', type: 'open', question: 'מהו שם הפעולה של הפועל "רץ" (לרוץ)?', correctAnswer: 'ריצה' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפעולה', difficulty: 'medium', type: 'multiple_choice', question: 'מהו שם הפעולה של הפועל "למד" (ללמוד)?', options: ['למידה', 'לימוד', 'תלמיד', 'לומד'], correctAnswer: 'למידה' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפעולה', difficulty: 'medium', type: 'true_false', question: 'שם הפעולה הוא סוג של שם עצם, ולא סוג של פועל.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפעולה', difficulty: 'medium', type: 'open', question: 'מהו שם הפעולה של הפועל "קרא" (לקרוא)?', correctAnswer: 'קריאה' },
  { subjectName: 'עברית', topic: 'חלקי דיבור - שם הפעולה', difficulty: 'hard', type: 'multiple_choice', question: 'מה ההבדל בין "שם פועל" ל"שם פעולה"?', options: ['שם פועל הוא צורת הפועל הבסיסית ("לרוץ"), שם פעולה הוא שם עצם המתאר את הפעולה ("ריצה")', 'אין הבדל ביניהם', 'שם פעולה הוא תמיד בזמן עבר', 'שם פועל הוא שם עצם, שם פעולה הוא פועל'], correctAnswer: 'שם פועל הוא צורת הפועל הבסיסית ("לרוץ"), שם פעולה הוא שם עצם המתאר את הפעולה ("ריצה")' },

  // ===== עברית - צירופים: צירוף סמיכות (כיתה ח') =====
  { subjectName: 'עברית', topic: 'צירופים - צירוף סמיכות', difficulty: 'easy', type: 'multiple_choice', question: 'מהו "צירוף סמיכות"?', options: ['צירוף של שני שמות עצם היוצרים יחד משמעות אחת, כמו "בית ספר"', 'צירוף של שם עצם ושם תואר', 'צירוף של פועל ותואר הפועל', 'משפט מורכב'], correctAnswer: 'צירוף של שני שמות עצם היוצרים יחד משמעות אחת, כמו "בית ספר"' },
  { subjectName: 'עברית', topic: 'צירופים - צירוף סמיכות', difficulty: 'easy', type: 'true_false', question: 'בצירוף "בית ספר", המילה "בית" היא הנסמך והמילה "ספר" היא הסומך.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'צירופים - צירוף סמיכות', difficulty: 'easy', type: 'open', question: 'מהו הנסמך בצירוף "דלת הבית"?', correctAnswer: 'דלת' },
  { subjectName: 'עברית', topic: 'צירופים - צירוף סמיכות', difficulty: 'medium', type: 'multiple_choice', question: 'היכן מופיעה ה"א הידיעה בצירוף סמיכות מיודע, כמו "בית הספר"?', options: ['לפני הסומך בלבד', 'לפני הנסמך בלבד', 'לפני שתי המילים', 'לא מופיעה כלל בצירוף סמיכות'], correctAnswer: 'לפני הסומך בלבד' },
  { subjectName: 'עברית', topic: 'צירופים - צירוף סמיכות', difficulty: 'medium', type: 'true_false', question: 'הצורה "הבית ספר" היא צורה תקנית של צירוף סמיכות מיודע.', correctAnswer: 'לא נכון' },
  { subjectName: 'עברית', topic: 'צירופים - צירוף סמיכות', difficulty: 'medium', type: 'open', question: 'מהו הסומך בצירוף "חדר האוכל"?', correctAnswer: 'אוכל' },
  { subjectName: 'עברית', topic: 'צירופים - צירוף סמיכות', difficulty: 'hard', type: 'multiple_choice', question: 'מהי צורת צירוף הסמיכות הנכונה בין "בגד" ל"ים" (בגדי-ים, ברבים)?', options: ['בגדי ים', 'בגדים ים', 'בגד הימים', 'בגדות ים'], correctAnswer: 'בגדי ים' },

  // ===== עברית - צירופים: שם עצם ותוארו (כיתה ט') =====
  { subjectName: 'עברית', topic: 'צירופים - שם עצם ותוארו', difficulty: 'easy', type: 'multiple_choice', question: 'בצירוף "הבית הגדול", מהו שם התואר?', options: ['גדול', 'בית', 'הבית', 'הגדול בית'], correctAnswer: 'גדול' },
  { subjectName: 'עברית', topic: 'צירופים - שם עצם ותוארו', difficulty: 'easy', type: 'true_false', question: 'בצירוף שם עצם ותוארו, שם התואר בא בדרך כלל אחרי שם העצם.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'צירופים - שם עצם ותוארו', difficulty: 'easy', type: 'open', question: 'מהו שם התואר בצירוף "ילדה חכמה"?', correctAnswer: 'חכמה' },
  { subjectName: 'עברית', topic: 'צירופים - שם עצם ותוארו', difficulty: 'medium', type: 'multiple_choice', question: 'מה ההבדל העיקרי בין צירוף סמיכות לצירוף שם עצם ותוארו?', options: ['בצירוף סמיכות שתי המילים שמות עצם, ובצירוף שם עצם ותוארו המילה השנייה מתארת את הראשונה', 'אין הבדל ביניהם', 'צירוף סמיכות תמיד ברבים', 'צירוף שם עצם ותוארו הוא תמיד ביחיד'], correctAnswer: 'בצירוף סמיכות שתי המילים שמות עצם, ובצירוף שם עצם ותוארו המילה השנייה מתארת את הראשונה' },
  { subjectName: 'עברית', topic: 'צירופים - שם עצם ותוארו', difficulty: 'medium', type: 'true_false', question: 'שם התואר בצירוף "בית הספר הגדול" מתאר את "בית הספר" כולו.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'צירופים - שם עצם ותוארו', difficulty: 'medium', type: 'open', question: 'מהי הצורה הנכונה של "ילד יפה" ברבים (ילדים)?', correctAnswer: 'ילדים יפים' },
  { subjectName: 'עברית', topic: 'צירופים - שם עצם ותוארו', difficulty: 'hard', type: 'multiple_choice', question: 'איזה מהצירופים הבאים הוא צירוף שם עצם ותוארו (ולא צירוף סמיכות)?', options: ['שולחן גדול', 'שולחן עבודה', 'בית ספר', 'חדר אוכל'], correctAnswer: 'שולחן גדול' },

  // ===== עברית - מאזכרים: זיהוי בסיסי (כיתה ז') =====
  { subjectName: 'עברית', topic: 'מאזכרים - זיהוי בסיסי', difficulty: 'easy', type: 'multiple_choice', question: 'מהי מילה "מאזכרת"?', options: ['מילה שמחליפה שם ומצביעה על מי/מה שהוזכר קודם בטקסט', 'מילה המתארת תכונה', 'מילת קישור בין משפטים', 'שם עצם פרטי'], correctAnswer: 'מילה שמחליפה שם ומצביעה על מי/מה שהוזכר קודם בטקסט' },
  { subjectName: 'עברית', topic: 'מאזכרים - זיהוי בסיסי', difficulty: 'easy', type: 'true_false', question: 'המילה "הוא" יכולה לשמש כמאזכר.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מאזכרים - זיהוי בסיסי', difficulty: 'easy', type: 'open', question: 'במשפט "דני הלך הביתה. הוא היה עייף" - למי מתייחסת המילה "הוא"?', correctAnswer: 'דני' },
  { subjectName: 'עברית', topic: 'מאזכרים - זיהוי בסיסי', difficulty: 'medium', type: 'multiple_choice', question: 'איזו מילה במשפט "רינה קנתה ספר. היא קראה אותו בערב" מאזכרת את "רינה"?', options: ['היא', 'ספר', 'אותו', 'בערב'], correctAnswer: 'היא' },
  { subjectName: 'עברית', topic: 'מאזכרים - זיהוי בסיסי', difficulty: 'medium', type: 'true_false', question: 'מאזכרים עוזרים למנוע חזרה מיותרת על אותה מילה בטקסט.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מאזכרים - זיהוי בסיסי', difficulty: 'medium', type: 'open', question: 'במשפט "הילדים שיחקו בכדור. הם נהנו מאוד" - למי מתייחסת המילה "הם"?', correctAnswer: 'הילדים' },
  { subjectName: 'עברית', topic: 'מאזכרים - זיהוי בסיסי', difficulty: 'hard', type: 'multiple_choice', question: 'איזו מהמילים הבאות אינה יכולה לשמש בדרך כלל כמאזכר?', options: ['שולחן', 'הוא', 'אותו', 'היא'], correctAnswer: 'שולחן' },

  // ===== עברית - מאזכרים: הבנה מתקדמת בטקסט (כיתה ט') =====
  { subjectName: 'עברית', topic: 'מאזכרים - הבנה מתקדמת בטקסט', difficulty: 'easy', type: 'multiple_choice', question: 'במשפט "המורה נתנה שיעורי בית. התלמידים לא אהבו את זה" - למה מתייחסת המילה "זה"?', options: ['לעובדה שניתנו שיעורי בית', 'למורה עצמה', 'לתלמידים', 'לכיתה'], correctAnswer: 'לעובדה שניתנו שיעורי בית' },
  { subjectName: 'עברית', topic: 'מאזכרים - הבנה מתקדמת בטקסט', difficulty: 'easy', type: 'true_false', question: 'מאזכר יכול להתייחס לא רק למילה בודדת, אלא גם לרעיון שלם או למשפט קודם.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מאזכרים - הבנה מתקדמת בטקסט', difficulty: 'easy', type: 'open', question: 'במשפט "קראתי את הספר וגם את המאמר. אלה עזרו לי להבין את הנושא" - למה מתייחסת המילה "אלה"?', correctAnswer: 'הספר והמאמר' },
  { subjectName: 'עברית', topic: 'מאזכרים - הבנה מתקדמת בטקסט', difficulty: 'medium', type: 'multiple_choice', question: 'מדוע חשוב לזהות נכון למה מתייחס מאזכר בטקסט?', options: ['כדי להבין נכון את הקשר בין המשפטים ואת משמעות הטקסט', 'כדי לספור מילים בטקסט', 'כדי לקצר את הטקסט', 'זה לא באמת חשוב'], correctAnswer: 'כדי להבין נכון את הקשר בין המשפטים ואת משמעות הטקסט' },
  { subjectName: 'עברית', topic: 'מאזכרים - הבנה מתקדמת בטקסט', difficulty: 'medium', type: 'true_false', question: 'לפעמים אפשר לטעות ולחשוב שמאזכר מתייחס למילה הלא נכונה, אם לא קוראים בעיון.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מאזכרים - הבנה מתקדמת בטקסט', difficulty: 'medium', type: 'open', question: 'במשפט "עידן איחר לאוטובוס. הדבר הרגיז אותו" - למה מתייחסת המילה "הדבר"?', correctAnswer: 'לכך שעידן איחר לאוטובוס' },
  { subjectName: 'עברית', topic: 'מאזכרים - הבנה מתקדמת בטקסט', difficulty: 'hard', type: 'multiple_choice', question: 'באיזה מהמשפטים הבאים המילה "שם" משמשת כמאזכר של מקום?', options: ['ביקרנו בפארק. שם שיחקנו כדורגל', 'מה שמך?', 'שמעתי שיר יפה', 'זהו שם מקום ידוע'], correctAnswer: 'ביקרנו בפארק. שם שיחקנו כדורגל' },

  // ===== עברית - מטרת הטקסט: זיהוי בסיסי (כיתה ח') =====
  { subjectName: 'עברית', topic: 'מטרת הטקסט - זיהוי בסיסי', difficulty: 'easy', type: 'multiple_choice', question: 'מהי "מטרת הטקסט"?', options: ['הסיבה שבגללה הכותב כתב את הטקסט - למשל למסור מידע, לשכנע או להסביר', 'אורך הטקסט', 'שם הכותב', 'מספר הפסקאות בטקסט'], correctAnswer: 'הסיבה שבגללה הכותב כתב את הטקסט - למשל למסור מידע, לשכנע או להסביר' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - זיהוי בסיסי', difficulty: 'easy', type: 'true_false', question: 'טקסט המסביר איך להכין עוגה נכתב בעיקר כדי להדריך.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - זיהוי בסיסי', difficulty: 'easy', type: 'open', question: 'מהי מטרת הטקסט הטיפוסית של מודעת פרסומת?', correctAnswer: 'לשכנע' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - זיהוי בסיסי', difficulty: 'medium', type: 'multiple_choice', question: 'טקסט המספר על אירוע היסטורי נועד בעיקר...', options: ['למסור מידע', 'לשכנע', 'להדריך', 'לבקר'], correctAnswer: 'למסור מידע' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - זיהוי בסיסי', difficulty: 'medium', type: 'true_false', question: 'כותרת הטקסט יכולה לרוב לרמז על מטרתו.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - זיהוי בסיסי', difficulty: 'medium', type: 'open', question: 'מהי מטרת הטקסט הטיפוסית של מאמר דעה בעיתון?', correctAnswer: 'לשכנע' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - זיהוי בסיסי', difficulty: 'hard', type: 'multiple_choice', question: 'אילו מילים בטקסט עוזרות בדרך כלל לזהות שמטרתו לשכנע?', options: ['ביטויי דעה כמו "לדעתי", "חשוב ש", "יש להימנע מ"', 'מספרים ותאריכים בלבד', 'שמות של אנשים בלבד', 'סימני פיסוק'], correctAnswer: 'ביטויי דעה כמו "לדעתי", "חשוב ש", "יש להימנע מ"' },

  // ===== עברית - מטרת הטקסט: ניתוח מעמיק (כיתה ט') =====
  { subjectName: 'עברית', topic: 'מטרת הטקסט - ניתוח מעמיק', difficulty: 'easy', type: 'multiple_choice', question: 'טקסט שמטרתו "להפעיל" את הקורא מבקש ממנו בדרך כלל...', options: ['לעשות פעולה מסוימת', 'רק לקרוא בעיון', 'להתעלם מהטקסט', 'לזכור תאריכים'], correctAnswer: 'לעשות פעולה מסוימת' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - ניתוח מעמיק', difficulty: 'easy', type: 'true_false', question: 'לטקסט אחד יכולה להיות יותר ממטרה אחת בו-זמנית.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - ניתוח מעמיק', difficulty: 'easy', type: 'open', question: 'מהי המטרה הטיפוסית של הוראות הפעלה למכשיר חשמלי?', correctAnswer: 'להדריך' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - ניתוח מעמיק', difficulty: 'medium', type: 'multiple_choice', question: 'מה ההבדל בין טקסט שמטרתו "לתאר" לטקסט שמטרתו "לשכנע"?', options: ['טקסט מתאר מציג תמונה או מצב, טקסט משכנע מנסה לשנות את דעת הקורא', 'אין הבדל ביניהם', 'טקסט מתאר תמיד קצר יותר', 'טקסט משכנע הוא תמיד סיפור בדיוני'], correctAnswer: 'טקסט מתאר מציג תמונה או מצב, טקסט משכנע מנסה לשנות את דעת הקורא' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - ניתוח מעמיק', difficulty: 'medium', type: 'true_false', question: 'אפשר לזהות את מטרת הטקסט לפי בחירת המילים, הטון והמבנה שלו.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - ניתוח מעמיק', difficulty: 'medium', type: 'open', question: 'איזו מטרה משרתת בדרך כלל ביקורת סרט או ספר?', correctAnswer: 'לבקר' },
  { subjectName: 'עברית', topic: 'מטרת הטקסט - ניתוח מעמיק', difficulty: 'hard', type: 'multiple_choice', question: 'קראו: "יש להימנע משתייה מרובה של משקאות ממותקים, כי הם מזיקים לבריאות". מהי מטרת המשפט?', options: ['לשכנע את הקורא לשנות התנהגות', 'לתאר משקה מסוים', 'לספר סיפור אישי', 'למסור נתון סטטיסטי בלבד'], correctAnswer: 'לשכנע את הקורא לשנות התנהגות' },

  // ===== עברית - הרעיון המרכזי: זיהוי בטקסט קצר (כיתה ז') =====
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - זיהוי בטקסט קצר', difficulty: 'easy', type: 'multiple_choice', question: 'מהו "הרעיון המרכזי" של טקסט?', options: ['הנושא או המסר העיקרי שהטקסט מנסה להעביר', 'המילה הראשונה בטקסט', 'אורך הטקסט', 'שם הכותב'], correctAnswer: 'הנושא או המסר העיקרי שהטקסט מנסה להעביר' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - זיהוי בטקסט קצר', difficulty: 'easy', type: 'true_false', question: 'הרעיון המרכזי הוא בדרך כלל הפרט החשוב ביותר בטקסט, לא פרט משני.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - זיהוי בטקסט קצר', difficulty: 'easy', type: 'open', question: 'טקסט המתאר יתרונות וחסרונות של חיות מחמד שונות - מהו ככל הנראה נושאו המרכזי?', correctAnswer: 'חיות מחמד' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - זיהוי בטקסט קצר', difficulty: 'medium', type: 'multiple_choice', question: 'מהי הדרך הטובה ביותר לבדוק אם משפט מסכם נכון את הרעיון המרכזי?', options: ['לבדוק שהוא מכיל את הנושא ואת המסר העיקרי של כל הטקסט, לא רק פרט אחד', 'לבדוק שהוא המשפט הראשון בטקסט', 'לבדוק שהוא הארוך ביותר', 'לבדוק שהוא מכיל מספרים'], correctAnswer: 'לבדוק שהוא מכיל את הנושא ואת המסר העיקרי של כל הטקסט, לא רק פרט אחד' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - זיהוי בטקסט קצר', difficulty: 'medium', type: 'true_false', question: 'כותרת טובה לטקסט יכולה לרוב לשקף את הרעיון המרכזי שלו.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - זיהוי בטקסט קצר', difficulty: 'medium', type: 'open', question: 'אם טקסט עוסק בעיקר בחשיבות השינה לבריאות, מהו הרעיון המרכזי שלו במשפט קצר?', correctAnswer: 'שינה חשובה לבריאות' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - זיהוי בטקסט קצר', difficulty: 'hard', type: 'multiple_choice', question: 'מה ההבדל בין רעיון מרכזי לפרט משני בטקסט?', options: ['הרעיון המרכזי הוא הנושא הכללי שכל הטקסט תומך בו, פרט משני הוא דוגמה או מידע התומך ברעיון', 'אין הבדל ביניהם', 'פרט משני תמיד מופיע לפני הרעיון המרכזי', 'הרעיון המרכזי הוא תמיד המשפט האחרון'], correctAnswer: 'הרעיון המרכזי הוא הנושא הכללי שכל הטקסט תומך בו, פרט משני הוא דוגמה או מידע התומך ברעיון' },

  // ===== עברית - הרעיון המרכזי: הבחנה מרעיונות משניים (כיתה ח') =====
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - הבחנה מרעיונות משניים', difficulty: 'easy', type: 'multiple_choice', question: 'מהו "פרט משני" בטקסט?', options: ['מידע התומך ברעיון המרכזי אך אינו הנושא העיקרי בעצמו', 'הרעיון החשוב ביותר בטקסט', 'כותרת הטקסט', 'המשפט הראשון בטקסט'], correctAnswer: 'מידע התומך ברעיון המרכזי אך אינו הנושא העיקרי בעצמו' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - הבחנה מרעיונות משניים', difficulty: 'easy', type: 'true_false', question: 'אפשר לרוב למחוק פרט משני מהטקסט מבלי לשנות את הרעיון המרכזי שלו.', correctAnswer: 'נכון' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - הבחנה מרעיונות משניים', difficulty: 'easy', type: 'open', question: 'בטקסט שעוסק בחשיבות הספורט לבריאות ומזכיר גם דוגמה של ריצת בוקר - מהו הרעיון המרכזי (לא הדוגמה)?', correctAnswer: 'חשיבות הספורט לבריאות' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - הבחנה מרעיונות משניים', difficulty: 'medium', type: 'multiple_choice', question: 'איזה משפט מהבאים סביר שיהיה משפט מסכם לטקסט העוסק בחשיבות שמירה על הסביבה?', options: ['לכן, חשוב שכולנו נשמור על הסביבה', 'אתמול ירד גשם חזק', 'הפרח האדום יפה מאוד', 'הכיתה שלי גדולה'], correctAnswer: 'לכן, חשוב שכולנו נשמור על הסביבה' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - הבחנה מרעיונות משניים', difficulty: 'medium', type: 'true_false', question: 'משפט הפתיחה של טקסט תמיד ובהכרח מכיל את הרעיון המרכזי שלו.', correctAnswer: 'לא נכון' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - הבחנה מרעיונות משניים', difficulty: 'medium', type: 'open', question: 'איזו מילת קישור מרמזת לרוב שמגיע סיכום או מסקנה (שם נמצא לעיתים קרובות הרעיון המרכזי)?', correctAnswer: 'לכן' },
  { subjectName: 'עברית', topic: 'הרעיון המרכזי - הבחנה מרעיונות משניים', difficulty: 'hard', type: 'multiple_choice', question: 'מדוע חשוב להבחין בין רעיון מרכזי לפרטים משניים בעת כתיבת תקציר?', options: ['כדי לכלול בתקציר רק את מה שבאמת חשוב, ולא להיגרר לפרטים', 'כדי להאריך את התקציר', 'כדי להעתיק את הטקסט המקורי במלואו', 'אין לכך כל חשיבות'], correctAnswer: 'כדי לכלול בתקציר רק את מה שבאמת חשוב, ולא להיגרר לפרטים' },
];

/** @returns {string[]} שמות המקצועות שיש להם שאלות במאגר */
export function bankSubjectNames() {
  return [...new Set(QUESTION_BANK.map((q) => q.subjectName))];
}

/** @param {string} subjectName @returns {string[]} נושאים שיש להם שאלות מוכנות בפועל (לא כל הקטלוג) */
export function topicsForSubject(subjectName) {
  return [...new Set(QUESTION_BANK.filter((q) => q.subjectName === subjectName).map((q) => q.topic))];
}

/** @param {string} subjectName @param {string} topic @returns {boolean} */
export function hasQuestionsFor(subjectName, topic) {
  return QUESTION_BANK.some((q) => q.subjectName === subjectName && q.topic === topic);
}

/** @param {Array} array @returns {Array} עותק מעורבב, לא משנה את המקור */
export function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function filterPool({ subjectName, topics, topic, difficulty, types }) {
  const topicList = topics && topics.length ? topics : topic ? [topic] : [];
  let pool = QUESTION_BANK.filter((q) => q.subjectName === subjectName && topicList.includes(q.topic));
  if (difficulty && difficulty !== 'all') pool = pool.filter((q) => q.difficulty === difficulty);
  if (types && types.length) pool = pool.filter((q) => types.includes(q.type));
  return pool;
}

/**
 * כמה שאלות זמינות בפועל למאגר הפילטרים הנתונים - לשימוש ב-UI כדי להגביל את "מספר השאלות"
 * לכמות שבאמת אפשר להפיק (ולא לתת לבחור 12 כשיש רק 8).
 * @param {{subjectName:string, topics?:string[], topic?:string, difficulty?:string, types?:string[]}} filters
 * @returns {number}
 */
export function countAvailableQuestions(filters) {
  return filterPool(filters).length;
}

/**
 * בוחר שאלות מהמאגר לפי הפילטרים, בערבוב אקראי. אפשר לצרף כמה נושאים לבוחן אחד (topics),
 * או נושא יחיד (topic, לצורך תאימות לאחור).
 * @param {{subjectName:string, topics?:string[], topic?:string, difficulty?:string, types?:string[], count:number}} filters
 * @returns {object[]}
 */
export function pickQuestions({ subjectName, topics, topic, difficulty, types, count }) {
  const pool = filterPool({ subjectName, topics, topic, difficulty, types });
  // עותק שטחי לכל שאלה - כדי שמסך הבוחן יוכל לצרף מידע זמני (כמו סדר ערבוב לשאלות התאמה)
  // בלי לשנות את מאגר השאלות המשותף (QUESTION_BANK הוא מודול יחיד, משותף לכל ריצות הבוחן).
  return shuffleArray(pool)
    .slice(0, Math.min(count, pool.length))
    .map((q) => ({ ...q }));
}

const HEBREW_FINAL_LETTERS = { ך: 'כ', ם: 'מ', ן: 'נ', ף: 'פ', ץ: 'צ' };

/** @param {string} answer @returns {string} מנורמל: רווחים, אותיות קטנות, בלי גרשיים/מרכאות, ובלי הבדל בין אותיות סופיות לרגילות (כדי לא לפסול תעתיק עברי תקין על בסיס פרט קטן) */
function normalizeAnswer(answer) {
  return String(answer)
    .trim()
    .toLowerCase()
    .replace(/[׳״'"]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[ךםןףץ]/g, (ch) => HEBREW_FINAL_LETTERS[ch]);
}

/**
 * בודק אם תשובה נכונה, כולל התאמה מספרית "רופפת" לשאלות פתוחות, ותמיכה בכמה תשובות תקינות
 * (correctAnswer יכול להיות מחרוזת בודדת או מערך של תעתיקים/ניסוחים מקובלים - למשל בערבית).
 * @param {object} question
 * @param {*} userAnswer
 * @returns {boolean}
 */
export function isCorrect(question, userAnswer) {
  if (question.type === 'matching') {
    if (!userAnswer || typeof userAnswer !== 'object') return false;
    return question.pairs.every((pair) => userAnswer[pair.left] === pair.right);
  }

  if (userAnswer == null || userAnswer === '') return false;
  const a = normalizeAnswer(userAnswer);
  const acceptable = Array.isArray(question.correctAnswer) ? question.correctAnswer : [question.correctAnswer];
  const normalizedAcceptable = acceptable.map(normalizeAnswer);
  if (normalizedAcceptable.includes(a)) return true;

  const numA = Number(a);
  if (!Number.isNaN(numA) && normalizedAcceptable.some((b) => Number(b) === numA)) return true;
  return false;
}
