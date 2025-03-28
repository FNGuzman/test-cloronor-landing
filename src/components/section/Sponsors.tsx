import React from 'react';

interface SponsorItem {
    id: number;
    src: string;
    alt: string;
    link?: string;
}

const Sponsors = ({ sponsors }: { sponsors: SponsorItem[] }) => {
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
                                src={src}
                                alt={alt}
                                className="h-24 w-auto "
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
