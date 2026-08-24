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
  X
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
      {/* 1. Top Black Strip (Contact Info & Social Links) */}
      <div className="navbar-topbar">
        <div className="topbar-container">
          <div className="topbar-left">
            <a href="tel:+91XXXXXXXXXX" className="topbar-item">
              <Phone size={13} color="#C8A22C" /> <span>+91 (XXX) XXX-XXXX</span>
            </a>
            <span className="topbar-divider">|</span>
            <a href="mailto:enquiry@atainfratech.com" className="topbar-item">
              <Mail size={13} color="#C8A22C" /> <span>enquiry@atainfratech.com</span>
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
                <NavLink to="/about">Our Story & Approach</NavLink>
                <NavLink to="/leadership">Leadership</NavLink>
                <NavLink to="/why-ata">Why ATA Infratech</NavLink>
              </div>
            )}
          </div>

          {/* What We Do Dropdown */}
          <div 
            className="nav-item dropdown-trigger"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-label">
              What We Do <ChevronDown size={14} />
            </span>
            {activeDropdown === "services" && (
              <div className="dropdown-menu">
                <NavLink to="/development">Development</NavLink>
                <NavLink to="/investment">Investment</NavLink>
                <NavLink to="/advisory">Advisory</NavLink>
                <NavLink to="/land-asset-strategy">Land & Asset Strategy</NavLink>
              </div>
            )}
          </div>

          {/* Projects Dropdown */}
          <div 
            className="nav-item dropdown-trigger"
            onMouseEnter={() => setActiveDropdown("projects")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-label">
              Projects <ChevronDown size={14} />
            </span>
            {activeDropdown === "projects" && (
              <div className="dropdown-menu">
                <NavLink to="/projects">All Projects</NavLink>
                <NavLink to="/projects?filter=ongoing">Ongoing Projects</NavLink>
                <NavLink to="/projects?filter=completed">Completed Projects</NavLink>
              </div>
            )}
          </div>

          {/* Investment Dropdown */}
          <div 
            className="nav-item dropdown-trigger"
            onMouseEnter={() => setActiveDropdown("investment")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span className="dropdown-label">
              Investment <ChevronDown size={14} />
            </span>
            {activeDropdown === "investment" && (
              <div className="dropdown-menu">
                <NavLink to="/investment-opportunities">Investment Opportunities</NavLink>
                <NavLink to="/investment">Investment Philosophy</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/blog" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            Blog
          </NavLink>

          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            Gallery
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            Contact
          </NavLink>
        </nav>

        <div className="navbar-action">
          <Link to="/contact" className="cta-button desktop-cta">Contact Us</Link>
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
              <NavLink to="/about">Our Story & Approach</NavLink>
              <NavLink to="/leadership">Leadership</NavLink>
              <NavLink to="/why-ata">Why ATA Infratech</NavLink>
            </div>
          )}
        </div>

        <div className="mobile-accordion">
          <div className="mobile-accordion-header" onClick={() => toggleMobileSubmenu("services")}>
            <span>What We Do</span>
            <ChevronDown size={16} className={mobileExpanded === "services" ? "rotate" : ""} />
          </div>
          {mobileExpanded === "services" && (
            <div className="mobile-submenu">
              <NavLink to="/development">Development</NavLink>
              <NavLink to="/investment">Investment</NavLink>
              <NavLink to="/advisory">Advisory</NavLink>
              <NavLink to="/land-asset-strategy">Land & Asset Strategy</NavLink>
            </div>
          )}
        </div>

        <div className="mobile-accordion">
          <div className="mobile-accordion-header" onClick={() => toggleMobileSubmenu("projects")}>
            <span>Projects</span>
            <ChevronDown size={16} className={mobileExpanded === "projects" ? "rotate" : ""} />
          </div>
          {mobileExpanded === "projects" && (
            <div className="mobile-submenu">
              <NavLink to="/projects">All Projects</NavLink>
              <NavLink to="/projects?filter=ongoing">Ongoing Projects</NavLink>
              <NavLink to="/projects?filter=completed">Completed Projects</NavLink>
            </div>
          )}
        </div>

        <div className="mobile-accordion">
          <div className="mobile-accordion-header" onClick={() => toggleMobileSubmenu("investment")}>
            <span>Investment</span>
            <ChevronDown size={16} className={mobileExpanded === "investment" ? "rotate" : ""} />
          </div>
          {mobileExpanded === "investment" && (
            <div className="mobile-submenu">
              <NavLink to="/investment-opportunities">Investment Opportunities</NavLink>
              <NavLink to="/investment">Investment Philosophy</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Link to="/contact" className="cta-button mobile-cta">Contact Us</Link>
      </div>
    </header>
  );
}