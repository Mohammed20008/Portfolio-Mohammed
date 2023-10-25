'use client';
import React from 'react';
import { Chrono } from 'react-chrono';
import Heading from './Heading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { LuGraduationCap } from 'react-icons/lu';
// import Image from 'next/legacy/image';
// // import {
// //   VerticalTimeline,
// //   VerticalTimelineElement,
// // } from 'react-vertical-timeline-component';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.5);
  const experienceItems = experiencesData.map((item, index) => ({
    title: item.title,
    cardTitle: item.title,
    cardSubtitle: item.location,
    cardDetailedText: item.description,
    icon: item.icon,
  }));
  return (
    <motion.section
      ref={ref}
      id='experience'
      className='scroll-mt-28'
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
    >
      <Heading>My Experience</Heading>
      <div className='dark:hidden'>
        <Chrono
          items={experienceItems}
          mode='VERTICAL_ALTERNATING'
          theme={{
            primary: 'black',
            cardBgColor: '#f3f4f6',
            titleColor: 'black',
            titleColorActive: 'green',
          }}
        />
      </div>
      <div className='hidden dark:block'>
        <Chrono
          items={experienceItems}
          mode='VERTICAL_ALTERNATING'
          theme={{
            primary: 'gray',
            cardBgColor: '#172554',
            titleColor: 'white',
            titleColorActive: 'white',
          }}
        ></Chrono>
      </div>
    </motion.section>
  );
}
