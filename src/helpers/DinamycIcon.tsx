'use client';
import React, { Suspense } from 'react';
import { IconType } from 'react-icons';
import { Skeleton } from 'primereact/skeleton';

interface DynamicIconProps {
    iconName: string;
    size?: string;
    w?: string;
    h?: string;
    xs?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, size = '24', w, h, xs }) => {
    const IconComponent = React.lazy(() =>
        import('react-icons/io5').then((module) => {
            const Icon = module[iconName as keyof typeof module] as IconType | undefined;

            if (!Icon) {
                console.warn(`Icon "${iconName}" not found in react-icons/io5.`);
                return { default: () => <span /> };
            }

            return {
                default: () => (
                    <Icon size={size} className={`text-primary-600 dark:text-primary-400 ${w} ${h} ${xs}`} />
                ),
            };
        }).catch(() => ({ default: () => <span /> }))
    );

    return (
        <Suspense fallback={''}>
            <IconComponent />
        </Suspense>
    );
};

export default DynamicIcon;
