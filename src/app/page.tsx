import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./components/Navbar'), { ssr: true });
const Hero = dynamic(() => import('./components/Hero'), { ssr: true });
const About = dynamic(() => import('./components/About'), { ssr: true });
const Experience = dynamic(() => import('./components/Experience'), { ssr: true });
const Skills = dynamic(() => import('./components/Skills'), { ssr: true });
const Publications = dynamic(() => import('./components/Publications'), { ssr: true });
const Footer = dynamic(() => import('./components/Footer'), { ssr: true });

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Publications />
      <Footer />
    </div>
  );
}
