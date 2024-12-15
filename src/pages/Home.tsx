import React from 'react';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <Contact />
    </>
  );
}