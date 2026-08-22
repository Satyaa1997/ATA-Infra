import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";
import "./Advisory.css";

export default function Advisory() {
  return (
    <div className="adv-page">
      <PageBanner
        tag="STRATEGIC GUIDANCE"
        title="Strategy That Unlocks Potential."
        subtitle="We provide strategic real estate guidance to landowners, investors and businesses."
      />

      <section className="section-padding">
        <div className="section-header">
          <span className="section-tag">SERVICES</span>
          <h2>Advisory Services</h2>
        </div>
        <div className="adv-grid">
          {[
            { t: "Land Advisory", d: "Assessment and strategic positioning of land assets." },
            { t: "Market Research", d: "Market analysis, demand assessment and opportunity identification." },
            { t: "Feasibility Advisory", d: "Understanding commercial and development potential." },
            { t: "Investment Advisory", d: "Evaluation of investment opportunities and strategic options." },
            { t: "Development Advisory", d: "Guidance across planning, positioning and development strategy." },
            { t: "Asset Strategy", d: "Helping owners determine the right strategy to maximise asset potential." }
          ].map((item, i) => (
            <div key={i} className="adv-card">
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding clients-section">
        <div className="section-header">
          <span className="section-tag">WHO WE ADVISE</span>
          <h2>Client Segments</h2>
        </div>
        <div className="client-types">
          <span>Landowners</span>
          <span>Investors</span>
          <span>Developers</span>
          <span>Corporates</span>
          <span>Institutions</span>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to="/contact" className="btn-gold">Talk to Our Advisory Team</Link>
        </div>
      </section>
    </div>
  );
}