import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  // Apna 10 digit WhatsApp number yahan likhein (Country code 91 ke sath)
  const phoneNumber = "919999999999"; 
  const defaultMessage = "Hello ATA INFRATECH, I want to discuss a project / property requirement.";

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    
    // Direct Universal WhatsApp link
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;
    
    // Naye tab me WhatsApp chat open hogi
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleWhatsAppRedirect}
      className="whatsapp-float-btn"
      aria-label="Chat with ATA Infratech on WhatsApp"
    >
      <MessageCircle size={28} className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
      <span className="whatsapp-ping" />
    </button>
  );
}