# Portfolio V2 - React + TypeScript

A modern, production-ready portfolio website built with React, TypeScript, GSAP, and Tailwind CSS. Features a scroll-triggered 3D animation using 300 PNG frame images.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### ⚠️ Important: Image Assets

Before running, copy the image frames to the public folder:

```bash
# From the project root (interactive-portfolio-website)
mkdir -p portfolio-v2/public/frames
cp images/male*.png portfolio-v2/public/frames/
```

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🏗️ Architecture

```
src/
├── components/
│   ├── canvas/
│   │   └── ImageSequence.tsx    # Canvas animation with scroll trigger
│   ├── layout/
│   │   ├── Navbar.tsx           # Fixed navigation
│   │   └── SmoothScroll.tsx     # Lenis smooth scroll wrapper
│   ├── sections/
│   │   ├── About.tsx            # About/Skills section
│   │   ├── Projects.tsx         # Projects showcase
│   │   └── Contact.tsx          # Contact CTA
│   └── ui/
│       └── LoadingScreen.tsx    # Image loading progress
├── hooks/
│   └── useImagePreloader.ts     # Image preloading with progress
├── App.tsx                      # Main composition
├── index.css                    # Tailwind + custom styles
└── main.tsx                     # Entry point
```

## 🎨 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **GSAP + ScrollTrigger** - Animations
- **Lenis** - Smooth scrolling
- **Tailwind CSS** - Styling

## 🐳 Docker Deployment

```bash
# Build and run production container
docker-compose up -d

# Or use Docker directly
docker build -t portfolio .
docker run -p 3000:80 portfolio
```

## 📝 Key Improvements Over Original

1. **Type Safety** - Full TypeScript implementation
2. **Loading State** - Progress indicator while images load
3. **Modern Scroll** - Lenis replaces deprecated Locomotive Scroll
4. **Memory Management** - Proper cleanup of event listeners
5. **Responsive Design** - Mobile-first with Tailwind
6. **Production Ready** - Dockerfile, ESLint, Prettier

## 📄 License

MIT
