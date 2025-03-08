import Link from "next/link";
import React from "react";
import { IoStar } from "react-icons/io5";

interface ProductCardProps {
  name: string;
  description: string;
  isFavorite: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, isFavorite = false }) => {
  return (
    <div className="flex flex-1 gap-6 z-20 items-center overflow-hidden backgroundImageRightArrow max-w-7xl mx-auto rounded-3xl">
      <div className="container mx-auto px-6 flex py-16">
        <div className="sm:w-2/3 lg:w-1/2 flex flex-col z-20">
          {/* Estrella si es favorito */}
          {isFavorite ? (
            <IoStar className="text-yellow-400 w-14 h-14 mb-12" />
          ) : (
            <span className="w-20 h-2 bg-white mb-12"></span>
          )}

          {/* Título con mejor responsividad */}
          <h1 className="uppercase text-white font-black text-center sm:text-left leading-tight sm:leading-none break-words"
            style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }}>
            {name}
          </h1>

          {/* Descripción */}
          <p className="text-sm sm:text-base text-white text-center sm:text-left">
            {description}
          </p>

          {/* Botón de más información */}
          <div className="flex justify-center sm:justify-start mt-8">
            <Link href={`/productos/${name}`}>
              <button className="uppercase px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded transition-colors duration-300">
                Más información
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
