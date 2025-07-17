import React from 'react';

const WorkHistory = ({ experience }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Work History</h2>
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="period">{exp.period}</p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
