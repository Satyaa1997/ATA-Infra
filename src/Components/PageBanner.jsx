import "./PageBanner.css";

export default function PageBanner({ bgImage, tag, title, subtitle }) {
  return (
    <section className="page-banner">
      {/* 100% Clear Background Image (No Overlay) */}
      <div 
        className="page-banner-bg" 
        style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }} 
      />

      {/* Banner Text Content */}
      {(tag || title || subtitle) && (
        <div className="page-banner-content">
          {tag && <span className="banner-tag">{tag}</span>}
          {title && <h1 className="banner-title">{title}</h1>}
          {subtitle && <p className="banner-subtitle">{subtitle}</p>}
        </div>
      )}
    </section>
  );
}