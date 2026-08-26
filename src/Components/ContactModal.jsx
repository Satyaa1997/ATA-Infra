import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Send, 
  User, 
  Phone, 
  Mail, 
  Building, 
  MapPin, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import "./ContactModal.css";

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Gorakhpur",
    service: "Aggregate (Sales Execution)",
    message: ""
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
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
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-backdrop-overlay" onClick={onClose}>
          <motion.div
            className="modal-glass-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>

            {submitted ? (
              <motion.div 
                className="modal-success-state"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon-wrap">
                  <CheckCircle2 size={54} color="#C8A22C" />
                </div>
                <h3>Inquiry Submitted!</h3>
                <p>Thank you for reaching out. Our real estate advisory team will connect with you within 24 hours.</p>
              </motion.div>
            ) : (
              <>
                <div className="modal-header-block">
                  <span className="modal-tag">
                    <Sparkles size={13} color="#C8A22C" /> CONNECT WITH ATA INFRATECH
                  </span>
                  <h2>Talk to Our Core Team</h2>
                  <p>Tell us about your project or growth requirements. We build scalable sales & capital pipelines.</p>
                </div>

                <form className="modal-inquiry-form" onSubmit={handleSubmit}>
                  <div className="modal-form-grid">
                    <div className="modal-input-group">
                      <label>Your Full Name *</label>
                      <div className="input-with-icon">
                        <User size={16} className="field-icon" />
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="e.g. Rajeshwar Singh"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="modal-input-group">
                      <label>Contact Number *</label>
                      <div className="input-with-icon">
                        <Phone size={16} className="field-icon" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="modal-input-group">
                      <label>Email Address</label>
                      <div className="input-with-icon">
                        <Mail size={16} className="field-icon" />
                        <input
                          type="email"
                          name="email"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="modal-input-group">
                      <label>Project Hub / City</label>
                      <div className="input-with-icon">
                        <MapPin size={16} className="field-icon" />
                        <select name="city" value={formData.city} onChange={handleChange}>
                          <option value="Gorakhpur">Gorakhpur</option>
                          <option value="Lucknow">Lucknow</option>
                          <option value="Pune">Pune</option>
                          <option value="Other">Other Region</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="modal-input-group full-width">
                    <label>Required Service Pillar *</label>
                    <div className="input-with-icon">
                      <Building size={16} className="field-icon" />
                      <select name="service" value={formData.service} onChange={handleChange}>
                        <option value="Aggregate (Sales Execution)">Aggregate — Full Sales Engine & Partner Blueprints</option>
                        <option value="Invest (Capital & Funding)">Invest — Milestone-Linked Private Investor Syndication</option>
                        <option value="Advise (Growth Consulting)">Advise — Corporate Scaling, Branding & Team Hiring</option>
                        <option value="End-to-End 3-in-1 Support">Complete 3-in-1 Unified Solution</option>
                      </select>
                    </div>
                  </div>

                  <div className="modal-input-group full-width">
                    <label>Project Details / Message (Optional)</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Brief details about your project size, stage, or requirements..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="modal-submit-btn">
                    Submit Inquiry <Send size={16} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}