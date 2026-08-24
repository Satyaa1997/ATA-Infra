import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { Compass, TrendingUp, Shield, Award, CheckCircle2, Users, ArrowRight } from "lucide-react";
import "./WhyATA.css";

// Custom Banner Image Import
import whyBannerImg from "../assets/insight3.jpg"; // Jo bhi banner image lagani ho

const pillars = [
  { t: "Strategic Thinking", d: "Every opportunity begins with a clear, research-backed strategy and measurable roadmap.", icon: Compass },
  { t: "Market Intelligence", d: "Decisions are supported by exhaustive local demographic, economic, and infrastructure data.", icon: TrendingUp },
  { t: "End-to-End Lifecycle", d: "From land acquisition to master development and asset exit, we manage all phases.", icon: Shield },
  { t: "Sustainable Value", d: "Our focus extends beyond transactional gains to generational real estate asset valuation.", icon: Award },
  { t: "Absolute Transparency", d: "Clear communication and responsible governance at every decision gate.", icon: CheckCircle2 },
  { t: "Enduring Partnerships", d: "We build high-trust relationships with landowners, corporate partners, and investors.", icon: Users }
];

export default function WhyATA() {
  return (
    <div className="why-ata-page">
      {/* Custom Banner with Image */}
      <PageBanner
        bgImage={whyBannerImg}
        tag="THE ATA ADVANTAGE"
        title="Why Partner With ATA INFRATECH."
        subtitle="Bridging the gap between raw real estate opportunity and high-value landmark execution."
      />

      <section className="section-padding">
        <div className="pillars-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="pillar-card">
              <item.icon size={32} color="#C8A22C" style={{ marginBottom: "14px" }} />
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding cta-banner-section">
        <h2>Experience the ATA Standard</h2>
        <p>
          Discover how our strategic advisory and development ecosystem can accelerate your land and asset value.
        </p>
        <Link to="/contact" className="btn-gold">
          Start a Conversation <ArrowRight size={16} style={{ marginLeft: "6px", verticalAlign: "middle" }} />
        </Link>
      </section>
    </div>
  );
}