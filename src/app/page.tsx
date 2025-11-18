import Navbar from '@/components/navigation/Navbar';
import ScrollProgress from '@/components/navigation/ScrollProgress';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import Education from '@/components/education/Education';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';
import Achievements from '@/components/achievements/Achievements';
import Blog from '@/components/blog/Blog';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <div className="section-divider" />
        <p className="section-paragraph-spacing" aria-hidden="true"></p>
        <About />
        <div className="section-divider" />
        <p className="section-paragraph-spacing" aria-hidden="true"></p>
        <Experience />
        <div className="section-divider" />
        <p className="section-paragraph-spacing" aria-hidden="true"></p>
        <Education />
        <div className="section-divider" />
        <p className="section-paragraph-spacing" aria-hidden="true"></p>
        <Projects />
        <div className="section-divider" />
        <p className="section-paragraph-spacing" aria-hidden="true"></p>
        <Skills />
        <div className="section-divider" />
        <p className="section-paragraph-spacing" aria-hidden="true"></p>
        <Achievements />
        <div className="section-divider" />
        <p className="section-paragraph-spacing" aria-hidden="true"></p>
        <Blog />
        <div className="section-divider" />
        <p className="section-paragraph-spacing" aria-hidden="true"></p>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
