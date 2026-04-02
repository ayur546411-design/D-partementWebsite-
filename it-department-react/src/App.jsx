import React, { useEffect, useState } from 'react';
import './index.css';

import Topbar from './components/layout/Topbar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import AnnouncementBar from './components/sections/AnnouncementBar';
import About from './components/sections/About';
import Programs from './components/sections/Programs';
import EventsSlider from './components/sections/EventsSlider';
import Research from './components/sections/Research';
import Events from './components/sections/Events';
import Facilities from './components/sections/Facilities';
import Achievements from './components/sections/Achievements';
import Notices from './components/sections/Notices';
import Alumni from './components/sections/Alumni';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';

function App() {
  
  // To handle the bounce scroll visual in hero section
  useEffect(() => {
    // Add smooth scroll behavior to html tag if not in CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="app-container">
      <Topbar />
      <Navbar />
      
      <main>
        <Hero />
        <AnnouncementBar />
        <About />
        <Programs />
        <Research />
        <EventsSlider />
        <Events />
        <Facilities />
        <Achievements />
        <Notices />
        <Alumni />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
