'use client';

import { useEffect, useState } from 'react';
import Parallax from '@/components/ParallaxSection';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { applyTailwindClasses } from '../../../helpers/applyTailwindClasses';

interface Producto {
    id: number;
    name: string;
    detail: string;
    favorite: string;
    image: string;
    text: string;
    formula: string;
    paginaId: number;
}

export default function ProductDetailPage() {
    const { name } = useParams();
    const [product, setProduct] = useState<Producto | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const cleanName = decodeURIComponent((name as string).replace(/-/g, ' '));
                const res = await fetch(`https://www.pushsoftware.com.ar/api-cloronor/producto/search?name=${encodeURIComponent(cleanName)}`);
                if (!res.ok) throw new Error('No se encontró el producto');
                const json = await res.json();
                setProduct(json.data[0] || null);
            } catch (err: any) {
                setError(err.message || 'Error desconocido');
            }
        };

        fetchProduct();
    }, [name]);

    if (error) {
        return (
            <div className="max-w-6xl mx-auto px-4 py-8 text-red-600">
                <h1 className="text-3xl font-bold">{error}</h1>
                <Link href="/productos" className="text-blue-500 hover:underline">
                    Volver a la lista de productos
                </Link>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="max-w-6xl mx-auto px-4 py-8 text-gray-500 text-lg">
                Cargando producto...
            </div>
        );
    }

    return (
        <Parallax>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <Link
                    href="/productos"
                    className="text-primary-600 dark:text-primary-400 text-sm font-semibold hover:underline flex items-center"
                >
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    Volver a Productos
                </Link>

                {/* Encabezado con Clip-Path */}
                <div className="flex flex-col md:flex-row items-start gap-6 mb-8 mt-8">
                    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex justify-center md:justify-start">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-full md:h-64 lg:h-64 overflow-hidden">
                            <div
                                className="absolute w-full h-full overflow-hidden"
                                style={{
                                    clipPath:
                                        'polygon(45% 1.33975%, 46.5798% 0.60307%, 48.26352% 0.15192%, 50% 0%, 51.73648% 0.15192%, 53.4202% 0.60307%, 55% 1.33975%, 89.64102% 21.33975%, 91.06889% 22.33956%, 92.30146% 23.57212%, 93.30127% 25%, 94.03794% 26.5798%, 94.48909% 28.26352%, 94.64102% 30%, 94.64102% 70%, 94.48909% 71.73648%, 94.03794% 73.4202%, 93.30127% 75%, 92.30146% 76.42788%, 91.06889% 77.66044%, 89.64102% 78.66025%, 55% 98.66025%, 53.4202% 99.39693%, 51.73648% 99.84808%, 50% 100%, 48.26352% 99.84808%, 46.5798% 99.39693%, 45% 98.66025%, 10.35898% 78.66025%, 8.93111% 77.66044%, 7.69854% 76.42788%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.73648%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.26352%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.57212%, 8.93111% 22.33956%, 10.35898% 21.33975%)',
                                }}
                            >
                                <Image
                                    src={`${product.image}`}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{ backgroundColor: 'rgba(49, 115, 148, 0.7)' }}
                                />
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                <div
                                    className="font-bold mb-2"
                                    dangerouslySetInnerHTML={{ __html: product.formula }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3">
                        <h1 className="text-4xl font-bold mb-4 text-center text-primary-900 dark:text-primary-200">
                            {product.name}
                        </h1>
                        <div className="text-base sm:text-lg leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: applyTailwindClasses(product.detail) }}
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Detalles</h2>
                    <div
                        dangerouslySetInnerHTML={{ __html: product.text }}
                    />
                </div>
            </div>
        </Parallax>
    );
}
