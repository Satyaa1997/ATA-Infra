import { useState } from "react";
import PageBanner from "../components/PageBanner";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", userType: "Landowner", interest: "Development", message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been submitted.");
  };

  return (
    <div className="contact-page">
      <PageBanner
        tag="GET IN TOUCH"
        title="Let's Build Something Valuable Together."
        subtitle="Whether you have land, capital or a development vision, we'd like to hear from you."
      />

      <section className="section-padding">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">CONTACT INFORMATION</span>
            <h2>Start a Conversation</h2>
            <div className="info-block">
              <h4>Headquarters</h4>
              <p>ATA INFRATECH Private Limited<br />Corporate Hub, Lucknow, Uttar Pradesh</p>
            </div>
            <div className="info-block">
              <h4>Email & Phone</h4>
              <p>enquiry@atainfratech.com<br />+91 (XXX) XXX-XXXX</p>
            </div>
            <div className="info-block">
              <h4>Business Hours</h4>
              <p>Monday – Saturday: 10:00 AM – 6:00 PM</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Submit an Enquiry</h3>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Full Name *" 
                required 
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              />
            </div>
            <div className="form-row">
              <input 
                type="email" 
                placeholder="Email Address *" 
                required 
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
              />
              <input 
                type="tel" 
                placeholder="Phone Number *" 
                required 
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
              />
            </div>
            <div className="form-row">
              <select onChange={(e) => setFormData({ ...formData, userType: e.target.value })}>
                <option value="Landowner">I am a: Landowner</option>
                <option value="Investor">I am an: Investor</option>
                <option value="Developer">I am a: Developer</option>
                <option value="Business">I am a: Corporate / Business</option>
              </select>
              <select onChange={(e) => setFormData({ ...formData, interest: e.target.value })}>
                <option value="Development">Interested in: Development</option>
                <option value="Investment">Interested in: Investment</option>
                <option value="Advisory">Interested in: Advisory</option>
                <option value="Land">Interested in: Land Opportunity</option>
              </select>
            </div>
            <div className="form-group">
              <textarea 
                rows="4" 
                placeholder="Tell us about your project or requirement..." 
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn-gold form-btn">Submit Enquiry</button>
          </form>
        </div>
      </section>
    </div>
  );
}