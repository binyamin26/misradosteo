// server.js (ES Modules) - Version Express v4
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { sendMail } from './src/config/smtp.js';

// Obtenir le chemin du répertoire actuel en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques du build React
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, 'dist')));
}

// API endpoint pour le formulaire de contact
app.post('/api/contact', async (req, res) => {
  try {
    const { companyName, contactName, email, phone, employeeCount, message } = req.body;
    
    // Vérifier que tous les champs requis sont présents
    if (!companyName || !contactName || !email || !phone || !employeeCount || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Tous les champs sont obligatoires' 
      });
    }
    
    // Créer les options d'email
    const mailOptions = {
      subject: `פנייה חדשה מאת ${contactName} - ${companyName}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2>פרטי הפנייה החדשה:</h2>
          <p><strong>שם החברה:</strong> ${companyName}</p>
          <p><strong>איש קשר:</strong> ${contactName}</p>
          <p><strong>דוא"ל:</strong> ${email}</p>
          <p><strong>טלפון:</strong> ${phone}</p>
          <p><strong>מספר עובדים:</strong> ${employeeCount}</p>
          <h3>תוכן ההודעה:</h3>
          <p>${message}</p>
        </div>
      `
    };
    
    // Envoyer l'email
    const result = await sendMail(mailOptions);
    
    if (result.success) {
      return res.status(200).json({ 
        success: true, 
        message: 'Message envoyé avec succès' 
      });
    } else {
      return res.status(500).json({ 
        success: false, 
        message: 'Erreur lors de l\'envoi du message',
        error: result.error 
      });
    }
  } catch (error) {
    console.error('Erreur de serveur:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Erreur interne du serveur',
      error: error.message 
    });
  }
});

// Servir l'application React pour toutes les autres routes
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'dist/index.html'));
  });
}

// Port d'écoute
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});