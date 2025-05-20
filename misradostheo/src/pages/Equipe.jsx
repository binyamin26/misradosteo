import React from "react";
import './GlobalStyles.css';
import "./Equipe.css"; // Vous devrez créer ce fichier CSS

function Equipe() {
  // Données fictives pour les membres de l'équipe
  const teamMembers = [
    {
      id: 1,
      name: "ד\"ר אבי כהן",
      position: "מייסד ומנהל קליני",
      specialty: "אוסטאופתיה מבנית וויסצרלית",
      experience: "15 שנות ניסיון",
      education: "בוגר האקדמיה לאוסטאופתיה בפריז",
      bio: "ד\"ר אבי כהן הוא מומחה מוביל בתחום האוסטאופתיה, עם התמחות ספציפית בטיפול בבעיות הקשורות לסביבת העבודה המשרדית. לאורך הקריירה שלו, ד\"ר כהן פיתח גישה ייחודית המשלבת טכניקות אוסטאופתיות מסורתיות עם הבנה מעמיקה של ארגונומיה במקום העבודה.",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "https://www.linkedin.com/in/dr-avi-cohen",
        facebook: "https://www.facebook.com/dr.avi.cohen"
      }
    },
    {
      id: 2,
      name: "מיכל לוי",
      position: "אוסטאופתית בכירה",
      specialty: "אוסטאופתיה קרניאלית",
      experience: "10 שנות ניסיון",
      education: "בוגרת המכללה לאוסטאופתיה בתל אביב",
      bio: "מיכל היא מומחית בטיפול בכאבי ראש וצוואר הקשורים לישיבה ממושכת מול מחשב. הגישה הטיפולית שלה משלבת טכניקות קרניאליות עדינות עם הדרכה לתנועתיות ויציבה נכונה במשרד.",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "https://www.linkedin.com/in/michal-levy",
        instagram: "https://www.instagram.com/michal.osteo"
      }
    },
    {
      id: 3,
      name: "יוסי אברהם",
      position: "אוסטאופת ומדריך לארגונומיה",
      specialty: "אוסטאופתיה ספורטיבית",
      experience: "8 שנות ניסיון",
      education: "בוגר האוניברסיטה האירופית לאוסטאופתיה",
      bio: "יוסי מתמחה בטיפול בבעיות שלד-שריר הקשורות לעבודה משרדית. בנוסף לטיפולים אוסטאופתיים, הוא מעביר סדנאות לארגונים בנושא ארגונומיה והרגלי תנועה בריאים במקום העבודה.",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "https://www.linkedin.com/in/yossi-abraham",
        facebook: "https://www.facebook.com/yossi.osteo"
      }
    },
    {
      id: 4,
      name: "ד\"ר רונית שרעבי",
      position: "אוסטאופתית ויועצת ארגונית",
      specialty: "אוסטאופתיה ויסצרלית ומחקר",
      experience: "12 שנות ניסיון",
      education: "דוקטורט באוסטאופתיה מאוניברסיטת לונדון",
      bio: "רונית משלבת בין אוסטאופתיה לייעוץ ארגוני, ומסייעת לחברות בפיתוח תוכניות רווחה המשלבות טיפולי אוסטאופתיה. המחקר שלה מתמקד בהשפעות הטיפול האוסטאופתי על פרודוקטיביות במקום העבודה.",
      image: "/api/placeholder/400/400",
      social: {
        linkedin: "https://www.linkedin.com/in/dr-ronit-sharabi",
        researchgate: "https://www.researchgate.net/profile/Ronit_Sharabi"
      }
    },
    {
      id: 5,
      name: "דניאל גולדשטיין",
      position: "אוסטאופת ומומחה לטיפול בכאבי גב",
      specialty: "אוסטאופתיה מבנית",
      experience: "7 שנות ניסיון",
      education: "בוגר המכללה לאוסטאופתיה בירושלים",
      bio: "דניאל מתמחה בטיפול בכאבי גב תחתון הנפוצים בקרב עובדי משרד. הטיפולים שלו משלבים טכניקות ידניות יחד עם תרגילים ספציפיים המותאמים לכל מטופל.",
      image: "/api/placeholder/400/400",
      social: {
        facebook: "https://www.facebook.com/daniel.goldstein.osteo",
        instagram: "https://www.instagram.com/daniel.osteo"
      }
    },
    {
      id: 6,
      name: "נועה פרץ",
      position: "אוסטאופתית ומומחית ליוגה תעסוקתית",
      specialty: "אוסטאופתיה ושיטות תנועה",
      experience: "9 שנות ניסיון",
      education: "בוגרת האקדמיה לאוסטאופתיה במילאנו",
      bio: "נועה משלבת בין אוסטאופתיה ליוגה תעסוקתית, ופיתחה סדרת תרגילים ייחודית המותאמת לעובדי משרד. היא מנחה סדנאות קבוצתיות בחברות ומספקת כלים פרקטיים למניעת כאבים.",
      image: "/api/placeholder/400/400",
      social: {
        instagram: "https://www.instagram.com/noa.yoga.osteo",
        youtube: "https://www.youtube.com/c/NoaPerezOsteoYoga"
      }
    }
  ];

  // Valeurs de l'entreprise
  const values = [
    {
      icon: "fas fa-user-md",
      title: "מקצועיות",
      description: "כל המטפלים שלנו הם בעלי הסמכה רשמית והכשרה ייעודית לטיפול בבעיות הקשורות לסביבת העבודה המשרדית."
    },
    {
      icon: "fas fa-brain",
      title: "גישה הוליסטית",
      description: "אנו מתייחסים לכל מטופל באופן כוללני, תוך הבנת הקשר בין גוף, תנועה, סביבה ותפקוד יומיומי במקום העבודה."
    },
    {
      icon: "fas fa-shield-alt",
      title: "דיסקרטיות",
      description: "אנו מקפידים על פרטיות מלאה ודיסקרטיות במהלך הטיפולים, תוך שמירה על סודיות רפואית מוחלטת."
    },
    {
      icon: "fas fa-chart-line",
      title: "תוצאות",
      description: "אנו מחויבים לספק תוצאות מדידות ומשמעותיות, עם מעקב שוטף והתאמת הטיפול לצרכים המשתנים."
    }
  ];

  return (
    <div className="team-page rtl">
      <section className="team-hero">
        <div className="container">
          <div className="team-hero-content">
            <h1 className="team-title">הצוות שלנו</h1>
            <p className="team-subtitle">
              הכירו את הצוות המקצועי והמנוסה שעומד מאחורי משרד אוסטאו
            </p>
          </div>
        </div>
      </section>

      <section className="team-intro">
        <div className="container">
          <div className="intro-content">
            <h2 className="section-title">מי אנחנו</h2>
            <p className="intro-text">
              צוות משרד אוסטאו מורכב ממטפלים מנוסים, מומחים בתחום האוסטאופתיה עם התמחות ספציפית בטיפול בבעיות הקשורות לסביבת העבודה המשרדית. לכל המטפלים שלנו הסמכה רשמית ממוסדות מובילים בארץ ובעולם, וניסיון רב שנים בעבודה עם ארגונים וחברות מובילות.
            </p>
            <p className="intro-text">
              אנו מאמינים בגישה הוליסטית לטיפול, הרואה את האדם השלם ואת הקשר בין הגוף, סביבת העבודה, והתפקוד היומיומי. הצוות שלנו עובר הכשרות והתמחויות ספציפיות לטיפול בבעיות נפוצות בקרב עובדי משרד - כאבי גב, צוואר, כתפיים, מיגרנות, ובעיות שלד-שריר אחרות הקשורות לישיבה ממושכת ועבודה מול מחשב.
            </p>
          </div>
        </div>
      </section>

      <section className="team-values">
        <div className="container">
          <h2 className="section-title">הערכים שלנו</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-members">
        <div className="container">
          <h2 className="section-title">הכירו את המומחים שלנו</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-social">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {member.social.facebook && (
                      <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    {member.social.researchgate && (
                      <a href={member.social.researchgate} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-researchgate"></i>
                      </a>
                    )}
                    {member.social.youtube && (
                      <a href={member.social.youtube} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <div className="member-details">
                    <div className="detail-item">
                      <i className="fas fa-stethoscope"></i>
                      <span>{member.specialty}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-clock"></i>
                      <span>{member.experience}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-graduation-cap"></i>
                      <span>{member.education}</span>
                    </div>
                  </div>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-join">
        <div className="container">
          <div className="join-content">
            <h2 className="join-title">רוצים להצטרף לצוות שלנו?</h2>
            <p className="join-text">
              אנחנו תמיד מחפשים אוסטאופתים מוסמכים ומנוסים המעוניינים לעבוד בסביבה מקצועית ומתגמלת. אם אתם אוהבים לעבוד עם אנשים ומתלהבים מהאפשרות לשפר את חייהם של עובדים במשרדים, אנחנו רוצים לשמוע מכם!
            </p>
            <a href="/contact" className="btn-join">שלחו לנו קורות חיים</a>
          </div>
        </div>
      </section>

      <section className="team-cta">
        <div className="container">
          <div className="cta-content">
            <h2>רוצים להכיר את הצוות שלנו מקרוב?</h2>
            <p>תאמו פגישת היכרות ללא התחייבות וגלו כיצד אנחנו יכולים לעזור לעובדים בחברה שלכם</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">צור קשר</a>
              <a href="/services" className="btn-secondary">גלה את השירותים שלנו</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Equipe;