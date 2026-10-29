import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Trash2, X } from 'lucide-react';

const MyWork = ({ projects, text, isEditing, onProjectsChange, onTextChange }) => {
  const [lightbox, setLightbox] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const getProjectImages = (project) => project.images || (project.image ? [project.image] : []);
  const updateProject = (index, key, value) => onProjectsChange(projects.map((project, i) => i === index ? { ...project, [key]: value } : project));
  const addProject = () => onProjectsChange([...projects, { id: Date.now(), title: 'New project', description: 'Describe your project here.', technologies: [], githubUrl: '', liveUrl: '', images: [] }]);
  const removeProject = (index) => {
    if (!window.confirm(`Remove "${projects[index].title}" from your projects?`)) return;
    onProjectsChange(projects.filter((_, i) => i !== index));
  };
  const uploadImages = (index, files) => {
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const currentImages = projects[index].images || (projects[index].image ? [projects[index].image] : []);
        updateProject(index, 'images', [...currentImages, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const openLightbox = (projectIndex, imageIndex) => {
    setLightbox({ projectIndex, imageIndex });
  };

  const closeLightbox = () => setLightbox(null);

  const showLightboxImage = (direction) => {
    if (!lightbox) return;
    const images = getProjectImages(projects[lightbox.projectIndex]);
    const imageIndex = (lightbox.imageIndex + direction + images.length) % images.length;
    setLightbox({ ...lightbox, imageIndex });
  };

  const selectedProject = selectedProjectIndex === null ? null : projects[selectedProjectIndex];

  const uploadDetailImages = (files) => {
    if (selectedProjectIndex === null) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const currentImages = getProjectImages(projects[selectedProjectIndex]);
        updateProject(selectedProjectIndex, 'images', [...currentImages, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };
  return (
    <section id="projects" className="projects">
      <div className="container">
        {isEditing ? <input className="edit-input section-label-edit" value={text.projectsLabel} onChange={(e) => onTextChange({ ...text, projectsLabel: e.target.value })} /> : <span className="section-label">{text.projectsLabel}</span>}
        {isEditing ? <input className="edit-input edit-heading" value={text.projectsHeading} onChange={(e) => onTextChange({ ...text, projectsHeading: e.target.value })} /> : <h2>{text.projectsHeading}</h2>}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <p className="project-number">PROJECT_{String(project.id).padStart(2, '0')}</p>
              {isEditing && <button className="project-delete" aria-label="Remove project" onClick={(event) => { event.stopPropagation(); removeProject(index); }}><Trash2 size={15} /></button>}
              <div className="project-content">
                {isEditing ? <input className="edit-input project-title-edit" value={project.title} onChange={(e) => updateProject(index, 'title', e.target.value)} /> : <h3>{project.title}</h3>}
                {isEditing && (
                  <div className="project-edit-fields">
                    <textarea className="edit-textarea" value={project.description} onChange={(e) => updateProject(index, 'description', e.target.value)} placeholder="Project description" />
                    <input className="edit-input" value={project.technologies.join(', ')} onChange={(e) => updateProject(index, 'technologies', e.target.value.split(',').map((item) => item.trim()).filter(Boolean))} placeholder="React, Vite, Firebase" />
                    <input className="edit-input" value={project.githubUrl} onChange={(e) => updateProject(index, 'githubUrl', e.target.value)} placeholder="GitHub URL" />
                    <input className="edit-input" value={project.liveUrl || ''} onChange={(e) => updateProject(index, 'liveUrl', e.target.value)} placeholder="Live demo URL (optional)" />
                    <label className="upload-button"> Add pictures
                      <input type="file" accept="image/*" multiple onChange={(e) => uploadImages(index, e.target.files)} />
                    </label>
                  </div>
                )}
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
                    <Github size={16} />
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <button className="project-details-link" onClick={(event) => { event.stopPropagation(); setSelectedProjectIndex(index); }}>
                    More details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isEditing && <button className="editor-add" onClick={addProject}>+ Add project</button>}
      </div>
      {lightbox && (
        <div className="project-lightbox" role="dialog" aria-modal="true" aria-label="Project image viewer" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close image viewer"><X size={20} /></button>
            <img src={getProjectImages(projects[lightbox.projectIndex])[lightbox.imageIndex]} alt={`${projects[lightbox.projectIndex].title} enlarged preview`} />
            <p>{projects[lightbox.projectIndex].title} · {lightbox.imageIndex + 1} of {getProjectImages(projects[lightbox.projectIndex]).length}</p>
            {getProjectImages(projects[lightbox.projectIndex]).length > 1 && (
              <>
                <button className="lightbox-arrow previous" onClick={() => showLightboxImage(-1)} aria-label="Previous picture"><ChevronLeft size={24} /></button>
                <button className="lightbox-arrow next" onClick={() => showLightboxImage(1)} aria-label="Next picture"><ChevronRight size={24} /></button>
              </>
            )}
          </div>
        </div>
      )}
      {selectedProject && (
        <div className="project-details-overlay" role="dialog" aria-modal="true" aria-label={`${selectedProject.title} project details`} onClick={() => setSelectedProjectIndex(null)}>
          <div className="project-details" onClick={(event) => event.stopPropagation()}>
            <button className="details-close" onClick={() => setSelectedProjectIndex(null)} aria-label="Close project details"><X size={20} /></button>
            <p className="project-number">PROJECT_{String(selectedProject.id).padStart(2, '0')}</p>
            <h2>{selectedProject.title}</h2>
            <div className="details-gallery">
              {getProjectImages(selectedProject).length > 0 ? getProjectImages(selectedProject).map((image, imageIndex) => (
                <div className="details-image-wrap" key={imageIndex}>
                  <button className="details-image-button" onClick={() => openLightbox(selectedProjectIndex, imageIndex)} aria-label={`Enlarge picture ${imageIndex + 1}`}>
                  <img src={image} alt={`${selectedProject.title} preview ${imageIndex + 1}`} />
                  </button>
                  {isEditing && <button className="details-image-remove" onClick={() => {
                    if (!window.confirm('Remove this project picture?')) return;
                    const images = getProjectImages(selectedProject).filter((_, currentIndex) => currentIndex !== imageIndex);
                    updateProject(selectedProjectIndex, 'images', images);
                    if (lightbox?.projectIndex === selectedProjectIndex && lightbox.imageIndex === imageIndex) closeLightbox();
                  }}>Remove</button>}
                </div>
              )) : <div className="details-empty">No project pictures yet.</div>}
            </div>
            {isEditing && (
              <label className="details-upload">+ Add multiple pictures
                <input type="file" accept="image/*" multiple onChange={(event) => uploadDetailImages(event.target.files)} />
              </label>
            )}
            <p className="details-description">{selectedProject.description}</p>
            <div className="project-tech">{selectedProject.technologies.map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyWork;
