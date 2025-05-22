// src/config/smtp.js - Version sécurisée
import nodemailer from 'nodemailer';
import 'dotenv/config';

let transporter = null;

const initTransporter = () => {
  // Vérification des identifiants - PAS de valeurs par défaut en production
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('ERREUR: Identifiants email manquants dans les variables d\'environnement');
    throw new Error('Configuration email manquante');
  }
  
  if (!transporter) {
    console.log('Création du transporteur SMTP...');
    
    transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // false pour TLS - 587, true pour SSL - 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
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
    mailOptions.to = process.env.EMAIL_USER;
    
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