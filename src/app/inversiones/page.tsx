'use client';

import { useEffect, useState } from 'react';
import ParallaxSection from '@/components/ParallaxSection';
import InversionCard from '@/components/card/InversionCard';
import { applyTailwindClasses } from '@/helpers/applyTailwindClasses';

interface HeroData {
    title: string;
    subtitle: string;
    image: string; // Puede ser base64
}

interface InversionData {
    id: number;
    imgPortada: string; // base64
    title: string;
    detailPortada: string; // HTML
}

export default function InversionesPage() {
    const [hero, setHero] = useState<HeroData | null>(null);
    const [inversiones, setInversiones] = useState<InversionData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Hero (portada)
                const resHero = await fetch('https://www.pushsoftware.com.ar/api-cloronor/heroPage/search');
                const heroData = await resHero.json();
                const heroItem = heroData.data[0];

                // Inversiones
                const resInversion = await fetch('https://www.pushsoftware.com.ar/api-cloronor/inversion/search');
                const inversionData = await resInversion.json();

                setHero({
                    title: heroItem.title,
                    subtitle: heroItem.subtitle,
                    image: heroItem.image,
                });

                setInversiones(inversionData.data);
            } catch (error) {
                console.error('Error al cargar las inversiones', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {hero && (
                <ParallaxSection
                    height="screen"
                    overlay
                    backgroundImage={hero.image}
                    classNameInter="pt-20 md:pt-40 lg:pt-80 pb-20 md:pb-40 lg:pb-80 px-4 md:px-24 lg:px-48 font-bold"
                >
                    <div className="absolute bottom-5 right-4 md:bottom-16 md:right-5 lg:bottom-5 lg:right-20 text-right text-white">
                        <p className="text-2xl md:text-4xl lg:text-4xl xl:text-5xl mb-4 md:mb-6 lg:mb-8 uppercase">
                            {hero.title}
                        </p>
                        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl mb-4 md:mb-6 lg:mb-8 font-normal">
                            {hero.subtitle}
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded shadow-lg">
                            Comenzar a invertir ↓
                        </button>
                    </div>
                </ParallaxSection>
            )}

            <ParallaxSection height="auto" classNameInter="space-y-8">
                <div className="max-w-6xl mx-auto py-12 space-y-12">
                    {inversiones.map((inv) => (
                        <InversionCard
                            key={inv.id}
                            title={inv.title}
                            imageSrc={inv.imgPortada}
                            detailHtml={applyTailwindClasses(inv.detailPortada)}
                            imagePosition="right"
                        />
                    ))}
                </div>
            </ParallaxSection>
        </>
    );
}
