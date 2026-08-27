import { useState } from "react";
import PageBanner from "../Components/PageBanner";
import { 
  Calendar, Clock, ArrowUpRight, User, X, CheckCircle2 
} from "lucide-react";

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
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ["All", "Aggregate", "Invest", "Advise", "Market Trends"];

  const filteredArticles = comprehensiveArticles.filter((art) => {
    return activeCategory === "All" || art.category === activeCategory;
  });

  const featured = comprehensiveArticles.find(a => a.featured) || comprehensiveArticles[0];

  return (
    <div className="w-full bg-[#fffff] text-white font-main min-h-screen">
      <PageBanner
        bgImage={blogBannerImg}
        tag="ATA ADVISORY & INSIGHTS"
        title="Builder Growth & Real Estate Blog"
        subtitle="Practical strategies on sales aggregation, investor fundraising, and scaling real estate developments."
      />

      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          
          {/* Category Tabs */}
          <div className="flex gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap border transition-all ${
                  activeCategory === cat 
                    ? "bg-gold text-dark border-gold shadow-md" 
                    : "bg-[#111111] text-gray-400 border-gold/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Article */}
          {activeCategory === "All" && (
            <div 
              onClick={() => setSelectedArticle(featured)}
              className="bg-[#111111] border border-gold/25 rounded-xl overflow-hidden mb-14 cursor-pointer hover:border-gold hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
            >
              <div 
                className="lg:col-span-6 h-64 lg:h-auto bg-cover bg-center p-6 relative"
                style={{ backgroundImage: `url(${featured.img})` }}
              >
                <span className="bg-dark/90 text-gold border border-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                  {featured.tag}
                </span>
              </div>
              <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="text-gold font-bold uppercase">{featured.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-white mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-5 border-t border-white/10">
                  <div className="flex items-center gap-2.5">
                    <User size={16} className="text-gold" />
                    <div>
                      <strong className="block text-xs text-white">{featured.author}</strong>
                      <small className="text-[10px] text-gray-500">{featured.authorRole}</small>
                    </div>
                  </div>
                  <span className="text-gold text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    Read Article <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Grid Feed */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art) => (
              <article 
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="bg-[#111111] border border-gold/20 rounded-xl overflow-hidden flex flex-col justify-between cursor-pointer hover:border-gold hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div 
                    className="h-52 bg-cover bg-center p-4 flex justify-between items-start"
                    style={{ backgroundImage: `url(${art.img})` }}
                  >
                    <span className="bg-dark/85 border border-gold/40 text-gold text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                      {art.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-gray-400 mb-2">{art.date} • {art.readTime}</div>
                    <h3 className="text-lg font-serif font-bold text-white mb-3 line-clamp-2">{art.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{art.excerpt}</p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-white/5 flex justify-between items-center text-xs">
                  <span className="text-gray-400 flex items-center gap-1"><User size={13} className="text-gold" /> {art.author}</span>
                  <span className="text-gold font-bold uppercase flex items-center gap-1">Read <ArrowUpRight size={13} /></span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Reader Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[99999] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="bg-[#0D0D0D] border border-gold/40 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <span className="text-gold text-xs font-bold uppercase tracking-widest block mb-2">{selectedArticle.category}</span>
            <h1 className="text-2xl md:text-3xl font-serif font-extrabold text-white mb-4 leading-tight">{selectedArticle.title}</h1>
            
            <div 
              className="w-full h-64 bg-cover bg-center rounded-lg border border-gold/20 mb-6"
              style={{ backgroundImage: `url(${selectedArticle.img})` }}
            />

            <div className="bg-[#141414] border-l-4 border-gold p-5 rounded-r-lg mb-6">
              <h4 className="text-gold text-xs font-bold uppercase tracking-wider mb-3">Key Strategic Takeaways</h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-300">
                {selectedArticle.keyPoints?.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-gold flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{selectedArticle.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}