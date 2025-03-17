'use client';
import VerticalTimeline from './VerticalTimeline';
import AnimatedSection from '../AnimatedSection';
import ProcessSection from './ProcessSection';

const MissionSection = () => {
  const timelineItems = [
    {
      title: "Comercialización",
      description:
        "<p>Se comienza a comercializar en la provincia productos quimicos, como el Hipoclorito de Sodio y Sulfato de Aluminio Sólido.</p>",
      date: "2003",
      isActive: true,
    },
    {
      title: "Comercialización",
      description:
        "<p>Puesta en marcha de la planta productora de Hipoclorito de Sodio a partir de Gas Cloro e Hidroxido de Sodio.</p>",
      date: "2007 - 2008",
      isActive: true,
    },
    // {
    //   title: "Instalación",
    //   description:
    //     "De Planta Productora de Hipoclorito de <p>Sodio Arranca a fines de 2008 la producción de hipoclorito de sodio, a partir de el cloro gas e hidróxido de sodio, que es traído de distintos productores de Argentina.</p>",
    //   date: "2008",
    //   isActive: true,
    // },
    {
      title: "Instalación",
      description:
        "<p>Certificamos todos nuestros procesos bajo las Normas de Calidad ISO 9001 (Gestión de Calidad) y las Normas de Calidad ISO 14001 (Gestión ambiental)</p>",
      date: "2010",
      isActive: true,
    },
    {
      title: "Instalación",
      description:
        "<p>Iniciamos la producción de Sulfato de Aluminio, completando la fabricación de los productos quimicos necesarios para la potabilización del agua.</p>",
      date: "2012",
      isActive: true,
    },
    // {
    //   title: "Capacitación",
    //   description:
    //     "Asistencia a nuestros clientes ante emergencias <p>Ante requerimientos de clientes y no clientes, se comienza a dar asistencias , ante eventos , o incidentes que estén relacionados con el manejo de nuestros productos.</p>",
    //   date: "2012",
    //   isActive: true,
    // },
    {
      title: "Instalación",
      description:
        "<p>Se pone en funcionamiento la 1° Planta de Cloro-Soda en el NEA Argentino por el proceso de electrólisis.</p>",
      date: "2014",
      isActive: true,
    },
    {
      title: "Ampliación",
      description:
        "<p>Se incrementa la capacidad de producción de la Planta mediante desarrollo tecnologico propio.</p>",
      date: "2017",
      isActive: true,
    },
    // {
    //   title: "Certificación",
    //   description:
    //     "Capacitación de personal y la sociedad en general <p>Se realizan capacitación sobre el manejo de cloro, control de pérdidas, a empresas que utilizan este insumo. </p>",
    //   date: "2018",
    //   isActive: true,
    // },
    {
      title: "Inicio de Proyecto",
      description:
        "<p>Se inícia la instalación de la Planta Productora de Policloruro de Aluminio (PAC).</p>",
      date: "2019",
      isActive: true,
    },
    // {
    //   title: "Producción Electro",
    //   description:
    //     "Producción Electro <p>Se comienza el proyecto de la nueva ampliación de la planta de electrólisis.</p>",
    //   date: "2021",
    //   isActive: true,
    // },
    {
      title: "Proyecto Ampliación",
      description:
        "<p>Se inicia la ampliación de la Planta Productora de Cloro-Soda, con la finalidad de incrementar nuevamente la capacidad de producción.</p>",
      date: "2024",
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
              comercialización de productos químicos esenciales para la potabilización del agua.
              Nos destacamos por ofrecer soluciones confiables y
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 italic text-primary-700 dark:text-primary-200 text-center">
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
        <div>
          <h2 className="text-primary-900 dark:text-primary-200 text-2xl sm:text-3xl lg:text-3xl xl:text-5xl font-bold uppercase"> Nuestra Historia</h2>
        </div>
        <VerticalTimeline items={timelineItems} />
      </section>
    </div>
  );
};

export default MissionSection;
