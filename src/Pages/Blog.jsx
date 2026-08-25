import { useState } from "react";
import PageBanner from "../Components/PageBanner";
import { 
   Calendar, Clock, ArrowUpRight, User,  
  X,  CheckCircle2 
} from "lucide-react";
import "./Blog.css";

import blogBannerImg from "../assets/Projects.png";
import insight1 from "../assets/insight1.jpg";
import insight2 from "../assets/insight2.jpg";
import insight3 from "../assets/insight3.jpg";
import project1 from "../assets/project1.jpg";


export const comprehensiveArticles = [
  {
    id: "sales-engine-for-builders",
    title: "How an Organized Channel Partner Network Cuts Project Inventory Velocity by 50%",
    category: "Aggregate",
    tag: "Sales Execution",
    author: "ATA Strategy Team",
    authorRole: "Sales Growth Director",
    date: "August 2026",
    readTime: "6 min read",
    featured: true,
    img: insight1,
    excerpt: "Why relying solely on an in-house sales desk creates bottlenecks and how a structured channel partner pipeline sells out plots and residential units faster.",
    keyPoints: [
      "Mobilizing active broker networks across regional micro-markets.",
      "Trackable CRM pipelines prevent lead leakage and double bookings.",
      "Targeted marketing events generate high-intent booking conversions."
    ],
    content: `Building a project is only half the battle. Selling it at scale requires a dedicated aggregation engine. When developers empower channel partners with clear blueprints, attractive commission disbursements, and professional collaterals, inventory liquidation speed doubles.`
  },
  {
    id: "connecting-builders-with-capital",
    title: "Securing Private Capital for Real Estate Projects Without Construction Delays",
    category: "Invest",
    tag: "Fundraising",
    author: "ATA Capital Desk",
    authorRole: "Investment Partner",
    date: "August 2026",
    readTime: "7 min read",
    featured: false,
    trending: true,
    img: insight2,
    excerpt: "A practical guide for builders on presenting projects to investors, structuring funding rounds, and protecting cashflow at critical milestones.",
    keyPoints: [
      "Structuring clear project dossiers for prospective investors.",
      "Milestone-backed capital disbursement frameworks.",
      "Bridging the funding gap between pre-launch and peak construction."
    ],
    content: `Investor capital flows to clarity and speed. By organizing project feasibility data, title verifications, and projected sales velocity into structured dossiers, builders unlock steady funding without equity gridlocks.`
  },
  {
    id: "scaling-real-estate-business",
    title: "Scaling from One Project to a Recognizable Real Estate Brand",
    category: "Advise",
    tag: "Business Advisory",
    author: "ATA Advisory Board",
    authorRole: "Principal Consultant",
    date: "July 2026",
    readTime: "5 min read",
    featured: false,
    trending: true,
    img: insight3,
    excerpt: "Why real estate builders need structured team training, operational workflows, and ready brand identity kits to grow beyond one-off developments.",
    keyPoints: [
      "Setting up dedicated on-ground sales and operational hierarchy.",
      "Transforming project marketing into enduring corporate brand equity.",
      "Standardizing customer handover and site visit management."
    ],
    content: `Real estate builders who transition into large-scale developers focus on systems, not just cement. Structured team coaching, unified branding materials, and clear operational guidelines turn a local construction project into an inter-city real estate brand.`
  },
  {
    id: "tier-2-builder-opportunities",
    title: "Why Gorakhpur, Lucknow & Pune Are the Hottest Hubs for Plotted Townships",
    category: "Market Trends",
    tag: "Market Analysis",
    author: "ATA Research Desk",
    authorRole: "Regional Market Analyst",
    date: "July 2026",
    readTime: "5 min read",
    featured: false,
    trending: false,
    img: project1,
    excerpt: "Analyzing buyer demand, infrastructure corridors, and absorption rates across Uttar Pradesh and Maharashtra's fastest-growing pockets.",
    keyPoints: [
      "High preference for plotted gated communities over high-rise apartments.",
      "Infrastructure connectivity driving outer-ring capital appreciation.",
      "Rapid absorption of well-branded builder projects in Tier-2 hubs."
    ],
    content: `Emerging economic corridors in Gorakhpur and Lucknow combined with high-velocity suburban nodes in Pune are witnessing unprecedented demand for organized residential layouts and commercial hubs.`
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ["All", "Aggregate", "Invest", "Advise", "Market Trends"];

  const filteredArticles = comprehensiveArticles.filter((art) => {
    const matchesCategory = activeCategory === "All" || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = comprehensiveArticles.find(a => a.featured) || comprehensiveArticles[0];

  return (
    <div className="infratech-blog-page">
      <PageBanner
        bgImage={blogBannerImg}
        tag="ATA ADVISORY & INSIGHTS"
        title="Builder Growth & Real Estate Blog"
        subtitle="Practical strategies on sales aggregation, investor fundraising, and scaling real estate developments."
      />

      <section className="section-padding">
        {/* Category Pills */}
        <div className="infratech-category-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`infratech-category-pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Hero Article */}
        {!searchQuery && activeCategory === "All" && (
          <div className="hero-primary-card" style={{ marginBottom: "50px" }} onClick={() => setSelectedArticle(featured)}>
            <div className="hero-primary-img" style={{ backgroundImage: `url(${featured.img})` }}>
              <span className="hero-tag-badge">{featured.tag}</span>
            </div>
            <div className="hero-primary-content">
              <div className="card-top-meta">
                <span className="gold-category">{featured.category}</span>
                <span className="meta-sep">&bull;</span>
                <span><Calendar size={13} style={{ display: 'inline', verticalAlign: 'middle' }} /> {featured.date}</span>
                <span className="meta-sep">&bull;</span>
                <span><Clock size={13} style={{ display: 'inline', verticalAlign: 'middle' }} /> {featured.readTime}</span>
              </div>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <div className="card-footer-action">
                <div className="author-badge">
                  <User size={14} color="#C8A22C" />
                  <div>
                    <strong>{featured.author}</strong>
                    <small>{featured.authorRole}</small>
                  </div>
                </div>
                <button className="gold-action-btn">
                  Read Article <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Articles Feed */}
        <div className="articles-grid">
          {filteredArticles.map((art) => (
            <article 
              key={art.id} 
              className="article-card"
              onClick={() => setSelectedArticle(art)}
            >
              <div className="card-thumb" style={{ backgroundImage: `url(${art.img})` }}>
                <span className="card-tag">{art.category}</span>
              </div>
              <div className="card-body">
                <div className="card-top-meta">
                  <span>{art.date} &bull; {art.readTime}</span>
                </div>
                <h3>{art.title}</h3>
                <p>{art.excerpt}</p>
                <div className="card-footer">
                  <span className="author-text"><User size={13} color="#C8A22C" /> {art.author}</span>
                  <span className="read-action">
                    Read More <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="infratech-reader-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="infratech-reader-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="reader-header">
              <span className="reader-cat">{selectedArticle.category}</span>
              <button className="reader-close" onClick={() => setSelectedArticle(null)}>
                <X size={24} />
              </button>
            </div>
            <div className="reader-scrollable-body">
              <h1 className="reader-title">{selectedArticle.title}</h1>
              <div className="reader-hero-media" style={{ backgroundImage: `url(${selectedArticle.img})` }} />
              <div className="reader-executive-summary">
                <h4>Key Strategic Takeaways</h4>
                <ul>
                  {selectedArticle.keyPoints?.map((pt, i) => (
                    <li key={i}><CheckCircle2 size={16} color="#C8A22C" /> <span>{pt}</span></li>
                  ))}
                </ul>
              </div>
              <div className="reader-prose">
                <p>{selectedArticle.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}