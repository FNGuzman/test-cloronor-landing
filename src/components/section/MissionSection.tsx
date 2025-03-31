import AnimatedSection from '../AnimatedSection';
import VerticalTimeline from './VerticalTimeline';

import { MisionVision, Proceso, TimelineItem } from '@/app/nosotros/page';
import ProcessSection from './ProcessSection';

const MissionSection = ({
  data,
  timeline,
  proceso,
}: {
  data: MisionVision[];
  timeline: TimelineItem[];
  proceso: Proceso;
}) => {
  return (
    <div>
      {/* Intro dinámico */}
      <AnimatedSection id="intro">
        <section className="py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-700 dark:text-primary-200">
              {data.find((d) => d.title.toLowerCase().includes("cloronor"))?.title || "CLORONOR S.A."}
            </h2>
            <h3 className="text-2xl font-semibold text-primary-600 dark:text-primary-300 mb-4">
              {data.find((d) => d.title.toLowerCase().includes("cloronor"))?.subTitle}
            </h3>
            <div
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: data.find((d) => d.title.toLowerCase().includes("cloronor"))?.text || "",
              }}
            />
          </div>
        </section>
      </AnimatedSection>

      {/* Misión y Visión */}
      {data
        .filter((d) => d.title.toLowerCase().includes("misión") || d.title.toLowerCase().includes("visión"))
        .map((item, index) => (
          <AnimatedSection id={item.title.toLowerCase()} key={index}>
            <section className="py-16 px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 italic text-primary-700 dark:text-primary-200 text-center">
                  {item.title}
                  <br />
                  <span className="italic text-primary-600">{item.subTitle}</span>
                </h2>
                <div
                  className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            </section>
          </AnimatedSection>
        ))}

      {/* Proceso dinámico */}
      <AnimatedSection id="process">
        <section className="py-16 px-8">
          <h2 className="text-3xl font-bold text-center text-primary-700 mb-12">{proceso.title}</h2>
          <div
            className="text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12"
            dangerouslySetInnerHTML={{ __html: proceso.detail }}
          />
          <ProcessSection items={proceso.procesoItems} />
        </section>
      </AnimatedSection>

      {/* Timeline dinámico */}
      <section id="history" className="py-16">
        <div>
          <h2 className="text-primary-900 dark:text-primary-200 text-2xl sm:text-3xl lg:text-3xl xl:text-5xl font-bold uppercase text-center">Nuestra Historia</h2>
        </div>
        <VerticalTimeline
          items={timeline.map((item) => ({
            title: item.title || "Evento",
            description: item.text,
            date: item.fecha,
            isActive: true,
          }))}
        />
      </section>
    </div>
  );
};

export default MissionSection;
