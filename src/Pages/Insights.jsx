import PageBanner from "../components/PageBanner";
import { ArrowRight } from "lucide-react";
import "./Insights.css";

export default function Insights() {
  const blogs = [
    { id: 1, title: "Why Location Still Defines Real Estate Value", date: "August 2026", cat: "Market Analysis", img: "./src/assets/insight1.jpg" },
    { id: 2, title: "5 Factors to Evaluate Before Investing in Land", date: "July 2026", cat: "Investment", img: "./src/assets/insight2.jpg" },
    { id: 3, title: "How Urban Growth Creates Real Estate Opportunities", date: "June 2026", cat: "Urban Growth", img: "./src/assets/insight3.jpg" }
  ];

  return (
    <div className="insights-page">
      <PageBanner
        tag="PERSPECTIVES"
        title="Real Estate Intelligence."
        subtitle="Ideas, insights and perspectives shaping the future of real estate."
      />

      <section className="section-padding">
        <div className="insights-grid">
          {blogs.map((b) => (
            <div key={b.id} className="insight-card">
              <div className="insight-thumb" style={{ backgroundImage: `url(${b.img})` }} />
              <div className="insight-body">
                <span className="insight-cat">{b.cat} • {b.date}</span>
                <h3>{b.title}</h3>
                <span className="read-link">Read Article <ArrowRight size={16} /></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}