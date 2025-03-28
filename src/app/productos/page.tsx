'use client';

import React, { useEffect, useState } from 'react';
import ParallaxSection from '@/components/ParallaxSection';
import ProductCard from '@/components/card/ProductCard';

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

export default function ProductosPage() {
    const [productos, setProductos] = useState<Producto[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const res = await fetch('https://www.pushsoftware.com.ar/api-cloronor/producto/search');
                if (!res.ok) throw new Error('No se pudo obtener la lista de productos');
                const json = await res.json();

                // 🔽 Ordenar favoritos primero
                const sorted = [...json.data].sort((a, b) => {
                    return b.favorite === "true" ? 1 : -1;
                });

                setProductos(sorted);
            } catch (err: any) {
                setError(err.message);
            }
        };

        fetchProductos();
    }, []);

    if (error) {
        return (
            <div className="text-center text-red-500 py-10">
                Error: {error}
            </div>
        );
    }

    return (
        <ParallaxSection height="screen">
            {productos.map((producto) => (
                <div key={producto.id} className="mb-6">
                    <ProductCard
                        product={producto.name}
                        formula={producto.formula}
                        name={producto.name}
                        description={producto.detail}
                        isFavorite={producto.favorite === "true"}
                    />
                </div>
            ))}
        </ParallaxSection>
    );
}
