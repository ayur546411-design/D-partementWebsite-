import React from 'react';
import { alumni } from '../../data';

const Alumni = () => {
  return (
    <section id="alumni">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-label" style={{ color: 'var(--cyan)' }}>Our Alumni</div>
            <h2 className="section-title">Making a <span style={{ color: 'var(--gold-light)' }}>Global Impact</span></h2>
            <p className="section-sub">Our graduates are excelling at top-tier organizations and institutions worldwide.</p>
          </div>
        </div>
        <div className="alumni-scroll">
          {alumni.map((al, i) => (
            <div key={i} className="alumni-card">
              <div className="alumni-av">{al.av}</div>
              <h4>{al.name}</h4>
              <div className="role">{al.role}</div>
              <div className="co">{al.co}</div>
              <div className="batch">{al.batch}</div>
              <div className="alumni-quote">"{al.quote}"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
