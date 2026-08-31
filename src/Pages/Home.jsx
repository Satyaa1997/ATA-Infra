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

import service1Img from "../assets/Aggregate.jpg";
import service2Img from "../assets/investment.jpg";
import service3Img from "../assets/Advisory.jpg";
import service4Img from "../assets/ATAPhoto.png";
import proj1Img from "../assets/AnantCity.jpg";
import proj2Img from "../assets/Gardenganj1.webp";
import proj3Img from "../assets/Vayuvilla1.png";
import proj4Img from "../assets/Banner.png";

import heroVideo from "../assets/ATAvedio.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.16, 1, 0.3, 1] }
  })
};

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
    <span ref={ref} className="text-white font-serif font-extrabold text-4xl md:text-5xl">
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
    if (isMobile) return currentIndex * 100;
    return currentIndex * (100 / 3);
  };

  return (
    <div className="w-full text-dark font-main relative z-20">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[640px] md:h-screen bg-[#0c0c0c] flex items-end pb-16 md:pb-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <video 
            src={heroVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/75 to-[#0a0a0a]/95" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.18] font-extrabold text-white mb-6 drop-shadow-md">
              <span className="font-serif uppercase text-gray-200">Your</span>{" "}
              <span className="text-gold uppercase tracking-wider font-bold">Real Estate</span>{" "}
              <span className="font-serif font-extrabold text-white">Project<span className="text-gold">.</span></span>
              <br />
              <span className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 block font-normal">
                <span className="text-white font-bold">Fully Built,</span>{" "}
                <span className="font-serif text-gold font-bold">Fully Sold,</span>{" "}
                <span className="text-gray-300 font-semibold">Fully Supported.</span>
              </span>
            </h1>

            <p className="text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl drop-shadow">
              ATA Infratech helps real estate builders plan, fund, and sell their projects faster — through Aggregation, Investment, and Advisory, all under one roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-7 py-3.5 bg-gold hover:bg-gold-hover text-white text-xs font-bold uppercase tracking-widest rounded border border-gold shadow-lg hover:-translate-y-0.5 transition-all text-center">
                Talk to Our Team
              </Link>
              <Link to="/services" className="px-7 py-3.5 bg-gold/15 hover:bg-gold text-white text-xs font-bold uppercase tracking-widest rounded border border-gold backdrop-blur-sm transition-all text-center">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW / WHO WE ARE */}
      <section className="w-full py-20 md:py-24 bg-white border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div 
              className="lg:col-span-7"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block text-gold text-xs font-bold tracking-[2px] uppercase mb-3">WHO WE ARE</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark leading-tight mb-5">
                Bridging Opportunity, Capital & Execution.
              </h2>
              
              <p className="text-base md:text-lg text-dark font-semibold leading-relaxed mb-4">
                ATA Infratech was founded in November 2025 with one simple idea: <span className="text-gold font-bold">real estate builders shouldn't have to handle everything alone.</span>
              </p>
              
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Building a project is hard enough. Selling it — organizing a sales team, finding channel partners, running events, reaching the right buyers — is a whole different skill. And growing a real estate business beyond one project takes structure, branding, and the right guidance.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-center gap-3 text-sm md:text-base font-semibold text-dark">
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                  <span>Turnkey sales engines for plots, villas & commercial spaces</span>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base font-semibold text-dark">
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                  <span>Active presence across Gorakhpur, Lucknow & Pune</span>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base font-semibold text-dark">
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                  <span>Direct investor syndication & developer coaching</span>
                </div>
              </div>

              <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold hover:bg-gold-hover text-white text-xs font-bold uppercase tracking-widest rounded shadow-md hover:-translate-y-0.5 transition-all">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Media Box */}
            <motion.div 
              className="lg:col-span-5 relative min-h-[360px] md:min-h-[420px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div 
                className="w-full md:w-[90%] h-[340px] md:h-[400px] rounded-xl bg-cover bg-center border border-gold/25 shadow-2xl relative"
                style={{ backgroundImage: `url(${service4Img})` }}
              >
                <div className="absolute top-4 left-4 bg-[#121212]/90 border border-gold backdrop-blur-md px-4 py-2.5 rounded-lg flex items-center gap-3 text-white shadow-lg">
                  <Sparkles size={18} className="text-gold" />
                  <div>
                    <strong className="block text-xs font-bold text-gold uppercase tracking-wider">Founded Nov 2025</strong>
                    <span className="text-[10px] text-gray-300">Built for Speed & Results</span>
                  </div>
                </div>
              </div>

              <div 
                className="absolute -bottom-4 right-0 w-44 md:w-52 h-44 md:h-52 rounded-xl bg-cover bg-center border-4 border-white shadow-2xl flex items-end overflow-hidden"
                style={{ backgroundImage: `url(${proj4Img})` }}
              >
                <div className="w-full bg-[#121212]/95 border-t border-gold py-2 text-center">
                  <span className="block font-serif text-lg font-bold text-gold">3</span>
                  <span className="text-[9px] uppercase tracking-wider text-gray-300 font-bold block">Core Hubs Active</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. STATS STRIP */}
      <section className="w-full py-14 bg-[#111111] border-y border-black/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-2">
              <h3><StatCounter target={3} suffix="" /></h3>
              <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider mt-1.5">Major Hubs (Gorakhpur, Lucknow, Pune)</p>
            </div>
            <div className="p-2">
              <h3><StatCounter target={3} suffix="-in-1" /></h3>
              <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider mt-1.5">End-to-End Solutions</p>
            </div>
            <div className="p-2">
              <h3><StatCounter target={100} suffix="%" /></h3>
              <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider mt-1.5">Dedicated Builder Support</p>
            </div>
            <div className="p-2">
              <h3><StatCounter target={2025} suffix="" /></h3>
              <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider mt-1.5">Built for Speed & Results</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE PILLARS */}
      <section className="w-full py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl mb-12">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">WHAT WE DO</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark mb-2">Three Core Services. One Unified Goal.</h2>
            <p className="text-gray-600 text-sm md:text-base">Three services. One goal — help you sell faster, grow smarter, and build with confidence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl border border-black/10 shadow-sm overflow-hidden flex flex-col justify-between hover:border-gold hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div 
                  className="h-52 bg-cover bg-center p-4 relative"
                  style={{ backgroundImage: `url(${service.img})` }}
                >
                  <span className="bg-dark/90 text-gold border border-gold px-3 py-1 text-xs font-bold rounded">
                    {service.id}
                  </span>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <span className="text-gold text-xs font-bold uppercase tracking-wider block mb-1">{service.tagline}</span>
                    <h3 className="text-2xl font-bold text-dark mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  </div>
                  <Link to={service.link} className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold hover:translate-x-1 transition-transform">
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SHOWCASE */}
      <section className="w-full py-20 bg-[#0E0E0E] text-white border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">OUR PROJECTS</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-white">Working Across High-Growth Cities</h2>
              <p className="text-gray-400 text-sm md:text-base mt-1">We are currently working with builders across Gorakhpur, Lucknow, and Pune.</p>
            </div>
            <Link to="/projects" className="text-gold hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 transition-colors">
              View All Projects <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((p) => (
              <div key={p.id} className="bg-[#181818] border border-white/10 rounded-xl overflow-hidden hover:border-gold hover:-translate-y-2 transition-all duration-300">
                <div className="h-56 bg-cover bg-center p-4 relative" style={{ backgroundImage: `url(${p.img})` }}>
                  <span className="bg-dark/90 text-gold border border-gold text-[10px] font-bold uppercase px-3 py-1 rounded">
                    {p.status}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-gold text-xs font-bold uppercase tracking-wider flex items-center gap-1 mb-1">
                    <MapPin size={12} /> {p.loc}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-xs mb-5">Builder: {p.builder}</p>
                  <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:translate-x-1 transition-transform">
                    Explore Project <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US / STRENGTHS */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl mb-12">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">WHY BUILDERS CHOOSE ATA INFRATECH</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark mb-2">Built for Speed, Scale & Execution</h2>
            <p className="text-gray-600 text-sm md:text-base">Real on-ground project experience across cities to accelerate your development lifecycle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAFAFA] p-8 rounded-xl border border-black/10 hover:border-gold hover:bg-white hover:-translate-y-1.5 transition-all shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#FBF8F0] border border-gold/30 flex items-center justify-center text-gold mb-5">
                <Layers size={26} />
              </div>
              <h4 className="text-xl font-bold text-dark mb-2.5">End-to-End Support</h4>
              <p className="text-gray-600 text-sm leading-relaxed">From project blueprint to channel partner marketing and the final customer sale.</p>
            </div>

            <div className="bg-[#FAFAFA] p-8 rounded-xl border border-black/10 hover:border-gold hover:bg-white hover:-translate-y-1.5 transition-all shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#FBF8F0] border border-gold/30 flex items-center justify-center text-gold mb-5">
                <Coins size={26} />
              </div>
              <h4 className="text-xl font-bold text-dark mb-2.5">Ready Investor Network</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Instant access to a curated network of channel partners and capital investors.</p>
            </div>

            <div className="bg-[#FAFAFA] p-8 rounded-xl border border-black/10 hover:border-gold hover:bg-white hover:-translate-y-1.5 transition-all shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[#FBF8F0] border border-gold/30 flex items-center justify-center text-gold mb-5">
                <Zap size={26} />
              </div>
              <h4 className="text-xl font-bold text-dark mb-2.5">Faster Project Launches</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Structured sales engines and organized marketing campaigns designed for speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SLIDER */}
      <section className="w-full py-20 bg-[#0C0C0C] text-white border-y border-gold/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-white mb-2">Trusted by Forward-Thinking Developers</h2>
            <p className="text-gray-400 text-sm md:text-base">Real feedback from builder partners across Gorakhpur, Lucknow, and Pune.</p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${getTranslateX()}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full md:w-1/3 flex-shrink-0 px-3">
                  <div className="bg-[#141414] border border-gold/25 rounded-xl p-6 h-full flex flex-col justify-between hover:border-gold transition-colors">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Quote size={20} className="text-gold" />
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} fill="#BA8E2E" color="#BA8E2E" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm italic leading-relaxed mb-6">"{t.review}"</p>
                    </div>

                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover border border-gold" />
                      <div>
                        <h4 className="text-sm font-bold text-white">{t.name}</h4>
                        <span className="text-[11px] text-gray-400 block">{t.role} • <strong className="text-gold">{t.company}</strong></span>
                        <span className="text-[10px] text-gray-500 uppercase flex items-center gap-1 mt-0.5"><MapPin size={10} /> {t.loc}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(maxSteps)].map((_, i) => (
                <button
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-6 bg-gold" : "w-2 bg-white/20"}`}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. LATEST BLOGS */}
      <section className="w-full py-20 pb-28 md:pb-36 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-[2px] block mb-2">INSIGHTS & STRATEGY</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark">Latest From Our Real Estate Blog</h2>
              <p className="text-gray-600 text-sm md:text-base mt-1">Actionable intelligence on project sales, investor relations, and builder growth.</p>
            </div>
            <Link to="/blog" className="px-5 py-2.5 bg-dark hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded flex items-center gap-1.5 transition-all">
              View All Blogs <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((b) => (
              <div key={b.id} className="bg-white rounded-xl border border-black/10 overflow-hidden shadow-sm hover:border-gold hover:-translate-y-1.5 transition-all flex flex-col justify-between">
                <div>
                  <div className="h-48 bg-cover bg-center p-4" style={{ backgroundImage: `url(${b.img})` }}>
                    <span className="bg-dark/90 text-gold border border-gold text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                      {b.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {b.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {b.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-2.5">{b.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-4">{b.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link to="/blog" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold hover:translate-x-1 transition-transform">
                    Read Full Article <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. EXACT HALF-OVERLAP GOLDEN CTA (HALF ON PAGE / HALF OVER FOOTER) */}
      <section className="w-full bg-transparent px-4 -mb-28 md:-mb-32 relative z-30 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="bg-gradient-to-r from-[#D4A946] via-[#BA8E2E] to-[#8C671A] border-2 border-white/60 rounded-2xl p-8 sm:p-10 md:p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-w-6xl mx-auto text-dark">
            <span className="inline-block bg-[#111111]/90 text-white border border-white/20 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full mb-3">
              LET'S COLLABORATE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold text-dark mb-3 leading-tight">
              Ready to sell your project faster and grow your business?
            </h2>
            <p className="text-gray-900 text-sm md:text-base font-semibold max-w-2xl mx-auto mb-6 leading-relaxed">
              Let's talk about how ATA Infratech can support your next project with aggregation, capital, and advisory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-7 py-3.5 bg-dark hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow-xl hover:-translate-y-0.5 transition-all">
                Contact Us <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-7 py-3.5 bg-white/30 hover:bg-dark hover:text-white text-dark border-1.5 border-dark text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center backdrop-blur-md transition-all">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}