import React from 'react';
import { motion } from 'motion/react';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {/* Pillar Door Opening Animation Overlay */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-midnight z-[100] origin-top"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed inset-0 bg-white/10 z-[99] origin-bottom"
      />
      {children}
    </motion.div>
  );
};

export default PageTransition;
