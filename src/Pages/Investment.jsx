import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { TrendingUp, ShieldCheck, Target, Layers } from "lucide-react";
import "./Investment.css";

// Custom Banner Image
import invBanner from "../assets/return.jpg";

export default function Investment() {
  return (
    <div className="inv-page">
      <PageBanner
        bgImage={invBanner}
        tag="CAPITAL DISCIPLINE"
        title="Investing Beyond the Obvious."
        subtitle="Real estate investment requires research, market intelligence and disciplined evaluation."
      />

      <section id="philosophy" className="section-padding">
        <div className="section-header">
          <span className="section-tag">INVESTMENT PHILOSOPHY</span>
          <h2>Disciplined Capital Strategy</h2>
        </div>
        <div className="inv-grid">
          {[
            { t: "Market First", d: "We evaluate demand fundamentals, infrastructural catalysts and regional demographic shifts.", icon: TrendingUp },
            { t: "Risk Conscious", d: "Rigorous stress-testing of regulatory, operational and market liquidity risks.", icon: ShieldCheck },
            { t: "Value Driven", d: "Focus on assets where strategic repositioning unlocks sustainable equity growth.", icon: Target },
            { t: "Long Term Horizon", d: "Building resilient wealth structures rather than chasing short-term speculation.", icon: Layers }
          ].map((item, i) => (
            <div key={i} className="inv-card">
              <item.icon size={32} color="#C8A22C" style={{ marginBottom: "16px" }} />
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding focus-areas">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-tag">INVESTMENT AREAS</span>
          <h2>Opportunity Focus</h2>
        </div>
        <div className="tags-cloud">
          <span>Strategic Land Portfolios</span>
          <span>Plotted Development Schemes</span>
          <span>Commercial & Retail Assets</span>
          <span>Mixed-Use Developments</span>
          <span>Joint Ventures (JV)</span>
          <span>Development Partnerships</span>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to="/contact?type=partner" className="btn-gold">Explore Co-Investment Opportunities</Link>
        </div>
      </section>
    </div>
  );
}