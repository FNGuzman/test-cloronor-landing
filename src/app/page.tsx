import ParallaxSection from '@/components/ParallaxSection';
import Image from 'next/image';
import image from '../assets/image/bg/waterheropage.jpg';
import logo from '../assets/image/logo/logclor2019.png';
import HexagonSection from '@/components/section/HexagonSection';
import QualityStandards from '@/components/section/QualityStandards';
import Sponsors from '@/components/section/Sponsors';
import Testimonials from '@/components/section/Testimonials';
import BentoGrid from '@/components/bento/BentoGrid';
import imgT from '../assets/image/section/imghexa1.jpg';
import imgI from '../assets/image/section/13.png';
import imgB from '../assets/image/section/1.jpg';

interface HexagonSectionData {
  id: number;
  image: string;
  imagePosition: 'left' | 'right';
  title: string;
  text: string;
}

interface Pagina {
  id: number;
  nombre: string;
  path: string;
  title: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  pagina: Pagina;
}

interface TestimonialApiResponse {
  data: Testimonial[];
  metadata: {
    count: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
  };
}

interface StandardImage {
  id: number;
  imageCert: string;
}

interface Standard {
  id: number;
  numIso: string;
  text: string;
  pagina: Pagina;
  images: StandardImage[];
}

interface StandardApiResponse {
  data: Standard[];
  metadata: {
    count: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
  };
}

interface Sponsor {
  id: number;
  alt: string;
  image: string; // base64 string
  pagina: Pagina;
}

interface SponsorApiResponse {
  data: Sponsor[];
  metadata: {
    count: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
  };
}

export default async function HomePage() {
  const res = await fetch('https://www.pushsoftware.com.ar/api-cloronor/hexagon/search', {
    cache: 'force-cache', // ISR-like behavior
    next: { revalidate: 3600 } // 1 hora
  });

  const { data } = await res.json();

  const hexagonSectionsData = data.map((item: HexagonSectionData) => ({
    imageLeft: item.imagePosition === 'left',
    imageSrc: item.image,
    title: item.title,
    text: item.text,
  }));

  const resTestimonials = await fetch('https://www.pushsoftware.com.ar/api-cloronor/testimonial/search', {
    cache: 'force-cache',
    next: { revalidate: 3600 }
  });

  const { data: rawTestimonials }: TestimonialApiResponse = await resTestimonials.json();

  const testimonialsData = {
    title: "Lo que nuestros clientes están diciendo",
    testimonials: rawTestimonials.map(({ id, name, role, text }) => ({
      id,
      name,
      role,
      text: text || "Sin comentario disponible." // fallback si `text` viene vacío
    }))
  };

  const resStandard = await fetch('https://www.pushsoftware.com.ar/api-cloronor/standard/search', {
    cache: 'force-cache',
    next: { revalidate: 3600 }
  });

  const { data: rawStandards }: StandardApiResponse = await resStandard.json();

  const standards = rawStandards.map((standard) => ({
    title: standard.numIso,
    description: standard.text,
    images: standard.images.map((img) => img.imageCert),
  }));

  const resSponsors = await fetch('https://www.pushsoftware.com.ar/api-cloronor/sponsor/search', {
    cache: 'force-cache',
    next: { revalidate: 3600 }
  });

  const { data: rawSponsors }: SponsorApiResponse = await resSponsors.json();

  const sponsors = rawSponsors.map((sponsor) => ({
    id: sponsor.id,
    src: sponsor.image,
    alt: sponsor.alt,
    link: '' // Puedes usar sponsor.pagina.path si querés enlazarlos
  }));

  return (
    <main>
      <ParallaxSection backgroundImage={image.src} height='screen' overlay={true}
        classNameInter='flex w-full h-[80vh] justify-center items-center'
      >
        <div className="flex flex-col items-center justify-center text-center">
          <Image src={logo} width={600} height={500} alt="Logo Cloronor" />
          <div className="oswald">
            <p className="text-white text-4xl font-semibold">Empresa líder en el norte argentino</p>
            <p className="text-white text-4xl font-semibold">en la elaboración y distribución de productos químicos</p>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection height="screen" classNameInter="text-center">
        <div className="sm:py-5 md:py-16 font-bold">
          {hexagonSectionsData.map((section: any, index: number) => (
            <HexagonSection
              key={index}
              imageLeft={section.imageLeft}
              image={section.imageSrc}
              title={section.title}
              text={section.text}
            />
          ))}
        </div>

        <section className="sm:py-5 md:py-16 px-0 md:px-10 lg:px-40">
          <BentoGrid />
        </section>

        <QualityStandards standards={standards} />
        <Sponsors sponsors={sponsors} />
        <Testimonials data={testimonialsData} />
      </ParallaxSection>
    </main>
  );
}