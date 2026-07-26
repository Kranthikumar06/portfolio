import React from 'react';
import './Projects.css';

const PLACEHOLDER_PROJECTS = [
  {
    id: '01',
    title: 'Secure My Campus',
    tag: 'LIVE',
    desc: 'Built a web platform that replaces manual complaint handling with a single system for reporting, tracking, and resolving campus security incidents. It allows students to report issues easily while enabling administrators and security staff to assign, monitor, and manage incidents with real-time status tracking.',
    repo: 'https://github.com/Kranthikumar06/securemycampus',
    demo: 'https://securemycampus.vercel.app/'
  },
  {
    id: '02',
    title: 'Reaching Roots',
    tag: 'NGO PLATFORM',
    desc: 'Developed a digital platform for an NGO to digitize and track rural machinery utilization and revenue. Features a Gemini 2.5 Flash OCR system that extracts data from photographed physical report sheets into structured JSON, an interactive verification UI for volunteers, and an admin dashboard with visual charts and AI-driven insights.',
    repo: '#',
    demo: null
  },
  {
    id: '03',
    title: 'My Smart Farm',
    tag: 'ML / AI',
    desc: 'Designed an ML-powered farming platform that predicts crops, fertilizers, diseases, and yield with over 90% model accuracy, while providing real-time price tracking and crop calendars. It integrates machine learning models like Random Forest, XGBoost, and MobileNetV2 for high-precision crop disease detection.',
    repo: '#',
    demo: null
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title-custom">PROJECTS</h2>
      
      <div className="projects-grid">
        {PLACEHOLDER_PROJECTS.map((p, index) => (
          <div className="project-card" key={p.id} style={{ '--stagger-idx': index }}>
            <div className="project-header">
              <span className="project-title">{p.title}</span>
              <span className="project-tag">{p.tag}</span>
            </div>
            
            {p.bullets ? (
              <ul className="project-bullets">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : (
              <p className="project-desc">{p.desc}</p>
            )}

            {p.tech && (
              <div className="project-tech">
                <strong>Technologies: </strong><span>{p.tech}</span>
              </div>
            )}
            
            <div className="project-links">
              {p.repo && <a href={p.repo} className="project-link" target="_blank" rel="noopener noreferrer">REPO ↗</a>}
              {p.demo && <a href={p.demo} className="project-link" target="_blank" rel="noopener noreferrer">DEMO ↗</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
