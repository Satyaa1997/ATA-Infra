import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/ATA1.png";
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="ATA Infratech" />
          <p className="footer-tagline">Strategic Real Estate Partner</p>
          <p className="footer-desc">
            Turning Land & Vision into High-Value Assets through disciplined development, investment intelligence, and strategic advisory.
          </p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/about#story">Our Story</Link>
          <Link to="/career">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>What We Do</h4>
          <Link to="/development">Development</Link>
          <Link to="/investment">Investment</Link>
          <Link to="/advisory">Advisory</Link>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/projects">Selected Projects</Link>
          <Link to="/insights">Market Insights</Link>
          <Link to="/contact">Partner With Us</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ATA INFRATECH. All Rights Reserved.</p>
        <div className="footer-legal">
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}