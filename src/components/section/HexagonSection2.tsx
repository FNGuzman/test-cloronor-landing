'use client';
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { applyTailwindClasses } from "@/helpers/applyTailwindClasses";

// Importa el componente TestSm de manera dinámica
const TestSm = dynamic(() => import("./TestSm"));

interface HexagonSectionProps {
  image: string; // URL de la imagen
  title: string;
  text: string; // El texto puede contener HTML
  imagePosition?: 'left' | 'right';
}

export default function HexagonSection({
  image,
  title,
  text,
  imagePosition = 'left',
}: HexagonSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [processedText, setProcessedText] = useState<string>("");

  useEffect(() => {
    // Procesar el texto HTML con el helper
    const processed = applyTailwindClasses(text);
    setProcessedText(processed);
  }, [text]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      {/* Diseño completo para pantallas grandes */}
      <div
        className={`hidden lg:flex items-center ${imagePosition === 'right' ? 'flex-row-reverse' : 'flex-row'
          }`}
      >
        {/* Hexágono con fondo de imagen */}
        <div
          className={`relative w-full max-w-xs sm:max-w-md md:max-w-md lg:max-w-md xl:max-w-md aspect-square transform transition-all duration-1000 ease-out mx-2 ${isVisible
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${imagePosition === 'left' ? '-translate-x-10' : 'translate-x-10'}`
            }`}
        >
          <div
            className="hexagon bg-center bg-cover"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </div>

        {/* Contenido textual */}
        <div
          className={`mt-5 md:mt-8 text-left lg:mt-0 md:text-center lg:text-left max-w-2xl transform transition-all duration-1000 ease-out lg:px-5 ${isVisible
            ? "opacity-100 translate-x-0"
            : `opacity-0 ${imagePosition === 'left' ? 'translate-x-10' : '-translate-x-10'}`
            }`}
        >
          <h2 className="text-primary-900 dark:text-primary-200 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
            {title}
          </h2>
          <div
            className="mt-6 text-gray-900 dark:text-gray-300 text-base"
            dangerouslySetInnerHTML={{ __html: processedText }}
          />
        </div>
      </div>

      {/* Componente alternativo para pantallas medianas y menores */}
      <div className="block lg:hidden">
        <TestSm
          image={image}
          title={title}
          text={text}
          imagePosition={imagePosition}
        />
      </div>
    </section>
  );
}
