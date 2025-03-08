import Parallax from "@/components/ParallaxSection";
import { FiDollarSign, FiPercent, FiClock, FiCalendar } from "react-icons/fi";

const InversionesDetailPage = () => {
    return (
        <Parallax>
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Botón Volver */}
                <div className="mb-6">
                    <a
                        href="/inversiones"
                        className="text-teal-600 hover:underline flex items-center gap-2"
                    >
                        <span>←</span> Volver a Inversiones
                    </a>
                </div>

                {/* Video */}
                <div className="mb-8">
                    <iframe
                        width="100%"
                        height="500"
                        src="https://www.youtube.com/embed/kCr4cEOQ48g"
                        title="Video de Inversiones"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>

                {/* Contenedor principal de toda la información */}
                <div className="space-y-12 mt-12">
                    {/* Información de la Inversión */}
                    <div className="space-y-4">
                        {/* Monto Total */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-md flex items-center justify-center">
                                <FiDollarSign size={24} />
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-lg">
                                <strong>Monto Total Emitido:</strong> Hasta{" "}
                                <span className="text-teal-600 font-semibold">$250.000.000 ARS</span>
                            </p>
                        </div>

                        {/* Tasa de Interés */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-md flex items-center justify-center">
                                <FiPercent size={24} />
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-lg">
                                <strong>Tasa de Interés:</strong>{" "}
                                <span className="text-teal-600">Variable</span> (Basada en Tasa BADLAR más Margen Aplicable)
                            </p>
                        </div>

                        {/* Plazos */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-md flex items-center justify-center">
                                <FiClock size={24} />
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-lg">
                                <strong>Plazos:</strong> <span className="text-teal-600">Clase 1:/12 meses.</span> <span className="text-teal-600">Clase 2:</span> 24 meses.
                            </p>
                        </div>

                        {/* Frecuencia */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-md flex items-center justify-center">
                                <FiCalendar size={24} />
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-lg">
                                <strong>Frecuencia de Pago de Intereses:</strong>{" "}
                                <span className="text-teal-600">Trimestral</span>
                            </p>
                        </div>
                    </div>

                    {/* Detalles Financieros */}
                    <div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-200 mb-4">
                                Obligaciones Negociables
                            </h3>
                            <p className="text-primary-700 dark:text-primary-200 mb-4">
                                PYME CNV Garantizada Serie I y II
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>
                                    <strong>Monto Mínimo de Inversión:</strong> $10.000 ARS.
                                </li>
                                <li>
                                    <strong>Fecha de Emisión y Liquidación:</strong> 31 de octubre de 2024.
                                </li>
                                <li>
                                    <strong>Período de Licitación:</strong> Del 29 de octubre de 2024 (10:00 a 18:00).
                                </li>
                                <li>
                                    <strong>Organizador y Garantía:</strong> Banco Hipotecario S.A.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Propósito de los Fondos */}
                    <div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-200 mb-4">
                                Propósito de los Fondos
                            </h3>
                            <p className="text-primary-700 dark:text-primary-200 mb-4">
                                Los fondos serán destinados a:
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>
                                    <strong>Capital de trabajo:</strong> Principalmente para la puesta en marcha de la planta
                                    de Policloruro de Aluminio.
                                </li>
                                <li>
                                    <strong>Inversión en infraestructura:</strong> Bienes de uso y obra civil.
                                </li>
                                <li>
                                    <strong>Plazos:</strong>{" "}
                                    <span className="font-semibold">Clase 1:</span> 12 meses.{" "}
                                    <span className="font-semibold">Clase 2:</span> 24 meses, con amortización en 3 pagos
                                    parciales.
                                </li>
                                <li>
                                    <strong>Frecuencia de Pago de Intereses:</strong> Trimestral.
                                </li>
                                <li>
                                    <strong>Monto Mínimo de Inversión:</strong> $10.000 ARS.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Beneficios para vos */}
                    <div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-200 mb-4">
                                Beneficios para vos
                            </h3>
                            <p className="text-primary-700 dark:text-primary-200 mb-4">
                                ¿Por qué es tan bueno invertir en CLORONOR?
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>
                                    <strong>Garantía Total:</strong> Respaldo del Banco Hipotecario S.A. en capital e intereses.
                                </li>
                                <li>
                                    <strong>Flexibilidad de Plazos:</strong> Dos opciones de vencimiento adaptadas a diferentes
                                    perfiles.
                                </li>
                                <li>
                                    <strong>Accesibilidad:</strong> Suscripción mínima baja, ideal para nuevos inversores.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Información Adicional */}
                    <div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-200 mb-4">
                                Información Adicional
                            </h3>
                            <p className="text-primary-700 dark:text-primary-200 mb-4">
                                Detalles adicionales sobre la inversión en CLORONOR.
                            </p>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                <li>
                                    <strong>Seguridad:</strong> Garantía de cumplimiento normativo con auditorías anuales.
                                </li>
                                <li>
                                    <strong>Transparencia:</strong> Información accesible para todos los inversores.
                                </li>
                                <li>
                                    <strong>Rentabilidad:</strong> Proyecciones financieras sólidas y confiables.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax >
    );
};

export default InversionesDetailPage;