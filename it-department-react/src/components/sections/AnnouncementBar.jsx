import React from 'react';
import { announcements } from '../../data';

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-track" id="announceTrack">
        {announcements.map((a, i) => (
          <div key={`a1-${i}`} className="announcement-item">
            <div className="dot"></div>
            <strong>{a.highlight}</strong> {a.text}
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {announcements.map((a, i) => (
          <div key={`a2-${i}`} className="announcement-item">
            <div className="dot"></div>
            <strong>{a.highlight}</strong> {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
