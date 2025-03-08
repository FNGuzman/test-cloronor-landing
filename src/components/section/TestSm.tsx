import { applyTailwindClasses } from '@/helpers/applyTailwindClasses';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface TestSmProps {
    image: string; // URL de la imagen
    title: string;
    text: string; // Contenido en formato HTML o texto plano
    imagePosition?: 'left' | 'right';
}

const TestSm: React.FC<TestSmProps> = ({ image, title, text, imagePosition = 'left' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [processedText, setProcessedText] = useState<string>("");

    useEffect(() => {
        // Procesar el texto HTML con el helper
        const processed = applyTailwindClasses(text);
        setProcessedText(processed);
    }, [text]);

    useEffect(() => {
        // Simula visibilidad (puedes usar IntersectionObserver si es necesario)
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 200); // Simula un retraso antes de hacer visible el componente
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="relative">
            {/* Título con transición */}
            <h2
                className={`text-primary-900 dark:text-primary-200 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase mb-3 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    }`}
            >
                {title}
            </h2>

            {/* Contenedor de imagen responsiva */}
            <div className={`float-right ml-6 ${imagePosition === 'right' ? 'float-right' : 'float-left'}`}>
                <div className="relative aspect-w-4 aspect-h-5 sm:aspect-w-16 sm:aspect-h-9 w-20 sm:w-44">
                    <Image
                        src={image}
                        alt={title}
                        width={150}
                        height={100}
                        className="rounded-lg object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
                </div>
            </div>

            {/* Texto con márgenes y transición */}
            <div
                className={`mt-6 text-gray-900 dark:text-gray-300 text-base leading-relaxed transform transition-all duration-1000 ease-out text-justify ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                dangerouslySetInnerHTML={{ __html: processedText }}
            />
        </div>
    );
};

export default TestSm;
