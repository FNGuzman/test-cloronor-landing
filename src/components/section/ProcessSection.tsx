'use client';

import DynamicIcon from '@/helpers/DinamycIcon';
import { useEffect, useRef, useState } from 'react';
import { FaIndustry, FaRecycle, FaShippingFast, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

const ProcessSection = () => {
  const processItems = [
    {
      icon: 'IoFlask',
      title: 'Producción Moderna',
      description:
        'Utilizamos tecnologías avanzadas para producir cloro, soda cáustica e hipoclorito de sodio con la máxima eficiencia.',
    },
    {
      icon: 'IoEarth',
      title: 'Sostenibilidad',
      description:
        'Nos comprometemos a minimizar el impacto ambiental a través de procesos limpios y el reciclaje de subproductos y el respeto al medio ambiente.',
    },
    {
      icon: 'IoLocationSharp',
      title: 'Logística Segura',
      description:
        'Garantizamos la entrega segura de productos a nuestros clientes, priorizando la calidad en cada etapa.',
    },
    {
      icon: 'IoShieldHalf',
      title: 'Seguridad Operativa',
      description:
        'Nuestros procesos están diseñados para garantizar la seguridad de nuestros empleados y clientes en todo momento.',
    },
    {
      icon: 'IoBulb',
      title: 'Innovación Constante',
      description:
        'Adoptamos nuevas tecnologías y métodos innovadores para mantenernos a la vanguardia en todos nuestros procesos.',
    },
  ];

  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const handleIntersection = (index: number, isIntersecting: boolean) => {
    if (isIntersecting) {
      setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
    }
  };

  return (
    <section id="process" className="py-16 px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-200 mb-4">Nuestro Proceso</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          El proceso utiliza la última tecnología de membrana para obtener el Cloro y la Soda Cáustica, materia de nuestro producto Hipoclorito, utilizando únicamente sal, agua y electricidad.
        </p>
      </div>
      <div className="flex flex-wrap justify-center ">
        {processItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-center basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 max-w-full p-5"
          >
            <ProcessItem
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
              isVisible={visibleIndexes.includes(index)}
              onIntersection={handleIntersection}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const ProcessItem: React.FC<{
  icon: any;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
  onIntersection: (index: number, isIntersecting: boolean) => void;
}> = ({ icon, title, description, index, isVisible, onIntersection }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current; // Copia el valor de ref.current a una variable local

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

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center justify-center w-24 h-24 mx-auto bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
        <DynamicIcon iconName={icon} w='w-16' h='h-16' />
      </div>
      <h3 className="text-xl font-bold text-primary-700 dark:text-primary-200 text-center">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
};

export default ProcessSection;
