'use client';

import Link from 'next/link';
import React from 'react';

interface HeaderBlogDetailProps {
    image: string;
    title: string;
    date: string;
    font: string;
}

const HeaderBlogDetail: React.FC<HeaderBlogDetailProps> = ({
    image,
    title,
    date,
    font
}) => {
    return (
        <div className="py-10">
            {/* Botón de regreso */}
            <div className="mb-6">
                <Link
                    href="/noticias"
                    className="text-primary-600 dark:text-primary-400 text-sm font-semibold hover:underline flex items-center "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Volver a Noticias
                </Link>
            </div>

            {/* Imagen como fondo */}
            <div
                className="mb-4 rounded-lg shadow-md w-full h-0"
                style={{
                    paddingBottom: '38.66%', // Proporción 464px / 1200px = 38.66%
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            {/* Barra de datos */}
            <div className="flex flex-wrap items-center justify-between mb-8 text-primary-600 dark:text-primary-400">
                <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5.121 19.121A1.5 1.5 0 003 17.5V6.5a1.5 1.5 0 012.121-1.621l7.5 5.5a.5.5 0 010 2.242l-7.5 5.5z"
                            />
                        </svg>
                        {font}
                    </span>

                </div>
                <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 7V3m8 4V3m-9 7h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        {date}
                    </span>

                </div>
            </div>
            <h1 className="xs:text-xl sm:text-2xl md:text-4xl font-bold text-primary-800 dark:text-primary-500 mb-4">
                {title}
            </h1>
        </div>
    );
};

export default HeaderBlogDetail;
