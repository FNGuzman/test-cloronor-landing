import ParallaxSection from '@/components/ParallaxSection';
import Image from 'next/image';
import image from '../assets/image/bg/waterheropage.jpg';
import logo from '../assets/image/logo/logclor2019.png';
import HexagonSection from '@/components/section/HexagonSection';
import QualityStandards from '@/components/section/QualityStandards';
import demo1 from '../assets/image/section/demo3.jpg';
import demo2 from '../assets/image/section/demo4.jpg';
import Sponsors from '@/components/section/Sponsors';
import Testimonials from '@/components/section/Testimonials';
import BentoGrid from '@/components/bento/BentoGrid';
import imgT from '../assets/image/section/imghexa1.jpg';
import imgI from '../assets/image/section/13.png';
import imgB from '../assets/image/section/1.jpg';
const hexagonSectionsData = [
  {
    imageLeft: false,
    imageSrc: imgT.src,
    title: 'Transformamos la manera de producir y gestionar productos químicos esenciales.',
    text: 'Somos una empresa con mas de 15 años en el mercado dedicada a la producción, comercialización y distribución de productos quimicos'
  },
  {
    imageLeft: true,
    imageSrc: imgI.src,
    title: 'Innovación y Tecnología Responsable',
    text: '<p>Integramos tecnologías avanzadas que cuidan el ambiente y simplifican el mantenimiento. Gracias a innovadores electrolizadores de membrana o diafragma, ofrecemos una producción libre de materiales peligrosos como mercurio o asbesto</p>'
  },
  {
    imageLeft: false,
    imageSrc: imgB.src,
    title: 'Beneficios que Marcan la Diferencia',
    text: '<ul><li>Ahorra en costos de transporte y manipulación.</li><li>Disminuye gastos de operación y mantenimiento.</li><li>Aumenta la autonomía y seguridad de tu producción. Cada módulo puede adaptarse a tus necesidades, desde una tonelada diaria hasta lo que el proyecto demande.</li></ul>'
  }
];

const testimonialsData = {
  title: "Lo que nuestros clientes están diciendo",
  testimonials: [
    {
      "id": 1,
      "text": "El Hipoclorito de Sodio de Cloronor ha transformado la limpieza de nuestras instalaciones. Destaco el excelente servicio al cliente y la puntualidad en las entregas. ¡Totalmente recomendado!",
      "name": "Carlos Martínez",
      "role": "Gerente de Operaciones"
    },
    {
      "id": 2,
      "text": "El Hidróxido de Sodio de Cloronor cumple con nuestras exigencias de pureza y eficacia. Aprecio enormemente el soporte constante de su equipo técnico. Es un placer colaborar con ellos.",
      "name": "Laura Espinoza",
      "role": "Directora Técnica"
    }
  ]
}
export default function HomePage() {
  return (
    <>

      <main className=''>

        <ParallaxSection backgroundImage={image.src} height='screen' overlay={true}
          classNameInter="flex w-full h-96  dire justify-center items-center mt-20"
        >
          <div className='flex flex-col'>
            <div>

              <Image src={logo} width={500} height={500} alt='Logo Cloronor'></Image>
            </div>
            <div className='text-center'>
              <p className='text-white text-xl'>Empresa lider en el norte argentino
              </p>
              <p className='text-white text-xl'>
                en la elavoracion y distribucion de productos quimicos
              </p>
            </div>
          </div>

        </ParallaxSection>
        <ParallaxSection height='screen'
          classNameInter="text-center"
        >
          <div className='sm:py-5 md:py-16 font-bold '>
            {hexagonSectionsData.map(section => (
              <HexagonSection
                key={section.title}
                imageLeft={section.imageLeft}
                image={section.imageSrc}
                title={section.title}
                text={section.text}
              />
            ))}
          </div>
          <section className="sm:py-5 md:py-16 px-0 md:px-10 lg:px-40 ">
            <BentoGrid />
          </section>
          <QualityStandards />
          <Sponsors />
          <Testimonials
            data={testimonialsData}
          />



        </ParallaxSection>

      </main >

    </>
  );
}