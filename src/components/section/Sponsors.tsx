import React from 'react';

// Importa los logos desde tu carpeta de assets
import logo1 from '../../assets/image/logo/sponsors/logo1.png';
import logo2 from '../../assets/image/logo/sponsors/logo2.png';
import logo3 from '../../assets/image/logo/sponsors/logo3.png';

const sponsors = [
    { id: 1, src: logo1, alt: 'Sponsor 1', link: '' },
    { id: 2, src: logo2, alt: 'Sponsor 2', link: '' },
    { id: 3, src: logo3, alt: 'Sponsor 3', link: '' },
];

const Sponsors = () => {
    return (
        <section className="w-full flex justify-center items-center p-8">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                {/* Caja con flex y height para centrar logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 min-h-[150px]">
                    {sponsors.map(({ id, src, alt, link }) => (
                        <a
                            key={id}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                        >
                            <img
                                src={src.src}
                                alt={alt}
                                className="h-24 w-auto filter grayscale brightness-0 invert-0 dark:invert transition-all duration-300"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
