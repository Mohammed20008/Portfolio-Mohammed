'use client';
import React from 'react';
import { motion } from 'framer-motion';
const SectionDevider = () => {
  return (
    <motion.div
      className='bg-gray-300 w-1 h-16 rounded-full my-24 hidden sm:block dark:bg-opacity-20'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    ></motion.div>
  );
};

export default SectionDevider;
