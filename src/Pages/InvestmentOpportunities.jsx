import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import "./InvestmentOpportunities.css";
import oppBannerImg from "../assets/investment.jpg";

const activeBuilderProjects = [
  {
    id: "opp-gorakhpur",
    name: "Anant City",
    builder: "Anantjit Infra Developers Pvt. Ltd.",
    loc: "Gorakhpur",
    type: "Plotted Development & Residential",
    scale: "Prime Township Parcel",
    stage: "Active Development / Sales Pipeline",
    support: "Channel Partner Network & Project Funding"
  },
  {
    id: "opp-lucknow",
    name: "Garden Ganj",
    builder: "Garden Square Ventures Pvt. Ltd.",
    loc: "Lucknow",
    type: "Commercial & Plotted Enclave",
    scale: "High-Absorption Commercial Zone",
    stage: "Active Execution",
    support: "Sales Acceleration & Strategic Capital"
  },
  {
    id: "opp-pune-1",
    name: "Vayu Mantra & Vayu Green",
    builder: "Buildup Property Pvt. Ltd.",
    loc: "Pune",
    type: "Residential Villas & Townships",
    scale: "Multi-Phase Project (Vayu Villa Sold Out)",
    stage: "Pre-Launch & Active Expansion",
    support: "Complete Capital & Sales Pipeline"
  }
];

export default function InvestmentOpportunities() {
  return (
    <div className="investment-opportunities-page">
      <PageBanner
        bgImage={oppBannerImg}
        tag="INVEST PILLAR"
        title="Invest — Connecting Builders with Investors"
        subtitle="We bridge the gap between high-potential real estate projects and active capital partners."
      />

      {/* Overview Snapshot */}
      <section className="section-padding">
        <div className="section-header" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px auto" }}>
          <span className="section-tag">CAPITAL STRUCTURING</span>
          <h2>Fueling High-Growth Real Estate Projects</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            <strong>Who this is for:</strong> Builders who need funding partners to launch, complete, or scale their residential, commercial, or plotted developments without cashflow friction.
          </p>
        </div>

        <div className="opp-grid">
          {activeBuilderProjects.map((opp) => (
            <div key={opp.id} className="opp-card">
              <div>
                <span className="opp-tag">{opp.type}</span>
                <h3>{opp.name}</h3>
                <p className="builder-name">Builder: <strong>{opp.builder}</strong></p>
                <p className="opp-loc">
                  <MapPin size={16} color="#C8A22C" /> {opp.loc}
                </p>

                <div className="opp-metrics-box">
                  <div className="opp-metric-row">
                    <span>Scope:</span>
                    <strong>{opp.scale}</strong>
                  </div>
                  <div className="opp-metric-row">
                    <span>Project Stage:</span>
                    <strong className="gold-val">{opp.stage}</strong>
                  </div>
                  <div className="opp-metric-row">
                    <span>ATA Role:</span>
                    <strong>{opp.support}</strong>
                  </div>
                </div>
              </div>

              <Link to="/contact" className="btn-gold opp-btn">
                Discuss Project Funding <ArrowRight size={15} style={{ display: 'inline', marginLeft: 6 }} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Diligence & Advantage */}
      <section className="section-padding diligence-section">
        <ShieldCheck size={42} color="#C8A22C" style={{ margin: "0 auto 16px" }} />
        <h2>The ATA Investment Connection</h2>
        <p className="diligence-desc">
          We help structure clear investor conversations, assist in fundraising for ongoing and pre-launch developments, and secure capital so construction never stops.
        </p>
        <Link to="/contact" className="btn-outline">
          Connect with Our Investment Team
        </Link>
      </section>
    </div>
  );
}