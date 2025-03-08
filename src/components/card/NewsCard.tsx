'use client';

import React, { useEffect, useState, useRef } from 'react';
import demo3 from '../../assets/image/section/demo3.jpg'
import Image from 'next/image';
const NewsCard = () => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Activa la animación cuando la tarjeta entra al viewport
                    observer.disconnect(); // Desconecta el observer después de la primera activación
                }
            },
            { threshold: 0.2 } // El 20% de la tarjeta debe estar visible para activarse
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={cardRef}
            className={`flex items-center justify-center px-4 md:px-12 lg:px-24 transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="relative flex flex-col w-full max-w-5xl rounded-lg shadow-lg bg-white text-primary-900 dark:bg-surface-back-cardblack dark:text-primary-50 overflow-hidden">
                {/* Imagen de la noticia */}
                <div className="relative w-full h-80">
                    <Image
                        src={demo3.src}
                        alt="news image"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Contenido de la tarjeta */}
                <div className="p-8">
                    {/* Metadatos */}
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 9V5.25m0 0H5.25v13.5h13.5V9h-3z"
                                />
                            </svg>
                            <span>Cloronor</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6l3 3"
                                />
                            </svg>
                            <span>Nov 20, 2024</span>
                        </span>
                    </div>

                    {/* Título */}
                    <h3 className="text-3xl font-bold text-primary-900 dark:text-primary-50 mb-4">
                        Obligaciones Negociables
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 lg:line-clamp-6">
                        A diferencia de las acciones, estas obligaciones funcionan como un préstamo que nuestros inversores nos otorgan para financiar el crecimiento de la empresa. Como tenedor de una obligación, recibirás un retorno de tu inversión a través de pagos de intereses y, al finalizar el plazo, recuperas el capital invertido. Es una oportunidad de participar en el éxito de CLORONOR, respaldada por nuestros más de 25 años de experiencia en el sector químico y nuestro compromiso con la innovación sostenible.
                        
                            Ofrecemos la oportunidad de diversificar tu portafolio con una inversión segura y rentable en pesos. Esta emisión de Obligaciones Negociables Serie I, garantizada al 100% por el Banco Hipotecario, está diseñada para brindar una alternativa de inversión confiable y con respaldo sólido en el mercado argentino. Bajo la regulación de la Comisión Nacional de Valores (CNV), estas obligaciones presentan una tasa de interés competitiva basada en la Tasa BADLAR.
                        
                    </p>

                    {/* Botón */}
                    <a
                        href="#"
                        className="inline-block text-center bg-primary-500 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-primary-600"
                    >
                        Leer Más
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
