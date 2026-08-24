import { useState } from "react";
import PageBanner from "../Components/PageBanner";
import { 
  Search, Calendar, Clock, ArrowUpRight, User, TrendingUp, 
  BookOpen, X, Bookmark, CheckCircle2 
} from "lucide-react";
import "./Blog.css";

// Asset Imports
import blogBannerImg from "../assets/Projects.png";
import insight1 from "../assets/insight1.jpg";
import insight2 from "../assets/insight2.jpg";
import insight3 from "../assets/insight3.jpg";
import project1 from "../assets/project1.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";

export const comprehensiveArticles = [
  {
    id: "arterial-corridor-valuation",
    title: "How Multi-Modal Transit Corridors Multiply Suburban Land Valuations",
    category: "Infrastructure & Corridors",
    tag: "High Yield",
    author: "ATA Strategy Desk",
    authorRole: "Principal Infrastructure Strategist",
    date: "August 20, 2026",
    readTime: "8 min read",
    featured: true,
    img: insight1,
    excerpt: "Analyzing the correlation between expressways, dedicated freight rings, and 4x land equity appreciation across regional growth corridors.",
    keyPoints: [
      "Transit infrastructure leads commercial absorption by 18-24 months.",
      "Outer ring connectors generate a 3.2x multiplier on strategic plotted parcel values.",
      "Clear zoning and title masterplans eliminate 90% of litigation bottlenecks."
    ],
    content: `Infrastructure development is the foundational engine of real estate value creation. Over the past decade, spatial growth patterns show that capital appreciation is no longer confined to saturated urban cores. 

    When regional expressways, outer ring connectors, and multi-modal logistics parks intersect, peripheral agricultural and semi-urban acreage transforms into institutional-grade assets. At ATA INFRATECH, our quantitative modeling maps high-velocity infrastructure investments 3 to 5 years before retail developers enter the market, securing prime entry multiples for our partners.`
  },
  {
    id: "due-diligence-masterclass",
    title: "The Institutional Due Diligence Masterclass: 7 Checks Before Land Acquisition",
    category: "Due Diligence & Legal",
    tag: "Essential Guide",
    author: "Advisory & Legal Board",
    authorRole: "Corporate Title Counsel",
    date: "August 12, 2026",
    readTime: "10 min read",
    featured: false,
    trending: true,
    img: insight2,
    excerpt: "A forensic checklist of 30-year title tracing, encumbrance verification, agricultural conversion norms, and environmental zoning compliance.",
    keyPoints: [
      "30-year contiguous chain deed verification.",
      "Highest and Best Use (HBU) commercial absorption modeling.",
      "Clear demarcations and state GIS spatial alignment."
    ],
    content: `Real estate investments can unlock immense capital or cause severe liquidity gridlocks depending entirely on the rigor of initial due diligence. A strategic real estate platform must look beyond basic title deeds into spatial GIS overlay alignments, municipal revenue records, and environmental protection buffers.`
  },
  {
    id: "tier-2-industrial-townships",
    title: "The Rise of Tier-2 Growth Capitals: Why Enterprise Capital is Moving Inward",
    category: "Market Intelligence",
    tag: "Growth Trends",
    author: "Market Research Desk",
    authorRole: "Lead Urban Economist",
    date: "July 29, 2026",
    readTime: "6 min read",
    featured: false,
    trending: true,
    img: insight3,
    excerpt: "Deconstructing demographic expansion, lower operating capital costs, and state development policies in regional growth hubs.",
    keyPoints: [
      "40% reduction in commercial operational overheads.",
      "Massive state incentives for organized warehousing and luxury plotted layouts.",
      "Rising disposable income powering premium residential living demand."
    ],
    content: `Enterprise agility and infrastructural decentralization have propelled tier-2 urban corridors to the forefront of investment conversations. Modern developers are no longer building generic structures; they are creating integrated townships that combine work, retail boulevards, and sustainable living communities.`
  },
  {
    id: "sustainable-architectural-mastery",
    title: "Sustainable Architecture as a Profit Driver: Green Building Economics",
    category: "Design & Masterplanning",
    tag: "Architecture",
    author: "Design & Engineering Group",
    authorRole: "Chief Masterplanner",
    date: "July 16, 2026",
    readTime: "5 min read",
    featured: false,
    trending: false,
    img: project3,
    excerpt: "How low-impact density, solar infrastructure, and greywater recycling systems increase commercial occupancy rates and rental yields by 14%.",
    keyPoints: [
      "Green certifications command a 7-12% rental premium.",
      "Operational utility lifecycle savings over a 20-year horizon.",
      "High appeal for Fortune 500 institutional tenants."
    ],
    content: `Modern institutional capital is bound by strict ESG mandates. Incorporating sustainable drainage, passive solar orientation, and indigenous landscaped corridors transforms an ordinary building into a trophy commercial asset that commands lasting tenant loyalty.`
  },
  {
    id: "joint-development-monetization",
    title: "Joint Development Agreements (JDA): How Landowners Retain Long-Term Equity",
    category: "Investment & Structuring",
    tag: "Wealth Structuring",
    author: "Capital Markets Desk",
    authorRole: "Head of Structured Finance",
    date: "June 25, 2026",
    readTime: "7 min read",
    featured: false,
    trending: true,
    img: project1,
    excerpt: "Understanding revenue-share vs area-share models, escrow protections, and capital gains tax optimizations for high-net-worth landowners.",
    keyPoints: [
      "Area-share vs revenue-share comparative analysis.",
      "Structuring project bank escrows for operational transparency.",
      "Mitigating execution delays through milestone-based penalty covenants."
    ],
    content: `Outright land sales often trigger immediate tax events while cutting landowners off from future value realisation. Joint Development Agreements bridge developmental capability with raw land ownership to create compounding wealth.`
  },
  {
    id: "plotted-developments-growth",
    title: "Why Gated Plotted Communities Are Outperforming High-Rise Apartments",
    category: "Asset Classes",
    tag: "Consumer Demand",
    author: "Consumer Intelligence Desk",
    authorRole: "Residential Strategist",
    date: "June 10, 2026",
    readTime: "5 min read",
    featured: false,
    trending: false,
    img: project4,
    excerpt: "An analysis of liquidity speed, land ownership security, and custom build trends making plotted enclaves the preferred vehicle for wealth creation.",
    keyPoints: [
      "Faster monetization velocity with minimal structural capital risk.",
      "Perpetual freehold land ownership sentiment.",
      "High flexibility for residential and boutique commercial conversions."
    ],
    content: `The demand for self-directed living spaces surrounded by institutional-grade infrastructure has made planned plotted developments one of the fastest-moving real estate asset classes in high-growth corridors.`
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [savedArticles, setSavedArticles] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);

  const categories = [
    "All", 
    "Infrastructure & Corridors", 
    "Due Diligence & Legal", 
    "Market Intelligence", 
    "Investment & Structuring", 
    "Design & Masterplanning", 
    "Asset Classes"
  ];

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setReadingProgress(progress);
  };

  const toggleBookmark = (id, e) => {
    e.stopPropagation();
    setSavedArticles(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredArticles = comprehensiveArticles.filter((art) => {
    const matchesCategory = activeCategory === "All" || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = comprehensiveArticles.find(a => a.featured) || comprehensiveArticles[0];
  const trendingList = comprehensiveArticles.filter(a => a.trending);

  return (
    <div className="infratech-blog-page">
      <PageBanner
        bgImage={blogBannerImg}
        tag="ATA INTELLIGENCE & RESEARCH DESK"
        title="Real Estate & Infrastructure Blog"
        subtitle="In-depth market intelligence, masterplanning economics, legal due diligence and strategic land investment insights."
      />

      <section className="section-padding">
        {/* 1. Utility Search & Metrics Bar */}
        <div className="infratech-utility-bar">
          <div className="infratech-search-container">
            <Search size={18} color="#C8A22C" />
            <input
              type="text"
              placeholder="Search blog reports, zoning studies, due diligence..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery("")}>
                <X size={16} />
              </button>
            )}
          </div>

          <div className="infratech-stats-digest">
            <div className="digest-stat">
              <strong>6+</strong> <span>Research Areas</span>
            </div>
            <div className="digest-divider" />
            <div className="digest-stat">
              <strong>15+ Yrs</strong> <span>Strategic Depth</span>
            </div>
          </div>
        </div>

        {/* 2. Editorial Category Pills */}
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

        {/* 3. Hero Feature & Trending Matrix */}
        {!searchQuery && activeCategory === "All" && (
          <div className="infratech-hero-matrix">
            {/* Primary Hero Post */}
            <div className="hero-primary-card" onClick={() => setSelectedArticle(featured)}>
              <div className="hero-primary-img" style={{ backgroundImage: `url(${featured.img})` }}>
                <span className="hero-tag-badge">{featured.tag}</span>
              </div>
              <div className="hero-primary-content">
                <div className="card-top-meta">
                  <span className="gold-category">{featured.category}</span>
                  <span className="meta-sep">•</span>
                  <span><Calendar size={13} /> {featured.date}</span>
                  <span className="meta-sep">•</span>
                  <span><Clock size={13} /> {featured.readTime}</span>
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

            {/* Trending Quick-List Sidebar */}
            <div className="hero-trending-sidebar">
              <div className="sidebar-header">
                <TrendingUp size={20} color="#C8A22C" />
                <h3>Trending Blog Articles</h3>
              </div>
              <div className="trending-items-list">
                {trendingList.map((item, idx) => (
                  <div 
                    key={item.id} 
                    className="trending-item" 
                    onClick={() => setSelectedArticle(item)}
                  >
                    <span className="trend-num">0{idx + 1}</span>
                    <div className="trend-info">
                      <span className="trend-cat">{item.category}</span>
                      <h4>{item.title}</h4>
                      <small>{item.readTime}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. Main Multi-Column Grid */}
        <div className="infratech-main-layout">
          {/* Articles Feed */}
          <div className="articles-feed">
            <div className="feed-header">
              <h3>{activeCategory === "All" ? "Latest Blog Posts" : `${activeCategory} Articles`}</h3>
              <span>Showing {filteredArticles.length} Articles</span>
            </div>

            <div className="articles-grid">
              {filteredArticles.map((art) => (
                <article 
                  key={art.id} 
                  className="article-card"
                  onClick={() => setSelectedArticle(art)}
                >
                  <div className="card-thumb" style={{ backgroundImage: `url(${art.img})` }}>
                    <span className="card-tag">{art.category}</span>
                    <button 
                      className={`bookmark-btn ${savedArticles.includes(art.id) ? "saved" : ""}`}
                      onClick={(e) => toggleBookmark(art.id, e)}
                    >
                      <Bookmark size={15} />
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="card-top-meta">
                      <span><Calendar size={12} /> {art.date}</span>
                      <span className="meta-sep">•</span>
                      <span><Clock size={12} /> {art.readTime}</span>
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

            {filteredArticles.length === 0 && (
              <div className="empty-search-box">
                <BookOpen size={44} color="#C8A22C" />
                <h3>No Blog Posts Found</h3>
                <p>No publications match your specific keywords or filter selection.</p>
                <button className="btn-gold" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <aside className="infratech-sidebar">
            <div className="sidebar-widget advisory-box">
              <span className="section-tag">ATA ADVISORY DESK</span>
              <h3>Have a Complex Land Asset or Development Vision?</h3>
              <p>Connect directly with our masterplanning, capital structuring and legal due diligence executives.</p>
              <a href="/contact" className="btn-gold sidebar-btn">
                Request Strategic Consultation
              </a>
            </div>

            <div className="sidebar-widget frameworks-box">
              <h4>ATA Investment Criteria</h4>
              <ul className="criteria-list">
                <li><CheckCircle2 size={16} color="#C8A22C" /> <span>Direct Highway & Arterial Growth Alignment</span></li>
                <li><CheckCircle2 size={16} color="#C8A22C" /> <span>100% Verified Title Due Diligence</span></li>
                <li><CheckCircle2 size={16} color="#C8A22C" /> <span>Sustainable & Multi-Sector Masterplans</span></li>
                <li><CheckCircle2 size={16} color="#C8A22C" /> <span>High Capital Protection Frameworks</span></li>
              </ul>
            </div>
          </aside>
        </div>

        {/* 5. Infratech Quarterly Journal Newsletter */}
        <div className="infratech-journal-newsletter">
          <div className="journal-text">
            <span className="section-tag">THE QUARTERLY DISPATCH</span>
            <h2>Subscribe to the ATA Real Estate Blog</h2>
            <p>Direct briefings on regional economic policy, zoning approvals, infrastructure investments and landmark opportunity blueprints.</p>
          </div>
          <form className="journal-form" onSubmit={(e) => { e.preventDefault(); alert("Welcome to ATA Real Estate Blog Subscription."); }}>
            <input type="email" placeholder="Enter corporate or institutional email" required />
            <button type="submit" className="btn-gold">Subscribe</button>
          </form>
        </div>
      </section>

      {/* 6. Reading Modal Drawer */}
      {selectedArticle && (
        <div className="infratech-reader-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="infratech-reader-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="reading-progress-bar" style={{ width: `${readingProgress}%` }} />

            <div className="reader-header">
              <span className="reader-cat">{selectedArticle.category}</span>
              <button className="reader-close" onClick={() => setSelectedArticle(null)}>
                <X size={24} />
              </button>
            </div>

            <div className="reader-scrollable-body" onScroll={handleScroll}>
              <h1 className="reader-title">{selectedArticle.title}</h1>
              
              <div className="reader-author-meta">
                <div className="author-chip">
                  <User size={18} color="#C8A22C" />
                  <div>
                    <strong>{selectedArticle.author}</strong>
                    <small>{selectedArticle.authorRole}</small>
                  </div>
                </div>
                <div className="meta-time-date">
                  <span><Calendar size={14} /> {selectedArticle.date}</span>
                  <span><Clock size={14} /> {selectedArticle.readTime}</span>
                </div>
              </div>

              <div className="reader-hero-media" style={{ backgroundImage: `url(${selectedArticle.img})` }} />

              <div className="reader-executive-summary">
                <h4>Executive Takeaways</h4>
                <ul>
                  {selectedArticle.keyPoints?.map((pt, i) => (
                    <li key={i}><CheckCircle2 size={16} color="#C8A22C" /> <span>{pt}</span></li>
                  ))}
                </ul>
              </div>

              <div className="reader-prose">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="reader-bottom-cta">
                <h3>Discuss This Opportunity with ATA INFRATECH</h3>
                <p>Leverage our development, investment and strategic advisory capabilities for your real estate assets.</p>
                <a href="/contact" className="btn-gold">Schedule Executive Discussion</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}