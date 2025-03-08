'use client';

import Link from 'next/link';

type MenuItemProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  href?: string; // Prop opcional para manejar enlaces
};

const MenuItem = ({ label, isSelected, onClick, href }: MenuItemProps) => {
  return href ? (
    <Link
      href={href}
      onClick={onClick}
      className={`hover:bg-primary-700 rounded-lg px-4 py-2 ${
        isSelected ? 'bg-primary-600 text-white' : 'text-gray-200 hover:text-white'
      }`}
    >
      {label}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`hover:bg-primary-700 rounded-lg px-4 py-2 ${
        isSelected ? 'bg-primary-600 text-white' : 'text-gray-200 hover:text-white'
      }`}
    >
      {label}
    </button>
  );
};

export default MenuItem;
