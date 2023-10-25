'use client';
import React from 'react';
import Heading from './Heading';
import { FaPaperPlane } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from './serverAccess';

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.5);
  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-28 w-[min(100%,38rem)] text-center scroll-mt-100'
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.25,
        },
      }}
    >
      <Heading>Contact me</Heading>
      <p>
        Please contact me directly at
        <a className='underline' href='mailto:mohammedabdalmenem1@gmail.com'>
          mohammedabdalmenem1@gmail.com
        </a>
      </p>
      <form
        className='mt-10 flex flex-col'
        action={(formData) => {
          sendEmail(formData);
        }}
      >
        <input
          name='senderEmail'
          type='email'
          className='borderBlack h-14 rounded-lg px-4 focus:ease-in-out dark:bg-gray-600 dark:opacity-40 focus:border-none'
          placeholder='Your Email'
          required
          maxLength={500}
        />
        <textarea
          name='message'
          className='borderBlack h-52 rounded-lg my-4 p-4 px-4 dark:bg-gray-600 dark:bg-opacity-40'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <button
          type='submit'
          className='group h-[3rem] w-[8rem] bg-gray-900 rounded-full flex items-center justify-center text-white gap-2 outline-none transition-all focus:sclae-110 hover:scale-110 hover:bg-gray-950 dark:bg-white dark:text-black'
        >
          Submit{' '}
          <FaPaperPlane className='opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition' />
        </button>
      </form>
    </motion.section>
  );
}
