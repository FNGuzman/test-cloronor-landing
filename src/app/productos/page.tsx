'use client';

import React from 'react';
import ParallaxSection from '@/components/ParallaxSection';
import ProductCard from '@/components/card/ProductCard';

const productos = [
    { product: 'HIPOCLORITO DE SODIO ', formula: 'NaClo', name: 'cloro', direction: 'right', description: 'Empleado en la industria papelera y celulosas, tratamiento de agua, fabricación de PVC y plásticos clorofluorados. En la industria metalúrgica y siderúrgica, farmacéutica, química y petroquímica.', isFavorite: true },
    { product: 'SULFATO DE ALUMINIO SOLUCIÓN', formula: 'Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>', name: 'SULFATO DE ALUMINIO (Al2(SO4)3)', direction: 'left', description: 'Usado principalmente como floculante en el tratamiento de aguas y procesos de potabilización.', isFavorite: true },
    { product: 'HIDRÓXIDO DE SODIO (SODA CÁUSTICA)', formula: 'NaOH', name: 'HIDRÓXIDO DE SODIO (NaOH)', direction: 'right', description: 'Se utiliza en las industrias papelera, farmacéutica, de fabricación de jabón, petrolera y química de proceso.', isFavorite: false },
    { product: 'ÁCIDO SULFÚRICO', formula: 'H<sub>2</sub>SO<sub>4</sub>', name: 'ÁCIDO SULFÚRICO (H2SO4)', direction: 'left', description: 'Es clave en la industria química, textil, de explosivos, plásticos, detergentes, caucho sintético, petrolera y papelera.', isFavorite: false },
    { product: 'ÁCIDO CLORHÍDRICO', formula: 'HCl', name: 'ÁCIDO CLORHÍDRICO (HCl)', direction: 'right', description: 'Es utilizado en síntesis químicas, procesamiento de alimentos, decapado de metales, reducción de minerales y limpieza industrial.', isFavorite: false },
    { product: 'POLICLORURO DE ALUMINIO (PAC)', formula: 'PAC', name: 'POLICLORURO DE ALUMINIO (PAC)', direction: 'left', description: 'Es utilizado en síntesis químicas, procesamiento de alimentos, decapado de metales, reducción de minerales y limpieza industrial.', isFavorite: false },
    // { product: 'CLORO GAS LICUADO', name: 'CLORO GAS LICUADO ()', direction: 'right', description: 'Es esencial en la potabilización de aguas, tratamiento de piscinas y procesos industriales como floculante.', isFavorite: false },
];

const ProductosPage = () => {
    return (
        <ParallaxSection height="screen">
            {productos.map((producto, index) => (
                <div key={producto.name} className="mb-6"> {/* 🔹 KEY aquí en la <div> */}
                    <ProductCard
                        product={producto.product}
                        formula={producto.formula}
                        name={producto.name}
                        description={producto.description}
                        isFavorite={producto.isFavorite}
                    />
                </div>
            ))}
        </ParallaxSection>
    );
};

export default ProductosPage;
