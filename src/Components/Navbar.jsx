import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
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
import ContactModal from "./ContactModal";
import logo from "../assets/ATA4.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location]);

  const toggleMobileSubmenu = (menu) => {
    setMobileExpanded(mobileExpanded === menu ? null : menu);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex flex-col font-main">
        {/* 1. Top Bar */}
        <div className="bg-[#0a0a0a] text-[#cccccc] h-9 border-b border-gold/25 text-xs flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex justify-between items-center">
            <div className="flex items-center gap-3.5">
              <a href="tel:+917503796513" className="text-gray-300 hover:text-gold transition-colors duration-200 flex items-center gap-1.5 text-xs">
                <Phone size={13} className="text-gold" /> <span>+917503796513</span>
              </a>
              <span className="text-white/20">|</span>
              <a href="mailto:contact@atainfra.com" className="text-gray-300 hover:text-gold transition-colors duration-200 flex items-center gap-1.5 text-xs">
                <Mail size={13} className="text-gold" /> <span>contact@atainfra.com</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-[#f7f0f0] text-[11px] uppercase tracking-wider">Follow Us:</span>
              <div className="flex items-center gap-3.5">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-gold hover:-translate-y-0.5 transition-all">
                  <FaLinkedinIn size={13} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-gold hover:-translate-y-0.5 transition-all">
                  <FaFacebookF size={13} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-gold hover:-translate-y-0.5 transition-all">
                  <FaInstagram size={13} />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-gold hover:-translate-y-0.5 transition-all">
                  <FaTwitter size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Navbar */}
        <div className="bg-white h-[72px] border-b border-black/10 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full h-full flex justify-between items-center">
            <Link to="/" className="h-full flex items-center -ml-1">
              <img 
                src={logo} 
                alt="ATA Infratech" 
                className="h-[52px] md:h-[58px] w-auto max-w-[280px] object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <NavLink 
                to="/" 
                end 
                className={({ isActive }) => 
                  `text-sm tracking-wide uppercase font-bold py-2 transition-colors duration-200 relative ${
                    isActive ? "text-gold after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2.5px] after:bg-gold" : "text-dark hover:text-gold"
                  }`
                }
              >
                Home
              </NavLink>

              {/* About Us Dropdown */}
              <div 
                className="relative py-2 cursor-pointer"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="text-sm tracking-wide uppercase font-bold text-dark hover:text-gold flex items-center gap-1 transition-colors">
                  About Us <ChevronDown size={14} />
                </span>
                {activeDropdown === "about" && (
                  <div className="absolute top-full left-0 bg-white border border-black/10 border-t-[3px] border-t-gold shadow-xl min-w-[220px] flex flex-col py-2 rounded-b-md z-50">
                    <NavLink to="/about" className="px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-gray-700 hover:text-gold hover:bg-[#FAF6ED] transition-all">
                      Who We Are
                    </NavLink>
                    <NavLink to="/why-ata" className="px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-gray-700 hover:text-gold hover:bg-[#FAF6ED] transition-all">
                      Why Choose Us
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative py-2 cursor-pointer"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="text-sm tracking-wide uppercase font-bold text-dark hover:text-gold flex items-center gap-1 transition-colors">
                  Services <ChevronDown size={14} />
                </span>
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 bg-white border border-black/10 border-t-[3px] border-t-gold shadow-xl min-w-[260px] flex flex-col py-2 rounded-b-md z-50">
                    <NavLink to="/development" className="px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-gray-700 hover:text-gold hover:bg-[#FAF6ED] transition-all flex items-center gap-2">
                      <Building2 size={15} className="text-gold" /> Aggregate (Sales)
                    </NavLink>
                    <NavLink to="/investment-opportunities" className="px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-gray-700 hover:text-gold hover:bg-[#FAF6ED] transition-all flex items-center gap-2">
                      <Coins size={15} className="text-gold" /> Invest (Capital)
                    </NavLink>
                    <NavLink to="/advisory" className="px-5 py-2.5 text-xs tracking-wider uppercase font-semibold text-gray-700 hover:text-gold hover:bg-[#FAF6ED] transition-all flex items-center gap-2">
                      <TrendingUp size={15} className="text-gold" /> Advise (Consulting)
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `text-sm tracking-wide uppercase font-bold py-2 transition-colors duration-200 relative ${
                    isActive ? "text-gold after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2.5px] after:bg-gold" : "text-dark hover:text-gold"
                  }`
                }
              >
                Projects
              </NavLink>

              <NavLink 
                to="/blog" 
                className={({ isActive }) => 
                  `text-sm tracking-wide uppercase font-bold py-2 transition-colors duration-200 relative ${
                    isActive ? "text-gold after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2.5px] after:bg-gold" : "text-dark hover:text-gold"
                  }`
                }
              >
                Blog
              </NavLink>

              <NavLink 
                to="/gallery" 
                className={({ isActive }) => 
                  `text-sm tracking-wide uppercase font-bold py-2 transition-colors duration-200 relative ${
                    isActive ? "text-gold after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2.5px] after:bg-gold" : "text-dark hover:text-gold"
                  }`
                }
              >
                Gallery
              </NavLink>

              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-sm tracking-wide uppercase font-bold py-2 transition-colors duration-200 relative ${
                    isActive ? "text-gold after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2.5px] after:bg-gold" : "text-dark hover:text-gold"
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button 
                type="button" 
                onClick={handleOpenModal}
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 bg-gold hover:bg-gold-hover text-white text-xs font-bold uppercase tracking-wider rounded border border-gold hover:-translate-y-0.5 shadow-md transition-all duration-200"
              >
                Talk to Our Team
              </button>

              <button 
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-1.5 text-dark focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden fixed top-[108px] left-0 w-full h-[calc(100vh-108px)] bg-white border-t border-black/10 shadow-2xl p-6 flex flex-col gap-4 overflow-y-auto transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <NavLink to="/" end className="text-sm font-bold uppercase tracking-wider text-dark hover:text-gold py-1">
            Home
          </NavLink>

          <div className="border-b border-black/5 pb-2">
            <div 
              className="flex justify-between items-center text-sm font-bold uppercase tracking-wider text-dark py-1 cursor-pointer"
              onClick={() => toggleMobileSubmenu("about")}
            >
              <span>About Us</span>
              <ChevronDown size={16} className={`transform transition-transform ${mobileExpanded === "about" ? "rotate-180" : ""}`} />
            </div>
            {mobileExpanded === "about" && (
              <div className="flex flex-col gap-2.5 pl-4 mt-2 border-l-2 border-gold">
                <NavLink to="/about" className="text-xs uppercase font-semibold text-gray-600 hover:text-gold">Who We Are</NavLink>
                <NavLink to="/why-ata" className="text-xs uppercase font-semibold text-gray-600 hover:text-gold">Why Choose Us</NavLink>
              </div>
            )}
          </div>

          <div className="border-b border-black/5 pb-2">
            <div 
              className="flex justify-between items-center text-sm font-bold uppercase tracking-wider text-dark py-1 cursor-pointer"
              onClick={() => toggleMobileSubmenu("services")}
            >
              <span>Services</span>
              <ChevronDown size={16} className={`transform transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
            </div>
            {mobileExpanded === "services" && (
              <div className="flex flex-col gap-2.5 pl-4 mt-2 border-l-2 border-gold">
                <NavLink to="/development" className="text-xs uppercase font-semibold text-gray-600 hover:text-gold">Aggregate (Sales Execution)</NavLink>
                <NavLink to="/investment-opportunities" className="text-xs uppercase font-semibold text-gray-600 hover:text-gold">Invest (Capital & Funding)</NavLink>
                <NavLink to="/advisory" className="text-xs uppercase font-semibold text-gray-600 hover:text-gold">Advise (Growth Consulting)</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/projects" className="text-sm font-bold uppercase tracking-wider text-dark hover:text-gold py-1">Projects</NavLink>
          <NavLink to="/blog" className="text-sm font-bold uppercase tracking-wider text-dark hover:text-gold py-1">Blog</NavLink>
          <NavLink to="/gallery" className="text-sm font-bold uppercase tracking-wider text-dark hover:text-gold py-1">Gallery</NavLink>
          <NavLink to="/contact" className="text-sm font-bold uppercase tracking-wider text-dark hover:text-gold py-1">Contact</NavLink>

          <button 
            type="button" 
            onClick={handleOpenModal}
            className="w-full mt-4 py-3 bg-gold hover:bg-gold-hover text-white text-xs font-bold uppercase tracking-wider rounded text-center shadow-md"
          >
            Talk to Our Team
          </button>
        </div>
      </header>

      {/* Global Form Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}