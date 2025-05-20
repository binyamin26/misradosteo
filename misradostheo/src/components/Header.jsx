import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Effet pour détecter le défilement et changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img
            src="https://st3.depositphotos.com/13360910/32120/v/450/depositphotos_321204244-stock-illustration-simple-chiropractic-logo-shilhouette-of.jpg"
            alt="לוגו של אוסטאופתיה"
            className="logo-image"
          />
          <div className="text-container">
            <span className="hebrew-text">משרד</span>
            <span className="hebrew-text">אוסטאו</span>
          </div>
        </Link>
      </div>

      <button className="mobile-menu-button" onClick={toggleMenu} aria-label="תפריט">
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" className={`nav-link ${isActive("/")}`} onClick={closeMenu}>דף הבית</Link>
        <Link to="/about" className={`nav-link ${isActive("/about")}`} onClick={closeMenu}>אודות</Link>
        <Link to="/services" className={`nav-link ${isActive("/services")}`} onClick={closeMenu}>שירותים</Link>
        <Link to="/equipe" className={`nav-link ${isActive("/equipe")}`} onClick={closeMenu}>הצוות שלנו</Link>
        <Link to="/blog" className={`nav-link ${isActive("/blog")}`} onClick={closeMenu}>בלוג</Link>
        <Link to="/temoignage" className={`nav-link ${isActive("/temoignage")}`} onClick={closeMenu}>המלצות</Link>
      </nav>

      <div className="contact-info">
        <a href="tel:+972584231195" className="contact-method primary">
          <i className="fas fa-phone-alt contact-icon"></i>
          <span>שרה &nbsp;&nbsp;058-423-1195</span>
        </a>
        <a href="https://wa.me/972584682626" target="_blank" rel="noopener noreferrer" className="contact-method primary">
          <i className="fab fa-whatsapp contact-icon"></i>
          <span>יעל &nbsp;&nbsp;058-468-2626</span>
        </a>
        <div className="contact-method primary">
          <i className="fas fa-envelope contact-icon"></i>
          <span>misradosteo.il@gmail.com</span>
        </div>
        <Link to="/contact" className="contact-button" onClick={closeMenu}>
          <i className="fas fa-calendar-check"></i>
          קבע פגישה
        </Link>
        {/* Les icônes des réseaux sociaux ont été supprimées */}
      </div>
    </header>
  );
}

export default Header;