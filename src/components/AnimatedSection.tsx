'use client';

import { useInView } from "@/hook/useInView";



const AnimatedSection: React.FC<{
  id: string;
  children: React.ReactNode;
}> = ({ id, children }) => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;