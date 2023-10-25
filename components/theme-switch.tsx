'use client';
import React, { useState, useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
type Theme = 'light' | 'dark';
export default function Theme() {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <button
      className='fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-white flex justify-center items-center rounded-full hover:scale-105 focus:sclae-105  bg-opacity-80 backdrop-blur-[0.5rem] opaci40 border border-white border-opacity-40 shadow-2xl transition-all dark:bg-gray-900'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
