import { motion } from "framer-motion";
import "./PageBanner.css";

export default function PageBanner({ bgImage, tag, title, subtitle }) {
  return (
    <div 
      className="page-banner-wrapper" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* 1. Cinematic Multi-Stop Gradient Overlay */}
      <div className="banner-dark-overlay" />

      {/* 2. Glassmorphic Ambient Glow */}
      <div className="banner-glow-effect" />

      {/* 3. Animated Overlay Content Container */}
      <div className="banner-content-container">
        <motion.div 
          className="banner-inner-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {tag && (
            <motion.span 
              className="banner-overlay-tag"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              {tag}
            </motion.span>
          )}

          <motion.h1 
            className="banner-overlay-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p 
              className="banner-overlay-subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}