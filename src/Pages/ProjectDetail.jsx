import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Building2,  
  ArrowRight,   
  Sparkles,
  Images,
  Compass,
  ShieldCheck,
  Maximize2,
  Milestone
} from "lucide-react";

import anantImg from "../assets/AnantCity.jpg";
import gardenImg from "../assets/Gardenganj1.webp";
import vayuVillaImg from "../assets/Vayuvilla1.png";
import vayuGreenImg from "../assets/Vayugreen.png";
import greenValleyImg from "../assets/Greenvally.png";
import vayuMantraImg from "../assets/Vayumantra.png";

import extra1 from "../assets/insight1.jpg";
import extra2 from "../assets/insight2.jpg";
import extra3 from "../assets/insight3.jpg";

export const projectsDatabase = {
  "anant-city": {
    id: "anant-city",
    title: "Anant City",
    builder: "Anantjit Infra Developers Pvt. Ltd.",
    category: "Plotted Development & Township",
    status: "Active",
    loc: "Gorakhpur, Uttar Pradesh",
    heroImg: anantImg,
    tagline: "High-Velocity Masterplanned Plotted Layout",
    overviewParagraphs: [
      "Anant City is an expansive, masterplanned gated plotted township strategically positioned along Gorakhpur’s fastest-growing infrastructure corridor. Engineered for seamless residential living and high-yield capital growth, the township features wide arterial roads, underground drainage, and expansive landscaped central green zones.",
      "ATA Infratech serves as the exclusive project aggregation and sales engine for Anant City — structuring the master blueprint, managing channel partner onboarding across eastern UP, launching on-ground investor conclaves, and executing high-conversion customer site visit drives."
    ],
    quickSpecs: [
      { label: "Plot Dimensions", value: "1,000 to 3,200 Sq. Ft.", icon: Maximize2 },
      { label: "Internal Roads", value: "30 Ft & 40 Ft Blacktop", icon: Milestone },
      { label: "Land Title", value: "100% Freehold & Verified", icon: ShieldCheck },
      { label: "Master Layout", value: "Gated with Grand Arch Gate", icon: Compass }
    ],
    scopeTitle: "How ATA Infratech Powers Anant City",
    scopeDesc: "We deployed an end-to-end sales framework connecting local channel networks with regional buyers, backed by transparent pricing blueprints and structured milestone disbursements.",
    gallery: [anantImg, extra1, extra3],
    highlights: [
      "Prime location with direct arterial connectivity to Gorakhpur city center, medical hub & highway bypass.",
      "100% clear-title, registry-ready plotted inventory with immediate demarcation.",
      "Gated community security with 24/7 CCTV surveillance and solar-powered street illumination.",
      "Integrated channel partner commission network and live inventory tracking CRM.",
      "Dedicated park zones, clubhouse arena, and commercial shopping convenience enclave."
    ],
    metrics: {
      type: "Plotted Township",
      builder: "Anantjit Infra Developers Pvt. Ltd.",
      location: "Gorakhpur, UP",
      role: "Sales Execution & Aggregation",
      timeline: "Active Booking Phase"
    }
  },

  "garden-ganj": {
    id: "garden-ganj",
    title: "Garden Ganj",
    builder: "Garden Square Ventures Pvt. Ltd.",
    category: "Commercial & Plotted Enclave",
    status: "Active",
    loc: "Lucknow, Uttar Pradesh",
    heroImg: gardenImg,
    tagline: "Prime Commercial & Plotted Business Hub",
    overviewParagraphs: [
      "Located in the heart of Lucknow’s expanding commercial development belt, Garden Ganj combines prime retail boulevards with structured plotted business layouts. The project is tailored to capture high-density retail footfall and logistics demand.",
      "ATA Infratech orchestrates investor connections and commercial sales acceleration to secure fast deal velocity and corporate brand positioning across Uttar Pradesh and NCR investor circles."
    ],
    quickSpecs: [
      { label: "Unit Types", value: "Commercial Plots & Retail Showrooms", icon: Maximize2 },
      { label: "Frontage", value: "Direct Highway Arterial Road", icon: Milestone },
      { label: "Clearance", value: "Complete Commercial Approvals", icon: ShieldCheck },
      { label: "Parking", value: "Dedicated Multi-Bay Visitor Parking", icon: Compass }
    ],
    scopeTitle: "ATA Infratech Commercial Strategy",
    scopeDesc: "Structured funding dialogues and commercial sales positioning to attract business enterprises, retail investors, and corporate buyers.",
    gallery: [gardenImg, extra2, extra1],
    highlights: [
      "High-footfall commercial boulevard with dedicated parking and wide loading bays.",
      "Direct investor matchmaking and structured milestone-based funding rounds.",
      "Organized channel partner drives across Lucknow, Kanpur, and NCR investor pockets.",
      "Ready corporate marketing kits, 3D walkthroughs, and presentation decks."
    ],
    metrics: {
      type: "Commercial & Plotted",
      builder: "Garden Square Ventures Pvt. Ltd.",
      location: "Lucknow, UP",
      role: "Capital Linkages & Sales Execution",
      timeline: "Active Inventory Sales"
    }
  },

  "vayu-villa": {
    id: "vayu-villa",
    title: "Vayu Villa",
    builder: "Buildup Property Pvt. Ltd.",
    category: "Luxury Villas & Gated Enclave",
    status: "Sold Out",
    loc: "Pune, Maharashtra",
    heroImg: vayuVillaImg,
    tagline: "100% Sold Out Luxury Gated Community",
    overviewParagraphs: [
      "Vayu Villa represents a flagship milestone in Pune’s high-end residential segment. Crafted for discerning homeowners, the gated enclave features bespoke luxury duplex villas surrounded by landscaped courtyards.",
      "Taken from initial blueprints to 100% sold-out delivery through ATA Infratech’s disciplined sales pipeline, pre-launch positioning, and targeted HNI investor acquisition drives."
    ],
    quickSpecs: [
      { label: "Typology", value: "3 & 4 BHK Luxury Duplex Villas", icon: Maximize2 },
      { label: "Status", value: "100% Handed Over & Sold Out", icon: Milestone },
      { label: "Amenities", value: "Private Clubhouse & Gym", icon: ShieldCheck },
      { label: "Community", value: "Fully Gated & Landscaped", icon: Compass }
    ],
    scopeTitle: "The Sold-Out Execution Journey",
    scopeDesc: "A masterclass in rapid liquidation: pre-launch positioning, targeted HNI buyer drives, and seamless transaction handovers.",
    gallery: [vayuVillaImg, extra3, extra2],
    highlights: [
      "Exquisite gated entrance, private clubhouse, and premium villa architectures.",
      "100% inventory sold-out ahead of projected construction timelines.",
      "Zero-friction customer booking to handover lifecycle management.",
      "Established brand equity for Buildup Property across Pune’s developer ecosystem."
    ],
    metrics: {
      type: "Luxury Villas",
      builder: "Buildup Property Pvt. Ltd.",
      location: "Pune, Maharashtra",
      role: "Turnkey Sales Execution",
      timeline: "Delivered & Sold Out"
    }
  },

  "vayu-green": {
    id: "vayu-green",
    title: "Vayu Green",
    builder: "Buildup Property Pvt. Ltd.",
    category: "Residential Township",
    status: "Active",
    loc: "Pune, Maharashtra",
    heroImg: vayuGreenImg,
    tagline: "Eco-Centric Modern Living Township",
    overviewParagraphs: [
      "Following the sold-out success of Vayu Villa, Vayu Green expands the footprint with sustainable residential layouts and community amenities.",
      "ATA Infratech drives ongoing sales aggregation and channel partner outreach with phased pricing models."
    ],
    quickSpecs: [
      { label: "Layout Area", value: "Multi-Acre Township Parcel", icon: Maximize2 },
      { label: "Roads", value: "30 & 40 Ft Paved Avenues", icon: Milestone },
      { label: "Greenery", value: "Botanical Parks & Jogging Track", icon: ShieldCheck },
      { label: "Approvals", value: "Complete Town Planning Sanctions", icon: Compass }
    ],
    scopeTitle: "Scaling Township Momentum",
    scopeDesc: "Executing multi-tier broker campaigns and phased pricing structures to manage sustained booking velocity.",
    gallery: [vayuGreenImg, extra1, vayuVillaImg],
    highlights: [
      "Lush landscaped open spaces integrated with modern residential plots.",
      "Active on-ground field team managing site visits and broker coordination.",
      "Transparent customer CRM tracking and structured payment schedules.",
      "Continuous investor and developer growth consulting."
    ],
    metrics: {
      type: "Residential Township",
      builder: "Buildup Property Pvt. Ltd.",
      location: "Pune, Maharashtra",
      role: "Sales Engine & Advisory",
      timeline: "Active Booking Phase"
    }
  },

  "green-valley": {
    id: "green-valley",
    title: "Green Valley",
    builder: "Buildup Property Pvt. Ltd.",
    category: "Plotted & Residential Enclave",
    status: "Active",
    loc: "Pune, Maharashtra",
    heroImg: greenValleyImg,
    tagline: "Scenic Suburban Plotted Development",
    overviewParagraphs: [
      "Green Valley offers serene suburban residential plots designed for bespoke home construction and long-term capital appreciation.",
      "ATA Infratech provides strategic blueprint advisory, broker alignments, and investor backing."
    ],
    quickSpecs: [
      { label: "Environment", value: "Eco-Scenic Valley Backdrop", icon: Maximize2 },
      { label: "Plot Sizes", value: "1,200 to 4,000 Sq. Ft.", icon: Milestone },
      { label: "Security", value: "Perimeter Fencing & Gated Entry", icon: ShieldCheck },
      { label: "Access", value: "Direct State Highway Link", icon: Compass }
    ],
    scopeTitle: "Masterplanning & Absorption Strategy",
    scopeDesc: "Positioned as a prime weekend home and residential destination with high-velocity sales triggers.",
    gallery: [greenValleyImg, extra2, vayuGreenImg],
    highlights: [
      "Panoramic natural landscapes with fully developed infrastructure roads.",
      "Structured channel partner network across Pune and Mumbai investor hubs.",
      "Strategic pricing tiers designed to deliver early-investor gains.",
      "End-to-end sales reporting and closing support for the builder."
    ],
    metrics: {
      type: "Plotted Enclave",
      builder: "Buildup Property Pvt. Ltd.",
      location: "Pune, Maharashtra",
      role: "Aggregation & Investor Relations",
      timeline: "Active Selling Phase"
    }
  },

  "vayu-mantra": {
    id: "vayu-mantra",
    title: "Vayu Mantra",
    builder: "Buildup Property Pvt. Ltd.",
    category: "Gated Enclave",
    status: "Pre-Launch",
    loc: "Pune, Maharashtra",
    heroImg: vayuMantraImg,
    tagline: "Pre-Launch Exclusive Gated Community",
    overviewParagraphs: [
      "The next landmark luxury development by Buildup Property. Currently in its pre-launch strategic phase.",
      "ATA Infratech is orchestrating the launch blueprint, private investor capital linkages, and early channel partner onboarding."
    ],
    quickSpecs: [
      { label: "Phase", value: "Pre-Launch Private Bookings", icon: Maximize2 },
      { label: "Concept", value: "Smart Gated Luxury Layout", icon: Milestone },
      { label: "Amenities", value: "Clubhouse & Leisure Decks", icon: ShieldCheck },
      { label: "Funding", value: "Milestone-Backed Capital", icon: Compass }
    ],
    scopeTitle: "Pre-Launch Structuring & Capitalization",
    scopeDesc: "Structuring seed capital, private investor allocations, and promotional launch campaigns before public booking opens.",
    gallery: [vayuMantraImg, extra3, greenValleyImg],
    highlights: [
      "Exclusive architectural design and luxury lifestyle amenities.",
      "Pre-launch investor syndication for construction cashflow security.",
      "Ready channel partner onboarding with pre-booking quotas.",
      "Comprehensive company branding material and digital launch collateral."
    ],
    metrics: {
      type: "Gated Residential Enclave",
      builder: "Buildup Property Pvt. Ltd.",
      location: "Pune, Maharashtra",
      role: "Capital Structuring & Pre-Launch Sales",
      timeline: "Pre-Launch Phase"
    }
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsDatabase[id] || projectsDatabase["anant-city"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="w-full bg-[#FAFAFA] text-dark font-main relative z-20 min-h-screen">
      
      {/* 1. Hero Banner */}
      <div 
        className="relative w-full min-h-[460px] md:min-h-[520px] bg-cover bg-center flex items-end pb-14 pt-32"
        style={{ backgroundImage: `url(${project.heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40 z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-20">
          <Link to="/projects" className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-4 hover:text-white transition-colors">
            <ArrowLeft size={16} /> Back to All Projects
          </Link>

          <div className="flex items-center gap-3 mb-3">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">{project.category}</span>
            <span className="bg-gold text-white text-[10px] font-bold uppercase px-3 py-0.5 rounded">
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-white mb-2 leading-tight drop-shadow-md">
            {project.title}
          </h1>
          <p className="text-gray-200 text-sm md:text-base font-semibold mb-4">{project.tagline}</p>

          <div className="flex items-center gap-3 text-xs md:text-sm text-gray-300">
            <span className="flex items-center gap-1"><MapPin size={14} className="text-gold" /> {project.loc}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Building2 size={14} className="text-gold" /> {project.builder}</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content & Sidebar Grid */}
      <section className="w-full py-16 pb-28 md:pb-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Main Detail Body */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Detailed Project Overview with Image */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-black/10 shadow-sm">
                <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">PROJECT OVERVIEW</span>
                <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-dark mb-5">About {project.title}</h2>
                
                {/* Featured Master Plan / Project Visual */}
                <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-6 border border-gold/25 shadow-md">
                  <img 
                    src={project.heroImg} 
                    alt={`${project.title} Master Plan`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-dark/90 border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded backdrop-blur-md">
                    Featured Masterplan
                  </div>
                  <div className="absolute bottom-3 right-3 bg-dark/90 text-white text-xs px-3 py-1 rounded-md border border-white/10 flex items-center gap-1.5 backdrop-blur-md">
                    <MapPin size={13} className="text-gold" /> {project.loc}
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="space-y-3.5 mb-8">
                  {project.overviewParagraphs?.map((para, pIdx) => (
                    <p key={pIdx} className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Quick Project Specifications Grid */}
                {project.quickSpecs && (
                  <div className="pt-6 border-t border-black/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-dark mb-4">Key Layout Specifications</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {project.quickSpecs.map((spec, sIdx) => {
                        const Icon = spec.icon;
                        return (
                          <div key={sIdx} className="flex items-center gap-3 p-3.5 bg-[#FAF8F5] border border-gold/20 rounded-lg">
                            <div className="w-10 h-10 rounded-md bg-white border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                              <Icon size={18} />
                            </div>
                            <div>
                              <span className="text-[11px] font-bold uppercase text-gray-500 block">{spec.label}</span>
                              <strong className="text-xs sm:text-sm text-dark font-bold block">{spec.value}</strong>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Scope Box */}
              <div className="bg-white border-l-4 border-gold p-6 md:p-8 rounded-r-xl border border-black/10 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-dark font-bold text-lg">
                  <Sparkles size={18} className="text-gold" />
                  <h3>{project.scopeTitle}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{project.scopeDesc}</p>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-xl font-bold text-dark mb-5">Key Project Highlights</h3>
                <div className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3.5 p-4 bg-white rounded-lg border border-black/10 shadow-sm">
                      <CheckCircle2 size={18} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-gray-700 font-medium leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visuals Strip */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-dark flex items-center gap-2">
                    <Images size={18} className="text-gold" /> Project Visuals
                  </h3>
                  <Link to="/gallery" className="text-gold text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:translate-x-1 transition-transform">
                    View Full Gallery <ArrowRight size={13} />
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-3.5">
                  {project.gallery.map((imgSrc, idx) => (
                    <div key={idx} className="h-28 md:h-36 rounded-lg overflow-hidden border border-black/10 shadow-sm">
                      <img src={imgSrc} alt={`Shot ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Information Card */}
            <div className="lg:col-span-4 sticky top-28 bg-white p-6 md:p-8 rounded-2xl border border-black/10 shadow-md space-y-4">
              <h3 className="text-lg font-bold text-dark pb-3 border-b border-black/10">Project Information</h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-black/5">
                  <span className="text-gray-500 font-medium">Builder Partner:</span>
                  <strong className="text-dark font-bold text-right max-w-[55%]">{project.metrics.builder}</strong>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-black/5">
                  <span className="text-gray-500 font-medium">Location:</span>
                  <strong className="text-dark font-bold">{project.metrics.location}</strong>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-black/5">
                  <span className="text-gray-500 font-medium">Typology:</span>
                  <strong className="text-dark font-bold">{project.metrics.type}</strong>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-black/5">
                  <span className="text-gray-500 font-medium">ATA Role:</span>
                  <strong className="text-gold font-bold text-right max-w-[55%]">{project.metrics.role}</strong>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-gray-500 font-medium">Timeline:</span>
                  <strong className="text-sky-600 font-bold">{project.metrics.timeline}</strong>
                </div>
              </div>

              <div className="pt-4 space-y-2.5">
                <Link to="/contact" className="w-full py-3 bg-gold hover:bg-gold-hover text-white text-xs font-bold uppercase tracking-wider rounded text-center shadow-md flex items-center justify-center gap-1.5 hover:-translate-y-0.5 transition-all">
                  Partner on This Project <ArrowRight size={14} />
                </Link>
                <Link to="/services" className="w-full py-2.5 bg-gray-50 hover:bg-dark hover:text-white text-dark text-xs font-bold uppercase tracking-wider rounded text-center border border-black/10 block transition-all">
                  Explore ATA Services
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. EXACT HALF-OVERLAP GOLDEN CTA (HALF ON PAGE / HALF OVER FOOTER) */}
      <section className="w-full bg-transparent px-4 -mb-28 md:-mb-32 relative z-30 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="bg-gradient-to-r from-[#D4A946] via-[#BA8E2E] to-[#8C671A] border-2 border-white/60 rounded-2xl p-8 sm:p-10 md:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-w-6xl mx-auto text-dark">
            <span className="inline-block bg-[#111111]/90 text-white border border-white/20 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full mb-3">
              LET'S COLLABORATE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold text-dark mb-3 leading-tight">
              Interested in Developing or Selling a Similar Project?
            </h2>
            <p className="text-gray-900 text-sm md:text-base font-semibold max-w-2xl mx-auto mb-6 leading-relaxed">
              Let's discuss how ATA Infratech can support your project with sales aggregation, investor capital, and brand growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-7 py-3.5 bg-dark hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow-xl hover:-translate-y-0.5 transition-all">
                Talk to Our Team <ArrowRight size={15} />
              </Link>
              <Link to="/projects" className="w-full sm:w-auto px-7 py-3.5 bg-white/30 hover:bg-dark hover:text-white text-dark border-1.5 border-dark text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center backdrop-blur-md transition-all">
                Explore All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}