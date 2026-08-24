import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";
import { MapPin, TrendingUp, ArrowRight, Shield } from "lucide-react";
import "./Projects.css";

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
      <PageBanner
        tag="SELECTED OPPORTUNITIES"
        title="Opportunities Worth Exploring."
        subtitle="Institutional-grade real estate assets identified through disciplined research and feasibility analysis."
      />

      <section className="section-padding">
        <div className="projects-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))" }}>
          {opportunities.map((opp) => (
            <div key={opp.id} className="project-card" style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <span className="proj-cat">{opp.type}</span>
                <h3 style={{ fontSize: "22px", margin: "10px 0" }}>{opp.name}</h3>
                <p style={{ display: "flex", alignItems: "center", gap: "6px", color: "#666", fontSize: "14px", marginBottom: "16px" }}>
                  <MapPin size={16} color="#C8A22C" /> {opp.loc}
                </p>

                <div style={{ background: "#F2EFE9", padding: "16px", borderRadius: "4px", marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "13px" }}>
                    <span>Scale:</span>
                    <strong>{opp.scale}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "13px" }}>
                    <span>Stage:</span>
                    <strong style={{ color: "#C8A22C" }}>{opp.stage}</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                    <span>Profile:</span>
                    <strong>{opp.roi}</strong>
                  </div>
                </div>
              </div>

              <Link to="/contact?type=partner" className="btn-gold" style={{ textAlign: "center", width: "100%" }}>
                Request Opportunity Dossier
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding focus-areas" style={{ textAlign: "center" }}>
        <Shield size={36} color="#C8A22C" style={{ margin: "0 auto 16px" }} />
        <h2>Institutional Diligence Standard</h2>
        <p style={{ color: "#555", maxWidth: "600px", margin: "10px auto 30px" }}>
          All investment opportunities are backed by clear titles, independent valuation metrics, and institutional risk management.
        </p>
        <Link to="/contact" className="btn-outline">Connect With Investment Desk</Link>
      </section>
    </div>
  );
}