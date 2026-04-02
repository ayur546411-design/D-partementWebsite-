import React from 'react';
import { labs } from '../../data';

const Facilities = () => {
  return (
    <section id="facilities">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-label">Infrastructure</div>
            <h2 className="section-title">World-Class <span className="highlight">Labs</span> & Facilities</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>State-of-the-art computing infrastructure enabling hands-on learning and cutting-edge research.</p>
          </div>
        </div>
        <div className="labs-grid">
          {labs.map((lab, i) => (
            <div key={i} className="lab-card">
              <div className="lab-header" style={{ background: lab.bg }}>
                <span className="lab-icon">{lab.icon}</span>
                <h4>{lab.title}</h4>
                <p>{lab.desc}</p>
              </div>
              <div className="lab-footer">
                <div className="lab-cap" dangerouslySetInnerHTML={{ __html: `Capacity: <strong>${lab.cap}</strong>` }}></div>
                <span className={`lab-badge badge-${lab.badgeType}`}>{lab.badgeText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
