import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers le certificat
const CERT_PATH = path.join(__dirname, 'ca-certificates.crt');

try {
  console.log('Téléchargement des certificats racine Mozilla...');
  const url = 'https://curl.haxx.se/ca/cacert.pem';
  
  // Télécharger le fichier
  execSync(`curl ${url} -o "${CERT_PATH}"`);
  console.log('Certificats téléchargés avec succès!');
  
  // Définir la variable d'environnement
  console.log('Pour utiliser ces certificats, exécutez:');
  
  // Pour Windows (cmd)
  console.log(`set NODE_EXTRA_CA_CERTS=${CERT_PATH}`);
  
  // Pour PowerShell
  console.log(`$env:NODE_EXTRA_CA_CERTS="${CERT_PATH}"`);
  
  // Pour bash/Linux/MacOS
  console.log(`export NODE_EXTRA_CA_CERTS="${CERT_PATH}"`);
  
  console.log('\nEnsuite, relancez votre application Node.js');
} catch (error) {
  console.error('Erreur:', error);
}