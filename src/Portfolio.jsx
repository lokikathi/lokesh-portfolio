import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";
import profile from "./assets/LokRB.png";
import "./styles/portfolio.css";

export default function Portfolio() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const skills = [
    "Python",
    "MERN Stack",
    "Core Java",
    "SQL",
    "Flutter",
    "Dart",
    "React",
    "Node.js",
    "MongoDB",
  ];

  const projects = [
    {
      title: "Travel Booking Website:",
      desc: "Developed a full-stack bus booking platform using the MERN stack where users can search routes, select seats, and book tickets directly through the website. Implemented user authentication, booking management, and a responsive interface to provide a smooth and scalable travel booking experience.",
      tech: "MongoDB • Express • React • Node.js",
    },
    {
      title: "KGI Bus Tracking App:",
      desc: "Flutter mobile application helping college students track buses with a clean UI and real time data. Contributed as a UI designer in a Flutter-based bus tracking mobile application developed for college students. Designed and implemented user-friendly screens focusing on clean layouts, smooth navigation, and an intuitive user experience.",
      tech: "Flutter • Dart",
    },
  ];

  return (
    <div className={dark ? "portfolio dark" : "portfolio light"}>
      <div className="background">
        <div className="blob purple"></div>
        <div className="blob blue"></div>
      </div>

      <nav className="navbar">
        <img className="logo" src="/log.png" alt="" />

        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Lokesh Karthikeyan
          </motion.h1>

          <p className="subtitle">
            Full-Stack Developer building fast, scalable web apps
          </p>

          <p className="description">
            Passionate full-stack developer specializing in MERN stack, Python
            and Flutter.
          </p>
          <div className="socials">
            <a href="https://github.com/lokikathi">
              <Github />
            </a>

            <a href="https://www.linkedin.com/in/lokeshkarthikeyan/">
              <Linkedin />
            </a>

            <a href="mailto:karthikeyanlokesh7@gmail.com">
              <Mail />
            </a>
          </div>

          <a
            href="/Lokesh_Karthikeyan_.pdf"
            download
            className="resume-btn"
          >
            Download Resume
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hero-image"
        >
          <img src={profile} alt="Lokesh" />
        </motion.div>
      </section>

      <section className="skills">
        <h1><b>Skills:</b></h1>

        <div className="skill-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="projects">
        <h1><b>Projects:</b></h1>
        <br />
        <div className="project-grid">
          {projects.map((project) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={project.title}
              className="project-card"
            >
              <h2><b>{project.title}</b></h2>
              <br />
              <p>{project.desc}</p>
              <br />
              <span>{project.tech}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>

        <p>Feel free to reach out for collaborations or opportunities.</p>

        <a href="mailto:karthikeyanlokesh7@gmail.com" className="email-btn">
          Send Email
        </a>
      </section>
    </div>
  );
}
