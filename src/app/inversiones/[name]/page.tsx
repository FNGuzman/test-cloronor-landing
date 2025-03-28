'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Parallax from '@/components/ParallaxSection';
import { applyTailwindClasses } from '@/helpers/applyTailwindClasses';
import Image from 'next/image';

interface Inversion {
    title: string;
    imgPortada: string;
    detailText: string;
}

// 🔁 Convertimos el slug de la URL (ej: 'obligaciones-negociables') a string con espacios y tildes
function deslugify(slug: string): string {
    return decodeURIComponent(slug.replace(/-/g, ' '));
}

export default function InversionesDetailPage() {
    const { name } = useParams();
    const [data, setData] = useState<Inversion | null>(null);
    const [html, setHtml] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInversion = async () => {
            try {
                if (!name) return;

                // Convertimos el slug en un título válido para la API
                const decodedTitle = deslugify(name as string);
                const encodedTitle = encodeURIComponent(decodedTitle);

                const res = await fetch(`https://www.pushsoftware.com.ar/api-cloronor/inversion/search?title=${encodedTitle}`);
                if (!res.ok) throw new Error('No se pudo cargar la inversión');

                const json = await res.json();
                const item = json.data?.[0];

                if (item) {
                    setData(item);
                    setHtml(applyTailwindClasses(item.detailText));
                } else {
                    setError('No se encontró información para esta inversión.');
                }
            } catch (err: any) {
                setError(err.message || 'Error desconocido');
            }
        };

        fetchInversion();
    }, [name]);

    if (error) {
        return (
            <div className="h-screen flex items-center justify-center text-red-500 text-xl">
                {error}
            </div>
        );
    }

    if (!data) {
        return (
            <div className="h-screen flex items-center justify-center text-gray-500 text-xl">
                Cargando inversión...
            </div>
        );
    }

    return (
        <Parallax>
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Volver */}
                <div className="mb-6">
                    <a href="/inversiones" className="text-teal-600 hover:underline flex items-center gap-2">
                        <span>←</span> Volver
                    </a>
                </div>

                {/* Imagen en lugar de video */}
                <div className="mb-10 w-full h-[500px] relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={`${data.imgPortada}`}
                        alt={data.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Título */}
                <h1 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-primary-200 mb-8 text-center">
                    {data.title}
                </h1>

                {/* HTML interpretado con clases de Tailwind */}
                <div
                    className="prose prose-lg max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: applyTailwindClasses(html) }}
                />
            </div>
        </Parallax>
    );
}
