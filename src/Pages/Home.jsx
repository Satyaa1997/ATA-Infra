import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SplitReveal } from "../Components/Effects";
import "./Home.css";

import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import heroVideo from "../assets/ATAvedio.mp4";

const projects = [
  { id: 1, title: "Grand Horizon", type: "Residential", loc: "Lucknow, UP", status: "Ongoing", img: project1 },
  { id: 2, title: "Apex Capital Plaza", type: "Commercial", loc: "Varanasi, UP", status: "Planning", img: project2 },
  { id: 3, title: "The Sovereign Greens", type: "Mixed Use", loc: "Noida, UP", status: "Development", img: project3 },
  { id: 4, title: "Emerald Land Parcel", type: "Land Strategy", loc: "Ayodhya, UP", status: "Evaluation", img: project4 }
];

export default function Home() {
  const horizontalRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: horizontalRef });
  const x = useTransform(scrollYProgress, [0, 0.85], ["0%", "-45%"]);

  return (
    <div className="home-container">
      {/* 1. Full-Screen Hero */}
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
          <p className="hero-tag">Strategic Real Estate Partner</p>
          <h1>
            <SplitReveal text="Turning Land & Vision" /> <br />
            <span className="gold-italic">into High-Value Assets.</span>
          </h1>
          <p className="hero-description">
            ATA INFRATECH is a strategic real estate partner helping transform land, capital and ideas into thoughtfully planned, high-value assets.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-gold">Explore Projects</Link>
            <Link to="/contact" className="btn-outline">Partner With Us</Link>
          </div>
        </div>
      </section>

      {/* 2. Brand Introduction */}
      <section className="section-padding intro-section">
        <div className="intro-grid">
          <div>
            <span className="section-tag">WHO WE ARE</span>
            <h2>Real Estate, Driven by Strategy.</h2>
          </div>
          <div>
            <p className="lead-text">
              ATA INFRATECH brings together development expertise, investment intelligence and strategic advisory to create meaningful value across the real estate lifecycle.
            </p>
            <p className="sub-text">
              From identifying land opportunities to shaping development strategies and unlocking investment potential, we work with a long-term vision focused on quality, sustainability and value creation.
            </p>
            <Link to="/about" className="link-arrow">
              Discover ATA INFRATECH <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Core Verticals */}
      <section className="section-padding verticals-section">
        <div className="section-header">
          <span className="section-tag">WHAT WE DO</span>
          <h2>Three Core Verticals</h2>
        </div>
        <div className="verticals-grid">
          <div className="vertical-card">
            <span className="v-num">01</span>
            <h3>DEVELOPMENT</h3>
            <p className="v-tagline">Creating spaces with purpose.</p>
            <p className="v-desc">We transform land and development opportunities into thoughtfully planned real estate assets designed around market demand, functionality and long-term value.</p>
            <Link to="/development" className="link-arrow">Explore Development <ArrowRight size={16} /></Link>
          </div>
          <div className="vertical-card">
            <span className="v-num">02</span>
            <h3>INVESTMENT</h3>
            <p className="v-tagline">Capital aligned with opportunity.</p>
            <p className="v-desc">We identify and evaluate real estate opportunities with a disciplined approach to market potential, risk and long-term returns.</p>
            <Link to="/investment" className="link-arrow">Explore Investment <ArrowRight size={16} /></Link>
          </div>
          <div className="vertical-card">
            <span className="v-num">03</span>
            <h3>ADVISORY</h3>
            <p className="v-tagline">Strategy before execution.</p>
            <p className="v-desc">We provide strategic real estate guidance to landowners, investors and businesses to help them make informed decisions and unlock asset potential.</p>
            <Link to="/advisory" className="link-arrow">Explore Advisory <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* 4. Horizontal Selected Projects */}
      <section ref={horizontalRef} className="horizontal-section">
        <div className="horizontal-sticky">
          <div className="horizontal-header">
            <span className="section-tag">SELECTED PROJECTS</span>
            <h2>From Land to Landmark.</h2>
          </div>
          <motion.div style={{ x }} className="horizontal-track">
            {projects.map((p) => (
              <div key={p.id} className="project-card-h">
                <div className="project-img-h" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="project-info-h">
                  <span>{p.type} • {p.loc}</span>
                  <h3>{p.title}</h3>
                  <Link to="/projects" className="link-arrow">View Project <ArrowUpRight size={16} /></Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Statistics Counters */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-box">
            <h3>10+</h3>
            <p>Strategic Opportunities</p>
          </div>
          <div className="stat-box">
            <h3>500+</h3>
            <p>Acres Evaluated</p>
          </div>
          <div className="stat-box">
            <h3>25+</h3>
            <p>Projects & Assignments</p>
          </div>
          <div className="stat-box">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* 6. Our Approach */}
      <section className="section-padding approach-section">
        <div className="section-header">
          <span className="section-tag">OUR APPROACH</span>
          <h2>From Opportunity to Outcome.</h2>
        </div>
        <div className="approach-grid">
          {[
            { n: "01", t: "IDENTIFY", d: "We identify land, market and investment opportunities with strong potential." },
            { n: "02", t: "STRATEGIZE", d: "We evaluate the opportunity through market intelligence, feasibility and strategic planning." },
            { n: "03", t: "EXECUTE", d: "We bring the right people, processes and expertise together to execute the vision." },
            { n: "04", t: "CREATE VALUE", d: "We focus on building assets that generate sustainable long-term value." }
          ].map((item, idx) => (
            <div key={idx} className="approach-card">
              <span className="app-num">{item.n}</span>
              <h4>{item.t}</h4>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Investment Banner */}
      <section className="investment-banner-section">
        <div className="inv-banner-content">
          <span className="section-tag">INVESTMENT POTENTIAL</span>
          <h2>The Right Opportunity Can Change the Value of Land.</h2>
          <p>Whether you are a landowner, investor or development partner, ATA INFRATECH helps identify the right strategy to unlock the potential of real estate assets.</p>
          <Link to="/investment" className="btn-gold">Explore Investment Opportunities</Link>
        </div>
      </section>

      {/* 8. Final Call to Action */}
      <section className="section-padding cta-section">
        <div className="cta-box">
          <h2>Have Land. Have Capital. Have a Vision?</h2>
          <p>Let's explore what we can build together.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-gold">Start a Conversation</Link>
            <Link to="/contact" className="btn-outline">Partner With Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}