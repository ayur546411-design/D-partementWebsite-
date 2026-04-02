import React, { useState, useRef } from 'react';
import { slidesInfo } from '../../data';

const EventsSlider = () => {
  const [slideIdx, setSlideIdx] = useState(0);
  const trackRef = useRef(null);

  const getSlideWidth = () => {
    if (!trackRef.current) return 380;
    const s = trackRef.current.querySelector('.slide-card');
    return s ? s.offsetWidth + 20 : 380;
  };

  const slideRight = () => {
    const max = slidesInfo.length - 3; // Assuming showing ~3 on desktop
    let nextIdx = Math.min(slideIdx + 1, max);
    if (nextIdx < 0) nextIdx = 0;
    setSlideIdx(nextIdx);
  };

  const slideLeft = () => {
    setSlideIdx(Math.max(slideIdx - 1, 0));
  };

  const offset = slideIdx * getSlideWidth();

  return (
    <div className="slider-section">
      <div className="slider-title-row">
        <div>
          <div className="slider-label">Department Life</div>
          <h2>Events, Workshops & Campus</h2>
        </div>
        <div className="slider-nav">
          <button className="slider-btn" onClick={slideLeft}>←</button>
          <button className="slider-btn" onClick={slideRight}>→</button>
        </div>
      </div>
      <div className="slides-container">
        <div 
          className="slides-track" 
          id="slidesTrack" 
          ref={trackRef}
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {slidesInfo.map((slide, i) => (
            <div key={i} className="slide-card">
              <div className="slide-img" style={{ background: '#0a0a1a', padding: 0, overflow: 'hidden' }}>
                <img src={slide.imgUrl} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="slide-content">
                <div className="slide-cat">{slide.cat}</div>
                <h4>{slide.title}</h4>
                <p>{slide.desc}</p>
                <div className="slide-date">{slide.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSlider;
