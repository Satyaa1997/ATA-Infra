import { Link } from "react-router-dom";
import { Building2, Coins, TrendingUp, MapPin } from "lucide-react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/ATA1.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] border-t border-gold/25 pt-36 pb-8 text-white relative z-10 font-main">
      {/* Centered Container with Balanced Side Gutters */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="ATA Infratech" className="h-20 w-auto object-contain mb-4 -ml-1" />
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-3">Aggregate. Invest. Advise.</p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Helping real estate builders sell faster, raise capital, and grow their business into a well-organized, branded company.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Projects</Link></li>
              <li><Link to="/why-ata" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Why Choose Us</Link></li>
              <li><Link to="/contact" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services + Social Handles */}
          <div className="lg:pl-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 mb-6">
              <li>
                <Link to="/development" className="hover:text-gold hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <Building2 size={14} className="text-gold" /> Aggregate (Sales)
                </Link>
              </li>
              <li>
                <Link to="/investment-opportunities" className="hover:text-gold hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <Coins size={14} className="text-gold" /> Invest (Capital)
                </Link>
              </li>
              <li>
                <Link to="/advisory" className="hover:text-gold hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <TrendingUp size={14} className="text-gold" /> Advise (Consulting)
                </Link>
              </li>
              <li>
                <Link to="/why-ata" className="hover:text-gold hover:translate-x-1 inline-block transition-all">The ATA Advantage</Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">Follow Us</span>
              <div className="flex items-center gap-2.5">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#141414] border border-gold/25 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-dark hover:-translate-y-1 transition-all">
                  <FaLinkedinIn size={13} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#141414] border border-gold/25 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-dark hover:-translate-y-1 transition-all">
                  <FaFacebookF size={13} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#141414] border border-gold/25 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-dark hover:-translate-y-1 transition-all">
                  <FaInstagram size={13} />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#141414] border border-gold/25 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-dark hover:-translate-y-1 transition-all">
                  <FaXTwitter size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Footprint + Media */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Our Footprint</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 mb-6">
              <li>
                <Link to="/projects?filter=Gorakhpur" className="hover:text-gold hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <MapPin size={14} className="text-gold" /> Gorakhpur Hub
                </Link>
              </li>
              <li>
                <Link to="/projects?filter=Lucknow" className="hover:text-gold hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <MapPin size={14} className="text-gold" /> Lucknow Hub
                </Link>
              </li>
              <li>
                <Link to="/projects?filter=Pune" className="hover:text-gold hover:translate-x-1 inline-flex items-center gap-2 transition-all">
                  <MapPin size={14} className="text-gold" /> Pune Hub
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold hover:translate-x-1 inline-block transition-all">Builder Insights</Link>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">Video Network</span>
              <div className="flex items-center gap-2.5">
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#141414] border border-gold/25 flex items-center justify-center text-gray-300 hover:bg-gold hover:text-dark hover:-translate-y-1 transition-all">
                  <FaYoutube size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>© 2025–2026 ATA Infratech. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/contact" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}