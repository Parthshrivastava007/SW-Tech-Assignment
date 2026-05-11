import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ size = "md" }) => {
  const sizes = {
    sm: "w-5 h-5 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4"
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className={`${sizes[size]} rounded-full border-primary-500 border-t-transparent`}
      />
    </div>
  );
};

export default Loader;
