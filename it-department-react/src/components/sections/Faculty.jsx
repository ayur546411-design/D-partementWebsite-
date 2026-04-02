import React from 'react';
import { faculty } from '../../data';

const Faculty = () => {
  return (
    <section id="faculty">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-label">Our Faculty</div>
            <h2 className="section-title">Meet Our <span className="highlight">Expert</span> Faculty</h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>Distinguished educators and researchers dedicated to academic excellence and innovation.</p>
          </div>
          <a href="#faculty" className="view-all">Full Faculty List →</a>
        </div>
        <div className="faculty-grid">
          {faculty.map((member, i) => (
            <div key={i} className="faculty-card">
              <div className="faculty-avatar" style={{ background: member.bg }}>
                <img src={member.imgUrl} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
                <div className="faculty-initials">{member.initials}</div>
              </div>
              <div className="faculty-info">
                <h4>{member.name}</h4>
                <div className="desig">{member.desig}</div>
                <div className="spec">{member.spec}</div>
                <div className="faculty-links">
                  <a className="faculty-link" href={member.email.startsWith('#') ? '#' : `mailto:${member.email}`} title="Email">✉</a>
                  <a className="faculty-link" href={member.scholar} target="_blank" rel="noopener noreferrer" title="Google Scholar">📖</a>
                  <a className="faculty-link" href={member.profile} target="_blank" rel="noopener noreferrer" title="Profile">👤</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
