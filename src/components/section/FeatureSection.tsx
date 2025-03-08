'use client';

import { useEffect, useState, useRef } from "react";

interface FeatureSectionProps {
  image: string; // URL de la imagen
  title: string; // Título principal
  text: string; // Texto descriptivo
  points: string[]; // Lista de puntos destacados
}

export default function FeatureSection({ image, title, text, points }: FeatureSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Activa la animación cuando la sección entra al viewport
          observer.disconnect(); // Detener la observación después de la primera activación
        }
      },
      {
        threshold: 0.2, // El 20% del elemento debe estar visible para activarse
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 px-8 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center transform transition-transform duration-1000 ${isVisible ? "translate-x-0" : "translate-y-4 md:translate-x-10 w-40"
          }`}
      >
        {/* Imagen ocupando 7 columnas */}
        <div
          className="col-span-12 md:col-span-12 lg:col-span-5 relative rounded-lg shadow-lg overflow-hidden  border-red-500 w-40"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingBottom: "56.25%", // Aspect ratio 16:9
          }}
        ></div>

        {/* Contenido textual ocupando 5 columnas */}
        <div className="col-span-12 md:col-span-12 lg:col-span-7 text-center md:text-left">
          <h2 className="text-primary-900 dark:text-primary-200 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
            {title}
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            {text}
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary-500 text-white flex items-center justify-center rounded-full">
                  ✓
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  {point}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
