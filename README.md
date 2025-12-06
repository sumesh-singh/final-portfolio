# Sumesh Singh Kotiwale - 3D Portfolio

A modern, immersive portfolio website featuring 3D elements, WebGL shaders, and glassmorphism UI design. Built with React, TypeScript, and Three.js.

## ✨ Features

- **3D Hero Section**: Interactive WebGL Lightning effect using custom shaders.
- **Parallax Background**: Persistent 3D Torus Knot that morphs and moves as you scroll.
- **Liquid Glass UI**: Advanced SVG-based distortion and glassmorphism effects for cards and buttons.
- **Laser Flow Skills**: Dynamic glowing laser beams utilizing OGL/Three.js shaders in the skills section.
- **Video Integration**: Full-screen atmospheric video backgrounds.
- **Responsive Design**: Fully optimized for mobile and desktop devices.
- **Dark Mode**: Native dark-themed aesthetics with glowing accents.

## 🛠️ Tech Stack

- **Framework**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS
- **3D & Graphics**: 
  - Three.js / React Three Fiber (@react-three/drei)
  - OGL (for high-performance WebGL shaders)
- **Animations**: Framer Motion, GSAP (Lenis for smooth scrolling)
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   
   # Install specific UI libraries used in this project
   npm install three @types/three @react-three/fiber @react-three/drei
   npm install framer-motion clsx tailwind-merge lucide-react lenis ogl
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## 🌍 Deployment (GitHub Pages)

This project is configured to be easily hosted on GitHub Pages.

### Method 1: Manual Build

1. Update `vite.config.ts` (Already configured in this project):
   Ensure the `base` property is set to `'./'` or `'/your-repo-name/'`.

2. Build the project:
   ```bash
   npm run build
   ```

3. Upload the contents of the `dist` folder to your server or a `gh-pages` branch.

### Method 2: Using `gh-pages` package (Recommended)

1. Install the deployer:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add these scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📂 Project Structure

- **/components**: React components (Hero, Navbar, CardGrid, etc.)
- **/components/ui**: Reusable visual effects (LaserFlow, Lightning, GlassSurface)
- **/lib**: Utility functions
- **constants.ts**: Resume data (Experience, Projects, Education)
- **App.tsx**: Main layout assembly

## 📄 License

MIT
