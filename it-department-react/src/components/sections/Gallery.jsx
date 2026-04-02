import React from 'react';
import { galleryImages } from '../../data';

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-label">Gallery</div>
            <h2 className="section-title">Campus Life & <span className="highlight">Moments</span></h2>
          </div>
          <a href="#gallery" className="view-all">Full Gallery →</a>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-item">
              <div className="gallery-img">
                <img src={img.imgUrl} alt={img.cap} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="gallery-overlay"><div className="gallery-caption">{img.cap}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
