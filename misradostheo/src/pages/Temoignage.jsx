import React, { useState, useRef, useEffect } from 'react';
import './GlobalStyles.css';
import './Temoignage.css';
import { sendContactForm } from '../services/contactService.js';

function Temoignage() {
  // État pour les valeurs des compteurs
  const [counters, setCounters] = useState({
    stat1: 0,
    stat2: 0,
    stat3: 0,
    stat4: 0
  });
  

  // Référence pour la section des statistiques
  const statsRef = useRef(null);

  // Effet pour l'animation des compteurs
  useEffect(() => {
    const handleCounterAnimation = () => {
      const statsSection = statsRef.current;
      
      if (!statsSection) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // Démarrer l'animation des compteurs
            animateCounters();
            // Ne surveiller qu'une fois
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(statsSection);
    };
    
    // Animer les compteurs
    const animateCounters = () => {
      const finalValues = {
        stat1: 87,
        stat2: 92,
        stat3: 78,
        stat4: 95
      };
      
      const duration = 2000; // 2 secondes pour l'animation
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          stat1: Math.floor(progress * finalValues.stat1),
          stat2: Math.floor(progress * finalValues.stat2),
          stat3: Math.floor(progress * finalValues.stat3),
          stat4: Math.floor(progress * finalValues.stat4)
        });
        
        if (step >= steps) {
          clearInterval(timer);
          setCounters(finalValues);
        }
      }, interval);
    };
    
    // Démarrer la surveillance lors du montage du composant
    handleCounterAnimation();
    
    // Nettoyer lors du démontage
    return () => {
      // Nettoyage si nécessaire
    };
  }, []);

  // Données fictives pour les témoignages
  const testimonials = [
    {
      id: 1,
      company: "חברת היי-טק בינלאומית",
      contact: "רונית כהן",
      position: "מנהלת משאבי אנוש",
      testimonial: "שירותי האוסטאופתיה של משרד אוסטאו הם חלק בלתי נפרד מתוכנית הרווחה של העובדים שלנו. מאז שהתחלנו, ראינו ירידה של 30% בהיעדרויות הקשורות לכאבי גב וצוואר, והעובדים מדווחים על רמות מתח נמוכות יותר ושביעות רצון גבוהה יותר.",
      image: "/api/placeholder/100/100"
    },
    {
      id: 2,
      company: "סטארט-אפ צומח",
      contact: "אלון לוי",
      position: "מייסד ומנכ\"ל",
      testimonial: "כמייסד של סטארט-אפ, אני יודע כמה חשוב לשמור על הצוות במיטבו. הטיפולים האוסטאופתיים שקיבלנו ממשרד אוסטאו עזרו לי ולצוות שלי להישאר ממוקדים ויצירתיים גם בתקופות לחוצות במיוחד.",
      image: "/api/placeholder/100/100"
    },
    {
      id: 3,
      company: "משרד עורכי דין מוביל",
      contact: "דנה אברמוביץ",
      position: "שותפה בכירה",
      testimonial: "העבודה המשפטית דורשת שעות ארוכות של ישיבה ליד המחשב וקריאת מסמכים, מה שגורם לכאבי גב וצוואר כרוניים. אוסטאופתיה במשרד היא השקעה מצוינת שהפחיתה משמעותית את הכאבים והעלתה את הפרודוקטיביות.",
      image: "/api/placeholder/100/100"
    },
    {
      id: 4,
      company: "חברת ביטוח גדולה",
      contact: "יוסי מזרחי",
      position: "סמנכ\"ל תפעול",
      testimonial: "הרכיב של אוסטאופתיה במקום העבודה שהוספנו לחבילת ההטבות שלנו הפך להיות אחד המרכיבים הפופולריים ביותר. העובדים מחכים לימי הטיפולים, והם מדווחים על שיפור משמעותי באיכות החיים ובשביעות הרצון מהעבודה.",
      image: "/api/placeholder/100/100"
    },
    {
      id: 5,
      company: "רשת קמעונאית",
      contact: "מיכל ברקוביץ",
      position: "מנהלת רווחה ארגונית",
      testimonial: "בתור ארגון גדול עם מגוון תפקידים, מצאנו שהטיפולים האוסטאופתיים שמשרד אוסטאו מספק הם פתרון מצוין שמתאים לכל העובדים - החל ממנהלי המטה ועד לצוותי המכירות. השירות המקצועי והאמין שלהם הוא פשוט יוצא מן הכלל.",
      image: "/api/placeholder/100/100"
    },
    {
      id: 6,
      company: "חברת פיננסים",
      contact: "דוד פרידמן",
      position: "מנהל כספים ראשי",
      testimonial: "מבחינת ROI, ההשקעה בשירותי האוסטאופתיה של משרד אוסטאו במקום העבודה הייתה אחת ההחלטות הטובות ביותר שקיבלנו. ירידה בהיעדרויות עקב מחלה, שיפור במורל ופחות תחלופת עובדים - כל אלה תרמו לחיסכון משמעותי בעלויות.",
      image: "/api/placeholder/100/100"
    }
  ];

  // Données fictives pour les statistiques
  const stats = [
    { id: 1, number: "87%", description: "מהעובדים דיווחו על הפחתה בכאבי גב ושרירים" },
    { id: 2, number: "92%", description: "מהמעסיקים מרוצים מהשירות והתוצאות" },
    { id: 3, number: "78%", description: "ירידה בהיעדרויות הקשורות לבריאות" },
    { id: 4, number: "95%", description: "מהעובדים ממליצים על השירות" }
  ];

  // Ajout des états pour le formulaire
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // État pour suivre si chaque champ a été touché
  const [touched, setTouched] = useState({
    name: false,
    company: false,
    email: false,
    phone: false,
    message: false
  });
  
  // États pour gérer les erreurs des champs du formulaire
  const [errors, setErrors] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Références pour les champs de formulaire
  const nameRef = useRef(null);
  const companyRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  
  // État pour gérer le message de succès
  const [submitSuccess, setSubmitSuccess] = useState(false);
  // État pour gérer les erreurs d'envoi
  const [submitError, setSubmitError] = useState('');
  // État pour gérer le chargement pendant l'envoi
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Marquer le champ comme touché
    if (!touched[name]) {
      setTouched({ ...touched, [name]: true });
    }
    
    // Effacer le message d'erreur quand l'utilisateur commence à saisir
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, formData[name]);
  };
  
  // Validation d'un champ spécifique
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'אנא הזן את השם המלא';
        }
        break;
      case 'company':
        if (!value.trim()) {
          error = 'אנא הזן את שם החברה';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'אנא הזן כתובת דוא"ל';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'כתובת הדוא"ל אינה תקינה';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'אנא הזן מספר טלפון';
        } else if (!/^0\d{8,9}$/.test(value)) {
          error = 'מספר הטלפון אינו תקין';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'אנא הזן את ההודעה שלך';
        }
        break;
      default:
        break;
    }
    
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };
  
  // Fonction pour défiler vers une référence
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      // Défiler avec une animation douce
      ref.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      
      // Ajouter une classe pour mettre en évidence le champ
      ref.current.classList.add('highlight-error');
      
      // Supprimer la classe après l'animation
      setTimeout(() => {
        ref.current.classList.remove('highlight-error');
      }, 2000);
    }
  };
  
  const validateForm = () => {
    // Valider tous les champs
    const nameValid = validateField('name', formData.name);
    const companyValid = validateField('company', formData.company);
    const emailValid = validateField('email', formData.email);
    const phoneValid = validateField('phone', formData.phone);
    const messageValid = validateField('message', formData.message);
    
    // Défiler vers le premier champ avec erreur
    if (!nameValid) {
      scrollToRef(nameRef);
      return false;
    } else if (!companyValid) {
      scrollToRef(companyRef);
      return false;
    } else if (!emailValid) {
      scrollToRef(emailRef);
      return false;
    } else if (!phoneValid) {
      scrollToRef(phoneRef);
      return false;
    } else if (!messageValid) {
      scrollToRef(messageRef);
      return false;
    }
    
    return true;
  };
  
 const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Marquer tous les champs comme touchés
  setTouched({
    name: true,
    company: true,
    email: true,
    phone: true,
    message: true
  });
  
  // Réinitialiser les messages d'erreur et de succès
  setSubmitSuccess(false);
  setSubmitError('');
  
  // Vérifier si le formulaire est valide
  if (!validateForm()) {
    return;
  }
  
  // Indiquer que l'envoi est en cours
  setIsSubmitting(true);
  
  try {
    // Adapter les données du formulaire pour correspondre au format attendu par le backend
    const contactData = {
      companyName: formData.company,
      contactName: formData.name,
      email: formData.email,
      phone: formData.phone,
      employeeCount: 'Non spécifié', // Ce champ est obligatoire dans le backend mais n'existe pas dans ce formulaire
      message: formData.message
    };
    
    // Envoyer les données du formulaire via le service de contact
    const result = await sendContactForm(contactData);
    
    // Si l'envoi a réussi
    if (result.success) {
      // Défiler vers le haut du formulaire pour montrer le message de succès
      window.scrollTo({ top: document.getElementById('contact').offsetTop, behavior: 'smooth' });
      
      // Afficher le message de succès
      setSubmitSuccess(true);
      
      // Réinitialiser le formulaire
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Réinitialiser l'état touché
      setTouched({
        name: false,
        company: false,
        email: false,
        phone: false,
        message: false
      });
    } else {
      // Afficher le message d'erreur
      setSubmitError(result.message || 'אירעה שגיאה בשליחת ההודעה. אנא נסה שנית.');
    }
  } catch (error) {
    // Gérer les erreurs de connexion
    console.error('Error sending message:', error);
    setSubmitError('אירעה שגיאה בשליחת ההודעה. אנא בדוק את החיבור לאינטרנט ונסה שנית.');
  } finally {
    // Terminer l'état de chargement
    setIsSubmitting(false);
  }
};

  return (
    <div className="testimonials-page rtl">
      <section className="testimonials-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="testimonials-title">לקוחות מספרים</h1>
            <p className="testimonials-subtitle">
              הסיפורים של הלקוחות שלנו והתוצאות שהם חווים במקום העבודה
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section devis" ref={statsRef}>
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">התוצאות שלנו במספרים</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{counters.stat1}%</div>
                <div className="stat-description">{stats[0].description}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.stat2}%</div>
                <div className="stat-description">{stats[1].description}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.stat3}%</div>
                <div className="stat-description">{stats[2].description}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{counters.stat4}%</div>
                <div className="stat-description">{stats[3].description}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-main">
        <div className="container">
          <h2 className="section-title text-center">מה הלקוחות שלנו אומרים</h2>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  <p className="testimonial-text">"{testimonial.testimonial}"</p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.contact} />
                  </div>
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.contact}</h3>
                    <p className="testimonial-position">{testimonial.position}</p>
                    <p className="testimonial-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video-testimonials custom" id="section4">
        <div className="container">
          <div className="text-content">
            <h2 className="section-title">צפו בסיפורי ההצלחה שלנו</h2>
            <p className="video-description">
              שמענו מלקוחות רבים כיצד שירותי האוסטאופתיה במקום העבודה שינו את חיי העובדים שלהם ואת סביבת העבודה. הנה כמה מהסיפורים המעוררי ההשראה ביותר.
            </p>
            <p className="video-impact">
              סיפורים אלה מציגים את ההשפעה החיובית של טיפולי אוסטאופתיה על בריאות העובדים, פרודוקטיביות, ורווחה כללית בסביבת העבודה המודרנית.
            </p>
            <div className="video-gallery">
              <div className="video-item">
                <div className="video-thumbnail">
                  <img src="/api/placeholder/320/180" alt="סיפור הצלחה - חברת היי-טק" />
                  <div className="play-button">
                    <i className="play-icon"></i>
                  </div>
                </div>
                <h3 className="video-title">הסיפור של רונית - חברת היי-טק</h3>
              </div>
              <div className="video-item">
                <div className="video-thumbnail">
                  <img src="/api/placeholder/320/180" alt="סיפור הצלחה - סטארט-אפ" />
                  <div className="play-button">
                    <i className="play-icon"></i>
                  </div>
                </div>
                <h3 className="video-title">המסע של אלון - סטארט-אפ צומח</h3>
              </div>
              <div className="video-item">
                <div className="video-thumbnail">
                  <img src="/api/placeholder/320/180" alt="סיפור הצלחה - משרד עורכי דין" />
                  <div className="play-button">
                    <i className="play-icon"></i>
                  </div>
                </div>
                <h3 className="video-title">התמורה של דנה - משרד עורכי דין</h3>
              </div>
            </div>
            <div className="video-buttons">
              <a href="#" className="btn btn-primary">צפה בעדויות מלאות</a>
              <a href="#contact" className="btn btn-outline">דבר איתנו עוד היום</a>
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">מוכנים לשפר את בריאות העובדים שלכם?</h2>
            <p className="cta-description">
              הצטרפו למאות ארגונים שכבר רואים את היתרונות של שירותי האוסטאופתיה במקום העבודה
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary btn-large">קבעו פגישת ייעוץ חינם</a>
              <a href="#services" className="btn btn-outline btn-large">גלו את השירותים שלנו</a>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-contact" id="contact">
        <div className="container">
          <div className="contact-wrapper">
            <h2 className="section-title">צור קשר למידע נוסף</h2>
            <p className="contact-description">
              מעוניינים לדעת איך אוסטאופתיה יכולה לעזור לעסק שלכם? השאירו פרטים ונחזור אליכם בהקדם
            </p>
            
            {submitSuccess && (
              <div className="success-message">
                ההודעה שלך נשלחה בהצלחה! נחזור אליך בהקדם.
              </div>
            )}
            
            {submitError && (
              <div className="error-message">
                {submitError}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">שם מלא *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    ref={nameRef}
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.name && errors.name ? 'error' : ''} 
                  />
                  {touched.name && errors.name && (
                    <div className="field-error">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="company">שם החברה *</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company"
                    ref={companyRef}
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.company && errors.company ? 'error' : ''} 
                  />
                  {touched.company && errors.company && (
                    <div className="field-error">{errors.company}</div>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">דוא"ל *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    ref={emailRef}
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.email && errors.email ? 'error' : ''} 
                  />
                  {touched.email && errors.email && (
                    <div className="field-error">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">טלפון *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    ref={phoneRef}
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={touched.phone && errors.phone ? 'error' : ''} 
                  />
                  {touched.phone && errors.phone && (
                    <div className="field-error">{errors.phone}</div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">הודעה *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  ref={messageRef}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.message && errors.message ? 'error' : ''} 
                ></textarea>
                {touched.message && errors.message && (
                  <div className="field-error">{errors.message}</div>
                )}
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'שולח...' : 'שלח פנייה'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Temoignage;