import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import "./Advisory.css";

// Custom Banner Image
import advBanner from "../assets/Advisory.jpg";

export default function Advisory() {
  return (
    <div className="adv-page">
      <PageBanner
        bgImage={advBanner}
        tag="STRATEGIC GUIDANCE"
        title="Strategy That Unlocks Potential."
        subtitle="We provide strategic real estate guidance to landowners, investors and businesses to help them make informed decisions."
      />

      <section className="section-padding">
        <div className="section-header">
          <span className="section-tag">SERVICES</span>
          <h2>Advisory Capabilities</h2>
        </div>
        <div className="adv-grid">
          {[
            { t: "Land Advisory", d: "Strategic positioning, regulatory due diligence and monetization of land assets." },
            { t: "Market Research", d: "Exhaustive demographic analysis, absorption modeling and growth corridor assessment." },
            { t: "Feasibility Advisory", d: "Evaluating commercial viability, development densities and capital structures." },
            { t: "Investment Advisory", d: "Structured deal evaluation, risk-weighted profiling and exit forecasting." },
            { t: "Development Advisory", d: "Comprehensive guidance across concept design, positioning and lifecycle planning." },
            { t: "Asset Strategy", d: "Helping owners determine highest and best use (HBU) to maximize asset potential." }
          ].map((item, i) => (
            <div key={i} className="adv-card">
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding clients-section">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-tag">WHO WE ADVISE</span>
          <h2>Client Segments</h2>
        </div>
        <div className="client-types">
          <span>Landowners</span>
          <span>Institutional Investors</span>
          <span>Corporate Developers</span>
          <span>Family Offices</span>
          <span>Enterprises</span>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to="/contact" className="btn-gold">Talk to Our Advisory Team</Link>
        </div>
      </section>
    </div>
  );
}