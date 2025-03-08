'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import Link from 'next/link'; // Importamos Link de Next.js
import logo from '../../assets/image/logo/logo.png';
import isologo from '../../assets/image/logo/IsoLogo.svg';
import MenuItem from './MenuItem';

const Navbar = () => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    setDarkMode(savedDarkMode === 'true');
    document.documentElement.classList.toggle('dark', darkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Productos', href: '/productos' },
    { label: 'Inversiones', href: '/inversiones' },
    { label: 'Noticias', href: '/noticias' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-primary-900 dark:bg-primary-800 text-white">
      <div className="flex h-24 items-center justify-center">
        <div className="grid w-full h-full grid-cols-10 grid-rows-1 gap-4 px-4 mx-auto">
          <div className="col-span-2 flex items-center">
            <img
              src={pathname === '/' ? logo.src : isologo.src}
              alt="Logo"
              className={pathname === '/' ? 'w-16 h-16 object-contain' : 'object-cover'}
            />
          </div>
          <div className="col-span-7 flex items-center justify-center">
            {/* Menú en pantallas grandes */}
            <div className="hidden lg:flex gap-2">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  isSelected={
                    pathname === item.href ||
                    (item.label === 'Productos' && pathname.startsWith('/productos')) ||
                    (item.label === 'Noticias' && pathname.startsWith('/noticias')) ||
                    (item.label === 'Inversiones' && pathname.startsWith('/inversiones'))
                  }
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <button onClick={toggleDarkMode} className="text-2xl">
              {darkMode ? <FiSun className="text-primary-200" /> : <FiMoon className="text-primary-200" />}
            </button>
            <button onClick={toggleMenu} className="text-2xl lg:hidden" aria-label="Toggle menu">
              {menuOpen ? <FiX className="text-primary-200" /> : <FiMenu className="text-primary-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú en pantallas móviles */}
      {menuOpen && (
        <div ref={menuRef} className="absolute top-full left-0 w-full bg-primary-800 shadow-lg">
          <div className="flex flex-col items-center py-4">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} passHref>
                <button
                  className="w-full text-center text-white text-lg py-3 hover:bg-primary-700 transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
