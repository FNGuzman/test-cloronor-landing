import HeaderBlogDetail from './HeaderBlogDetail';
import Parallax from '../ParallaxSection';
import ContentDetail from './ContentDetial';
import FooterDetail from './FooterDetail';
import { applyTailwindClasses } from '@/helpers/applyTailwindClasses';

interface NoticiaDetailEntity {
    id: number;
    titulo: string;
    bajada: string;
    noticia: string;
    autor: string;
    estado: string;
    fecha: string;
    imgMiniatura: string;
    imgPortada: string;
    categoria: { id: number; nombre: string };
    tags: { id: number; tag: { id: number; nombre: string } }[];
}

const BlogPostDetail: React.FC<{ noticia: NoticiaDetailEntity }> = ({ noticia }) => {
    const processedNoticia = applyTailwindClasses(noticia.noticia); // Procesa el HTML

    return (
        <Parallax>
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20 xl:px-40 py-10">
                <HeaderBlogDetail
                    image={`${noticia.imgPortada}`}
                    title={noticia.titulo}
                    date={new Date(noticia.fecha).toLocaleDateString()}
                    font={noticia.autor}
                />
                <ContentDetail>
                    <div className="noticia-content" dangerouslySetInnerHTML={{ __html: processedNoticia }} />
                </ContentDetail>
                {/* <FooterDetail /> */}
            </div>
        </Parallax>
    );
};

export default BlogPostDetail;
