import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import "./Devlopment.css";

export default function Development() {
  const steps = [
    "Opportunity Identification", "Land & Market Assessment", "Feasibility Study",
    "Development Strategy", "Planning & Design", "Execution",
    "Marketing & Positioning", "Value Realisation"
  ];

  return (
    <div className="dev-page">
      <PageBanner
        tag="CORE CAPABILITY"
        title="Development With Purpose."
        subtitle="We transform land and development opportunities into thoughtfully planned real estate assets."
      />

      <section className="section-padding">
        <div className="section-header">
          <span className="section-tag">CAPABILITIES</span>
          <h2>End-to-End Development Solutions</h2>
        </div>
        <div className="capabilities-grid">
          {[
            { t: "Land Identification", d: "Identifying land parcels and development opportunities aligned with market demand." },
            { t: "Feasibility & Planning", d: "Evaluating technical, commercial and market feasibility before development." },
            { t: "Project Strategy", d: "Defining the right product, positioning, target audience and development strategy." },
            { t: "Development Management", d: "Coordinating stakeholders and execution to move projects from concept to reality." },
            { t: "Asset Positioning", d: "Creating a clear market identity that improves project visibility and value." }
          ].map((item, i) => (
            <div key={i} className="cap-card">
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding process-section">
        <div className="section-header">
          <span className="section-tag">OUR PROCESS</span>
          <h2>The Development Lifecycle</h2>
        </div>
        <div className="process-list">
          {steps.map((step, idx) => (
            <div key={idx} className="process-item">
              <span className="p-idx">0{idx + 1}</span>
              <h4>{step}</h4>
            </div>
          ))}
        </div>
        <div className="dev-cta-wrapper">
          <Link to="/contact" className="btn-gold">Discuss Your Project</Link>
        </div>
      </section>
    </div>
  );
}