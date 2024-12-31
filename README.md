# Modern Bento Grid Portfolio - Installation Guide

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

## Step-by-Step Installation

1. **Create a new project**
```bash
npm create astro@latest my-bento-portfolio
```
Choose the following options:
- Template: Empty Project
- Typescript: Yes (strict)
- Install dependencies: Yes
- Initialize git repository: Yes

2. **Navigate to project directory**
```bash
cd my-bento-portfolio
```

3. **Install required dependencies**
```bash
npm install @astrojs/tailwind tailwindcss @fontsource-variable/plus-jakarta-sans @fontsource/press-start-2p
```

4. **Update project files**

Replace or create the following files with the provided code:

```bash
src/
├── components/
│   ├── BentoGrid.astro    # Grid layout component
│   ├── Card.astro         # Individual card component
│   ├── ProfileCard.astro  # Profile section component
│   └── ThemeSwitcher.astro # Dark mode toggle
├── data/
│   └── links.ts           # Your social media and donation links
├── layouts/
│   └── Layout.astro       # Main layout component
└── pages/
    └── index.astro        # Homepage
```

5. **Configure Tailwind**
Create or update `tailwind.config.mjs`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans Variable', 'sans-serif'],
        retro: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        primary: {
          light: '#FF6B6B',
          dark: '#4A90E2',
        },
        secondary: {
          light: '#4ECDC4',
          dark: '#9B59B6',
        },
        background: {
          light: '#F7F7F7',
          dark: '#1A1A1A',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
```

6. **Update your information**
Edit `src/data/links.ts`:
- Replace social media URLs
- Update profile information
- Customize donation links

7. **Start development server**
```bash
npm run dev
```

8. **Build for production**
```bash
npm run build
```

## Customization Guide

### 1. Colors
Edit `tailwind.config.mjs` to change the color scheme:
```js
colors: {
  primary: {
    light: '#YOUR_COLOR',
    dark: '#YOUR_COLOR',
  }
}
```

### 2. Profile
Update `BentoGrid.astro`:
```astro
<ProfileCard
  name="Your Name"
  title="Your Title"
  bio="Your Bio"
  avatar="your-avatar-url"
/>
```

### 3. Social Links
Add or modify links in `src/data/links.ts`:
```typescript
export const socials = [
  {
    title: 'Platform Name',
    icon: '🚀',
    link: 'https://your-link.com',
    color: 'bg-[#YOUR_COLOR]',
    description: 'Your description'
  }
];
```

## Troubleshooting

1. If styles aren't working:
```bash
npm run astro clear
npm run dev
```

2. If fonts aren't loading:
Check `Layout.astro` for proper font imports

3. If dark mode isn't working:
Check `ThemeSwitcher.astro` implementation

## Development Tips

1. Mobile-first development
   - Test on multiple devices
   - Use responsive classes

2. Performance
   - Optimize images
   - Use lazy loading
   - Minimize dependencies

3. Accessibility
   - Use semantic HTML
   - Add proper ARIA labels
   - Ensure keyboard navigation

## Deployment

1. Build the project:
```bash
npm run build
```

2. Preview the build:
```bash
npm run preview
```

3. Deploy to your preferred platform:
   - Netlify
   - Vercel
   - GitHub Pages