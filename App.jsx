import React, { useState, useEffect } from 'react';
import './src/styles/App.css';
import Navigation from './src/components/Navigation';
import Home from './src/sections/Home';
import AboutMe from './src/sections/AboutMe';
import Skills from './src/sections/Skills';
import MyWork from './src/sections/MyWork';
import WorkHistory from './src/sections/WorkHistory';
import ContactMe from './src/sections/ContactMe';
import Footer from './src/sections/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Sample data - you can customize this with your actual information
  const personalInfo = {
    name: "Ron Cristian Mendoza",
    title: "Web Developer",
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
      title: "My Website",
      description: "A clean, easy-to-use website built with React and Vite",
      technologies: ["React", "JavaScript", "CSS3", "Vite"],
      githubUrl: "https://github.com/roncristianm/Mendoza-Ron-Cristian-Portfolio",
    }
  ];

  const skills = [
    { category: "Web Design", items: ["React", "JavaScript", "HTML5", "CSS3"] },
    { category: "Server Side", items: ["Node.js", "Python", "Express.js"] },
    { category: "Database", items: ["MongoDB", "MySQL"] },
    { category: "Tools", items: ["Git", "Vite", "Postman"] }
  ];

  const experience = [
    {
      title: "Student - Web Developer",
      company: "Planning and Development Office, BSU",
      period: "2025",
      description: "Learning to build and update websites using React and Node.js while working with experienced developers and teams to create useful software."
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

      {/* Home Section */}
      <Home personalInfo={personalInfo} scrollToSection={scrollToSection} />

      {/* About Me Section */}
      <AboutMe />

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* My Work Section */}
      <MyWork projects={projects} />

      {/* Work History Section */}
      <WorkHistory experience={experience} />

      {/* Contact Me Section */}
      <ContactMe personalInfo={personalInfo} />

      {/* Footer */}
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default App;