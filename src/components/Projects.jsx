import React from 'react';
import './Projects.css';

const PLACEHOLDER_PROJECTS = [
  {
    id: '01',
    title: 'project_one.py',
    tag: 'ACTIVE',
    desc: 'A placeholder for your first real project. Update this description with details about the problems you solved and the technologies you used.',
    repo: '#',
    demo: '#'
  },
  {
    id: '02',
    title: 'project_two.js',
    tag: 'COMPLETE',
    desc: 'A placeholder for your second project. This card uses a clean, hoverable layout that matches the aesthetics of your new skills section.',
    repo: '#',
    demo: null
  },
  {
    id: '03',
    title: 'project_three.java',
    tag: 'ARCHIVED',
    desc: 'Your third project placeholder. The grid will automatically adjust to fit these cards responsively on any device size.',
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
            
            <p className="project-desc">{p.desc}</p>
            
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
