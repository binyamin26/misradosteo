import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation(); // Obtenir l'emplacement actuel
  const emailInputRef = useRef(null);
  const [emailValue, setEmailValue] = useState("");
  const [errorType, setErrorType] = useState(null); // null, "empty", ou "invalid"
  
  // Fonction pour gérer les clics sur les liens
  const handleLinkClick = (e, path) => {
    // Si le chemin du lien correspond à l'emplacement actuel
    if (location.pathname === path) {
      e.preventDefault(); // Empêcher la navigation par défaut
      // Faire défiler jusqu'en haut de la page avec une animation fluide
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  // Ajouter la validation en hébreu au champ email
  useEffect(() => {
    if (emailInputRef.current) {
      // Désactiver la validation HTML5 par défaut du navigateur
      emailInputRef.current.setAttribute('novalidate', true);
    }
  }, []);
  
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
    setErrorType(null);
  };
  
  const validateEmail = (email) => {
    // Regex pour valider le format d'email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vérifier si le champ est vide
    if (!emailValue.trim()) {
      setErrorType("empty");
      return;
    }
    
    // Vérifier si l'email est valide
    if (!validateEmail(emailValue)) {
      setErrorType("invalid");
      return;
    }
    
    // Continuer avec l'envoi du formulaire si valide
    console.log("Formulaire soumis avec:", emailValue);
    // Ici, vous pouvez ajouter le code pour envoyer les données à votre backend
    
    // Réinitialiser le formulaire après l'envoi
    setEmailValue("");
    setErrorType(null);
  };

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="#13846c" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>

      <div className="footer-top">
        <div className="footer-logo">
          <img
            src="https://st3.depositphotos.com/13360910/32120/v/450/depositphotos_321204244-stock-illustration-simple-chiropractic-logo-shilhouette-of.jpg"
            alt="לוגו של אוסטאופתיה"
            className="footer-logo-image"
          />
          <div className="footer-text-container">
            <p className="footer-hebrew-text">משרד</p>
            <p className="footer-hebrew-text">אוסטאו</p>
          </div>
        </div>
        
        <div className="footer-description">
          <p>
            אנו מספקים טיפולי אוסטאופתיה מקצועיים במשרדי החברה, מותאמים אישית לצרכי העובדים והארגון. השירות שלנו מפחית כאב, משפר את הבריאות הכללית ומגביר את הפרודוקטיביות במקום העבודה.
          </p>
          {/* Section des icônes de réseaux sociaux supprimée */}
        </div>

        <div className="footer-links-container">
          <div className="footer-links-column">
            <h3 className="footer-heading">ניווט מהיר</h3>
            <div className="footer-links">
              <Link 
                to="/" 
                className="footer-link"
                onClick={(e) => handleLinkClick(e, "/")}
              >
                <i className="fas fa-chevron-left footer-icon-arrow"></i>
                <span>דף הבית</span>
              </Link>
              <Link 
                to="/about" 
                className="footer-link"
                onClick={(e) => handleLinkClick(e, "/about")}
              >
                <i className="fas fa-chevron-left footer-icon-arrow"></i>
                <span>אודות</span>
              </Link>
              <Link 
                to="/services" 
                className="footer-link"
                onClick={(e) => handleLinkClick(e, "/services")}
              >
                <i className="fas fa-chevron-left footer-icon-arrow"></i>
                <span>שירותים</span>
              </Link>
            </div>
          </div>

          <div className="footer-links-column">
            <h3 className="footer-heading">המידע שלנו</h3>
            <div className="footer-links">
              <Link 
                to="/equipe" 
                className="footer-link"
                onClick={(e) => handleLinkClick(e, "/equipe")}
              >
                <i className="fas fa-chevron-left footer-icon-arrow"></i>
                <span>הצוות שלנו</span>
              </Link>
              <Link 
                to="/blog" 
                className="footer-link"
                onClick={(e) => handleLinkClick(e, "/blog")}
              >
                <i className="fas fa-chevron-left footer-icon-arrow"></i>
                <span>בלוג (חדשות וטיפים)</span>
              </Link>
              <Link 
                to="/temoignage" 
                className="footer-link"
                onClick={(e) => handleLinkClick(e, "/temoignage")}
              >
                <i className="fas fa-chevron-left footer-icon-arrow"></i>
                <span>המלצות</span>
              </Link>
            </div>
          </div>

          <div className="footer-links-column">
            <h3 className="footer-heading">יצירת קשר</h3>
            <div className="footer-contact">
              <a href="tel:+972584231195" className="footer-contact-item">
                <i className="fas fa-phone-alt footer-icon"></i>
                <span>שרה:&nbsp;&nbsp;058-423-1195</span>
              </a>
              <a href="https://wa.me/972584682626" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <i className="fab fa-whatsapp footer-icon"></i>
                <span>יעל:&nbsp;&nbsp;058-468-2626</span>
              </a>
              <div className="footer-contact-item">
                <i className="fas fa-envelope footer-icon"></i>
                <span>misradosteo.il@gmail.com</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt footer-icon"></i>
                <span>שירות ניתן בכל הארץ, במשרדי החברות</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-clock footer-icon"></i>
                <span>א'-ה': 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-newsletter">
        <h3 className="footer-newsletter-heading">הירשמו לניוזלטר שלנו</h3>
        <p className="footer-newsletter-text">קבלו עדכונים, מבצעים וטיפים לבריאות ישירות לתיבת הדואר</p>
        <form className="footer-form" onSubmit={handleSubmit} noValidate>
          <div className="footer-form-group">
            <div style={{ position: 'relative', width: '100%' }}>
              <input 
                type="email" 
                placeholder="הזינו את כתובת האימייל שלכם" 
                className="footer-input" 
                ref={emailInputRef}
                value={emailValue}
                onChange={handleEmailChange}
                style={{ borderColor: errorType ? '#ff4d4d' : undefined }}
              />
              {errorType && (
                <div style={{ 
                  color: '#ff4d4d', 
                  fontSize: '0.9rem', 
                  marginTop: '0.5rem', 
                  textAlign: 'right',
                  position: 'absolute',
                  right: '0',
                  bottom: '-1.8rem'
                }}>
                  {errorType === "empty" 
                    ? "אנא מלא/י שדה זה" 
                    : "אנא הזן/י כתובת אימייל תקינה"}
                </div>
              )}
            </div>
            <button type="submit" className="footer-submit">הרשמה</button>
          </div>
        </form>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} משרד אוסטאו. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}

export default Footer;