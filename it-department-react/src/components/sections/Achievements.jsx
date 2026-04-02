import React from 'react';
import { achievements } from '../../data';

const Achievements = () => {
  return (
    <div className="achievements">
      <div className="container">
        <div className="section-label">Achievements</div>
        <h2 className="section-title" style={{ marginBottom: 36 }}>Milestones & <span className="highlight">Recognition</span></h2>
        <div className="achieve-grid">
          {achievements.map((ach, i) => (
            <div key={i} className="achieve-card">
              <div className="achieve-icon" style={{ background: ach.bg }}>{ach.icon}</div>
              <div className="achieve-text">
                <h4>{ach.title}</h4>
                <p>{ach.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
