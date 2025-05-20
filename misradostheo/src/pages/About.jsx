import React from 'react';
import './GlobalStyles.css';
import './About.css';

function About() {
  return (
    <div className="about-page rtl">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="about-title">אודות משרד אוסטאו</h1>
            <p className="about-subtitle">
              המומחים המובילים לטיפולי אוסטאופתיה במקום העבודה
            </p>
          </div>
        </div>
      </section>

      <section className="about-story custom">
        <div className="text-content">
          <h2 className="section-title">הסיפור שלנו</h2>
          <p>
            משרד אוסטאו נוסד בשנת 2018 מתוך ההבנה שיש צורך בפתרון בריאותי נגיש ויעיל במקום העבודה. כמטפלים אוסטאופתים מנוסים, ראינו שוב ושוב כיצד לחץ וישיבה ממושכת במשרד גורמים לבעיות גופניות רבות - מכאבי גב ועד למיגרנות וירידה בריכוז.
          </p>
          <p>
            החזון שלנו היה פשוט: להביא את הטיפול האוסטאופתי המקצועי ישירות למקום העבודה, לחסוך לעובדים זמן יקר ולספק לחברות כלי יעיל לשיפור בריאות העובדים והפרודוקטיביות הארגונית.
          </p>
          <p>
            כיום, אנו מספקים שירותי אוסטאופתיה לעשרות חברות מובילות במשק, עם צוות מטפלים מנוסים המתמחים בפתרון בעיות הקשורות לסביבת העבודה המודרנית.
          </p>
        </div>
        <div className="about-image image-content">
          <img src="/api/placeholder/500/400" alt="צוות משרד אוסטאו" />
        </div>
      </section>

      <section className="about-mission devis">
        <div className="container mission-content">
          <h2 className="section-title">המשימה שלנו</h2>
          <p>
            אנו מחויבים לשיפור איכות החיים של עובדים במקום העבודה באמצעות טיפולי אוסטאופתיה מקצועיים ומותאמים אישית. המטרה שלנו היא להפחית כאבים, למנוע פציעות ולשפר את הבריאות הכללית תוך יצירת סביבת עבודה בריאה ופרודוקטיבית יותר.
          </p>
        </div>
      </section>

      <section className="about-values custom" id="section4">
        <div className="text-content">
          <h2 className="section-title">הערכים שלנו</h2>
          <ul>
            <li>
              <strong>מקצועיות:</strong> כל המטפלים שלנו הם בעלי הסמכה רשמית והכשרה ייעודית לטיפול בבעיות הקשורות לסביבת העבודה המשרדית.
            </li>
            <br />
            <li>
              <strong>גישה הוליסטית:</strong> אנו מתייחסים לכל מטופל באופן כוללני, תוך הבנת הקשר בין גוף, תנועה, סביבה ותפקוד יומיומי במקום העבודה.
            </li>
            <br />
            <li>
              <strong>דיסקרטיות:</strong> אנו מקפידים על פרטיות מלאה ודיסקרטיות במהלך הטיפולים, תוך שמירה על סודיות רפואית מוחלטת.
            </li>
            <br />
            <li>
              <strong>תוצאות:</strong> אנו מחויבים לספק תוצאות מדידות ומשמעותיות, עם מעקב שוטף והתאמת הטיפול לצרכים המשתנים של העובדים והארגון.
            </li>
          </ul>
        </div>
        <div className="image-content">
        <img src="https://media.istockphoto.com/id/175590369/fr/photo/galet-de-plage.jpg?s=612x612&w=0&k=20&c=gf3MPmbYcpDaJUH_TjPeiKS7PZIfs11ydYLMv8FJFvc=" alt="image de bien etre" width="600"/>
        </div>
      </section>

      <section className="about-benefits custom" id="section2">
        <div className="text-content">
          <h2 className="section-title">היתרונות של אוסטאופתיה עבור העובדים שלכם</h2>
          <ul>
            <li>
              <strong>הקלה על כאבים ומתח פיזי:</strong> אוסטאופתיה מטפלת בכאבי שרירים ושלד (גב, צוואר, מפרקים), אשר נגרמים לעיתים קרובות מישיבה ממושכת מול מחשב או תנוחות עבודה מאתגרות.
            </li>
            <br />
            <li>
              <strong>מניעת בעיות כרוניות:</strong> מפגשים קבועים מסייעים במניעת הפרעות הקשורות ללחץ, פגיעות כתוצאה מתנועות חוזרות ונשנות ואי נוחות פיזית.
            </li>
            <br />
            <li>
              <strong>שיפור הרווחה הכללית:</strong> על ידי הקלת המתח הפיזי והרגשי, אוסטאופתיה מקדמת איכות חיים טובה יותר בעבודה.
            </li>
          </ul>
        </div>
        <div className="image-content">
        <img src="https://cdn-s-www.lalsace.fr/images/C7F94F75-66A2-4050-A824-1B8B3C370794/NW_raw/environ-9-francais-sur-10-souffrent-de-troubles-musculo-squelettiques-qu-ils-attribuent-pour-la-plupart-a-leur-activite-professionnelle-revele-une-etude-ifop-photo-adobe-stock-1675173679.jpg" width="600px" alt="un monsieur assis sur une chaise qui a mal au dos"/>
        </div>
      </section>

      <section className="about-business custom" id="section3">
        <div className="text-content">
          <h2 className="section-title">היתרונות לעסק שלכם</h2>
          <ol>
            <li>
              <strong>הגדלת התפוקה:</strong> עובדים בריאים הם ממוקדים, חדורי מוטיבציה ויעילים יותר.
            </li>
            <br />
            <li>
              <strong>הפחתת היעדרויות:</strong> מפגשי אוסטאופתיה מסייעים במניעת היעדרויות מהעבודה הנגרמות מכאבים או מתח.
            </li>
            <br />
            <li>
              <strong>מעורבות גבוהה יותר של העובדים:</strong> הצעת שירותי בריאות מראה שאכפת לכם מהצוות שלכם, ומחזקת את הנאמנות שלהם לחברה.
            </li>
            <br />
            <li>
              <strong>שיפור מיתוג המעסיק:</strong> הצעת שירותי אוסטאופתיה הופכת את החברה שלכם לאטרקטיבית יותר בגיוס ושימור כישרונות מובילים.
            </li>
          </ol>
        </div>
        <div className="image-content">
        <img src="https://img.freepik.com/vecteurs-premium/croissance-du-graphique-barres-fleche-vers-haut_38133-121.jpg" alt="graphique en croissance" width="600"/>
        </div>
      </section>

      <section className="about-cta" id="section5">
        <div className="container">
          <div className="cta-content">
            <h2>מוכנים לשפר את בריאות העובדים בחברה שלכם?</h2>
            <p>צרו קשר עוד היום לתיאום פגישת ייעוץ ללא התחייבות.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">צור קשר</a>
              <a href="/services" className="btn btn-secondary">גלה את השירותים שלנו</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;