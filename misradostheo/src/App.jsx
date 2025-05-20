import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Devis from "./pages/Devis";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Equipe from "./pages/Equipe";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Temoignage from "./pages/Temoignage";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Composant pour défilement en haut à chaque changement de page
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Header />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/temoignage" element={<Temoignage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;