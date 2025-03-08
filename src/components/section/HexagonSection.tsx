'use client';

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { applyTailwindClasses } from "@/helpers/applyTailwindClasses";

interface HexagonSectionProps {
  image: string;
  title: string;
  text: string;
  imageLeft?: boolean;  // Booleano en lugar de 'left' o 'right'
}

export default function HexagonSection({
  image,
  title,
  text,
  imageLeft = true,  // Por defecto es true, lo que corresponderá a 'left'
}: HexagonSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [processedText, setProcessedText] = useState<string>("");

  useEffect(() => {
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
      className={`flex flex-col items-center justify-center  
        ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      <div
        className={`relative w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square transform transition-all duration-1000 ease-out mx-2
    ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${imageLeft ? '-translate-x-10' : 'translate-x-10'}`}
    hidden md:block`}
      >
        <div
          className="absolute w-full h-full overflow-hidden"
          style={{
            clipPath: 'polygon(45% 1.33975%, 46.5798% 0.60307%, 48.26352% 0.15192%, 50% 0%, 51.73648% 0.15192%, 53.4202% 0.60307%, 55% 1.33975%, 89.64102% 21.33975%, 91.06889% 22.33956%, 92.30146% 23.57212%, 93.30127% 25%, 94.03794% 26.5798%, 94.48909% 28.26352%, 94.64102% 30%, 94.64102% 70%, 94.48909% 71.73648%, 94.03794% 73.4202%, 93.30127% 75%, 92.30146% 76.42788%, 91.06889% 77.66044%, 89.64102% 78.66025%, 55% 98.66025%, 53.4202% 99.39693%, 51.73648% 99.84808%, 50% 100%, 48.26352% 99.84808%, 46.5798% 99.39693%, 45% 98.66025%, 10.35898% 78.66025%, 8.93111% 77.66044%, 7.69854% 76.42788%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.73648%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.26352%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.57212%, 8.93111% 22.33956%, 10.35898% 21.33975%)',
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div
        className={`mt-5 md:mt-8 text-left lg:mt-0 md:text-center lg:text-left max-w-2xl transform transition-all duration-1000 ease-out lg:px-5
          ${isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${imageLeft ? 'translate-x-10' : '-translate-x-10'}`}`}
      >
        <h2 className="text-primary-900 dark:text-primary-200 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
          {title}
        </h2>
        <div
          className="mt-6 text-gray-900 dark:text-gray-300 text-base"
          dangerouslySetInnerHTML={{ __html: processedText }}
        />
      </div>
    </section>
  );
}
