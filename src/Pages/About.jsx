import { useState, useEffect } from "react";
import PageBanner from "../components/PageBanner";
import { Target, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "./About.css";

const coreValues = [
  { 
    id: 1, 
    t: "Integrity", 
    d: "We believe trust is the foundation of every partnership.", 
    img: "/assets/val-integrity1.jpg" 
  },
  { 
    id: 2, 
    t: "Strategy", 
    d: "Every decision should have a clear purpose and measurable roadmap.", 
    img: "/assets/val-integrity2.jpg" 
  },
  { 
    id: 3, 
    t: "Excellence", 
    d: "We pursue quality in thinking, execution and final outcomes.", 
    img: "/assets/val-integrity3.jpg" 
  },
  { 
    id: 4, 
    t: "Transparency", 
    d: "We believe in open and responsible communication at every step.", 
    img: "/assets/val-integrity4.jpg" 
  },
  { 
    id: 5, 
    t: "Sustainability", 
    d: "We consider long-term environmental and social impact in every opportunity.", 
    img: "/assets/val-integrity5.jpg" 
  },
  { 
    id: 6, 
    t: "Partnership", 
    d: "We grow by creating enduring value for everyone involved.", 
    img: "/assets/val-integrity6.jpg" 
  }
];

export default function About() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, startIndex]);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % coreValues.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + coreValues.length) % coreValues.length);
  };

  const total = coreValues.length;
  const currentCards = [
    coreValues[startIndex % total],
    coreValues[(startIndex + 1) % total],
    coreValues[(startIndex + 2) % total]
  ];

  return (
    <div className="about-page">
      {/* Public URL pass kiya hai taaki import crash na kare */}
      <PageBanner bgImage="../src/assets/insight2.jpg" />

      {/* Story Section */}
      <section className="section-padding story-section">
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

      {/* Mission Vision Section */}
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

      {/* Core Values Slider Section */}
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
          <button className="slider-btn prev-btn" onClick={handlePrev} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          <div className="slider-cards-container">
            {currentCards.map((v, i) => (
              <motion.div
                key={`${v.id}-${startIndex}-${i}`}
                className="val-slider-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="val-card-img" 
                  style={{ backgroundImage: `url(${v.img})` }}
                >
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

          <button className="slider-btn next-btn" onClick={handleNext} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}