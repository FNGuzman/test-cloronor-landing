'use client';
import DynamicIcon from '@/helpers/DinamycIcon';
import Image from 'next/image';
import Link from 'next/link';

interface InversionCardProps {
  title: string;
  detailHtml: string;
  imageSrc: string;
  imagePosition?: 'left' | 'right';
}

const InversionCard = ({
  title,
  detailHtml,
  imageSrc,
  imagePosition = 'right',
}: InversionCardProps) => {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`flex flex-col md:flex-row items-stretch rounded-lg overflow-hidden ${imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-2/3 p-6 md:p-8 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-900 dark:text-primary-200">
          {title}
        </h2>

        <div
          className="space-y-4 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: detailHtml }}
        />

        <div className="mt-6">
          <a href={`/inversiones/${formattedTitle}`}>
            <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded transition-colors duration-300">
              Ver más
            </button>
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 relative min-h-96">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};


export default InversionCard;
