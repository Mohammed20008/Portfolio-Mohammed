'use client';
import React from 'react';
import { delay, motion } from 'framer-motion';
import Heading from './Heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
const fadeInAnimationVarient = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};
const Skills = () => {
  const { ref } = useSectionInView('Skills', 0.5);
  return (
    <section ref={ref} id='skills' className='scroll-mt-28 mb-28 max-w-[52rem]'>
      <Heading>My Skells</Heading>
      <ul className='flex flex-wrap gap-2 justify-center text-gray-800 text-lg '>
        {skillsData.map((skill, index) => (
          <motion.li
            className='bg-white px-5 py-3 borderBlack rounded-xl dark:bg-white/10 dark:text-white/60 hover:scale-110 focus:scale-110 active:scale-110'
            key={index}
            variants={fadeInAnimationVarient}
            initial='initial'
            whileInView='animate'
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
