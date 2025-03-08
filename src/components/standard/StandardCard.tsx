import React from 'react';

interface Props {
    title: string;
    description: string;
    images: string[];
    onViewDocument: () => void;
}

const StandardCard = ({ title, description, onViewDocument }: Props) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-4 p-6">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 text-primary-600 rotate-0 md:rotate-270 dark:text-primary-400 px-4 py-2 rounded-lg text-lg font-bold my-6 mt-10">
                    <span className="whitespace-nowrap md:origin-bottom-left">{title}</span>
                </div>
                <div className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                    {description}
                </div>
            </div>
            <div className="flex justify-end w-full md:w-auto mt-4 md:mt-0 pr-5 pb-5">
                <button
                    onClick={onViewDocument}
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-800 font-medium"
                >
                    <i className="pi pi-file text-xl"></i>
                    <span className="underline">Ver documentación</span>
                </button>
            </div>
        </div>
    );
};

export default StandardCard;
