import Image from 'next/image';
import logo from '../../assets/image/logo/logo.png';

export default function Footer() {
    return (
        <>
            <footer className="bg-primary-900 dark:bg-primary-800 text-white py-8">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-between items-start">
                        {/* Logo and Description */}
                        <div className="w-full md:w-1/3 flex items-start space-x-4">
                            <div className="rounded-full p-4 flex items-center justify-center">
                                <Image
                                    src={logo.src}
                                    width={500}
                                    height={500}
                                    alt="Cloronor logo"
                                    className="rounded-full"
                                />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold">CLORONOR S.A</h1>
                                <p className="mt-4 text-sm text-teal-300 leading-relaxed pr-6 pl-1">
                                    Presentes desde 2003, apoyando el desarrollo de la industria local y de los profesionales ofreciendo soluciones innovadoras en la producción de químicos para la potabilización del agua.
                                </p>
                            </div>
                        </div>

                        {/* Explore Links */}
                        <div className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Explore */}
                            <div>
                                <h3 className="text-lg font-bold mb-4">Explora</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Productos
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Inversiones
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Noticias
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Mapa del sitio
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h3 className="text-lg font-bold mb-4">Contacto</h3>
                                <ul className="space-y-2">
                                    {/* <li>+54 9 370 445-8452</li> */}
                                    <li className="break-words text-sm">
                                        ventas@cloronor.com.ar
                                    </li>
                                </ul>
                            </div>

                            {/* Location */}
                            <div>
                                <h3 className="text-lg font-bold mb-4">Ubicación</h3>
                                <ul className="space-y-2">
                                    <li>Fray Justo Santa María de Oro 2625</li>
                                    <li>Parque Industrial, Formosa Capital</li>
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h3 className="text-lg font-bold mb-4">Legal</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Acuerdo de Privacidad
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">
                                            Términos y Condiciones
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Bottom Section */}
            <div className="bg-surface-back-white dark:bg-surface-back-black py-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="container mx-auto px-2 flex flex-wrap justify-between items-center">
                    <p>© 2024. CLORONOR S.A Todos los derechos reservados.</p>
                    <p>
                        powered by <span className="font-bold">PUSH</span>
                    </p>
                </div>
            </div>
        </>
    );
}
