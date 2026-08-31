import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Phone Call & WhatsApp setup
  const rawPhoneNumber = "+917503796513"; 
  const whatsappNumber = "917503796513"; 
  const defaultMessage = encodeURIComponent(
    "Hello ATA Infratech Team, I want to discuss a real estate project requirement (Aggregate / Invest / Advise)."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-7 md:right-7 z-[1999] flex flex-col items-end font-main">
      {/* 1. Interactive Tooltip Cloud */}
      {showTooltip && (
        <div className="relative bg-[#111111] text-white border border-gold/35 px-4 py-3 rounded-xl max-w-[240px] sm:max-w-[260px] mb-3.5 shadow-2xl animate-fade-in origin-bottom-right">
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-[#111111] border-r border-b border-gold/35 rotate-45" />

          {/* Close Icon */}
          <button 
            type="button"
            className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            aria-label="Close Chat Popup"
          >
            <X size={13} />
          </button>

          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#25D366] shadow-[0_0_8px_#25D366] inline-block" />
              <strong className="text-xs text-gold tracking-wide">ATA Advisory Desk</strong>
            </div>
            <p className="text-[11.5px] text-gray-300 leading-relaxed m-0">
              Need instant help with project sales, capital or advisory? Call or WhatsApp us.
            </p>
          </div>
        </div>
      )}

      {/* 2. Floating Action Buttons Stack */}
      <div className="flex flex-col gap-3 items-end">
        {/* Call Button with Pulsing Wave Blink */}
        <a
          href={`tel:${rawPhoneNumber}`}
          className="group relative w-12 h-12 md:w-[54px] md:h-[54px] rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white flex items-center justify-center shadow-lg hover:shadow-sky-500/40 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 border border-white/30"
          aria-label="Direct Call ATA Infratech"
        >
          {/* Call Pulse Wave Ring */}
          <span className="absolute -inset-1 rounded-full border-2 border-sky-400 opacity-75 animate-ping pointer-events-none" />

          <span className="hidden md:block absolute right-16 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-200 border border-white/10 whitespace-nowrap shadow-md">
            Call Now
          </span>
          <div className="group-hover:-rotate-12 transition-transform duration-300 z-10">
            <Phone size={20} className="md:w-[22px] md:h-[22px]" />
          </div>
        </a>

        {/* WhatsApp Button with Pulsing Wave Blink */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 md:w-[54px] md:h-[54px] rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/40 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
          aria-label="Chat with ATA Infratech on WhatsApp"
        >
          {/* WhatsApp Pulse Wave Ring */}
          <span className="absolute -inset-1 rounded-full border-2 border-[#25D366] opacity-75 animate-ping pointer-events-none" />

          <span className="hidden md:block absolute right-16 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-200 border border-white/10 whitespace-nowrap shadow-md">
            WhatsApp
          </span>
          <div className="group-hover:-rotate-12 transition-transform duration-300 z-10">
            <FaWhatsapp size={26} className="md:w-7 md:h-7" />
          </div>
        </a>
      </div>
    </div>
  );
}