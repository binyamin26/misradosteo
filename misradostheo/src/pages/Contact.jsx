import React, { useState, useRef, useEffect } from 'react';
import './GlobalStyles.css';
import './Contact.css';
import { sendContactForm } from '../services/contactService.js';

function Contact() {
  // Références pour les champs de formulaire
  const companyNameRef = useRef(null);
  const contactNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const employeeCountRef = useRef(null);
  const messageRef = useRef(null);

  // État pour suivre si chaque champ a été touché
  const [touched, setTouched] = useState({
    companyName: false,
    contactName: false,
    email: false,
    phone: false,
    employeeCount: false,
    message: false,
  });

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    employeeCount: '',
    message: '',
  });

  // États pour gérer les erreurs des champs du formulaire
  const [errors, setErrors] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    employeeCount: '',
    message: '',
  });

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
      case 'companyName':
        if (!value.trim()) {
          error = 'אנא הזן את שם החברה';
        }
        break;
      case 'contactName':
        if (!value.trim()) {
          error = 'אנא הזן את שם איש הקשר';
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
      case 'employeeCount':
        if (!value) {
          error = 'אנא בחר את מספר העובדים בחברה';
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

  const validateForm = () => {
    // Valider tous les champs
    const companyNameValid = validateField('companyName', formData.companyName);
    const contactNameValid = validateField('contactName', formData.contactName);
    const emailValid = validateField('email', formData.email);
    const phoneValid = validateField('phone', formData.phone);
    const employeeCountValid = validateField('employeeCount', formData.employeeCount);
    const messageValid = validateField('message', formData.message);

    // Défiler vers le premier champ avec erreur
    if (!companyNameValid) {
      scrollToRef(companyNameRef);
      return false;
    } else if (!contactNameValid) {
      scrollToRef(contactNameRef);
      return false;
    } else if (!emailValid) {
      scrollToRef(emailRef);
      return false;
    } else if (!phoneValid) {
      scrollToRef(phoneRef);
      return false;
    } else if (!employeeCountValid) {
      scrollToRef(employeeCountRef);
      return false;
    } else if (!messageValid) {
      scrollToRef(messageRef);
      return false;
    }

    return true;
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Marquer tous les champs comme touchés
    setTouched({
      companyName: true,
      contactName: true,
      email: true,
      phone: true,
      employeeCount: true,
      message: true,
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
     // Envoyer les données du formulaire via le service de contact
     const result = await sendContactForm(formData);

     // Si l'envoi a réussi
     if (result.success) {
       // Défiler vers le haut du formulaire pour montrer le message de succès
       window.scrollTo({ top: 0, behavior: 'smooth' });
       
       // Afficher le message de succès
       setSubmitSuccess(true);
       
       // Réinitialiser le formulaire
       setFormData({
         companyName: '',
         contactName: '',
         email: '',
         phone: '',
         employeeCount: '',
         message: '',
       });
       
       // Réinitialiser l'état touché
       setTouched({
         companyName: false,
         contactName: false,
         email: false,
         phone: false,
         employeeCount: false,
         message: false,
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
    <div className="contact-page rtl" id="top">
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="contact-title">יצירת קשר</h1>
            <p className="contact-subtitle">
              אנחנו כאן לענות על כל שאלה ולהתאים עבורך את השירות המושלם
            </p>
          </div>
        </div>
      </section>

      <section className="contact-main custom">
        <div className="text-content">
          <h2 className="section-title">דרכים ליצירת קשר</h2>
          <p>
            אנו זמינים לענות על שאלות, לתת מידע נוסף או לתאם פגישת ייעוץ חינם בנוגע לשירותי האוסטאופתיה שלנו במקום העבודה.
          </p>

          <div className="contact-methods">
            <div className="contact-method-card">
              <div className="contact-method-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>טלפון</h3>
              <p><span className="contact-name">יעל</span> &nbsp;&nbsp;058-4682626</p>
<p><span className="contact-name">שרה</span> &nbsp;&nbsp;058-4231195</p>
              <p className="contact-availability">זמינים א'-ה': 9:00-18:00</p>
            </div>

            <div className="contact-method-card">
              <div className="contact-method-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>דוא"ל</h3>
              <p>misradosteo.il@gmail.com</p>
              <p className="contact-availability">נשיב תוך יום עסקים אחד</p>
            </div>

            <div className="contact-method-card">
              <div className="contact-method-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>שירות ארצי</h3>
              <p>הטיפולים מתבצעים במשרדי החברות</p>
              <p className="contact-availability">בכל רחבי הארץ</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container image-content">
          <div className="contact-form-card">
            <h2>שלחו לנו הודעה</h2>
            <p>מלאו את הטופס ואנו נחזור אליכם בהקדם</p>

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
              <div className="form-group">
                <label htmlFor="companyName">שם החברה *</label>
                <input
                  ref={companyNameRef}
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.companyName && errors.companyName ? 'error' : ''}
                />
                {touched.companyName && errors.companyName && (
                  <div className="field-error">{errors.companyName}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contactName">איש קשר *</label>
                <input
                  ref={contactNameRef}
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.contactName && errors.contactName ? 'error' : ''}
                />
                {touched.contactName && errors.contactName && (
                  <div className="field-error">{errors.contactName}</div>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">דוא"ל *</label>
                  <input
                    ref={emailRef}
                    type="email"
                    id="email"
                    name="email"
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
                    ref={phoneRef}
                    type="tel"
                    id="phone"
                    name="phone"
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
                <label htmlFor="employeeCount">מספר עובדים בחברה *</label>
                <select
                  ref={employeeCountRef}
                  id="employeeCount"
                  name="employeeCount"
                  value={formData.employeeCount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.employeeCount && errors.employeeCount ? 'error' : ''}
                >
                  <option value="">בחר...</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
                {touched.employeeCount && errors.employeeCount && (
                  <div className="field-error">{errors.employeeCount}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">ההודעה שלך *</label>
                <textarea
                  ref={messageRef}
                  id="message"
                  name="message"
                  rows="5"
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
                className="btn btn-primary btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="faq-section devis">
        <div className="container">
          <div className="mission-content">
            <h2 className="section-title">שאלות נפוצות</h2>
          
            <div className="faq-grid">
              <div className="faq-item">
                <h3>כיצד מתבצעים הטיפולים במשרד?</h3>
                <p>
                  הטיפולים מתבצעים בחדר שקט שהחברה מקצה לנושא. המטפל מגיע עם כל הציוד הנדרש (מיטת טיפולים, כריות תמיכה וכו'). משך טיפול סטנדרטי הוא כ-45 דקות.
                </p>
              </div>

              <div className="faq-item">
                <h3>האם ניתן לשלב את הטיפולים עם ביטוח הבריאות של החברה?</h3>
                <p>
                  בהחלט! אנו עובדים עם מרבית חברות הביטוח בישראל. נשמח לסייע בהתאמת השירות לפוליסת הביטוח הקיימת בחברה.
                </p>
              </div>

              <div className="faq-item">
                <h3>מה התדירות המומלצת לטיפולים?</h3>
                <p>
                  לרוב, אנו ממליצים על ביקור שבועי או דו-שבועי של המטפל, אך התדירות נקבעת בהתאם לגודל החברה וצרכיה הספציפיים.
                </p>
              </div>

              <div className="faq-item">
                <h3>האם יש התחייבות לתקופה מינימלית?</h3>
                <p>
                  לא, אין התחייבות לתקופה מינימלית. עם זאת, ללא, אין התחייבות לתקופה מינימלית. עם זאת, לקוחות הבוחרים בתוכנית שנתית נהנים מהנחה משמעותית.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta" id="section5">
        <div className="container">
          <div className="cta-content">
            <h2>מוכנים לשפר את בריאות העובדים בחברה שלכם?</h2>
            <p>צרו קשר עוד היום לתיאום פגישת ייעוץ ללא התחייבות.</p>
            <div className="cta-buttons">
              <a href="/services" className="btn btn-primary">גלה את השירותים שלנו</a>
              <a href="/temoignage" className="btn btn-secondary">קרא חוות דעת של לקוחות</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;