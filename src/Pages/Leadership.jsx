import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";
import { Award, Briefcase, Compass, ShieldCheck } from "lucide-react";
import "./About.css";

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

export default function Leadership() {
  return (
    <div className="leadership-page">
      <PageBanner
        tag="STRATEGIC GOVERNANCE"
        title="Leadership Driven by Vision."
        subtitle="Guiding ATA INFRATECH with deep market intelligence, financial discipline and developmental excellence."
      />

      <section className="section-padding">
        <div className="section-header-center">
          <span className="section-tag">GOVERNING BOARD</span>
          <h2>The Minds Behind the Strategy</h2>
        </div>

        <div className="about-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", marginTop: "40px" }}>
          {leadershipTeam.map((leader, i) => (
            <div key={i} className="mv-card">
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
                <ShieldCheck color="#C8A22C" size={32} />
                <span style={{ color: "#C8A22C", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "700" }}>
                  {leader.role}
                </span>
              </div>
              <h3 style={{ fontSize: "22px", margin: "0 0 12px" }}>{leader.title}</h3>
              <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.8" }}>{leader.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding mission-vision-section">
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
    </div>
  );
}