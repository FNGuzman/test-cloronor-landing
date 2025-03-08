'use client';
import Parallax from '@/components/ParallaxSection';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import logo from '../../../assets/image/bg/productos/cl2.jpg';
import Image from 'next/image';

const ProductDetailPage = () => {
    const params = useParams();
    const productName = Array.isArray(params.name) ? params.name[0] : params.name;
    const productData: any = {
        cloro: {
            title: 'Cloro Gas Licuado',
            description:
                'Es fundamental en la industria papelera, de tratamiento de agua, fabricación de PVC y plásticos, así como en los sectores farmacéutico, químico y metalúrgico.',
            industries:
                'Industria papelera, tratamiento de agua, fabricación de PVC y plásticos, farmacéutica, química y metalúrgica.',
            properties:
                'El cloro es un gas amarillento, altamente reactivo, con un fuerte poder oxidante y germicida.',
            benefits:
                'Permite la desinfección masiva de agua, fabricación de productos químicos complejos y procesos de purificación industrial.',
            presentation: 'Se comercializa en forma de gas licuado en cilindros presurizados.',
            image: '/path-to-image/cloro.jpg',
        },
        hipoclorito: {
            title: 'Hipoclorito de Sodio',
            description:
                'Se emplea ampliamente en las industrias de producción de blanqueadores, desinfectantes, alguicidas y limpiadores.',
            industries:
                'Industrias de blanqueadores, desinfectantes, alguicidas, limpieza y purificación de agua.',
            properties:
                'Compuesto químico altamente oxidante, conocido por su capacidad para eliminar microorganismos y su eficacia como agente blanqueador.',
            benefits:
                'Es fundamental para garantizar la higiene y seguridad en aplicaciones domésticas e industriales.',
            presentation: 'Se comercializa como solución líquida con diferentes concentraciones.',
            image: '/path-to-image/hipoclorito.jpg',
        },
        hidroxido: {
            title: 'Hidróxido de Sodio (Soda Cáustica)',
            description:
                'Es un compuesto clave utilizado en la industria papelera, farmacéutica, de fabricación de jabón, petrolera y química de proceso.',
            industries:
                'Industrias papelera, farmacéutica, fabricación de jabón, petrolera y química.',
            properties:
                'Es un compuesto cáustico fuerte con alta reactividad, esencial para procesos de saponificación, neutralización de ácidos y síntesis química.',
            benefits:
                'Agente versátil y económico, clave para procesos industriales críticos como la fabricación de detergentes y la refinación de petróleo.',
            presentation: 'Disponible en solución al 50% o en forma sólida según requerimientos.',
            image: '/path-to-image/hidroxido.jpg',
        },
        acidoSulfurico: {
            title: 'Ácido Sulfúrico',
            description:
                'Un pilar de la industria química con aplicaciones en sectores textil, explosivos, plásticos, detergentes, caucho sintético, petrolera y papelera.',
            industries:
                'Industrias química, textil, explosivos, plásticos, detergentes, caucho sintético, petrolera y papelera.',
            properties:
                'Líquido viscoso, altamente corrosivo y con gran afinidad por el agua. Es un potente agente deshidratante y oxidante.',
            benefits:
                'Versatilidad que lo convierte en un pilar de la industria, desde la refinación de petróleo hasta la fabricación de fertilizantes.',
            presentation:
                'Se distribuye en soluciones de diversas concentraciones, adaptadas a las necesidades del cliente.',
            image: '/path-to-image/acido-sulfurico.jpg',
        },
        sulfato: {
            title: 'Sulfato de Aluminio Solución',
            description:
                'Usado principalmente como floculante en el tratamiento de aguas y procesos de potabilización.',
            industries: 'Procesos de potabilización y tratamiento de aguas.',
            properties:
                'Compuesto soluble en agua que forma flóculos para atrapar partículas suspendidas, facilitando la clarificación del agua.',
            benefits:
                'Permite obtener agua limpia y segura de manera eficiente, contribuyendo a la protección ambiental y la salud pública.',
            presentation: 'Disponible en solución líquida para aplicaciones industriales.',
            image: '/path-to-image/sulfato.jpg',
        },
        acidoClorhidrico: {
            title: 'Ácido Clorhídrico',
            description:
                'Utilizado en síntesis químicas, procesamiento de alimentos, decapado de metales, reducción de minerales y limpieza industrial.',
            industries:
                'Industrias de síntesis químicas, procesamiento de alimentos, decapado de metales y limpieza industrial.',
            properties:
                'Solución acuosa de cloruro de hidrógeno altamente corrosiva, con aplicaciones diversas debido a su fuerte acidez.',
            benefits:
                'Proporciona una solución eficiente para procesos industriales exigentes, con aplicaciones en sectores alimentarios y metalúrgicos.',
            presentation: 'Se presenta como una solución líquida con concentraciones de 31-36%.',
            image: '/path-to-image/acido-clorhidrico.jpg',
        },
        pac: {
            title: 'Policloruro de Aluminio (PAC)',
            description:
                'Esencial en la potabilización de aguas, tratamiento de piscinas y procesos industriales como floculante.',
            industries:
                'Industrias de potabilización de aguas, tratamiento de piscinas y procesos industriales.',
            properties:
                'Polímero inorgánico que actúa eficientemente en la agregación y sedimentación de partículas suspendidas.',
            benefits:
                'Permite un tratamiento rápido y eficiente del agua, mejorando la calidad final con menor cantidad de residuo químico.',
            presentation:
                'Disponible en solución líquida con diversas concentraciones según el uso.',
            image: '/path-to-image/pac.jpg',
        },
    };
    // Extraer datos del producto
    const product = productData[productName];
    // Validación: Si no existe el producto, muestra un mensaje de error
    if (!product) {
        return (
            <div className="max-w-6xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold">Producto no encontrado</h1>
                <Link href="/productos" className="text-blue-500 hover:underline">
                    Volver a la lista de productos
                </Link>
            </div>
        );
    }
    return (
        <Parallax>
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Botón para Volver */}
                <Link
                    href="/productos"
                    className="text-primary-600 dark:text-primary-400 text-sm font-semibold hover:underline flex items-center "
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Volver a Productos
                </Link>

                {/* Sección de encabezado con imagen y texto */}
                <div className="flex flex-col md:flex-row items-start gap-6 mb-8 mt-8">
                    {/* Imagen */}
                    <div className="w-full  md:w-1/2 lg:w-1/3 xl:w-1/4 flex justify-center md:justify-start">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-full md:h-64 lg:h-64 overflow-hidden">
                            {/* Contenedor con Clip-path */}
                            <div
                                className="absolute w-full h-full overflow-hidden"
                                style={{
                                    clipPath:
                                        'polygon(45% 1.33975%, 46.5798% 0.60307%, 48.26352% 0.15192%, 50% 0%, 51.73648% 0.15192%, 53.4202% 0.60307%, 55% 1.33975%, 89.64102% 21.33975%, 91.06889% 22.33956%, 92.30146% 23.57212%, 93.30127% 25%, 94.03794% 26.5798%, 94.48909% 28.26352%, 94.64102% 30%, 94.64102% 70%, 94.48909% 71.73648%, 94.03794% 73.4202%, 93.30127% 75%, 92.30146% 76.42788%, 91.06889% 77.66044%, 89.64102% 78.66025%, 55% 98.66025%, 53.4202% 99.39693%, 51.73648% 99.84808%, 50% 100%, 48.26352% 99.84808%, 46.5798% 99.39693%, 45% 98.66025%, 10.35898% 78.66025%, 8.93111% 77.66044%, 7.69854% 76.42788%, 6.69873% 75%, 5.96206% 73.4202%, 5.51091% 71.73648%, 5.35898% 70%, 5.35898% 30%, 5.51091% 28.26352%, 5.96206% 26.5798%, 6.69873% 25%, 7.69854% 23.57212%, 8.93111% 22.33956%, 10.35898% 21.33975%)',
                                }}
                            >
                                <Image
                                    src={logo.src}
                                    alt={'Imagen del Producto'}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                                {/* Capa con color al 80% de opacidad */}
                                <div
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{ backgroundColor: 'rgba(49, 115, 148, 0.7)' }}
                                ></div>
                            </div>
                            {/* Texto superpuesto */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                <p className="font-bold mb-2">{product.title}</p>
                            </div>
                        </div>
                    </div>

                    {/* Descripción del producto */}
                    <div className="w-full md:w-2/3">
                        <h1 className="text-4xl font-bold mb-4 text-center text-primary-900 dark:text-primary-200">{product.title}</h1>
                        <p className="text-base sm:text-lg leading-relaxed">
                            {product.description}
                        </p>
                    </div>


                </div>
                {/* Otras Secciones */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Industrias que lo utilizan</h2>
                    <p className="text-lg leading-relaxed">
                        {product.industries}
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Propiedades</h2>
                    <p className="text-lg leading-relaxed">
                        {product.properties}
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">Beneficios</h2>
                    <p className="text-lg leading-relaxed">
                        {product.benefits}
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">Presentación</h2>
                    <p className="text-lg italic leading-relaxed">
                        <em>
                            {product.presentation}
                        </em>
                    </p>
                </div>
            </div>
        </Parallax>
    );
};

export default ProductDetailPage;
