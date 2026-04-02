import React from 'react';
import { sideEvents } from '../../data';

const Events = () => {
  return (
    <section id="events">
      <div className="container">
        <div className="section-header">
          <div className="section-header-left">
            <div className="section-label">Events & Activities</div>
            <h2 className="section-title">Upcoming <span className="highlight">Events</span></h2>
          </div>
          <a href="#events" className="view-all">All Events →</a>
        </div>
        <div className="events-layout">
          <div className="event-featured">
            <div className="event-banner">
              <div className="event-banner-cat">📌 Featured Event</div>
              <h3>InnoFest 2025 — National Tech Symposium</h3>
              <p>GGV's annual flagship technology festival brings together students, faculty, industry experts, and innovators for two days of competitions, workshops, and knowledge exchange. Categories include hackathon, paper presentation, coding sprint, and robotics.</p>
              <div className="event-meta-row">
                <div className="event-meta-item">📅 <span>August 14–15, 2025</span></div>
                <div className="event-meta-item">📍 <span>GGV Campus, Bilaspur</span></div>
                <div className="event-meta-item">👥 <span>500+ Expected Participants</span></div>
              </div>
            </div>
            <div className="event-body">
              <div className="event-speakers">
                <h4>Keynote Speakers (Confirmed)</h4>
                <div className="speakers-row">
                  <div className="speaker">
                    <div className="speaker-av">AK</div>
                    <div>
                      <div className="speaker-name">Prof. A. Kumar</div>
                      <div className="speaker-role">IIT Delhi — AI Research</div>
                    </div>
                  </div>
                  <div className="speaker">
                    <div className="speaker-av">SR</div>
                    <div>
                      <div className="speaker-name">Dr. S. Rao</div>
                      <div className="speaker-role">TCS Research Lab</div>
                    </div>
                  </div>
                  <div className="speaker">
                    <div className="speaker-av">MD</div>
                    <div>
                      <div className="speaker-name">Ms. M. Dubey</div>
                      <div className="speaker-role">Microsoft India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="events-sidebar">
            {sideEvents.map((ev, i) => (
              <div key={i} className="event-mini">
                <div className="event-date-box">
                  <span className="day">{ev.day}</span>
                  <span className="mon">{ev.mon}</span>
                </div>
                <div className="event-mini-content">
                  <h5>{ev.title}</h5>
                  <p>{ev.desc}</p>
                  <span className="e-tag">{ev.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
