import React, { useState } from 'react';
import './src/styles/App.css';
import Navigation from './src/components/Navigation';
import Home from './src/sections/Home';
import AboutMe from './src/sections/AboutMe';
import Skills from './src/sections/Skills';
import MyWork from './src/sections/MyWork';
import WorkHistory from './src/sections/WorkHistory';
import ContactMe from './src/sections/ContactMe';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const personalInfo = {
    name: "Ron Cristian Mendoza",
    title: "Computer Engineer",
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
      title: "SewBot - Pattern Recognition System",
      description: "A futuristic sewing guide app with real-time camera overlay and AI-powered stitch line detection using YOLOv8-nano segmentation. Built for Raspberry Pi with a sci-fi themed UI, 5 pattern levels, and adjustable confidence threshold.",
      technologies: ["Python", "OpenCV", "PyTorch", "YOLOv8", "Pygame", "ONNX"],
      githubUrl: "https://github.com/Jimsj029/SewBot-Rpi",
    },
    {
      id: 2,
      title: "Nexxus · BHSA",
      description: "A role-based learning platform for Bataan High School for the Arts. Features auth with email verification, class/assignment management, Google Sheets grade sync, announcements, a calendar view, and automated email notifications via Firebase Cloud Functions.",
      technologies: ["React", "Vite", "Firebase", "Express.js", "Google Sheets API", "Brevo"],
      githubUrl: "https://github.com/roncristianm/WebEng-Final-Project",
      liveUrl: "https://bhsanexxus.vercel.app/",
    },
    {
      id: 3,
      title: "My Website",
      description: "A clean, easy-to-use website built with React and Vite",
      technologies: ["React", "JavaScript", "CSS3", "Vite"],
      githubUrl: "https://github.com/roncristianm/Mendoza-Ron-Cristian-Portfolio",
    }
  ];

  const skills = [
    { category: "Web Design", items: ["React", "JavaScript", "HTML5", "CSS3"] },
    { category: "Server Side", items: ["Node.js", "Python", "Express.js"] },
    { category: "Database", items: ["MongoDB", "MySQL", "Firebase"] },
    { category: "AI / ML", items: ["OpenCV", "PyTorch", "YOLOv8", "ONNX", "Pygame"] },
    { category: "Tools", items: ["Git", "Vite", "Postman", "Google Sheets API"] }
  ];

  const experience = [
    {
      title: "Student Intern - Computer Engineer",
      company: "Planning and Development Office, BSU",
      period: "2025",
      description: "Developed and maintained web systems using React and Node.js as part of the university's planning and development team. Applied computer engineering principles to build practical software solutions used by the institution."
    },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':       return <Home personalInfo={personalInfo} setCurrentPage={setCurrentPage} />;
      case 'about':      return <AboutMe />;
      case 'skills':     return <Skills skills={skills} />;
      case 'projects':   return <MyWork projects={projects} />;
      case 'experience': return <WorkHistory experience={experience} />;
      case 'contact':    return <ContactMe personalInfo={personalInfo} />;
      default:           return <Home personalInfo={personalInfo} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} personalInfo={personalInfo} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
