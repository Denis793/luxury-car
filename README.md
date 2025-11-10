# 🏎️ Luxury Ferrari 3D Showcase

Modern, interactive 3D car customization landing page featuring a realistic Ferrari model with real-time color selection — built with Next.js, Three.js, and GSAP animations, showcasing advanced front-end development and 3D graphics expertise.

---

## 👀 Preview

<p align="center">
  <a href="https://luxury-car-weld.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/View%20Live%20Demo-Ferrari%203D-red?style=for-the-badge" alt="View Project">
  </a>
</p>

---

## 📷 Screenshots

<div align="center">
  <img src="https://github.com/Denis793/luxury-car/blob/main/src/assets/images/screens/Screenshot-1-LuxuryAuto.png" alt="Ferrari 3D Showcase Desktop" width="100%" />
  <img src="https://github.com/Denis793/luxury-car/blob/main/src/assets/images/screens/Screenshot-2-LuxuryAuto.png" alt="Ferrari 3D Showcase Mobile" width="100%" />
  <img src="https://github.com/Denis793/luxury-car/blob/main/src/assets/images/screens/Screenshot-3-LuxuryAuto.png" alt="Interactive 3D Ferrari Model" width="100%" />
</div>

---

## ✨ Features

### 🏎️ **3D Interactive Experience**

- 🎮 **Real-time 3D Ferrari Model** with Three.js rendering
- 🎨 **Color Customization** with 4 premium color options (Red, Green, Yellow, Purple)
- 🔄 **Orbital Controls** for 360° model viewing and interaction
- 💡 **Professional Lighting** with environment mapping and contact shadows
- ⚡ **Smooth Animations** with GSAP scroll-triggered effects

### 🎨 **Design & UX**

- 📱 **Mobile-first responsive design** with orientation detection
- 🎭 **Scroll-triggered animations** with scramble text effects
- 🌈 **Smooth color transitions** on 3D model material changes
- 🔄 **Adaptive layouts** for portrait/landscape orientations
- 👆 **Touch-optimized controls** for mobile devices
- ⏳ **Loading states** with progressive enhancement

### ⚡ **Performance & Technical Excellence**

- 🖥️ **Server-side rendering** with Next.js for optimal SEO
- 🔄 **Client-side hydration** handling to prevent SSR/CSR mismatches
- 🎨 **SCSS Modules** with modern CSS Container Queries
- 📝 **TypeScript** for type-safe development
- ⚡ **Optimized 3D rendering** with proper cleanup and memory management

---

## 🛠️ Technologies Used

- ⚛️ **Next.js 15.5.5** — React framework with Turbopack for blazing-fast development
- 🎯 **React 19.1.0** — Modern hooks and server components
- 🎮 **Three.js** — Powerful 3D graphics rendering
- 🎨 **@react-three/fiber** — React renderer for Three.js
- 🔧 **@react-three/drei** — Useful 3D components and helpers
- 🎬 **GSAP 3.13** — Professional animation library with ScrollTrigger
- 📝 **TypeScript** — Type-safe development environment
- 🎨 **SCSS Modules** — Scoped styling with CSS variables system
- 🔄 **clsx** — Utility for conditional CSS classes

---

## 📁 Project Structure

```
src/
├── shared/
│   ├── layout/
│   │   └── NavBar/          # Navigation header
│   ├── ui/
│   │   ├── ButtonBuy/       # Custom purchase button
│   │   ├── Card/            # Reusable card component
│   │   ├── FerrariModel/    # 3D Ferrari component
│   │   └── OptimizedImage/  # Performance-optimized images
│   ├── hooks/
│   │   └── useIsClient.ts   # Client-side rendering hook
│   └── styles/
│       ├── _variables.scss  # CSS custom properties
│       ├── _globals.scss    # Global styles
│       └── main.scss        # Main stylesheet
├── widgets/
│   ├── AboutSection/        # Developer info with scramble text
│   ├── ColorsSection/       # 3D Ferrari customization
│   ├── CompanySection/      # Company information
│   └── ProductSection/      # Product showcase
├── pages/
│   └── Home/                # Main landing page
├── types/
│   └── colorCars.ts         # TypeScript color definitions
└── assets/
    └── images/              # Optimized images and assets
```

---

## ⚙️ Setup & Installation

**1. Clone the repository:**

```bash
git clone <repository-url>
cd luxury-ferrari-3d-showcase
```

**2. Install dependencies:**

```bash
npm install
# or
yarn install
```

**3. Start development server:**

```bash
npm run dev
# or
yarn dev
```

**4. Build for production:**

```bash
npm run build
npm start
```

---

## 🎨 Styling System

### **💡 Modern CSS Architecture**

- 🎨 **SCSS Modules** for component-scoped styles
- 📱 **CSS Container Queries** for adaptive layouts
- ⚙️ **CSS Custom Properties** with clamp() for fluid sizing
- 📲 **Mobile-first** responsive design approach

### **📱 Responsive Features**

- 📏 **Viewport-based sizing** using clamp() functions
- 🔄 **Orientation detection** for optimal mobile layouts
- 👆 **Touch device optimization** with larger interactive areas
- 🎬 **Fluid animations** that scale with screen size

### **🎭 Animation System**

- 📜 **GSAP ScrollTrigger** for scroll-based animations
- 🎨 **3D model transitions** with smooth color changes
- ✨ **Scramble text effects** for dynamic content reveals
- 🌊 **Background parallax** with continuous motion patterns

---

## 🚀 Key Components

### **🏎️ 3D Ferrari Model**

- 🎮 Interactive Three.js scene with professional lighting
- 🎨 Real-time material switching for color customization
- 🔄 Orbital controls with touch and mouse support
- ⚡ Optimized geometry and textures for web performance

### **🎨 Color Selection System**

- 👀 Visual feedback with selected state indicators
- 🌈 Smooth color transitions on 3D model
- 👆 Touch-optimized color picker interface
- ⚛️ State management with React hooks

### **⚡ Scroll Animations**

- 🎬 GSAP-powered smooth scroll effects
- 📱 Mobile-optimized animation distances
- 👁️ Intersection Observer for performance
- 🧹 Cleanup functions to prevent memory leaks

---

## 📱 Responsive Design

- 📱 **Mobile Portrait**: Vertical layout with horizontal color controls
- 📲 **Mobile Landscape**: Compact layout optimized for limited height
- 💻 **Tablet**: Balanced two-column layout
- 🖥️ **Desktop**: Full-width layout with side-by-side content

---

## 🎯 Performance Optimizations

### **🎮 3D Rendering**

- 🖥️ **Canvas optimization** with proper WebGL context management
- ⏳ **Lazy loading** for 3D components
- 🔄 **Client-side rendering** detection to prevent hydration issues
- 🧹 **Memory cleanup** for Three.js scenes and geometries

### **⚙️ Code Optimization**

- 🚀 **Next.js Turbopack** for faster builds
- 📝 **TypeScript** for compile-time error catching
- ⚛️ **Component memoization** for React performance
- 🎨 **SCSS optimization** with modern @use syntax

### **🎬 Animation Performance**

- ⚡ **will-change** CSS property for animation hints
- 🎭 **GSAP optimization** with proper cleanup
- 🎯 **requestAnimationFrame** for smooth 60fps animations
- ♿ **Reduced motion** support for accessibility

---

## 🏆 Technical Achievements

### **💻 Front-End Excellence**

- ⚛️ Advanced React patterns with modern hooks
- 📝 TypeScript integration for robust code quality
- 🧩 Component architecture with reusable UI elements
- 🎛️ State management for complex 3D interactions

### **🎮 3D Development Mastery**

- 🎨 Three.js expertise for complex 3D scenes
- ✨ Shader materials and lighting optimization
- ⚡ Performance-conscious 3D rendering
- 🌐 Cross-browser WebGL compatibility

### **✨ User Experience Innovation**

- 👆 Intuitive 3D model interaction
- 🎬 Smooth scroll-triggered animations
- 📱 Mobile-first responsive design
- 🚀 Progressive enhancement with loading states

---

## 👨‍💻 Author

**Denis Shevchenko** — Front End Developer specializing in React applications, 3D web graphics, and modern animation techniques. Passionate about creating immersive web experiences that push the boundaries of what's possible in the browser.

---

## 🔧 Customization

The project is built with modularity in mind:

- 🏎️ **3D Model**: Easily replaceable with other GLB/GLTF models
- 🎨 **Colors**: Configurable color palette in TypeScript types
- 🎬 **Animations**: Centralized GSAP configuration
- 📱 **Responsive**: Adaptive CSS using Container Queries
- 🎨 **Styling**: CSS variables for easy theme customization

---

## 📄 License

This project is open-source and available under the MIT License.

---

<div align="center">
  <p>Made with ❤️ using Next.js, Three.js, and GSAP</p>
  <p>Perfect showcase of modern Front End Development with 3D graphics</p>
</div>
