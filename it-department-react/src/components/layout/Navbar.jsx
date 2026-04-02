import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-wrapper">
      <div className="header-brand-bar">
        <a className="nav-brand" href="#home" style={{ textDecoration: 'none' }}>
          <div className="nav-logo" style={{ border: 'none', background: 'transparent', padding: 0, borderRadius: 0 }}>
            <img src="/GGV-logo.png" alt="GGV Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div className="nav-text">
            <div className="dept">Department of Information Technology</div>
            <div className="univ">Guru Ghasidas Vishwavidyalaya, Bilaspur | School of Studies of Engineering and Technology</div>
          </div>
        </a>
      </div>

      <nav>
        <div className="nav-inner">
          <div className="nav-links" style={{ display: isOpen ? 'flex' : undefined, flexDirection: isOpen ? 'column' : undefined, position: isOpen ? 'absolute' : undefined, top: isOpen ? '100%' : undefined, left: isOpen ? '0' : undefined, right: isOpen ? '0' : undefined, background: isOpen ? 'var(--navy)' : undefined, padding: isOpen ? '20px' : undefined, boxShadow: isOpen ? '0 10px 20px rgba(0,0,0,0.2)' : undefined, width: '100%' }}>
            <a href="#home" onClick={() => setIsOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#programs" onClick={() => setIsOpen(false)}>Programs</a>
            <a href="#research" onClick={() => setIsOpen(false)}>Research</a>
            <a href="#events" onClick={() => setIsOpen(false)}>Events</a>
            <a href="#facilities" onClick={() => setIsOpen(false)}>Labs</a>
            <a href="#notices" onClick={() => setIsOpen(false)}>Notices</a>
            <a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>Contact Us</a>
          </div>
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none' /* Will be overridden by CSS media query when needed */ }}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
