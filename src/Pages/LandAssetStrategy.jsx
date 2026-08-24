import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";
import { Map, Layers, PieChart, ShieldAlert, CheckCircle } from "lucide-react";
import "./Devlopment.css";

const strategyModules = [
  {
    title: "Land Aggregation & Consolidation",
    desc: "Identifying and strategically assembling contiguous land parcels along high-velocity growth corridors with clear legal documentation.",
    icon: Map
  },
  {
    title: "Zoning & Master Asset Repositioning",
    desc: "Transforming under-utilized land holdings into commercially viable, high-density residential or mixed-use developmental blueprints.",
    icon: Layers
  },
  {
    title: "Highest & Best Use (HBU) Analysis",
    desc: "Quantitative modeling to evaluate market demand, economic returns, and absorption rates across commercial, retail, and living formats.",
    icon: PieChart
  },
  {
    title: "Legal & Due Diligence Structuring",
    desc: "Rigorous verification of ownership titles, encumbrances, regulatory compliance, and governmental approvals.",
    icon: ShieldAlert
  }
];

export default function LandAssetStrategy() {
  return (
    <div className="land-strategy-page">
      <PageBanner
        tag="ASSET OPTIMIZATION"
        title="Land & Asset Strategy."
        subtitle="Unlocking latent value from strategic real estate holdings through precision planning and market alignment."
      />

      <section className="section-padding">
        <div className="section-header">
          <span className="section-tag">STRATEGIC PILLARS</span>
          <h2>Maximized Land Realisation</h2>
        </div>

        <div className="capabilities-grid">
          {strategyModules.map((item, idx) => (
            <div key={idx} className="cap-card">
              <item.icon size={32} color="#C8A22C" style={{ marginBottom: "16px" }} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding process-section">
        <div className="section-header">
          <span className="section-tag">METHODOLOGY</span>
          <h2>Strategic Asset Roadmap</h2>
        </div>
        <div className="process-list">
          {[
            "Land Audit & Spatial Mapping",
            "Market Absorption & Demand Forecast",
            "Financial Modeling & Yield Projections",
            "Joint Venture / Monetisation Execution"
          ].map((step, idx) => (
            <div key={idx} className="process-item">
              <span className="p-idx">0{idx + 1}</span>
              <h4>{step}</h4>
            </div>
          ))}
        </div>
        <div className="dev-cta-wrapper">
          <Link to="/contact" className="btn-gold">Consult on Your Land Asset</Link>
        </div>
      </section>
    </div>
  );
}