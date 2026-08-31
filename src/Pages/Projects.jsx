import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageBanner from "../Components/PageBanner";
import { ArrowUpRight, MapPin, Building2, ArrowRight } from "lucide-react";

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
    <div className="w-full bg-[#F9F8F5] text-dark font-main relative z-20 min-h-screen">
      <PageBanner
        bgImage={projectBannerImg}
        tag="OUR PROJECTS"
        title="Working Alongside Strong Builder Partners"
        subtitle="Active, pre-launch, and sold-out projects across Gorakhpur, Lucknow, and Pune."
      />

      <section className="w-full py-16 pb-28 md:pb-36">
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

      {/* EXACT HALF-OVERLAP GOLDEN CTA (HALF ON PAGE / HALF OVER FOOTER) */}
      <section className="w-full bg-transparent px-4 -mb-28 md:-mb-32 relative z-30 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="bg-gradient-to-r from-[#D4A946] via-[#BA8E2E] to-[#8C671A] border-2 border-white/60 rounded-2xl p-8 sm:p-10 md:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-w-6xl mx-auto text-dark">
            <span className="inline-block bg-[#111111]/90 text-white border border-white/20 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full mb-3">
              LET'S COLLABORATE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold text-dark mb-3 leading-tight">
              Ready to sell your project faster and grow your business?
            </h2>
            <p className="text-gray-900 text-sm md:text-base font-semibold max-w-2xl mx-auto mb-6 leading-relaxed">
              Let's talk about how ATA Infratech can support your next project with aggregation, capital, and advisory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-7 py-3.5 bg-dark hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow-xl hover:-translate-y-0.5 transition-all">
                Talk to Our Team <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-7 py-3.5 bg-white/30 hover:bg-dark hover:text-white text-dark border-1.5 border-dark text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center backdrop-blur-md transition-all">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}