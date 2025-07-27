# BlogSphere - Modern Blog Application

# 🚀 Live Demo: [https://blogspher.netlify.app/](https://blogspher.netlify.app/)
 
<p align="center">
  <a href="https://blogspher.netlify.app/">
    <img src="https://raw.githubusercontent.com/AbhishekRDJ/Mega-Blog-App-Project/main/public/logo2.png" alt="BlogSphere Logo" width="150"/>
  </a>
</p>

![BlogSpher Preview](https://github.com/AbhishekRDJ/Mega-Blog-App-Project/assets/100703816/24220268-f938-4229-873b-550267784650)

*A cutting-edge blog platform combining modern web technologies with immersive 3D experiences*

## 📸 Screenshots

## 📸 Screenshots

| Google Auth | Home Page   | Posts         |Add post       |
|-------------|-------------|---------------|---------------|
| ![image](https://raw.githubusercontent.com/AbhishekRDJ/Mega-Blog-App-Project/main/public/image.png) | ![image2](https://raw.githubusercontent.com/AbhishekRDJ/Mega-Blog-App-Project/main/main/public/image3.png) | ![image3](https://raw.githubusercontent.com/AbhishekRDJ/Mega-Blog-App-Project/main/main/public/image4.png) |


## 🌟 Features

- ⚡️ **React 19 + Vite** - Lightning-fast development with HMR
- 🎮 **Three.js Integration** - Immersive 3D experiences and animations
- 🔐 **OAuth Authentication** - Secure login with multiple providers
- 🗄️ **Appwrite Backend** - Robust BaaS for data management
- 🛠️ **Redux Toolkit** - Predictable state management for complex features
- 🌐 **Context API** - Lightweight state sharing for UI concerns
- 📝 **Rich Text Editor** - Advanced content creation with TinyMCE
- 🧭 **React Router v7** - Smooth client-side navigation
- ✅ **React Hook Form** - Efficient form handling and validation
- 📱 **Responsive Design** - Mobile-first, cross-device compatibility
- 🎨 **Modern UI/UX** - Clean, intuitive interface design
- 🔍 **Search & Filter** - Advanced content discovery
- 📊 **Analytics Dashboard** - User engagement insights
- 🌙 **Dark/Light Mode** - Theme switching support

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Next-generation frontend build tool
- **Three.js** - 3D graphics and animations
- **Redux Toolkit** - State management for complex data
- **React Context API** - Component state sharing
- **React Router v7** - Client-side routing
- **React Hook Form** - Form management
- **TinyMCE** - Rich text editing

### Backend & Services
- **Appwrite** - Backend-as-a-Service
- **OAuth Providers** - Google, GitHub, Facebook authentication
- **Netlify** - Deployment and hosting

### Development Tools
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality assurance

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+ 
- **npm** or **yarn**
- **Appwrite** instance (cloud or self-hosted)

### Installation

```bash
# Clone the repository
git clone git@github.com:AbhishekRDJ/Mega-Blog-App-Project.git


# Install dependencies
npm install

# Copy environment template
cp .env.example .env
```

### Environment Configuration

Create a `.env` file with your configuration:

```env
# Appwrite Configuration
VITE_APPWRITE_URL=https://your-appwrite-endpoint
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_COLLECTION_ID=your-collection-id
VITE_APPWRITE_BUCKET_ID=your-storage-bucket-id



# TinyMCE API Key
VITE_TINYMCE_API_KEY=your-tinymce-api-key

# Three.js Assets CDN (optional)
VITE_THREE_ASSETS_URL=https://your-cdn-url
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:5173
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Netlify
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components
│   ├── forms/           # Form components
│   ├── three/           # Three.js components
│   └── ui/              # UI library components
├── pages/               # Page components
│   ├── Home/
│   ├── Blog/
│   ├── Auth/
│   └── Dashboard/
├── store/               # Redux store configuration
│   ├── slices/          # Redux Toolkit slices
│   └── middleware/      # Custom middleware
├── context/             # React Context providers
│   ├── AuthContext.jsx
│   ├── ThemeContext.jsx
│   └── UIContext.jsx
├── services/            # API and external services
│   ├── appwrite/        # Appwrite configuration
│   ├── auth/            # Authentication services
│   └── api/             # API calls
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── assets/              # Static assets
│   ├── models/          # 3D models
│   ├── textures/        # Three.js textures
│   └── images/          # Images
├── styles/              # Global styles
└── types/               # TypeScript definitions
```

## 🏗️ Architecture

### State Management Strategy

- **Redux Toolkit**: Complex application state (user data, blog posts, comments)
- **Context API**: UI state and cross-cutting concerns (theme, notifications, modals)
- **Local State**: Component-specific state with useState/useReducer

### Three.js Integration

```javascript
// Example Three.js component
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

function BlogHero() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <Environment preset="sunset" />
    </Canvas>
  )
}
```

### OAuth Implementation

```javascript
// OAuth authentication flow
import { account } from './appwrite/config'

export const loginWithGoogle = async () => {
  try {
    await account.createOAuth2Session('google', 
      'http://localhost:5173/auth/success',
      'http://localhost:5173/auth/failure'
    )
  } catch (error) {
    console.error('OAuth login failed:', error)
  }
}
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript checks
npm run test         # Run tests
npm run deploy       # Deploy to Netlify
```

## 🎨 Customization

### Themes
The app supports custom themes through CSS variables and Context API:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1f2937;
  --accent-color: #059669;
  --text-color: #374151;
  --bg-color: #ffffff;
}

[data-theme="dark"] {
  --text-color: #f3f4f6;
  --bg-color: #111827;
}
```

### Three.js Scenes
Add custom 3D scenes by creating components in `src/components/three/`:

```javascript
// Custom 3D component
export function CustomScene() {
  return (
    <group>
      {/* Your 3D objects here */}
    </group>
  )
}
```

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Enable continuous deployment

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy dist folder to your preferred hosting service
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📋 Roadmap

- [ ] **Real-time collaboration** on blog posts
- [ ] **Advanced 3D blog templates**
- [ ] **AI-powered content suggestions**
- [ ] **Mobile app** with React Native
- [ ] **Multi-language support**
- [ ] **Advanced analytics dashboard**
- [ ] **Plugin system** for extensions
- [ ] **WebXR support** for VR/AR experiences

## 🐛 Known Issues

- Three.js performance on mobile devices may vary
- OAuth redirect handling in development mode
- TinyMCE loading delays on slow connections

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Team](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the blazing-fast build tool
- [Three.js](https://threejs.org/) for 3D capabilities
- [Appwrite](https://appwrite.io/) for the backend infrastructure
- [Netlify](https://netlify.com/) for seamless deployment

## 📞 Support

- **Documentation**: [Project Wiki](https://github.com/AbhishekRDJ/)
- **Issues**: [GitHub Issues](https://github.com/AbhishekRDJ/)
- **Discussions**: [GitHub Discussions](https://github.com/AbhishekRDJ/)
- **Email**: abhisheksangule6@gmail.com

---

<div align="center">

**Built with ❤️ by [Your Name](https://github.com/AbhishekRDJ)**

[⭐ Star this repo](https://github.com/AbhishekRDJ/Mega-Blog-App-Project) | [🐛 Report Bug](https://github.com/AbhishekRDJ) | [✨ Request Feature](https://github.com/AbhishekRDJ/)

</div>