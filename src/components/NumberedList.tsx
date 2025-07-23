'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface NumberedListItem {
  number: string;
  title?: string;
  description: string;
}

interface NumberedListProps {
  title: string;
  items: NumberedListItem[];
  backgroundClass?: string;
  textColor?: string;
}

const NumberedList: React.FC<NumberedListProps> = ({
  title,
  items,
  backgroundClass = 'bg-gray-100',
  textColor = 'text-gray-900',
}) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: listRef, isVisible: listVisible } = useScrollAnimation();

  return (
    <section className={`${backgroundClass} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Title */}
          <div>
            <h2 
              ref={titleRef as React.RefObject<HTMLHeadingElement>}
              className={`text-4xl lg:text-6xl font-light ${textColor} transition-all duration-1000 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {title}
            </h2>
          </div>

          {/* Numbered Items */}
          <div 
            ref={listRef as React.RefObject<HTMLDivElement>}
            className="space-y-12"
          >
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`flex gap-6 transition-all duration-1000 ${
                  listVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: listVisible ? `${(index + 1) * 150}ms` : '0ms' 
                }}
              >
                <div className={`text-2xl font-light ${textColor} opacity-60 min-w-[3rem]`}>
                  {item.number}
                </div>
                <div className="space-y-2">
                  {item.title && (
                    <h3 className={`text-lg font-medium ${textColor}`}>
                      {item.title}
                    </h3>
                  )}
                  <p className={`text-base leading-relaxed ${textColor} opacity-80`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberedList;

