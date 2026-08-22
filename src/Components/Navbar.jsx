import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="navbar-logo">
        <img src="./src/assets/ATA1.png" alt="ATA Infratech" />
      </Link>

      <nav className="desktop-nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About Us</Link>
        
        <div 
          className="nav-item dropdown-trigger"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropdown-label">
            What We Do <ChevronDown size={14} />
          </span>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/development">Development</Link>
              <Link to="/investment">Investment</Link>
              <Link to="/advisory">Advisory</Link>
            </div>
          )}
        </div>

        <Link to="/projects" className="nav-item">Projects</Link>
        <Link to="/insights" className="nav-item">Insights</Link>
        <Link to="/careers" className="nav-item">Careers</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>

      <div className="navbar-action">
        <Link to="/contact" className="cta-button desktop-cta">Partner With Us</Link>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/development">Development</Link>
        <Link to="/investment">Investment</Link>
        <Link to="/advisory">Advisory</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/insights">Insights</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact" className="cta-button mobile-cta">Partner With Us</Link>
      </div>
    </header>
  );
}