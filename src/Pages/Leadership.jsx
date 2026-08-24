import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import "./Leadership.css";

import leadershipBanner from "../assets/leadership.jpg";
import img1 from "../assets/project1.jpg";
import img2 from "../assets/highway.jpg";
import img3 from "../assets/project2.jpg";
import img4 from "../assets/insight1.jpg";
import img5 from "../assets/insight2.jpg";
import img6 from "../assets/project3.jpg";
import img7 from "../assets/project4.jpg";

// Original 3 Leadership Cards
const leadershipTeam = [
  {
    role: "Strategic Direction & Development",
    title: "Executive Leadership",
    desc: "Spearheading high-yield real estate asset identification, master land consolidation, and multi-sector corporate joint ventures with over 15+ years of strategic real estate depth."
  },
  {
    role: "Investment Management & Advisory",
    title: "Capital Strategy Leadership",
    desc: "Structuring disciplined capital deployment, risk-weighted asset evaluation, and institutional investor relations across prime growth corridors."
  },
  {
    role: "Project Execution & Planning",
    title: "Technical & Delivery Board",
    desc: "Directing architectural compliance, sustainable urban engineering, and high-standard construction lifecycles to deliver landmark destinations on schedule."
  }
];

// Marquee Gallery Images
const galleryImages = [img1, img2, img3, img4, img5, img6, img7];

export default function Leadership() {
  return (
    <div className="leadership-page">
      <PageBanner
        bgImage={leadershipBanner}
        tag="STRATEGIC GOVERNANCE"
        title="Leadership Driven by Vision."
        subtitle="Guiding ATA INFRATECH with deep market intelligence, financial discipline and developmental excellence."
      />

      {/* 1. Original 3 Cards Section */}
      <section className="section-padding">
        <div className="section-header-center">
          <span className="section-tag">GOVERNING BOARD</span>
          <h2>The Minds Behind the Strategy</h2>
        </div>

        <div className="leadership-grid">
          {leadershipTeam.map((leader, i) => (
            <div key={i} className="leader-card">
              <div className="leader-header">
                <ShieldCheck color="#C8A22C" size={32} />
                <span className="leader-badge">{leader.role}</span>
              </div>
              <h3>{leader.title}</h3>
              <p>{leader.desc}</p>
            </div>
          ))}
        </div>
      </section>

     

      {/* 3. Governance Section */}
      <section className="section-padding governance-section">
        <div className="about-grid">
          <div>
            <span className="section-tag">OUR PHILOSOPHY</span>
            <h2>Leadership Committed to Long-Term Value.</h2>
          </div>
          <div>
            <p className="lead-text">
              We operate on an institutional framework where accountability, transparency, and research precede all execution milestones.
            </p>
            <Link to="/contact" className="btn-gold" style={{ marginTop: "20px" }}>
              Connect With Our Leadership
            </Link>
          </div>
        </div>
      </section>
       {/* 2. Infinite Continuous Marquee Slider (Pure Images) */}
      <section className="marquee-slider-section">
        <div className="marquee-track">
          {/* Double array to create seamless infinite loop */}
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div key={i} className="marquee-item">
              <img src={img} alt="ATA Infrastructure Landmark" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}