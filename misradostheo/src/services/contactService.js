// URL de base de l'API - modifier en fonction de votre environnement
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:5000/api';

/**
 * Envoie les données du formulaire de contact à l'API
 * @param {Object} formData - Les données du formulaire de contact
 * @returns {Promise<Object>} - Résultat de la requête
 */
export const sendContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Une erreur s\'est produite lors de l\'envoi du formulaire');
    }
    
    return { success: true, message: data.message };
  } catch (error) {
    console.error('Erreur dans sendContactForm:', error);
    return { 
      success: false, 
      message: error.message || 'Erreur de connexion au serveur'
    };
  }
};