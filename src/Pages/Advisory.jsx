import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import advBanner from "../assets/Advisory.jpg";

export default function Advisory() {
  const advisoryCapabilities = [
    { 
      t: "Business Growth Strategy", 
      d: "Consulting on how to scale from a single project into an organized, multi-project real estate company." 
    },
    { 
      t: "Team Building & Hiring", 
      d: "Guiding builders in recruiting the right talent for on-ground sales, operations, and site management." 
    },
    { 
      t: "Coaching & Staff Training", 
      d: "Providing specialized training programs to elevate your in-house sales and customer handling teams." 
    },
    { 
      t: "Branding Material & Identity", 
      d: "Delivering ready brochures, presentation decks, digital collateral, and corporate branding assets." 
    },
    { 
      t: "Operational Frameworks", 
      d: "Setting up reporting protocols, CRM tracking, and transparent customer handover workflows." 
    },
    { 
      t: "Ongoing Advisory Support", 
      d: "Providing strategic counsel to overcome regulatory, market, and operational bottlenecks." 
    }
  ];

  return (
    <div className="w-full bg-[#FAFAFA] text-dark font-main relative z-20 min-h-screen">
      <PageBanner
        bgImage={advBanner}
        tag="ADVISORY PILLAR"
        title="Business & Team Growth Consulting"
        subtitle="We help builders grow beyond a single project into a strong, organized, and branded real estate company."
      />

      {/* Capabilities Section */}
      <section className="w-full py-20 pb-28 md:pb-36 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl mb-12">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">CONSULTING CAPABILITIES</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark">How We Advise Builders</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryCapabilities.map((item, i) => (
              <div 
                key={i} 
                className="bg-[#FAFAFA] p-8 rounded-xl border border-black/10 hover:border-gold hover:bg-white hover:-translate-y-1.5 shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 font-bold">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2.5">{item.t}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXACT HALF-OVERLAP GOLDEN CTA (HALF ON PAGE / HALF OVER FOOTER) */}
      <section className="w-full bg-transparent px-4 -mb-28 md:-mb-32 relative z-30 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="bg-gradient-to-r from-[#D4A946] via-[#BA8E2E] to-[#8C671A] border-2 border-white/60 rounded-2xl p-8 sm:p-10 md:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-w-6xl mx-auto text-dark">
            <span className="inline-flex items-center gap-1.5 bg-[#111111]/90 text-white border border-white/20 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full mb-3">
              <Sparkles size={13} className="text-gold" /> WHO THIS IS FOR
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold text-dark mb-3 leading-tight">
              Built for Ambitious Real Estate Developers
            </h2>
            <p className="text-gray-900 text-sm md:text-base font-semibold max-w-2xl mx-auto mb-6 leading-relaxed">
              Builders who want to build a lasting, professional real estate brand — not just complete a one-off project.
            </p>

            {/* Target Segments Badges */}
            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 max-w-3xl mx-auto mb-8">
              {[
                "Residential Builders", 
                "Plotting & Township Developers", 
                "Commercial Project Owners", 
                "Emerging Real Estate Brands"
              ].map((type, idx) => (
                <span 
                  key={idx} 
                  className="bg-black/15 backdrop-blur-sm border border-dark/30 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-dark shadow-sm hover:bg-dark hover:text-white transition-all duration-200"
                >
                  {type}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-7 py-3.5 bg-dark hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Talk to Our Advisory Team <ArrowRight size={15} />
              </Link>
              <Link 
                to="/services" 
                className="w-full sm:w-auto px-7 py-3.5 bg-white/30 hover:bg-dark hover:text-white text-dark border-1.5 border-dark text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center backdrop-blur-md transition-all"
              >
                Explore Other Pillars
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}