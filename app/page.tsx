'use client';

import { useGlobalAnimateOnScroll } from '@/hooks/useAnimateOnScroll';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  useGlobalAnimateOnScroll();

  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <CallToAction />
      <Footer />
    </main>
  );
}
