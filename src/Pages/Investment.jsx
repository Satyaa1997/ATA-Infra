import PageBanner from "../components/PageBanner";
import { Link } from "react-router-dom";
import { TrendingUp, ShieldCheck, Target, Layers } from "lucide-react";
import "./Investment.css";

export default function Investment() {
  return (
    <div className="inv-page">
      <PageBanner
        tag="CAPITAL ALIGNMENT"
        title="Investing Beyond the Obvious."
        subtitle="Real estate investment requires research, market intelligence and disciplined evaluation."
      />

      {/* Investment Philosophy */}
      <section id="philosophy" className="section-padding">
        <div className="section-header">
          <span className="section-tag">INVESTMENT PHILOSOPHY</span>
          <h2>Disciplined Capital Strategy</h2>
        </div>
        <div className="inv-grid">
          {[
            { t: "Market First", d: "We study fundamental demand, growth corridors and infrastructure drivers.", icon: TrendingUp },
            { t: "Risk Conscious", d: "Every opportunity is rigorously evaluated against potential downside risks.", icon: ShieldCheck },
            { t: "Value Driven", d: "We prioritize assets with significant potential for value creation.", icon: Target },
            { t: "Long Term Horizon", d: "Our focus is structured around enduring value rather than speculative gains.", icon: Layers }
          ].map((item, i) => (
            <div key={i} className="inv-card">
              <item.icon size={32} color="#C8A22C" style={{ marginBottom: "16px" }} />
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding focus-areas">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-tag">OPPORTUNITY AREAS</span>
          <h2>Asset Focus & Opportunities</h2>
        </div>
        <div className="tags-cloud">
          <span>Land Consolidation</span>
          <span>Residential Plotted Developments</span>
          <span>Commercial Hubs</span>
          <span>Mixed-Use Developments</span>
          <span>Development Joint Ventures</span>
          <span>Strategic Partnerships</span>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to="/contact?type=partner" className="btn-gold">Explore Co-Investment</Link>
        </div>
      </section>
    </div>
  );
}