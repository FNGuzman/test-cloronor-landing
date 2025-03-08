'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MultiSelect } from 'primereact/multiselect';
import { BiCategory } from 'react-icons/bi';
import { IoChevronDown } from 'react-icons/io5';

// Interfaces
interface NoticiaEntity {
    id: number;
    titulo: string;
    fecha: string;
    imgMiniatura: string;
    categoriaId?: number;
    tags: string[];
}

interface Categoria {
    id: number;
    nombre: string;
}

const BlogPost: React.FC = () => {
    const [news, setNews] = useState<NoticiaEntity[]>([]);
    const [categories, setCategories] = useState<Categoria[]>([]);
    const [tags, setTags] = useState<{ label: string; value: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [newsLimit, setNewsLimit] = useState<Record<number, number>>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [newsRes, categoriesRes, tagsRes] = await Promise.all([
                    fetch('https://api.formosa.gob.ar/api-cloronor/noticia/search'),
                    fetch('https://api.formosa.gob.ar/api-cloronor/categoriaCategoriaNoticia/search'),
                    fetch('https://api.formosa.gob.ar/api-cloronor/categoriaTag/search')
                ]);

                if (!newsRes.ok || !categoriesRes.ok || !tagsRes.ok) throw new Error('Error al obtener datos');

                const newsData = await newsRes.json();
                const categoriesData = await categoriesRes.json();
                const tagsData = await tagsRes.json();

                if (!newsData.data || !Array.isArray(newsData.data)) throw new Error("Datos de noticias inválidos");
                if (!categoriesData.data || !Array.isArray(categoriesData.data)) throw new Error("Datos de categorías inválidos");
                if (!tagsData.data || !Array.isArray(tagsData.data)) throw new Error("Datos de tags inválidos");

                const parsedNews: NoticiaEntity[] = newsData.data.map((item: any) => ({
                    id: item.id,
                    titulo: item.titulo,
                    fecha: item.fecha,
                    imgMiniatura: item.imgMiniatura,
                    categoriaId: item.categoria?.id ?? null,
                    tags: Array.isArray(item.tags) ? item.tags.map((t: any) => t.tag?.nombre ?? '') : []
                }));

                setNews(parsedNews);
                setCategories(categoriesData.data);
                setTags(
                    tagsData.data.map((t: any) => ({
                        label: t?.nombre ?? 'Desconocido',
                        value: t?.nombre ?? ''
                    }))
                );

                const initialLimits = categoriesData.data.reduce((acc: Record<number, number>, cat: Categoria) => {
                    acc[cat.id] = 8;
                    return acc;
                }, {});

                setNewsLimit(initialLimits);

            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredNews = news.filter((item) => {
        const matchesCategory = selectedCategory === null || item.categoriaId === selectedCategory;
        const matchesTags = selectedTags.length === 0 || item.tags.some((t) => selectedTags.includes(t));
        return matchesCategory && matchesTags;
    });

    if (loading) return <p className="text-center text-gray-500">Cargando noticias...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <div className="px-4 lg:px-16 py-8">
            {/* Filtros */}
            <div className="mb-8 flex flex-col md:flex-row gap-4">
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-md font-medium shadow-md hover:bg-primary-500 hover:text-white"
                    >
                        <BiCategory className="mr-2 text-lg" />
                        {selectedCategory
                            ? categories.find((cat) => cat.id === selectedCategory)?.nombre ?? "Categoría desconocida"
                            : 'Últimas Noticias'}
                        <IoChevronDown className="ml-2" />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-10">
                            <ul className="py-2">
                                <li>
                                    <button
                                        onClick={() => {
                                            setSelectedCategory(null);
                                            setIsDropdownOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-primary-500 hover:text-white text-gray-700"
                                    >
                                        Todas las Categorías
                                    </button>
                                </li>
                                {categories.map((category) => (
                                    category?.id && category?.nombre ? (
                                        <li key={category.id}>
                                            <button
                                                onClick={() => {
                                                    setSelectedCategory(category.id);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className="w-full text-left px-4 py-2 hover:bg-primary-500 hover:text-white text-gray-700"
                                            >
                                                {category.nombre}
                                            </button>
                                        </li>
                                    ) : null
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* MultiSelect de Tags */}
                <MultiSelect
                    value={selectedTags}
                    options={tags}
                    onChange={(e) => setSelectedTags(e.value)}
                    placeholder="Filtrar por Etiquetas"
                    className="w-full md:w-64"
                    display="chip"
                />
            </div>

            {/* Noticias */}
            {filteredNews.length === 0 ? (
                <p className="text-center text-gray-500">No hay noticias disponibles</p>
            ) : (
                <div className="flex flex-wrap gap-6">
                    {filteredNews.map((item) => (
                        <div key={item.id} className="flex flex-col w-full md:max-w-[350px] min-w-[350px] rounded-lg shadow-lg bg-white dark:bg-gray-800 text-primary-900 dark:text-primary-50 overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <div className="relative w-full h-40">
                                <Image src={item.imgMiniatura} alt={item.titulo} layout="fill" className="object-cover" unoptimized />
                            </div>
                            <div className="p-4">
                                <h3 className="text-sm font-bold mb-2">{item.titulo}</h3>
                                <p className="text-xs text-gray-500 mb-4">{new Date(item.fecha).toLocaleDateString()}</p>
                                <Link href={`/noticias/${item.id}`} className="inline-block text-center bg-primary-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-primary-600">
                                    Leer Más
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BlogPost;
