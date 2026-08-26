import { Link } from "react-router-dom";
import { Building2, Coins, TrendingUp, MapPin } from "lucide-react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";
import logo from "../assets/ATA1.png";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        {/* 1. Brand Snapshot */}
        <div className="footer-brand">
          <img src={logo} alt="ATA Infratech" />
          <p className="footer-tagline">Aggregate. Invest. Advise.</p>
          <p className="footer-desc">
            Helping real estate builders sell faster, raise capital, and grow their business into a well-organized, branded company.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/why-ata">Why Choose Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* 3. Three Core Services + Social Media Handles Beneath */}
        <div className="footer-col">
          <h4>Our Services</h4>
          <Link to="/development">
            <Building2 size={14} color="#C8A22C" style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />
            Aggregate (Sales)
          </Link>
          <Link to="/investment-opportunities">
            <Coins size={14} color="#C8A22C" style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />
            Invest (Capital)
          </Link>
          <Link to="/advisory">
            <TrendingUp size={14} color="#C8A22C" style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />
            Advise (Consulting)
          </Link>
          <Link to="/services">The ATA Advantage</Link>

          {/* Social Media Section (LinkedIn, Facebook, Instagram, X) */}
          <div className="footer-social-block">
            <span className="footer-social-heading">Follow Us</span>
            <div className="footer-social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn size={13} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF size={13} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram size={13} />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (formerly Twitter)">
                <FaXTwitter size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* 4. Footprint / Locations + Media Channel (YouTube) */}
        <div className="footer-col">
          <h4>Our Footprint</h4>
          <Link to="/projects?filter=Gorakhpur">
            <MapPin size={14} color="#C8A22C" style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />
            Gorakhpur
          </Link>
          <Link to="/projects?filter=Lucknow">
            <MapPin size={14} color="#C8A22C" style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />
            Lucknow
          </Link>
          <Link to="/projects?filter=Pune">
            <MapPin size={14} color="#C8A22C" style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} />
            Pune
          </Link>
          <Link to="/blog">Builder Insights</Link>

          {/* Media Channel Beneath Footprint */}
          <div className="footer-social-block">
            <span className="footer-social-heading">Video Network</span>
            <div className="footer-social-icons">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025–2026 ATA Infratech. All Rights Reserved.</p>
        <div className="footer-legal">
          <Link to="/contact">Privacy Policy</Link>
          <Link to="/contact">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}