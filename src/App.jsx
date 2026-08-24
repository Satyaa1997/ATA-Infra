import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Core Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Development from "./Pages/Devlopment";
import Investment from "./Pages/Investment";
import Advisory from "./Pages/Advisory";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetail";
import Insights from "./Pages/Insights";
import Careers from "./Pages/Career";
import Contact from "./Pages/Contact";

// Dedicated Dropdown Pages
import Leadership from "./Pages/Leadership";
import WhyATA from "./Pages/WhyATA";
import LandAssetStrategy from "./Pages/LandAssetStrategy";
import InvestmentOpportunities from "./Pages/InvestmentOpportunities";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Core Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/development" element={<Development />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />

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