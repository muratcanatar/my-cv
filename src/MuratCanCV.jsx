import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MuratCanCV() {
  const [datetime, setDatetime] = useState(new Date());
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setDatetime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: "React", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "Python", level: 75 },
    { name: "C++", level: 85 },
    { name: "Git", level: 95 },
    { name: "UI/UX", level: 90 }
  ];

  const formattedTime = datetime.toLocaleTimeString();
  const formattedDate = datetime.toLocaleDateString();
  const theme = darkMode ? 'bg-dark text-light' : 'bg-white text-dark';
  const softBg = darkMode
    ? 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)'
    : 'linear-gradient(135deg, #f0f4f8, #e6f0fa)';
  const borderColor = darkMode ? 'border-secondary' : 'border';

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const sections = [
    {
      title: "Hakkımda",
      content: (
        <p>
          Teknolojiye olan tutkum ve öğrenmeye olan merakım, yazılım geliştirme alanındaki yeteneklerimi derinleştirmeme neden oldu. React, Python ve C++ gibi teknolojilerle projeler geliştirerek özellikle frontend mühendisliği ve web geliştirme üzerine odaklandım. Ekip çalışmasına önem veririm, sabırlı ve çözüm odaklıyım.
        </p>
      )
    },
    {
      title: "Eğitim",
      content: (
        <>
          <p>
            <strong>Gazipaşa Fen Lisesi</strong><br/>
            Sayısal - <span className={darkMode ? 'text-light' : 'text-muted'}>2017 - 2021</span>
          </p>
          <p>
            <strong>İstanbul Teknik Üniversitesi</strong><br/>
            Bilgisayar Mühendisliği — <span className={darkMode ? 'text-light' : 'text-muted'}>2021 - 2026 (Beklenen)</span>
          </p>
        </>
      )
    },
    {
      title: "Deneyim",
      content: (
        <ul className="list-group">
          {[
            { title: "Parkera", role: "Web Development Intern (Gönüllü)", date: "Temmuz 2024 - Ağustos 2024", desc: "HTML, CSS, JavaScript ile UI geliştirdim. Kullanıcı deneyimini iyileştirmek için ekip içinde çalıştım." },
            { title: "Atalan UAV Team", role: "Head of Software Dept.", date: "Şubat 2024 - Devam ediyor", desc: "Otonom uçuş ve görüntü işleme algoritmaları geliştiriyorum. Takımı koordine ediyorum." },
            { title: "Derspresso.com", role: "İçerik Üretici (Freelance)", date: "Ocak 2022 - Haziran 2022", desc: "Matematik içerikleri ve site tasarımı üzerine çalıştım." }
          ].map((job, i) => (
            <li key={i} className={`list-group-item ${theme} ${borderColor}`}>
              <strong>{job.title}</strong> – {job.role}<br/>
              <small className="text-muted">{job.date}</small>
              <p className="mb-0">{job.desc}</p>
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Yetenekler",
      content: (
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-6 mb-3" key={index}>
              <label className="fw-semibold">{skill.name}</label>
              <div className="progress" style={{ height: '20px' }}>
                <div
                  className={`progress-bar ${darkMode ? 'bg-warning text-dark' : 'bg-success'}`}
                  role="progressbar"
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Sertifikalar",
      content: (
        <ul>
          <li>React Workshop - Techcareer.net</li>
          <li>Beginner Frontend Dev Path - Patika.dev</li>
          <li>C++ Data Structures - Udemy</li>
          <li>React 101-401 - Turkcell Geleceği Yazanlar</li>
          <li>Python 101-102 - Turkcell Geleceği Yazanlar</li>
          <li>C# ile Algoritma - Turkcell Geleceği Yazanlar</li>
        </ul>
      )
    },
    {
      title: "Diller",
      content: (
        <ul>
          <li>Türkçe — Ana dil</li>
          <li>İngilizce — C1</li>
          <li>İspanyolca — Başlangıç</li>
        </ul>
      )
    },
    {
      title: "Kulüpler & Gönüllülük",
      content: (
        <ul>
          <li>İTÜ Satranç Kulübü — Üye</li>
          <li>İTÜ Blockchain Kulübü — Üye</li>
        </ul>
      )
    }
  ];

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: '4px',
          backgroundColor: darkMode ? '#ffc107' : '#007bff',
          zIndex: 9999,
          transition: 'width 0.1s ease-out'
        }}
      />

      <motion.div
        className="container-fluid p-4 min-vh-100"
        style={{ background: softBg, position: 'relative' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="position-absolute top-0 end-0 m-3 p-2 bg-white border rounded shadow-sm text-end"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-muted small fw-bold">Şu anki saat:</div>
          <div className="fw-semibold">{formattedTime}</div>
          <div className="text-muted">{formattedDate}</div>
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-sm btn-outline-primary mt-2 d-flex align-items-center gap-2"
          >
            <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
            {darkMode ? 'Açık Moda Geç' : 'Karanlık Moda Geç'}
          </motion.button>
        </motion.div>

        <motion.div
          className={`${theme} rounded shadow p-4 p-md-5 w-100`}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <motion.header className="mb-4 text-center" variants={fadeInUp} custom={1.2}>
            <h1 className="display-4 fw-bold">Murat Can Atar</h1>
            <h5 className="text-muted">Software Developer</h5>
          </motion.header>

          {sections.map((section, i) => (
            <motion.section
              key={i}
              className="mb-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={1.4 + i * 0.2}
            >
              <h3 className={`h5 border-bottom pb-2 ${darkMode ? 'text-warning' : 'text-primary'}`}>{section.title}</h3>
              {section.content}
            </motion.section>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
