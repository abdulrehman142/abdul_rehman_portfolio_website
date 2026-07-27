import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for the water fill animation (1.5s) + a small pause (0.5s)
    // before the shutter goes up smoothly.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const scrollToInitialSection = () => {
      const hash = window.location.hash;
      if (!hash || hash === '#home') {
        window.history.replaceState(
          null,
          '',
          `${window.location.pathname}${window.location.search}#home`
        );
        window.scrollTo({ top: 0, behavior: 'auto' });
        return;
      }
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Wait for preloader exit animation so layout is stable
    const scrollTimer = setTimeout(scrollToInitialSection, 400);
    return () => clearTimeout(scrollTimer);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center"
        >
          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter"
          >
            {/* Background text (empty state) */}
            <div className="text-red-900/30">
              {personalInfo.brandName}<span className="text-red-900/30">.</span>
            </div>

            {/* Foreground text (water fill state) */}
            <motion.div 
              className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
            >
              {personalInfo.brandName}<span className="text-black">.</span>
            </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
