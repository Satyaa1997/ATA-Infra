import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  User, 
  Phone, 
  Mail, 
  Building, 
  MapPin, 
  Sparkles 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Gorakhpur",
    service: "Aggregate (Sales Execution)",
    message: ""
  });

  // Aapka WhatsApp Number
  const whatsappNumber = "917503796513"; 

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp Structured Message Format
    const whatsappMessage = 
      `*New Inquiry (Talk to Team Modal) - ATA Infratech*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || "Not Provided"}\n` +
      `📍 *Project Hub/City:* ${formData.city}\n` +
      `🏢 *Service Required:* ${formData.service}\n` +
      `📝 *Message/Details:* ${formData.message || "None"}\n\n` +
      `_Sent via ATA Infratech Modal Form_`;

    // WhatsApp API URL generator
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Naye tab me WhatsApp chat open karega
    window.open(whatsappUrl, "_blank");

    // Modal close & Reset
    onClose();
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "Gorakhpur",
      service: "Aggregate (Sales Execution)",
      message: ""
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999999] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            className="bg-white border border-gold/40 rounded-xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close Button */}
            <button 
              type="button" 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-dark hover:text-white flex items-center justify-center text-gray-700 transition-all duration-200"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="mb-6 pr-6">
              <span className="inline-flex items-center gap-1.5 text-gold text-xs font-bold tracking-widest uppercase mb-1.5">
                <Sparkles size={13} /> CONNECT WITH ATA INFRATECH
              </span>
              <h2 className="text-2xl font-serif font-extrabold text-dark leading-tight">Talk to Our Core Team</h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Tell us about your project requirements. Submit to send an instant brief to our WhatsApp desk.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Your Full Name *</label>
                  <div className="relative flex items-center">
                    <User size={16} className="absolute left-3 text-gold pointer-events-none" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Satyam Kumar"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Contact Number *</label>
                  <div className="relative flex items-center">
                    <Phone size={16} className="absolute left-3 text-gold pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Email Address</label>
                  <div className="relative flex items-center">
                    <Mail size={16} className="absolute left-3 text-gold pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Project Hub / City</label>
                  <div className="relative flex items-center">
                    <MapPin size={16} className="absolute left-3 text-gold pointer-events-none" />
                    <select 
                      name="city" 
                      value={formData.city} 
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    >
                      <option value="Gorakhpur">Gorakhpur</option>
                      <option value="Lucknow">Lucknow</option>
                      <option value="Pune">Pune</option>
                      <option value="Other">Other Region</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Required Service Pillar *</label>
                <div className="relative flex items-center">
                  <Building size={16} className="absolute left-3 text-gold pointer-events-none" />
                  <select 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  >
                    <option value="Aggregate (Sales Execution)">Aggregate — Full Sales Engine & Partner Blueprints</option>
                    <option value="Invest (Capital & Funding)">Invest — Milestone-Linked Private Investor Syndication</option>
                    <option value="Advise (Growth Consulting)">Advise — Corporate Scaling, Branding & Team Hiring</option>
                    <option value="End-to-End 3-in-1 Support">Complete 3-in-1 Unified Solution</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Project Details / Message</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Brief details about your project size, stage, or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 bg-[#25D366] hover:bg-[#1ebd5a] text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaWhatsapp size={16} /> Send via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}