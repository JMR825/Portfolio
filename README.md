# Janhavi Rathod - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring a futuristic dark theme with animated elements.

## 🚀 Features

- **Modern Design**: Futuristic dark theme with neon accents and animated backgrounds
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Component-Based Architecture**: Modular, maintainable code structure
- **Performance Optimized**: React.memo, custom hooks, and efficient rendering
- **Smooth Animations**: Floating stars, gradient backgrounds, and interactive elements
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Accessibility**: ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **Custom Hooks** - Reusable logic (typing effect, cursor effect)

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── FloatingStars.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   ├── useTypingEffect.js
│   │   └── useCursorEffect.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

- **Hero Section**: Edit `src/components/Hero.jsx`
- **Skills**: Modify `skillsData` in `src/components/Skills.jsx`
- **Experience**: Update `experienceData` in `src/components/Experience.jsx`
- **Projects**: Edit `projectsData` in `src/components/Projects.jsx`
- **Contact**: Update `src/components/Contact.jsx` with your social links

### Add Resume

Place your resume PDF in the `public` folder and update the path in `src/components/Hero.jsx`:

```javascript
const resumeUrl = "/your-resume.pdf";
```

### Styling

All styles are in `src/App.css`. Key color variables:
- Primary: `#00e5ff` (cyan)
- Secondary: `#39ff14` (neon green)
- Background: `#001a33` (dark blue)
- Text: `#cfd8dc` (light gray)

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: < 480px

## ⚡ Performance Optimizations

- React.memo for component memoization
- Custom hooks for reusable logic
- Efficient event listeners with cleanup
- Optimized animations with CSS
- Lazy loading ready structure

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Janhavi Rathod**
- Email: janhavi.rathod255@gmail.com
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Built with React and Vite
- Inspired by modern portfolio designs
- Roboto Mono font from Google Fonts
