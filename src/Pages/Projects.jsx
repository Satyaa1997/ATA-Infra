import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import { ArrowUpRight, MapPin, Building2 } from "lucide-react";

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
    if (["Gorakhpur", "Lucknow", "Pune"].includes(filter)) return p.loc === filter;
    if (["Active", "Pre-Launch", "Sold Out"].includes(filter)) return p.status === filter;
    return p.cat === filter;
  });

  return (
    <div className="w-full bg-[#F9F8F5] text-dark font-main min-h-screen">
      <PageBanner
        bgImage={projectBannerImg}
        tag="OUR PROJECTS"
        title="Working Alongside Strong Builder Partners"
        subtitle="Active, pre-launch, and sold-out projects across Gorakhpur, Lucknow, and Pune."
      />

      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-12">
            {["All", "Gorakhpur", "Lucknow", "Pune", "Active", "Pre-Launch", "Sold Out"].map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
                  filter === cat 
                    ? "bg-gold text-white border-gold shadow-md" 
                    : "bg-white text-dark border-black/10 hover:border-gold"
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm hover:border-gold hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="h-60 bg-cover bg-center p-4 relative" 
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded border shadow-sm ${
                      item.status === "Sold Out" 
                        ? "bg-[#111111] text-gold border-gold/40" 
                        : "bg-gold text-white border-gold"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-gold text-xs font-bold uppercase flex items-center gap-1 mb-1">
                      <MapPin size={12} /> {item.loc} • {item.cat}
                    </span>
                    <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-xs flex items-center gap-1.5 mb-5">
                      <Building2 size={13} className="text-gold" /> Builder: <strong className="text-dark font-semibold">{item.builder}</strong>
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link to={`/projects/${item.id}`} className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-dark hover:text-gold transition-colors">
                    View Project <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}