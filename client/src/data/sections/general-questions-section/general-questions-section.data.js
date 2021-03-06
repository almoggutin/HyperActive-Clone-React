import { nanoid } from 'nanoid';

const GENERAL_QUESTIONS_SECTION_DATA = [
    {
        id: nanoid(),
        content: [
            {
                id: nanoid(),
                question: 'בכל מיני בתי ספר הבטיחו לי ״התחייבות לעבודה״ ב״חוזה חתום״, זה אמיתי?',
                answer: ' בקיצור - ממש לא. <br> <br> בפירוט:<br> אם ב״חוזה החתום״ היה כתוב שבכל מקרה כלל שכר הלימוד יוחזר אם לא תתקבל עבודה, היתה לזה משמעות. <br> <br> בפועל מונח ה״התחיבות לעבודה״ משמש בתי ספר שונים כתרגיל שיווקי חסר כל משמעות.  בדרך כלל ה״חוזה החתום״ מסייג את ההתחיבות בצורך לעמוד במגוון תנאים שאו שאינם אובייקטיביים, או שהינם בלתי אפשריים. <br> <br> בנוסף בדרך כלל ״החוזה החתום״ מאפשר לבתי הספר לא לקיים את ההתחייבות לספק עבודה ו״לפצות״ את התלמיד בפיצוי חסר משמעות. חלק מבתי הספר מציעים החזר כספי שמהווה חלק זעום ממחיר הקורס שנגבה, חלק מבתי הספר מציעים ״לחזור על הקורס״ ללא תשלום נוסף, וחלק מבתי הספר לא מתביישים להציע ״פיצוי״ בדמות תשלום נוסף של התלמיד תחת ״הנחה״ על קורס נוסף… <br> <br> האם צריך לפסול בתי ספר שמציעים התחייבויות שווא כאלה ולבחור באלו שלא? לאו דווקא. צריך פשוט להשוות בין בתי הספר תוך התעלמות מההתחייבות המדומה.',
            },
            {
                id: nanoid(),
                question: 'בכל מיני בתי ספר הבטיחו לי מלגה, זה אמיתי?',
                answer: 'בקיצור - לא. <br/> <br/> בפירוט: <br/> מלגה זו הנחה מיוחדת שמקבלים יחידי סגולה כאשר כל שאר התלמידים משלמים יותר. <br/> כשכל התלמידים מקבלים ״מלגה״ זה פשוט מצב בו מעלים את מחיר הקורס מראש ואז מורידים אותו למחיר האמיתי באמצעות ״מלגה״.',
            },
            {
                id: nanoid(),
                question: 'בית ספר/מכללה אקדמית מסויימת טוען שיש לו אחוז השמה מסויים של הבוגרים בענף. זה אמיתי?',
                answer: 'אף אחד לא יודע. כנראה שלא. <br/> <br/> אין שום פיקוח על הענף ואין שום דרך אמיתית לבדוק את הנתונים. בפועל כל איש מכירות זורק למועמדים את המספרים שלדעתו ישכנעו אותם להרשם.',
            },
        ],
    },
    {
        id: nanoid(),
        content: [
            {
                id: nanoid(),
                question: 'לא התקבלתי אצלכם ללימודים בתחום שעניין אותי, מה לעשות?',
                answer: 'כפי שהוסבר באתר אנחנו ״מכללת בוטיק״, ולאור מודל ה״לא עבדת לא שילמת״ שלנו חייבים להיות סלקטיביים מאוד. בהתאם אנחנו יכולים לטפל רק בכמות מצומצמת של מועמדים איכותיים. מועמדים שלא מתקבלים ללימודים בתחום שעניין אותם, מקבלים מאיתנו תמיד יעוץ שמבהיר להם אם יש תחומים אחרים בהיי-טק שעשויים להתאים להם. <br/>מעבר לכך, אתם מכירים את עצמכם הכי טוב. וגם אנחנו יכולים לטעות. אם לא התקבלתם אצלנו, אבל אתם משוכנעים ביכולות שלכם אל תתיאשו וחפשו נתיב לימודי במקום אחר.',
            },
            {
                id: nanoid(),
                question:
                    'למרות שלא התקבלתי אצלכם, אני משוכנע ביכולות שלי ורוצה לחפש קורס במקום לימודי אחר. למה צריך לשים לב וממה צריך להזהר?',
                answer: 'צריך להזהר מפנטזיות ולהצמד לעובדות בבחינת קורסים ומקומות לימודיים. אדם שבונה לעצמו פנטזיה אופטימית גם נוטה להאמין לתרגילים שיווקיים מופרכים.  ֿלא צריך לפתח פנטזיה לגבי שכר התחלתי גבוה, ולהזהר מטענות אנשי מכירות לגבי ״התחייבות לעבודה״, ״מלגת לימודים״ ו״אחוזי השמה״. ',
            },
            {
                id: nanoid(),
                question: 'כמה מרוויחים בענף ההיי-טק?',
                answer: 'אין ספק שעבודה בענף ההיי-טק היא עבודת השכיר הרווחית והמשתלמת ביותר. יש גם אין ספור טבלאות שכר באינטרנט שמפיצות חברות השמה שמראות על כך: <a class="answer-link"  target="_blank" href="https://www.jobinfo.co.il/%D7%98%D7%91%D7%9C%D7%90%D7%95%D7%AA-%D7%A9%D7%9B%D7%A8.aspx">טבלת שכר jobinfo</a> <a class="answer-link"  target="_blank" href="https://www.nisha.co.il/%D7%98%D7%91%D7%9C%D7%90%D7%95%D7%AA-%D7%A9%D7%9B%D7%A8">טבלת שכר נישה</a> <a  target="_blank" class="answer-link" href="https://www.ethosia.co.il/salary_report">טבלת שכר אתוסיה</a> רוב בתי הספר מפנים לטבלאות השכר הללו ויוצרות את הרושם שהזהב נמצא ברחובות ופשוט צריך רק לאסוף אותו… <br/> <br/> חשוב להבין שטבלאות השכר משקפות היטב את רמות השכר של עובדים בעלי 2 שנות ניסיון עבודה ומעלה. לעומת זאת, הן בדרך כלל מפריזות בשכר של מועמדים חסרי ניסיון. חברות השמה בדרך כלל לא מטפלות בכלל בהשמה של בוגרים חסרי ניסיון אלא אם כן מדובר בבוגרי תואר ראשון בהצטיינות במדעי המחשב מהטכניון/אוניברסיטת תל אביב. משום כך השכר שמופיע בטבלאות לבוגרים חסרי ניסיון מופרז ולא משקף. חשוב להבין שקשה להכנס לעבודה ראשונה בענף כבוגר חסר ניסיון וציפיות השכר ההתחלתי צריכות להיות הרבה יותר צנועות. לא צריך להמתין יותר מדי, ״חגיגת השכר״ מתחילה אחרי שצוברים את 2 שנות הניסיון הקריטיות בעבודה…',
            },
        ],
    },
];

export default GENERAL_QUESTIONS_SECTION_DATA;
