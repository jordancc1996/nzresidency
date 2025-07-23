'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Discover New Zealand', href: '/discover-new-zealand' },
    { name: 'Investor Visa', href: '/investor-visa' },
    { name: 'Investment Solutions', href: '/investment-solutions' },
    { name: 'Our Services', href: '/our-services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-green-700 text-white px-3 py-1 text-sm font-medium">
              nzresidency.com
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-medium hover:transform hover:scale-105"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-green-700 text-white px-4 py-2 text-sm font-medium hover:bg-green-800 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            >
              Enquire
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-green-700 text-white px-4 py-2 text-sm font-medium hover:bg-green-800 transition-colors inline-block w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Enquire
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

