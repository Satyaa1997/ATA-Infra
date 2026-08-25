import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Core Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Advisory from "./Pages/Advisory";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetail";
import Contact from "./Pages/Contact";
import OurTeam from "./Pages/OurTeam";

// 3 Pillars & Dedicated Pages
import Devlopment from "./Pages/Devlopment.jsx"; // .jsx explicitly added for Vite resolution
import InvestmentOpportunities from "./Pages/InvestmentOpportunities"; 

import WhyATA from "./Pages/WhyATA";

import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";


// Utilities
import ScrollToTop from "./Pages/ScrollToTop";
import WhatsAppButton from "./Pages/WhatsAppButton";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <WhatsAppButton />
      <Routes>
        {/* Core Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<OurTeam />} />
        
        {/* 1. Aggregate Pillar Routes */}
        <Route path="/development" element={<Devlopment />} />
        <Route path="/devlopment" element={<Devlopment />} />
        <Route path="/aggregate" element={<Navigate to="/development" replace />} />
        <Route path="/services" element={<Devlopment />} />

        {/* 2. Invest Pillar Routes */}
        <Route path="/investment-opportunities" element={<InvestmentOpportunities />} />
        <Route path="/investment" element={<InvestmentOpportunities />} />
        <Route path="/invest" element={<Navigate to="/investment-opportunities" replace />} />

        {/* 3. Advise Pillar Routes */}
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/advise" element={<Navigate to="/advisory" replace />} />
        

        {/* Projects & Portfolio */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />

        {/* Visual & Insights */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />

        {/* Company & Support */}
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/why-ata" element={<WhyATA />} />
        <Route path="/why-choose-us" element={<WhyATA />} />
      
        <Route path="/contact" element={<Contact />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}