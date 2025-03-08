'use client';

import React, { useRef, useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

interface TimelineItem {
  title: string;
  date: string;
  description: string;
}

interface VerticalTimelineProps {
  items: TimelineItem[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ items }) => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const handleIntersection = (index: number, isIntersecting: boolean) => {
    if (isIntersecting) {
      setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <div className="w-full max-w-3xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-500 before:to-transparent">
              {items.map((item, index) => (
                <TimelineItem
                  key={index}
                  index={index}
                  item={item}
                  isVisible={visibleIndexes.includes(index)}
                  onIntersection={handleIntersection}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{
  index: number;
  item: TimelineItem;
  isVisible: boolean;
  onIntersection: (index: number, isIntersecting: boolean) => void;
}> = ({ index, item, isVisible, onIntersection }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        onIntersection(index, entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [index, onIntersection]);

  const sanitizedHTML = typeof window !== 'undefined' ? DOMPurify.sanitize(item.description) : item.description;


  return (
    <div
      ref={ref}
      className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-surface-back-cardblack bg-primary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="10"
        >
          <path
            fillRule="nonzero"
            d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
          />
        </svg>
      </div>

      {/* Card */}
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-surface-back-cardblack p-4 rounded border border-gray-200 dark:border-gray-700 shadow">
        <div className="flex items-center justify-between space-x-2 mb-1">
          <div className="font-bold text-primary-700 dark:text-primary-200">{item.title}</div>
          <time className="text-xs font-medium text-primary-500 dark:text-primary-400">{item.date}</time>
        </div>
        <div
          className="text-gray-600 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        />
      </div>
    </div>
  );
};

export default VerticalTimeline;
