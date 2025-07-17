# Ron Cristian Mendoza - Portfolio Website

A clean, simple portfolio website built with React and Vite.

## Features

- **Works on all devices**: Desktop, tablet, and mobile
- **Easy navigation**: Smooth scrolling between sections
- **Project showcase**: Display your work with links
- **Skills section**: Show your technical skills
- **Contact info**: Multiple ways to reach you
- **Fast loading**: Built with Vite for speed

## Getting Started

### What you need

- Node.js (version 14 or higher)
- npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/roncristianm/Mendoza-Ron-Cristian-Portfolio.git
cd Mendoza-Ron-Cristian-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and go to `http://localhost:3000`

## Build for Production

```bash
npm run build
```

## Customization

### Personal Information

Edit the `personalInfo` object in `App.jsx`:

```javascript
const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername"
};
```

### Projects

Update the `projects` array in `App.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description",
    technologies: ["React", "JavaScript", "CSS3"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-project.com"
  }
];
```

### Skills

Update the `skills` array:

```javascript
const skills = [
  { 
    category: "Web Design", 
    items: ["React", "JavaScript", "HTML5", "CSS3"] 
  }
];
```

## Technologies Used

- **React**: Frontend library
- **Vite**: Build tool
- **CSS3**: Styling
- **JavaScript**: Programming language

## Contact

- GitHub: [@roncristianm](https://github.com/roncristianm)
- Email: roncristianm@gmail.com

---

⭐ If this helped you, please give it a star on GitHub!
