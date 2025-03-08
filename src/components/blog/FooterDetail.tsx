import Image from 'next/image';
import React from 'react';
import demoImage from '../../assets/image/section/demo4.jpg';

const FooterDetail = () => {
    return (
        <div className="mt-10">
            {/* Separador */}
            <hr className="border-0 h-1 bg-primary-600 mb-8" />

            {/* Sección de posts relacionados */}
            <div>
                <h2 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                    Podría interesarte
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col w-full rounded-lg shadow-lg bg-white text-primary-900 dark:bg-surface-back-cardblack dark:text-primary-50 overflow-hidden transition-transform transform hover:scale-105"
                        >
                            {/* Imagen del post */}
                            <div className="relative w-full h-48">
                                <Image
                                    src={demoImage}
                                    alt={`Post relacionado ${index}`}
                                    className="h-full w-full object-cover"
                                    layout="fill"
                                />
                            </div>

                            {/* Contenido del post */}
                            <div className="p-4">
                                <h3 className="text-sm font-bold mb-2 text-primary-600 dark:text-primary-400">
                                    {index === 0
                                        ? 'Cloronor S.A. anuncia nueva inversión para expandir su capacidad de producción'
                                        : index === 1
                                            ? 'Inauguración: Cloronor S.A. pone en marcha su nueva planta de tratamiento químico'
                                            : 'Expansión regional: Cloronor fortalece su presencia en América Latina con una nueva planta en Paraguay'}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                                    Este es un breve resumen del contenido del artículo relacionado, destacando los aspectos más importantes...
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterDetail;
