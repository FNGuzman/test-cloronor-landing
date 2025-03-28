'use client';
import { useState } from 'react';
import Certificaciones from '../card/Certificaciones';
import StandardCard from '../standard/StandardCard';
import Image from 'next/image';
interface Props {
    standards: {
        title: string;
        description: string;
        images: string[];
    }[];
}

const QualityStandards = ({ standards }: Props) => {
    const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

    const openModal = (images: string[]) => {
        setSelectedImages(images);
    };

    const closeModal = () => {
        setSelectedImages(null);
    };

    return (
        <section className="py-16 px-0 lg:px-16 xl:px-48 2xl:px-64">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-light text-primary-600 italic">NORMAS DE CALIDAD</h2>
            </div>

            {/* Certificaciones */}
            <div>
                <Certificaciones />
            </div>

            {/* Lista de estándares */}
            <div className="space-y-8">
                {standards.map((standard, index) => (
                    <StandardCard
                        key={index}
                        title={standard.title}
                        description={standard.description}
                        images={standard.images}
                        onViewDocument={() => openModal(standard.images)}
                    />
                ))}
            </div>

            {/* Modal */}
            {selectedImages && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 mt-5"
                    onClick={closeModal} // Cerrar al hacer clic fuera
                >
                    <div
                        className="bg-[#f9fafb] dark:bg-[#111827] p-6 rounded-lg shadow-lg relative max-w-[90vw] max-h-[80vh] overflow-auto"
                        onClick={(e) => e.stopPropagation()} // Evitar que se cierre al hacer clic dentro
                    >
                        {/* Botón para cerrar */}
                        <button
                            className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl"
                            onClick={closeModal}
                        >
                            ✖
                        </button>
                        {/* Contenedor de imágenes */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center p-3">
                            {selectedImages.map((image, index) => (
                                <Image
                                    key={index}
                                    src={image}
                                    alt={`Documento ISO ${index + 1}`}
                                    width={400}
                                    height={500}
                                    className="rounded-lg w-auto h-auto max-w-full max-h-screen"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default QualityStandards;
