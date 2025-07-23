import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'NZ Residency | Investor Pathway to New Zealand Residency',
    template: '%s | NZ Residency'
  },
  description: 'Your investor pathway to residency in New Zealand. Secure your family&apos;s future with the Active Investor Plus visa. Professional investment guidance and relocation advice.',
  keywords: [
    'New Zealand residency',
    'investor visa',
    'Active Investor Plus',
    'NZ immigration',
    'investment visa',
    'New Zealand investment',
    'residency by investment',
    'golden visa'
  ],
  authors: [{ name: 'NZ Residency' }],
  creator: 'NZ Residency',
  publisher: 'NZ Residency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nzresidency.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nzresidency.com',
    title: 'NZ Residency | Investor Pathway to New Zealand Residency',
    description: 'Your investor pathway to residency in New Zealand. Secure your family\'s future with the Active Investor Plus visa.',
    siteName: 'NZ Residency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NZ Residency | Investor Pathway to New Zealand Residency',
    description: 'Your investor pathway to residency in New Zealand. Secure your family\'s future with the Active Investor Plus visa.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

