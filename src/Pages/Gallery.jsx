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
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import val1 from "../assets/val-integrity1.jpg";
import val2 from "../assets/val-integrity2.jpg";
import insight1 from "../assets/insight1.jpg";
import insight2 from "../assets/insight2.jpg";

const projectGalleries = [
  {
    id: "anant-city",
    title: "Anant City",
    builder: "Anantjit Infra Developers Pvt. Ltd.",
    loc: "Gorakhpur",
    status: "Active",
    coverImg: project1,
    images: [
      { src: project1, caption: "Master Layout & Main Entrance Gate" },
      { src: val1, caption: "Internal Arterial Roads & Green Boundary" },
      { src: insight1, caption: "Plotted Sector Phase-1 Progress" }
    ]
  },
  {
    id: "garden-ganj",
    title: "Garden Ganj",
    builder: "Garden Square Ventures Pvt. Ltd.",
    loc: "Lucknow",
    status: "Active",
    coverImg: project2,
    images: [
      { src: project2, caption: "Commercial Boulevard & Retail Frontage" },
      { src: project4, caption: "Plotted Business Enclave Layout" },
      { src: val2, caption: "Parking Infrastructure & Walkway Corridors" }
    ]
  },
  {
    id: "vayu-villa",
    title: "Vayu Villa",
    builder: "Buildup Property Pvt. Ltd.",
    loc: "Pune",
    status: "Sold Out",
    coverImg: project3,
    images: [
      { src: project3, caption: "Luxury Villa Facade & Elevation" },
      { src: insight2, caption: "Private Clubhouse & Landscaped Avenues" },
      { src: val1, caption: "Completed & Handed-Over Enclave Units" }
    ]
  },
  {
    id: "vayu-green",
    title: "Vayu Green",
    builder: "Buildup Property Pvt. Ltd.",
    loc: "Pune",
    status: "Active",
    coverImg: project4,
    images: [
      { src: project4, caption: "Township Masterplan View" },
      { src: project1, caption: "Boulevard Plantation & Streetlights" },
      { src: insight1, caption: "Residential Zone Site Development" }
    ]
  },
  {
    id: "green-valley",
    title: "Green Valley",
    builder: "Buildup Property Pvt. Ltd.",
    loc: "Pune",
    status: "Active",
    coverImg: val1,
    images: [
      { src: val1, caption: "Eco-Township Central Park & Lakefront" },
      { src: project3, caption: "Premium Sector Road Layouts" },
      { src: val2, caption: "Community Amenities Zone" }
    ]
  },
  {
    id: "vayu-mantra",
    title: "Vayu Mantra",
    builder: "Buildup Property Pvt. Ltd.",
    loc: "Pune",
    status: "Pre-Launch",
    coverImg: val2,
    images: [
      { src: val2, caption: "Architectural 3D Concept Model" },
      { src: project2, caption: "Gated Security Entrance Arch" },
      { src: insight2, caption: "Clubhouse & Leisure Deck Planning" }
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