import { useState, useEffect, useCallback } from "react";
import PageBanner from "../Components/PageBanner";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Building2, 
  Images, 
  Expand 
} from "lucide-react";
import "./Gallery.css";

import galleryBanner from "../assets/Projects.png";

// Project 1: Anant City
import anant1 from "../assets/AnantCity.jpg";
import anant2 from "../assets/AnantCity2.jpg"; // Placeholder
import anant3 from "../assets/Anant3.jpg"; // Placeholder

// Project 2: Garden Ganj
import garden1 from "../assets/Gardenganj1.webp";
import garden2 from "../assets/gardenganj2.webp"; // Placeholder
import garden3 from "../assets/Gardenganj1.webp"; // Placeholder

// Project 3: Vayu Villa
import villa1 from "../assets/Vayuvilla1.png";
import villa2 from "../assets/vayu3.jpg"; // Placeholder
import villa3 from "../assets/Vayuvilla1.png"; // Placeholder

// Project 4: Vayu Green
import vgreen1 from "../assets/Vayugreen.png";
import vgreen2 from "../assets/vayugreen2.jpg"; // Placeholder
import vgreen3 from "../assets/vayugreen3.jpg"; // Placeholder

// Project 5: Green Valley
import gvalley1 from "../assets/Greenvally.png";
import gvalley2 from "../assets/Greenvally2.jpg"; // Placeholder
import gvalley3 from "../assets/greenvally3.jpg"; // Placeholder

// Project 6: Vayu Mantra
import vmantra1 from "../assets/Vayumantra.png";
import vmantra2 from "../assets/vayumantra2.jpg"; // Placeholder
import vmantra3 from "../assets/Vayumantra.png"; // Placeholder

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

  // Keyboard navigation
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
    <div className="gallery-page">
      <PageBanner
        bgImage={galleryBanner}
        tag="VISUAL PORTFOLIO"
        title="Project & Developer Showcase"
        subtitle="Explore dedicated photo albums for each of our builder partner projects across Gorakhpur, Lucknow, and Pune."
      />

      <section className="section-padding">
        {/* City Filter Pills */}
        <div className="gallery-filter-bar">
          {["All", "Gorakhpur", "Lucknow", "Pune"].map((hub) => (
            <button
              key={hub}
              className={`gallery-filter-btn ${filter === hub ? "active" : ""}`}
              onClick={() => setFilter(hub)}
            >
              {hub === "All" ? "All Locations" : hub}
            </button>
          ))}
        </div>

        {/* Project Gallery Cards */}
        <div className="gallery-projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-album-card"
              onClick={() => openGallery(project, 0)}
            >
              <div className="album-cover-wrapper">
                <img src={project.coverImg} alt={project.title} className="album-img" />
                <div className="album-overlay">
                  <div className="album-badge-row">
                    <span className="album-count-badge">
                      <Images size={14} /> {project.images.length} Photos
                    </span>
                    <span className={`album-status ${project.status.toLowerCase().replace(" ", "-")}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="album-bottom-info">
                    <span className="album-loc">
                      <MapPin size={12} /> {project.loc}
                    </span>
                    <h3>{project.title}</h3>
                    <p className="album-builder">
                      <Building2 size={13} /> {project.builder}
                    </p>
                  </div>

                  <div className="album-expand-btn">
                    <Expand size={18} />
                  </div>
                </div>
              </div>

              {/* Mini Thumbnails Strip */}
              <div className="album-thumbnails-strip">
                {project.images.map((img, i) => (
                  <div 
                    key={i} 
                    className="mini-thumb" 
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
      </section>

      {/* Advanced Lightbox Modal with Next / Prev */}
      {activeGallery && (
        <div className="lightbox-backdrop" onClick={closeGallery}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            {/* Top Bar */}
            <div className="lightbox-topbar">
              <div className="lightbox-meta">
                <span className="lightbox-city"><MapPin size={13} /> {activeGallery.loc}</span>
                <span className="lightbox-sep">•</span>
                <span className="lightbox-proj">{activeGallery.title}</span>
                <span className="lightbox-counter">
                  {currentImageIndex + 1} / {activeGallery.images.length}
                </span>
              </div>
              <button className="lightbox-close-btn" onClick={closeGallery} aria-label="Close modal">
                <X size={22} />
              </button>
            </div>

            {/* Stage / Slider */}
            <div className="lightbox-stage">
              <button className="lightbox-nav-btn prev" onClick={showPrev} aria-label="Previous image">
                <ChevronLeft size={28} />
              </button>

              <div className="lightbox-image-container">
                <img 
                  key={`${activeGallery.id}-${currentImageIndex}`}
                  src={activeGallery.images[currentImageIndex].src} 
                  alt={activeGallery.images[currentImageIndex].caption} 
                  className="lightbox-active-img"
                />
              </div>

              <button className="lightbox-nav-btn next" onClick={showNext} aria-label="Next image">
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Caption & Thumbnail Selector */}
            <div className="lightbox-footer">
              <div className="lightbox-caption">
                <h4>{activeGallery.images[currentImageIndex].caption}</h4>
                <p>Builder: <strong>{activeGallery.builder}</strong></p>
              </div>

              <div className="lightbox-thumbs">
                {activeGallery.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumb-btn ${idx === currentImageIndex ? "active" : ""}`}
                    onClick={() => setCurrentImageIndex(idx)}
                    style={{ backgroundImage: `url(${img.src})` }}
                    aria-label={`View photo ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}