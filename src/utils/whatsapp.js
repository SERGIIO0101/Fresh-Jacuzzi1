// src/utils/whatsapp.js

export const sendWhatsappMessage = (productName, productRef) => {
  const phoneNumber = "573172464196"; // Número oficial de FRESH
  
  // Mensaje estructurado para que el cliente parezca profesional
  const message = `Hola FRESH. Me interesa recibir la ficha técnica y precio final de:
  
*Producto:* ${productName}
*Referencia:* ${productRef || 'Consultar'}

Vengo desde el catálogo oficial de la web.`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};