import React, { useEffect, useState } from 'react';
import { LogIn, LogOut, Pencil, RotateCcw, Save } from 'lucide-react';
import './src/styles/App.css';
import Navigation from './src/components/Navigation';
import Home from './src/sections/Home';
import AboutMe from './src/sections/AboutMe';
import Skills from './src/sections/Skills';
import MyWork from './src/sections/MyWork';
import WorkHistory from './src/sections/WorkHistory';
import ContactMe from './src/sections/ContactMe';
import { isSupabaseConfigured, supabase } from './src/lib/supabase';

const STORAGE_KEY = 'ron-portfolio-content';

const defaultContent = {
  personalInfo: {
    name: 'Ron Cristian Mendoza',
    title: 'Computer Engineer',
    email: 'roncristianm@gmail.com',
    phone: '+63 950 355 1152',
    location: 'Pulilan, Bulacan, Philippines',
    github: 'https://github.com/roncristianm',
    linkedin: 'https://www.linkedin.com/in/ron-cristian-mendoza-333430374/',
  },
  home: {
    intro: 'A Computer Engineering student who builds software across the stack — from web applications and backend systems to AI-powered embedded projects.',
    projectStat: '3+',
    skillStat: '5',
    activeStat: '2025',
  },
  about: {
    heading: 'Engineering solutions, one line at a time.',
    description: "I'm a Computer Engineering student with a passion for building software that solves real problems. My work spans web development, backend systems, and AI-powered applications. I enjoy understanding how hardware and software work together, and I'm always looking for projects where I can apply that across the full stack.",
  },
  contact: {
    description: "I'm always open to new opportunities, collaborations, or just a good conversation about tech. Feel free to reach out through any of the channels below.",
  },
  projects: [
    { id: 1, title: 'SewBot - Pattern Recognition System', description: 'A futuristic sewing guide app with real-time camera overlay and AI-powered stitch line detection using YOLOv8-nano segmentation. Built for Raspberry Pi with a sci-fi themed UI, 5 pattern levels, and adjustable confidence threshold.', technologies: ['Python', 'OpenCV', 'PyTorch', 'YOLOv8', 'Pygame', 'ONNX'], githubUrl: 'https://github.com/Jimsj029/SewBot-Rpi', image: '' },
    { id: 2, title: 'Nexxus · BHSA', description: 'A role-based learning platform for Bataan High School for the Arts. Features auth with email verification, class/assignment management, Google Sheets grade sync, announcements, a calendar view, and automated email notifications via Firebase Cloud Functions.', technologies: ['React', 'Vite', 'Firebase', 'Express.js', 'Google Sheets API', 'Brevo'], githubUrl: 'https://github.com/roncristianm/WebEng-Final-Project', liveUrl: 'https://bhsanexxus.vercel.app/', image: '' },
  ],
  skills: [
    { category: 'Web Design', items: ['React', 'JavaScript', 'HTML5', 'CSS3'] },
    { category: 'Server Side', items: ['Node.js', 'Python', 'Express.js'] },
    { category: 'Database', items: ['MongoDB', 'MySQL', 'Firebase'] },
    { category: 'AI / ML', items: ['OpenCV', 'PyTorch', 'YOLOv8', 'ONNX', 'Pygame'] },
    { category: 'Tools', items: ['Git', 'Vite', 'Postman', 'Google Sheets API'] },
  ],
  experience: [{ title: 'Student Intern - Computer Engineer', company: 'Planning and Development Office, BSU', period: '2025', description: "Developed and maintained web systems using React and Node.js as part of the university's planning and development team. Applied computer engineering principles to build practical software solutions used by the institution." }],
};

const loadContent = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultContent, ...JSON.parse(saved) } : defaultContent;
  } catch {
    return defaultContent;
  }
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [content, setContent] = useState(loadContent);
  const [isEditing, setIsEditing] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(isSupabaseConfigured);
  const [authError, setAuthError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const updateContent = (section, value) => {
    setContent((current) => ({ ...current, [section]: value }));
    setHasSaved(false);
  };

  const saveContent = () => {
    if (!supabase || !session) return;
    supabase.from('portfolio_content').upsert({ id: 1, content }).then(({ error }) => {
      if (error) {
        setAuthError(error.message);
        return;
      }
      setHasSaved(true);
      setIsEditing(false);
    });
  };

  const resetContent = () => {
    if (window.confirm('Reset all portfolio edits to the original content?')) {
      window.localStorage.removeItem(STORAGE_KEY);
      setContent(defaultContent);
      setHasSaved(false);
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!supabase) return undefined;
    let active = true;
    const loadSharedContent = async () => {
      const [{ data: contentRow, error: contentError }, { data: { session: currentSession } }] = await Promise.all([
        supabase.from('portfolio_content').select('content').eq('id', 1).maybeSingle(),
        supabase.auth.getSession(),
      ]);
      if (contentError) setAuthError(contentError.message);
      if (active && contentRow?.content) setContent({ ...defaultContent, ...contentRow.content });
      if (active) {
        setSession(currentSession);
        setIsLoading(false);
      }
    };
    loadSharedContent();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, currentSession) => setSession(currentSession));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.4 });
    ['home', 'about', 'skills', 'projects', 'experience', 'contact'].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => {
      active = false;
      listener.subscription.unsubscribe();
      observer.disconnect();
    };
  }, []);

  const signIn = async (event) => {
    event.preventDefault();
    setAuthError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setAuthError(error.message);
  };

  const signOut = async () => {
    await supabase?.auth.signOut();
    setIsEditing(false);
  };

  if (isLoading) return <div className="auth-screen">Loading portfolio...</div>;

  return (
    <div className="App">
      <div className="editor-toolbar">
        {isEditing ? (
          <>
            <span className="editor-hint">Editing mode</span>
            <button className="editor-button save" onClick={saveContent}><Save size={15} /> Save changes</button>
            <button className="editor-button reset" onClick={resetContent}><RotateCcw size={15} /> Reset</button>
          </>
        ) : session ? (
          <>
            <button className="editor-button" onClick={() => { setIsEditing(true); setHasSaved(false); }}><Pencil size={15} /> Edit portfolio</button>
            <button className="editor-button" onClick={signOut}><LogOut size={15} /> Sign out</button>
          </>
        ) : (
          <button className="editor-button" onClick={() => document.getElementById('admin-login')?.showModal()}><LogIn size={15} /> Admin login</button>
        )}
        {hasSaved && <span className="saved-message">Saved in this browser</span>}
      </div>
      <dialog id="admin-login" className="login-dialog">
        <form onSubmit={signIn}>
          <button type="button" className="login-close" onClick={() => document.getElementById('admin-login')?.close()}>×</button>
          <p className="section-label">Admin access</p>
          <h2>Sign in to edit</h2>
          <input className="edit-input" type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <input className="edit-input" type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          {authError && <p className="login-error">{authError}</p>}
          <button className="editor-button save" type="submit">Sign in</button>
        </form>
      </dialog>
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} personalInfo={content.personalInfo} isEditing={isEditing} onPersonalInfoChange={(value) => updateContent('personalInfo', value)} />
      <main className="main-content">
        <Home home={content.home} personalInfo={content.personalInfo} scrollToSection={scrollToSection} isEditing={isEditing} onHomeChange={(value) => updateContent('home', value)} />
        <AboutMe about={content.about} isEditing={isEditing} onAboutChange={(value) => updateContent('about', value)} />
        <Skills skills={content.skills} isEditing={isEditing} onSkillsChange={(value) => updateContent('skills', value)} />
        <MyWork projects={content.projects} isEditing={isEditing} onProjectsChange={(value) => updateContent('projects', value)} />
        <WorkHistory experience={content.experience} isEditing={isEditing} onExperienceChange={(value) => updateContent('experience', value)} />
        <ContactMe personalInfo={content.personalInfo} contact={content.contact} isEditing={isEditing} onContactChange={(value) => updateContent('contact', value)} onPersonalInfoChange={(value) => updateContent('personalInfo', value)} />
      </main>
    </div>
  );
};

export default App;
