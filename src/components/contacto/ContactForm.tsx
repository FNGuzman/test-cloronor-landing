'use client';

import { useRef, useState } from "react";
import Parallax from "../ParallaxSection";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        cargo: "",
        empresa: "",
        email: "",
        telefono: "",
        medioContacto: "",
        asunto: "",
        mensaje: ""
    });

    const [errors, setErrors] = useState<string[]>([]);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const captchaRef = useRef<HCaptcha>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors: string[] = [];
        if (!formData.nombre) newErrors.push("Nombre completo es obligatorio.");
        if (!formData.cargo) newErrors.push("Cargo es obligatorio.");
        if (!formData.empresa) newErrors.push("Empresa es obligatoria.");
        if (!formData.email) newErrors.push("Correo electrónico es obligatorio.");
        if (!formData.telefono) newErrors.push("Teléfono es obligatorio.");
        if (!formData.medioContacto) newErrors.push("Preferencia de contacto es obligatoria.");
        if (!formData.asunto) newErrors.push("Asunto es obligatorio.");
        if (!formData.mensaje) newErrors.push("Motivo es obligatorio.");
        if (!captchaToken) newErrors.push("Completa el captcha.");

        setErrors(newErrors);
        return newErrors.length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors([]);

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.formosa.gob.ar/api-cloronor/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`Error al enviar el formulario: ${response.statusText}`);
            }

            toast.success("Formulario enviado correctamente.");
            resetForm();
        } catch (error: any) {
            toast.error("Hubo un error al enviar el formulario.");
            setErrors([error.message || "Error al enviar el formulario."]);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setFormData({
            nombre: "",
            cargo: "",
            empresa: "",
            email: "",
            telefono: "",
            medioContacto: "",
            asunto: "",
            mensaje: ""
        });
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
        setErrors([]);
    };

    return (
        <Parallax>
            <Toaster position="top-right" />
            <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-surface-back-cardblack rounded-lg shadow-md my-20">
                <h2 className="text-2xl font-bold text-center mb-6 text-primary-900 dark:text-primary-50">Contacto</h2>

                {errors.length > 0 && (
                    <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                        <ul className="list-disc list-inside">
                            {errors.map((error, idx) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium">Nombre Completo</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full border rounded-lg px-4 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Cargo</label>
                            <input type="text" name="cargo" value={formData.cargo} onChange={handleChange} className="w-full border rounded-lg px-4 py-2" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium">Empresa</label>
                            <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} className="w-full border rounded-lg px-4 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Correo Electrónico</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-lg px-4 py-2" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium">Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full border rounded-lg px-4 py-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Prefiero ser contactado por:</label>
                            <select name="medioContacto" value={formData.medioContacto} onChange={handleChange} className="w-full border rounded-lg px-4 py-2">
                                <option value="">Seleccione</option>
                                <option value="Email">Correo Electrónico</option>
                                <option value="Phone">Teléfono</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium">Asunto</label>
                        <select name="asunto" value={formData.asunto} onChange={handleChange} className="w-full border rounded-lg px-4 py-2">
                            <option value="">Seleccione</option>
                            <option value="Consultas">Consultas</option>
                            <option value="Inversiones">Inversiones</option>
                            <option value="Otros">Otros</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium">Motivo</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows={4} className="w-full border rounded-lg px-4 py-2"></textarea>
                    </div>

                    <div className="mb-6 text-center">
                        <HCaptcha
                            sitekey="d3565860-9de2-4136-abc8-bd8c67ec4436"
                            onVerify={(token) => setCaptchaToken(token)}
                            ref={captchaRef}
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-500 hover:bg-primary-600 text-white'}`}
                        >
                            {isSubmitting ? "Enviando..." : "Contactenme"}
                        </button>
                    </div>
                </form>
            </div>
        </Parallax>
    );
}
