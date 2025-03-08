import demo3 from '../../assets/image/section/3.jpg';
import demo4 from '../../assets/image/section/demo4.jpg';
import demo5 from '../../assets/image/section/10.png';
import demo6 from '../../assets/image/section/12.png';

export default function BentoGrid() {
    return (
        <div className="flex h-full w-full items-center ">
            <div
                className="grid gap-4 rounded-lg"
                style={{
                    gridTemplateColumns: "repeat(10, 1fr)", // Diseño base
                }}
            >
                {/* Bloque 1 */}
                <div
                    className="col-span-10 sm:col-span-10 md:col-span-10
                     lg:col-span-5 lg:row-span-10
                      flex justify-center 
                      h-auto
                      lg:h-[70vh]
                      lg:items-center 
                      rounded-3xl shadow-lg bg-white dark:bg-gray-800 text-primary-900 dark:text-primary-50 p-8"
                    style={{

                    }}
                >
                    <div className="mt-5 md:mt-8 text-left lg:mt-0 transform transition-all duration-1000 ease-out">
                        <div className='flex flex-col items-center'>
                            <div>
                                <h2 className="text-primary-900 dark:text-primary-200 text-xl sm:text-2xl md:text-2xl font-bold uppercase">
                                    Compromiso con la Sostenibilidad y el Desarrollo Regional
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                                    Nuestro modelo promueve el desarrollo local y una mayor independencia de proveedores externos, generando empleo y crecimiento en cada región. Producir de forma responsable es nuestra misión y nuestro compromiso contigo.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-primary-900 dark:text-primary-200 text-xl sm:text-2xl md:text-2xl font-bold uppercase mt-5">
                                    Producción In-Situ Adaptada a Tus Necesidades
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                                    Olvídate de la dependencia de grandes centros de producción y de los costos asociados a la logística y transporte de cloro. Nuestras plantas modulares te ofrecen la flexibilidad de producir según la demanda y con mínimo impacto ambiental, asegurando una solución eficiente y económica.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

                {/* Bloque 2: Broccoli */}
                <div
                    className="col-span-10 sm:col-span-10 md:col-span-10 lg:col-span-5 lg:row-span-10 flex items-center justify-center rounded-3xl shadow-lg"
                    style={{
                        backgroundImage: `url('${demo3.src}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                ></div>

                {/* Bloque 3: Tamago */}
                <div
                    className="col-span-10 sm:col-span-10 md:col-span-10 lg:col-span-5 lg:row-span-10 flex items-center justify-end rounded-3xl shadow-lg relative"
                    style={{
                        backgroundImage: `url('${demo4.src}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        minHeight: "70vh",
                    }}
                >
                    {/* Card flotante en la parte inferior */}
                    <div className="flex flex-col justify-end items-stretch w-full h-full p-4">
                        <div className="flex flex-col bg-gray-200 rounded-2xl p-6 shadow-[inset_0_2px_8px_rgba(255,255,255,0.4),_0_32px_56px_-32px_rgba(0,0,0,0.1),_inset_0_12px_32px_rgba(255,255,255,0.7)]">
                            <p className="text-primary-800 text-base font-medium">
                                Experiencia y Soporte Técnico de Primera
                            </p>
                            <p className="text-gray-600 text-sm mt-2">
                                Con más de 25 años de experiencia en el diseño, construcción, y mantenimiento de plantas químicas, CLORONOR asegura un acompañamiento completo. Nos dedicamos a que tus operaciones funcionen con los mejores estándares de seguridad y eficiencia.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bloque 4: Pork */}
                <div
                    className="col-span-10 sm:col-span-10 md:col-span-5 lg:col-span-5 lg:row-span-5 flex items-center justify-center rounded-3xl shadow-lg"
                    style={{
                        backgroundImage: `url('${demo6.src}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                ></div>

                {/* Bloque 5: Edamame */}
                <div
                    className="col-span-10 sm:col-span-10 md:col-span-5 lg:col-span-5 lg:row-span-5 flex items-center justify-center rounded-3xl shadow-lg"
                    style={{
                        backgroundImage: `url('${demo5.src}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                ></div>
            </div>
        </div>
    );
}
