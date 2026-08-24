import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Core Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Investment from "./Pages/Investment";
import Advisory from "./Pages/Advisory";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetail";
import Contact from "./Pages/Contact";

// Dedicated Dropdown Pages
import Leadership from "./Pages/Leadership";
import WhyATA from "./Pages/WhyATA";
import LandAssetStrategy from "./Pages/LandAssetStrategy";
import InvestmentOpportunities from "./Pages/InvestmentOpportunities";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";
import ScrollToTop from "./Pages/ScrollToTop";
import Devlopment from "./Pages/Devlopment";
import Careers from "./Pages/Careers";
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
        
        {/* Dono spellings support karne ke liye (development & devlopment) */}
        <Route path="/development" element={<Devlopment />} />
        <Route path="/devlopment" element={<Devlopment />} />
        
        <Route path="/investment" element={<Investment />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Careers Routes (Fixed: ab /careers aur /career dono par page open hoga) */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/career" element={<Careers />} />

        {/* Dropdown Dedicated Routes */}
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/why-ata" element={<WhyATA />} />
        <Route path="/land-asset-strategy" element={<LandAssetStrategy />} />
        <Route path="/investment-opportunities" element={<InvestmentOpportunities />} />
      </Routes>
      <Footer />
    </>
  );
}