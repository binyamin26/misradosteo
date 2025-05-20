import 'dotenv/config';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testEmail() {
  console.log("=== Test d'envoi d'email ===");
  
  // Option 1: Configuration avec désactivation de la vérification SSL
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Utiliser TLS
    auth: {
      user: 'misradosteo.il@gmail.com',
      pass: 'zclpsdtupdmcjuey' // Remplacez par votre mot de passe d'application
    },
    tls: {
      rejectUnauthorized: false, // Ne pas valider les certificats
    }
  });

  console.log("Vérification de la configuration...");
  try {
    let verification = await transporter.verify();
    console.log("Vérification réussie:", verification);
  } catch (error) {
    console.error("Erreur de vérification:", error);
    
    // Si la première méthode échoue, essayons la méthode Ethereal (test fictif)
    console.log("Essai avec Ethereal Mail (service de test)...");
    
    try {
      // Créer un compte Ethereal test
      let testAccount = await nodemailer.createTestAccount();
      console.log("Compte test créé:", testAccount);
      
      // Créer un transporteur pour Ethereal
      let etherealTransporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
      
      console.log("Vérification de la configuration Ethereal...");
      let etherealVerification = await etherealTransporter.verify();
      console.log("Vérification Ethereal réussie:", etherealVerification);
      
      // Définir les options du message pour Ethereal
      let mailOptions = {
        from: '"Test Envoi" <misradosteo.il@gmail.com>',
        to: testAccount.user,
        subject: 'Test Email avec Ethereal ✔',
        text: 'Hello world?',
        html: '<b>Hello world?</b>'
      };
      
      // Envoyer avec Ethereal
      let info = await etherealTransporter.sendMail(mailOptions);
      console.log("Email envoyé avec succès via Ethereal!");
      console.log("ID du message:", info.messageId);
      console.log("URL pour voir l'email:", nodemailer.getTestMessageUrl(info));
      return;
    } catch (etherealError) {
      console.error("Erreur avec Ethereal:", etherealError);
      return;
    }
  }

  // Si la vérification a réussi avec Gmail, continuons
  let mailOptions = {
    from: '"Test Envoi" <misradosteo.il@gmail.com>',
    to: 'misradosteo.il@gmail.com',
    subject: 'Test Email ✔',
    text: 'Hello world?',
    html: '<b>Hello world?</b>'
  };

  console.log("Envoi de l'email...");
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email envoyé avec succès!");
    console.log("ID du message:", info.messageId);
  } catch (error) {
    console.error("Erreur d'envoi:", error);
  }
}

testEmail().catch(console.error);