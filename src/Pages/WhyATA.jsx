import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { Layers, Zap, Coins, TrendingUp, MapPin, ArrowRight } from "lucide-react";
import "./WhyATA.css";
import whyBannerImg from "../assets/insight3.jpg";

const reasons = [
  { 
    num: "01",
    t: "One Partner, Three Solutions", 
    d: "No need to juggle separate sales agencies, investor networks, and consultants. We bring Aggregation, Investment, and Advisory together under one roof.", 
    icon: Layers 
  },
  { 
    num: "02",
    t: "Built for Speed", 
    d: "Our structured sales pipeline and ready channel partner network mean your project starts selling and scaling faster.", 
    icon: Zap 
  },
  { 
    num: "03",
    t: "Real Capital Connections", 
    d: "We don't just advise — we actively connect builders with investors ready to fund ongoing, upcoming, and scale-up projects.", 
    icon: Coins 
  },
  { 
    num: "04",
    t: "Growth Beyond One Project", 
    d: "Our advisory services help you build a lasting, recognizable real estate business, not just complete a one-off project.", 
    icon: TrendingUp 
  },
  { 
    num: "05",
    t: "Proven On-Ground Work", 
    d: "Already active across Gorakhpur, Lucknow, and Pune — with active, pre-launch, and sold-out projects in our portfolio.", 
    icon: MapPin 
  }
];

export default function WhyATA() {
  return (
    <div className="why-ata-page">
      <PageBanner
        bgImage={whyBannerImg}
        tag="WHY CHOOSE US"
        title="Why Real Estate Builders Trust ATA Infratech"
        subtitle="We help builders sell faster, raise capital easier, and build a lasting brand."
      />

      <section className="section-padding">
        <div className="section-header-center">
          <span className="section-tag">THE ATA ADVANTAGE</span>
          <h2>A Comprehensive Solution for Modern Developers</h2>
        </div>

        <div className="pillars-grid">
          {reasons.map((item, idx) => (
            <div key={idx} className="pillar-card">
              <div className="card-top-row">
                <item.icon size={30} color="#C8A22C" />
                <span className="reason-number">{item.num}</span>
              </div>
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding cta-banner-section">
        <h2>Ready to Sell Your Project Faster and Grow Your Business?</h2>
        <p>Let's talk about how ATA Infratech can support your next project.</p>
        <Link to="/contact" className="btn-gold">
          Talk to Our Team <ArrowRight size={16} style={{ marginLeft: "6px", verticalAlign: "middle" }} />
        </Link>
      </section>
    </div>
  );
}