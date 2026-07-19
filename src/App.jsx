import React from 'react';
import Skills from './components/Skills';

// ============================================================
// EDIT ME — everything below is sample content. Replace freely.
// ============================================================

const PROFILE = {
  name: 'Samudrala Kranthi Kumar',
  role: 'ML Engineer / AI Student',
  tagline: 'ARTIFICIAL INTELLIGENCE | MACHINE LEARNING',
  summary:
    'Aspiring Software Engineer skilled in Python, Java, and Web Development, passionate about solving real-world problems and building impactful applications.',
};

const SOCIAL = {
  email: 'you@example.com',
  github: 'https://github.com/Kranthikumar06',
  linkedin: 'https://www.linkedin.com/in/kranthikumar06',
  resume: '#', // link to a hosted PDF
};

const ABOUT = {
  paragraph:
    "A student of applied ML, working across detection, staging, and time-series prediction. Comfortable moving from a research notebook to something that runs like a real product — caching, retries, evaluation, all included.",
  stats: [
    { num: '04', label: 'projects shipped', color: 'lime' },
    { num: '500+', label: 'problems solved', color: 'magenta' },
    { num: '2026', label: 'placement cycle', color: 'lime' },
  ],
};

import Projects from './components/Projects';



// ============================================================
// Layout — you shouldn't need to touch anything below this line
// ============================================================

function Typewriter({ text, speed = 100, delay = 0 }) {
  const [charsTyped, setCharsTyped] = React.useState(0);
  React.useEffect(() => {
    let timeout;
    let i = 0;
    const type = () => {
      if (i < text.length) {
        i++;
        setCharsTyped(i);
        timeout = setTimeout(type, speed);
      }
    };
    timeout = setTimeout(type, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return (
    <span>
      {text.slice(0, charsTyped)}
      <span style={{ opacity: 0 }}>{text.slice(charsTyped)}</span>
    </span>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-panel reticle">
        <span className="rt-bl" /><span className="rt-br" />

        <div className="hero-content">
          <h1 className="hero-title">
            <Typewriter text="SAMUDRALA" speed={150} delay={400} /><br />
            <span style={{ color: 'var(--lime)' }}>
              <Typewriter text="KRANTHI KUMAR" speed={150} delay={1900} />
            </span>
          </h1>
          <p className="hero-sub" style={{ fontSize: '1.2rem', color: 'var(--lime)', marginBottom: '16px', maxWidth: '100%' }}>
            <Typewriter text={PROFILE.tagline} speed={40} delay={3900} />
          </p>
          <p className="hero-sub">
            <Typewriter text={PROFILE.summary} speed={15} delay={5800} />
          </p>
        </div>

        <div className="hero-photo-wrapper">
          <div className="taped-frame">
            <img className="hero-photo" src="/portfolio.jpeg" alt="Samudrala Kranthi Kumar" />
            <div className="modern-tape tape-1"></div>
            <div className="modern-tape tape-2"></div>
            <div className="modern-tape tape-3"></div>
          </div>
        </div>

        <div className="hero-actions-container">
          <div className="hero-actions" style={{ animation: 'fade-in-up 2s ease 8.2s both' }}>
            <button className="btn btn-fill" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View projects →</button>
            <a className="btn btn-outline" href={SOCIAL.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
          </div>
          
          <div className="hero-social-links" style={{ animation: 'fade-in-up 2s ease 8.4s both' }}>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="social-text-link">LINKEDIN ↗</a>
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="social-text-link">GITHUB ↗</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Contact() {
  return (
    <section id="contact">
      <div className="section-tag">04 // contact</div>
      <h2 className="contact-title">Let's talk.</h2>
      <div className="contact-actions">
        <a className="btn btn-fill" href={`mailto:${SOCIAL.email}`}>Email</a>
        <a className="btn btn-outline" href={SOCIAL.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="btn btn-outline" href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} {PROFILE.name}</span>
      <span>built with React</span>
    </footer>
  );
}

export default function App() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <div className="app">
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
