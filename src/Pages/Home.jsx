import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import { 
  ArrowRight, 
  Coins,  
  CheckCircle2, 
  ChevronRight, 
  MapPin, 
  Layers, 
  Zap, 
  ShieldCheck 
} from "lucide-react";
import { SplitReveal } from "../Components/Effects";
import "./Home.css";

import service1Img from "../assets/highway.jpg";
import service2Img from "../assets/project2.jpg";
import service3Img from "../assets/project3.jpg";

import proj1Img from "../assets/project1.jpg";
import proj2Img from "../assets/insight2.jpg";
import proj3Img from "../assets/project4.jpg";

import heroVideo from "../assets/ATAvedio.mp4";

// 3 Core Services Snapshot
const coreServices = [
  {
    id: "01",
    title: "Aggregate",
    tagline: "Complete Sales Execution",
    desc: "We build your complete project sales system — blueprint, channel partners, marketing events, and a full sales pipeline to bring in buyers for plots, residential, and commercial units.",
    img: service1Img,
    link: "/services"
  },
  {
    id: "02",
    title: "Invest",
    tagline: "Connecting Builders with Capital",
    desc: "We connect builders with the right investors, helping projects secure the funding they need to move forward without delay.",
    img: service2Img,
    link: "/services"
  },
  {
    id: "03",
    title: "Advise",
    tagline: "Business & Growth Consulting",
    desc: "We guide builders on scaling their business — team hiring, staff coaching, company branding material, and complete operational support.",
    img: service3Img,
    link: "/advisory"
  }
];

// Actual Projects Preview
const featuredProjects = [
  { 
    id: 1, 
    builder: "Anantjit Infra Developers Pvt. Ltd.", 
    title: "Anant City", 
    loc: "Gorakhpur", 
    status: "Active", 
    img: proj1Img 
  },
  { 
    id: 2, 
    builder: "Garden Square Ventures Pvt. Ltd.", 
    title: "Garden Ganj", 
    loc: "Lucknow", 
    status: "Active", 
    img: proj2Img 
  },
  { 
    id: 3, 
    builder: "Buildup Property Pvt. Ltd.", 
    title: "Vayu Villa & Vayu Green", 
    loc: "Pune", 
    status: "Sold Out / Active", 
    img: proj3Img 
  }
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
      {/* 1. Hero Section */}
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
          <p className="hero-tag">AGGREGATE &bull; INVEST &bull; ADVISE</p>
          <h1>
            <SplitReveal text="Your Real Estate Project." /> <br />
            <span className="gold-italic">Fully Built, Fully Sold, Fully Supported.</span>
          </h1>
          <p className="hero-description">
            ATA Infratech helps real estate builders plan, fund, and sell their projects faster — through Aggregation, Investment, and Advisory, all under one roof.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-gold">Talk to Our Team</Link>
            <Link to="/services" className="btn-outline">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Strip */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-box">
            <h3><StatCounter target={3} suffix="" /></h3>
            <p>Major Hubs (Gorakhpur, Lucknow, Pune)</p>
          </div>
          <div className="stat-box">
            <h3><StatCounter target={3} suffix="-in-1" /></h3>
            <p>End-to-End Solutions</p>
          </div>
          <div className="stat-box">
            <h3><StatCounter target={100} suffix="%" /></h3>
            <p>Dedicated Builder Support</p>
          </div>
          <div className="stat-box">
            <h3><StatCounter target={2025} suffix="" /></h3>
            <p>Built for Speed & Results</p>
          </div>
        </div>
      </section>

      {/* 3. Quick Intro (Below Hero) */}
      <section className="section-padding intro-section">
        <div className="intro-grid">
          <div>
            <span className="section-tag">WE ARE ATA INFRATECH</span>
            <h2>We Turn Project Ideas Into Fast-Selling Realities.</h2>
          </div>
          <div>
            <p className="lead-text">
              We work with real estate builders and developers to turn a project idea into a successful, organized, fast-selling reality.
            </p>
            <p className="sub-text">
              From the first blueprint to the last sale, we handle the pieces that slow builders down — sales execution, investor connections, and business growth — so you can focus on building.
            </p>
            <div className="intro-highlights">
              <div className="ih-item"><CheckCircle2 size={16} color="#C8A22C" /> End-to-end sales execution</div>
              <div className="ih-item"><CheckCircle2 size={16} color="#C8A22C" /> Direct investor capital network</div>
              <div className="ih-item"><CheckCircle2 size={16} color="#C8A22C" /> Complete channel partner setup</div>
              <div className="ih-item"><CheckCircle2 size={16} color="#C8A22C" /> Business branding & advisory</div>
            </div>
            <Link to="/about" className="link-arrow">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. What We Do (3-Service Snapshot) */}
      <section className="section-padding verticals-section">
        <div className="section-header">
          <span className="section-tag">WHAT WE DO</span>
          <h2>Three Core Services. One Unified Goal.</h2>
          <p className="section-subtitle">Three services. One goal — help you sell faster, grow smarter, and build with confidence.</p>
        </div>
        
        <div className="ln-services-grid">
          {coreServices.map((service) => (
            <div key={service.id} className="ln-service-card">
              <div className="ln-service-img" style={{ backgroundImage: `url(${service.img})` }}>
                <span className="ln-service-badge">{service.id}</span>
              </div>
              <div className="ln-service-body">
                <span className="p-type" style={{ color: "#C8A22C", fontWeight: 700 }}>{service.tagline}</span>
                <h3 style={{ marginTop: "6px" }}>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={service.link} className="service-read-more">
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Projects Showcase */}
      <section className="section-padding projects-showcase-section">
        <div className="section-header-flex">
          <div>
            <span className="section-tag">OUR PROJECTS</span>
            <h2>Working Across High-Growth Cities</h2>
            <p className="section-subtitle">We are currently working with builders across Gorakhpur, Lucknow, and Pune.</p>
          </div>
          <Link to="/projects" className="link-arrow">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="projects-grid-ln">
          {featuredProjects.map((p) => (
            <div key={p.id} className="project-card-ln">
              <div className="p-img" style={{ backgroundImage: `url(${p.img})` }}>
                <span className="p-status">{p.status}</span>
              </div>
              <div className="p-content">
                <span className="p-type"><MapPin size={12} style={{ display: 'inline', marginRight: 4 }} />{p.loc}</span>
                <h3 style={{ marginBottom: "4px" }}>{p.title}</h3>
                <p style={{ fontSize: "13px", color: "#666", marginBottom: "14px" }}>Builder: {p.builder}</p>
                <Link to="/projects" className="link-arrow">
                  Explore Project <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Why Builders Choose Us */}
      <section className="section-padding strengths-section">
        <div className="section-header">
          <span className="section-tag">WHY BUILDERS CHOOSE ATA INFRATECH</span>
          <h2>Built for Speed, Scale & Execution</h2>
          <p className="section-subtitle">Real on-ground project experience across cities to accelerate your development lifecycle.</p>
        </div>

        <div className="strengths-grid">
          <div className="strength-card">
            <div className="s-icon"><Layers size={28} /></div>
            <h4>End-to-End Support</h4>
            <p>From project blueprint to channel partner marketing and the final customer sale.</p>
          </div>
          <div className="strength-card">
            <div className="s-icon"><Coins size={28} /></div>
            <h4>Ready Investor Network</h4>
            <p>Instant access to a curated network of channel partners and capital investors.</p>
          </div>
          <div className="strength-card">
            <div className="s-icon"><Zap size={28} /></div>
            <h4>Faster Project Launches</h4>
            <p>Structured sales engines and organized marketing campaigns designed for speed.</p>
          </div>
          <div className="strength-card">
            <div className="s-icon"><ShieldCheck size={28} /></div>
            <h4>On-Ground Experience</h4>
            <p>Active execution presence with a team founded in 2025 specifically for high-speed results.</p>
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="section-padding cta-section">
        <div className="cta-box">
          <h2>Ready to sell your project faster and grow your business?</h2>
          <p>Let's talk about how ATA Infratech can support your next project.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-gold">Contact Us</Link>
            <Link to="/services" className="btn-outline-dark">Explore Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}