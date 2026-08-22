import { Routes, Route } from "react-router-dom";
import { SmoothScrollProvider, LuxuryCursor } from "../src/Components/Effects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Development from "../src/Pages/Devlopment";
import Investment from "../src/Pages/Investment";
import Advisory from "../src/Pages/Advisory";
import Projects from "../src/Pages/Projects";
import Insights from "../src/Pages/Insights";
import Careers from "../src/Pages/Carrer";
import Contact from "../src/Pages/Contact";

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