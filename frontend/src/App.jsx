import AOS from 'aos';
import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;