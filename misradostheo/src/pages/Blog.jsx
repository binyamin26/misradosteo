import React, { useState } from "react";
import { Link } from "react-router-dom"; // Nous gardons Link si vous l'utilisez ailleurs, mais pas pour "קראו עוד" ici.
import './GlobalStyles.css'; // Assurez-vous que ce fichier existe
import "./Blog.css";

function Blog() {
  // État pour le filtre de catégorie
  const [activeCategory, setActiveCategory] = useState("הכל");
  // État pour gérer les articles étendus (affichage complet)
  // On stocke les IDs des articles qui sont actuellement étendus
  const [expandedArticles, setExpandedArticles] = useState([]);

  // Données fictives pour les articles de blog (articles existants + nouveaux articles en hébreu)
  const blogPosts = [
    {
      id: 1,
      title: "5 תרגילים לצוואר למניעת כאבים במשרד",
      excerpt: "ישיבה ממושכת מול מחשב עלולה לגרום לכאבי צוואר. למדו 5 תרגילים פשוטים שיכולים לעזור במניעת כאבים אלה.",
      fullContent: `
    <div class="article-full-content">
      <h2>תרגילים לצוואר למניעת כאבים במשרד 🧍‍♂️🖥️</h2>
      <p>עבודה משרדית ממושכת, במיוחד מול מחשב, גורמת לרבים לסבול מכאבי צוואר. ישיבה סטטית, תנוחה לא נכונה ומסך שלא בגובה העיניים הם בין הגורמים המרכזיים. החדשות הטובות? תרגילים פשוטים שניתן לבצע גם ליד השולחן – יכולים לשפר את התחושה ולמנוע כאבים עתידיים.</p>
      
      <h3>למה כואב לנו הצוואר?</h3>
      <ul>
        <li>ישיבה ממושכת ללא תנועה גורמת למתח בשרירי הצוואר והכתפיים.</li>
        <li>מבט ממושך כלפי מטה (כמו לעבר מחשב נייד או סמארטפון) יוצר עומס על חוליות הצוואר.</li>
        <li>מתח נפשי תורם להתכווצות השרירים בצוואר ובשכמות.</li>
      </ul>
      
      <h3 class="exercises-title">🧘‍♀️ תרגילים מומלצים (ניתן לבצע גם מול השולחן)</h3>
      
      <div class="exercise-item">
        <h4>1. <strong>סיבובי כתפיים</strong></h4>
        <ul>
          <li>שחררו את הידיים לצדי הגוף.</li>
          <li>סובבו את הכתפיים אחורה בתנועה מעגלית איטית – 10 פעמים.</li>
          <li>חזרו על אותו הדבר בכיוון ההפוך.</li>
        </ul>
      </div>
      
      <div class="exercise-item">
        <h4>2. <strong>הטיית ראש לצדדים</strong></h4>
        <ul>
          <li>שבו זקוף.</li>
          <li>הטו את הראש באיטיות לאוזן ימין (בלי להרים את הכתף), החזיקו 15 שניות.</li>
          <li>חיזרו לאמצע ואז לצד שמאל.</li>
          <li>חזרו על כל צד 3 פעמים.</li>
        </ul>
      </div>
      
      <div class="exercise-item">
        <h4>3. <strong>סיבובי צוואר</strong></h4>
        <ul>
          <li>סובבו את הראש באיטיות במעגל שלם – 5 סיבובים לכל כיוון.</li>
          <li>הקפידו לא לבצע תנועה חדה או מהירה מדי.</li>
        </ul>
      </div>
      
      <div class="exercise-item">
        <h4>4. <strong>מתיחת סנטר (Chin Tuck)</strong></h4>
        <ul>
          <li>שבו זקוף והביטו קדימה.</li>
          <li>משכו את הסנטר מעט פנימה (כאילו יוצרים "סנטר כפול") והחזיקו 5 שניות.</li>
          <li>חזרו 10 פעמים.</li>
          <li>תרגיל זה מחזק את שרירי הצוואר העמוקים ותורם ליציבה נכונה.</li>
        </ul>
      </div>
      
      <div class="exercise-item">
        <h4>5. <strong>מתיחת טרפז עליון</strong></h4>
        <ul>
          <li>הניחו יד אחת על הצד ההפוך של הראש והטו בעדינות את הראש לאותו צד, עד שמורגשת מתיחה קלה.</li>
          <li>החזיקו כ־20 שניות, חיזרו על הצד השני.</li>
        </ul>
      </div>
      
      <h3 class="recommendations-title">📌 המלצות נוספות</h3>
      <ul class="recommendations-list">
        <li>הרימו את המסך לגובה העיניים.</li>
        <li>קחו הפסקות קצרות כל 30–45 דקות.</li>
        <li>שלבו תנועה – אפילו 2 דקות של הליכה או מתיחה בין משימות.</li>
        <li>הקפידו על ישיבה זקופה, עם תמיכה לגב התחתון.</li>
      </ul>
      
      <div class="sources">
        <h3>🩺 מקורות:</h3>
        <ul>
          <li>Harvard Health Publishing – Stretching and strengthening for neck pain</li>
          <li>Mayo Clinic – Neck pain: Causes and relief</li>
          <li>Physiopedia – Office ergonomics and posture</li>
        </ul>
      </div>
      
      <div class="conclusion">
        <h3>לסיכום</h3>
        <p>תרגול יומי של מספר דקות יכול לשפר את איכות החיים במידה ניכרת ולמנוע הצטברות כאבים כרוניים בצוואר ובשכמות. השקיעו בעצמכם – גם במהלך יום עבודה עמוס.</p>
      </div>
    </div>
  `,
      date: "15 באפריל, 2025",
      author: "ד\"ר יעל בן שטרית ",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "תרגילים ומתיחות"
    },
    {
      id: 2,
      title: "איך אוסטאופתיה יכולה לשפר את הפרודוקטיביות בעבודה",
      excerpt: "מחקרים מראים כי טיפולי אוסטאופתיה סדירים יכולים להגביר את הפרודוקטיביות של העובדים. גלו כיצד זה עובד.",
      fullContent: `
    <div class="article-full-content">
      <h2>איך אוסטאופתיה יכולה לשפר את הפרודוקטיביות בעבודה? 🧠💼</h2>
      
      <p>בעידן שבו עובדים יושבים שעות רבות מול מחשב, סובלים ממתח גופני ונפשי, ומתקשים לשמור על ריכוז – אוסטאופתיה מציעה פתרון הוליסטי, לא פולשני וללא תרופות. אבל איך בדיוק טיפול אוסטאופתי תורם <strong>לפרודוקטיביות של העובדים</strong>?</p>
      
      <div class="info-section">
        <h3>🩻 מהי אוסטאופתיה?</h3>
        <p>אוסטאופתיה היא שיטת טיפול ידנית, המזהה מגבלות תנועה, חוסר איזון בגוף ולחץ על רקמות – ומשחררת אותן בעזרת מגע עדין ומדויק. השיטה רואה את הגוף כמערכת שלמה ומאוזנת, שבה המבנה והתפקוד קשורים הדוקות זה לזה.</p>
      </div>
      
      <h3 class="benefits-title">🚀 כיצד זה משפר את התפקוד בעבודה?</h3>
      
      <div class="benefit-item">
        <h4>1. <strong>הפחתת כאבים – פחות הסחות דעת</strong></h4>
        <p>כאבי גב, צוואר, כתפיים וכאבי ראש – כולם תוצאה של ישיבה ממושכת או תנוחה לא נכונה. כאבים כרוניים מהווים גורם מרכזי להיעדרות מהעבודה ולירידה בפרודוקטיביות. ✅ <strong>טיפול אוסטאופתי קבוע מפחית את רמות הכאב</strong>, ומאפשר לעובדים לעבוד ברציפות ובריכוז גבוה יותר.</p>
      </div>
      
      <div class="benefit-item">
        <h4>2. <strong>שיפור זרימת הדם והחמצן למוח</strong></h4>
        <p>באוסטאופתיה ניתן לשפר את תנועתיות השרירים והעצמות סביב עמוד השדרה והצוואר. 🧠 התוצאה: <strong>שיפור בזרימת הדם למוח</strong>, שמוביל לערנות טובה יותר, זיכרון חד ותגובות מהירות.</p>
      </div>
      
      <div class="benefit-item">
        <h4>3. <strong>הפחתת סטרס נפשי ומתח שרירי</strong></h4>
        <p>עובדים רבים סובלים ממתח נפשי המתבטא בגוף – כאבי ראש, שרירים תפוסים, עייפות כללית. טיפול אוסטאופתי מסייע <strong>בהפחתת רמות הקורטיזול</strong> (הורמון הסטרס), בשחרור מתחים ומנוחה עמוקה. 🧘 העובד רגוע יותר – ומסוגל לתפקד טוב יותר לאורך היום.</p>
      </div>
      
      <div class="benefit-item">
        <h4>4. <strong>מניעת פציעות משרדיות</strong></h4>
        <p>אוסטאופתים מיומנים יכולים לזהות תבניות תנועה שגויות ולייעץ בשיפור ארגונומיה במשרד. 🪑 ייעוץ פשוט על כוונון גובה כיסא, זווית מסך או תרגילי מתיחה – <strong>יכול למנוע פציעות עתידיות</strong> ולשפר תפקוד מיידי.</p>
      </div>
      
      <div class="data-section">
        <h3>📈 מה אומרים הנתונים?</h3>
        <ul class="data-list">
          <li>מחקר צרפתי שבוצע בחברת CARI הראה ירידה של <strong>22.7% בהיעדרויות</strong> בעקבות הכנסת טיפולי אוסטאופתיה למקום העבודה (Perinetti & Bozzetto, <em>La Revue de l'Ostéopathie</em>).</li>
          <li>ב־75% מהמקרים שנסקרו, העובדים דיווחו כי הטיפול <strong>מנע מהם צורך לקחת ימי מחלה</strong>.</li>
          <li>לפי Neo Forma, משך ההיעדרות בעקבות כאבי גב <strong>התקצר בחצי</strong> לעומת עובדים שלא קיבלו טיפול.</li>
        </ul>
      </div>
      
      <div class="testimonial">
        <h3>💬 מה חברות מספרות?</h3>
        <blockquote>
          "מאז שהתחלנו עם טיפולי אוסטאופתיה שבועיים לעובדים, הדיווחים על כאבים ירדו משמעותית – וגם רמות שביעות הרצון הכללית עלו."
          <cite>— מנהלת משאבי אנוש, חברת הייטק בינלאומית.</cite>
        </blockquote>
      </div>
      
      <div class="conclusion">
        <h3>✅ לסיכום</h3>
        <p>אוסטאופתיה היא <strong>השקעה שמחזירה את עצמה</strong> – פחות כאבים, פחות היעדרויות, ריכוז גבוה יותר ועובדים מרוצים. 💡 שילוב טיפולים אוסטאופתיים במקום העבודה תורם לארגון חכם, בריא ויעיל יותר.</p>
      </div>
      
      <div class="sources">
        <h3>📚 מקורות:</h3>
        <ul>
          <li>Perinetti & Bozzetto, <em>La Revue de l'Ostéopathie</em> (2015)</li>
          <li>Neo Forma – השפעת האוסטאופתיה על עובדים</li>
          <li>Harvard Health – Manual therapy & productivity</li>
        </ul>
      </div>
    </div>
  `,
      date: "2 באפריל, 2025",
      author: "ד\"ר שרה קטורזה ",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "מחקרים חדשים"
    },
    {
      id: 3,
      title: "ארגונומיה במשרד: המדריך המלא",
      excerpt: "סידור נכון של סביבת העבודה יכול למנוע בעיות רבות. המדריך הזה יעזור לכם לארגן את המשרד בצורה ארגונומית.",
     fullContent: `
    <div class="article-full-content">
      <h2>🪑 ארגונומיה במשרד: המדריך המלא לישיבה נכונה ובריאות בעבודה</h2>
      
      <p>ישיבה ממושכת מול מחשב, תנוחות לא נכונות, מסך בגובה לא מותאם, מקלדת שממוקמת נמוך מדי – כל אלו יכולים לגרום לעומס מצטבר על הגב, הצוואר, העיניים והמפרקים.</p>
      
      <div class="highlight-box">
        <p>📌 החדשות הטובות? שיפור פשוט של סביבת העבודה בהתאם לעקרונות <strong>ארגונומיים</strong> יכול לשפר את איכות החיים בעבודה, להפחית כאבים ואף להגביר פרודוקטיביות.</p>
      </div>
      
      <div class="definition-box">
        <h3>🔍 מהי ארגונומיה?</h3>
        <p><strong>ארגונומיה</strong> היא תחום העוסק בהתאמת סביבת העבודה לאדם — ולא להפך. המטרה: להפחית עומסים מיותרים, לשפר נוחות ולמנוע פגיעות לטווח ארוך.</p>
      </div>
      
      <div class="guide-section">
        <h3>🖥️ עמדת מחשב נכונה – כך תעשו זאת נכון</h3>
        
        <div class="ergonomic-item">
          <h4>1. <strong>מסך</strong></h4>
          <ul>
            <li>הגובה: קצה המסך העליון צריך להיות <strong>בגובה העיניים</strong>.</li>
            <li>המרחק: 50–70 ס"מ מהפנים.</li>
            <li>אין להניח את המסך בצד – הוא חייב להיות <strong>מולכם בדיוק</strong>.</li>
          </ul>
          <div class="ergo-icon monitor-icon"></div>
        </div>
        
        <div class="ergonomic-item">
          <h4>2. <strong>כיסא</strong></h4>
          <ul>
            <li>כוונון גובה כך שהברכיים יהיו בזווית של 90°.</li>
            <li>תמיכה לגב התחתון (אפשר להוסיף כרית אורתופדית).</li>
            <li>רגליים מונחות שטוח על הקרקע – או על הדום.</li>
          </ul>
          <div class="ergo-icon chair-icon"></div>
        </div>
        
        <div class="ergonomic-item">
          <h4>3. <strong>מקלדת ועכבר</strong></h4>
          <ul>
            <li>מקלדת צריכה להיות בגובה המרפקים – כלומר, <strong>לא גבוהה מדי</strong>.</li>
            <li>המרפקים צמודים לגוף בזווית של 90°.</li>
            <li>השתמשו בתמיכת שורש כף היד למניעת עומס.</li>
          </ul>
          <div class="ergo-icon keyboard-icon"></div>
        </div>
      </div>
      
      <div class="movement-section">
        <h3>🔄 הפסקות ותנועה</h3>
        <p>גם העמדה הטובה בעולם <strong>אינה מספיקה אם יושבים ללא תזוזה</strong>.</p>
        <ul class="action-list">
          <li>קומו כל 30–45 דקות.</li>
          <li>בצעו מתיחות לצוואר, גב וכתפיים.</li>
          <li>לכו כמה צעדים, אפילו במשרד עצמו.</li>
        </ul>
        <p class="research-note">🕒 מחקר שפורסם ב־<em>British Journal of Sports Medicine</em> ממליץ על <strong>לפחות 2 שעות תנועה ביום</strong> לעובדי משרד, גם אם הם יושבים את שאר הזמן בתנוחה נכונה.</p>
      </div>
      
      <div class="tips-section">
        <h3>💡 טיפים נוספים</h3>
        <ul class="tips-list">
          <li>העדיפו מסך גדול עם תאורה איכותית – להפחתת מאמץ בעיניים.</li>
          <li>הימנעו מהחזקת טלפון בין הכתף לאוזן – השתמשו באוזניות או רמקול.</li>
          <li>בצעו <strong>תרגילים אוסטאופתיים או פיזיותרפיים</strong> קצרים לשחרור שרירים.</li>
        </ul>
      </div>
      
      <div class="benefits-business">
        <h3>📈 למה זה חשוב לחברות?</h3>
        <div class="benefits-grid">
          <div class="benefit-card">
            <span class="benefit-icon">🏥</span>
            <p>פחות כאבים → פחות היעדרויות.</p>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">⚡</span>
            <p>עובדים נינוחים יותר → תפוקה גבוהה יותר.</p>
          </div>
          <div class="benefit-card">
            <span class="benefit-icon">🏢</span>
            <p>השקעה בתנאים ארגונומיים → מיתוג כחברה שדואגת לעובדיה.</p>
          </div>
        </div>
      </div>
      
      <div class="sources">
        <h3>📚 מקורות:</h3>
        <ul>
          <li>Mayo Clinic – Office ergonomics: Your how-to guide</li>
          <li>Harvard Health – Posture and office ergonomics</li>
          <li>British Journal of Sports Medicine – Sitting time and health risk</li>
        </ul>
      </div>
      
      <div class="conclusion">
        <h3>🧾 לסיכום</h3>
        <p>ארגונומיה היא לא מותרות – אלא תנאי בסיס לעבודה בריאה ובטוחה. 💺 שינוי קטן אחד – יכול להוביל לשיפור משמעותי באיכות החיים שלכם.</p>
      </div>
    </div>
  `,
      date: "20 במרץ, 2025",
      author: "ד\"ר יעל בן שטרית ",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "ארגונומיה"
    },
    {
      id: 4,
      title: "כאבי גב תחתון: סיבות וטיפולים",
      excerpt: "כאבי גב תחתון הם תלונה נפוצה בקרב עובדי משרד. למדו על הסיבות העיקריות וכיצד טיפולי אוסטאופתיה יכולים לעזור.",
      fullContent: `
    <div class="article-full-content">
      <h2>כאבי גב תחתון: סיבות נפוצות וטיפולים יעילים 🧍‍♂️🩻</h2>
      
      <p>כאבי גב תחתון הם מהתלונות השכיחות ביותר בקרב מבוגרים – במיוחד בקרב עובדים משרדיים. לפי ארגון הבריאות העולמי, כ־80% מהאוכלוסייה יסבלו מכאבי גב בשלב כלשהו בחייהם. 🪑 סיבות רבות גורמות לכך – ויש גם מגוון פתרונות.</p>
      
      <div class="pain-causes">
        <h3>🔍 סיבות נפוצות לכאבי גב תחתון</h3>
        
        <div class="cause-item">
          <h4>1. <strong>ישיבה ממושכת ללא תמיכה לגב</strong></h4>
          <p>כאשר הגב התחתון אינו מקבל תמיכה (למשל בכיסא שאינו מותאם), נוצר עומס על החוליות והשרירים.</p>
          <div class="cause-icon sitting-icon"></div>
        </div>
        
        <div class="cause-item">
          <h4>2. <strong>יציבה לקויה</strong></h4>
          <p>שילוב של כתפיים שמוטות, כיפוף יתר קדימה או מסך שאינו בגובה העיניים – מעמיס על עמוד השדרה התחתון.</p>
          <div class="cause-icon posture-icon"></div>
        </div>
        
        <div class="cause-item">
          <h4>3. <strong>חולשה של שרירי הליבה (Core)</strong></h4>
          <p>שרירי הבטן והגב האמצעי תומכים בעמוד השדרה. כשהם חלשים, הגב התחתון סופג את כל העומס.</p>
          <div class="cause-icon core-icon"></div>
        </div>
        
        <div class="cause-item">
          <h4>4. <strong>מתח נפשי</strong></h4>
          <p>סטרס מתמשך גורם לשרירים בגב להתכווץ ולהישאר במתח כרוני.</p>
          <div class="cause-icon stress-icon"></div>
        </div>
        
        <div class="cause-item">
          <h4>5. <strong>פציעות קודמות או פריצת דיסק</strong></h4>
          <p>במקרים חמורים יותר, מדובר במצבים רפואיים מורכבים שיש לאבחן אצל מומחה.</p>
          <div class="cause-icon injury-icon"></div>
        </div>
      </div>
      
      <div class="treatments-section">
        <h3>🩺 איך ניתן לטפל?</h3>
        
        <div class="treatment-card">
          <div class="treatment-header">
            <span class="check-icon">✅</span>
            <h4>טיפול אוסטאופתי</h4>
          </div>
          <p>טיפול ידני המתמקד בשחרור מתחים, שיפור תנועתיות המפרקים והגברת זרימת הדם לאזור הפגוע. 💡 מתאים במיוחד לכאבים תפקודיים, לא חודרני וללא תרופות.</p>
        </div>
        
        <div class="treatment-card">
          <div class="treatment-header">
            <span class="check-icon">✅</span>
            <h4>פעילות גופנית מתונה</h4>
          </div>
          <p>הליכה יומית, תרגילי חיזוק לשרירי הליבה ויוגה – נמצאו כיעילים להפחתת כאבים.</p>
        </div>
        
        <div class="treatment-card">
          <div class="treatment-header">
            <span class="check-icon">✅</span>
            <h4>התאמה ארגונומית</h4>
          </div>
          <ul>
            <li>כיסא עם תמיכה לגב התחתון</li>
            <li>מסך בגובה עיניים</li>
            <li>הפסקות כל 30–45 דקות לעמידה ומתיחות</li>
          </ul>
        </div>
        
        <div class="treatment-card">
          <div class="treatment-header">
            <span class="check-icon">✅</span>
            <h4>טיפולים נוספים</h4>
          </div>
          <ul class="additional-treatments">
            <li>פיזיותרפיה</li>
            <li>דיקור סיני</li>
            <li>עיסוי רפואי</li>
            <li>טיפול קוגניטיבי-התנהגותי (בכאבים כרוניים)</li>
          </ul>
        </div>
      </div>
      
      <div class="exercises-section">
        <h3>🧘‍♀️ תרגילים מומלצים (לבצע בזהירות)</h3>
        
        <div class="exercises-grid">
          <div class="exercise-box">
            <h4><strong>שכיבה על הגב עם רגליים כפופות</strong></h4>
            <p>להניח ידיים על הבטן, לנשום עמוק להרפיית האזור.</p>
          </div>
          
          <div class="exercise-box">
            <h4><strong>הטיית אגן</strong></h4>
            <p>בשכיבה, ביצוע תנועה עדינה של הקשתת הגב וחזרתו למצב ניטרלי.</p>
          </div>
          
          <div class="exercise-box">
            <h4><strong>מתיחת ברך לחזה</strong></h4>
            <p>לשכב על הגב, להביא ברך אחת אל החזה ולהחזיק 20 שניות.</p>
          </div>
        </div>
        
        <div class="warning-note">
          <p><strong>חשוב</strong>: אין לבצע תרגילים הגורמים להחמרת הכאב. אם מופיעים סימפטומים כמו הקרנה לרגליים, נימול או חולשה – יש לפנות לרופא.</p>
        </div>
      </div>
      
      <div class="stats-section">
        <h3>📊 מה אומרים הנתונים?</h3>
        <ul class="stats-list">
          <li>לפי Mayo Clinic, פעילות גופנית מתונה יעילה יותר ממנוחה מלאה.</li>
          <li>מחקר של Harvard Health מצא כי חיזוק שרירי הליבה הפחית כאבי גב תחתון ב־45% מהמטופלים.</li>
          <li>ארגון הבריאות העולמי ממליץ על תרגול יומי וארגונומיה מתאימה כקו טיפול ראשון.</li>
        </ul>
      </div>
      
      <div class="sources">
        <h3>📚 מקורות:</h3>
        <ul>
          <li>Mayo Clinic – Low back pain</li>
          <li>Harvard Health – Relieving lower back pain</li>
          <li>NIH – Treatment guidelines for lower back pain</li>
        </ul>
      </div>
      
      <div class="conclusion">
        <h3>✅ לסיכום</h3>
        <p>כאבי גב תחתון אינם גזירת גורל. עם טיפול נכון, תרגול והקפדה על יציבה – ניתן להפחית את הכאב ולחזור לתפקוד מלא. 🧩 טיפול אוסטאופתי הוא דרך יעילה, טבעית ונטולת תופעות לוואי להתמודד עם כאב ממושך.</p>
      </div>
    </div>
  `,
      date: "5 במרץ, 2025",
      author: "ד\"ר שרה קטורזה ",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "טיפולים"
    },
    {
      id: 5,
      title: "המדריך לחברות: כיצד להטמיע תוכנית בריאות אוסטאופתית",
      excerpt: "המדריך הזה יעזור למנהלי משאבי אנוש להטמיע תוכנית אוסטאופתיה יעילה בארגון שלהם.",
      fullContent: `
<div class="article-full-content">
  <h2>🏢 המדריך לחברות: כיצד להטמיע תוכנית בריאות אוסטאופתית בארגון</h2>
  
  <p>ארגונים רבים מחפשים דרכים לשפר את רווחת העובדים, להפחית היעדרויות ולחזק את תחושת השייכות. אחת הדרכים האפקטיביות והחדשניות לכך היא <strong>שילוב טיפולי אוסטאופתיה במקום העבודה</strong> – תוכנית מניעתית, טיפולית ואישית, שזוכה לפופולריות גוברת בעולם העסקי.</p>
  
  <div class="highlight-box">
    <h3>📌 למה בכלל אוסטאופתיה בארגון?</h3>
    <ul>
      <li>✅ הפחתת ימי מחלה (בעיקר עקב כאבי גב וצוואר)</li>
      <li>✅ שיפור בתפקוד ובריכוז</li>
      <li>✅ תחושת הערכה של העובד כלפי המעסיק</li>
      <li>✅ טיפול מונע בשחיקה פיזית ונפשית</li>
      <li>✅ קידום תרבות של בריאות וwell-being בארגון</li>
    </ul>
  </div>
  
  <h3>🛠 שלבים להטמעה מוצלחת של התוכנית</h3>
  
  <div class="implementation-steps">
    <div class="step-item">
      <h4>1. <strong>אבחון ראשוני</strong></h4>
      <p>בשלב הראשון, חשוב להבין מה הצרכים של הארגון:</p>
      <ul>
        <li>מהם תחומי העבודה? (משרד, ייצור, הייטק, שירותים)</li>
        <li>אילו תלונות פיזיות חוזרות?</li>
        <li>האם העובדים מודעים לחשיבות הארגונומיה?</li>
      </ul>
      <p class="data-note">📊 ניתן לבצע סקר אנונימי קצר לעובדים או לקיים שיחות עם מנהלי צוותים.</p>
    </div>
    
    <div class="step-item">
      <h4>2. <strong>בחירת מטפל מוסמך</strong></h4>
      <p>בחרו אוסטאופת מוסמך בעל ניסיון בעבודה עם ארגונים. 🔍 ודאו תעודות הכשרה, ניסיון קליני, גישה טיפולית מקצועית ונעימה.</p>
    </div>
    
    <div class="step-item">
      <h4>3. <strong>קביעת מודל הפעולה</strong></h4>
      <p>ישנם כמה מודלים מקובלים:</p>
      <ul>
        <li>טיפולים אישיים (15–30 דקות) על פי קביעת העובדים</li>
        <li>סבבים שבועיים/דו־שבועיים של ביקורי מטפל</li>
        <li>סדנאות קבוצתיות (תרגול, ארגונומיה, מתיחות)</li>
        <li>שילוב של טיפול + ייעוץ סביבתי (התאמת עמדות עבודה)</li>
      </ul>
    </div>
    
    <div class="step-item">
      <h4>4. <strong>יצירת שיתוף פעולה עם משאבי אנוש</strong></h4>
      <p>הצלחה של התוכנית תלויה במעורבות מחלקת HR:</p>
      <ul>
        <li>פרסום פנים־ארגוני על השירות</li>
        <li>הקצאת חדר טיפולים מתאים</li>
        <li>ניהול רשימת תורים ודיווח תקופתי</li>
      </ul>
    </div>
    
    <div class="step-item">
      <h4>5. <strong>מעקב והערכת אפקטיביות</strong></h4>
      <p>📈 לאחר מספר חודשים, יש למדוד:</p>
      <ul>
        <li>שינוי בהיעדרויות (אולי ירידה של 20–30%)</li>
        <li>שביעות רצון העובדים</li>
        <li>תחושת well-being כללית</li>
      </ul>
      <p>ניתן גם לשלב <strong>דו"חות מעקב אנונימיים</strong> מהמטפל – לצורכי שיפור התהליך.</p>
    </div>
  </div>
  
  <div class="info-section">
    <h3>💬 טיפים חשובים להצלחה</h3>
    <ul>
      <li>שמרו על <strong>רצף טיפולי</strong> – גם טיפול חודשי קבוע עדיף מאירועים חד־פעמיים.</li>
      <li>שלבו <strong>הסברה ארגונומית</strong> – שינויים קטנים בתחנות העבודה עושים הבדל גדול.</li>
      <li>היו <strong>שקופים מול העובדים</strong> – הסבירו מהי אוסטאופתיה, למי זה מתאים ומה ההליך.</li>
    </ul>
  </div>
  
  <div class="benefits-business">
    <h3>📊 יתרונות כלכליים לארגון</h3>
    <div class="benefits-grid">
      <div class="benefit-card">
        <span class="benefit-icon">💰</span>
        <p>הפחתת עלויות ימי מחלה וטיפולים רפואיים</p>
      </div>
      <div class="benefit-card">
        <span class="benefit-icon">⚡</span>
        <p>הגברת פרודוקטיביות ומורל עובדים</p>
      </div>
      <div class="benefit-card">
        <span class="benefit-icon">🏆</span>
        <p>יתרון תחרותי בגיוס ושימור עובדים</p>
      </div>
    </div>
  </div>
  
  <div class="testimonial">
    <h3>💬 מה חברות מספרות</h3>
    <blockquote>
      "הטמענו תוכנית אוסטאופתית לעובדים לפני שנה, וראינו ירידה של 27% בהיעדרויות על רקע כאבי גב וצוואר. ההשקעה החזירה את עצמה תוך פחות מ-6 חודשים."
      <cite>— מנהלת משאבי אנוש, חברת תוכנה, תל אביב</cite>
    </blockquote>
  </div>
  
  <div class="sources">
    <h3>📚 מקורות:</h3>
    <ul>
      <li><em>La Revue de l'Ostéopathie</em> – מחקר על השפעת אוסטאופתיה בארגונים</li>
      <li>Neo-Forma.fr – תוכניות בריאות בארגון</li>
      <li>Osteopathy and workplace productivity – Harvard Health</li>
    </ul>
  </div>
  
  <div class="conclusion">
    <h3>✅ לסיכום</h3>
    <p>תוכנית אוסטאופתית במקום העבודה אינה רק הטבה – היא השקעה אסטרטגית ברווחת העובדים. היא מחזקת את הבריאות, מגבירה פרודוקטיביות ומשדרת לעובדים: <em>"אנחנו רואים אתכם ודואגים לכם."</em></p>
  </div>
</div>
`,
      date: "15 בפברואר, 2025",
      author:  "ד\"ר יעל בן שטרית ",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "מדריכים לחברות"
    },
    {
      id: 6,
      title: "מה ההבדל בין אוסטאופתיה, פיזיותרפיה וכירופרקטיקה?",
      excerpt: "רבים מתבלבלים בין התחומים השונים. במאמר זה נסביר את ההבדלים העיקריים ומתי כדאי לבחור בכל אחד מהם.",
      fullContent: `
<div class="article-full-content">
  <h2>מה ההבדל בין אוסטאופתיה, פיזיותרפיה וכירופרקטיקה? 🩺💆‍♂️</h2>
  
  <p>שלושת התחומים – <strong>אוסטאופתיה</strong>, <strong>פיזיותרפיה</strong> ו־<strong>כירופרקטיקה</strong> – עוסקים בטיפול בגוף דרך גישה ידנית ואבחון תפקודי, אך יש ביניהם הבדלים בגישה, בהכשרה ובשיטת הטיפול.</p>
  
  <div class="info-section">
    <h3>🧠 ההבדלים המרכזיים:</h3>
    <p>להלן השוואה מפורטת בין שלושת התחומים המקצועיים:</p>
  </div>
  
  <div class="comparison-section">
    <div class="treatment-card">
      <div class="treatment-header">
        <span class="check-icon">🟢</span>
        <h4><strong>אוסטאופתיה</strong></h4>
      </div>
      <ul>
        <li><strong>מהות הטיפול:</strong> שיטה הוליסטית המתייחסת לגוף כמכלול</li>
        <li><strong>מטרות עיקריות:</strong> שיפור תנועתיות, איזון מבני, זרימת נוזלים</li>
        <li><strong>טכניקות:</strong> מגע עדין, מניפולציות, שחרור רקמות רכות, איזון מערכת העצבים</li>
        <li><strong>הכשרה:</strong> הכשרה ארוכה ומעמיקה (בישראל: לימודים פרטיים או בחו"ל)</li>
      </ul>
    </div>
    
    <div class="treatment-card">
      <div class="treatment-header">
        <span class="check-icon">🔵</span>
        <h4><strong>פיזיותרפיה</strong></h4>
      </div>
      <ul>
        <li><strong>מהות הטיפול:</strong> טיפול בשיקום תנועה ותפקוד פיזי</li>
        <li><strong>מטרות עיקריות:</strong> שיפור יכולת תפקודית, שיקום לאחר פציעה/ניתוח</li>
        <li><strong>טכניקות:</strong> תרגילים אקטיביים, עזרים פיזיים, טיפולים חשמליים</li>
        <li><strong>הכשרה:</strong> תואר ראשון חובה, מוסדר ע"י משרד הבריאות</li>
      </ul>
    </div>
    
    <div class="treatment-card">
      <div class="treatment-header">
        <span class="check-icon">🔴</span>
        <h4><strong>כירופרקטיקה</strong></h4>
      </div>
      <ul>
        <li><strong>מהות הטיפול:</strong> מתמקדת במערכת העצבים והעמוד שדרה</li>
        <li><strong>מטרות עיקריות:</strong> תיקון סובלוקציות (שיבושים בעמוד השדרה), הפחתת כאב</li>
        <li><strong>טכניקות:</strong> מניפולציות מהירות בעמוד השדרה, "קנאקים"</li>
        <li><strong>הכשרה:</strong> הכשרה אקדמית ייעודית, לרוב בחו"ל</li>
      </ul>
    </div>
  </div>
  
  <div class="highlight-box">
    <h3>🧭 איך לבחור?</h3>
    <ul class="recommendations-list">
      <li><strong>לכאבי גב כרוניים, צוואר, עייפות, בעיות עיכול או מתחים כלליים</strong> → אוסטאופתיה.</li>
      <li><strong>לשיקום תנועה אחרי פציעה, ניתוח או שבץ</strong> → פיזיותרפיה.</li>
      <li><strong>לטיפול ממוקד בעמוד השדרה ובעיות עצביות ספציפיות</strong> → כירופרקטיקה.</li>
    </ul>
  </div>
  
  <div class="summary-table">
    <h3>🧩 לסיכום:</h3>
    <div class="table-container">
      <table>
        <tr>
          <th>אם אתה מחפש...</th>
          <th>בחר ב...</th>
        </tr>
        <tr>
          <td>טיפול כולל שמתייחס לגוף כמערכת אחת</td>
          <td>🟢 <strong>אוסטאופתיה</strong></td>
        </tr>
        <tr>
          <td>תרגילים שיקומיים לשיפור תנועה</td>
          <td>🔵 <strong>פיזיותרפיה</strong></td>
        </tr>
        <tr>
          <td>מיקוד בעמוד השדרה עם מניפולציות</td>
          <td>🔴 <strong>כירופרקטיקה</strong></td>
        </tr>
      </table>
    </div>
  </div>
  
  <div class="testimonial">
    <h3>💬 ומה אומרים המטופלים?</h3>
    <blockquote>
      "התחלתי בטיפולים כירופרקטיים, אך מצאתי שהאוסטאופתיה נותנת לי תוצאות יותר מקיפות ולטווח ארוך. הפיזיותרפיה עזרה לי להתמיד בתרגול היומיומי."
      <cite>— דן, 42, סובל מכאבי גב כרוניים</cite>
    </blockquote>
  </div>
  
  <div class="sources">
    <h3>📚 מקורות:</h3>
    <ul>
      <li>Journal of Manual & Manipulative Therapy – Comparing manual therapy approaches</li>
      <li>Cleveland Clinic – Differences Between Osteopathy, Physical Therapy and Chiropractic</li>
      <li>American Osteopathic Association – Understanding manual therapy options</li>
    </ul>
  </div>
  
  <div class="conclusion">
    <h3>✅ לסיכום</h3>
    <p>אין תשובה אחת נכונה לכולם. לכל שיטה יתרונות ייחודיים, ורבים מהמטופלים מוצאים תועלת בשילוב של מספר גישות. התייעצו עם הרופא המטפל שלכם לגבי האופציה המתאימה ביותר למצבכם.</p>
  </div>
</div>`,
      date: "1 בפברואר, 2025",
      author: "ד\"ר שרה קטורזה ",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "מידע כללי"
    },
    // Nouveaux articles suggérés, traduits en hébreu
    {
      id: 7,
      title: "עקרונות היסוד של האוסטאופתיה בפשטות",
      excerpt: "גלו את יסודות האוסטאופתיה, גישה טיפולית ידנית המתייחסת לגוף כמערכת מקושרת אחת להשבת האיזון והבריאות.",
      fullContent:` <div class="article-full-content">
  <h2>✋ עקרונות היסוד של האוסטאופתיה – בפשטות</h2>
  
  <p>האוסטאופתיה היא שיטת טיפול ידנית המתמקדת בזיהוי ושחרור מגבלות תנועה בגוף, מתוך תפיסה שהגוף הוא מערכת אחת שלמה, המסוגלת לרפא את עצמה כאשר התנאים מאפשרים זאת.</p>
  
  <p>הטיפול אינו פולשני, אינו כרוך בתרופות, והוא מתאים למגוון רחב של מצבים – כאבים כרוניים, מתח נפשי, בעיות עיכול, כאבי גב, צוואר ועוד.</p>
  
  <div class="info-section">
    <h3>🧩 ארבעת עקרונות היסוד של האוסטאופתיה</h3>
  </div>
  
  <div class="benefit-item">
    <h4>1. <strong>הגוף הוא יחידה אחת שלמה</strong></h4>
    <p>האוסטאופתיה רואה את הגוף – כולל השרירים, השלד, העצבים, האיברים הפנימיים והנפש – כמערכת אחת. ⚙️ לכן, בעיה במקום אחד יכולה להשפיע על אזור אחר (למשל, מגבלה באגן תשפיע על הצוואר).</p>
  </div>
  
  <div class="benefit-item">
    <h4>2. <strong>יש קשר הדוק בין מבנה לתפקוד</strong></h4>
    <p>כאשר איבר או רקמה אינם נעים בחופשיות (למשל, חוליה תקועה או מתח בשריר), תפקודם נפגע – ולהפך. 🧠 טיפול במבנה (דרך מגע) משפיע גם על התפקוד (כמו נשימה, עיכול, תנועה).</p>
  </div>
  
  <div class="benefit-item">
    <h4>3. <strong>לגוף יש יכולת ריפוי טבעית</strong></h4>
    <p>הגוף שואף לאיזון. כאשר משחררים חסימות, זרימת הדם משתפרת, מערכת העצבים מתאזנת, והגוף <strong>מרפא את עצמו</strong> בצורה יעילה יותר.</p>
  </div>
  
  <div class="benefit-item">
    <h4>4. <strong>הטיפול מבוסס על אבחון אישי ותנועה</strong></h4>
    <p>האוסטאופת בודק את תנועת הגוף, מקשיב למטופל, מאתר מגבלות פיזיות – ומתאים את הטיפול לצרכים האישיים. ✋ אין "פרוטוקול קבוע" – כל טיפול מותאם לאדם עצמו.</p>
  </div>
  
  <h3 class="benefits-title">💬 למי זה מתאים?</h3>
  <ul class="recommendations-list">
    <li>כאבי גב, צוואר וכתפיים</li>
    <li>כאבי ראש ומיגרנות</li>
    <li>מתח נפשי, עייפות כרונית</li>
    <li>בעיות עיכול, נשימה</li>
    <li>הריון, שיקום לאחר לידה</li>
    <li>ילדים, תינוקות, מבוגרים</li>
  </ul>
  
  <p>🧑‍⚕️ אוסטאופתיה מתאימה לרוב האנשים, אך חשוב לוודא שהמטפל מוסמך ומנוסה.</p>
  
  <div class="sources">
    <h3>📚 מקורות:</h3>
    <ul>
      <li><em>General Osteopathic Council (UK)</em> – What is osteopathy?</li>
      <li><em>Harvard Health</em> – The role of manual therapy in health</li>
      <li><em>Sutherland Cranial Teaching Foundation</em> – Principles of Osteopathy</li>
    </ul>
  </div>
  
  <div class="conclusion">
    <h3>✅ לסיכום</h3>
    <p>האוסטאופתיה מציעה דרך טבעית ועדינה לעזור לגוף להגיע לאיזון – דרך מגע, הקשבה ותנועה. 👐 כשנותנים לגוף את התנאים – הוא יודע לרפא את עצמו.</p>
  </div>
</div>`,
      date: "10 במאי, 2025", // Date fictive
      author:  "ד\"ר יעל בן שטרית ", // Auteur fictif
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "מידע כללי"
    },
    {
      id: 8,
      title: "כיצד אוסטאופתיה יכולה להקל על כאבי גב הקשורים לעבודה",
      excerpt: "שעות ארוכות בישיבה מול שולחן עלולות לגרום לכאבי גב. למדו כיצד אוסטאופתיה מטפלת בשורש הבעיה להקלה מתמשכת.",
      fullContent: `
<div id="fullcontent-8" class="article-full-content">
  <h2>🪑 כיצד אוסטאופתיה יכולה להקל על כאבי גב הקשורים לעבודה?</h2>
  
  <p>כאבי גב הקשורים לעבודה – ובעיקר <strong>כאבי גב תחתון וצוואר</strong> – הפכו לתופעה נפוצה בעידן העבודה המשרדית. על פי ארגון הבריאות העולמי (WHO), מדובר בגורם מספר 1 לנכות תפקודית בעולם המערבי.</p>
  
  <div class="highlight-box">
    <p>📉 החדשות הטובות: טיפול אוסטאופתי מציע הקלה יעילה, טבעית ונטולת תרופות.</p>
  </div>
  
  <h3>🔍 מה גורם לכאבי גב בעבודה?</h3>
  <ul>
    <li>ישיבה ממושכת מול מחשב ללא תנועה</li>
    <li>כיסאות לא ארגונומיים (ללא תמיכה לגב התחתון)</li>
    <li>לחץ נפשי המוביל למתח שרירי</li>
    <li>תנועות חוזרות (למשל בהרמה או הקלדה)</li>
    <li>היעדר פעילות גופנית</li>
  </ul>
  
  <div class="info-section">
    <p>🧠 כל אלו יוצרים עומס על עמוד השדרה, שרירי הגב, הדיסקים והעצבים.</p>
  </div>
  
  <h3>✋ איך אוסטאופתיה עוזרת?</h3>
  
  <div class="benefit-item">
    <h4>1. <strong>שחרור מגבלות תנועה</strong></h4>
    <p>האוסטאופת בודק את עמוד השדרה, האגן, הצלעות והצוואר – ומאתר אזורים "תקועים" או לא מאוזנים. 🔧 באמצעות מגע מדויק ועדין, הוא משחרר עומסים ומשפר את תנועת המפרקים והרקמות.</p>
  </div>
  
  <div class="benefit-item">
    <h4>2. <strong>הפחתת מתח בשרירים ובעצבים</strong></h4>
    <p>כאבי גב נובעים לעיתים מלחץ על עצבים (כמו סיאטיקה) או התכווצות שרירים עמוקים. האוסטאופת יודע להרפות אזורים אלה, <strong>להוריד מתח ממערכת העצבים</strong> ולהחזיר תחושת הקלה מיידית.</p>
  </div>
  
  <div class="benefit-item">
    <h4>3. <strong>שיפור זרימת דם וחמצן לאזור הפגוע</strong></h4>
    <p>על ידי שיפור התנועתיות והנשימה – הגוף מזרים דם וחומרי הזנה טובים יותר לאזורים כואבים. 🩸 זה תורם לריפוי טבעי של הרקמות.</p>
  </div>
  
  <div class="benefit-item">
    <h4>4. <strong>התאמה ארגונומית וייעוץ</strong></h4>
    <p>האוסטאופת נותן לעובד גם כלים פרקטיים:</p>
    <ul>
      <li>התאמת גובה כיסא/מסך</li>
      <li>תרגילים לשחרור בעבודה</li>
      <li>הדרכה לישיבה נכונה</li>
    </ul>
  </div>
  
  <h3>📚 מחקרים ועדויות</h3>
  <div class="data-section">
    <ul>
      <li>מחקר שבוצע בצרפת (CARI) מצא כי עובדים שקיבלו טיפול אוסטאופתי <strong>דיווחו על ירידה בכאב ושיפור בתפקוד יומיומי</strong> (Perinetti &amp; Bozzetto, 2015).</li>
      <li>מאמר שפורסם ב־<em>British Journal of Sports Medicine</em> הדגיש כי <strong>התערבות ידנית משולבת עם תרגול מותאם</strong> הובילה לירידה משמעותית בכאבי גב תחתון.</li>
      <li>לפי Harvard Medical School, <strong>טיפול ידני בעמוד השדרה</strong> הוא אחת השיטות היעילות ביותר להפחתת כאבים לא ספציפיים בגב.</li>
    </ul>
  </div>
  
  <h3>🧑‍💼 למי זה מתאים?</h3>
  <ul class="recommendations-list">
    <li>עובדים משרדיים עם כאבי גב או צוואר</li>
    <li>עובדים במפעלים עם תנועות חוזרות</li>
    <li>מנהלים בכירים עם מתח נפשי</li>
    <li>נשים לאחר לידה או בעבודה ישיבה</li>
  </ul>
  
  <div class="info-section">
    <p>הטיפול מותאם אישית ואינו כואב. מתאים גם כטיפול מונע ולא רק במצבי כאב.</p>
  </div>
  
  <div class="conclusion">
    <h3>✅ לסיכום</h3>
    <p>אוסטאופתיה היא כלי יעיל, מדויק ואישי להתמודד עם כאבי גב הקשורים לעבודה.</p>
    <p>📈 עובדים שטופלו דיווחו על ירידה בכאב, חזרה לתפקוד מלא, ושיפור משמעותי באיכות החיים.</p>
  </div>
  
  <div class="sources">
    <h3>📎 מקורות:</h3>
    <ul>
      <li>Perinetti &amp; Bozzetto (2015) – <em>La Revue de l'Ostéopathie</em></li>
      <li>Harvard Health – Treating back pain with spinal manipulation</li>
      <li>British Journal of Sports Medicine – Manual therapy for low back pain</li>
      <li>Mayo Clinic – Low back pain: Symptoms and treatment</li>
    </ul>
  </div>
</div>
`,
      date: "12 במאי, 2025", // Date fictive
      author: "ד\"ר שרה קטורזה ",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "טיפולים"
    },
    {
      id: 9,
      title: "אוסטאופתיה בעסק: השקעה משתלמת בבריאות העובדים",
      excerpt: "הצעת טיפולי אוסטאופתיה במקום העבודה מביאה יתרונות רבים למעסיקים ולעובדים, מהפחתת היעדרויות ועד שיפור הרווחה הכללית.",
      fullContent:`
<div class="article-full-content">
  <h2>🏢 אוסטאופתיה בעסק: השקעה משתלמת בבריאות העובדים</h2>
  
  <p>בריאות העובדים היא לא רק ערך אנושי – היא גם מנוע לצמיחה עסקית. ארגונים שמטמיעים תוכניות בריאות מתקדמות, ובמיוחד <strong>טיפולי אוסטאופתיה במקום העבודה</strong>, מדווחים על עובדים בריאים, יעילים ומרוצים יותר – והחזר השקעה (ROI) מובהק.</p>
  
  <div class="highlight-box">
    <h3>✅ למה זה משתלם לעסק?</h3>
  </div>
  
  <div class="benefit-item">
    <h4>1. <strong>ירידה בהיעדרויות</strong></h4>
    <p>עובדים שסובלים מכאבי גב, צוואר או מתחים – נוטים לקחת יותר ימי מחלה. אוסטאופתיה מטפלת במקור הבעיה, ולא רק בסימפטומים – וכך מצמצמת את ההיעדרות.</p>
    <p class="data-note"><strong>נתון</strong>: לפי מחקר של La Revue de l'Ostéopathie, הכנסת טיפולי אוסטאופתיה בחברה הפחיתה היעדרויות ב־22.7%.</p>
  </div>
  
  <div class="benefit-item">
    <h4>2. <strong>עלייה בפרודוקטיביות</strong> 🚀</h4>
    <p>כאשר הגוף משוחרר מכאב – המיקוד, האנרגיה והיכולת לחשוב בבהירות משתפרים. <strong>עובד בלי כאב = עובד מרוכז, מהיר ויעיל יותר.</strong></p>
  </div>
  
  <div class="benefit-item">
    <h4>3. <strong>שיפור במורל ובשביעות רצון</strong> 🙂</h4>
    <p>תוכנית כזו משדרת לעובדים: <em>"אנחנו רואים אתכם ודואגים לכם."</em> התחושה הזו מתורגמת לנאמנות גבוהה, מוטיבציה וחוויית עובד חיובית.</p>
  </div>
  
  <div class="benefit-item">
    <h4>4. <strong>מניעת בעיות – במקום לטפל כשהן חמורות</strong> 💡</h4>
    <p>הטיפול האוסטאופתי מזהה בעיות בתנועה או יציבה <strong>לפני שהן מתפרצות לכאב</strong> – מה שחוסך כסף וזמן יקר בהמשך.</p>
  </div>
  
  <h3>🛠 איך זה עובד בפועל?</h3>
  <p>הטמעה של שירות אוסטאופתי לעובדים יכולה לכלול:</p>
  
  <div class="implementation-steps">
    <div class="step-item">
      <h4><strong>טיפולים אישיים קצרים (15–30 דק')</strong></h4>
      <p>פגישות טיפוליות אישיות בשעות העבודה, עם אוסטאופת מקצועי במשרדי החברה.</p>
    </div>
    
    <div class="step-item">
      <h4><strong>סדנאות קבוצתיות</strong></h4>
      <p>הדרכות לשחרור מתחים, תרגול ארגונומי והרצאות על בריאות במקום העבודה.</p>
    </div>
    
    <div class="step-item">
      <h4><strong>ייעוץ לתכנון סביבת עבודה נכונה</strong></h4>
      <p>בדיקות והתאמות של גובה שולחן, מסך, כיסאות ואביזרים ארגונומיים נוספים.</p>
    </div>
    
    <div class="step-item">
      <h4><strong>מעקב תקופתי</strong></h4>
      <p>הפקת דו"חות כוללניים (אנונימיים) על מצב בריאות העובדים והתקדמותם.</p>
    </div>
  </div>
  
  <div class="info-section">
    <h3>🕒 תדירות מומלצת</h3>
    <p>ניתן לבצע טיפולים אחת לשבוע, אחת לשבועיים או לפי צורך – בחדר ייעודי בארגון או דרך שירות נייד.</p>
  </div>
  
  <div class="stats-section">
    <h3>📈 כמה זה עולה – וכמה זה מחזיר?</h3>
    <ul class="stats-list">
      <li>עלות טיפול ממוצע: כ־250–300 ₪ לעובד (ניתן לעסק מתמחר כחבילה)</li>
      <li>חיסכון ממוצע לעסק כולל:
        <ul>
          <li>פחות ימי מחלה</li>
          <li>פחות פציעות/ביטוחים</li>
          <li>עובדים שנשארים לאורך זמן</li>
        </ul>
      </li>
      <li>לפי נתוני חברות בינ"ל, כל שקל שמושקע בבריאות העובדים מחזיר בין <strong>2.5 ל־4 שקלים</strong> בטווח של שנה.</li>
    </ul>
  </div>
  
  <div class="testimonial">
    <h3>💬 תגובות ממשתמשים בתוכנית</h3>
    <blockquote>
      "מאז שהכנסנו את טיפולי האוסטאופתיה לחברה, הירידה בהיעדרויות הייתה דרמטית. העובדים מרגישים שאנחנו משקיעים בהם, וזה חוזר אלינו בפרודוקטיביות גבוהה יותר."
      <cite>— מנהלת משאבי אנוש, חברת הייטק בינלאומית</cite>
    </blockquote>
  </div>
  
  <div class="sources">
    <h3>📚 מקורות:</h3>
    <ul>
      <li><em>La Revue de l'Ostéopathie</em> (2015) – מחקר על אוסטאופתיה בארגון CARI</li>
      <li>Neo Forma – תוכניות אוסטאופתיה לארגונים</li>
      <li>Harvard Health – <em>Workplace wellness & manual therapy impact</em></li>
    </ul>
  </div>
  
  <div class="conclusion">
    <h3>🧾 לסיכום</h3>
    <p>אוסטאופתיה במקום העבודה היא הרבה מעבר לפינוק – זו <strong>השקעה חכמה</strong> שתורמת לבריאות העובד ולרווחיות העסק. היא מאפשרת להפוך את מקום העבודה לסביבה <strong>בריאה, מודעת ומקדמת</strong>, ששמה את האדם במרכז.</p>
  </div>
</div>
`,
      date: "14 במאי, 2025", // Date fictive
      author:  "ד\"ר יעל בן שטרית ", 
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "מדריכים לחברות"
    }
  ];

  // Catégories pour le filtre latéral
  const categories = [
    "הכל",
    "תרגילים ומתיחות",
    "מחקרים חדשים",
    "ארגונומיה",
    "טיפולים",
    "מדריכים לחברות",
    "מידע כללי"
  ];

  // Fonction pour vérifier si un article est étendu
  const isArticleExpanded = (id) => expandedArticles.includes(id);

  // Fonction pour étendre ou réduire un article
  const toggleArticleExpansion = (id) => {
    if (isArticleExpanded(id)) {
      // Si l'article est déjà étendu, on le retire de la liste (réduire)
      setExpandedArticles(expandedArticles.filter(articleId => articleId !== id));
    } else {
      // Si l'article n'est pas étendu, on l'ajoute à la liste (étendre)
      setExpandedArticles([...expandedArticles, id]);
    }
  };

  // Filtrer les articles par catégorie
  const filteredPosts = activeCategory === "הכל"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Optionnel : réduire tous les articles quand on change de catégorie
    setExpandedArticles([]);
  };

  return (
    <div className="blog-page rtl">
      <section className="blog-hero">
        <div className="blog-container-full">
          <div className="blog-hero-content">
            <h1 className="blog-title">הבלוג שלנו</h1>
            <p className="blog-subtitle">
              מאמרים, טיפים ומחקרים עדכניים בתחום האוסטאופתיה במקום העבודה
            </p>
          </div>
        </div>
      </section>

      <section className="blog-content">
        <div className="blog-container-full blog-container">
          {/* Colonne latérale (Sidebar) - Peut rester largement inchangée */}
          <div className="blog-sidebar">
            {/* Section de recherche */}
            <div className="blog-search">
              <h3>חיפוש</h3>
              <div className="search-box">
                <input type="text" placeholder="חיפוש מאמרים..." />
                <button className="search-button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>

            {/* Section des catégories */}
            <div className="blog-categories">
              <h3>קטגוריות</h3>
              <ul className="category-list">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className={category === activeCategory ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault(); // Empêcher le rechargement de la page
                        handleCategoryChange(category);
                      }}
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section des articles populaires */}
             <div className="recent-posts">
              <h3>מאמרים פופולריים</h3>
              <ul className="recent-posts-list">
                {/* Affiche les 3 premiers articles, vous pourriez vouloir une autre logique pour "populaire" */}
                {blogPosts.slice(0, 3).map(post => (
                  // Note: Ici les liens pourraient soit naviguer (si vous gardez des pages dédiées)
                  // soit déclencher l'expansion de l'article sur cette page (moins courant pour "populaire")
                  // Pour l'instant, les liens sont désactivés ou peuvent naviguer vers une page si elle existe.
                  <li key={post.id} className="recent-post-item">
                    <div className="recent-post-image">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="recent-post-info">
                       {/* Modifier le lien ici si vous voulez qu'il déclenche l'expansion sur la même page */}
                       {/* Par exemple: <h4 onClick={() => toggleArticleExpansion(post.id)} style={{cursor: 'pointer'}}>{post.title}</h4> */}
                       {/* Ou garder le lien si vous avez une page dédiée /blog/:id */}
                      <h4>{post.title}</h4>
                      <span className="post-date">{post.date}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>


            {/* Section d'abonnement à la newsletter dans la sidebar */}
            <div className="subscribe-box">
              <h3>הירשמו לניוזלטר שלנו</h3>
              <p>קבלו טיפים וחדשות מעולם האוסטאופתיה ישירות לתיבת הדואר</p>
              <form className="subscribe-form">
                <input type="email" placeholder="הזינו את כתובת המייל שלכם" required />
                <button type="submit" className="btn-subscribe">הרשמה</button>
              </form>
            </div>
          </div>

          {/* Grille des articles de blog */}
          <div className="blog-posts">
            <div className="blog-posts-grid">
              {filteredPosts.map(post => (
                <article key={post.id} className={`blog-post-card ${isArticleExpanded(post.id) ? 'expanded' : ''}`}> {/* Ajoute une classe 'expanded' si l'article est étendu */}
                  <div className="post-image">
                    <img src={post.image} alt={post.title} />
                    <span className="post-category">{post.category}</span>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <span className="post-date"><i className="far fa-calendar-alt"></i> {post.date}</span>
                      <span className="post-author"><i className="far fa-user"></i> {post.author}</span>
                    </div>
                    <h2 className="post-title">{post.title}</h2>

                    {/* Afficher l'extrait ou le contenu complet selon l'état */}
                    {isArticleExpanded(post.id) ? (
                      // Utiliser dangerouslySetInnerHTML pour afficher le HTML du contenu complet
                      <div className="full-content" dangerouslySetInnerHTML={{ __html: post.fullContent }}></div>
                    ) : (
                      <p className="post-excerpt">{post.excerpt}</p>
                    )}

                    {/* Bouton "Lire la suite" ou "Réduire" */}
                    {isArticleExpanded(post.id) ? (
                      <button
                        className="read-more reduce-button" // Utilise la classe read-more pour le style de base, ajoute une classe spécifique pour réduire
                        onClick={() => toggleArticleExpansion(post.id)}
                      >
                        הצג פחות <i className="fas fa-long-arrow-alt-right"></i> {/* Icône inversée pour "Réduire" */}
                      </button>
                    ) : (
                      <button
                        className="read-more" // Utilise la classe existante pour "Lire la suite"
                        onClick={() => toggleArticleExpansion(post.id)}
                      >
                        קראו עוד <i className="fas fa-long-arrow-alt-left"></i>
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination (reste en place si vous avez besoin de naviguer entre les pages d'articles) */}
            <div className="pagination">
              <ul>
                <li><a href="#" className="active">1</a></li>
                {/* Ajoutez plus de pages ici si nécessaire */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section d'abonnement à la newsletter en bas de page */}
      <section className="blog-newsletter">
         <div className="blog-container-full">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h2>הישארו מעודכנים</h2>
              <p>הירשמו לניוזלטר שלנו וקבלו טיפים, מאמרים ועדכונים ישירות לתיבת המייל</p>
            </div>
            <form className="newsletter-form">
              <input type="email" placeholder="הזינו את כתובת המייל שלכם" required />
              <button type="submit">הרשמה</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;