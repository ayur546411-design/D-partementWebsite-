import React from 'react';
import { notices } from '../../data';

const Notices = () => {
  return (
    <section id="notices">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-label">Notices & Updates</div>
            <h2 className="section-title">Official <span className="highlight">Notices</span></h2>
          </div>
          <a href="https://www.ggu.ac.in" target="_blank" rel="noopener noreferrer" className="view-all">GGV Official Portal →</a>
        </div>
        <div className="notices-layout">
          <div className="notice-board">
            <div className="notice-board-header">
              <h3>📋 Department Notices</h3>
              <a href="#notices" className="view-all" style={{ fontSize: 12, padding: '6px 12px' }}>Archive →</a>
            </div>
            {notices.map((notice, i) => (
              <div key={i} className="notice-item">
                <div className={`notice-indicator ${notice.isNew ? 'ni-new' : 'ni-old'}`}></div>
                <div>
                  <div className="notice-title">{notice.title}</div>
                  <div className="notice-meta"><span className="notice-type">{notice.meta}</span> · {notice.date}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="quick-links">
              <h3>🔗 Quick Links</h3>
              <div className="qlink-list">
                <a href="https://www.ggu.ac.in" target="_blank" rel="noopener noreferrer" className="qlink"><span>🌐</span> GGV Official Website</a>
                <a href="#notices" className="qlink"><span>📝</span> Examination Portal</a>
                <a href="#notices" className="qlink"><span>📚</span> Academic Calendar</a>
                <a href="#notices" className="qlink"><span>🎓</span> Admission Process</a>
                <a href="#notices" className="qlink"><span>💼</span> Placement Cell</a>
                <a href="#notices" className="qlink"><span>🔬</span> Research Portal</a>
                <a href="#notices" className="qlink"><span>📖</span> Digital Library</a>
                <a href="#notices" className="qlink"><span>📋</span> Syllabus Download</a>
                <a href="#notices" className="qlink"><span>🏅</span> Student Grievance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notices;
