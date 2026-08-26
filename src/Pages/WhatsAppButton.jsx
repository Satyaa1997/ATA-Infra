import  { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, X } from "lucide-react";
import "./WhatsAppButton.css";

export default function WhatsAppButton({ onOpenContactModal }) {
  const [showTooltip, setShowTooltip] = useState(true);

  // Phone Call & WhatsApp setup
  const rawPhoneNumber = "+919876543210"; // Apna actual call number dalein
  const whatsappNumber = "919876543210"; // Apna WhatsApp number dalein
  const defaultMessage = encodeURIComponent(
    "Hello ATA Infratech Team, I want to discuss a real estate project requirement (Aggregate / Invest / Advise)."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="floating-action-wrapper">
      {/* 1. Interactive Tooltip Card */}
      {showTooltip && (
        <div className="action-tooltip-card">
          <button 
            className="tooltip-close-btn" 
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            aria-label="Close Chat Popup"
          >
            <X size={13} />
          </button>
          <div className="tooltip-content-text">
            <div className="tooltip-header-status">
              <span className="online-dot" />
              <strong>ATA Advisory Desk</strong>
            </div>
            <p>Need instant help with project sales, capital or advisory? Call or WhatsApp us.</p>
          </div>
        </div>
      )}

      {/* 2. Dual Action Buttons Stack */}
      <div className="floating-buttons-stack">
        {/* Light Blue Call Button */}
        <a
          href={`tel:${rawPhoneNumber}`}
          className="floating-btn call-float-btn"
          aria-label="Direct Call ATA Infratech"
        >
          <span className="btn-label-hover">Call Now</span>
          <div className="btn-icon-inner">
            <Phone size={22} />
          </div>
        </a>

        {/* WhatsApp Official Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-float-btn"
          aria-label="Chat with ATA Infratech on WhatsApp"
        >
          <span className="btn-label-hover">WhatsApp</span>
          <span className="whatsapp-pulse-ring" />
          <span className="whatsapp-pulse-ring delay" />
          <div className="btn-icon-inner">
            <FaWhatsapp size={28} />
          </div>
        </a>
      </div>
    </div>
  );
}