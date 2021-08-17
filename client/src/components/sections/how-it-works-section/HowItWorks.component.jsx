import React, { useState } from 'react';
import { ReactComponent as ReactLogo } from '../../../assets/plus.svg';

const HowItWorks = () => {
    const [part1ContentClass, setPart1ContentClass] = useState('content');
    const [part2ContentClass, setPart2ContentClass] = useState('content');
    const [part3ContentClass, setPart3ContentClass] = useState('content');
    const [part4ContentClass, setPart4ContentClass] = useState('content');

    const revealContent = (partNumber) => {
        switch (partNumber) {
            case 1:
                setPart1ContentClass(part1ContentClass === 'content' ? 'content open' : 'content');
                return;
            case 2:
                setPart2ContentClass(part2ContentClass === 'content' ? 'content open' : 'content');
                return;
            case 3:
                setPart3ContentClass(part3ContentClass === 'content' ? 'content open' : 'content');
                return;
            default:
                setPart4ContentClass(part4ContentClass === 'content' ? 'content open' : 'content');
        }
    };

    return (
        <section
            id="how-it-works-section"
            style={{ backgroundImage: 'url(/img/backgrounds/section-background.png)' }}
            className="how-it-works-section"
        >
            <h2 className="title">איך זה עובד</h2>

            <div className="explanation-container">
                <div className="part-1">
                    <div className="triangle-left"></div>
                    <div className="title">
                        <span>אבחון, יעוץ ומיון</span>
                        <ReactLogo onClick={() => revealContent(1)} />
                    </div>
                    <div className={part1ContentClass}>
                        <p>לאורך השנים גיבשנו תהליך מדעי לבדיקת התאמה לתחומי העיסוק השונים בענף ההיי-טק.</p>

                        <p>
                            מועמדים רבים פונים אלינו לאחר שהתקבלו לקורסים בבתי ספר אחרים ומתאכזבים לקבל מאיתנו תשובה
                            שלילית. חשוב להבין כי אנחנו מרוויחים רק כאשר מועמד מתקבל לעבודה ולכן נדרשים לבחינה מעמיקה
                            בהרבה שבוחנת את פוטנציאל המועמד לעמוד ב-2 הדרישות המרכזיות לעבודה בתפקידים בענף ההיי-טק:
                        </p>

                        <p>
                            א. פרופיל אישיותי מתאים.
                            <br />
                            ב. יכולת טכנית וידע מקצועי מעמיק.
                        </p>

                        <p>
                            בשלב ראשון תגישו מועמדות דרך האתר. לאחר מכן יתקיים ראיון טלפוני ראשון שלאחריו תתבקשו להשלים
                            פרטים ונתונים נוספים הנדרשים לשלב המיון הראשון. בשלב שני תקבלו מבדקי בית לפתרון בזמן מוגבל
                            ומתואם מראש. בשלב שלישי תזומנו לראיון אישי עם מנהל ההדרכה ולמבדקי קבלה נוספים. אנחנו מעריכים
                            את המועמדים שלנו ומתחייבים לחזור לכל מועמד עם תשובה.
                        </p>
                    </div>
                </div>

                <div className="part-2">
                    <div className="triangle-down"></div>
                    <div className="title">
                        <span>מסלול הכשרה</span>
                        <ReactLogo onClick={() => revealContent(2)} />
                    </div>
                    <div className={part2ContentClass}>
                        <p>
                            למועמדים שיעברו בהצלחה את תהליכי האבחון ימונה מנהל תוכנית אישי. המנהל האישי ישב עם המועמד
                            ויגדיר עימו מסגרת הכשרה מותאמת אישית. המסגרת תקבע בהתאם לשאיפות וההעדפות התעסוקתיות של
                            המועמד, יכולת המועמד להתמקד אך ורק בלימודים או הצורך של המועמד ללמוד במסלול ערב במקביל להמשך
                            עבודה במקום העבודה הנוכחי שלו ובהתאם לרקע הלימודי/אקדמי הקודם של המועמד וציוני בדיקות ההתאמה
                            שלו.
                        </p>
                        <p>
                            כל מסלולי ההכשרה כוללים הן בסיס תיאורטי רחב, הן ידע טכני פרקטי והן פרוייקטים מעשיים. ההכשרות
                            השונות מועברות בתקופת הקורונה בלימודים מרחוק תוך שילוב טכנולוגיות מתקדמות יחודיות שפותחו
                            לאורך השנים בהייפראקטיב - הכשרות פרונטליות רגילות, מנטורינג על ידי אנשי מקצוע מהתעשיה,
                            פרוייקטים אישיים, סדנאות מיוחדות בקבוצות קטנות.
                        </p>
                    </div>
                </div>

                <div className="part-4">
                    <div className="title">
                        <span>תהליך השיבוץ</span>
                        <ReactLogo onClick={() => revealContent(4)} />
                    </div>
                    <div className={part4ContentClass}>
                        <p>
                            עם סיום ההכשרה, תעברו לטיפול מחלקת ההשמה - תעברו סדנת הכנה ואימון מתקדם לקראת ראיונות עבודה,
                            תעברו סדרת ראיונות אצל לקוחות עד שתתקבלו לעבודה המיוחלת במקצוע אותו למדתם. רק לאחר שנקלטתם
                            בעבודה תסדירו את תשלום שכר הלימוד על הקורס אותו עברתם…
                        </p>
                    </div>
                </div>

                <div className="part-3">
                    <div className="triangle-right"></div>
                    <div className="title">
                        <span>קריירה חדשה</span>
                        <ReactLogo onClick={() => revealContent(3)} />
                    </div>
                    <div className={part3ContentClass}>
                        <p>
                            עשיתם את זה, נכנסתם לענף ההיי-טק. אתם עובדים באחת מחברות ההיי-טק המובילות בישראל. אנחנו
                            עדיין עומדים לרשותכם לעזרה, ליתר בטחון. אם תרצו גם נסייע לכם כסוכן אישי להמשיך לקדם אתכם
                            בענף לתפקידים ומשכורות גבוהים יותר לאורך הקריירה.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
