# Images Directory

This directory contains static images for the website.

## Recommended Images

Add the following images to enhance the website:

1. **hero-background.jpg** - Hero section background image
2. **new-zealand-landscape.jpg** - New Zealand landscape for content sections
3. **auckland-skyline.jpg** - Auckland skyline image
4. **wellington-harbor.jpg** - Wellington harbor image
5. **milford-sound.jpg** - Milford Sound landscape
6. **business-meeting.jpg** - Professional business meeting image
7. **family-lifestyle.jpg** - Family lifestyle image
8. **investment-growth.jpg** - Investment/growth concept image

## Image Guidelines

- **Format**: JPG or WebP for photos, PNG for graphics with transparency
- **Size**: Optimize for web (typically under 500KB)
- **Dimensions**: Minimum 1200px width for hero images, 800px for content images
- **Quality**: High quality but web-optimized
- **Alt Text**: Ensure all images have descriptive alt text for accessibility

## Usage

Images can be imported and used in components like this:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-background.jpg"
  alt="Beautiful New Zealand landscape"
  width={1200}
  height={600}
  priority
/>
```

