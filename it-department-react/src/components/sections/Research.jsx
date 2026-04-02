import React from 'react';

const researchPapers = [
  { title: "Desktop PC Configuration IOT WSN Lab", url: "https://ggu.ac.in/media/attachments/research/IOT_WSN_Lab_PC_Configuration.pdf", type: "Laboratory" },
  { title: "IOT Kit Configuration", url: "https://ggu.ac.in/media/attachments/research/IOT_Kit_Configuration.pdf", type: "Laboratory" },
  { title: "book / chapters published 21-22", url: "https://ggu.ac.in/media/attachments/research/book__chapters_published_21-22_2.pdf", type: "Publication" },
  { title: "Patents list 21-22", url: "https://ggu.ac.in/media/attachments/research/patents_certificate_21-22_1_M9gJpGi.pdf", type: "Patent" },
  { title: "book / chapters published 20-21", url: "https://ggu.ac.in/media/attachments/research/03-book_chapters_published_20-21.pdf", type: "Publication" },
  { title: "Awards 20-21", url: "https://ggu.ac.in/media/attachments/research/02-Awards_20-21_86hvMgV.pdf", type: "Award" },
  { title: "Patents 20-21", url: "https://ggu.ac.in/media/attachments/research/01-patents_20-21_1.pdf", type: "Patent" },
];

const Research = () => {
  return (
    <section id="research" className="research-section">
      {/* Background Video */}
      <div className="research-video-bg">
        <video autoPlay loop muted playsInline className="research-video">
          <source src="/video1.mp4" type="video/mp4" />
        </video>
        <div className="research-overlay"></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <div className="section-header-left">
            <div className="section-label" style={{ color: 'var(--cyan)' }}>Research & Innovation</div>
            <h2 className="section-title" style={{ color: 'white' }}>Advancing Knowledge<br /><span style={{ color: 'var(--gold-light)' }}>Through Research</span></h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>Explore our latest publications, laboratory configurations, awards, and patents from the GGV Information Technology Department.</p>
          </div>
          <a href="https://ggu.ac.in/department/it/research/" target="_blank" rel="noreferrer" className="view-all-white" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>Official IT Research →</a>
        </div>
        
        <div className="research-marquee-container">
          <div className="research-marquee-track">
            {/* Duplicated for seamless auto-scrolling */}
            {[...researchPapers, ...researchPapers].map((paper, idx) => (
              <a key={idx} href={paper.url} target="_blank" rel="noreferrer" className="paper-card">
                <div className="paper-type">{paper.type}</div>
                <h4 className="paper-title">{paper.title}</h4>
                <div className="paper-link" style={{ color: 'var(--gold-light)', fontSize: '12px', marginTop: '16px', fontWeight: 'bold' }}>View Document →</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
