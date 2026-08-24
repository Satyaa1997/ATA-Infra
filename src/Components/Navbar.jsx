import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/ATA1.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  const toggleMobileSubmenu = (menu) => {
    setMobileExpanded(mobileExpanded === menu ? null : menu);
  };

  return (
    <header className={`navbar-header ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="ATA Infratech" />
      </Link>

      <nav className="desktop-nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} end>
          Home
        </NavLink>

        {/* 1. About Us Dropdown */}
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

        {/* 2. What We Do Dropdown */}
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

        {/* 3. Projects Dropdown */}
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

        {/* 4. Investment Dropdown */}
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
              <NavLink to="/contact?type=partner">Partner With Us</NavLink>
            </div>
          )}
        </div>

        {/* 5. Insights Dropdown */}
        <div 
          className="nav-item dropdown-trigger"
          onMouseEnter={() => setActiveDropdown("insights")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <span className="dropdown-label">
            Insights <ChevronDown size={14} />
          </span>
          {activeDropdown === "insights" && (
            <div className="dropdown-menu">
              <NavLink to="/insights">Market Insights</NavLink>
              <NavLink to="/insights?cat=trends">Real Estate Trends</NavLink>
              <NavLink to="/insights?cat=news">News & Updates</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/careers" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          Careers
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
          Contact
        </NavLink>
      </nav>

      <div className="navbar-action">
        <Link to="/contact" className="cta-button desktop-cta">Partner With Us</Link>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Menu">
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Accordion Menu */}
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
              <NavLink to="/contact?type=partner">Partner With Us</NavLink>
            </div>
          )}
        </div>

        <div className="mobile-accordion">
          <div className="mobile-accordion-header" onClick={() => toggleMobileSubmenu("insights")}>
            <span>Insights</span>
            <ChevronDown size={16} className={mobileExpanded === "insights" ? "rotate" : ""} />
          </div>
          {mobileExpanded === "insights" && (
            <div className="mobile-submenu">
              <NavLink to="/insights">Market Insights</NavLink>
              <NavLink to="/insights?cat=trends">Real Estate Trends</NavLink>
              <NavLink to="/insights?cat=news">News & Updates</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <Link to="/contact" className="cta-button mobile-cta">Partner With Us</Link>
      </div>
    </header>
  );
}