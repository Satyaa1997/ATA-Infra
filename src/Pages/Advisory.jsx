import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import {  ArrowRight } from "lucide-react";
import "./Advisory.css";
import advBanner from "../assets/Advisory.jpg";

export default function Advisory() {
  const advisoryCapabilities = [
    { 
      t: "Business Growth Strategy", 
      d: "Consulting on how to scale from a single project into an organized, multi-project real estate company." 
    },
    { 
      t: "Team Building & Hiring", 
      d: "Guiding builders in recruiting the right talent for on-ground sales, operations, and site management." 
    },
    { 
      t: "Coaching & Staff Training", 
      d: "Providing specialized training programs to elevate your in-house sales and customer handling teams." 
    },
    { 
      t: "Branding Material & Identity", 
      d: "Delivering ready brochures, presentation decks, digital collateral, and corporate branding assets." 
    },
    { 
      t: "Operational Frameworks", 
      d: "Setting up reporting protocols, CRM tracking, and transparent customer handover workflows." 
    },
    { 
      t: "Ongoing Advisory Support", 
      d: "Providing strategic counsel to overcome regulatory, market, and operational bottlenecks." 
    }
  ];

  return (
    <div className="adv-page">
      <PageBanner
        bgImage={advBanner}
        tag="ADVISORY PILLAR"
        title="Business & Team Growth Consulting"
        subtitle="We help builders grow beyond a single project into a strong, organized, and branded real estate company."
      />

      {/* What we do & Who this is for */}
      <section className="section-padding">
        <div className="section-header">
          <span className="section-tag">CONSULTING CAPABILITIES</span>
          <h2>How We Advise Builders</h2>
        </div>
        <div className="adv-grid">
          {advisoryCapabilities.map((item, i) => (
            <div key={i} className="adv-card">
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Target Segment */}
      <section className="section-padding clients-section">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-tag">WHO THIS IS FOR</span>
          <h2>Built for Ambitious Real Estate Developers</h2>
          <p className="section-subtitle" style={{ margin: "10px auto 0", textAlign: "center" }}>
            Builders who want to build a lasting, professional real estate brand — not just complete a one-off project.
          </p>
        </div>

        <div className="client-types">
          <span>Residential Builders</span>
          <span>Plotting & Township Developers</span>
          <span>Commercial Project Owners</span>
          <span>Emerging Real Estate Brands</span>
        </div>

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link to="/contact" className="btn-gold">
            Talk to Our Advisory Team <ArrowRight size={16} style={{ display: 'inline', marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </div>
  );
}