import React from 'react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    id: '01',
    icon: '{ }',
    title: 'LANGUAGES',
    skills: ['PYTHON', 'JAVA', 'C', 'R']
  },
  {
    id: '02',
    icon: '⚡',
    title: 'FRAMEWORKS',
    skills: ['REACT', 'EXPRESS']
  },
  {
    id: '03',
    icon: '⦿',
    title: 'DATABASES',
    skills: ['MONGODB', 'SQL']
  },

  {
    id: '04',
    icon: '∑',
    title: 'CS FUNDAMENTALS',
    skills: ['DSA', 'OS', 'DBMS', 'OOP', 'COMPUTER NETWORKS']
  },
  {
    id: '05',
    icon: '◆',
    title: 'AI / ML',
    skills: ['PYTORCH', 'YOLOV11', 'OPENCV', 'LSTM / BILSTM', 'XGBOOST', 'SCIKIT-LEARN', 'STREAMLIT', 'PANDAS']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title skills-title-custom">SKILLS</h2>

      <div className="skills-grid">
        {SKILL_CATEGORIES.map((category, index) => (
          <div className="skill-cell" key={category.id} style={{ '--stagger-idx': index }}>
            <div className="skill-cell-header">
              <div className="skill-cell-title">
                <span className="skill-icon">{category.icon}</span>
                {category.title}
              </div>
              <div className="skill-cell-number">{category.id}</div>
            </div>
            <div className="skill-chips-container">
              {category.skills.map((skill) => (
                <span className="grid-chip" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
