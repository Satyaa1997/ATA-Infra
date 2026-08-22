import "./PageBanner.css";

export default function PageBanner({ bgImage }) {
  return (
    <section className="page-banner">
      <div 
        className="page-banner-bg" 
        style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }} 
      />
      <div className="page-banner-overlay" />
    </section>
  );
}