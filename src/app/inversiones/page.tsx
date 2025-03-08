import InversionCard from '@/components/card/InversionCard';
import ParallaxSection from '@/components/ParallaxSection';
import image from '../../assets/image/bg/hero_inversiones.jpg';
import img from '../../assets/image/section/obligaciones2.jpg';


const items = [
    {
        icon: 'IoTrendingUp',
        text: 'Inversión en pesos: No dependes de variaciones en el tipo de cambio.',
    },
    {
        icon: 'IoTimeOutline',
        text: 'Opciones de plazo: Elige entre 12 o 24 meses, según tus objetivos financieros.',
    },
    {
        icon: 'IoDocumentAttachOutline',
        text: 'Proceso de suscripción simple: Participa a través de una subasta pública.',
    },
];

const portadaData = {
    title: 'Inversiones Cloronor S.A',
    subtitle: 'Una alternativa sólida y atractiva',
    image: 'inversionesportada.jpg'
}
export default function InversionesPage() {
    return (
        <>
            <ParallaxSection height="screen" overlay={true} backgroundImage={image.src} classNameInter="pt-20 md:pt-40 lg:pt-80 pb-20 md:pb-40 lg:pb-80 px-4 md:px-24 lg:px-48 font-bold">
                {/* Contenedor principal para posicionar en la esquina inferior derecha */}
                <div className="absolute bottom-5 right-4 md:bottom-16 md:right-5 lg:bottom-5 lg:right-20 text-right text-white">
                    {/* Título Principal */}
                    <p className="text-2xl md:text-4xl lg:text-4xl xl:text-5xl mb-4 md:mb-6 lg:mb-8 uppercase">
                        {portadaData.title}
                    </p>
                    {/* Subtítulo */}
                    <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl mb-4 md:mb-6 lg:mb-8 font-normal">
                        {portadaData.subtitle}
                    </p>

                    {/* Botón */}
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded shadow-lg">
                        Comenzar a invertir ↓
                    </button>
                </div>
            </ParallaxSection>

            <ParallaxSection height="auto" classNameInter="space-y-8">
                <div className="max-w-6xl mx-auto  py-12 space-y-12">
                    <InversionCard
                        title="Obligaciones Negociables"
                        items={items}
                        imageSrc={img.src}
                        imagePosition='right'
                    />
                </div>
            </ParallaxSection>
        </>
    );
}
