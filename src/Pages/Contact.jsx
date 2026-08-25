import { useState } from "react";
import PageBanner from "../Components/PageBanner";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Sparkles,
  ArrowRight
} from "lucide-react";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp 
} from "react-icons/fa";
import "./Contact.css";
import contactBannerImg from "../assets/Banner.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Aggregate (Sales)",
    city: "",
    message: ""
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      alert("Thank you! Your message has been sent to the ATA Infratech team.");
      setFormSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "Aggregate (Sales)",
        city: "",
        message: ""
      });
    }, 400);
  };

  return (
    <div className="contact-page">
      {/* 1. Header Banner */}
      <PageBanner
        bgImage={contactBannerImg}
        tag="GET IN TOUCH"
        title="Let's Build Something Together"
        subtitle="Whether you need help selling your project, finding investors, or scaling your real estate brand — we're ready to talk."
      />

      {/* 2. Main Contact Grid */}
      <section className="section-padding">
        <div className="contact-grid">
          
          {/* Left Column: Direct Info & Social Hub */}
          <div className="contact-info">
            <span className="section-tag">CONNECT WITH US</span>
            <h2>Direct Communication Channels</h2>
            <p className="contact-intro-p">
              Reach out to our leadership desk for project aggregation blueprints, investor inquiries, or strategic brand scaling.
            </p>

            {/* Interactive Info Cards */}
            <div className="info-cards-list">
              <a href="mailto:contact@atainfra.com" className="contact-info-card">
                <div className="info-icon-wrapper">
                  <Mail size={20} color="#C8A22C" />
                </div>
                <div className="info-card-text">
                  <span>Official Email</span>
                  <strong>contact@atainfra.com</strong>
                  <small>Fast response within 24 business hours</small>
                </div>
              </a>

              <a href="tel:+91XXXXXXXXXX" className="contact-info-card">
                <div className="info-icon-wrapper">
                  <Phone size={20} color="#C8A22C" />
                </div>
                <div className="info-card-text">
                  <span>Phone & Desk</span>
                  <strong>+91 XXXXXXXXXX</strong>
                  <small>Mon – Sat, 9:30 AM to 6:30 PM IST</small>
                </div>
              </a>

              <div className="contact-info-card static">
                <div className="info-icon-wrapper">
                  <MapPin size={20} color="#C8A22C" />
                </div>
                <div className="info-card-text">
                  <span>Regional Footprint</span>
                  <strong>Gorakhpur &bull; Lucknow &bull; Pune</strong>
                  <small>Active on-ground field execution hubs</small>
                </div>
              </div>

              <div className="contact-info-card static">
                <div className="info-icon-wrapper">
                  <Building2 size={20} color="#C8A22C" />
                </div>
                <div className="info-card-text">
                  <span>Corporate Headquarters</span>
                  <strong>ATA Infratech Corporate Office</strong>
                  <small>Lucknow &bull; Gorakhpur Highway Corridor, UP, India</small>
                </div>
              </div>
            </div>

            {/* Social Channels Network */}
            <div className="social-connect-box">
              <h4>Follow & Connect Online</h4>
              <div className="social-links-row">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn facebook"
                  aria-label="Facebook Profile"
                >
                  <FaFacebookF size={16} />
                  <span>Facebook</span>
                </a>

                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn linkedin"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn size={16} />
                  <span>LinkedIn</span>
                </a>

                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn instagram"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram size={16} />
                  <span>Instagram</span>
                </a>

                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn twitter"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter size={16} />
                  <span>Twitter</span>
                </a>

                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn whatsapp"
                  aria-label="WhatsApp Chat"
                >
                  <FaWhatsapp size={16} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <Sparkles size={20} color="#C8A22C" />
                <h3>Send Us a Project Brief</h3>
                <p>Fill out the details below and an ATA strategist will reach out to you.</p>
              </div>
              
              <div className="form-group">
                <label>Your Full Name *</label>
                <input 
                  type="text" 
                  placeholder="e.g. Satyam Kumar" 
                  value={formData.name}
                  required 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    value={formData.phone}
                    required 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                  />
                </div>

                <div className="form-group">
                  <label>Official Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    value={formData.email}
                    required 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Service Requirement *</label>
                  <select 
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  >
                    <option value="Aggregate (Sales)">Aggregate (Turnkey Project Sales)</option>
                    <option value="Invest (Capital)">Invest (Private Capital & Funding)</option>
                    <option value="Advise (Consulting)">Advise (Brand & Growth Consulting)</option>
                    <option value="General Partnership">General Partnership / Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Project City / Location *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Lucknow, Gorakhpur, Pune" 
                    value={formData.city}
                    required 
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })} 
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Project Requirement Details *</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your project area, inventory type, current timeline, or funding goals..." 
                  value={formData.message}
                  required
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-gold form-btn">
                <span>Send Message</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 3. Full-Width Interactive Google Maps & Hubs Section */}
      <section className="contact-map-section">
        <div className="map-header-bar">
          <div className="map-title-wrap">
            <span className="section-tag">LOCATIONS & FOOTPRINT</span>
            <h3>Interactive Strategic Footprint</h3>
          </div>
          <div className="map-city-pills">
            <span>Gorakhpur Hub</span>
            <span>Lucknow Hub</span>
            <span>Pune Hub</span>
          </div>
        </div>

        <div className="map-frame-container">
          <iframe 
            title="ATA Infratech Presence Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8771144078877!2d80.94616597522295!3d26.84631377668637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd081f9b33a7%3A0xad5b3df63138b30e!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%" 
            height="460" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}