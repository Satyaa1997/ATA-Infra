import { useState, useEffect } from "react";
import PageBanner from "../Components/PageBanner";
import { Target, Eye, ChevronLeft, ChevronRight, CheckCircle2, Shield, TrendingUp, Users, Award, Compass } from "lucide-react";
import { motion } from "framer-motion";
import "./About.css";

import bannerImg from "../assets/insight2.jpg";
import img1 from "../assets/val-integrity1.jpg";
import img2 from "../assets/val-integrity2.jpg";
import img3 from "../assets/val-integrity3.jpg";
import img4 from "../assets/val-integrity4.jpg";
import img5 from "../assets/val-integrity5.jpg";
import img6 from "../assets/val-integrity6.jpg";

const coreValues = [
  { id: 1, t: "Integrity", d: "We believe trust is the foundation of every partnership.", img: img1 },
  { id: 2, t: "Strategy", d: "Every decision should have a clear purpose and measurable roadmap.", img: img2 },
  { id: 3, t: "Excellence", d: "We pursue quality in thinking, execution and final outcomes.", img: img3 },
  { id: 4, t: "Transparency", d: "We believe in open and responsible communication at every step.", img: img4 },
  { id: 5, t: "Sustainability", d: "We consider long-term environmental and social impact in every opportunity.", img: img5 },
  { id: 6, t: "Partnership", d: "We grow by creating enduring value for everyone involved.", img: img6 }
];

export default function About() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setCardsToShow(1);
      else if (window.innerWidth <= 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % coreValues.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, startIndex]);

  const currentCards = Array.from({ length: cardsToShow }).map((_, i) => 
    coreValues[(startIndex + i) % coreValues.length]
  );

  return (
    <div className="about-page">
      <PageBanner bgImage={bannerImg} title="Building Value Beyond Real Estate." subtitle="Understanding opportunity, creating strategy and building long-term value." />

      {/* 1. Our Story */}
      <section id="our-story" className="section-padding story-section">
        <div className="about-grid">
          <div>
            <span className="section-tag">OUR STORY</span>
            <h2>Bridging Opportunity & Execution.</h2>
          </div>
          <div>
            <p className="lead-text">
              ATA INFRATECH was created with the vision of bringing a strategic and modern approach to real estate.
            </p>
            <p className="sub-text">
              By combining market understanding, development thinking and investment discipline, we aim to bridge the gap between opportunity and execution. Our approach creates assets that are valuable today and relevant tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="section-padding mission-vision-section">
        <div className="mv-grid">
          <div className="mv-card">
            <Target size={36} color="#C8A22C" />
            <h3>Our Mission</h3>
            <p>To create high-value real estate opportunities through strategic thinking, responsible development and long-term partnerships.</p>
          </div>
          <div className="mv-card">
            <Eye size={36} color="#C8A22C" />
            <h3>Our Vision</h3>
            <p>To become a trusted real estate platform known for creating meaningful value across land, development and investment.</p>
          </div>
        </div>
      </section>

      {/* 3. Our Values Slider */}
      <section 
        className="section-padding values-slider-section"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="section-header-center">
          <span className="section-tag">GUIDING PRINCIPLES</span>
          <h2>Our Core Values</h2>
        </div>

        <div className="slider-wrapper">
          <button className="slider-btn prev-btn" onClick={() => setStartIndex((prev) => (prev - 1 + coreValues.length) % coreValues.length)}>
            <ChevronLeft size={24} />
          </button>
          <div className="slider-cards-container">
            {currentCards.map((v, i) => (
              <motion.div key={`${v.id}-${startIndex}-${i}`} className="val-slider-card">
                <div className="val-card-img" style={{ backgroundImage: `url(${v.img})` }}>
                  <div className="val-img-overlay" />
                  <span className="val-card-num">0{v.id}</span>
                </div>
                <div className="val-card-body">
                  <h4>{v.t}</h4>
                  <p>{v.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <button className="slider-btn next-btn" onClick={() => setStartIndex((prev) => (prev + 1) % coreValues.length)}>
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* 4. Why ATA Infratech (Dropdown Sync) */}
      <section id="why-ata" className="section-padding">
        <div className="section-header-center">
          <span className="section-tag">THE ATA ADVANTAGE</span>
          <h2>Why Partner With ATA INFRATECH</h2>
        </div>
        <div className="about-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px", marginTop: "40px" }}>
          {[
            { t: "Strategic Thinking", d: "Every opportunity begins with a clear, research-backed strategy.", icon: Compass },
            { t: "Market Intelligence", d: "Decisions are supported by exhaustive local market understanding and data.", icon: TrendingUp },
            { t: "End-to-End Perspective", d: "We manage and understand the complete real estate asset lifecycle.", icon: Shield },
            { t: "Value Creation", d: "Our focus extends beyond transactions to long-term asset value.", icon: Award },
            { t: "Transparent Approach", d: "Clear communication and responsible decision-making at every stage.", icon: CheckCircle2 },
            { t: "Long-Term Vision", d: "We build enduring relationships and assets with an inter-generational mindset.", icon: Users }
          ].map((item, idx) => (
            <div key={idx} className="mv-card">
              <item.icon size={28} color="#C8A22C" />
              <h3 style={{ fontSize: "20px", margin: "14px 0 8px" }}>{item.t}</h3>
              <p style={{ fontSize: "14px" }}>{item.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}