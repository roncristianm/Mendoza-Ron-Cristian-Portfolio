import React from 'react';

const WorkHistory = ({ experience, isEditing, onExperienceChange }) => {
  const updateExperience = (index, key, value) => {
    onExperienceChange(experience.map((item, i) => i === index ? { ...item, [key]: value } : item));
  };

  const addExperience = () => {
    onExperienceChange([
      ...experience,
      {
        title: 'New position',
        company: 'Company or organization',
        period: 'Year',
        description: 'Describe your responsibilities and achievements.'
      }
    ]);
  };

  const removeExperience = (index) => {
    if (!window.confirm(`Remove the "${experience[index].title}" experience entry?`)) return;
    onExperienceChange(experience.filter((_, i) => i !== index));
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-label">Experience</span>
        <h2>Where I've worked.</h2>
        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                {isEditing ? <input className="edit-input" value={exp.title} onChange={(e) => updateExperience(index, 'title', e.target.value)} /> : <h3>{exp.title}</h3>}
                {isEditing ? <input className="edit-input" value={exp.company} onChange={(e) => updateExperience(index, 'company', e.target.value)} /> : <h4>{exp.company}</h4>}
                {isEditing ? <input className="edit-input" value={exp.period} onChange={(e) => updateExperience(index, 'period', e.target.value)} /> : <span className="period">{exp.period}</span>}
                {isEditing ? <textarea className="edit-textarea" value={exp.description} onChange={(e) => updateExperience(index, 'description', e.target.value)} /> : <p>{exp.description}</p>}
                {isEditing && <button className="inline-remove experience-remove" onClick={() => removeExperience(index)}>Remove experience</button>}
              </div>
            </div>
          ))}
        </div>
        {isEditing && <button className="editor-add" onClick={addExperience}>+ Add experience</button>}
      </div>
    </section>
  );
};

export default WorkHistory;
