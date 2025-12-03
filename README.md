# Premium Next.js Theme Sections

A collection of premium, production-ready website sections built with cutting-edge technologies and animations.

## 🚀 Technologies Used

- **Next.js 14** - React framework with App Router
- **Framer Motion** - Component & page animations
- **GSAP + ScrollTrigger** - Advanced scroll animations
- **Locomotive Scroll** - Smooth scrolling experience
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Modern prebuilt components
- **Lottie React** - High-quality UI animations
- **React Query** - Data fetching and caching
- **Next/Image** - Optimized images
- **Lucide React** - Beautiful icons

## 📦 Installation

```bash
npm install
```

## 🎨 Features

### ✨ Advanced Animations
- **Framer Motion**: Smooth component transitions and page animations
- **GSAP ScrollTrigger**: Scroll-based animations with parallax effects
- **3D Transform Effects**: Interactive hover states with 3D rotations
- **Stagger Animations**: Sequential element animations
- **Parallax Scrolling**: Depth and dimension effects

### 🎯 Interactive Elements
- **Hover Effects**: Rich interactive states
- **Smooth Scrolling**: Locomotive Scroll integration
- **Carousel Sliders**: Auto-playing hero sections
- **Product Cards**: 3D tilt effects on hover
- **Animated Backgrounds**: Dynamic gradient overlays

### 🎨 Modern UI Components
- **ShadCN UI**: Pre-built accessible components
- **Custom Buttons**: Multiple variants and sizes
- **Badge System**: Status indicators
- **Rating Stars**: Animated star ratings
- **Loading States**: Skeleton loaders

## 📁 Project Structure

```
├── app/
│   ├── categories-3/     # Enhanced category browsing
│   ├── hero-1/           # Advanced hero carousel
│   ├── products-3/       # Product grid with 3D effects
│   └── ...
├── components/
│   ├── ui/               # ShadCN UI components
│   └── LocomotiveScrollProvider.js
├── lib/
│   └── utils.js          # Utility functions
└── package.json
```

## 🎬 Usage Examples

### Enhanced Category Section
```jsx
// app/categories-3/page.js
- GSAP scroll animations
- Floating icon animations
- Gradient overlays
- Interactive hover states
```

### Advanced Hero Carousel
```jsx
// app/hero-1/page.js
- Auto-playing carousel
- Parallax effects
- Floating particles
- Smooth transitions
```

### Product Grid with 3D Effects
```jsx
// app/products-3/page.js
- 3D tilt on hover
- Stagger animations
- Scroll-triggered reveals
- Interactive product cards
```

## 🎯 Key Features by Section

### Categories Section
- ✅ GSAP ScrollTrigger animations
- ✅ Floating icon animations
- ✅ Gradient background effects
- ✅ Interactive hover states
- ✅ Shine effects on hover

### Hero Section
- ✅ Auto-playing carousel
- ✅ Parallax scrolling
- ✅ Floating particles
- ✅ Smooth slide transitions
- ✅ Navigation controls

### Products Section
- ✅ 3D transform effects
- ✅ Scroll-triggered animations
- ✅ Interactive hover states
- ✅ Rating animations
- ✅ Badge animations

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with ShadCN UI color system.

### Locomotive Scroll
Wrap your app with `LocomotiveScrollProvider` for smooth scrolling:

```jsx
import LocomotiveScrollProvider from '@/components/LocomotiveScrollProvider'

export default function Layout({ children }) {
  return (
    <LocomotiveScrollProvider>
      {children}
    </LocomotiveScrollProvider>
  )
}
```

## 🎨 Customization

### Colors
Edit `app/globals.css` to customize the color scheme.

### Animations
Adjust animation timings in individual component files.

### Components
All components are fully customizable and can be modified to fit your design needs.

## 📱 Responsive Design

All sections are fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🚀 Performance

- Optimized images with Next/Image
- Code splitting
- Lazy loading
- Smooth 60fps animations
- Efficient re-renders

## 📄 License

This project is open source and available for use in your projects.

## 🤝 Contributing

Feel free to enhance and improve these sections!

---

Built with ❤️ using Next.js and modern web technologies.

