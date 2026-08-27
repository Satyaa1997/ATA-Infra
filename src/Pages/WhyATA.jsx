import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { 
  Layers, 
  Zap, 
  Coins, 
  TrendingUp, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  ArrowRight
} from "lucide-react";
import whyBannerImg from "../assets/insight3.jpg";

function StatCounter({ target, suffix = "", prefix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(target, 10);
    if (isNaN(end)) return;

    const intervalTime = 20;
    const steps = duration / intervalTime;
    const stepIncrement = end / steps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-gold font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl block mb-1">
      {prefix}{count}{suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  })
};

const staggerGrid = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const valuePillars = [
  { 
    num: "01",
    title: "One Partner, Three Solutions", 
    tag: "Unified Ecosystem",
    desc: "Builders no longer need to coordinate between disconnected sales agencies, broker syndicates, and corporate consultants.",
    points: [
      "Turnkey Sales Execution (Aggregate)",
      "Strategic Capital Linkages (Invest)",
      "Long-term Brand & Operational Advisory (Advise)"
    ],
    icon: Layers 
  },
  { 
    num: "02",
    title: "High-Velocity Sales Engine", 
    tag: "Founded for Speed",
    desc: "Our structured pipeline blueprints and mobilized channel partner armies compress inventory turnaround time significantly.",
    points: [
      "Pre-launch investor booking quotas",
      "Ready channel partner networks in key regional hubs",
      "Lead-to-closure CRM tracking to prevent leakage"
    ],
    icon: Zap 
  },
  { 
    num: "03",
    title: "Direct Capital & Investor Linkages", 
    tag: "Zero Funding Delays",
    desc: "We bridge builders directly with private equity, high-net-worth investors, and structured financing to protect site execution.",
    points: [
      "Milestone-linked private equity deployment",
      "Structured land & township development syndication",
      "Investor pitch dossiers prepared by seasoned analysts"
    ],
    icon: Coins 
  },
  { 
    num: "04",
    title: "Growth Beyond A Single Project", 
    tag: "Brand Equity",
    desc: "We transform localized single-site construction projects into scalable, inter-city real estate enterprises.",
    points: [
      "In-house sales team recruitment & coaching",
      "Corporate marketing & architectural launch decks",
      "Standardized customer documentation and handovers"
    ],
    icon: TrendingUp 
  },
  { 
    num: "05",
    title: "Proven On-Ground Regional Footprint", 
    tag: "Active Field Clout",
    desc: "On-ground operational leads running investor meets, broker conferences, and customer walk-ins across key markets.",
    points: [
      "Gorakhpur: Plotted layout & regional broker dominance",
      "Lucknow: Commercial & business enclave scaling",
      "Pune: Luxury villas & multi-phase township liquidations"
    ],
    icon: MapPin 
  },
  { 
    num: "06",
    title: "100% Performance Accountability", 
    tag: "Aligned Incentives",
    desc: "Our success is directly linked to your sold-out project milestones, liquidity milestones, and on-schedule handovers.",
    points: [
      "Transparent milestone-linked commission frameworks",
      "Dedicated field directors stationed in project hubs",
      "Regular developer review dashboards and market intelligence"
    ],
    icon: ShieldCheck 
  }
];

const comparisonData = [
  {
    feature: "Sales Execution Model",
    traditional: "Disjointed local brokers with no unified pricing control",
    ata: "Centralized aggregation engine with master pricing blueprints"
  },
  {
    feature: "Capital & Funding",
    traditional: "High-interest unorganized borrowing leading to cashflow stalls",
    ata: "Direct structured institutional & private investor linkages"
  },
  {
    feature: "Channel Partner Network",
    traditional: "Slow, manual broker onboarding with frequent commission disputes",
    ata: "Ready, pre-aligned regional partner armies with automated tracking"
  },
  {
    feature: "Brand & Operational Advisory",
    traditional: "Zero long-term consulting; ceases once sales contract ends",
    ata: "Full developer coaching, team hiring, and multi-project brand scaling"
  }
];

export default function WhyATA() {
  return (
    <div className="w-full bg-[#FAFAFA] text-dark font-main min-h-screen overflow-x-hidden">
      {/* 1. Page Header Banner */}
      <PageBanner
        bgImage={whyBannerImg}
        tag="WHY CHOOSE US"
        title="Why Real Estate Builders Rely on ATA Infratech"
        subtitle="We help builders sell faster, secure investor capital seamlessly, and build an enduring, branded real estate enterprise."
      />

      {/* 2. Key Execution Animated Metrics Bar */}
      <section className="w-full bg-white border-y border-black/10 py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-black/10">
            <motion.div 
              className="p-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <StatCounter target={3} suffix="-in-1" />
              <span className="text-gray-600 text-xs font-bold uppercase tracking-wider">Unified Business Pillar</span>
            </motion.div>

            <motion.div 
              className="p-2 pt-4 md:pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StatCounter target={3} suffix=" Hubs" />
              <span className="text-gray-600 text-xs font-bold uppercase tracking-wider">Gorakhpur • Lucknow • Pune</span>
            </motion.div>

            <motion.div 
              className="p-2 pt-4 md:pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StatCounter target={50} suffix="%" />
              <span className="text-gray-600 text-xs font-bold uppercase tracking-wider">Faster Liquidation</span>
            </motion.div>

            <motion.div 
              className="p-2 pt-4 md:pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StatCounter target={100} suffix="%" />
              <span className="text-gray-600 text-xs font-bold uppercase tracking-wider">On-Ground Accountability</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Six Core Value Pillars */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">THE ATA ADVANTAGE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark mb-3">Built Exclusively for Ambitious Real Estate Developers</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Every layer of ATA Infratech is engineered to eliminate project bottlenecks, unlock private capital, and accelerate absorption speed.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {valuePillars.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-8 rounded-xl border border-black/10 shadow-sm hover:border-gold hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                variants={fadeUp}
                custom={idx}
              >
                <span className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-gold to-[#d4a946] group-hover:w-full transition-all duration-300" />

                <div className="absolute top-4 right-5 font-serif text-5xl font-black text-gold/10 select-none">
                  {item.num}
                </div>

                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-13 h-13 rounded-lg bg-[#FBF8F0] border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                      <item.icon size={26} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded border border-gold/20">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-black/5 space-y-2.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700 font-medium">
                      <CheckCircle2 size={15} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Comparison Table: Traditional Brokerage vs ATA Infratech */}
      <section className="w-full py-20 pb-36 bg-[#F4F1EA] border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">STRATEGIC DIFFERENCE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark mb-3">Traditional Brokerage vs. The ATA Engine</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              See how our integrated 3-in-1 model outperforms fragmented agencies and traditional sales desks.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-xl overflow-hidden shadow-md max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-white px-6 py-4 border-b-2 border-gold/25 text-xs font-bold uppercase tracking-wider">
              <div className="md:col-span-4 text-dark">Strategic Dimension</div>
              <div className="md:col-span-4 text-red-600 hidden md:block">Traditional Agencies</div>
              <div className="md:col-span-4 text-gold hidden md:block">ATA Infratech Engine</div>
            </div>

            {comparisonData.map((row, rIdx) => (
              <div key={rIdx} className="grid grid-cols-1 md:grid-cols-12 px-6 py-5 border-b border-black/5 hover:bg-[#FAF6ED] transition-colors items-center gap-3 md:gap-0 text-sm">
                <div className="md:col-span-4 font-bold text-dark">{row.feature}</div>
                <div className="md:col-span-4 flex items-start gap-2 text-gray-600 text-xs md:text-sm">
                  <XCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{row.traditional}</span>
                </div>
                <div className="md:col-span-4 flex items-start gap-2 text-dark font-semibold text-xs md:text-sm">
                  <CheckCircle2 size={16} className="text-gold flex-shrink-0 mt-0.5" />
                  <span>{row.ata}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Overlapping Golden CTA Section */}
      <section className="w-full bg-transparent px-4 -mb-20 relative z-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="bg-gradient-to-r from-[#D4A946] via-[#BA8E2E] to-[#8C671A] border border-white/45 rounded-2xl p-8 md:p-12 text-center shadow-2xl max-w-5xl mx-auto text-dark">
            <span className="inline-block bg-[#111111]/90 text-white border border-white/20 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full mb-3">
              LET'S COLLABORATE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold text-dark mb-3">
              Ready to Put the ATA Engine to Work on Your Next Project?
            </h2>
            <p className="text-gray-900 text-sm md:text-base font-semibold max-w-2xl mx-auto mb-6 leading-relaxed">
              Let's discuss how we can accelerate sales velocity, structure private capital, and build your corporate brand equity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-6 py-3 bg-dark hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all">
                Talk to Our Team <ArrowRight size={15} />
              </Link>
              <Link to="/projects" className="w-full sm:w-auto px-6 py-3 bg-white/25 hover:bg-dark hover:text-white text-dark border border-dark text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center backdrop-blur-sm transition-all">
                Explore Active Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}