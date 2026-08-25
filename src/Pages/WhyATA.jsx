import React, { useRef, useState, useEffect } from "react";
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
  ArrowRight, 
  Sparkles
} from "lucide-react";
import "./WhyATA.css";
import whyBannerImg from "../assets/insight3.jpg";

// Automated Stat Counter Component
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
    <span ref={ref} className="w-metric-num">
      {prefix}{count}{suffix}
    </span>
  );
}

// Motion Variants
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
    <div className="why-ata-page">
      {/* 1. Page Header Banner */}
      <PageBanner
        bgImage={whyBannerImg}
        tag="WHY CHOOSE US"
        title="Why Real Estate Builders Rely on ATA Infratech"
        subtitle="We help builders sell faster, secure investor capital seamlessly, and build an enduring, branded real estate enterprise."
      />

      {/* 2. Key Execution Animated Metrics Bar */}
      <section className="why-metrics-bar">
        <div className="why-metrics-grid">
          <motion.div 
            className="w-metric-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <StatCounter target={3} suffix="-in-1" />
            <span className="w-metric-label">Unified Business Pillar</span>
          </motion.div>

          <motion.div 
            className="w-metric-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StatCounter target={3} suffix=" Hubs" />
            <span className="w-metric-label">Gorakhpur • Lucknow • Pune</span>
          </motion.div>

          <motion.div 
            className="w-metric-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <StatCounter target={50} suffix="%" />
            <span className="w-metric-label">Faster Inventory Liquidation</span>
          </motion.div>

          <motion.div 
            className="w-metric-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <StatCounter target={100} suffix="%" />
            <span className="w-metric-label">On-Ground Accountability</span>
          </motion.div>
        </div>
      </section>

      {/* 3. Six Core Value Pillars with Detailed Bullet Highlights */}
      <section className="section-padding">
        <div className="section-header-center">
          <span className="section-tag">THE ATA ADVANTAGE</span>
          <h2>Built Exclusively for Ambitious Real Estate Developers</h2>
          <p className="section-subtitle">
            Every layer of ATA Infratech is engineered to eliminate project bottlenecks, unlock private capital, and accelerate absorption speed.
          </p>
        </div>

        <motion.div 
          className="why-pillars-grid"
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {valuePillars.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="why-pillar-card"
              variants={fadeUp}
              custom={idx}
              whileHover={{ y: -8 }}
            >
              <div className="pillar-watermark">{item.num}</div>

              <div className="card-top-row">
                <div className="pillar-icon-box">
                  <item.icon size={26} color="#C8A22C" />
                </div>
                <span className="pillar-tag-badge">{item.tag}</span>
              </div>

              <h3>{item.title}</h3>
              <p className="pillar-desc">{item.desc}</p>

              <div className="pillar-bullets">
                {item.points.map((pt, pIdx) => (
                  <div key={pIdx} className="bullet-point">
                    <CheckCircle2 size={15} color="#C8A22C" className="bullet-icon" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Comparison Table: Traditional Brokerage vs ATA Infratech */}
      <section className="section-padding comparison-section">
        <div className="section-header-center">
          <span className="section-tag">STRATEGIC DIFFERENCE</span>
          <h2>Traditional Brokerage vs. The ATA Engine</h2>
          <p className="section-subtitle">
            See how our integrated 3-in-1 model outperforms fragmented agencies and traditional sales desks.
          </p>
        </div>

        <motion.div 
          className="comparison-table-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="comp-table-header">
            <div className="comp-col-title">Strategic Dimension</div>
            <div className="comp-col-trad">Traditional Agencies</div>
            <div className="comp-col-ata">ATA Infratech Engine</div>
          </div>

          {comparisonData.map((row, rIdx) => (
            <div key={rIdx} className="comp-table-row">
              <div className="comp-col-title">
                <strong>{row.feature}</strong>
              </div>
              <div className="comp-col-trad">
                <XCircle size={17} color="#ef4444" className="comp-status-icon" />
                <span>{row.traditional}</span>
              </div>
              <div className="comp-col-ata">
                <CheckCircle2 size={17} color="#C8A22C" className="comp-status-icon" />
                <span>{row.ata}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 5. Bottom Call-To-Action Banner */}
      <section className="section-padding cta-banner-section">
        <motion.div 
          className="why-cta-glassbox"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-ambient-glow" />
          <Sparkles size={28} color="#C8A22C" style={{ margin: "0 auto 12px auto" }} />
          <h2>Ready to Put the ATA Engine to Work on Your Next Project?</h2>
          <p>Let's discuss how we can accelerate sales velocity, structure private capital, and build your corporate brand equity.</p>
          <div className="cta-buttons-wrap">
            <Link to="/contact" className="btn-gold">
              Talk to Our Team <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="btn-outline-gold">
              Explore Active Portfolio
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}