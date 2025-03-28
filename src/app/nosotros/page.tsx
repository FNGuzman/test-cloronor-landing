import Parallax from "@/components/ParallaxSection";
import MissionSection from "@/components/section/MissionSection";
export interface Pagina {
    id: number;
    nombre: string;
    path: string;
    title: string;
}
export interface MisionVision {
    id: number;
    title: string;
    subTitle: string;
    text: string;
    pagina: Pagina;
}

export interface TimelineItem {
    id: number;
    fecha: string;
    title: string;
    text: string;
    pagina: Pagina;
}

export interface TimelineApiResponse {
    data: TimelineItem[];
    metadata: any;
}

export interface ProcesoItem {
    id: number;
    title: string;
    detail: string;
    icon: string;
}

export interface Proceso {
    id: number;
    title: string;
    detail: string;
    pagina: Pagina;
    procesoItems: ProcesoItem[];
}

export interface ProcesoApiResponse {
    data: Proceso[];
    metadata: any;
}
export default async function NosotrosPage() {
    const [mvRes, tlRes, psRes] = await Promise.all([
        fetch('https://www.pushsoftware.com.ar/api-cloronor/misionVision/search'),
        fetch('https://www.pushsoftware.com.ar/api-cloronor/timeline/search'),
        fetch('https://www.pushsoftware.com.ar/api-cloronor/proceso/search'),
    ]);

    if (!mvRes.ok || !tlRes.ok || !psRes.ok) {
        throw new Error("Error cargando secciones dinámicas");
    }

    const { data: misionVision }: { data: MisionVision[] } = await mvRes.json();
    const { data: timeline }: TimelineApiResponse = await tlRes.json();
    const { data: procesoData }: ProcesoApiResponse = await psRes.json();

    return (
        <Parallax>
            <div className="px-4 sm:px-8 md:px-8 lg:px-8 xl:px-20">
                <MissionSection data={misionVision} timeline={timeline} proceso={procesoData[0]} />
            </div>
        </Parallax>
    );
}