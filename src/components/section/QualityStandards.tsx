'use client';
import { useState } from 'react';
import Certificaciones from '../card/Certificaciones';
import StandardCard from '../standard/StandardCard';
import Image from 'next/image';

// Importa imágenes de las normas ISO
import iso9001 from '../../assets/image/normas/iso-9001.jpg';
import iso9001Iqnet from '../../assets/image/normas/9001iqnet.jpg';
import iso14001 from '../../assets/image/normas/iso-14001.jpg';
import iso14001Iqnet from '../../assets/image/normas/14001iqnet.jpg';

const standards = [
    {
        title: 'ISO9001',
        description: 'Como parte del fortalecimiento institucional y la búsqueda de la satisfacción de sus clientes y partes interesadas, CLORONOR S.A ha implementado exitosamente el Sistema de Gestión de Calidad Integrado basado en las normas ISO 9001:2008, y a la vez queda iniciado un plan de trabajo destinado a sostener exitosamente dicho sistema.',
        images: [iso9001.src, iso9001Iqnet.src], // 🔥 Ahora es un array con 2 imágenes
    },
    {
        title: 'ISO14001',
        description: 'Fruto de sus inquietudes ambientales y con carácter voluntario, CLORONOR S.A comenzó las labores de diseño, desarrollo e implantación de un sistema de gestión medioambiental que garantizase que todas las labores desarrolladas en el seno de su Organización alcancen un alto nivel de protección del medio ambiente en el marco de un desarrollo sostenible.',
        images: [iso14001.src, iso14001Iqnet.src], // 🔥 Ahora es un array con 2 imágenes
    },
];

const QualityStandards = () => {
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
