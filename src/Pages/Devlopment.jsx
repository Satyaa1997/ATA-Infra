import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  FileSpreadsheet, 
  Users2, 
  Megaphone, 
  TrendingUp, 
  Building 
} from "lucide-react";
import devBanner from "../assets/project2.jpg";

export default function Development() {
  const executionScope = [
    { 
      t: "Complete Project Blueprint", 
      d: "Preparing a structured roadmap, pricing strategy, and launch timeline.",
      icon: FileSpreadsheet
    },
    { 
      t: "Channel Partner Network", 
      d: "Connecting and mobilizing an active network of real estate channel partners.",
      icon: Users2
    },
    { 
      t: "Sales Events & Campaigns", 
      d: "Planning and running targeted marketing events and lead generation drives.",
      icon: Megaphone
    },
    { 
      t: "Trackable Sales Pipeline", 
      d: "Setting up a transparent, structured system from first inquiry to deal closure.",
      icon: TrendingUp
    },
    { 
      t: "Multi-Segment Inventory Selling", 
      d: "Dedicated sales execution for plotted layouts, residential units, and commercial spaces.",
      icon: Building
    }
  ];

  const steps = [
    "Project Blueprint & Plan",
    "Channel Partner Onboarding",
    "Marketing & Event Launch",
    "Sales Pipeline Execution",
    "Booking & Inventory Closure",
    "Handover Support"
  ];

  return (
    <div className="w-full bg-[#F9F8F5] text-dark font-main min-h-screen">
      <PageBanner
        bgImage={devBanner}
        tag="AGGREGATE PILLAR"
        title="Aggregate — Complete Sales Execution"
        subtitle="We take your project from blueprint to sold-out with an organized sales engine."
      />

      {/* What We Do */}
      <section className="w-full py-20 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl mb-12">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">WHAT WE DO</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark mb-3">Full-Cycle Project Aggregation</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              <strong>Who this is for:</strong> Builders who have a project ready but need an organized, professional sales engine behind it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executionScope.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className="bg-[#FAFAFA] p-8 rounded-xl border border-black/10 hover:border-gold hover:bg-white hover:-translate-y-1.5 shadow-sm transition-all duration-300">
                  <div className="w-14 h-14 rounded-lg bg-[#FBF8F0] border border-gold/25 flex items-center justify-center text-gold mb-5">
                    <IconComponent size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2.5">{item.t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Execution Roadmap */}
      <section className="w-full py-20 bg-white border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl mb-12">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">EXECUTION ROADMAP</span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-dark">From Launch to Sold-Out</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-[#141414] p-6 border-l-4 border-gold rounded-r-lg hover:translate-x-1.5 transition-transform duration-200">
                <span className="text-gold font-serif text-2xl font-bold block mb-2">0{idx + 1}</span>
                <h4 className="text-white text-base font-semibold">{step}</h4>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-hover text-white text-xs font-bold uppercase tracking-wider rounded shadow-md hover:-translate-y-0.5 transition-all">
              Partner With Us for Sales Execution <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}