import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { MapPin, Shield } from "lucide-react";
import "./InvestmentOpportunities.css";

// Custom Banner Image Import
import oppBannerImg from "../assets/investment.jpg"; // Aapke assets folder me jo image ho

const opportunities = [
  {
    id: "opp-1",
    name: "Strategic Highway Growth Parcel",
    loc: "Ayodhya Growth Corridor, UP",
    type: "Plotted Development / Land Asset",
    scale: "45 Acres",
    stage: "Land Consolidation & Master Planning",
    roi: "High Capital Appreciation Potential"
  },
  {
    id: "opp-2",
    name: "Prime Corporate District",
    loc: "Lucknow IT/Commercial Zone, UP",
    type: "Grade-A Commercial & Retail",
    scale: "120,000 Sq. Ft. Built-up",
    stage: "Feasibility Approved / JV Structuring",
    roi: "Steady Yield + Capital Growth"
  },
  {
    id: "opp-3",
    name: "Eco-Luxury Residential Boulevard",
    loc: "Noida Expressway Sector, UP",
    type: "Premium Gated Living",
    scale: "25 Acres Integrated Township",
    stage: "Design & Approvals Phase",
    roi: "Structured Co-Investment"
  }
];

export default function InvestmentOpportunities() {
  return (
    <div className="investment-opportunities-page">
      {/* Custom Banner with Image */}
      <PageBanner
        bgImage={oppBannerImg}
        tag="SELECTED OPPORTUNITIES"
        title="Opportunities Worth Exploring."
        subtitle="Institutional-grade real estate assets identified through disciplined research and feasibility analysis."
      />

      <section className="section-padding">
        <div className="opp-grid">
          {opportunities.map((opp) => (
            <div key={opp.id} className="opp-card">
              <div>
                <span className="opp-tag">{opp.type}</span>
                <h3>{opp.name}</h3>
                <p className="opp-loc">
                  <MapPin size={16} color="#C8A22C" /> {opp.loc}
                </p>

                <div className="opp-metrics-box">
                  <div className="opp-metric-row">
                    <span>Scale:</span>
                    <strong>{opp.scale}</strong>
                  </div>
                  <div className="opp-metric-row">
                    <span>Stage:</span>
                    <strong className="gold-val">{opp.stage}</strong>
                  </div>
                  <div className="opp-metric-row">
                    <span>Profile:</span>
                    <strong>{opp.roi}</strong>
                  </div>
                </div>
              </div>

              <Link to="/contact?type=partner" className="btn-gold opp-btn">
                Request Opportunity Dossier
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Diligence Section (Dark Theme Compliant) */}
      <section className="section-padding diligence-section">
        <Shield size={38} color="#C8A22C" style={{ margin: "0 auto 16px" }} />
        <h2>Institutional Diligence Standard</h2>
        <p className="diligence-desc">
          All investment opportunities are backed by clear titles, independent valuation metrics, and institutional risk management.
        </p>
        <Link to="/contact" className="btn-outline">
          Connect With Investment Desk
        </Link>
      </section>
    </div>
  );
}