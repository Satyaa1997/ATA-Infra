import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import "./Devlopment.css";

// Custom Banner Image
import devBanner from "../assets/project2.jpg";

export default function Development() {
  const steps = [
    "Opportunity Identification", "Land & Market Assessment", "Feasibility Study",
    "Development Strategy", "Planning & Design", "Execution Management",
    "Marketing & Positioning", "Value Realisation"
  ];

  return (
    <div className="dev-page">
      <PageBanner
        bgImage={devBanner}
        tag="CORE CAPABILITY"
        title="Development With Purpose."
        subtitle="We transform land and development opportunities into thoughtfully planned, high-value real estate assets."
      />

      <section className="section-padding">
        <div className="section-header">
          <span className="section-tag">CAPABILITIES</span>
          <h2>End-to-End Development Solutions</h2>
        </div>
        <div className="capabilities-grid">
          {[
            { t: "Land Identification", d: "Identifying high-potential land parcels aligned with regional growth corridors." },
            { t: "Feasibility & Master Planning", d: "Evaluating technical, regulatory and economic feasibility prior to capital allocation." },
            { t: "Project Strategy", d: "Formulating product typology, unit mix, positioning and target market alignment." },
            { t: "Development Management", d: "Managing stakeholders, contractors and milestones from concept to final delivery." },
            { t: "Asset Positioning", d: "Creating a premium corporate market identity that drives absorption and long-term value." }
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
          <Link to="/contact" className="btn-gold">Discuss Your Development Project</Link>
        </div>
      </section>
    </div>
  );
}