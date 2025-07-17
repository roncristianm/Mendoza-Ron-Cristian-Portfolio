# Ron Cristian Mendoza - Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling between sections
- **Project Showcase**: Display your projects with images, descriptions, and links
- **Skills Section**: Organized skill categories with tags
- **Experience Timeline**: Professional experience with timeline layout
- **Contact Section**: Multiple ways to get in touch
- **Fast Performance**: Built with Vite for optimal loading speed

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

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

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Edit the `personalInfo` object in `App.jsx` to update your personal details:

```javascript
const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resume: "/path-to-your-resume.pdf"
};
```

### Projects

Update the `projects` array in `App.jsx` with your own projects:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-project.com",
    image: "/path-to-project-image.jpg"
  },
  // Add more projects...
];
```

### Skills

Customize the `skills` array with your technical skills:

```javascript
const skills = [
  { 
    category: "Frontend", 
    items: ["React", "JavaScript", "HTML5", "CSS3"] 
  },
  // Add more skill categories...
];
```

### Experience

Update the `experience` array with your work history:

```javascript
const experience = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "Start Date - End Date",
    description: "Job description and achievements"
  },
  // Add more experiences...
];
```

### Colors and Styling

You can customize the colors and styling by editing the CSS variables in `src/styles/App.css`. The main colors used are:

- Primary: `#2563eb` (blue)
- Secondary: `#fbbf24` (yellow/gold)
- Text: `#1f2937` (dark gray)
- Background: `#f8fafc` (light gray)

## Adding Images

1. Create a `public/images` directory
2. Add your images to this directory
3. Reference them in your code as `/images/your-image.jpg`

## Deployment

### GitHub Pages

1. Install the GitHub Pages deployment package:
```bash
npm install --save-dev gh-pages
```

2. Add to your `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository to Netlify for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

## Technologies Used

- **React**: Frontend library
- **Vite**: Build tool and development server
- **Lucide React**: Icon library
- **CSS3**: Styling with modern features
- **JavaScript ES6+**: Modern JavaScript features

## Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub: [@roncristianm](https://github.com/roncristianm)
- Email: your.email@example.com

---

⭐ If you found this portfolio template helpful, please give it a star on GitHub!
