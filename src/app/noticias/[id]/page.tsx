'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogPostDetail from '@/components/blog/BlogPostDetail';

interface NoticiaDetailEntity {
    id: number;
    titulo: string;
    bajada: string;
    noticia: string;
    autor: string;
    estado: string;
    fecha: string;
    imgMiniatura: string;
    imgPortada: string;
    categoria: { id: number; nombre: string };
    tags: { id: number; tag: { id: number; nombre: string } }[];
}

export default function BlogPostDetailPage() {
    const { id } = useParams(); // Captura el ID desde la URL
    const [noticia, setNoticia] = useState<NoticiaDetailEntity | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const response = await fetch(`https://api.formosa.gob.ar/api-cloronor/noticia/${id}`);
                if (!response.ok) throw new Error('Error al cargar la noticia');

                const data: NoticiaDetailEntity = await response.json();
                setNoticia(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchNoticia();
    }, [id]);

    if (loading) return <p className="text-center text-gray-500">Cargando noticia...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    if (!noticia) return <p className="text-center text-gray-500">No se encontró la noticia.</p>;

    return (
        <BlogPostDetail noticia={noticia} />
    );
}
