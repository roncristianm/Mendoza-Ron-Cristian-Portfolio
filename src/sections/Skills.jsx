import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2>What I work with.</h2>
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3>{skillCategory.category}</h3>
              <div className="skill-items">
                {skillCategory.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
