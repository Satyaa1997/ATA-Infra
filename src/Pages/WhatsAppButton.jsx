import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Direct WhatsApp click-to-chat link (Number aur pre-filled message)
  const phoneNumber = "91XXXXXXXXXX"; // Apna actual 10-digit WhatsApp business number replace karein
  const defaultMessage = encodeURIComponent(
    "Hello ATA Infratech Team, I want to discuss a real estate project requirement (Aggregate / Invest / Advise)."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="floating-whatsapp-wrapper">
      {/* 1. Interactive Tooltip Cloud */}
      {showTooltip && (
        <div className="whatsapp-tooltip-card">
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
            <p>Need help with project sales, capital or advisory? Chat with our team.</p>
          </div>
        </div>
      )}

      {/* 2. Floating Action Button with WhatsApp Icon & Pulse Rings */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        aria-label="Chat with ATA Infratech on WhatsApp"
      >
        {/* Animated Glow / Pulse Rings */}
        <span className="whatsapp-pulse-ring" />
        <span className="whatsapp-pulse-ring delay" />

        {/* Official WhatsApp Logo Icon */}
        <div className="whatsapp-icon-inner">
          <FaWhatsapp size={32} />
        </div>
      </a>
    </div>
  );
}