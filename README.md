# Clone Hero React - iOS Developer Hiring Platform

A modern, responsive web application built with React and TypeScript for connecting organizations with top-tier iOS developers. This platform streamlines the hiring process with pre-vetted talent, comprehensive profiles, and seamless user experience.

## 🚀 Features

### Core Functionality
- **Developer Showcase**: Interactive scrolling cards displaying iOS developer profiles with photos, roles, and company experience
- **Client Testimonials**: Dynamic scrolling client logos (CBS, CNBC, FOX, USA Today)
- **Authentication System**: Secure login/signup with Supabase integration
- **User Profiles**: Support for both individual developers and organizations
- **Responsive Design**: Fully responsive across all devices and screen sizes

### Technical Features
- **Real-time Animations**: Smooth scrolling animations for developer and client showcases
- **Form Validation**: Robust form handling with React Hook Form
- **Toast Notifications**: User feedback with Sonner and shadcn/ui toasters
- **Type Safety**: Full TypeScript implementation for reliable development
- **Modern UI**: Clean, professional interface with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI

### Backend & Database
- **Supabase** - Backend-as-a-Service with authentication and database
- **PostgreSQL** - Robust relational database
- **Row Level Security (RLS)** - Database-level security policies

### Development Tools
- **ESLint** - Code linting and formatting
- **React Query** - Data fetching and state management
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
clone-hero-react/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── img1.png - img6.png # Developer profile images
├── src/
│   ├── assets/            # Imported assets
│   │   ├── CBS.png
│   │   ├── CNBC.png
│   │   ├── FOX.png
│   │   └── USA-TODAY.png
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   ├── ClientsSection.tsx
│   │   ├── Header.tsx
│   │   └── ...
│   ├── pages/            # Route components
│   │   ├── Index.tsx
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   └── ...
│   ├── integrations/     # External service integrations
│   │   └── supabase/
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── App.tsx
├── supabase/            # Database migrations and config
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account (for backend services)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mashruf526/clone-hero-react.git
   cd clone-hero-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy the Supabase configuration from `src/integrations/supabase/client.ts`
   - The project is already configured with Supabase credentials

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Key Components

### HeroSection
- Main landing section with animated developer cards
- Email capture form for hiring requests
- Statistics display (developers, countries, projects)

### ClientsSection
- Scrolling client logos with hover effects
- Displays major media clients (CBS, CNBC, FOX, USA Today)

### Authentication Pages
- **Login**: Email/password authentication
- **Signup**: Registration with OTP verification
- **Welcome**: Post-registration landing page

### Other Sections
- **TeamSection**: Company team showcase
- **IndustrySection**: Industry expertise display
- **NetworkSection**: Global reach information
- **PricingSection**: Service pricing tiers
- **NewsSection**: Latest company news and updates
- **CTASection**: Call-to-action for hiring

## 🔒 Authentication Flow

1. **Registration**: Users sign up with email and receive OTP verification
2. **Login**: Email/password authentication with session persistence
3. **Profile Creation**: Users create detailed profiles (individual or organization)
4. **Session Management**: Automatic token refresh and session persistence

## 🎭 Animations & Interactions

- **Scrolling Cards**: Continuous horizontal scrolling for developers and clients
- **Hover Effects**: Smooth transitions on card hover
- **Form Interactions**: Real-time validation and feedback
- **Responsive Animations**: Optimized for all screen sizes

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Breakpoint-specific layouts (sm, md, lg, xl)
- Touch-friendly interactions
- Optimized typography scaling

## 🔧 Customization

### Adding New Developers
Edit `src/components/HeroSection.tsx`:
```typescript
const developers: Developer[] = [
  // Add new developer objects here
  {
    name: "New Developer",
    role: "Senior iOS Developer",
    company: "Company Name",
    image: "/new-image.png"
  }
];
```

### Adding New Clients
Edit `src/components/ClientsSection.tsx`:
```typescript
const clients = [
  // Add new client objects here
  { name: "New Client", logo: importedLogo }
];
```

### Styling Customization
- Modify `src/index.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Component-specific styles in individual component files

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add environment variables for Supabase

### Other Platforms
The built files in `dist/` can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 📞 Support

For support or questions, please contact the development team.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**