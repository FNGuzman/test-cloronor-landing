'use client';

import React from 'react';

const ProductCardcopy = () => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 w-full h-auto">
      <div className="max-w-7xl w-full space-y-6 md:space-y-8">
        {/* Primera Fila: Dos Elementos Grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Tarjeta Grande 1 */}
          <a
            href="#"
            className="relative grid w-full h-56 sm:h-64 lg:h-80 transform cursor-pointer place-items-center 
            rounded-xl border px-4 py-3 sm:px-6sm:py-4 transition-all
            hover:scale-105
            group
            border-gray-200 
            bg-white 
            dark:bg-surface-back-cardblack  dark:border-primary-950 
            dark:hover:border-primary-500 dark:hover:bg-primary-700
            hover:border-gray-300
            hover:bg-primary-100 "
          >
            <h3 className="text-primary-900 dark:text-primary-200 text-base sm:text-lg font-bold uppercase transition-all duration-300 group-hover:text-sm group-hover:-translate-y-2">
              Cloro Gas Licuado
            </h3>
            <div className="text-4xl sm:text-6xl font-extrabold text-primary-900 dark:text-primary-200 transition-all duration-300 group-hover:text-3xl sm:group-hover:text-5xl group-hover:-translate-y-2">
              Cl2
            </div>
            <div className="flex items-center justify-between w-full mt-2 group-hover:mt-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="text-primary-500 dark:text-primary-200 font-semibold text-xs sm:text-sm transition-all duration-300 group-hover:-translate-y-2">
                Detalles
              </span>
              <span className="text-primary-500 dark:text-primary-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-2">
                ➔
              </span>
            </div>
          </a>

          {/* Tarjeta Grande 2 */}
          <a
            href="#"
            className="relative grid w-full h-56 sm:h-64 lg:h-80 transform cursor-pointer place-items-center rounded-xl border border-gray-200 dark:border-primary-950 bg-white dark:bg-surface-back-cardblack px-4 py-3 sm:px-6 sm:py-4 transition-all hover:scale-105 hover:border-gray-300 dark:hover:border-primary-500 hover:bg-primary-100 dark:hover:bg-primary-700 group"
          >
            <h3 className="text-primary-900 dark:text-primary-200 text-base sm:text-lg font-bold uppercase transition-all duration-300 group-hover:text-sm group-hover:-translate-y-2">
              Cloro Gas Licuado
            </h3>
            <div className="text-4xl sm:text-6xl font-extrabold text-primary-900 dark:text-primary-200 transition-all duration-300 group-hover:text-3xl sm:group-hover:text-5xl group-hover:-translate-y-2">
              Cl2
            </div>
            <div className="flex items-center justify-between w-full mt-2 group-hover:mt-1 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <span className="text-primary-500 dark:text-primary-200 font-semibold text-xs sm:text-sm transition-all duration-300 group-hover:-translate-y-2">
                Detalles
              </span>
              <span className="text-primary-500 dark:text-primary-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-2">
                ➔
              </span>
            </div>
          </a>
        </div>

        {/* Segunda Fila: Tarjetas Pequeñas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[...Array(4)].map((_, idx) => (
            <a
              key={idx}
              href="#"
              className="relative grid w-full h-24 sm:h-32 transform cursor-pointer place-items-center rounded-xl border border-gray-200 dark:border-primary-950 bg-white dark:bg-surface-back-cardblack px-3 sm:px-4 py-2 sm:py-3 transition-all hover:scale-105 hover:border-gray-300 dark:hover:border-primary-500 hover:bg-primary-100 dark:hover:bg-primary-700 group"
            >
              <h3 className="text-primary-900 dark:text-primary-200 text-xs sm:text-sm font-semibold uppercase transition-all duration-300 group-hover:text-xs group-hover:-translate-y-1">
                Producto {idx + 1}
              </h3>
              <div className="text-2xl sm:text-4xl font-extrabold text-primary-900 dark:text-primary-200 transition-all duration-300 group-hover:text-xl sm:group-hover:text-3xl group-hover:-translate-y-1">
                Icon {idx + 1}
              </div>
              <div className="flex items-center justify-between w-full mt-1 group-hover:mt-0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="text-primary-500 dark:text-primary-200 font-semibold text-xs transition-all duration-300 group-hover:-translate-y-1">
                  Detalles
                </span>
                <span className="text-primary-500 dark:text-primary-200 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ➔
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCardcopy;
