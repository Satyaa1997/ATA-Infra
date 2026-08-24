import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import { ArrowUpRight } from "lucide-react";
import "./Projects.css";

// Banner & Project Asset Imports
import projectBannerImg from "../assets/Projects.png";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

export const allProjects = [
  { 
    id: "grand-horizon", 
    title: "Grand Horizon Towers", 
    cat: "Residential", 
    loc: "Lucknow, UP", 
    status: "Ongoing", 
    img: project1 
  },
  { 
    id: "apex-capital-plaza", 
    title: "Apex Capital Plaza", 
    cat: "Commercial", 
    loc: "Varanasi, UP", 
    status: "Ongoing", 
    img: project2 
  },
  { 
    id: "sovereign-greens", 
    title: "The Sovereign Greens", 
    cat: "Mixed Use", 
    loc: "Noida, UP", 
    status: "Completed", 
    img: project3 
  },
  { 
    id: "emerald-land-parcel", 
    title: "Emerald Land Parcel", 
    cat: "Development", 
    loc: "Ayodhya, UP", 
    status: "Ongoing", 
    img: project4 
  }
];

export default function Projects() {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get("filter");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    if (filterParam === "ongoing") setFilter("Ongoing");
    else if (filterParam === "completed") setFilter("Completed");
    else setFilter("All");
  }, [filterParam]);

  const filtered = allProjects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Ongoing") return p.status === "Ongoing";
    if (filter === "Completed") return p.status === "Completed";
    return p.cat === filter;
  });

  return (
    <div className="projects-page">
      {/* Custom Banner with Image */}
      <PageBanner
        bgImage={projectBannerImg}
        tag="PORTFOLIO"
        title="Ideas Transformed into Assets."
        subtitle="Explore our selected real estate developments and strategic opportunities."
      />

      <section className="section-padding">
        <div className="filter-bar">
          {["All", "Residential", "Commercial", "Mixed Use", "Development", "Ongoing", "Completed"].map((cat) => (
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
                <Link to={`/projects/${item.id}`} className="view-btn">
                  View Details <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}