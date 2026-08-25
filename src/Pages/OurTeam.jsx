import React from "react";
import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Building2,
  Coins,
  TrendingUp,
  Zap,
  Users,
  ShieldCheck,
  Target,
  Sparkles,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa";

import "./OurTeam.css";


// Banner & Member Images
import teamBanner from "../assets/leadership.jpg";
import member1 from "../assets/insight1.jpg";
import member2 from "../assets/project2.jpg";
import member3 from "../assets/insight2.jpg";
import member4 from "../assets/project3.jpg";
import member5 from "../assets/project1.jpg";
import member6 from "../assets/insight3.jpg";

export default function OurTeam() {
  // 1. Leadership Pillars
  const leadershipPillars = [
    {
      role: "Sales Execution & Marketing",
      title: "Aggregation Team",
      icon: Building2,
      tag: "Aggregate",
      desc: "Specialists in master project blueprints, channel partner mobilization, lead pipeline workflows, and high-velocity inventory closing for plots, residential, and commercial developments."
    },
    {
      role: "Capital & Investor Linkages",
      title: "Investment Team",
      icon: Coins,
      tag: "Invest",
      desc: "Experts in connecting builders directly with private capital, structured financing models, and strategic investors to keep construction schedules on track."
    },
    {
      role: "Brand & Operational Advisory",
      title: "Advisory Team",
      icon: TrendingUp,
      tag: "Advise",
      desc: "Consultants driving corporate identity decks, sales team recruitment, in-house coaching programs, and operational scaling beyond single-project limits."
    }
  ];

  // 2. Six Core Team Members
  const teamMembers = [
    {
      name: "Strategic Founder & Managing Director",
      designation: "Head of Strategy & Governance",
      pillar: "Corporate Leadership",
      img: member1,
      bio: "Spearheading ATA Infratech’s core vision since November 2025 to bridge execution, funding, and sales for real estate builders across North & West India."
    },
    {
      name: "Director of Sales & Aggregation",
      designation: "Head of Channel Partner Networks",
      pillar: "Aggregate",
      img: member2,
      bio: "Oversees blueprint pricing, marketing launch events, broker incentive structures, and customer conversion engines across plotted and commercial inventory."
    },
    {
      name: "Head of Capital Markets & Investment",
      designation: "Principal Investment Partner",
      pillar: "Invest",
      img: member3,
      bio: "Connects builders with private equity, high-net-worth investors, and institutional capital to eliminate project funding bottlenecks."
    },
    {
      name: "Principal Business & Growth Consultant",
      designation: "Head of Advisory & Developer Coaching",
      pillar: "Advise",
      img: member4,
      bio: "Consults developers on brand repositioning, internal sales hiring, staff coaching frameworks, and corporate operational guidelines."
    },
    {
      name: "Regional Project Lead — UP Corridor",
      designation: "Operations Lead (Gorakhpur & Lucknow)",
      pillar: "On-Ground Execution",
      img: member5,
      bio: "Directs ground campaigns, local channel partner alliances, and site management for flagship projects like Anant City and Garden Ganj."
    },
    {
      name: "Regional Director — Western Hub",
      designation: "Operations Lead (Pune Hub)",
      pillar: "Township Delivery",
      img: member6,
      bio: "Manages fast-track delivery and pre-launch sales pipelines for multi-phase Pune developments including Vayu Villa, Vayu Green, and Vayu Mantra."
    }
  ];

  // 3. Operational Hubs
  const operationalHubs = [
    {
      city: "Gorakhpur Hub",
      focus: "Plotted Layouts & Regional Channel Networks",
      projects: "Anant City & Emerging Townships"
    },
    {
      city: "Lucknow Hub",
      focus: "Commercial Spaces & Structured Plotted Enclaves",
      projects: "Garden Ganj & City Core Developments"
    },
    {
      city: "Pune Hub",
      focus: "Luxury Gated Communities & Multi-Phase Townships",
      projects: "Vayu Villa (Sold Out), Vayu Green, Vayu Mantra"
    }
  ];

  // 4. Team Strengths
  const teamStrengths = [
    {
      icon: Zap,
      title: "Founded for Speed (Nov 2025)",
      desc: "A modern, agile execution unit structured without corporate bureaucracy to deliver fast sales turnarounds."
    },
    {
      icon: Users,
      title: "Your Extended Workforce",
      desc: "We integrate directly with your builder office so you don't need to juggle fragmented agencies and consultants."
    },
    {
      icon: ShieldCheck,
      title: "100% On-Ground Accountability",
      desc: "Active field presence managing real investor meetings, broker conferences, and customer walk-ins."
    },
    {
      icon: Target,
      title: "Performance-Driven Culture",
      desc: "Our targets align directly with your sold-out milestones and financial liquidity goals."
    }
  ];

  return (
    <div className="team-page">
      {/* 1. Header Banner */}
      <PageBanner
        bgImage={teamBanner}
        tag="OUR TEAM"
        title="Built for Speed, Results & Builder Growth"
        subtitle="Founded in November 2025 with one core mission: Real estate builders shouldn't have to handle sales, capital, and growth alone."
      />

      {/* 2. Philosophy & Extended Team Story */}
      <section className="section-padding team-intro-section">
        <div className="team-intro-grid">
          <div>
            <span className="section-tag">WHO WE ARE</span>
            <h2>An Extended Engine for Real Estate Builders</h2>
          </div>
          <div>
            <p className="lead-text">
              Building a project takes focus, engineering discipline, and site management. Managing channel partners, closing inventory, and raising capital is a full-time demand.
            </p>
            <p className="sub-text">
              At ATA Infratech, our multidisciplinary team acts as your in-house strategic division — connecting you with ready capital, mobilizing channel partner armies, and scaling your brand authority.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Three Core Pillar Divisions */}
      <section className="section-padding team-pillars-section">
        <div className="section-header-center">
          <span className="section-tag">EXECUTION DIVISIONS</span>
          <h2>Our Core Functional Wings</h2>
          <p className="section-subtitle">Specialized teams driving the three pillars of modern developer success.</p>
        </div>

        <div className="team-pillars-grid">
          {leadershipPillars.map((pillar, idx) => (
            <div key={idx} className="team-pillar-card">
              <div className="pillar-top">
                <pillar.icon size={32} color="#C8A22C" />
                <span className="pillar-tag">{pillar.tag}</span>
              </div>
              <span className="pillar-role">{pillar.role}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Core Team Members Grid (6 Leaders) */}
      <section className="section-padding members-section">
        <div className="section-header-center">
          <span className="section-tag">KEY LEADERSHIP</span>
          <h2>The Team Behind Your Projects</h2>
          <p className="section-subtitle">Experienced minds across real estate aggregation, private capital, and business consulting.</p>
        </div>

        <div className="members-grid">
          {teamMembers.map((m, idx) => (
            <div key={idx} className="member-card">
              <div className="member-img-wrapper">
                <img src={m.img} alt={m.name} className="member-img" />
                <span className="member-pillar-badge">{m.pillar}</span>
                <div className="member-social-overlay">
                  <a href="/contact" className="social-icon-btn" aria-label="Contact via Email">
                    <Mail size={16} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="LinkedIn Profile">
                    <FaLinkedin size={16} />
                  </a>
                </div>
              </div>

              <div className="member-info">
                <h3>{m.name}</h3>
                <span className="member-role-title">{m.designation}</span>
                <p className="member-bio">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. On-Ground City Footprint */}
      <section className="section-padding team-hubs-section">
        <div className="section-header-center">
          <span className="section-tag">ON-GROUND PRESENCE</span>
          <h2>Regional Execution Hubs</h2>
          <p className="section-subtitle">Dedicated operational leads driving localized real estate momentum.</p>
        </div>

        <div className="hubs-grid">
          {operationalHubs.map((hub, idx) => (
            <div key={idx} className="hub-card">
              <div className="hub-icon-wrapper">
                <MapPin size={24} color="#C8A22C" />
              </div>
              <h3>{hub.city}</h3>
              <p className="hub-focus"><strong>Focus:</strong> {hub.focus}</p>
              <p className="hub-projects"><strong>Track Record:</strong> {hub.projects}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Team Execution Values */}
      <section className="section-padding team-strengths-section">
        <div className="section-header-center">
          <span className="section-tag">THE ATA ADVANTAGE</span>
          <h2>Why Developers Rely on Our People</h2>
        </div>

        <div className="strengths-grid-team">
          {teamStrengths.map((item, idx) => (
            <div key={idx} className="team-strength-card">
              <item.icon size={28} color="#C8A22C" className="strength-icon" />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="team-cta-box">
          <Sparkles size={28} color="#C8A22C" style={{ margin: "0 auto 12px auto" }} />
          <h3>Ready to put our team to work on your next project?</h3>
          <p>Let's discuss how ATA Infratech can accelerate your sales and funding pipeline.</p>
          <Link to="/contact" className="btn-gold">
            Talk to Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}