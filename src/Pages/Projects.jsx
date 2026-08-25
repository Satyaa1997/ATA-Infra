import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import { ArrowUpRight, MapPin, Building2 } from "lucide-react";
import "./Projects.css";

import projectBannerImg from "../assets/Projects.png";
import project1 from "../assets/AnantCity.jpg";
import project2 from "../assets/Gardenganj1.webp";
import project3 from "../assets/Vayuvilla1.png";
import project4 from "../assets/Vayugreen.png";
import insight1 from "../assets/Greenvally.png";
import insight2 from "../assets/Vayumantra.png";

export const allProjects = [
  { 
    id: "anant-city", 
    title: "Anant City", 
    builder: "Anantjit Infra Developers Pvt. Ltd.",
    cat: "Plotted Development", 
    loc: "Gorakhpur", 
    status: "Active", 
    img: project1 
  },
  { 
    id: "garden-ganj", 
    title: "Garden Ganj", 
    builder: "Garden Square Ventures Pvt. Ltd.",
    cat: "Commercial & Plotted", 
    loc: "Lucknow", 
    status: "Active", 
    img: project2 
  },
  { 
    id: "vayu-villa", 
    title: "Vayu Villa", 
    builder: "Buildup Property Pvt. Ltd.",
    cat: "Luxury Villas", 
    loc: "Pune", 
    status: "Sold Out", 
    img: project3 
  },
  { 
    id: "vayu-green", 
    title: "Vayu Green", 
    builder: "Buildup Property Pvt. Ltd.",
    cat: "Residential Township", 
    loc: "Pune", 
    status: "Active", 
    img: project4 
  },
  { 
    id: "green-valley", 
    title: "Green Valley", 
    builder: "Buildup Property Pvt. Ltd.",
    cat: "Plotted & Residential", 
    loc: "Pune", 
    status: "Active", 
    img: insight1 
  },
  { 
    id: "vayu-mantra", 
    title: "Vayu Mantra", 
    builder: "Buildup Property Pvt. Ltd.",
    cat: "Gated Enclave", 
    loc: "Pune", 
    status: "Pre-Launch", 
    img: insight2 
  }
];

export default function Projects() {
  const [searchParams] = useSearchParams();

  const filterParam = searchParams.get("filter");

  const [filter, setFilter] = useState(filterParam || "All");

  const filtered = allProjects.filter((p) => {
    if (filter === "All") return true;

    if (["Gorakhpur", "Lucknow", "Pune"].includes(filter)) {
      return p.loc === filter;
    }

    if (["Active", "Pre-Launch", "Sold Out"].includes(filter)) {
      return p.status === filter;
    }

    return p.cat === filter;
  });

  return (
    <div className="projects-page">
      <PageBanner
        bgImage={projectBannerImg}
        tag="OUR PROJECTS"
        title="Working Alongside Strong Builder Partners"
        subtitle="Active, pre-launch, and sold-out projects across Gorakhpur, Lucknow, and Pune."
      />

      <section className="section-padding">
        <div className="filter-bar">
          {["All", "Gorakhpur", "Lucknow", "Pune", "Active", "Pre-Launch", "Sold Out"].map((cat) => (
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
                <span className={`status-badge ${item.status.toLowerCase().replace(" ", "-")}`}>
                  {item.status}
                </span>
              </div>
              <div className="project-details">
                <span className="proj-cat"><MapPin size={12} style={{ display: 'inline', marginRight: 4 }} />{item.loc} &bull; {item.cat}</span>
                <h3>{item.title}</h3>
                <p className="proj-builder"><Building2 size={14} /> Builder: <strong>{item.builder}</strong></p>
                <Link to={`/projects/${item.id}`} className="view-btn">
                  View Project <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}