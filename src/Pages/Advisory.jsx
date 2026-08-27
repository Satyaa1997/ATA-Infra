import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
    <div className="w-full bg-[#FAFAFA] text-dark font-main min-h-screen">
      <PageBanner
        bgImage={advBanner}
        tag="ADVISORY PILLAR"
        title="Business & Team Growth Consulting"
        subtitle="We help builders grow beyond a single project into a strong, organized, and branded real estate company."
      />

      {/* Capabilities Section */}
      <section className="w-full py-20 bg-white border-b border-black/5">
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

      {/* Target Segment */}
      <section className="w-full py-20 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-center">
          <div className="max-w-2xl mx-auto mb-10">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">WHO THIS IS FOR</span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-dark mb-3">Built for Ambitious Real Estate Developers</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Builders who want to build a lasting, professional real estate brand — not just complete a one-off project.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
            {["Residential Builders", "Plotting & Township Developers", "Commercial Project Owners", "Emerging Real Estate Brands"].map((type, idx) => (
              <span key={idx} className="bg-white border border-black/10 px-6 py-3.5 rounded-lg text-sm font-bold text-dark shadow-sm hover:bg-gold hover:text-white hover:border-gold transition-all duration-200">
                {type}
              </span>
            ))}
          </div>

          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-hover text-white text-xs font-bold uppercase tracking-wider rounded shadow-md hover:-translate-y-0.5 transition-all">
            Talk to Our Advisory Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}