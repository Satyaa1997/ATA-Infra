import { Link } from "react-router-dom";
import { Building2, Coins, TrendingUp, MapPin } from "lucide-react";
import "./Footer.css";
import logo from "../assets/ATA1.png";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        {/* Brand Snapshot */}
        <div className="footer-brand">
          <img src={logo} alt="ATA Infratech" />
          <p className="footer-tagline">Aggregate. Invest. Advise.</p>
          <p className="footer-desc">
            Helping real estate builders sell faster, raise capital, and grow their business into a well-organized, branded company.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/why-ata">Why Choose Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* 3 Core Services */}
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
        </div>

        {/* Footprint / Locations */}
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