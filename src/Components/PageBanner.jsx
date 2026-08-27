import { motion } from "framer-motion";

export default function PageBanner({ bgImage, tag, title, subtitle }) {
  return (
    <div 
      className="relative w-full min-h-[420px] md:min-h-[480px] bg-cover bg-center bg-no-repeat flex items-end pb-14 pt-32 overflow-hidden font-main"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Multi-Stop Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/75 to-[#0c0c0c] z-10" />

      {/* Radial Glow */}
      <div className="absolute bottom-0 left-[5%] w-[450px] h-[250px] bg-radial-gradient from-gold/15 to-transparent pointer-events-none z-20" />

      {/* Synchronized Centered Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-30">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {tag && (
            <motion.span 
              className="inline-block bg-[#121212]/85 text-gold border border-gold/40 backdrop-blur-md px-3.5 py-1.5 rounded text-[11px] font-bold tracking-[2px] uppercase mb-4 shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {tag}
            </motion.span>
          )}

          <motion.h1 
            className="text-white text-3xl md:text-5xl lg:text-6xl font-serif font-extrabold leading-tight mb-4 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p 
              className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl font-normal drop-shadow"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}