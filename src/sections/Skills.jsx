import React from 'react';

const Skills = ({ skills, isEditing, onSkillsChange }) => {
  const updateCategory = (index, key, value) => onSkillsChange(skills.map((item, i) => i === index ? { ...item, [key]: value } : item));
  const updateItems = (index, value) => updateCategory(index, 'items', value.split(',').map((item) => item.trim()).filter(Boolean));
  const addCategory = () => onSkillsChange([...skills, { category: 'New Category', items: [] }]);
  const removeCategory = (index) => {
    if (!window.confirm(`Remove the "${skills[index].category}" skill category?`)) return;
    onSkillsChange(skills.filter((_, i) => i !== index));
  };
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2>What I work with.</h2>
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              {isEditing ? <input className="edit-input skill-category-edit" value={skillCategory.category} onChange={(e) => updateCategory(index, 'category', e.target.value)} /> : <h3>{skillCategory.category}</h3>}
              <div className="skill-items">
                {isEditing ? <textarea className="edit-textarea skill-items-edit" value={skillCategory.items.join(', ')} onChange={(e) => updateItems(index, e.target.value)} placeholder="React, JavaScript, CSS" /> : skillCategory.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">{skill}</span>
                ))}
              </div>
              {isEditing && <button className="inline-remove" onClick={() => removeCategory(index)}>Remove category</button>}
            </div>
          ))}
        </div>
        {isEditing && <button className="editor-add" onClick={addCategory}>+ Add skill category</button>}
      </div>
    </section>
  );
};

export default Skills;
