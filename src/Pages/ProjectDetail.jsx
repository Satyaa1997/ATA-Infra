import  { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Building2,  
  ArrowRight,  
  Layers, 
  TrendingUp, 
  Sparkles,
  Calendar,
  Images
} from "lucide-react";
import "./ProjectDetail.css";

// Asset Imports
import anantImg from "../assets/AnantCity.jpg";
import gardenImg from "../assets/Gardenganj1.webp";
import vayuVillaImg from "../assets/Vayuvilla1.png";
import vayuGreenImg from "../assets/Vayugreen.png";
import greenValleyImg from "../assets/Greenvally.png";
import vayuMantraImg from "../assets/Vayumantra.png";

// Extra gallery / insight shots
import extra1 from "../assets/insight1.jpg";
import extra2 from "../assets/insight2.jpg";
import extra3 from "../assets/insight3.jpg";

export const projectsDatabase = {
  "anant-city": {
    id: "anant-city",
    title: "Anant City",
    builder: "Anantjit Infra Developers Pvt. Ltd.",
    category: "Plotted Development & Township",
    status: "Active",
    loc: "Gorakhpur, Uttar Pradesh",
    heroImg: anantImg,
    tagline: "High-Velocity Masterplanned Plotted Layout",
    overview: "Anant City is a premier masterplanned township development strategically positioned along Gorakhpur’s prime growth corridor. ATA Infratech serves as the complete aggregation engine — managing channel partner alignment, marketing event launches, and structured buyer pipeline execution.",
    scopeTitle: "How ATA Infratech Powers Anant City",
    scopeDesc: "We deployed an end-to-end sales framework connecting local channel networks with regional buyers, backed by transparent pricing blueprints.",
    gallery: [anantImg, extra1, extra3],
    highlights: [
      "Strategic location with direct arterial connectivity to Gorakhpur city core.",
      "100% verified clear-title plotted inventory with master layout approvals.",
      "Integrated channel partner commission & lead distribution pipeline.",
      "Targeted buyer acquisition campaigns for residential and investment plots."
    ],
    metrics: {
      type: "Plotted Development",
      builder: "Anantjit Infra Developers Pvt. Ltd.",
      location: "Gorakhpur, UP",
      role: "Sales Execution & Aggregation",
      timeline: "Active Marketing & Booking Phase"
    }
  },

  "garden-ganj": {
    id: "garden-ganj",
    title: "Garden Ganj",
    builder: "Garden Square Ventures Pvt. Ltd.",
    category: "Commercial & Plotted Enclave",
    status: "Active",
    loc: "Lucknow, Uttar Pradesh",
    heroImg: gardenImg,
    tagline: "Prime Commercial & Plotted Business Hub",
    overview: "Located in the heart of Lucknow’s expanding commercial belt, Garden Ganj combines retail boulevards with plotted business layouts. ATA Infratech handles investor connections and commercial sales acceleration to secure fast deal velocity.",
    scopeTitle: "ATA Infratech Commercial Strategy",
    scopeDesc: "Structured funding dialogues and commercial sales positioning to attract business enterprises, retail investors, and corporate buyers.",
    gallery: [gardenImg, extra2, extra1],
    highlights: [
      "High-footfall commercial frontage suitable for retail and corporate shops.",
      "Direct investor matchmaking and structured milestone-based funding.",
      "Organized channel partner drives across Lucknow & NCR regions.",
      "Dedicated corporate branding kits and digital presentation collaterals."
    ],
    metrics: {
      type: "Commercial & Plotted",
      builder: "Garden Square Ventures Pvt. Ltd.",
      location: "Lucknow, UP",
      role: "Capital Linkages & Sales Execution",
      timeline: "Active Inventory Sales"
    }
  },

  "vayu-villa": {
    id: "vayu-villa",
    title: "Vayu Villa",
    builder: "Buildup Property Pvt. Ltd.",
    category: "Luxury Villas & Gated Enclave",
    status: "Sold Out",
    loc: "Pune, Maharashtra",
    heroImg: vayuVillaImg,
    tagline: "100% Sold Out Luxury Gated Community",
    overview: "Vayu Villa represents a flagship milestone in Pune’s high-end residential segment. Taken from the initial project blueprint to 100% sold-out status through ATA Infratech’s disciplined sales pipeline and high-conversion marketing events.",
    scopeTitle: "The Sold-Out Execution Journey",
    scopeDesc: "A masterclass in rapid liquidation: pre-launch positioning, targeted HNI buyer drives, and seamless transaction handovers.",
    gallery: [vayuVillaImg, extra3, extra2],
    highlights: [
      "Exquisite gated entrance, private clubhouse, and premium villa architectures.",
      "100% inventory sold-out ahead of projected construction timelines.",
      "Zero-friction customer booking to handover lifecycle management.",
      "Established brand equity for Buildup Property across Pune’s developer ecosystem."
    ],
    metrics: {
      type: "Luxury Villas",
      builder: "Buildup Property Pvt. Ltd.",
      location: "Pune, Maharashtra",
      role: "Turnkey Sales Execution",
      timeline: "Successfully Delivered & Sold Out"
    }
  },

  "vayu-green": {
    id: "vayu-green",
    title: "Vayu Green",
    builder: "Buildup Property Pvt. Ltd.",
    category: "Residential Township",
    status: "Active",
    loc: "Pune, Maharashtra",
    heroImg: vayuGreenImg,
    tagline: "Eco-Centric Modern Living Township",
    overview: "Following the sold-out success of Vayu Villa, Vayu Green expands the footprint with sustainable residential layouts and community amenities. ATA Infratech drives ongoing sales aggregation and channel partner outreach.",
    scopeTitle: "Scaling Township Momentum",
    scopeDesc: "Executing multi-tier broker campaigns and phased pricing structures to manage sustained booking velocity.",
    gallery: [vayuGreenImg, extra1, vayuVillaImg],
    highlights: [
      "Lush landscaped open spaces integrated with modern residential plots.",
      "Active on-ground field team managing site visits and broker coordination.",
      "Transparent customer CRM tracking and structured payment schedules.",
      "Continuous investor and developer growth consulting."
    ],
    metrics: {
      type: "Residential Township",
      builder: "Buildup Property Pvt. Ltd.",
      location: "Pune, Maharashtra",
      role: "Sales Engine & Advisory",
      timeline: "Active Booking Phase"
    }
  },

  "green-valley": {
    id: "green-valley",
    title: "Green Valley",
    builder: "Buildup Property Pvt. Ltd.",
    category: "Plotted & Residential Enclave",
    status: "Active",
    loc: "Pune, Maharashtra",
    heroImg: greenValleyImg,
    tagline: "Scenic Suburban Plotted Development",
    overview: "Green Valley offers serene suburban residential plots designed for bespoke home construction and long-term capital appreciation. ATA Infratech provides strategic blueprint advisory, broker alignments, and investor backing.",
    scopeTitle: "Masterplanning & Absorption Strategy",
    scopeDesc: "Positioned as a prime weekend home and residential destination with high-velocity sales triggers.",
    gallery: [greenValleyImg, extra2, vayuGreenImg],
    highlights: [
      "Panoramic natural landscapes with fully developed infrastructure roads.",
      "Structured channel partner network across Pune and Mumbai investor hubs.",
      "Strategic pricing tiers designed to deliver early-investor gains.",
      "End-to-end sales reporting and closing support for the builder."
    ],
    metrics: {
      type: "Plotted Enclave",
      builder: "Buildup Property Pvt. Ltd.",
      location: "Pune, Maharashtra",
      role: "Aggregation & Investor Relations",
      timeline: "Active Selling Phase"
    }
  },

  "vayu-mantra": {
    id: "vayu-mantra",
    title: "Vayu Mantra",
    builder: "Buildup Property Pvt. Ltd.",
    category: "Gated Enclave",
    status: "Pre-Launch",
    loc: "Pune, Maharashtra",
    heroImg: vayuMantraImg,
    tagline: "Pre-Launch Exclusive Gated Community",
    overview: "The next landmark development by Buildup Property. Currently in its pre-launch strategic phase, ATA Infratech is orchestrating the launch blueprint, private investor capital linkages, and early channel partner onboarding.",
    scopeTitle: "Pre-Launch Structuring & Capitalization",
    scopeDesc: "Structuring seed capital, private investor allocations, and promotional launch campaigns before public booking opens.",
    gallery: [vayuMantraImg, extra3, greenValleyImg],
    highlights: [
      "Exclusive architectural design and luxury lifestyle amenities.",
      "Pre-launch investor syndication for construction cashflow security.",
      "Ready channel partner onboarding with pre-booking quotas.",
      "Comprehensive company branding material and digital launch collateral."
    ],
    metrics: {
      type: "Gated Residential Enclave",
      builder: "Buildup Property Pvt. Ltd.",
      location: "Pune, Maharashtra",
      role: "Capital Structuring & Pre-Launch Sales",
      timeline: "Pre-Launch Phase"
    }
  }
};

// Motion Variants
const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsDatabase[id] || projectsDatabase["anant-city"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <motion.div 
      className="project-detail-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* 1. Hero Banner with Parallax Background */}
      <div 
        className="project-hero" 
        style={{ backgroundImage: `url(${project.heroImg})` }}
      >
        <div className="project-hero-overlay" />
        
        <div className="project-hero-content">
          <Link to="/projects" className="back-link">
            <ArrowLeft size={16} /> Back to All Projects
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-badge-wrap"
          >
            <span className="section-tag">{project.category}</span>
            <span className={`status-pill ${project.status.toLowerCase().replace(" ", "-")}`}>
              {project.status}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {project.title}
          </motion.h1>

          <p className="hero-tagline">{project.tagline}</p>

          <div className="project-location-bar">
            <span><MapPin size={16} color="#C8A22C" /> {project.loc}</span>
            <span className="sep">•</span>
            <span><Building2 size={16} color="#C8A22C" /> {project.builder}</span>
          </div>
        </div>
      </div>

      {/* 2. Main Two-Column Detailed Layout */}
      <section className="section-padding">
        <div className="detail-layout">
          {/* Main Info Column */}
          <div className="detail-main">
            {/* Overview Card */}
            <motion.div 
              className="detail-block"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <span className="section-tag">PROJECT OVERVIEW</span>
              <h2>About {project.title}</h2>
              <p className="lead-text">{project.overview}</p>
            </motion.div>

            {/* Scope / ATA Role */}
            <motion.div 
              className="detail-block highlight-box"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="hl-header">
                <Sparkles size={22} color="#C8A22C" />
                <h3>{project.scopeTitle}</h3>
              </div>
              <p className="sub-text">{project.scopeDesc}</p>
            </motion.div>

            {/* Key Deliverables & Highlights */}
            <motion.div 
              className="detail-block"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="section-subtitle">Key Project Highlights</h3>
              <div className="highlights-grid">
                {project.highlights.map((h, i) => (
                  <motion.div 
                    key={i} 
                    className="highlight-item"
                    variants={fadeUp}
                    custom={i}
                  >
                    <CheckCircle2 color="#C8A22C" size={22} className="hl-icon" />
                    <span>{h}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Project Photo Gallery Strip */}
            <motion.div 
              className="detail-block"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="gallery-header-row">
                <h3 className="section-subtitle" style={{ margin: 0 }}>
                  <Images size={20} color="#C8A22C" style={{ display: 'inline', marginRight: 8 }} />
                  Project Visuals
                </h3>
                <Link to="/gallery" className="gallery-link">
                  View Full Gallery <ArrowRight size={14} />
                </Link>
              </div>

              <div className="project-gallery-strip">
                {project.gallery.map((imgSrc, idx) => (
                  <motion.div 
                    key={idx}
                    className="gallery-strip-item"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={imgSrc} alt={`${project.title} shot ${idx + 1}`} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Specifications */}
          <div className="detail-sidebar">
            <motion.div 
              className="metrics-box"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>Project Information</h3>

              <div className="metric-row">
                <span><Building2 size={15} /> Builder Partner</span>
                <strong>{project.metrics.builder}</strong>
              </div>

              <div className="metric-row">
                <span><MapPin size={15} /> City & Location</span>
                <strong>{project.metrics.location}</strong>
              </div>

              <div className="metric-row">
                <span><Layers size={15} /> Project Typology</span>
                <strong>{project.metrics.type}</strong>
              </div>

              <div className="metric-row">
                <span><TrendingUp size={15} /> ATA Services</span>
                <strong className="gold-text">{project.metrics.role}</strong>
              </div>

              <div className="metric-row">
                <span><Calendar size={15} /> Current Timeline</span>
                <strong className="status-highlight">{project.metrics.timeline}</strong>
              </div>

              <div className="sidebar-action-wrap">
                <Link to="/contact" className="btn-gold project-cta">
                  Partner on This Project <ArrowRight size={16} />
                </Link>
                <Link to="/services" className="btn-outline-dark project-cta-sec">
                  Explore ATA Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Next/Prev Project Navigation */}
      <section className="section-padding project-nav-bar">
        <div className="proj-nav-container">
          <div className="pn-item prev-item" onClick={() => navigate("/projects")}>
            <span>BACK TO OVERVIEW</span>
            <h4>Explore All 6 Projects</h4>
          </div>
          <Link to="/contact" className="btn-gold">
            Discuss Your Project with Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}