'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import iramLogo from '../../assets/image/logo/normas/iram.svg';
import iqnetLogo from '../../assets/image/logo/normas/iqnet.svg';
import iqnetLogoWhite from '../../assets/image/logo/normas/iqnet_assoc_white.svg';

const Certificaciones = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Función para verificar si el tema oscuro está activo en <html>
        const checkDarkMode = () => {
            setIsDarkMode(document.documentElement.classList.contains('dark'));
        };

        // Verificar el modo oscuro al montar el componente
        checkDarkMode();

        // Observar cambios en el atributo de clase de <html>
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        return () => observer.disconnect(); // Limpiar el observer al desmontar
    }, []);

    return (
        <div className="flex justify-center items-center gap-8 py-4">
            <div className="flex gap-4 items-center">
                {/* Imagen IQNET */}
                <div className="relative w-32 h-32">
                    <Image
                        src={isDarkMode ? iqnetLogoWhite : iqnetLogo}
                        alt="Certificación IQNET"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                {/* Imagen IRAM */}
                <div className="relative w-32 h-32">
                    <Image
                        src={iramLogo}
                        alt="Certificación IRAM"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Certificaciones;
