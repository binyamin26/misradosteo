// src/config/smtp.js - Configuration fonctionnelle
import nodemailer from 'nodemailer';
import 'dotenv/config';

let transporter = null;

const initTransporter = () => {
  // Vérification des identifiants
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('ERREUR: Identifiants email manquants dans le fichier .env');
    
    // En développement, utiliser des identifiants par défaut pour les tests
    if (process.env.NODE_ENV === 'development') {
      console.log('Utilisation d\'identifiants de développement');
      
      process.env.EMAIL_USER = 'misradosteo.il@gmail.com';
      process.env.EMAIL_PASSWORD = 'zclpsdtupdmcjuey'; // Remplacez par votre nouveau mot de passe d'application
    }
  }
  
  if (!transporter) {
    console.log('Création du transporteur SMTP...');
    
    transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // false pour TLS - 587, true pour SSL - 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        // Ne pas vérifier le certificat SSL - c'est ce qui a permis à l'envoi de fonctionner
        rejectUnauthorized: false
      }
    });
  }
  return transporter;
};

// Fonction pour envoyer un email
const sendMail = async (mailOptions) => {
  try {
    const mailer = initTransporter();
    
    // Définir l'adresse d'envoi par défaut
    if (!mailOptions.from) {
      mailOptions.from = `"Formulaire de Contact" <${process.env.EMAIL_USER}>`;
    }
    
    // Destination
    mailOptions.to = process.env.EMAIL_USER || 'misradosteo.il@gmail.com';
    
    console.log('Tentative d\'envoi d\'email à:', mailOptions.to);
    console.log('Sujet:', mailOptions.subject);
    
    // Envoyer l'email
    const info = await mailer.sendMail(mailOptions);
    
    console.log('Email envoyé avec succès!');
    console.log('ID du message:', info.messageId);
    
    return {
      success: true,
      messageId: info.messageId
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export { initTransporter, sendMail };