'use client';
import Link from 'next/link';
import Image from 'next/legacy/image';
import { motion } from 'framer-motion';
import { useActiveSectionContext } from '@/context/active-section-context';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';

import { useSectionInView } from '@/lib/hooks';
function Intro() {
  const { ref } = useSectionInView('Home');
  const { setTimeOfLastClick, setActiveSection } = useActiveSectionContext();
  return (
    <section className='px-40 scroll-mt-28 transition' id='home' ref={ref}>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src='/Me.jpg'
              alt='portfolio image'
              width='150'
              height='150'
              quality={95}
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[1] border-white shadow-xl'
            />
          </motion.div>

          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I am Mohammed.</span> I am a
        <span className='font-bold'>full-stack developer</span> with
        <span className='font-bold'> 2 years</span> of experience. I enjoy
        building <span className=''>sites & apps</span>. My focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact'), setTimeOfLastClick(Date.now);
          }}
        >
          Contact me here
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
        </Link>

        <a
          className='group bg-white px-7 py-3 flex items-center
          gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
          active:scale-105 transition cursor-pointer borderBlack dark:hover:text-gray-950 dark:bg-gray-500'
          href='/CV.pdf'
          download
        >
          Download CV
          <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
        </a>

        <a
          className='bg-white p-4 text-gray-700
          hover:text-gray-950 flex items-center gap-2
          rounded-full focus:scale-[1.15] hover:scale-[1.15]
          active:scale-105 transition cursor-pointer
          '
          href='https://linkedin.com'
          target='_blank'
        >
          <BsLinkedin />
        </a>

        <a
          className='bg-white p-4 text-gray-700 flex items-center
          gap-2 text-[1.35rem] rounded-full focus:scale-[1.15]
          hover:scale-[1.15] hover:text-gray-950 active:scale-105
          transition cursor-pointer'
          href='https://github.com'
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
