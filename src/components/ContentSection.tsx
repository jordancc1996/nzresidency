'use client';

import React from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ContentSectionProps {
  title: string;
  content: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundClass?: string;
  textColor?: string;
  layout?: 'center' | 'left' | 'split';
  showPattern?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  content,
  ctaText,
  ctaLink,
  backgroundClass = 'bg-white',
  textColor = 'text-gray-900',
  layout = 'center',
  showPattern = false,
}) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const renderContent = () => (
    <div className={`space-y-8 ${layout === 'center' ? 'text-center max-w-4xl mx-auto' : 'max-w-3xl'}`}>
      <h2 
        ref={titleRef as React.RefObject<HTMLHeadingElement>}
        className={`text-3xl lg:text-5xl font-light leading-tight ${textColor} transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {title}
      </h2>
      <div 
        ref={contentRef as React.RefObject<HTMLDivElement>}
        className={`text-lg leading-relaxed ${textColor} opacity-80 space-y-4 transition-all duration-1000 delay-200 ${
          contentVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaText && ctaLink && (
        <div 
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`${layout === 'center' ? 'flex justify-center' : ''} transition-all duration-1000 delay-400 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Link
            href={ctaLink}
            className="inline-block bg-green-700 text-white px-6 py-3 font-medium hover:bg-green-800 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
          >
            {ctaText}
          </Link>
        </div>
      )}
    </div>
  );

  const renderPattern = () => (
    <div className="hidden lg:block relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className={`${textColor} opacity-5 transition-all duration-1500 delay-600 ${
            titleVisible ? 'opacity-5 scale-100' : 'opacity-0 scale-95'
          }`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 15 }, (_, i) => (
            <g key={i}>
              <line
                x1={20 + i * 12}
                y1={50}
                x2={50 + i * 12}
                y2={120}
                stroke="currentColor"
                strokeWidth="1.5"
                transform={`rotate(${i * 8} 150 150)`}
              />
              <line
                x1={30 + i * 10}
                y1={180}
                x2={60 + i * 10}
                y2={250}
                stroke="currentColor"
                strokeWidth="1"
                transform={`rotate(${-i * 6} 150 150)`}
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );

  return (
    <section className={`${backgroundClass} py-20 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {layout === 'split' ? (
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {renderContent()}
            {showPattern && renderPattern()}
          </div>
        ) : (
          renderContent()
        )}
      </div>
    </section>
  );
};

export default ContentSection;

