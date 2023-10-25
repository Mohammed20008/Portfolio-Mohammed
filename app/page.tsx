import Intro from '@/components/Intro.js';
import About from '@/components/About';
import Projects from '@/components/Projects';
import SectionDevider from '@/components/SectionDevider.js';
import Skills from '@/components/Skills';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
export default function Home() {
  return (
    <main className='flex items-center flex-col'>
      <Intro />
      <SectionDevider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
