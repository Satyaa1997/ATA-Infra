import { useState } from "react";
import PageBanner from "../components/PageBanner";
import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

const allProjects = [
  { id: 1, title: "Grand Horizon Towers", cat: "Residential", loc: "Lucknow, UP", status: "Ongoing", img: "./src/assets/project1.jpg" },
  { id: 2, title: "Apex Capital Plaza", cat: "Commercial", loc: "Varanasi, UP", status: "Ongoing", img: "./src/assets/project2.jpg" },
  { id: 3, title: "The Sovereign Greens", cat: "Mixed Use", loc: "Noida, UP", status: "Completed", img: "./src/assets/project3.jpg" },
  { id: 4, title: "Emerald Land Parcel", cat: "Development", loc: "Ayodhya, UP", status: "Ongoing", img: "./src/assets/project4.jpg" }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? allProjects : allProjects.filter(p => p.cat === filter);

  return (
    <div className="projects-page">
      <PageBanner
        tag="PORTFOLIO"
        title="Ideas Transformed into Assets."
        subtitle="Explore our selected real estate developments and strategic opportunities."
      />

      <section className="section-padding">
        <div className="filter-bar">
          {["All", "Residential", "Commercial", "Mixed Use", "Development"].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((item) => (
            <div key={item.id} className="project-card">
              <div className="project-thumb" style={{ backgroundImage: `url(${item.img})` }}>
                <span className="status-badge">{item.status}</span>
              </div>
              <div className="project-details">
                <span className="proj-cat">{item.cat} • {item.loc}</span>
                <h3>{item.title}</h3>
                <span className="view-btn">View Details <ArrowUpRight size={16} /></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}