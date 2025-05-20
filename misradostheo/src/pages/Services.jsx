import React from "react";
import { Link } from "react-router-dom";
import './GlobalStyles.css';
import "./Services.css";

function Services() {
  // Données des services principaux
  const mainServices = [
    {
      id: 1,
      title: "טיפולים אישיים במשרד",
      description: "טיפולי אוסטאופתיה מותאמים אישית הניתנים ישירות במשרדי החברה. המטפל מגיע עם כל הציוד הנדרש ומבצע טיפולים של 30-45 דקות בחדר שקט שהחברה מקצה לכך.",
      image: "/api/placeholder/600/400",
      benefits: [
        "חיסכון בזמן יקר לעובדים",
        "טיפול מותאם לבעיות הקשורות לסביבת העבודה",
        "שיפור מיידי בנוחות ובריכוז",
        "פתרונות מעשיים לשיפור היציבה במהלך יום העבודה"
      ],
      icon: "fas fa-user-md"
    },
    {
      id: 2,
      title: "סדנאות קבוצתיות",
      description: "סדנאות מעשיות לקבוצות של עד 15 עובדים, המלמדות טכניקות למניעת כאבים, שיפור יציבה, ותרגילי מתיחה שניתן לבצע במשרד. הסדנאות מתקיימות במשרדי החברה ונמשכות כשעה וחצי.",
      image: "/api/placeholder/600/400",
      benefits: [
        "הקניית כלים פרקטיים לכל המשתתפים",
        "יצירת מודעות לבריאות תעסוקתית",
        "בניית תרבות ארגונית ממוקדת בריאות",
        "שיפור אווירה ועבודת צוות"
      ],
      icon: "fas fa-users"
    },
    {
      id: 3,
      title: "תוכניות חברה מקיפות",
      description: "תוכניות אוסטאופתיה מקיפות המותאמות לצרכי הארגון, כולל שילוב של טיפולים אישיים, סדנאות, וייעוץ ארגונומי. התוכניות כוללות ניטור ומדידה של השיפור בבריאות העובדים ובפרודוקטיביות.",
      image: "/api/placeholder/600/400",
      benefits: [
        "פתרון כולל המשלב מניעה וטיפול",
        "התאמה מדויקת לאתגרים הספציפיים של הארגון",
        "חיסכון עלויות בטווח הארוך",
        "דוחות תקופתיים על ההשפעה והתוצאות"
      ],
      icon: "fas fa-building"
    }
  ];

  // Données des services spécialisés
  const specializedServices = [
    {
      id: 1,
      title: "טיפול בכאבי גב וצוואר",
      description: "טיפול ממוקד בבעיות גב וצוואר הנפוצות בקרב עובדי משרד, תוך שימוש בטכניקות אוסטאופתיות מתקדמות.",
      icon: "fas fa-wind"
    },
    {
      id: 2,
      title: "מיגרנות וכאבי ראש",
      description: "טיפול בכאבי ראש ומיגרנות הקשורים לישיבה ממושכת, מתח עיניים ולחץ בעבודה.",
      icon: "fas fa-brain"
    },
    {
      id: 3,
      title: "בעיות מפרקים",
      description: "טיפול בבעיות מפרקים ובמיוחד כאבי כתפיים, מרפקים וידיים הנגרמים מעבודה ממושכת במחשב.",
      icon: "fas fa-bone"
    },
    {
      id: 4,
      title: "בעיות עיכול וויסצרליות",
      description: "טיפול בבעיות עיכול ולחץ על איברים פנימיים הקשורים לישיבה ממושכת ולחץ בעבודה.",
      icon: "fas fa-heartbeat"
    },
    {
      id: 5,
      title: "הפחתת מתח ועייפות",
      description: "טיפולים להפחתת מתח ועייפות, שיפור זרימת הדם ואנרגיה מחודשת.",
      icon: "fas fa-cloud-rain"
    },
    {
      id: 6,
      title: "שיפור יציבה",
      description: "טכניקות לשיפור היציבה ומניעת בעיות עתידיות הקשורות לישיבה לא נכונה.",
      icon: "fas fa-child"
    }
  ];

  // Données sur les forfaits
  const pricingPackages = [
    {
      id: 1,
      title: "חבילה בסיסית",
      price: "3,500 ₪",
      period: "לחודש",
      description: "אידיאלי לעסקים קטנים עד 20 עובדים",
      features: [
        "מטפל אחד, יום אחד בשבוע",
        "עד 8 טיפולים אישיים ביום",
        "סדנה קבוצתית אחת בחודש",
        "דוח חודשי על השימוש והיתרונות"
      ],
      recommended: false
    },
    {
      id: 2,
      title: "חבילה מקיפה",
      price: "6,900 ₪",
      period: "לחודש",
      description: "אידיאלי לחברות בינוניות עד 50 עובדים",
      features: [
        "מטפל אחד, יומיים בשבוע",
        "עד 16 טיפולים אישיים בשבוע",
        "2 סדנאות קבוצתיות בחודש",
        "ייעוץ ארגונומי ראשוני",
        "דוח חודשי עם תובנות והמלצות"
      ],
      recommended: true
    },
    {
      id: 3,
      title: "חבילה לארגון גדול",
      price: "12,500 ₪",
      period: "לחודש",
      description: "אידיאלי לחברות גדולות מעל 50 עובדים",
      features: [
        "צוות של 2-3 מטפלים",
        "3-4 ימי טיפולים בשבוע",
        "עד 35 טיפולים אישיים בשבוע",
        "4 סדנאות קבוצתיות בחודש",
        "תוכנית ארגונומית מלאה לכל המשרד",
        "דוחות שבועיים ופגישות ניטור חודשיות"
      ],
      recommended: false
    }
  ];

  // Témoignages clients
  const testimonials = [
    {
      id: 1,
      text: "הטיפולים במשרד שינו את חיי העבודה שלנו. היעדרויות ירדו ב-30% והאווירה במשרד השתפרה משמעותית.",
      author: "מיכל כהן",
      position: "סמנכ\"לית משאבי אנוש, חברת היי-טק"
    },
    {
      id: 2,
      text: "המטפלים המקצועיים של משרד אוסטאו מספקים שירות יוצא מן הכלל. העובדים שלנו מחכים ליום הטיפולים שלהם.",
      author: "דוד לוי",
      position: "מנכ\"ל, סטארט-אפ פיננסי"
    }
  ];

  // FAQ sur les services
  const faqs = [
    {
      id: 1,
      question: "האם ניתן לשלב את השירות עם ביטוח הבריאות של החברה?",
      answer: "בהחלט! אנו עובדים עם מרבית חברות הביטוח בישראל ויכולים לסייע בהתאמת השירות לפוליסת הביטוח הקיימת של החברה."
    },
    {
      id: 2,
      question: "כמה זמן אורך טיפול אוסטאופתי סטנדרטי?",
      answer: "טיפול סטנדרטי אורך בין 30 ל-45 דקות, כולל תשאול קצר, טיפול, והמלצות. ניתן להתאים את משך הטיפולים לצרכי הארגון."
    },
    {
      id: 3,
      question: "האם יש צורך בציוד מיוחד או בחדר ייעודי?",
      answer: "המטפלים שלנו מביאים את כל הציוד הנדרש, כולל מיטת טיפולים. כל שנדרש מהחברה הוא להקצות חדר שקט ופרטי לשעות הטיפול."
    },
    {
      id: 4,
      question: "האם יש התחייבות לתקופה מינימלית?",
      answer: "אין התחייבות לתקופה מינימלית, אך חברות שבוחרות בתוכנית שנתית נהנות מהנחה משמעותית ומתוצאות טובות יותר לאורך זמן."
    }
  ];

  return (
    <div className="services-page rtl">
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="services-title">השירותים שלנו</h1>
            <p className="services-subtitle">
              פתרונות אוסטאופתיה כוללים להפחתת כאבים, שיפור בריאות והגברת פרודוקטיביות במקום העבודה
            </p>
          </div>
        </div>
      </section>

      <section className="services-intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title">אוסטאופתיה במקום העבודה</h2>
            <p className="intro-text">
              אוסטאופתיה היא גישה טיפולית הוליסטית, המתמקדת במערכת השלד-שריר ובקשר שלה למערכות הגוף האחרות. בסביבת העבודה המודרנית, ישיבה ממושכת, תנועה מוגבלת ולחץ נפשי גורמים לבעיות פיזיות רבות שמשפיעות על בריאות העובדים ועל הפרודוקטיביות הארגונית.
            </p>
            <p className="intro-text">
              השירותים שלנו מביאים את יתרונות האוסטאופתיה ישירות למקום העבודה, מה שחוסך זמן יקר לעובדים ומספק פתרון יעיל ומדיד לארגונים המעוניינים לטפח סביבת עבודה בריאה ופרודוקטיבית יותר.
            </p>
          </div>
        </div>
      </section>

      <section className="main-services">
        <div className="container">
          <h2 className="section-title">השירותים העיקריים שלנו</h2>
          <div className="main-services-container">
            {mainServices.map(service => (
              <div key={service.id} className="main-service-card">
                <div className="service-header">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-body">
                  <p className="service-description">{service.description}</p>
                  <div className="service-benefits">
                    <h4>יתרונות:</h4>
                    <ul>
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/services/${service.id}`} className="service-details-link">
                    פרטים נוספים <i className="fas fa-arrow-left"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="specialized-services">
        <div className="container">
          <h2 className="section-title">טיפולים ספציפיים</h2>
          <p className="section-description">
            המטפלים שלנו מתמחים במגוון בעיות נפוצות במקום העבודה המשרדי
          </p>
          <div className="specialized-services-grid">
            {specializedServices.map(service => (
              <div key={service.id} className="specialized-service-item">
                <div className="specialized-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="specialized-title">{service.title}</h3>
                <p className="specialized-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="container">
          <h2 className="section-title">איך זה עובד</h2>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">פגישת ייעוץ ראשונית</h3>
                <p className="step-description">
                  אנו מקיימים פגישה עם צוות משאבי האנוש או ההנהלה כדי להבין את הצרכים הספציפיים של הארגון ושל העובדים.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">פיתוח תוכנית מותאמת</h3>
                <p className="step-description">
                  אנו מפתחים תוכנית המותאמת לגודל הארגון, לסוג העבודה, ולצרכים הספציפיים שזוהו, עם יעדים ברורים למדידה.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">יישום השירות</h3>
                <p className="step-description">
                  המטפלים שלנו מגיעים למשרדי החברה בימים ובשעות קבועים, עם כל הציוד הנדרש, ומבצעים את הטיפולים בחדר שקט שהוקצה לכך.
                </p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">מעקב ודיווח</h3>
                <p className="step-description">
                  אנו מבצעים מעקב שוטף אחר התקדמות התוכנית, מספקים דוחות תקופתיים ומבצעים התאמות לפי הצורך.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2 className="section-title">תוכניות ומחירים</h2>
          <p className="section-description">
            אנו מציעים מגוון חבילות המותאמות לגודל וצרכי הארגון.
          </p>
          <div className="pricing-packages">
            {pricingPackages.map(pkg => (
              <div 
                key={pkg.id} 
                className={`pricing-package ${pkg.recommended ? 'recommended' : ''}`}
              >
                {pkg.recommended && <div className="recommended-badge">המומלץ ביותר</div>}
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-price">
                  <span className="price">{pkg.price}</span>
                  <span className="period">{pkg.period}</span>
                </div>
                <p className="package-description">{pkg.description}</p>
                <ul className="package-features">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="package-cta">
                  צור קשר לקבלת הצעה
                </Link>
              </div>
            ))}
          </div>
          <div className="pricing-note">
            <p>
              * ניתן להתאים את כל החבילות לצרכים הספציפיים של הארגון. צרו איתנו קשר לקבלת הצעת מחיר מותאמת אישית.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">לקוחות מספרים</h2>
          <div className="testimonials-container">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
                <div className="testimonial-author">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-cta">
            <Link to="/temoignage" className="testimonials-link">
              קרא עוד המלצות <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">שאלות נפוצות</h2>
          <div className="faq-container">
            {faqs.map(faq => (
              <div key={faq.id} className="faq-item">
                <h3 className="faq-question">
                  <i className="fas fa-question-circle"></i> {faq.question}
                </h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="faq-more">
            <p>יש לכם שאלות נוספות? <Link to="/contact">צרו איתנו קשר</Link></p>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">מוכנים לשפר את בריאות העובדים ואת הפרודוקטיביות?</h2>
            <p className="cta-description">
              צרו קשר עוד היום לתיאום פגישת ייעוץ ללא התחייבות והצעת מחיר מותאמת אישית.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">צור קשר</Link>
              <Link to="/temoignage" className="cta-button secondary">קרא המלצות</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;