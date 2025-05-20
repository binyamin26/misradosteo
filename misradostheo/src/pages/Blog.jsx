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
      fullContent: "<p>Voici le contenu complet de l'article 1 en hébreu. Ajoutez ici tout le texte de l'article 1.</p><p>Vous pouvez inclure plusieurs paragraphes, des listes, etc., en HTML.</p>", // <-- Ajoutez le contenu complet ici (en HTML)
      date: "15 באפריל, 2025",
      author: "ד\"ר יעל כהן",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "תרגילים ומתיחות"
    },
    {
      id: 2,
      title: "איך אוסטאופתיה יכולה לשפר את הפרודוקטיביות בעבודה",
      excerpt: "מחקרים מראים כי טיפולי אוסטאופתיה סדירים יכולים להגביר את הפרודוקטיביות של העובדים. גלו כיצד זה עובד.",
      fullContent: "<p>Voici le contenu complet de l'article 2 en hébreu...</p>", // <-- Ajoutez le contenu complet ici (en HTML)
      date: "2 באפריל, 2025",
      author: "ד\"ר אמיר לוי",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "מחקרים חדשים"
    },
    {
      id: 3,
      title: "ארגונומיה במשרד: המדריך המלא",
      excerpt: "סידור נכון של סביבת העבודה יכול למנוע בעיות רבות. המדריך הזה יעזור לכם לארגן את המשרד בצורה ארגונומית.",
      fullContent: "<p>Voici le contenu complet de l'article 3 en hébreu...</p>", // <-- Ajoutez le contenu complet ici (en HTML)
      date: "20 במרץ, 2025",
      author: "מיכל אברהם",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "ארגונומיה"
    },
    {
      id: 4,
      title: "כאבי גב תחתון: סיבות וטיפולים",
      excerpt: "כאבי גב תחתון הם תלונה נפוצה בקרב עובדי משרד. למדו על הסיבות העיקריות וכיצד טיפולי אוסטאופתיה יכולים לעזור.",
      fullContent: "<p>Voici le contenu complet de l'article 4 en hébreu...</p>", // <-- Ajoutez le contenu complet ici (en HTML)
      date: "5 במרץ, 2025",
      author: "ד\"ר דניאל כהן",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "טיפולים"
    },
    {
      id: 5,
      title: "המדריך לחברות: כיצד להטמיע תוכנית בריאות אוסטאופתית",
      excerpt: "המדריך הזה יעזור למנהלי משאבי אנוש להטמיע תוכנית אוסטאופתיה יעילה בארגון שלהם.",
      fullContent: "<p>Voici le contenu complet de l'article 5 en hébreu...</p>", // <-- Ajoutez le contenu complet ici (en HTML)
      date: "15 בפברואר, 2025",
      author: "רונית שרעבי",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "מדריכים לחברות"
    },
    {
      id: 6,
      title: "מה ההבדל בין אוסטאופתיה, פיזיותרפיה וכירופרקטיקה?",
      excerpt: "רבים מתבלבלים בין התחומים השונים. במאמר זה נסביר את ההבדלים העיקריים ומתי כדאי לבחור בכל אחד מהם.",
      fullContent: "<p>Voici le contenu complet de l'article 6 en hébreu...</p>", // <-- Ajoutez le contenu complet ici (en HTML)
      date: "1 בפברואר, 2025",
      author: "ד\"ר יעל כהן",
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "מידע כללי"
    },
    // Nouveaux articles suggérés, traduits en hébreu
    {
      id: 7,
      title: "עקרונות היסוד של האוסטאופתיה בפשטות",
      excerpt: "גלו את יסודות האוסטאופתיה, גישה טיפולית ידנית המתייחסת לגוף כמערכת מקושרת אחת להשבת האיזון והבריאות.",
      fullContent: "<p>האוסטאופתיה היא שיטת טיפול ידנית עדינה שמטרתה לזהות ולטפל במגבלות תנועה בגוף שעלולות להשפיע על הבריאות הכללית...</p><p>עקרונות היסוד של האוסטאופתיה הם: 1. הגוף כמכלול יחיד... 2. הקשר בין מבנה לתפקוד... 3. יכולת הריפוי העצמי של הגוף... 4. חשיבות זרימת הדם...</p>", // <-- Ajoutez le contenu complet ici (en hébreu !)
      date: "10 במאי, 2025", // Date fictive
      author: "צוות אוסטאו", // Auteur fictif
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "מידע כללי"
    },
    {
      id: 8,
      title: "כיצד אוסטאופתיה יכולה להקל על כאבי גב הקשורים לעבודה",
      excerpt: "שעות ארוכות בישיבה מול שולחן עלולות לגרום לכאבי גב. למדו כיצד אוסטאופתיה מטפלת בשורש הבעיה להקלה מתמשכת.",
      fullContent: "<p>כאבי גב הם תלונה נפוצה ביותר בקרב עובדי משרד. ישיבה ממושכת בתנוחה לא נכונה, ציוד משרדי שאינו מותאם ומתח נפשי עלולים להוביל למתח שרירי...</p><p>האוסטאופת מעריך את היציבה הכוללת שלכם ואת סביבת העבודה כדי להבין את שורש הכאב...</p>", // <-- Ajoutez le contenu complet ici (en hébreu !)
      date: "12 במאי, 2025", // Date fictive
      author: "צוות אוסטאו", // Auteur fictif
      image: "/api/placeholder/600/400", // Remplacez par une vraie image si disponible
      category: "טיפולים"
    },
    {
      id: 9,
      title: "אוסטאופתיה בעסק: השקעה משתלמת בבריאות העובדים",
      excerpt: "הצעת טיפולי אוסטאופתיה במקום העבודה מביאה יתרונות רבים למעסיקים ולעובדים, מהפחתת היעדרויות ועד שיפור הרווחה הכללית.",
      fullContent: "<p>הטמעת שירותי אוסטאופתיה בחברה שלכם היא צעד יזום לבריאות ורווחת העובדים. היתרונות רבים:</p><ul><li>הפחתת היעדרויות...</li><li>הגברת הפרודוקטיביות...</li><li>שיפור מורל ושביעות רצון...</li><li>מניעת פגיעות משרדיות...</li></ul><p>צורות ההתערבות יכולות להיות מגוונות: טיפולים אישיים, סדנאות קבוצתיות, ותוכניות מותאמות אישית...</p>", // <-- Ajoutez le contenu complet ici (en hébreu !)
      date: "14 במאי, 2025", // Date fictive
      author: "צוות אוסטאו", // Auteur fictif
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
        <div className="container">
          <div className="blog-hero-content">
            <h1 className="blog-title">הבלוג שלנו</h1>
            <p className="blog-subtitle">
              מאמרים, טיפים ומחקרים עדכניים בתחום האוסטאופתיה במקום העבודה
            </p>
          </div>
        </div>
      </section>

      <section className="blog-content">
        <div className="container blog-container">
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
        <div className="container">
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