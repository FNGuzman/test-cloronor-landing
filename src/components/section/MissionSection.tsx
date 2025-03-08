'use client';
import VerticalTimeline from './VerticalTimeline';
import AnimatedSection from '../AnimatedSection';
import ProcessSection from './ProcessSection';

const MissionSection = () => {
  const timelineItems = [
    {
      title: "Comercialización",
      description:
        "Soda Cáustica e Hipoclorito de Sodio <p>Comienza a funcionar AR Servicios y potabilización, a comercializar en la provincia hipoclorito de sodio y sulfato de aluminio sólido, comprándolo en proveedores externos a la misma.</p>",
      date: "2003",
      isActive: true,
    },
    {
      title: "Comercialización",
      description:
        "Soda Caústica e Hipoclorito de Sodio <p>A partir de este año se comienza con el diseño y montaje de la planta de producción de hipoclorito de sodio. Para la elaboración propia.</p>",
      date: "2007",
      isActive: true,
    },
    {
      title: "Instalación",
      description:
        "De Planta Productora de Hipoclorito de <p>Sodio Arranca a fines de 2008 la producción de hipoclorito de sodio, a partir de el cloro gas e hidróxido de sodio, que es traído de distintos productores de Argentina.</p>",
      date: "2008",
      isActive: true,
    },
    {
      title: "Instalación",
      description:
        "Norma ISO 9001, 14001 <p>Por decisión empresarial, se certifican las normas de calidad ISO 9001 Nora de Gestión de Calidad en todos sus procesos, y la Norma ISO 14001 Norma para la gestión ambiental</p>",
      date: "2010",
      isActive: true,
    },
    {
      title: "Instalación",
      description:
        "Planta de Sulfato Líquido <p>Se instala, el primer reactor para la producción de sulfato de aluminio, en la provincia, con esto y el hipoclorito elaborado en la provincia se cubren los requerimientos de productos básicos para la potabilización de agua.</p>",
      date: "2012",
      isActive: true,
    },
    {
      title: "Capacitación",
      description:
        "Asistencia a nuestros clientes ante emergencias <p>Ante requerimientos de clientes y no clientes, se comienza a dar asistencias , ante eventos , o incidentes que estén relacionados con el manejo de nuestros productos.</p>",
      date: "2012",
      isActive: true,
    },
    {
      title: "Instalación",
      description:
        "1° Planta de Cloro-Soda a través de electrólisis <p>Se comienza con el proyecto de instalación de la primera planta de cloro soda en el NEA, por el sistema de electrólisis, a partir de la sal, comenzando la producción en 2016.</p>",
      date: "2014",
      isActive: true,
    },
    {
      title: "Ampliación",
      description:
        "Capacidad de producción mediante desarrollo tecnológico propio <p>Se duplica la producción de cloro soda. </p>",
      date: "2017",
      isActive: true,
    },
    {
      title: "Certificación",
      description:
        "Capacitación de personal y la sociedad en general <p>Se realizan capacitación sobre el manejo de cloro, control de pérdidas, a empresas que utilizan este insumo. </p>",
      date: "2018",
      isActive: true,
    },
    {
      title: "Inicio de Proyecto",
      description:
        "De instalación de planta PAC <p>Se comienza con el proyecto PAC, actualmente en las última etapa para iniciar la producción.</p>",
      date: "2019",
      isActive: true,
    },
    {
      title: "Producción Electro",
      description:
        "Producción Electro <p>Se comienza el proyecto de la nueva ampliación de la planta de electrólisis.</p>",
      date: "2021",
      isActive: true,
    },
    {
      title: "Proyecto Ampliación",
      description:
        "Inicio de la ampliación de la Producción por <p>Adquisición de equipos para la ampliación de la capacidad de producción de electrolisis.</p>",
      date: "2023",
      isActive: true,
    },
  ];
  const dataMisionVision = [
    {
      name: 'mission',
      title: "Nuestra Misión es",
      subtitle: "",
      description: "Satisfacer las necesidades y expectativas de nuestros clientes con productos y servicios de alta calidad, precios competitivos y asesoramiento profesional, a través de la constante mejora de nuestros procesos y el compromiso de nuestra gente.",
    },
    {
      name: 'vision',
      title: "Nuestra Visión es",
      subtitle: '',
      description: "Lograr el liderazgo en la comercialización de productos químicos de la región y ser reconocidos por nuestros altos estándares de calidad, una sólida estructura organizacional y el bienestar de nuestros empleados, clientes y proveedores, animados por la firme convicción de un espíritu de superación e innovación permanente.",
    }
  ]
  return (
    <div>
      {/* Introduccion */}
      <AnimatedSection id='intro' key={0}>
        <section id="intro" className="py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-700 dark:text-primary-200">
              CLORONOR S.A.
            </h2>
            <h3 className="text-2xl font-semibold text-primary-600 dark:text-primary-300 mb-4">
              Compromiso con la Potabilización del Agua
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Somos una empresa formoseña, fundada en 2007, especializada en la fabricación y
              comercialización de productos químicos esenciales para la potabilización del agua,
              como el hipoclorito de sodio. Nos destacamos por ofrecer soluciones confiables y
              de alta calidad, comprometidos con la seguridad, eficiencia y el desarrollo sostenible
              en el tratamiento del agua.
            </p>
          </div>
        </section>
      </AnimatedSection>
      {/* Sección Misión */}

      {
        dataMisionVision.map((item, index) => (
          <AnimatedSection id={item.name} key={index}>
            <section id="mission" className="py-16 px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 italic text-primary-700 dark:text-primary-200">
                  {item.title} <br />
                  <span className="italic text-primary-600">
                    {item.subtitle}
                  </span>
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>
            </section>
          </AnimatedSection>
        ))
      }

      {/* Sección Proceso */}
      <AnimatedSection id="process">
        <ProcessSection />
      </AnimatedSection>

      {/* Timeline Section */}
      <section id="history" className="py-16 ">
        <VerticalTimeline items={timelineItems} />
      </section>
    </div>
  );
};

export default MissionSection;
