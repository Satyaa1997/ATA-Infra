import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  CheckCircle2, 
  MapPin, 
  Building2,  
  ArrowRight,   
  Sparkles,
  Images
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
    overview: "Anant City is a premier masterplanned township development strategically positioned along Gorakhpur’s prime growth corridor. ATA Infratech serves as the complete aggregation engine — managing channel partner alignment, marketing event launches, and structured buyer pipeline execution.",
    scopeTitle: "How ATA Infratech Powers Anant City",
    scopeDesc: "We deployed an end-to-end sales framework connecting local channel networks with regional buyers, backed by transparent pricing blueprints.",
    gallery: [anantImg, extra1, extra3],
    highlights: [
      "Strategic location with direct arterial connectivity to Gorakhpur city core.",
      "100% verified clear-title plotted inventory with master layout approvals.",
      "Integrated channel partner commission & lead distribution pipeline.",
      "Targeted buyer acquisition campaigns for residential and investment plots."
    ],
    metrics: {
      type: "Plotted Development",
      builder: "Anantjit Infra Developers Pvt. Ltd.",
      location: "Gorakhpur, UP",
      role: "Sales Execution & Aggregation",
      timeline: "Active Marketing & Booking Phase"
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
    overview: "Located in the heart of Lucknow’s expanding commercial belt, Garden Ganj combines retail boulevards with plotted business layouts. ATA Infratech handles investor connections and commercial sales acceleration to secure fast deal velocity.",
    scopeTitle: "ATA Infratech Commercial Strategy",
    scopeDesc: "Structured funding dialogues and commercial sales positioning to attract business enterprises, retail investors, and corporate buyers.",
    gallery: [gardenImg, extra2, extra1],
    highlights: [
      "High-footfall commercial frontage suitable for retail and corporate shops.",
      "Direct investor matchmaking and structured milestone-based funding.",
      "Organized channel partner drives across Lucknow & NCR regions.",
      "Dedicated corporate branding kits and digital presentation collaterals."
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
    overview: "Vayu Villa represents a flagship milestone in Pune’s high-end residential segment. Taken from the initial project blueprint to 100% sold-out status through ATA Infratech’s disciplined sales pipeline and high-conversion marketing events.",
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
      timeline: "Successfully Delivered & Sold Out"
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
    overview: "Following the sold-out success of Vayu Villa, Vayu Green expands the footprint with sustainable residential layouts and community amenities. ATA Infratech drives ongoing sales aggregation and channel partner outreach.",
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
    overview: "Green Valley offers serene suburban residential plots designed for bespoke home construction and long-term capital appreciation. ATA Infratech provides strategic blueprint advisory, broker alignments, and investor backing.",
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
    overview: "The next landmark development by Buildup Property. Currently in its pre-launch strategic phase, ATA Infratech is orchestrating the launch blueprint, private investor capital linkages, and early channel partner onboarding.",
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
    <div className="w-full bg-[#FAFAFA] text-dark font-main min-h-screen">
      
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
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Main Detail Body */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">PROJECT OVERVIEW</span>
                <h2 className="text-2xl md:text-3xl font-serif font-extrabold text-dark mb-4">About {project.title}</h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{project.overview}</p>
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

      {/* 3. Bottom Next/Prev Project Bar */}
      <section className="w-full py-8 bg-[#F4F1EA] border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="cursor-pointer text-center sm:text-left" onClick={() => navigate("/projects")}>
            <span className="text-gold text-[10px] font-bold uppercase tracking-widest block">BACK TO OVERVIEW</span>
            <h4 className="text-base font-bold text-dark hover:text-gold transition-colors">Explore All 6 Projects</h4>
          </div>
          <Link to="/contact" className="px-6 py-3 bg-gold hover:bg-gold-hover text-white text-xs font-bold uppercase tracking-wider rounded shadow-md flex items-center gap-2">
            Discuss Your Project with Us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}