'use client';

import { useState } from 'react';

const ProductCardcopy = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      type: 'large',
      title: 'Cloro Gas Licuado',
      subtitle: 'Cl2',
      details: {
        substance: 'Cloro Gas Licuado',
        commercialName: 'Cloro',
        synonyms: '-',
        applications:
          'Se emplea en la industria papelera y celulosas, tratamiento de agua, fabricación de PVC y plásticos clorofluorados. En la industria metalúrgica y siderúrgica, farmacéutica, química y petroquímica.',
      },
    },
    {
      id: 2,
      type: 'large',
      title: 'Otro Producto',
      subtitle: 'OP',
      details: null,
    },
    ...Array.from({ length: 4 }, (_, idx) => ({
      id: idx + 3,
      type: 'small',
      title: `Producto ${idx + 1}`,
      subtitle: `Icon ${idx + 1}`,
      details: null,
    })),
  ];

  const handleCardClick = (id: number) => {
    setActiveCard(id === activeCard ? null : id);
  };

  return (
    <div className="relative flex items-center justify-center mt-10 px-4 sm:px-6 md:px-12 lg:px-24 w-full">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`transition-all duration-500 ease-in-out transform ${activeCard && activeCard !== card.id
              ? 'opacity-0 scale-95 pointer-events-none'
              : 'opacity-100 scale-100'
              } ${activeCard === card.id
                ? 'absolute top-[calc(50%-5rem)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] sm:w-3/4 lg:w-1/2'
                : card.type === 'large'
                  ? 'sm:col-span-2'
                  : ''
              } flex flex-col items-center justify-center cursor-pointer bg-white dark:bg-surface-back-cardblack rounded-xl shadow-md border border-gray-200 dark:border-primary-950 hover:scale-105 hover:border-gray-300 dark:hover:border-primary-500 group p-6`}
            onClick={() => handleCardClick(card.id)}
          >
            {activeCard === card.id && card.details ? (
              // Vista de detalles completos
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-bold uppercase text-primary-900 dark:text-primary-200">
                  {card.title}
                </h3>
                <h4 className="text-5xl sm:text-6xl font-bold text-primary-900 dark:text-primary-200 my-4">
                  {card.subtitle}
                </h4>
                <ul className="text-left text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Sustancia:</strong> {card.details.substance}
                  </li>
                  <li>
                    <strong>Nombre Comercial:</strong> {card.details.commercialName}
                  </li>
                  <li>
                    <strong>Sinónimos:</strong> {card.details.synonyms}
                  </li>
                  <li>
                    <strong>Aplicaciones:</strong> {card.details.applications}
                  </li>
                </ul>
              </div>
            ) : (
              // Vista general de la tarjeta
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-bold uppercase text-primary-900 dark:text-primary-200 group-hover:text-sm group-hover:-translate-y-2 transition-all duration-300">
                  {card.title}
                </h3>
                <div className="text-4xl sm:text-6xl font-extrabold text-primary-900 dark:text-primary-200 group-hover:text-3xl sm:group-hover:text-5xl group-hover:-translate-y-2 transition-all duration-300">
                  {card.subtitle}
                </div>
                <div className="flex items-center justify-between w-full mt-2 group-hover:mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-primary-500 dark:text-primary-200 font-semibold text-xs sm:text-sm group-hover:-translate-y-2">
                    Haz clic para más detalles
                  </span>
                  <span className="text-primary-500 dark:text-primary-200 group-hover:translate-x-1 group-hover:-translate-y-2 transition-transform duration-300">
                    ➔
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardcopy;
