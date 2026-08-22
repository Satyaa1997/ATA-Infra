import { Routes, Route } from "react-router-dom";
import { SmoothScrollProvider, LuxuryCursor } from "../src/Components/Effects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Development from "./Pages/Devlopment";
import Investment from "./Pages/Investment";
import Advisory from "./Pages/Advisory";
import Projects from "./Pages/Projects";
import Insights from "./Pages/Insights";
import Careers from "./Pages/Career";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <SmoothScrollProvider>
      <LuxuryCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/development" element={<Development />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </SmoothScrollProvider>
  );
}