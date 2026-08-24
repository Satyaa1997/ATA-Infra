import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import { ArrowUpRight } from "lucide-react";
import "./Insights.css";

import insight1 from "../assets/insight1.jpg";
import insight2 from "../assets/insight2.jpg";
import insight3 from "../assets/insight3.jpg";

const articles = [
  {
    id: 1,
    title: "Why Location Still Defines Real Estate Value",
    category: "Market Insights",
    tag: "insights",
    date: "August 2026",
    desc: "An in-depth analysis of how infrastructural connectivity and regional zoning determine land valuation.",
    img: insight1
  },
  {
    id: 2,
    title: "5 Factors to Evaluate Before Investing in Land",
    category: "Real Estate Trends",
    tag: "trends",
    date: "July 2026",
    desc: "Key due diligence checklists for institutional and private investors acquiring development parcels.",
    img: insight2
  },
  {
    id: 3,
    title: "How Urban Growth Corridors Create Real Estate Assets",
    category: "News & Updates",
    tag: "news",
    date: "June 2026",
    desc: "Identifying emerging expansion rings in tier-1 and tier-2 growth hubs across Uttar Pradesh.",
    img: insight3
  }
];

export default function Insights() {
  const [searchParams] = useSearchParams();
  const catQuery = searchParams.get("cat");
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    if (catQuery === "trends") setActiveTab("trends");
    else if (catQuery === "news") setActiveTab("news");
    else setActiveTab("All");
  }, [catQuery]);

  const filteredArticles = articles.filter((a) => {
    if (activeTab === "All") return true;
    return a.tag === activeTab;
  });

  return (
    <div className="insights-page">
      <PageBanner
        tag="REAL ESTATE INTELLIGENCE"
        title="Ideas. Markets. Perspectives."
        subtitle="Insights and research shaping modern real estate strategy."
      />

      <section className="section-padding">
        <div className="insights-grid">
          {filteredArticles.map((art) => (
            <div key={art.id} className="insight-card">
              <div className="insight-thumb" style={{ backgroundImage: `url(${art.img})` }} />
              <div className="insight-body">
                <span className="insight-cat">{art.category} • {art.date}</span>
                <h3>{art.title}</h3>
                <p style={{ color: "#555", fontSize: "14px", marginBottom: "20px" }}>{art.desc}</p>
                <Link to="/contact" className="read-link">
                  Read Article <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}