import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Gate Image Banner */}
      <div className="footer-gate-banner" style={{ width: '100%', overflow: 'hidden', borderBottom: '4px solid var(--maroon)' }}>
        <img src="/gate.jpg" alt="GGV Campus Gate" style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
      </div>
      
      <div className="footer-inner" style={{ paddingTop: '60px' }}>
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/GGV-logo.png" alt="GGV Logo" style={{ width: '64px', height: '64px', objectFit: 'contain', background: '#fff', borderRadius: '50%', padding: '4px' }} />
            <div className="footer-logo-text">
              <div className="t1">Dept. of Information Technology</div>
              <div className="t2">Guru Ghasidas Vishwavidyalaya</div>
            </div>
          </div>
          <p className="footer-about">
            Part of Guru Ghasidas Vishwavidyalaya (GGV) — a NAAC A++ accredited Central University of India, Bilaspur, Chhattisgarh. Dedicated to excellence in IT education, research, and innovation since 1997.
          </p>
          <div className="footer-social">
            <a href="#" className="social-btn" title="Facebook">f</a>
            <a href="#" className="social-btn" title="Twitter">𝕏</a>
            <a href="#" className="social-btn" title="LinkedIn">in</a>
            <a href="#" className="social-btn" title="YouTube">▶</a>
            <a href="#" className="social-btn" title="Instagram">⊙</a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Academics</h5>
          <div className="footer-links">
            <a href="#programs">B.Tech IT</a>
            <a href="#programs">M.Tech IT</a>
            <a href="#programs">Ph.D. Program</a>
            <a href="#home">Academic Calendar</a>
            <a href="#home">Course Syllabus</a>
            <a href="#home">Examination Schedule</a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Research</h5>
          <div className="footer-links">
            <a href="#research">Research Areas</a>
            <a href="#research">Publications</a>
            <a href="#research">Funded Projects</a>
            <a href="#home">Ph.D. Scholars</a>
            <a href="#home">Collaborations</a>
            <a href="#home">Patents & IP</a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Students</h5>
          <div className="footer-links">
            <a href="#notices">Notices</a>
            <a href="#events">Events</a>
            <a href="#home">Placement Cell</a>
            <a href="#home">Student Portal</a>
            <a href="#home">Scholarship Info</a>
            <a href="#contact">Contact Faculty</a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: '40px auto 0', padding: '0 32px' }}>
        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)' }} />
      </div>
      <div className="footer-bottom" style={{ marginTop: 0, paddingTop: 20, paddingBottom: 20 }}>
        <span>© {new Date().getFullYear()} Department of Information Technology, <a href="https://www.ggu.ac.in" target="_blank" rel="noopener noreferrer">Guru Ghasidas Vishwavidyalaya</a>, Bilaspur, C.G.</span>
        <span>Designed for the IT Department, GGV</span>
      </div>
    </footer>
  );
};

export default Footer;
