import PageBanner from "../Components/PageBanner";
import { 
  Building2, 
  Coins, 
  TrendingUp, 
  Layers, 
  Zap, 
  BadgeCheck, 
  MapPin, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css";
import bannerImg from "../assets/insight2.jpg";

export default function About() {
  const corePillars = [
    {
      icon: Building2,
      title: "Aggregate",
      desc: "Complete Sales Execution — from project blueprint and channel partner network to marketing events and pipeline tracking for plots, residential, and commercial units."
    },
    {
      icon: Coins,
      title: "Invest",
      desc: "Connecting Builders with Capital — bridging the gap between solid real estate projects and investors to ensure zero funding delays."
    },
    {
      icon: TrendingUp,
      title: "Advise",
      desc: "Business & Growth Consulting — team building, staff coaching, corporate branding, and end-to-end operational advisory."
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
        title="Who We Are" 
        subtitle="Real estate builders shouldn't have to handle everything alone." 
      />

      {/* 2. Story / Intro Section */}
      <section id="our-story" className="section-padding story-section">
        <div className="about-grid">
          <div>
            <span className="section-tag">WHO WE ARE</span>
            <h2>Your Extended Team for Real Estate Success.</h2>
          </div>
          <div>
            <p className="lead-text">
              ATA Infratech was founded in November 2025 with one simple idea: <strong>real estate builders shouldn't have to handle everything alone.</strong>
            </p>
            <p className="sub-text">
              Building a project is hard enough. Selling it — organizing a sales team, finding channel partners, running events, reaching the right buyers — is a whole different skill. We manage sales, connect capital, and advise on business growth so every project moves from launch to sold-out in an organized, faster way.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Cards */}
      <section className="section-padding mission-vision-section">
        <div className="mv-grid">
          <div className="mv-card">
            <span className="section-tag">OUR MISSION</span>
            <h3>Empowering Builders</h3>
            <p>
              To help real estate builders sell smarter, raise capital easier, and grow their business into a well-organized, branded company.
            </p>
          </div>
          <div className="mv-card">
            <span className="section-tag">WHAT MAKES US DIFFERENT</span>
            <h3>The 3-in-1 Advantage</h3>
            <p>
              We don't offer isolated services. We bring <strong>Aggregation, Investment, and Advisory</strong> together so builders get complete end-to-end support.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Three Core Pillars (Replaces generic slider) */}
      <section className="section-padding pillars-section">
        <div className="section-header-center">
          <span className="section-tag">OUR THREE PILLARS</span>
          <h2>Aggregate. Invest. Advise.</h2>
        </div>
        <div className="pillars-grid">
          {corePillars.map((item, index) => (
            <div key={index} className="pillar-card">
              <div className="pillar-icon">
                <item.icon size={32} color="#C8A22C" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Partner With ATA Infratech */}
      <section id="why-ata" className="section-padding why-choose-section">
        <div className="section-header-center">
          <span className="section-tag">THE ATA ADVANTAGE</span>
          <h2>Why Partner With ATA INFRATECH</h2>
        </div>
        <div className="why-grid">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="why-card">
              <item.icon size={28} color="#C8A22C" className="why-icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="about-cta-box">
          <h3>Ready to sell your project faster and grow your business?</h3>
          <p>Let's talk about how ATA Infratech can support your next project.</p>
          <Link to="/contact" className="cta-btn">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}