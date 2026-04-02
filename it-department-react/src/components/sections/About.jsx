import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-block">
            <div className="about-img">
              <img src="/Students_Activity_-_Equilibirium_ICePv44.jpeg" alt="Students Activity - Equilibirium" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }} />
            </div>
            <div className="about-floater">
              <div className="num">A++</div>
              <div className="lbl">NAAC Grade</div>
            </div>
          </div>
          <div className="about-content">
            <div className="section-label">About the Department</div>
            <h2 className="section-title">Where <span className="highlight">Technology</span><br />Meets Excellence</h2>
            <p className="lead">
              Established as part of GGV's School of Studies in Engineering & Technology, the Department of Information Technology has been nurturing technological innovators since 1997. Part of the prestigious Guru Ghasidas Vishwavidyalaya — India's Central University for Chhattisgarh, NAAC-accredited A++.
            </p>
            <p style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.8, marginBottom: 24 }}>
              Our department blends foundational computer science with emerging technologies — from AI and machine learning to cloud computing and cybersecurity — preparing graduates for leadership roles in top global organizations and research institutions.
            </p>
            <div className="vision-mission">
              <div className="vm-card">
                <h4>Vision</h4>
                <p>To be a globally recognized center of excellence in Information Technology education, research, and innovation.</p>
              </div>
              <div className="vm-card">
                <h4>Mission</h4>
                <p>Empowering students with industry-aligned skills, research aptitude, and ethical values to thrive in the digital age.</p>
              </div>
            </div>
            <div className="about-pills">
              <span className="about-pill">AICTE Accredited</span>
              <span className="about-pill">UGC Category I</span>
              <span className="about-pill">Central University</span>
              <span className="about-pill">JEE Main Admissions</span>
              <span className="about-pill">GATE M.Tech</span>
              <span className="about-pill">VRET Ph.D.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
