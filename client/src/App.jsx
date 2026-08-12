import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55 },
};
const interests = [
  {
    number: "01",
    title: "Infrastructure automation",
    text: "Automating repeatable operations and reducing manual work across reliable Linux environments.",
  },
  {
    number: "02",
    title: "Containers & orchestration",
    text: "Building portable systems with Docker and exploring scalable orchestration with Kubernetes.",
  },
  {
    number: "03",
    title: "CI/CD engineering",
    text: "Designing delivery pipelines with Jenkins and GitHub Actions to ship changes confidently.",
  },
];
const projects = [
  { index: "01", status: "Completed", title: "Server Health Checker System", date: "June 2026 - July 2026", stack: ["Linux", "Shell Scripting", "Ubuntu"], description: "An automated monitoring solution that keeps a constant eye on critical server resources and surfaces issues before they become failures.", points: ["Monitors CPU usage, memory utilization, disk space, and system uptime in real time.", "Generates alerts whenever predefined resource thresholds are exceeded.", "Uses a modular Bash architecture designed to scale across multiple Ubuntu servers."], link: "https://github.com/sagar9006/server-health-checker" },
  { index: "02", status: "In progress", title: "E-Commerce Website", date: "June 2026 - Present", stack: ["JavaScript", "PostgreSQL", "Firebase", "Docker"], description: "A containerized full-stack commerce platform delivering a smooth journey from product discovery through payment and order tracking.", points: ["Built product listings, cart management, order tracking, and Razorpay payment integration.", "Uses PostgreSQL for structured commerce data and Firebase for real-time inventory updates.", "Runs in consistent, reproducible development and production environments with Docker."] },
];
const skills = [
  { label: "Languages", items: ["C++", "JavaScript (ES6+)", "PHP"] },
  { label: "Web technologies", items: ["HTML5", "CSS3", "REST APIs", "Responsive Web Design"] },
  { label: "DevOps & tools", items: ["Linux", "Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins", "Git", "GitHub", "GitHub Actions"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "Firebase"] },
];
const whatsappUrl = `https://wa.me/919006164438?text=${encodeURIComponent("Hi Sagar, I visited your portfolio and would like to connect.")}`;

export default function App() {
  const [dark, setDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const marqueeX = useTransform(scrollYProgress, [0.05, 0.8], ["8%", "-38%"]);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  useEffect(() => {
    const trackPointer = (event) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", trackPointer, { passive: true });
    return () => window.removeEventListener("pointermove", trackPointer);
  }, []);

  const toggleTheme = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const wave = document.createElement("span");
    const size = Math.hypot(window.innerWidth, window.innerHeight) * 2;
    wave.className = `theme-wave ${dark ? "to-light" : "to-dark"}`;
    Object.assign(wave.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${rect.left + rect.width / 2}px`,
      top: `${rect.top + rect.height / 2}px`,
    });
    document.body.appendChild(wave);
    requestAnimationFrame(() => wave.classList.add("is-active"));
    window.setTimeout(() => setDark((value) => !value), 280);
    window.setTimeout(() => wave.remove(), 720);
  };

  return (
    <div className="app-root">
      <div className="noise" aria-hidden="true"></div>
      <div className="cursor-glow" aria-hidden="true"></div>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Sagar Kumar Soni — home">
          SKS<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            <span className="theme-icon">{dark ? "☀" : "☾"}</span>
          </button>
          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            Let’s talk <span>↗</span>
          </a>
        </div>
      </nav>
      <Hero />
      <motion.a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Sagar on WhatsApp" initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.1, type: "spring" }} whileHover={{ scale: 1.12, rotate: 6 }}><span>WA</span><small>Chat</small></motion.a>
      <main>
        <div className="marquee-wrap" aria-hidden="true">
          <motion.div className="marquee" style={{ x: marqueeX }}>
            CREATE&nbsp;·&nbsp; EXPLORE&nbsp;·&nbsp; BUILD&nbsp;·&nbsp;
            REPEAT&nbsp;·&nbsp; CREATE&nbsp;·&nbsp; EXPLORE&nbsp;·&nbsp;
          </motion.div>
        </div>
        <motion.section id="about" className="section about" {...reveal}>
          <p className="eyebrow">About me</p>
          <div className="section-split">
            <h2>
              A learner at heart.
              <br />
              <em>A builder by choice.</em>
            </h2>
            <div className="about-copy">
              <p>
                I'm Sagar Kumar Soni, a DevOps engineer and MCA candidate based
                in Phagwara, Punjab, focused on automation, infrastructure, and
                reliable software delivery.
              </p>
              <p>
                I work across Linux, containers, CI/CD, source control, and web
                technologies to turn working code into dependable systems that
                are easier to deploy, monitor, and scale.
              </p>
              <a
                className="text-link"
                href="https://www.linkedin.com/in/sagar-soni-056826293/"
                target="_blank"
                rel="noreferrer"
              >
                More about me on LinkedIn <span>↗</span>
              </a>
            </div>
          </div>
        </motion.section>
        <motion.section id="experience" className="section experience" {...reveal}>
          <div className="experience-head">
            <div><p className="eyebrow">Professional experience</p><h2>Where engineering<br /><em>met delivery.</em></h2></div>
            <span className="experience-count">01 role</span>
          </div>
          <motion.article className="experience-card" initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .7 }}>
            <div className="experience-company"><span className="company-mark">KC</span><div><h3>KubCubs Ltd.</h3><p>Remote</p></div></div>
            <div className="experience-role"><div className="role-heading"><div><p className="eyebrow">Internship</p><h3>Frontend Developer Intern</h3></div><time>Aug 2024 - Jan 2025</time></div>
              <ul>
                <li>Developed and maintained responsive web pages using HTML and CSS, ensuring cross-browser compatibility and modern UI standards across screen sizes.</li>
                <li>Collaborated with backend teams to integrate REST APIs, improving dynamic data rendering and overall application performance.</li>
                <li>Contributed to CI/CD workflows using Git and GitHub Actions, supporting automated builds and deployments in an agile environment.</li>
                <li>Helped containerize frontend services with Docker to maintain consistent development and staging environments across the team.</li>
              </ul>
              <div className="experience-tags"><span>HTML & CSS</span><span>REST APIs</span><span>GitHub Actions</span><span>Docker</span><span>Agile</span></div>
            </div>
          </motion.article>
        </motion.section>
        <motion.section id="focus" className="section focus" {...reveal}>
          <div className="section-heading">
            <div>
              <p className="eyebrow">What drives me</p>
              <h2>Areas of focus</h2>
            </div>
            <p>
              Building a broad technology foundation, one meaningful challenge
              at a time.
            </p>
          </div>
          <div className="focus-grid">
            {interests.map((item, index) => (
              <motion.article
                className="focus-card"
                key={item.title}
                initial={{ opacity: 0, y: 90, rotate: index % 2 ? 4 : -4 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -14, rotate: index === 1 ? 1.5 : -1.5 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  type: "spring",
                }}
              >
                <span className="card-number">{item.number}</span>
                <div
                  className={`card-mark mark-${index + 1}`}
                  aria-hidden="true"
                ></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>
        <motion.section id="projects" className="section projects" {...reveal}>
          <div className="section-heading projects-heading"><div><p className="eyebrow">Selected work</p><h2>Systems I've<br /><em>built.</em></h2></div><p>Practical projects focused on reliability, automation, and scalable digital infrastructure.</p></div>
          <div className="project-list">
            {projects.map((project, index) => <motion.article className="project-card" key={project.title} initial={{ opacity: 0, x: index % 2 ? 100 : -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .75, ease: [0.16, 1, .3, 1] }}>
              <div className="project-meta"><span>{project.index}</span><span className={`project-status ${index ? "active" : ""}`}><i></i>{project.status}</span></div>
              <div className="project-main"><div><p className="project-date">{project.date}</p><h3>{project.title}</h3><div className="project-stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className="project-copy"><p>{project.description}</p><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>{project.link && <a href={project.link} target="_blank" rel="noreferrer">View source on GitHub <span>-&gt;</span></a>}</div></div>
            </motion.article>)}
          </div>
        </motion.section>
        <motion.section id="journey" className="section journey" {...reveal}>
          <p className="eyebrow">The journey so far</p>
          <div className="journey-grid">
            <h2>
              Learning with
              <br />
              <em>purpose.</em>
            </h2>
            <div className="timeline">
              <article>
                <span>2025 - 2027</span>
                <div>
                  <h3>Master of Computer Applications (MCA)</h3>
                  <p>Lovely Professional University · Phagwara, Punjab</p>
                </div>
              </article>
              <article>
                <span>2022 - 2025</span>
                <div>
                  <h3>Bachelor of Computer Applications (BCA)</h3>
                  <p>Arka Jain University · Jamshedpur, Jharkhand</p>
                </div>
              </article>
              <article>
                <span>Next</span>
                <div>
                  <h3>Open to what’s ahead</h3>
                  <p>
                    New collaborations, practical projects, and opportunities to
                    grow.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </motion.section>
        <motion.section id="skills" className="section skills" {...reveal}>
          <div className="skills-intro"><p className="eyebrow">Technical toolkit</p><h2>Tools I use to<br /><em>ship reliably.</em></h2></div>
          <div className="skills-list">{skills.map((group, groupIndex) => <motion.article key={group.label} initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: groupIndex * .1 }}><span className="skill-index">0{groupIndex + 1}</span><h3>{group.label}</h3><div>{group.items.map((skill) => <motion.span key={skill} whileHover={{ y: -4, scale: 1.04 }}>{skill}</motion.span>)}</div></motion.article>)}</div>
        </motion.section>
        <Contact />
      </main>
      <footer>
        <a className="brand" href="#top">
          SKS<span>.</span>
        </a>
        <p>Designed for Sagar Kumar Soni · {new Date().getFullYear()}</p>
        <a className="back-top" href="#top" aria-label="Back to top">
          <span>↑</span>
          <small>Back to top</small>
        </a>
      </footer>
    </div>
  );
}
