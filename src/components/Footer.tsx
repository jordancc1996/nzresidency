'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'Discover New Zealand', href: '/discover-new-zealand' },
    { name: 'Investor Visa', href: '/investor-visa' },
    { name: 'Investment Solutions', href: '/investment-solutions' },
    { name: 'Our Services', href: '/our-services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-green-700 text-white px-3 py-1 text-sm font-medium">
                nzresidency.com
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Your investor pathway to residency in New Zealand
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-medium text-sm">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-gray-900 font-medium text-sm">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Mischa Mannix-Opie</strong><br />
                Director of Client Experience
              </p>
              <p>
                Email: <a href="mailto:mischa@nzresidency.com" className="hover:text-gray-900 transition-colors">mischa@nzresidency.com</a>
              </p>
              <p>
                Phone: <a href="tel:+6421578054" className="hover:text-gray-900 transition-colors">+64 21 578 054</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {currentYear} NZ Residency. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

