import { useState } from "react";
import PageBanner from "../Components/PageBanner";
import { 
  Mail, 
  Phone, 
  MapPin,  
  Sparkles,
  ArrowRight
} from "lucide-react";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram,  
  FaWhatsapp 
} from "react-icons/fa";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent to the ATA Infratech team.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      serviceType: "Aggregate (Sales)",
      city: "",
      message: ""
    });
  };

  return (
    <div className="w-full bg-[#FAFAFA] text-dark font-main min-h-screen">
      <PageBanner
        bgImage={contactBannerImg}
        tag="GET IN TOUCH"
        title="Let's Build Something Together"
        subtitle="Whether you need help selling your project, finding investors, or scaling your real estate brand — we're ready to talk."
      />

      {/* Main Form & Info Grid */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5">
              <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">CONNECT WITH US</span>
              <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-dark mb-4">Direct Communication Channels</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                Reach out to our leadership desk for project aggregation blueprints, investor inquiries, or strategic brand scaling.
              </p>

              <div className="space-y-4 mb-10">
                <a href="mailto:contact@atainfra.com" className="flex items-center gap-4 p-5 bg-white border border-black/10 rounded-xl shadow-sm hover:border-gold hover:translate-x-1.5 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-[#FBF8F0] border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold block">Official Email</span>
                    <strong className="text-sm md:text-base text-dark block font-bold">contact@atainfra.com</strong>
                    <small className="text-xs text-gray-500">Fast response within 24 business hours</small>
                  </div>
                </a>

                <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-4 p-5 bg-white border border-black/10 rounded-xl shadow-sm hover:border-gold hover:translate-x-1.5 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-[#FBF8F0] border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold block">Phone & Desk</span>
                    <strong className="text-sm md:text-base text-dark block font-bold">+91 XXXXXXXXXX</strong>
                    <small className="text-xs text-gray-500">Mon – Sat, 9:30 AM to 6:30 PM IST</small>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-white border border-black/10 rounded-xl shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-[#FBF8F0] border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold block">Regional Footprint</span>
                    <strong className="text-sm md:text-base text-dark block font-bold">Gorakhpur • Lucknow • Pune</strong>
                    <small className="text-xs text-gray-500">Active on-ground field execution hubs</small>
                  </div>
                </div>
              </div>

              {/* Social Connect Box */}
              <div className="bg-white p-6 rounded-xl border border-black/10 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-dark mb-4">Follow & Connect Online</h4>
                <div className="flex flex-wrap gap-2.5">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#1877F2] text-white rounded-md text-xs font-bold flex items-center gap-2 hover:opacity-90">
                    <FaFacebookF size={14} /> Facebook
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#0A66C2] text-white rounded-md text-xs font-bold flex items-center gap-2 hover:opacity-90">
                    <FaLinkedinIn size={14} /> LinkedIn
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#F09433] via-[#DC2743] to-[#BC1888] text-white rounded-md text-xs font-bold flex items-center gap-2 hover:opacity-90">
                    <FaInstagram size={14} /> Instagram
                  </a>
                  <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#25D366] text-white rounded-md text-xs font-bold flex items-center gap-2 hover:opacity-90">
                    <FaWhatsapp size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-black/10 border-t-4 border-t-gold shadow-lg">
              <div className="mb-6">
                <Sparkles size={20} className="text-gold mb-1" />
                <h3 className="text-2xl font-serif font-extrabold text-dark">Send Us a Project Brief</h3>
                <p className="text-gray-500 text-sm">Fill out the details below and an ATA strategist will reach out to you.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Your Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Satyam Kumar" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 XXXXX XXXXX" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="name@company.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Service Pillar *</label>
                    <select 
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold outline-none"
                    >
                      <option value="Aggregate (Sales)">Aggregate (Turnkey Project Sales)</option>
                      <option value="Invest (Capital)">Invest (Private Capital & Funding)</option>
                      <option value="Advise (Consulting)">Advise (Brand & Growth Consulting)</option>
                      <option value="General Partnership">General Partnership / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Project City *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Lucknow, Gorakhpur, Pune" 
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-3 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-dark mb-1">Project Details *</label>
                  <textarea 
                    rows="4" 
                    required 
                    placeholder="Tell us about your project area, inventory type, current timeline, or funding goals..." 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-gray-50 border border-black/10 rounded-md text-sm text-dark focus:bg-white focus:border-gold outline-none resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3.5 bg-gold hover:bg-gold-hover text-white text-xs font-bold uppercase tracking-widest rounded-md shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all"
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full py-16 bg-[#0D0D0D] border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-4">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-1">LOCATIONS & FOOTPRINT</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Interactive Strategic Footprint</h3>
            </div>
            <div className="flex gap-2.5">
              {["Gorakhpur Hub", "Lucknow Hub", "Pune Hub"].map((hub, i) => (
                <span key={i} className="bg-[#181818] border border-gold/30 text-gold px-3 py-1.5 rounded text-xs font-bold">
                  {hub}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gold/30 shadow-2xl">
            <iframe 
              title="ATA Infratech Presence Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8771144078877!2d80.94616597522295!3d26.84631377668637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd081f9b33a7%3A0xad5b3df63138b30e!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" 
              height="440" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}