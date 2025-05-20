import React from "react";
import { Link } from "react-router-dom";
import './GlobalStyles.css';
import "./Home.css";

function HomePage() {
  // Fonction pour scroll vers le haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="home-page">
      {/* Section Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            טיפולי אוסטאופתיה
            <span className="highlight">במקום העבודה</span>
          </h1>
          <p className="hero-subtitle">
            שיפור בריאות העובדים, הפחתת היעדרויות והגברת הפרודוקטיביות עם טיפולי אוסטאופתיה מקצועיים במשרדי החברה שלכם
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="cta-button primary">
              תיאום פגישת ייעוץ
            </Link>
            <Link to="/services" className="cta-button secondary">
              גלה את השירותים שלנו
            </Link>
          </div>
        </div>
        <div className="hero-image">
        <img src="https://media.istockphoto.com/id/1161512437/fr/photo/physioth%C3%A9rapeute-faisant-le-traitement-curatif-sur-le-dos-de-lhomme-patient-de-maux-de-dos.jpg?s=612x612&w=0&k=20&c=WUEHfgvgluolVaHTAp4ZbdibcQRdP3YM9VZRoJCdYrI=" alt="osthéopath traitent un patient" width="400"/>
        
        </div>
      </section>

      {/* Section Avantages */}
      <section className="benefits">
        <div className="section-header">
          <h2 className="section-title">מדוע כדאי להציע אוסטאופתיה במקום העבודה?</h2>
          <p className="section-subtitle">יתרונות משמעותיים לארגון ולעובדים</p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="benefit-title">הגברת הפרודוקטיביות</h3>
            <p className="benefit-description">
              הפחתת כאבים וחיזוק הבריאות מובילים לעובדים יותר אנרגטיים ומרוכזים
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="fas fa-calendar-check"></i>
            </div>
            <h3 className="benefit-title">הפחתת היעדרויות</h3>
            <p className="benefit-description">
              טיפול מונע בבעיות פיזיות מוביל לירידה משמעותית בימי מחלה
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="fas fa-smile"></i>
            </div>
            <h3 className="benefit-title">הגברת שביעות רצון</h3>
            <p className="benefit-description">
              שירות אוסטאופתיה במשרד מהווה הטבה אטרקטיבית ומשפר את מורל העובדים
            </p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <i className="fas fa-chair"></i>
            </div>
            <h3 className="benefit-title">מניעת פגיעות משרדיות</h3>
            <p className="benefit-description">
              טיפול בבעיות הקשורות לישיבה ממושכת ועבודה מול מחשב
            </p>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="services">
        <div className="section-header">
          <h2 className="section-title">השירותים שלנו</h2>
          <p className="section-subtitle">מגוון פתרונות אוסטאופתיה המותאמים לסביבת העבודה</p>
        </div>

        <div className="services-container">
          <div className="service-card">
            <img
              src="/api/placeholder/400/250"
              alt="טיפולים אישיים"
              className="service-image"
            />
            <div className="service-content">
              <h3 className="service-title">טיפולים אישיים</h3>
              <p className="service-description">
                טיפולי אוסטאופתיה מותאמים אישית לכל עובד, המתמקדים בבעיות ספציפיות ומתחשבים בדרישות התפקיד
              </p>
              <Link to="/services" className="service-link">
                מידע נוסף <i className="fas fa-arrow-left"></i>
              </Link>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/api/placeholder/400/250"
              alt="סדנאות קבוצתיות"
              className="service-image"
            />
            <div className="service-content">
              <h3 className="service-title">סדנאות קבוצתיות</h3>
              <p className="service-description">
                סדנאות לקבוצות עובדים ללימוד טכניקות מתיחה, יציבה נכונה ותרגילים למניעת כאבים בסביבת המשרד
              </p>
              <Link to="/services" className="service-link">
                מידע נוסף <i className="fas fa-arrow-left"></i>
              </Link>
            </div>
          </div>

          <div className="service-card">
            <img
              src="/api/placeholder/400/250"
              alt="תוכניות חברה"
              className="service-image"
            />
            <div className="service-content">
              <h3 className="service-title">תוכניות חברה</h3>
              <p className="service-description">
                תכניות אוסטאופתיה מקיפות לחברות, כולל ביקורים קבועים, תמיכה מתמשכת ודוחות מעקב
              </p>
              <Link to="/services" className="service-link">
                מידע נוסף <i className="fas fa-arrow-left"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="testimonials">
        <div className="section-header">
          <h2 className="section-title">מה הלקוחות שלנו אומרים</h2>
          <p className="section-subtitle">חוויות של חברות שכבר נהנות משירותי האוסטאופתיה שלנו</p>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "הבאנו את שירותי האוסטאופתיה של משרד אוסטאו לחברה שלנו לפני 6 חודשים, והתוצאות מדהימות. היעדרויות ירדו ב-30% והעובדים שלנו מדווחים על שיפור משמעותי בתחושה הכללית ובפרודוקטיביות."
              </p>
            </div>
            <div className="testimonial-author">
              <img
                src="/api/placeholder/60/60"
                alt="תמונת לקוח"
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h4 className="testimonial-name">מיכל כהן</h4>
                <p className="testimonial-position">מנהלת משאבי אנוש, טק-סטארט בע"מ</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">
                "מקצועיות, אדיבות ותוצאות מוכחות. צוות משרד אוסטאו עולה על כל הציפיות. הטיפולים במשרד חוסכים זמן יקר לעובדים שלנו ומשפרים את האווירה הכללית במקום העבודה."
              </p>
            </div>
            <div className="testimonial-author">
              <img
                src="/api/placeholder/60/60"
                alt="תמונת לקוח"
                className="testimonial-avatar"
              />
              <div className="testimonial-info">
                <h4 className="testimonial-name">דוד לוי</h4>
                <p className="testimonial-position">מנכ"ל, אינוביז תעשיות</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">מוכנים לשפר את בריאות העובדים שלכם?</h2>
          <p className="cta-description">
            צרו קשר עוד היום לתיאום פגישת ייעוץ חינם ולקבלת הצעת מחיר מותאמת לצרכי הארגון שלכם
          </p>
          <Link to="/contact" className="cta-button animated-button">
            דברו איתנו
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;