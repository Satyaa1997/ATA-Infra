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
  CheckCircle2,
  Sparkles,
  Target,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

import bannerImg from "../assets/insight2.jpg";
import storyImg from "../assets/highway.jpg";
import experienceImg from "../assets/Banner.png";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
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
    <div className="w-full bg-[#FAFAFA] text-dark font-main overflow-x-hidden">
      {/* 1. Page Header Banner */}
      <PageBanner 
        bgImage={bannerImg} 
        tag="ABOUT ATA INFRATECH"
        title="Building Value Beyond Real Estate" 
        subtitle="Your extended team for sales execution, investor capital, and business growth." 
      />

      {/* 2. Story Section */}
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
              <span className="inline-block text-gold text-xs font-bold tracking-[2px] uppercase mb-3">
                WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark leading-tight mb-5">
                Bridging Opportunity, Capital & Execution.
              </h2>
              
              <p className="text-base md:text-lg text-dark font-semibold leading-relaxed mb-4">
                ATA Infratech was founded in November 2025 with one simple idea: <span className="text-gold font-bold">real estate builders shouldn't have to handle everything alone.</span>
              </p>
              
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                Building a project is hard enough. Selling it — organizing a sales team, finding channel partners, running events, reaching the right buyers — is a whole different skill. And growing a real estate business beyond one project takes structure, branding, and the right guidance.
              </p>

              <div className="space-y-3.5">
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
                style={{ backgroundImage: `url(${storyImg})` }}
              >
                <div className="absolute top-4 left-4 bg-[#121212]/90 border border-gold backdrop-blur-md px-4 py-2.5 rounded-lg flex items-center gap-3 text-white shadow-lg">
                  <Sparkles size={18} className="text-gold" />
                  <div>
                    <strong className="block text-xs font-bold text-gold uppercase tracking-wider">Founded Nov 2025</strong>
                    <span className="text-[10px] text-gray-300">Built for Speed & Results</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge Card */}
              <div 
                className="absolute -bottom-4 right-0 w-44 md:w-52 h-44 md:h-52 rounded-xl bg-cover bg-center border-4 border-white shadow-2xl flex items-end overflow-hidden"
                style={{ backgroundImage: `url(${experienceImg})` }}
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

      {/* 3. Mission & Vision */}
      <section className="w-full py-16 md:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <motion.div 
              className="bg-white p-8 md:p-10 rounded-xl border border-black/5 shadow-sm hover:border-gold hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-5">
                <div className="w-13 h-13 rounded-full bg-[#FBF8F0] border border-gold/30 flex items-center justify-center p-3">
                  <Target size={26} className="text-gold" />
                </div>
                <span className="text-gold text-xs font-bold uppercase tracking-widest">Our Mission</span>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-3">Empowering Builders to Scale</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To help real estate builders sell smarter, raise capital easier, and grow their business into a well-organized, branded company with enduring market value.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 md:p-10 rounded-xl border border-black/5 shadow-sm hover:border-gold hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-5">
                <div className="w-13 h-13 rounded-full bg-[#FBF8F0] border border-gold/30 flex items-center justify-center p-3">
                  <Eye size={26} className="text-gold" />
                </div>
                <span className="text-gold text-xs font-bold uppercase tracking-widest">What Makes Us Different</span>
              </div>
              <h3 className="text-2xl font-bold text-dark mb-3">The 3-in-1 Unified Engine</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We don't offer isolated services. We bring <strong>Aggregation, Investment, and Advisory</strong> together — so builders get complete end-to-end support under one roof.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Three Core Pillars */}
      <section className="w-full py-20 bg-white border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] inline-block mb-2">OUR THREE PILLARS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark mb-3">Aggregate. Invest. Advise.</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Three core services. One goal — help you sell faster, grow smarter, and build with confidence.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {corePillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-8 rounded-xl border border-black/10 shadow-sm hover:border-gold hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
                variants={fadeUp}
                custom={idx}
              >
                <div className="absolute top-4 right-5 font-serif text-5xl font-black text-gold/10 select-none">
                  {pillar.num}
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-lg bg-[#FBF8F0] border border-gold/25 flex items-center justify-center text-gold">
                      <pillar.icon size={28} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold bg-[#FBF8F0] px-3 py-1 rounded">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-dark mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                </div>

                <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:translate-x-1 transition-transform">
                  Explore Pillar <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 5. The ATA Advantage */}
      <section className="w-full py-20 pb-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold text-xs font-bold uppercase tracking-[2px] inline-block mb-2">THE ATA ADVANTAGE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold text-dark mb-3">Why Partner With ATA INFRATECH</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              A specialized partner engineered to remove bottlenecks and accelerate your real estate project lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-8 rounded-xl border border-black/10 shadow-sm hover:border-gold hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
                variants={fadeUp}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-full bg-[#FBF8F0] border border-gold/25 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2.5">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Overlapping Golden CTA Box */}
      <section className="w-full bg-transparent px-4 -mb-20 relative z-30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="bg-gradient-to-r from-[#D4A946] via-[#BA8E2E] to-[#8C671A] border border-white/45 rounded-2xl p-8 md:p-12 text-center shadow-2xl max-w-5xl mx-auto text-dark">
            <span className="inline-block bg-[#111111]/90 text-white border border-white/20 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1 rounded-full mb-3">
              LET'S COLLABORATE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold text-dark mb-3">
              Ready to sell your project faster and grow your business?
            </h2>
            <p className="text-gray-900 text-sm md:text-base font-semibold max-w-2xl mx-auto mb-6 leading-relaxed">
              Let's talk about how ATA Infratech can support your next residential, commercial, or plotted project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto px-6 py-3 bg-dark hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow-lg hover:-translate-y-0.5 transition-all">
                Talk to Our Team <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-6 py-3 bg-white/25 hover:bg-dark hover:text-white text-dark border border-dark text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center backdrop-blur-sm transition-all">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}