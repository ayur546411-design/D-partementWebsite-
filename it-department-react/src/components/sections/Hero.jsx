import React, { useEffect, useRef, useState } from 'react';


const Hero = () => {
  const particlesRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderImages = [
    '/slider1.jpg',
    '/slider2.jpg',
    '/slider3.jpg',
    '/tech.jpg',
    '/Tech2.jpg',
  ];

  // Auto-play the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // changes every 4 seconds
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const c = particlesRef.current;
    if (!c) return;
    
    // Clear in case of re-render
    c.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 8 + 's';
      p.style.animationDuration = (6 + Math.random() * 6) + 's';
      p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
      if (Math.random() > 0.5) p.style.background = 'rgba(0,200,215,0.7)';
      c.appendChild(p);
    }
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-slider-wrap">
        <div 
          className="hero-slider-inner"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sliderImages.map((src, idx) => (
            <div key={idx} className="hero-slider-item">
              <img src={src} alt={`Slide ${idx + 1}`} />
            </div>
          ))}
        </div>
        
        {/* Manual Controls */}
        <div className="hero-slider-controls">
          <button className="hero-slider-btn" onClick={prevSlide}>←</button>
          <button className="hero-slider-btn" onClick={nextSlide}>→</button>
        </div>

        {/* Dots */}
        <div className="hero-slider-dots">
          {sliderImages.map((_, idx) => (
            <div 
              key={idx} 
              className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
            ></div>
          ))}
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-left">


        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-arrow"></div>
        Scroll
      </div>
    </section>
  );
};

export default Hero;
