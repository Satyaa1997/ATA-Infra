import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, MapPin, Building, Calendar, Layers, ShieldCheck } from "lucide-react";
import "./ProjectDetail.css";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

const projectsMap = {
  "grand-horizon": {
    title: "Grand Horizon",
    category: "Residential",
    status: "Ongoing",
    loc: "Lucknow, Uttar Pradesh",
    landArea: "12.5 Acres",
    stage: "Structural Execution",
    img: project1,
    desc: "A luxury residential landmark crafted with strategic planning and sustainable architecture, offering premium living environments with seamless connectivity."
  },
  "apex-capital-plaza": {
    title: "Apex Capital Plaza",
    category: "Commercial",
    status: "Planning",
    loc: "Varanasi, Uttar Pradesh",
    landArea: "6.2 Acres",
    stage: "Design & Approvals",
    img: project2,
    desc: "A state-of-the-art corporate and retail business district designed for high rental yields and modern enterprise operations."
  },
  "sovereign-greens": {
    title: "The Sovereign Greens",
    category: "Mixed Use",
    status: "Completed",
    loc: "Noida, Uttar Pradesh",
    landArea: "25 Acres",
    stage: "Delivered",
    img: project3,
    desc: "An integrated sustainable township blending retail boulevards with eco-luxury residences and smart urban infrastructure."
  },
  "emerald-land-parcel": {
    title: "Emerald Strategic Land",
    category: "Land Strategy",
    status: "Ongoing",
    loc: "Ayodhya, Uttar Pradesh",
    landArea: "45 Acres",
    stage: "Land Consolidation",
    img: project4,
    desc: "High-potential strategic land acquisition positioned right along the regional growth corridor with complete clear title verification."
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsMap[id] || projectsMap["grand-horizon"];

  return (
    <div className="project-detail-page">
      {/* Detail Hero */}
      <div className="project-hero" style={{ backgroundImage: `url(${project.img})` }}>
        <div className="project-hero-overlay" />
        <div className="project-hero-content">
          <Link to="/projects" className="back-link">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
          <span className="section-tag">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="project-location">
            <MapPin size={18} color="#C8A22C" /> {project.loc}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="section-padding">
        <div className="detail-layout">
          {/* Main Info */}
          <div className="detail-main">
            <span className="section-tag">OVERVIEW</span>
            <h2>Project Architecture & Concept</h2>
            <p className="lead-text">{project.desc}</p>
            <p className="sub-text">
              Developed through extensive market intelligence, disciplined master planning, and engineering excellence. Every phase is optimized for long-term capital appreciation, investor security, and sustainable urban living.
            </p>

            <h3 className="section-subtitle">Key Strategic Highlights</h3>
            <div className="highlights-grid">
              {[
                "Prime Strategic Location & Direct High-Growth Corridor Access",
                "Approved Master Planning with Complete Clear Legal Titles",
                "High-Yield Potential with Structured Exit Milestones",
                "Integrated Eco-Friendly Urban Infrastructure & Landscaping"
              ].map((h, i) => (
                <div key={i} className="highlight-item">
                  <CheckCircle2 color="#C8A22C" size={20} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Metrics */}
          <div className="detail-sidebar">
            <div className="metrics-box">
              <h3>Project Specifications</h3>
              
              <div className="metric-row">
                <span><MapPin size={14} /> Location:</span>
                <strong>{project.loc}</strong>
              </div>
              <div className="metric-row">
                <span><Layers size={14} /> Land Area:</span>
                <strong>{project.landArea}</strong>
              </div>
              <div className="metric-row">
                <span><Building size={14} /> Asset Type:</span>
                <strong>{project.category}</strong>
              </div>
              <div className="metric-row">
                <span><Calendar size={14} /> Stage:</span>
                <strong>{project.stage}</strong>
              </div>
              <div className="metric-row">
                <span><ShieldCheck size={14} /> Status:</span>
                <strong className="gold-text">{project.status}</strong>
              </div>

              <Link to="/contact" className="btn-gold project-cta">
                Request Project Dossier
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}