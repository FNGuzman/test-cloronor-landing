'use client';

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import textura10 from '../assets/image/bg/textura10.png';
import textura50 from '../assets/image/bg/textura50.png';

interface ParallaxProps {
  height?: 'screen' | 'auto';
  backgroundImage?: string;
  children?: React.ReactNode;
  overlay?: boolean;
  classNameInter?: string;
}

const Parallax: React.FC<ParallaxProps> = ({
  height = 'screen',
  backgroundImage,
  children,
  overlay = false,
  classNameInter,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detectar el modo oscuro observando la clase 'dark' en documentElement
  useEffect(() => {
    const darkModeClass = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkModeClass);
  }, []);

  // Determinar la textura en función del modo oscuro
  const selectedBackgroundImage = backgroundImage
    ? backgroundImage
    : isDarkMode
      ? textura50.src
      : textura50.src;

  return (
    <div
      className={classNames('relative overflow-hidden', {
        'h-auto lg:min-h-screen': height === 'screen',
        'h-auto': height === 'auto',
      })}
    >
      {/* Fondo con desenfoque */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${selectedBackgroundImage})`,
          backgroundRepeat: 'repeat',
          backgroundSize: backgroundImage ? 'cover' : 'auto',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
        }}
      ></div>

      {/* Overlay con transparencia */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40 dark:bg-black/40" />
      )}

      {/* Contenido con separación del fondo */}
      <div className={classNames('relative z-10 p-8', classNameInter)}>
        {children}
      </div>
    </div>
  );
};

export default Parallax;
