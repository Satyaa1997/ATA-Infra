import { useState, useEffect, useCallback } from "react";
import PageBanner from "../Components/PageBanner";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Building2, 
  Images, 
  Expand,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

import galleryBanner from "../assets/Projects.png";
import anant1 from "../assets/AnantCity.jpg";
import anant2 from "../assets/AnantCity2.jpg";
import anant3 from "../assets/Anant3.jpg";
import garden1 from "../assets/Gardenganj1.webp";
import garden2 from "../assets/gardenganj2.webp";
import garden3 from "../assets/Gardenganj1.webp";
import villa1 from "../assets/Vayuvilla1.png";
import villa2 from "../assets/vayu3.jpg";
import villa3 from "../assets/Vayuvilla1.png";
import vgreen1 from "../assets/Vayugreen.png";
import vgreen2 from "../assets/vayugreen2.jpg";
import vgreen3 from "../assets/vayugreen3.jpg";
import gvalley1 from "../assets/Greenvally.png";
import gvalley2 from "../assets/Greenvally2.jpg";
import gvalley3 from "../assets/greenvally3.jpg";
import vmantra1 from "../assets/Vayumantra.png";
import vmantra2 from "../assets/vayumantra2.jpg";
import vmantra3 from "../assets/Vayumantra.png";

const projectGalleries = [
  {
    id: "anant-city",
    title: "Anant City",
    builder: "Anantjit Infra Developers Pvt. Ltd.",
    loc: "Gorakhpur",
    status: "Active",
    coverImg: anant1,
    images: [
      { src: anant1, caption: "Master Layout & Main Entrance Gate" },
      { src: anant2, caption: "Internal Arterial Roads & Green Boundary" },
      { src: anant3, caption: "Plotted Sector Phase-1 Progress" }
    ]
  },
  {
    id: "garden-ganj",
    title: "Garden Ganj",
    builder: "Garden Square Ventures Pvt. Ltd.",
    loc: "Lucknow",
    status: "Active",
    coverImg: garden1,
    images: [
      { src: garden1, caption: "Commercial Boulevard & Retail Frontage" },
      { src: garden2, caption: "Plotted Business Enclave Layout" },
      { src: garden3, caption: "Parking Infrastructure & Walkway Corridors" }
    ]
  },
  {
    id: "vayu-villa",
    title: "Vayu Villa",
    builder: "Buildup Property Pvt. Ltd.",
    loc: "Pune",
    status: "Sold Out",
    coverImg: villa1,
    images: [
      { src: villa1, caption: "Luxury Villa Facade & Elevation" },
      { src: villa2, caption: "Private Clubhouse & Landscaped Avenues" },
      { src: villa3, caption: "Completed & Handed-Over Enclave Units" }
    ]
  },
  {
    id: "vayu-green",
    title: "Vayu Green",
    builder: "Buildup Property Pvt. Ltd.",
    loc: "Pune",
    status: "Active",
    coverImg: vgreen1,
    images: [
      { src: vgreen1, caption: "Township Masterplan View" },
      { src: vgreen2, caption: "Boulevard Plantation & Streetlights" },
      { src: vgreen3, caption: "Residential Zone Site Development" }
    ]
  },
  {
    id: "green-valley",
    title: "Green Valley",
    builder: "Buildup Property Pvt. Ltd.",
    loc: "Pune",
    status: "Active",
    coverImg: gvalley1,
    images: [
      { src: gvalley1, caption: "Eco-Township Central Park & Lakefront" },
      { src: gvalley2, caption: "Premium Sector Road Layouts" },
      { src: gvalley3, caption: "Community Amenities Zone" }
    ]
  },
  {
    id: "vayu-mantra",
    title: "Vayu Mantra",
    builder: "Buildup Property Pvt. Ltd.",
    loc: "Pune",
    status: "Pre-Launch",
    coverImg: vmantra1,
    images: [
      { src: vmantra1, caption: "Architectural 3D Concept Model" },
      { src: vmantra2, caption: "Gated Security Entrance Arch" },
      { src: vmantra3, caption: "Clubhouse & Leisure Deck Planning" }
    ]
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeGallery, setActiveGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (project, startIndex = 0) => {
    setActiveGallery(project);
    setCurrentImageIndex(startIndex);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setCurrentImageIndex(0);
  };

  const showNext = useCallback(() => {
    if (!activeGallery) return;
    setCurrentImageIndex((prev) => (prev + 1) % activeGallery.images.length);
  }, [activeGallery]);

  const showPrev = useCallback(() => {
    if (!activeGallery) return;
    setCurrentImageIndex((prev) => 
      (prev - 1 + activeGallery.images.length) % activeGallery.images.length
    );
  }, [activeGallery]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeGallery) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGallery, showNext, showPrev]);

  const filteredProjects = filter === "All"
    ? projectGalleries
    : projectGalleries.filter((p) => p.loc === filter);

  return (
    <div className="w-full bg-[#FAFAFA] text-dark font-main relative z-20 min-h-screen">
      <PageBanner
        bgImage={galleryBanner}
        tag="VISUAL PORTFOLIO"
        title="Project & Developer Showcase"
        subtitle="Explore dedicated photo albums for each of our builder partner projects across Gorakhpur, Lucknow, and Pune."
      />

      <section className="w-full py-16 pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {["All", "Gorakhpur", "Lucknow", "Pune"].map((hub) => (
              <button
                key={hub}
                className={`px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all border ${
                  filter === hub 
                    ? "bg-gold text-white border-gold shadow-md" 
                    : "bg-white text-dark border-black/10 hover:border-gold"
                }`}
                onClick={() => setFilter(hub)}
              >
                {hub === "All" ? "All Locations" : hub}
              </button>
            ))}
          </div>

          {/* Project Albums Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm hover:border-gold hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => openGallery(project, 0)}
              >
                <div className="relative h-64 overflow-hidden group">
                  <img src={project.coverImg} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                      <span className="bg-[#121212]/90 border border-gold text-gold text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded flex items-center gap-1.5">
                        <Images size={13} /> {project.images.length} Photos
                      </span>
                      <span className="bg-gold/20 border border-gold text-gold text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <span className="text-gold text-xs font-bold uppercase flex items-center gap-1 mb-1">
                        <MapPin size={12} /> {project.loc}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-gray-300 text-xs flex items-center gap-1.5">
                        <Building2 size={13} className="text-gold" /> {project.builder}
                      </p>
                    </div>

                    <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#121212]/80 border border-gold text-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Expand size={16} />
                    </div>
                  </div>
                </div>

                {/* Thumbnails Strip */}
                <div className="flex gap-2 p-3 bg-white border-t border-black/5">
                  {project.images.map((img, i) => (
                    <div 
                      key={i} 
                      className="h-12 flex-1 rounded bg-cover bg-center border border-black/10 hover:border-gold hover:scale-105 transition-all"
                      style={{ backgroundImage: `url(${img.src})` }}
                      onClick={(e) => {
                        e.stopPropagation();
                        openGallery(project, i);
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activeGallery && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[99999] flex items-center justify-center p-4"
          onClick={closeGallery}
        >
          <div 
            className="bg-white border border-gold/40 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center px-6 py-4 bg-[#F4F1EA] border-b border-black/10">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider">
                <span className="text-gold flex items-center gap-1"><MapPin size={13} /> {activeGallery.loc}</span>
                <span className="text-gray-400">•</span>
                <span className="text-dark font-extrabold">{activeGallery.title}</span>
                <span className="bg-white border border-black/10 px-2 py-0.5 rounded text-gray-700">
                  {currentImageIndex + 1} / {activeGallery.images.length}
                </span>
              </div>
              <button onClick={closeGallery} className="text-dark hover:text-gold transition-colors">
                <X size={22} />
              </button>
            </div>

            {/* Slider View */}
            <div className="relative bg-[#0D0D0D] flex items-center justify-between p-4 min-h-[380px] md:h-[55vh]">
              <button 
                onClick={showPrev}
                className="w-10 h-10 rounded-full bg-[#181818]/90 border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all z-10"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <img 
                  key={`${activeGallery.id}-${currentImageIndex}`}
                  src={activeGallery.images[currentImageIndex].src} 
                  alt={activeGallery.images[currentImageIndex].caption} 
                  className="max-h-[50vh] object-contain rounded"
                />
              </div>

              <button 
                onClick={showNext}
                className="w-10 h-10 rounded-full bg-[#181818]/90 border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all z-10"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Caption & Thumbs */}
            <div className="p-5 bg-[#F4F1EA] border-t border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h4 className="text-sm font-bold text-dark">{activeGallery.images[currentImageIndex].caption}</h4>
                <p className="text-xs text-gray-600 mt-0.5">Builder: <strong>{activeGallery.builder}</strong></p>
              </div>

              <div className="flex gap-2">
                {activeGallery.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`w-12 h-9 rounded bg-cover bg-center border-2 transition-all ${
                      idx === currentImageIndex ? "border-gold scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                    onClick={() => setCurrentImageIndex(idx)}
                    style={{ backgroundImage: `url(${img.src})` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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