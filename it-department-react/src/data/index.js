export const announcements = [
  { text: 'B.Tech IT Admissions 2025-26 Open via JEE Main', isNew: true, highlight: 'New:' },
  { text: 'Tech Symposium "InnoFest 2025" — August 14-15', isNew: false, highlight: 'Event:' },
  { text: 'Department receives DST-SERB funded project', isNew: false, highlight: 'Research:' },
  { text: 'TCS, Infosys, Wipro campus drives announced for Nov 2025', isNew: false, highlight: 'Placement:' },
  { text: 'Cloud Computing & DevOps Bootcamp — July 20-25', isNew: false, highlight: 'Workshop:' },
  { text: 'VRET Applications now accepted. Deadline: Sept 30', isNew: false, highlight: 'Ph.D. 2025:' }
];

export const programs = [
  {
    icon: '🎓', bg: '#FFF0F0',
    degree: 'Undergraduate',
    title: 'B.Tech — Information Technology',
    description: 'A comprehensive 4-year program covering data structures, algorithms, databases, networks, OS, software engineering, and emerging tech tracks like AI/ML and cloud computing.',
    branches: [
      'Information Technology',
      'VFX and Animation',
      'AI and Data Science'
    ],
    duration: '4 Years', semesters: '8 Semesters',
    admission: 'JEE Main',
    seats: '60 Seats'
  },
  {
    icon: '🔬', bg: '#F0F4FF',
    degree: 'Postgraduate',
    title: 'M.Tech — Information Technology',
    description: 'Advanced specialization in computing, research methodology, and specialized electives in AI, cybersecurity, distributed systems, and big data analytics.',
    duration: '2 Years', semesters: '4 Semesters',
    admission: 'GATE',
    seats: '18 Seats'
  },
  {
    icon: '🏆', bg: '#F0FFF4',
    degree: 'Doctoral',
    title: 'Ph.D. — Information Technology',
    description: 'Research-focused doctoral program under eminent faculty, with access to funded projects, publishing in international SCI/Scopus journals, and interdisciplinary collaborations.',
    duration: '3–5 Years', semesters: '',
    admission: 'VRET',
    seats: 'Funded Projects'
  }
];

export const heroStats = [
  { num: '27+', label: 'Years' },
  { num: '400+', label: 'Alumni' },
  { num: '12+', label: 'Faculty' },
  { num: '100+', label: 'Publications' }
];

export const achievements = [
  { icon: '🏅', bg: '#FFF0F0', title: 'NAAC A++ Accreditation (GGV)', desc: "Guru Ghasidas Vishwavidyalaya holds NAAC's highest A++ grade, reflecting the university's commitment to quality education and research output." },
  { icon: '🔬', bg: '#F0F4FF', title: 'DST-SERB Funded Research Projects', desc: "Multiple faculty members have received competitive research grants from DST, SERB, and AICTE for pioneering work in AI, security, and cloud computing." },
  { icon: '📈', bg: '#F0FFF4', title: '4.5 LPA Median CTC (2024)', desc: "B.Tech graduates achieve a median salary of 4.5 LPA with top placements at TCS, Infosys, Wipro, Cognizant, and other leading IT firms." },
  { icon: '🌍', bg: '#FFF8E8', title: 'Global Alumni Network', desc: "Alumni placed at top MNCs worldwide and admitted to prestigious institutions via GATE, GRE, and direct doctoral fellowships at IITs and NITs." },
  { icon: '📰', bg: '#F8F0FF', title: '100+ Annual Publications', desc: "Target of 100+ publications per year in Q1/Q2 SCI/Scopus journals being consistently achieved, improving global academic visibility." },
  { icon: '🤝', bg: '#FFF0F4', title: 'Industry MoUs & Partnerships', desc: "Active MoUs with leading IT companies for internships, placements, sponsored research, and industry-oriented curriculum development." }
];

export const labs = [
  {
    icon: '🤖', bg: 'linear-gradient(135deg, #FFF0F0, #FFE8E8)',
    title: 'AI & Machine Learning Lab',
    desc: 'High-performance GPU workstations with NVIDIA RTX cards for deep learning training and research-grade model development.',
    cap: '30 Students', badgeType: 'new', badgeText: 'New'
  },
  {
    icon: '💻', bg: 'linear-gradient(135deg, #F0F4FF, #E8EFFF)',
    title: 'Advanced Computing Lab',
    desc: 'Modern computing infrastructure with the latest hardware and software for programming courses, algorithms, and systems projects.',
    cap: '60 Students', badgeType: 'active', badgeText: 'Active'
  },
  {
    icon: '🌐', bg: 'linear-gradient(135deg, #F0FFF4, #E4FAEC)',
    title: 'Network & Security Lab',
    desc: 'Dedicated lab with network simulation tools, Cisco equipment, and ethical hacking platforms for cybersecurity training.',
    cap: '24 Students', badgeType: 'active', badgeText: 'Active'
  },
  {
    icon: '☁️', bg: 'linear-gradient(135deg, #FFF8E8, #FFF0D0)',
    title: 'Cloud & DevOps Lab',
    desc: 'AWS, Azure, and GCP educational subscriptions with Docker, Kubernetes, and CI/CD pipeline setups for practical cloud training.',
    cap: '30 Students', badgeType: 'new', badgeText: 'New'
  },
  {
    icon: '📊', bg: 'linear-gradient(135deg, #F8F0FF, #F0E8FF)',
    title: 'Data Science & IoT Lab',
    desc: 'Raspberry Pi and Arduino setups, sensor kits, and data analytics workstations for IoT prototyping and data science projects.',
    cap: '20 Students', badgeType: 'active', badgeText: 'Active'
  },
  {
    icon: '📚', bg: 'linear-gradient(135deg, #F0FFF8, #E0FAF0)',
    title: 'Digital Library & e-Resources',
    desc: 'Access to 8,000+ online journals, IEEE, ACM, Springer digital libraries, and 24/7 internet with NKN connectivity.',
    cap: 'All Students', badgeType: 'active', badgeText: '24/7'
  }
];

export const faculty = [
  {
    name: "Dr. Rohit Raja", desig: "Associate Professor & Head",
    spec: "Image Processing, Signal Processing, AI, Face Recognition",
    initials: "RR", bg: "linear-gradient(135deg, #6B1212, #8B1A1A)",
    imgUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    email: "rohit.raja@ggu.ac.in",
    scholar: "https://scholar.google.co.in/citations?user=Kzs8uNYAAAAJ", profile: "https://ggu.ac.in/department/it/faculty/rohit-raja/"
  },
  {
    name: "Dr. Santosh Soni", desig: "Associate Professor",
    spec: "Wireless Sensor Networks, IoT, Drone Technology, Blockchain",
    initials: "SS", bg: "linear-gradient(135deg, #1D3A5A, #0D1B2A)",
    imgUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    email: "santosh.soni@ggu.ac.in",
    scholar: "https://ggu.ac.in/department/it/faculty/santosh-soni/", profile: "https://ggu.ac.in/department/it/faculty/santosh-soni/"
  },
  {
    name: "Dr. Manoj Kumar", desig: "Associate Professor",
    spec: "Machine Learning, Video Forensics, Crowd Behaviour Analysis",
    initials: "MK", bg: "linear-gradient(135deg, #2D1B06, #5C3A00)",
    imgUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
    email: "manoj.kumar@ggu.ac.in",
    scholar: "https://ggu.ac.in/department/it/faculty/prof-manoj-kumar/", profile: "https://ggu.ac.in/department/it/faculty/prof-manoj-kumar/"
  },
  {
    name: "Mr. Abhishek Jain", desig: "Assistant Professor",
    spec: "Meditation Analysis, 1D-CNN, Deep Learning, Signal Processing",
    initials: "AJ", bg: "linear-gradient(135deg, #1a0a2e, #4a1a6e)",
    imgUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
    email: "abhishek.jain@ggu.ac.in",
    scholar: "#", profile: "https://ggu.ac.in/department/it/staff/teaching/"
  },
  {
    name: "Mr. Amit Khaskalam", desig: "Assistant Professor",
    spec: "Software Engineering, Web Technology, Database Systems",
    initials: "AK", bg: "linear-gradient(135deg, #002020, #005050)",
    imgUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&q=80",
    email: "#",
    scholar: "#", profile: "https://ggu.ac.in/department/it/staff/teaching/"
  },
  {
    name: "Mr. Agnivesh Pandey", desig: "Assistant Professor",
    spec: "Computer Networks, Operating Systems, Distributed Computing",
    initials: "AP", bg: "linear-gradient(135deg, #1a1a00, #4a4a00)",
    imgUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    email: "#",
    scholar: "#", profile: "https://ggu.ac.in/department/it/staff/teaching/"
  }
];

export const sideEvents = [
  { day: "20", mon: "Jul", title: "Cloud & DevOps Bootcamp", desc: "5-day intensive training on AWS, Docker, CI/CD pipelines.", tag: "Workshop" },
  { day: "05", mon: "Aug", title: "GATE 2026 Orientation", desc: "Strategy session and study resources for GATE aspirants.", tag: "Orientation" },
  { day: "01", mon: "Sep", title: "Campus Recruitment Drive 2025", desc: "TCS, Infosys, Wipro visits. Pre-registration mandatory.", tag: "Placement" },
  { day: "30", mon: "Sep", title: "Ph.D. Admission Deadline (VRET)", desc: "Last date to apply for Doctoral programs for 2025–26.", tag: "Admissions" },
  { day: "10", mon: "Oct", title: "Cybersecurity Awareness Week", desc: "CTF competition, guest lectures, and security workshops.", tag: "Seminar" }
];

export const slidesInfo = [
  { imgUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", cat: "Annual Event", title: "InnoFest 2024 — Technical Symposium", desc: "2-day national-level tech fest with hackathon, paper presentations, coding contests & industry talks.", date: "AUG 14–15, 2024" },
  { imgUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80", cat: "Workshop", title: "Cloud Computing & DevOps Bootcamp", desc: "5-day intensive workshop on AWS, Docker, Kubernetes conducted in partnership with industry experts.", date: "JULY 20–25, 2024" },
  { imgUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80", cat: "FDP", title: "Faculty Development: Generative AI", desc: "One-week AICTE-sponsored FDP on Generative AI, LLMs, and pedagogical applications for faculty.", date: "MAR 10–15, 2024" },
  { imgUrl: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80", cat: "Placement", title: "Campus Placement Drive 2024", desc: "TCS, Infosys, Wipro, Cognizant, and L&T Technology visited campus. 80%+ students placed.", date: "NOV 2024" },
  { imgUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80", cat: "Seminar", title: "Cybersecurity Awareness Seminar", desc: "Guest lectures by CERT-IN experts and industry practitioners on ethical hacking and digital safety.", date: "FEB 2024" },
  { imgUrl: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80", cat: "Convocation", title: "Annual Convocation & Awards Ceremony", desc: "Celebrating the graduating batch of 2024 with merit awards, gold medals, and alumni recognition.", date: "JAN 2024" }
];

export const alumni = [
  {
    av: "RP", name: "Rohit Patel", role: "Software Engineer", co: "Google, Hyderabad", batch: "Batch of 2019",
    quote: "GGV IT gave me the foundation to crack Google. The faculty's guidance made all the difference."
  },
  {
    av: "PS", name: "Priya Sahu", role: "Data Scientist", co: "Infosys Research Lab", batch: "Batch of 2018",
    quote: "The ML lab and research exposure at GGV IT prepared me for real-world data challenges."
  },
  {
    av: "AK", name: "Amit Kumar", role: "Ph.D. Scholar", co: "IIT Bombay", batch: "M.Tech 2021",
    quote: "My M.Tech research experience at GGV directly led to my admission at IIT Bombay."
  },
  {
    av: "SK", name: "Sneha Kashyap", role: "Cloud Architect", co: "Amazon AWS, Bengaluru", batch: "Batch of 2017",
    quote: "The practical labs and industry-oriented curriculum at GGV set me apart in interviews."
  },
  {
    av: "VT", name: "Vikram Tiwari", role: "Security Analyst", co: "Wipro Cyber Division", batch: "Batch of 2020",
    quote: "The networking and security lab at GGV gave me hands-on skills that helped me excel."
  },
  {
    av: "DN", name: "Deepa Nair", role: "Product Manager", co: "Microsoft India", batch: "Batch of 2016",
    quote: "The holistic education at GGV IT honed both my technical and leadership capabilities."
  }
];

export const galleryImages = [
  { imgUrl: "/gate.jpg", cap: "GGV Campus — IT Block" },
  { imgUrl: "/slider2.jpg", cap: "AI & ML Research Lab" },
  { imgUrl: "/Students_Activity_-_Equilibirium_ICePv44.jpeg", cap: "InnoFest 2024 Keynote" },
  { imgUrl: "/slider3.jpg", cap: "Coding Lab Sessions" },
  { imgUrl: "/slider4.jpg", cap: "Convocation 2024" },
  { imgUrl: "/green_campus.jpeg", cap: "Network Security Lab" },
  { imgUrl: "/slider1.jpg", cap: "Seminar on Data Science" }
];

export const notices = [
  { isNew: true, title: "B.Tech IT Lateral Entry Admissions 2025-26 — Vacant Seat Details Released", meta: "Admissions", date: "26 March 2025" },
  { isNew: true, title: "Even Semester End Examination Timetable 2025-26 (B.Tech & M.Tech)", meta: "Examination", date: "20 March 2025" },
  { isNew: true, title: "Ph.D. VRET 2025 — Online Application Form Available; Deadline September 30", meta: "Ph.D. Admissions", date: "15 March 2025" },
  { isNew: false, title: "Course Selection & Exam Form Registration — UG III, V, VII, IX Semester", meta: "Academic", date: "10 March 2025" },
  { isNew: false, title: "Campus Recruitment Drive 2025 — Pre-Registration Deadline for IT Students", meta: "Placement", date: "01 March 2025" },
  { isNew: false, title: "Award of Ph.D. Degree — Department of Computer Science & Information Technology", meta: "PhD Award", date: "15 Feb 2025" },
  { isNew: false, title: "Faculty Development Programme on Generative AI — Registration Open", meta: "FDP", date: "01 Feb 2025" }
];
