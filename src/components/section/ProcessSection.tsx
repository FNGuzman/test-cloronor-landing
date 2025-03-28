'use client';

import DynamicIcon from '@/helpers/DinamycIcon';
import { useEffect, useRef, useState } from 'react';

export interface ProcesoItem {
  id: number;
  title: string;
  detail: string;
  icon: string;
}

export default function ProcessSection({ items }: { items: ProcesoItem[] }) {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const handleIntersection = (index: number, isIntersecting: boolean) => {
    if (isIntersecting) {
      setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item, index) => (
        <div key={item.id} className="flex justify-center basis-full sm:basis-1/2 md:basis-1/3 max-w-full p-5">
          <ProcessItem
            icon={item.icon}
            title={item.title}
            description={item.detail}
            index={index}
            isVisible={visibleIndexes.includes(index)}
            onIntersection={handleIntersection}
          />
        </div>
      ))}
    </div>
  );
}

function ProcessItem({
  icon,
  title,
  description,
  index,
  isVisible,
  onIntersection
}: {
  icon: string;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
  onIntersection: (index: number, isIntersecting: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      onIntersection(index, entry.isIntersecting);
    }, { threshold: 0.1 });

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [index, onIntersection]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center justify-center w-24 h-24 mx-auto bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
        <DynamicIcon iconName={icon} w="w-16" h="h-16" />
      </div>
      <h3 className="text-xl font-bold text-primary-700 dark:text-primary-200 text-center">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
}
