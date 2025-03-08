'use client';
import DynamicIcon from '@/helpers/DinamycIcon';
import Image from 'next/image';
import Link from 'next/link';

interface InversionCardProps {
  title: string;
  items: any[];
  imageSrc: string;
  imagePosition?: 'left' | 'right'; // Nueva prop para controlar la posición
}

const InversionCard = ({
  title,
  items,
  imageSrc,
  imagePosition = 'right', // Valor por defecto: imagen a la derecha
}: InversionCardProps) => {
  // Convertir título a formato URL-friendly
  const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div
      className={`flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''
        }`}
    >
      {/* Contenido (3/4 del ancho) */}
      <div className="w-full md:w-2/3 p-6 md:p-8 space-y-6">
        {/* Título con colores */}
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-200">
          {title}
        </h2>

        {/* Lista de beneficios */}
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              {/* Icono */}
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 flex items-center justify-center rounded-md">
                <DynamicIcon iconName={item.icon} />
              </div>
              {/* Texto con colores */}
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        {/* Botón Ver Más */}
        <div className="mt-6">
          <Link href={`/inversiones/${formattedTitle}`}>
            <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded transition-colors duration-300">
              Ver más
            </button>
          </Link>
        </div>
      </div>

      {/* Imagen (1/3 del ancho) */}
      <div className="w-full md:w-1/2 relative h-64 md:h-auto">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt="Inversion Card Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default InversionCard;
