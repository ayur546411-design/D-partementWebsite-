import React from 'react';

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title" style={{ marginBottom: 48 }}>Contact <span className="highlight">Us</span></h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Department of Information Technology</h3>
            <p className="sub-text">School of Studies in Engineering & Technology, Guru Ghasidas Vishwavidyalaya, Bilaspur</p>
            <div className="cinfo-item">
              <div className="cinfo-icon">📍</div>
              <div className="cinfo-text">
                <div className="cinfo-label">Address</div>
                <div className="cinfo-val">Department of IT, GGV, Koni, Bilaspur<br />Chhattisgarh — 495009, India</div>
              </div>
            </div>
            <div className="cinfo-item">
              <div className="cinfo-icon">📞</div>
              <div className="cinfo-text">
                <div className="cinfo-label">Phone</div>
                <div className="cinfo-val">+91-7752-260-XXX (Dept. Office)</div>
              </div>
            </div>
            <div className="cinfo-item">
              <div className="cinfo-icon">✉️</div>
              <div className="cinfo-text">
                <div className="cinfo-label">Email</div>
                <div className="cinfo-val"><a href="mailto:hodit@ggu.ac.in">hodit@ggu.ac.in</a><br /><a href="mailto:office.it@ggu.ac.in">office.it@ggu.ac.in</a></div>
              </div>
            </div>
            <div className="cinfo-item">
              <div className="cinfo-icon">🌐</div>
              <div className="cinfo-text">
                <div className="cinfo-label">Website</div>
                <div className="cinfo-val"><a href="https://www.ggu.ac.in/department/it/" target="_blank" rel="noopener noreferrer" style={{ color: '#000' }}>www.ggu.ac.in/department/it/</a></div>
              </div>
            </div>
            <div className="cinfo-item">
              <div className="cinfo-icon">🕐</div>
              <div className="cinfo-text">
                <div className="cinfo-label">Office Hours</div>
                <div className="cinfo-val">Mon–Fri: 9:00 AM – 5:00 PM<br />Sat: 9:00 AM – 1:00 PM</div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select required>
                  <option>Admissions Query</option>
                  <option>Research Collaboration</option>
                  <option>Industry Partnership</option>
                  <option>Faculty Information</option>
                  <option>Ph.D. Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Write your message here..." required></textarea>
              </div>
              <button type="submit" className="form-submit">Send Message →</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
