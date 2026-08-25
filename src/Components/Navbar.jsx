import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Building2,
  Coins,
  TrendingUp,
} from "lucide-react";
import "./Navbar.css";
import logo from "../assets/ATA4.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  const toggleMobileSubmenu = (menu) => {
    setMobileExpanded(mobileExpanded === menu ? null : menu);
  };

  return (
    <header className="navbar-wrapper">
      {/* 1. Top Black Strip */}
      <div className="navbar-topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <a href="tel:+91XXXXXXXXXX" className="topbar-item">
              <Phone size={13} color="#C8A22C" /> <span>+91 XXXXXXXXXX</span>
            </a>
            <span className="topbar-divider">|</span>
            <a href="mailto:contact@atainfra.com" className="topbar-item">
              <Mail size={13} color="#C8A22C" /> <span>contact@atainfra.com</span>
            </a>
          </div>

          <div className="topbar-right">
            <span className="topbar-label">Follow Us:</span>
            <div className="topbar-social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={13}/>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebook size={13}/>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram size={13}/>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter size={13}/>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="navbar-main">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="ATA Infratech" />
        </Link>

        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} end>
            Home
          </NavLink>

          {/* About Us Dropdown */}
          <div 
            className="nav-item dropdown-trigger"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-label">
              About Us <ChevronDown size={14} />
            </span>
            {activeDropdown === "about" && (
              <div className="dropdown-menu">
                <NavLink to="/about">Who We Are</NavLink>
                <NavLink to="/why-ata">Why Choose Us</NavLink>
              </div>
            )}
          </div>

          {/* 3 Core Services Dropdown */}
          <div 
            className="nav-item dropdown-trigger"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-label">
              Services <ChevronDown size={14} />
            </span>
            {activeDropdown === "services" && (
              <div className="dropdown-menu">
                <NavLink to="/development" className="service-nav-link">
                  <Building2 size={15} color="#C8A22C" /> Aggregate (Sales)
                </NavLink>
                <NavLink to="/investment-opportunities" className="service-nav-link">
                  <Coins size={15} color="#C8A22C" /> Invest (Capital)
                </NavLink>
                <NavLink to="/advisory" className="service-nav-link">
                  <TrendingUp size={15} color="#C8A22C" /> Advise (Consulting)
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/projects" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            Projects
          </NavLink>

          <NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            Blog
          </NavLink>

          {/* Gallery Link Added Next to Blog */}
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            Gallery
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            Contact
          </NavLink>
        </nav>

        <div className="navbar-action">
          <Link to="/contact" className="cta-button desktop-cta">Talk to Our Team</Link>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
            {mobileOpen ? <X size={26} color="#121212" /> : <Menu size={26} color="#121212" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        <NavLink to="/" end>Home</NavLink>

        <div className="mobile-accordion">
          <div className="mobile-accordion-header" onClick={() => toggleMobileSubmenu("about")}>
            <span>About Us</span>
            <ChevronDown size={16} className={mobileExpanded === "about" ? "rotate" : ""} />
          </div>
          {mobileExpanded === "about" && (
            <div className="mobile-submenu">
              <NavLink to="/about">Who We Are</NavLink>
              <NavLink to="/our-team">Our Team</NavLink>
              <NavLink to="/why-ata">Why Choose Us</NavLink>
            </div>
          )}
        </div>

        <div className="mobile-accordion">
          <div className="mobile-accordion-header" onClick={() => toggleMobileSubmenu("services")}>
            <span>Services</span>
            <ChevronDown size={16} className={mobileExpanded === "services" ? "rotate" : ""} />
          </div>
          {mobileExpanded === "services" && (
            <div className="mobile-submenu">
              <NavLink to="/development">
                <Building2 size={15} color="#C8A22C" style={{ display: "inline", verticalAlign: "middle", marginRight: 8 }} />
                Aggregate (Sales Execution)
              </NavLink>
              <NavLink to="/investment-opportunities">
                <Coins size={15} color="#C8A22C" style={{ display: "inline", verticalAlign: "middle", marginRight: 8 }} />
                Invest (Capital & Funding)
              </NavLink>
              <NavLink to="/advisory">
                <TrendingUp size={15} color="#C8A22C" style={{ display: "inline", verticalAlign: "middle", marginRight: 8 }} />
                Advise (Growth Consulting)
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Link to="/contact" className="cta-button mobile-cta">Talk to Our Team</Link>
      </div>
    </header>
  );
}