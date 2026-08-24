import { useState } from "react";
import PageBanner from "../Components/PageBanner";
import { X, ZoomIn } from "lucide-react";
import "./Gallery.css";

// Asset Imports
import galleryBanner from "../assets/Projects.png";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import val1 from "../assets/val-integrity1.jpg";
import val2 from "../assets/val-integrity2.jpg";
import val3 from "../assets/val-integrity3.jpg";
import val4 from "../assets/val-integrity4.jpg";

const galleryItems = [
  { id: 1, title: "Grand Horizon Facade", cat: "Architecture", loc: "Lucknow", img: project1 },
  { id: 2, title: "Apex Commercial Hub", cat: "Commercial", loc: "Varanasi", img: project2 },
  { id: 3, title: "Sovereign Green Landscape", cat: "Developments", loc: "Noida", img: project3 },
  { id: 4, title: "Ayodhya Strategic Parcel", cat: "Land Assets", loc: "Ayodhya", img: project4 },
  { id: 5, title: "Sustainable Urban Design", cat: "Architecture", loc: "Lucknow", img: val1 },
  { id: 6, title: "Corporate Business Center", cat: "Commercial", loc: "Noida", img: val2 },
  { id: 7, title: "Plotted Development Masterplan", cat: "Land Assets", loc: "Ayodhya", img: val3 },
  { id: 8, title: "Eco-Township Boulevard", cat: "Developments", loc: "Varanasi", img: val4 }
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.cat === filter);

  return (
    <div className="gallery-page">
      <PageBanner
        bgImage={galleryBanner}
        tag="VISUAL PORTFOLIO"
        title="Architecture & Development Gallery."
        subtitle="A visual showcase of our master developments, strategic land assets and architectural landmarks."
      />

      <section className="section-padding">
        {/* Category Filters */}
        <div className="gallery-filter-bar">
          {["All", "Architecture", "Commercial", "Developments", "Land Assets"].map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-card"
              onClick={() => setSelectedImg(item)}
            >
              <img src={item.img} alt={item.title} className="gallery-img" />
              <div className="gallery-overlay">
                <div className="gallery-info">
                  <span className="gallery-cat">{item.cat} • {item.loc}</span>
                  <h3>{item.title}</h3>
                </div>
                <div className="gallery-zoom-icon">
                  <ZoomIn size={22} color="#C8A22C" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="gallery-lightbox" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImg(null)}>
              <X size={26} />
            </button>
            <img src={selectedImg.img} alt={selectedImg.title} />
            <div className="lightbox-caption">
              <span>{selectedImg.cat} • {selectedImg.loc}</span>
              <h3>{selectedImg.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}