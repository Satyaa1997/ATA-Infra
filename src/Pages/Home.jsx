import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Coins,  
  CheckCircle2, 
  ChevronRight, 
  MapPin, 
  Layers, 
  Zap, 
  Sparkles,
  Quote,
  Star,
  Calendar,
  Clock
} from "lucide-react";
import "./Home.css";

import service1Img from "../assets/Aggregate.jpg";
import service2Img from "../assets/investment.jpg";
import service3Img from "../assets/Advisory.jpg";
import service4Img from "../assets/ATAPhoto.png";
import proj1Img from "../assets/AnantCity.jpg";
import proj2Img from "../assets/Gardenganj1.webp";
import proj3Img from "../assets/Vayuvilla1.png";
import proj4Img from "../assets/Banner.png";

import heroVideo from "../assets/ATAvedio.mp4";

// Motion Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  })
};

// 3 Core Services Snapshot
const coreServices = [
  {
    id: "01",
    title: "Aggregate",
    tagline: "Complete Sales Execution",
    desc: "We build your complete project sales system — blueprint, channel partners, marketing events, and a full sales pipeline to bring in buyers for plots, residential, and commercial units.",
    img: service1Img,
    link: "/services"
  },
  {
    id: "02",
    title: "Invest",
    tagline: "Connecting Builders with Capital",
    desc: "We connect builders with the right investors, helping projects secure the funding they need to move forward without delay.",
    img: service2Img,
    link: "/services"
  },
  {
    id: "03",
    title: "Advise",
    tagline: "Business & Growth Consulting",
    desc: "We guide builders on scaling their business — team hiring, staff coaching, company branding material, and complete operational support.",
    img: service3Img,
    link: "/advisory"
  }
];

// Actual Projects Preview
const featuredProjects = [
  { 
    id: 1, 
    builder: "Anantjit Infra Developers Pvt. Ltd.", 
    title: "Anant City", 
    loc: "Gorakhpur", 
    status: "Active", 
    img: proj1Img 
  },
  { 
    id: 2, 
    builder: "Garden Square Ventures Pvt. Ltd.", 
    title: "Garden Ganj", 
    loc: "Lucknow", 
    status: "Active", 
    img: proj2Img 
  },
  { 
    id: 3, 
    builder: "Buildup Property Pvt. Ltd.", 
    title: "Vayu Villa & Vayu Green", 
    loc: "Pune", 
    status: "Sold Out / Active", 
    img: proj3Img 
  }
];

// 9 Testimonials with Photo Avatars
const testimonials = [
  {
    id: 1,
    name: "Rajeshwar Singh",
    role: "Managing Director",
    company: "Anantjit Infra",
    loc: "Gorakhpur",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    review: "ATA Infratech structured our entire sales pipeline and channel partner network. Our inventory turnaround time was reduced by 50%."
  },
  {
    id: 2,
    name: "Vikramaditya Agarwal",
    role: "Founder & Partner",
    company: "Garden Square",
    loc: "Lucknow",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    review: "Their commercial sales execution and direct capital linkages brought high deal velocity for our business enclave."
  },
  {
    id: 3,
    name: "Sanjay Deshmukh",
    role: "Director",
    company: "Buildup Property",
    loc: "Pune",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    review: "From pre-launch positioning to 100% sold-out delivery ahead of schedule, ATA Infratech demonstrated exceptional power."
  },
  {
    id: 4,
    name: "Amitabh Srivastava",
    role: "Managing Partner",
    company: "Green Space Realty",
    loc: "Lucknow",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    review: "Their guidance in training sales teams, setting up blueprints, and managing channel commissions is unmatched in the industry."
  },
  {
    id: 5,
    name: "Pradeep Kulkarni",
    role: "Chief Developer",
    company: "Vayu Township Pvt Ltd",
    loc: "Pune",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    review: "The investor syndication provided continuous project cashflows, helping us deliver modern villa phases without delay."
  },
  {
    id: 6,
    name: "Manoj Tripathi",
    role: "Promoter",
    company: "Purvanchal Land Corp",
    loc: "Gorakhpur",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
    review: "Organized broker meets and high-conversion site visit events generated rapid customer bookings within weeks."
  },
  {
    id: 7,
    name: "Rameshwar Goel",
    role: "Managing Director",
    company: "Prime Square Infratech",
    loc: "Lucknow",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    review: "Structured customer documentation and disciplined broker coordination made the entire sales journey frictionless."
  },
  {
    id: 8,
    name: "Nitin Joshi",
    role: "Executive Director",
    company: "Apex Residency",
    loc: "Pune",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    review: "Their strategic growth advisory scaled our brand from a single-city developer to a respected multi-regional builder."
  },
  {
    id: 9,
    name: "Harish Chandra",
    role: "Founding Partner",
    company: "Cityscape Developers",
    loc: "Gorakhpur",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    review: "Complete transparency, performance-linked accountability, and expert real estate execution from day one."
  }
];

// 3 Featured Blogs Data
const featuredBlogs = [
  {
    id: 1,
    title: "Why Real Estate Builders Struggle with Sales Execution in Tier-2 Cities",
    category: "Market Insights",
    date: "August 2026",
    readTime: "5 min read",
    desc: "Discover how centralized aggregation models and channel partner blueprints solve inventory stagnation for developers.",
    img: service1Img
  },
  {
    id: 2,
    title: "Structured Private Capital vs Traditional Real Estate Debt",
    category: "Capital & Funding",
    date: "July 2026",
    readTime: "4 min read",
    desc: "How developers are leveraging milestone-linked private investor syndication to prevent site cashflow bottlenecks.",
    img: service2Img
  },
  {
    id: 3,
    title: "The Blueprint of Scaling from Single-Site Builder to Regional Brand",
    category: "Growth Advisory",
    date: "June 2026",
    readTime: "6 min read",
    desc: "Key frameworks for team hiring, operational standardization, and digital marketing kits to build enduring brand equity.",
    img: service3Img
  }
];

function StatCounter({ target, suffix = "", duration = 1800 }) {
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
    <span ref={ref} className="stat-number-black">
      {count}{suffix}
    </span>
  );
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSteps = isMobile ? testimonials.length : testimonials.length - 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maxSteps);
    }, 4000);
    return () => clearInterval(timer);
  }, [maxSteps]);

  const getTranslateX = () => {
    if (isMobile) {
      return currentIndex * 100;
    }
    return currentIndex * (100 / 3);
  };

  return (
    <div className="home-container">

      {/* ========================================================
          1. HERO SECTION (DARK BACKGROUND)
          ======================================================== */}
      <section id="hero" className="hero-section">
        <div className="hero-media-wrapper">
          <video 
            src={heroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="hero-video-bg"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-multi-title">
            <span className="word-your">Your</span>{" "}
            <span className="word-real-estate">Real Estate</span>{" "}
            <span className="word-project">Project<span className="gold-dot">.</span></span>
            <br />
            <span className="hero-sub-row">
              <span className="word-built">Fully Built,</span>{" "}
              <span className="word-sold">Fully Sold,</span>{" "}
              <span className="word-supported">Fully Supported.</span>
            </span>
          </h1>

          <p className="hero-description">
            ATA Infratech helps real estate builders plan, fund, and sell their projects faster — through Aggregation, Investment, and Advisory, all under one roof.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-gold">Talk to Our Team</Link>
            <Link to="/services" className="btn-outline">Explore Our Services</Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. HOME STORY / OVERVIEW (LIGHT BACKGROUND)
          ======================================================== */}
      <section id="home-overview" className="section-padding home-story-section">
        <div className="home-story-layout-grid">
          <motion.div 
            className="home-story-text-wrap"
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

            <div className="home-story-highlights-list">
              <div className="hs-item">
                <CheckCircle2 size={18} color="#C8A22C" />
                <span>Turnkey sales engines for plots, villas & commercial spaces</span>
              </div>
              <div className="hs-item">
                <CheckCircle2 size={18} color="#C8A22C" />
                <span>Active presence across Gorakhpur, Lucknow & Pune</span>
              </div>
              <div className="hs-item">
                <CheckCircle2 size={18} color="#C8A22C" />
                <span>Direct investor syndication & developer coaching</span>
              </div>
            </div>

            <div className="home-story-btn-row">
              <Link to="/about" className="btn-gold">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="home-story-visual-wrap"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="home-main-img-card" style={{ backgroundImage: `url(${service4Img})` }}>
              <div className="home-glass-badge">
                <Sparkles size={18} color="#C8A22C" />
                <div>
                  <strong>Founded Nov 2025</strong>
                  <span>Built for Speed & Results</span>
                </div>
              </div>
            </div>

            <div className="home-secondary-card" style={{ backgroundImage: `url(${proj4Img})` }}>
              <div className="home-floating-badge-inner">
                <span className="count-gold">3</span>
                <span>Core Hubs Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          3. STATS SECTION (DARK BACKGROUND)
          ======================================================== */}
      <section id="stats" className="stats-section">
        <div className="stats-grid">
          <div className="stat-box">
            <h3><StatCounter target={3} suffix="" /></h3>
            <p>Major Hubs (Gorakhpur, Lucknow, Pune)</p>
          </div>
          <div className="stat-box">
            <h3><StatCounter target={3} suffix="-in-1" /></h3>
            <p>End-to-End Solutions</p>
          </div>
          <div className="stat-box">
            <h3><StatCounter target={100} suffix="%" /></h3>
            <p>Dedicated Builder Support</p>
          </div>
          <div className="stat-box">
            <h3><StatCounter target={2025} suffix="" /></h3>
            <p>Built for Speed & Results</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. THREE PILLARS (LIGHT BACKGROUND)
          ======================================================== */}
      <section id="services-verticals" className="section-padding verticals-section">
        <div className="section-header">
          <span className="section-tag">WHAT WE DO</span>
          <h2>Three Core Services. One Unified Goal.</h2>
          <p className="section-subtitle">Three services. One goal — help you sell faster, grow smarter, and build with confidence.</p>
        </div>
        
        <div className="ln-services-grid">
          {coreServices.map((service) => (
            <div key={service.id} className="ln-service-card">
              <div className="ln-service-img" style={{ backgroundImage: `url(${service.img})` }}>
                <span className="ln-service-badge">{service.id}</span>
              </div>
              <div className="ln-service-body">
                <span className="p-type" style={{ color: "#C8A22C", fontWeight: 700 }}>{service.tagline}</span>
                <h3 style={{ marginTop: "6px" }}>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to={service.link} className="service-read-more">
                  Learn More <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. PROJECTS SHOWCASE (DARK BACKGROUND)
          ======================================================== */}
      <section id="projects" className="section-padding projects-showcase-section">
        <div className="section-header-flex">
          <div>
            <span className="section-tag">OUR PROJECTS</span>
            <h2>Working Across High-Growth Cities</h2>
            <p className="section-subtitle">We are currently working with builders across Gorakhpur, Lucknow, and Pune.</p>
          </div>
          <Link to="/projects" className="link-arrow">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>

        <div className="projects-grid-ln">
          {featuredProjects.map((p) => (
            <div key={p.id} className="project-card-ln">
              <div className="p-img" style={{ backgroundImage: `url(${p.img})` }}>
                <span className="p-status">{p.status}</span>
              </div>
              <div className="p-content">
                <span className="p-type"><MapPin size={12} style={{ display: 'inline', marginRight: 4 }} />{p.loc}</span>
                <h3 style={{ marginBottom: "4px" }}>{p.title}</h3>
                <p style={{ fontSize: "13px", color: "#aaaaaa", marginBottom: "14px" }}>Builder: {p.builder}</p>
                <Link to="/projects" className="link-arrow">
                  Explore Project <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          6. WHY CHOOSE US / STRENGTHS (LIGHT BACKGROUND)
          ======================================================== */}
      <section id="strengths" className="section-padding strengths-section">
        <div className="section-header">
          <span className="section-tag">WHY BUILDERS CHOOSE ATA INFRATECH</span>
          <h2>Built for Speed, Scale & Execution</h2>
          <p className="section-subtitle">Real on-ground project experience across cities to accelerate your development lifecycle.</p>
        </div>

        <div className="strengths-grid">
          <div className="strength-card">
            <div className="s-icon"><Layers size={28} /></div>
            <h4>End-to-End Support</h4>
            <p>From project blueprint to channel partner marketing and the final customer sale.</p>
          </div>
          <div className="strength-card">
            <div className="s-icon"><Coins size={28} /></div>
            <h4>Ready Investor Network</h4>
            <p>Instant access to a curated network of channel partners and capital investors.</p>
          </div>
          <div className="strength-card">
            <div className="s-icon"><Zap size={28} /></div>
            <h4>Faster Project Launches</h4>
            <p>Structured sales engines and organized marketing campaigns designed for speed.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. COMPACT TESTIMONIALS AUTO-SLIDER (DARK THEME)
          ======================================================== */}
      <section id="testimonials" className="section-padding testimonials-section">
        <div className="section-header-center">
          <span className="section-tag">TESTIMONIALS</span>
          <h2>Trusted by Forward-Thinking Developers</h2>
          <p className="section-subtitle">Real feedback from builder partners across Gorakhpur, Lucknow, and Pune.</p>
        </div>

        <div className="testimonial-slider-wrapper">
          <div 
            className="testimonial-slider-track" 
            style={{ transform: `translateX(-${getTranslateX()}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="t-top-row">
                    <Quote size={22} color="#C8A22C" className="t-quote-icon" />
                    <div className="t-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="#C8A22C" color="#C8A22C" />
                      ))}
                    </div>
                  </div>

                  <p className="t-review">"{t.review}"</p>

                  <div className="t-author-wrap">
                    <img src={t.photo} alt={t.name} className="t-avatar" />
                    <div className="t-info">
                      <h4>{t.name}</h4>
                      <span className="t-role">{t.role} • <strong>{t.company}</strong></span>
                      <span className="t-project"><MapPin size={11} style={{ display: 'inline', marginRight: 3 }} />{t.loc}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="testimonial-dots">
            {[...Array(maxSteps)].map((_, i) => (
              <button
                key={i}
                className={`t-dot ${currentIndex === i ? "active" : ""}`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. LATEST BLOG SECTION (LIGHT BACKGROUND)
          ======================================================== */}
      <section id="home-blog" className="section-padding blog-section">
        <div className="section-header-flex">
          <div>
            <span className="section-tag">INSIGHTS & STRATEGY</span>
            <h2>Latest From Our Real Estate Blog</h2>
            <p className="section-subtitle">Actionable intelligence on project sales, investor relations, and builder growth.</p>
          </div>
          <Link to="/blog" className="btn-gold-link">
            View All Blogs <ArrowRight size={16} />
          </Link>
        </div>

        <div className="blog-grid">
          {featuredBlogs.map((b) => (
            <div key={b.id} className="blog-card">
              <div className="b-img-wrap" style={{ backgroundImage: `url(${b.img})` }}>
                <span className="b-category">{b.category}</span>
              </div>
              <div className="b-body">
                <div className="b-meta">
                  <span><Calendar size={13} /> {b.date}</span>
                  <span>•</span>
                  <span><Clock size={13} /> {b.readTime}</span>
                </div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <Link to="/blog" className="b-read-more">
                  Read Full Article <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-mobile-cta">
          <Link to="/blog" className="btn-gold">
            View All Blogs <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ========================================================
          9. HALF-OVERLAP GOLDEN CTA SECTION
          ======================================================== */}
      <section id="cta" className="cta-overlap-section">
        <div className="cta-overlap-box">
          <div className="cta-badge">LET'S COLLABORATE</div>
          <h2>Ready to sell your project faster and grow your business?</h2>
          <p>Let's talk about how ATA Infratech can support your next project with aggregation, capital, and advisory.</p>
          <div className="cta-overlap-actions">
            <Link to="/contact" className="btn-cta-dark">
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-cta-outline">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}