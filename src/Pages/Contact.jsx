import { useState } from "react";
import PageBanner from "../Components/PageBanner";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import "./Contact.css";
import contactBannerImg from "../assets/Banner.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent to the ATA Infratech team.");
  };

  return (
    <div className="contact-page">
      <PageBanner
        bgImage={contactBannerImg}
        tag="GET IN TOUCH"
        title="Let's Build Something Together"
        subtitle="Whether you need help selling your project, finding investors, or growing your business — we're ready to talk."
      />

      <section className="section-padding">
        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info">
            <span className="section-tag">CONTACT US</span>
            <h2>Get in Touch</h2>
            
            <div className="info-block">
              <h4><Mail size={16} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} /> Email</h4>
              <p>contact@atainfra.com</p>
            </div>

            <div className="info-block">
              <h4><Phone size={16} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} /> Phone</h4>
              <p>+91 XXXXXXXXXX</p>
            </div>

            <div className="info-block">
              <h4><MapPin size={16} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} /> Active Presence</h4>
              <p>Gorakhpur &bull; Lucknow &bull; Pune</p>
            </div>

            <div className="info-block">
              <h4><Globe size={16} style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle' }} /> Website</h4>
              <p>atainfra.com</p>
            </div>
          </div>

          {/* Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Name *" 
                required 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              />
            </div>

            <div className="form-row">
              <input 
                type="tel" 
                placeholder="Phone Number *" 
                required 
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
              />
              <input 
                type="email" 
                placeholder="Email Address *" 
                required 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              />
            </div>

            <div className="form-group">
              <input 
                type="text" 
                placeholder="City / Project Location *" 
                required 
                onChange={(e) => setFormData({ ...formData, city: e.target.value })} 
              />
            </div>

            <div className="form-group">
              <textarea 
                rows="4" 
                placeholder="Tell us about your project requirement (Aggregate, Invest, or Advisory)..." 
                required
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-gold form-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}