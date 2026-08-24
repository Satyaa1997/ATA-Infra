import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  useInView } from "framer-motion";
import { 
  ArrowRight, ArrowUpRight, 
  HardHat, ShieldCheck, Truck, Ruler, CheckCircle2, ChevronRight 
} from "lucide-react";
import { SplitReveal } from "../Components/Effects";
import "./Home.css";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import heroVideo from "../assets/ATAvedio.mp4";

const infraServices = [
  {
    id: "01",
    title: "Highway & Arterial Roadways",
    desc: "End-to-end alignment surveying, earthwork compaction, asphalt laying, and high-load commercial corridors.",
    img: project1,
    link: "/development"
  },
  {
    id: "02",
    title: "Industrial & Gated Plotted Enclaves",
    desc: "Integrated masterplanned land developments featuring RCC boundary enclosures, drainage networks, and utilities.",
    img: project2,
    link: "/development"
  },
  {
    id: "03",
    title: "Civil Structures & Commercial Plazas",
    desc: "Heavy-load structural foundations, multi-tier commercial hubs, and grade-A architectural frameworks.",
    img: project3,
    link: "/development"
  },
  {
    id: "04",
    title: "Strategic Land Aggregation & Due Diligence",
    desc: "100% legal title tracing, GIS parcel alignment, and regional industrial policy conversions.",
    img: project4,
    link: "/investment"
  }
];

const projects = [
  { id: 1, title: "Grand Horizon Corridor", type: "Residential Plotted", loc: "Lucknow, UP", status: "Ongoing", img: project1 },
  { id: 2, title: "Apex Capital Commercial Hub", type: "Commercial Plaza", loc: "Varanasi, UP", status: "Planning", img: project2 },
  { id: 3, title: "The Sovereign Greens", type: "Mixed Use Township", loc: "Noida, UP", status: "Development", img: project3 },
  { id: 4, title: "Emerald Highway Logistics Parcel", type: "Industrial Land", loc: "Ayodhya, UP", status: "Evaluation", img: project4 }
];

function StatCounter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;

    const intervalTime = 20;
    const steps = duration / intervalTime;
    const stepIncrement = end / steps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="stat-number-black">
      {count}{suffix}
    </span>
  );
}

export default function Home() {
  return (
    <div className="home-container">
      {/* 1. Full-Screen Industrial Hero Section (Navbar sits directly on top) */}
      <section className="hero-section">
        <div className="hero-media-wrapper">
          <video 
            src={heroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="hero-video-bg"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-tag">CIVIL INFRASTRUCTURE &bull; LAND STRATEGY &bull; DEVELOPMENTS</p>
          <h1>
            <SplitReveal text="Engineering Sustainable" /> <br />
            <span className="gold-italic">Civil & Land Assets.</span>
          </h1>
          <p className="hero-description">
            ATA INFRATECH delivers world-class infrastructure engineering, high-velocity highway corridor development, and institutional land transformations across North India.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-gold">View Infrastructure Projects</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* 2. Running Counters Metric Strip (#FFFFFF) */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-box">
            <h3><StatCounter target={15} suffix="+" /></h3>
            <p>Years Industry Presence</p>
          </div>
          <div className="stat-box">
            <h3><StatCounter target={500} suffix="+" /></h3>
            <p>Acres Land Masterplanned</p>
          </div>
          <div className="stat-box">
            <h3><StatCounter target={40} suffix="+" /></h3>
            <p>Heavy Equipment & Fleet</p>
          </div>
          <div className="stat-box">
            <h3><StatCounter target={100} suffix="%" /></h3>
            <p>On-Time Milestone Delivery</p>
          </div>
        </div>
      </section>

      {/* 3. Corporate Intro Section (#F9F8F5) */}
      <section className="section-padding intro-section">
        <div className="intro-grid">
          <div>
            <span className="section-tag">ABOUT ATA INFRATECH</span>
            <h2>Pioneering Resilient Infrastructure & Land Solutions.</h2>
          </div>
          <div>
            <p className="lead-text">
              We bring decades of civil engineering precision, modern earthmoving fleets, and disciplined land aggregation strategies under one robust roof.
            </p>
            <p className="sub-text">
              From large-scale arterial road connectivity to premium gated townships and commercial infrastructure, ATA INFRATECH executes with uncompromised quality, strict safety compliance, and clear-title transparency.
            </p>
            <div className="intro-highlights">
              <div className="ih-item"><CheckCircle2 size={16} color="#C8A22C" /> Modern Heavy Machinery Fleet</div>
              <div className="ih-item"><CheckCircle2 size={16} color="#C8A22C" /> 100% Verified Title & Due Diligence</div>
              <div className="ih-item"><CheckCircle2 size={16} color="#C8A22C" /> Advanced Topographical GIS Survey</div>
              <div className="ih-item"><CheckCircle2 size={16} color="#C8A22C" /> Strict Environmental Compliance</div>
            </div>
            <Link to="/about" className="link-arrow">
              Explore Our Corporate Overview <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Core Civil & Infrastructure Services (#F2EFE9) */}
      <section className="section-padding verticals-section">
        <div className="section-header">
          <span className="section-tag">SERVICES & CAPABILITIES</span>
          <h2>Our Specialized Infrastructure Domains</h2>
          <p className="section-subtitle">Delivering turnkey civil engineering, arterial connectivity, and planned layouts.</p>
        </div>
        
        <div className="ln-services-grid">
          {infraServices.map((service) => (
            <div key={service.id} className="ln-service-card">
              <div className="ln-service-img" style={{ backgroundImage: `url(${service.img})` }}>
                <span className="ln-service-badge">{service.id}</span>
              </div>
              <div className="ln-service-body">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={service.link} className="service-read-more">
                  Service Scope <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Project Showcase Grid (#EAE6DF) */}
      <section className="section-padding projects-showcase-section">
        <div className="section-header-flex">
          <div>
            <span className="section-tag">PORTFOLIO</span>
            <h2>Featured Projects & Parcels</h2>
          </div>
          <Link to="/projects" className="link-arrow">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="projects-grid-ln">
          {projects.map((p) => (
            <div key={p.id} className="project-card-ln">
              <div className="p-img" style={{ backgroundImage: `url(${p.img})` }}>
                <span className="p-status">{p.status}</span>
              </div>
              <div className="p-content">
                <span className="p-type">{p.type} &bull; {p.loc}</span>
                <h3>{p.title}</h3>
                <Link to="/projects" className="link-arrow">
                  Project Case Study <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Plant, Machinery & Execution Strengths (#FFFFFF) */}
      <section className="section-padding strengths-section">
        <div className="section-header">
          <span className="section-tag">EXECUTION STRENGTH</span>
          <h2>Why ATA INFRATECH Leads</h2>
          <p className="section-subtitle">A powerful combination of heavy asset capacity, engineering prowess, and structural compliance.</p>
        </div>

        <div className="strengths-grid">
          <div className="strength-card">
            <div className="s-icon"><Truck size={28} /></div>
            <h4>Modern Fleet & Equipment</h4>
            <p>Owned earthmovers, motor graders, compactors, transit mixers, and concrete batching units for zero project delays.</p>
          </div>
          <div className="strength-card">
            <div className="s-icon"><Ruler size={28} /></div>
            <h4>Engineering Precision</h4>
            <p>High-precision DGPS spatial surveys, soil-bearing capacity assessments, and structural load compliance.</p>
          </div>
          <div className="strength-card">
            <div className="s-icon"><HardHat size={28} /></div>
            <h4>Experienced Workforce</h4>
            <p>Veteran project managers, geotechnical consultants, and on-site health and safety (HSE) supervisors.</p>
          </div>
          <div className="strength-card">
            <div className="s-icon"><ShieldCheck size={28} /></div>
            <h4>Safety & Quality Standards</h4>
            <p>Stringent internal quality control audits, certified raw material sourcing, and zero-compromise safety protocols.</p>
          </div>
        </div>
      </section>

      {/* 7. Investment Banner */}
      <section className="investment-banner-section">
        <div className="inv-banner-content">
          <span className="section-tag">COLLABORATION & JOINT VENTURES</span>
          <h2>Partner with ATA INFRATECH on High-Growth Corridors</h2>
          <p>We work with institutional investors, high-net-worth landowners, and government entities to unlock exponential land value.</p>
          <div className="inv-btn-group">
            <Link to="/contact" className="btn-gold">Submit Land / Joint Venture Proposal</Link>
            <Link to="/investment" className="btn-outline">Explore Investment Models</Link>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Box (#F9F8F5) */}
      <section className="section-padding cta-section">
        <div className="cta-box">
          <h2>Ready to Build Strategic Value Together?</h2>
          <p>Connect directly with our corporate infrastructure and land development division.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-gold">Start a Conversation</Link>
            <Link to="/contact" className="btn-outline-dark">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}