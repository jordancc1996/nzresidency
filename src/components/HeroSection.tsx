'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundClass?: string;
  textColor?: string;
  showPattern?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundClass = 'bg-gray-50',
  textColor = 'text-gray-900',
  showPattern = true,
}) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: descriptionRef, isVisible: descriptionVisible } = useScrollAnimation();

  return (
    <section className={`${backgroundClass} min-h-screen flex items-center relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 
              ref={titleRef as React.RefObject<HTMLHeadingElement>}
              className={`text-5xl lg:text-7xl font-light leading-tight ${textColor} transition-all duration-1000 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {title}
            </h1>
            {subtitle && (
              <p 
                ref={subtitleRef as React.RefObject<HTMLParagraphElement>}
                className={`text-xl lg:text-2xl font-light ${textColor} opacity-80 transition-all duration-1000 delay-200 ${
                  subtitleVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {subtitle}
              </p>
            )}
            {description && (
              <div 
                ref={descriptionRef as React.RefObject<HTMLDivElement>}
                className={`text-lg leading-relaxed ${textColor} opacity-70 space-y-4 max-w-2xl transition-all duration-1000 delay-400 ${
                  descriptionVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>

          {/* Abstract Pattern */}
          {showPattern && (
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 400 400"
                  className={`${textColor} opacity-10 transition-all duration-1500 delay-600 ${
                    titleVisible ? 'opacity-10 scale-100' : 'opacity-0 scale-95'
                  }`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Abstract line pattern inspired by at.inc */}
                  {Array.from({ length: 20 }, (_, i) => (
                    <g key={i}>
                      <line
                        x1={20 + i * 18}
                        y1={50}
                        x2={60 + i * 18}
                        y2={150}
                        stroke="currentColor"
                        strokeWidth="2"
                        transform={`rotate(${i * 5} 200 200)`}
                      />
                      <line
                        x1={30 + i * 15}
                        y1={200}
                        x2={70 + i * 15}
                        y2={300}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        transform={`rotate(${-i * 3} 200 200)`}
                      />
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

