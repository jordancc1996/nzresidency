# NZ Residency Website

A professional, modern website for New Zealand residency investment services, built with Next.js, TypeScript, and Tailwind CSS. Optimized for GitHub Codespaces and Vercel deployment.

## 🚀 Quick Start

### GitHub Codespaces (Recommended)

1. **Open in Codespaces**
   - Click the "Code" button on GitHub
   - Select "Codespaces" tab
   - Click "Create codespace on main"
   - Wait for automatic setup (dependencies will install automatically)

2. **Start Development Server**
   ```bash
   npm run codespaces
   ```

3. **Access Your Site**
   - Codespaces will automatically forward port 3000
   - Click the notification or go to the "Ports" tab
   - Your site will be available at the forwarded URL

### Local Development

1. **Clone the Repository**
   ```bash
   git clone <your-repo-url>
   cd nz-residency-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Your Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
nz-residency-website/
├── .devcontainer/
│   └── devcontainer.json          # GitHub Codespaces configuration
├── .vscode/
│   ├── settings.json              # VS Code settings
│   └── extensions.json            # Recommended extensions
├── public/
│   ├── favicon.ico                # Site favicon
│   ├── robots.txt                 # SEO robots file
│   └── images/                    # Static images
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── layout.tsx             # Root layout
│   │   ├── page.tsx               # Homepage
│   │   ├── discover-new-zealand/  # Discover NZ page
│   │   ├── investor-visa/         # Investor visa page
│   │   ├── investment-solutions/  # Investment solutions page
│   │   ├── our-services/          # Services page
│   │   └── contact/               # Contact page
│   ├── components/                # Reusable React components
│   │   ├── Header.tsx             # Site header/navigation
│   │   ├── Footer.tsx             # Site footer
│   │   ├── HeroSection.tsx        # Hero section component
│   │   ├── ContentSection.tsx     # Content section component
│   │   ├── NumberedList.tsx       # Numbered list component
│   │   └── ContactForm.tsx        # Contact form component
│   ├── hooks/                     # Custom React hooks
│   │   └── useScrollAnimation.ts  # Scroll animation hook
│   └── styles/
│       └── globals.css            # Global styles
├── package.json                   # Dependencies and scripts
├── next.config.js                 # Next.js configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── vercel.json                    # Vercel deployment configuration
└── README.md                      # This file
```

## 🛠 Available Scripts

```bash
# Development
npm run dev          # Start development server (localhost)
npm run codespaces   # Start development server (Codespaces)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Utilities
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🎨 Features

### Design & User Experience
- **Clean, Modern Design** - Inspired by sophisticated design patterns
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Mobile Responsive** - Optimized for all screen sizes
- **Fast Loading** - Optimized images and code splitting
- **SEO Optimized** - Meta tags, structured data, and semantic HTML

### Technical Features
- **Next.js 15** - Latest version with App Router
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Animations** - Smooth scroll animations and transitions
- **Performance Optimized** - Lighthouse score optimized

### Content Management
- **6 Main Pages** - Homepage, Discover NZ, Investor Visa, Investment Solutions, Services, Contact
- **Contact Form** - Functional contact form with validation
- **SEO Metadata** - Comprehensive meta tags for each page
- **Responsive Images** - Optimized image loading

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

2. **Environment Variables** (Optional)
   - Copy `.env.example` to `.env.local`
   - Add your environment variables in Vercel dashboard

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### Other Platforms

The site can be deployed to any platform that supports Node.js:

- **Netlify**: Connect GitHub repo and deploy
- **Railway**: Connect GitHub repo and deploy
- **DigitalOcean App Platform**: Connect GitHub repo and deploy

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME="NZ Residency"

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@your-domain.com
NEXT_PUBLIC_CONTACT_PHONE="+64 21 000 0000"

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Customization

1. **Branding**
   - Update logo in `Header.tsx` and `Footer.tsx`
   - Modify colors in `tailwind.config.js`
   - Replace favicon in `public/favicon.ico`

2. **Content**
   - Edit page content in `src/app/*/page.tsx` files
   - Update contact information in `ContactForm.tsx`
   - Modify navigation in `Header.tsx`

3. **Styling**
   - Customize colors in `tailwind.config.js`
   - Modify animations in `globals.css`
   - Adjust component styles in individual components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Features

- **Meta Tags** - Comprehensive meta tags for each page
- **Open Graph** - Social media sharing optimization
- **Structured Data** - JSON-LD structured data
- **Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine crawling instructions

## 📞 Contact Information

**Primary Contact:**
- **Name:** Mischa Mannix-Opie
- **Title:** Director of Client Experience
- **Email:** mischa@nzresidency.com
- **Phone:** +64 21 578 054

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

**Ready for production!** This website is fully functional and optimized for deployment on Vercel or any modern hosting platform.

