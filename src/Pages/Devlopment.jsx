import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import {  ArrowRight } from "lucide-react";
import "./Devlopment.css";
import devBanner from "../assets/project2.jpg";

export default function Development() {
  const executionScope = [
    { t: "Complete Project Blueprint", d: "Preparing a structured roadmap, pricing strategy, and launch timeline." },
    { t: "Channel Partner Network", d: "Connecting and mobilizing an active network of real estate channel partners." },
    { t: "Sales Events & Campaigns", d: "Planning and running targeted marketing events and lead generation drives." },
    { t: "Trackable Sales Pipeline", d: "Setting up a transparent, structured system from first inquiry to deal closure." },
    { t: "Multi-Segment Inventory Selling", d: "Dedicated sales execution for plotted layouts, residential units, and commercial spaces." }
  ];

  const steps = [
    "Project Blueprint & Plan",
    "Channel Partner Onboarding",
    "Marketing & Event Launch",
    "Sales Pipeline Execution",
    "Booking & Inventory Closure",
    "Handover Support"
  ];

  return (
    <div className="dev-page">
      <PageBanner
        bgImage={devBanner}
        tag="AGGREGATE PILLAR"
        title="Aggregate — Complete Sales Execution"
        subtitle="We take your project from blueprint to sold-out with an organized sales engine."
      />

      {/* Scope */}
      <section className="section-padding">
        <div className="section-header">
          <span className="section-tag">WHAT WE DO</span>
          <h2>Full-Cycle Project Aggregation</h2>
          <p className="section-subtitle">
            <strong>Who this is for:</strong> Builders who have a project ready but need an organized, professional sales engine behind it.
          </p>
        </div>
        <div className="capabilities-grid">
          {executionScope.map((item, i) => (
            <div key={i} className="cap-card">
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Execution Roadmap */}
      <section className="section-padding process-section">
        <div className="section-header">
          <span className="section-tag">EXECUTION ROADMAP</span>
          <h2>From Launch to Sold-Out</h2>
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
          <Link to="/contact" className="btn-gold">
            Partner With Us for Sales Execution <ArrowRight size={16} style={{ display: 'inline', marginLeft: 6 }} />
          </Link>
        </div>
      </section>
    </div>
  );
}