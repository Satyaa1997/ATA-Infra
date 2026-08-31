
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

export default function WhatsAppButton() {

  // Phone Call & WhatsApp setup
  const rawPhoneNumber = "+917503796513"; 
  const whatsappNumber = "917503796513"; 
  const defaultMessage = encodeURIComponent(
    "Hello ATA Infratech Team, I want to discuss a real estate project requirement (Aggregate / Invest / Advise)."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[1999] flex flex-col items-end font-main">
     

      {/* 2. Floating Action Buttons Stack with Extended Spacing */}
      <div className="flex flex-col gap-5 sm:gap-6 items-end">
        {/* Call Button */}
        <div className="relative flex items-center justify-center">
          {/* Constrained Call Wave */}
          <span className="absolute inset-0 rounded-full border-2 border-sky-400/80 opacity-75 animate-ping pointer-events-none" />
          
          <a
            href={`tel:${rawPhoneNumber}`}
            className="group relative w-12 h-12 md:w-[54px] md:h-[54px] rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-white flex items-center justify-center shadow-lg hover:shadow-sky-500/40 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 border border-white/30 z-10"
            aria-label="Direct Call ATA Infratech"
          >
            <span className="hidden md:block absolute right-16 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-200 border border-white/10 whitespace-nowrap shadow-md">
              Call Now
            </span>
            <div className="group-hover:-rotate-12 transition-transform duration-300">
              <Phone size={20} className="md:w-[22px] md:h-[22px]" />
            </div>
          </a>
        </div>

        {/* WhatsApp Button */}
        <div className="relative flex items-center justify-center">
          {/* Constrained WhatsApp Wave */}
          <span className="absolute inset-0 rounded-full border-2 border-[#25D366]/80 opacity-75 animate-ping pointer-events-none" />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 md:w-[54px] md:h-[54px] rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/40 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 z-10"
            aria-label="Chat with ATA Infratech on WhatsApp"
          >
            <span className="hidden md:block absolute right-16 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-200 border border-white/10 whitespace-nowrap shadow-md">
              WhatsApp
            </span>
            <div className="group-hover:-rotate-12 transition-transform duration-300">
              <FaWhatsapp size={26} className="md:w-7 md:h-7" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}