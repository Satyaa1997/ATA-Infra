import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }) {
  useEffect(() => {
   const lenis = new Lenis({

       duration: 1.2,

       easing: (t) => 
         Math.min(1, 1.001 - Math.pow(2, -10 * t)),

       smoothWheel: true,
     
        smoothTouch: false,

     });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}

export function LuxuryCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 450, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const checkHover = (e) => {
      if (e.target.closest("button, a, input, select, textarea, .hover-target")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99999,
          borderRadius: "50%",
          border: "1.5px solid #C8A22C",
        }}
        animate={{
          width: hovered ? 60 : 28,
          height: hovered ? 60 : 28,
          backgroundColor: hovered ? "rgba(200, 162, 44, 0.15)" : "transparent",
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          width: 6,
          height: 6,
          backgroundColor: "#C8A22C",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
        }}
      />
    </>
  );
}

export function SplitReveal({ text, className = "" }) {
  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} style={{ display: "inline-block", marginRight: "8px", overflow: "hidden" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.04, ease: [0.33, 1, 0.68, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}