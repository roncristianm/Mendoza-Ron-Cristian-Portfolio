import React from 'react';
import { Github } from 'lucide-react';

const MyWork = ({ projects }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Work</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
            
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;
