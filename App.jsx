import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download } from 'lucide-react';
import './src/styles/App.css';
import ProfilePic from './src/images/ProfilePic.jpg';
import Navigation from './src/components/Navigation';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Sample data - you can customize this with your actual information
  const personalInfo = {
    name: "Ron Cristian Mendoza",
    title: "Software Developer",
    email: "roncristianm@gmail.com",
    phone: "+63 950 355 1152",
    location: "Pulilan, Bulacan, Philippines",
    github: "https://github.com/roncristianm",
    linkedin: "https://www.linkedin.com/in/ron-cristian-mendoza-333430374/",
    resume: "/path-to-your-resume.pdf"
  };

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Vite",
      technologies: ["React", "JavaScript", "CSS3", "Vite"],
      githubUrl: "https://github.com/roncristianm/portfolio",
      liveUrl: "https://roncristianm.github.io/portfolio",
    }

  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3"] },
    { category: "Backend", items: ["Node.js", "Python", "Express.js"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "Tools", items: ["Git", "Vite", "Postman"] }
  ];

  const experience = [
    {
      title: "OJT Student - Fullstack Developer",
      company: "Planning and Development Office, BSU",
      period: "2025",
      description: "Currently completing on-the-job training as a fullstack developer. Learning to develop and maintain web applications using React and Node.js while collaborating with experienced developers and cross-functional teams to deliver software solutions."
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <Navigation 
        personalInfo={personalInfo}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">{personalInfo.name}</span></h1>
          <h2>{personalInfo.title}</h2>
          <p>Passionate about creating innovative solutions and building amazing user experiences.</p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <a href={personalInfo.resume} download className="btn secondary">
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate software developer with experience in building web applications 
                and solving complex problems. I love learning new technologies and creating 
                solutions that make a difference.
              </p>
            </div>
            <div className="about-image">
              <img src={ProfilePic} alt="Profile" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills</h2>
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

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
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

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2>Experience</h2>
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

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p>I'm always open to discussing new opportunities and interesting projects.</p>
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={24} />
              <span>{personalInfo.email}</span>
            </div>
            <div className="contact-item">
              <Phone size={24} />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <span>{personalInfo.location}</span>
            </div>
          </div>
          <div className="social-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 {personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;