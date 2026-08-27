import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import oppBannerImg from "../assets/investment.jpg";

const activeBuilderProjects = [
  {
    id: "opp-gorakhpur",
    name: "Anant City",
    builder: "Anantjit Infra Developers Pvt. Ltd.",
    loc: "Gorakhpur",
    type: "Plotted Development & Residential",
    scale: "Prime Township Parcel",
    stage: "Active Development / Sales Pipeline",
    support: "Channel Partner Network & Project Funding"
  },
  {
    id: "opp-lucknow",
    name: "Garden Ganj",
    builder: "Garden Square Ventures Pvt. Ltd.",
    loc: "Lucknow",
    type: "Commercial & Plotted Enclave",
    scale: "High-Absorption Commercial Zone",
    stage: "Active Execution",
    support: "Sales Acceleration & Strategic Capital"
  },
  {
    id: "opp-pune-1",
    name: "Vayu Mantra & Vayu Green",
    builder: "Buildup Property Pvt. Ltd.",
    loc: "Pune",
    type: "Residential Villas & Townships",
    scale: "Multi-Phase Project (Vayu Villa Sold Out)",
    stage: "Pre-Launch & Active Expansion",
    support: "Complete Capital & Sales Pipeline"
  }
];

export default function InvestmentOpportunities() {
  return (
    <div className="w-full bg-[#FAFAFA] text-dark font-main min-h-screen">
      <PageBanner
        bgImage={oppBannerImg}
        tag="INVEST PILLAR"
        title="Invest — Connecting Builders with Investors"
        subtitle="We bridge the gap between high-potential real estate projects and active capital partners."
      />

      {/* Opportunities Grid */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">CAPITAL STRUCTURING</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark mb-3">Fueling High-Growth Real Estate Projects</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              <strong>Who this is for:</strong> Builders who need funding partners to launch, complete, or scale their residential, commercial, or plotted developments without cashflow friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeBuilderProjects.map((opp) => (
              <div 
                key={opp.id} 
                className="bg-white p-8 rounded-xl border border-black/10 shadow-sm hover:border-gold hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-gold text-xs font-bold uppercase tracking-wider block mb-2">{opp.type}</span>
                  <h3 className="text-2xl font-bold text-dark mb-1">{opp.name}</h3>
                  <p className="text-gray-600 text-xs mb-3">Builder: <strong className="text-dark font-semibold">{opp.builder}</strong></p>
                  
                  <p className="text-gold text-xs font-bold uppercase flex items-center gap-1.5 mb-6">
                    <MapPin size={14} /> {opp.loc}
                  </p>

                  <div className="bg-[#F9F8F5] border border-black/5 p-4 rounded-lg space-y-2.5 text-xs mb-8">
                    <div className="flex justify-between items-center pb-2 border-b border-black/5">
                      <span className="text-gray-500 font-medium">Scope:</span>
                      <strong className="text-dark font-semibold">{opp.scale}</strong>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-black/5">
                      <span className="text-gray-500 font-medium">Project Stage:</span>
                      <strong className="text-gold font-bold">{opp.stage}</strong>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">ATA Role:</span>
                      <strong className="text-dark font-semibold text-right max-w-[60%]">{opp.support}</strong>
                    </div>
                  </div>
                </div>

                <Link to="/contact" className="w-full py-3 bg-gold hover:bg-gold-hover text-white text-xs font-bold uppercase tracking-wider rounded text-center shadow-md flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all">
                  Discuss Project Funding <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Diligence & Connection */}
      <section className="w-full py-20 bg-white border-t border-black/5 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full max-w-2xl">
          <ShieldCheck size={44} className="text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-dark mb-3">The ATA Investment Connection</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            We help structure clear investor conversations, assist in fundraising for ongoing and pre-launch developments, and secure capital so construction never stops.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3.5 bg-dark hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded shadow-md hover:-translate-y-0.5 transition-all">
            Connect with Our Investment Team
          </Link>
        </div>
      </section>
    </div>
  );
}