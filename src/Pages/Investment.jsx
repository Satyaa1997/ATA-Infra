import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import "./Investment.css";

export default function Investment() {
  return (
    <div className="inv-page">
      <PageBanner
        tag="INVESTMENT PLATFORM"
        title="Investing Beyond the Obvious."
        subtitle="Real estate investment requires research, disciplined evaluation and long-term perspective."
      />

      <section className="section-padding">
        <div className="section-header">
          <span className="section-tag">PHILOSOPHY</span>
          <h2>Disciplined Investment Approach</h2>
        </div>
        <div className="inv-grid">
          {[
            { t: "Market First", d: "We study market demand, growth potential and emerging opportunities." },
            { t: "Risk Conscious", d: "Every opportunity is evaluated against potential risks and market challenges." },
            { t: "Value Driven", d: "We focus on assets with potential for sustainable value creation." },
            { t: "Long Term", d: "Our approach is designed around long-term opportunity rather than speculation." }
          ].map((item, i) => (
            <div key={i} className="inv-card">
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding focus-areas">
        <div className="section-header">
          <span className="section-tag">FOCUS AREAS</span>
          <h2>Target Asset Classes</h2>
        </div>
        <div className="tags-cloud">
          <span>Land Opportunities</span>
          <span>Residential Development</span>
          <span>Commercial Real Estate</span>
          <span>Mixed-Use Development</span>
          <span>Joint Ventures</span>
          <span>Strategic Partnerships</span>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to="/contact" className="btn-gold">Explore Opportunities</Link>
        </div>
      </section>
    </div>
  );
}