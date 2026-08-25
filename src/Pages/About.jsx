import { motion } from "framer-motion";
import PageBanner from "../Components/PageBanner";
import { 
  Building2, 
  Coins, 
  TrendingUp, 
  Layers, 
  Zap, 
  BadgeCheck, 
  MapPin, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Target,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";

import bannerImg from "../assets/insight2.jpg";
import storyImg from "../assets/highway.jpg";
import experienceImg from "../assets/Banner.png";

// Motion Animation Presets
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function About() {
  const corePillars = [
    {
      num: "01",
      icon: Building2,
      title: "Aggregate",
      tag: "Complete Sales Execution",
      desc: "From master blueprint and channel partner network to marketing events and sales pipelines — bringing in buyers for plots, residential, and commercial units."
    },
    {
      num: "02",
      icon: Coins,
      title: "Invest",
      tag: "Connecting Capital with Projects",
      desc: "Bridging the gap between high-potential builder projects and private investors to secure seamless funding without execution delays."
    },
    {
      num: "03",
      icon: TrendingUp,
      title: "Advise",
      tag: "Business & Growth Consulting",
      desc: "Guiding builders in scaling operations — team building, staff coaching, corporate branding kits, and end-to-end strategic advisory."
    }
  ];

  const whyChooseUs = [
    {
      icon: Layers,
      title: "One Partner, Three Solutions",
      desc: "No need to juggle separate sales agencies, investor networks, and consultants. We bring it all together under one roof."
    },
    {
      icon: Zap,
      title: "Built for Speed",
      desc: "Our ready channel partner network and structured pipelines mean your project starts selling and scaling faster."
    },
    {
      icon: Coins,
      title: "Real Capital Connections",
      desc: "We actively connect builders directly with investors ready to fund ongoing, upcoming, or scale-up projects."
    },
    {
      icon: TrendingUp,
      title: "Growth Beyond One Project",
      desc: "Our advisory builds a long-term, professional real estate brand, not just a one-time project completion."
    },
    {
      icon: MapPin,
      title: "Proven On-Ground Work",
      desc: "Active across Gorakhpur, Lucknow, and Pune with active, pre-launch, and successfully sold-out project portfolios."
    },
    {
      icon: BadgeCheck,
      title: "Founded for Impact",
      desc: "Founded in November 2025 with an agile, high-speed execution team built for measurable builder results."
    }
  ];

  return (
    <div className="about-page">
      {/* 1. Header Banner */}
      <PageBanner 
        bgImage={bannerImg} 
        tag="ABOUT ATA INFRATECH"
        title="Building Value Beyond Real Estate" 
        subtitle="Your extended team for sales execution, investor capital, and business growth." 
      />

      {/* 2. Overlapping Story Section with Visual Composition */}
      <section id="our-story" className="section-padding story-section">
        <div className="story-layout-grid">
          {/* Left Text Content */}
          <motion.div 
            className="story-text-wrap"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="section-tag">WHO WE ARE</span>
            <h2>Bridging Opportunity, Capital & Execution.</h2>
            
            <p className="lead-text">
              ATA Infratech was founded in November 2025 with one simple idea: <strong>real estate builders shouldn't have to handle everything alone.</strong>
            </p>
            
            <p className="sub-text">
              Building a project is hard enough. Selling it — organizing a sales team, finding channel partners, running events, reaching the right buyers — is a whole different skill. And growing a real estate business beyond one project takes structure, branding, and the right guidance.
            </p>

            <div className="story-highlights-list">
              <div className="sh-item">
                <CheckCircle2 size={18} color="#C8A22C" />
                <span>Turnkey sales engines for plots, villas & commercial spaces</span>
              </div>
              <div className="sh-item">
                <CheckCircle2 size={18} color="#C8A22C" />
                <span>Active presence across Gorakhpur, Lucknow & Pune</span>
              </div>
              <div className="sh-item">
                <CheckCircle2 size={18} color="#C8A22C" />
                <span>Direct investor syndication & developer coaching</span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating Visual Composition */}
          <motion.div 
            className="story-visual-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="main-img-card" style={{ backgroundImage: `url(${storyImg})` }}>
              <div className="card-glass-badge">
                <Sparkles size={18} color="#C8A22C" />
                <div>
                  <strong>Founded Nov 2025</strong>
                  <span>Built for Speed & Results</span>
                </div>
              </div>
            </div>

            <div className="secondary-floating-card" style={{ backgroundImage: `url(${experienceImg})` }}>
              <div className="floating-badge-inner">
                <span className="count-gold">3</span>
                <span>Core Hubs Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Mission & Vision - Dual Interactive Cards */}
      <section className="section-padding mv-interactive-section">
        <div className="mv-cards-grid">
          <motion.div 
            className="mv-interactive-card"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <div className="mv-card-header">
              <div className="mv-icon-box">
                <Target size={28} color="#C8A22C" />
              </div>
              <span className="mv-tag">OUR MISSION</span>
            </div>
            <h3>Empowering Builders to Scale</h3>
            <p>
              To help real estate builders sell smarter, raise capital easier, and grow their business into a well-organized, branded company with enduring market value.
            </p>
          </motion.div>

          <motion.div 
            className="mv-interactive-card"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <div className="mv-card-header">
              <div className="mv-icon-box">
                <Eye size={28} color="#C8A22C" />
              </div>
              <span className="mv-tag">WHAT MAKES US DIFFERENT</span>
            </div>
            <h3>The 3-in-1 Unified Engine</h3>
            <p>
              We don't offer isolated services. We bring <strong>Aggregation, Investment, and Advisory</strong> together — so builders get complete end-to-end support under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Three Core Pillars with Interactive Hover & Watermark */}
      <section className="section-padding pillars-section">
        <div className="section-header-center">
          <span className="section-tag">OUR THREE PILLARS</span>
          <h2>Aggregate. Invest. Advise.</h2>
          <p className="section-subtitle">
            Three core services. One goal — help you sell faster, grow smarter, and build with confidence.
          </p>
        </div>

        <motion.div 
          className="pillars-animated-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {corePillars.map((pillar, idx) => (
            <motion.div 
              key={idx} 
              className="pillar-modern-card"
              variants={fadeUp}
              custom={idx}
              whileHover={{ y: -10 }}
            >
              <div className="pillar-watermark">{pillar.num}</div>
              
              <div className="pillar-top-bar">
                <div className="pillar-icon-wrap">
                  <pillar.icon size={30} color="#C8A22C" />
                </div>
                <span className="pillar-tag-badge">{pillar.tag}</span>
              </div>

              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>

              <Link to="/services" className="pillar-arrow-link">
                Explore Pillar <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 5. The ATA Advantage (Why Partner) */}
      <section id="why-ata" className="section-padding why-choose-section">
        <div className="section-header-center">
          <span className="section-tag">THE ATA ADVANTAGE</span>
          <h2>Why Partner With ATA INFRATECH</h2>
          <p className="section-subtitle">
            A specialized partner engineered to remove bottlenecks and accelerate your real estate project lifecycle.
          </p>
        </div>

        <div className="why-interactive-grid">
          {whyChooseUs.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="why-modern-card"
              variants={fadeUp}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
            >
              <div className="why-icon-circle">
                <item.icon size={24} color="#C8A22C" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* High-Impact CTA Box */}
        <motion.div 
          className="about-cta-banner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="cta-glow" />
          <div className="cta-content-wrap">
            <span className="cta-badge">LET'S COLLABORATE</span>
            <h3>Ready to sell your project faster and grow your business?</h3>
            <p>Let's talk about how ATA Infratech can support your next residential, commercial, or plotted project.</p>
            <Link to="/contact" className="cta-gold-btn">
              Talk to Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}