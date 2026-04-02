import React from 'react';
import { programs } from '../../data';

const Programs = () => {
  return (
    <section id="programs">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-label">Academic Programs</div>
            <h2 className="section-title">Our <span className="highlight">Degree</span> Programs</h2>
          </div>
          <a href="#programs" className="view-all">View Curriculum →</a>
        </div>
        <div className="programs-grid">
          {programs.map((prog, i) => (
            <div key={i} className="prog-card">
              <div className="prog-card-top">
                <div className="prog-icon" style={{ background: prog.bg }}>{prog.icon}</div>
                <div className="prog-degree">{prog.degree}</div>
                <h3>{prog.title}</h3>
                <p>{prog.description}</p>
                {prog.branches && (
                  <div className="prog-branches">
                    <h4>Branches Offered:</h4>
                    <ul>
                      {prog.branches.map((branch, idx) => (
                        <li key={idx}>{idx + 1}) {branch}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="prog-card-bottom">
                <div className="prog-meta">⏱ <strong>{prog.duration}</strong> {prog.semesters && `· ${prog.semesters}`}</div>
                <div className="prog-meta">📝 <strong>{prog.admission}</strong> Admission</div>
                <div className="prog-meta">👥 <strong>{prog.seats}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
