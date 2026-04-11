import type { ImageMetadata } from 'astro';
import lashista from '@/assets/img/lashista.webp';
import manicura from '@/assets/img/manicura.webp';
import masajes from '@/assets/img/masajes.webp';
import morpheus from '@/assets/img/morpheus.webp';
import pdrn from '@/assets/img/pdrn.webp';
import pedicura from '@/assets/img/pedicura.webp';
import peeling from '@/assets/img/peeling.webp';
import peluqueria from '@/assets/img/peluqueria.webp';
import depilacion from '@/assets/img/depilacion.webp';

export interface Tratamiento {
    category: string;
    title: string;
    description: string;
    image: ImageMetadata;
    alt: string;
}

const tratamientos: Tratamiento[] = [
    {
        category: 'Style Atelier',
        title: 'Peluqueria',
        description: 'Corte, color y estilismo con acabados perfectos.',
        image: peluqueria,
        alt: 'Peluqueria en Spabella Stetic',
    },
    {
        category: 'Mirada',
        title: 'Lashista',
        description: 'Diseño de pestañas según forma ocular y estilo personal.',
        image: lashista,
        alt: 'Lashista en Spabella Stetic',
    },
    {
        category: 'Nails Studio',
        title: 'Manicura',
        description: 'Preparación, esmaltado y detalle técnico de larga duración.',
        image: manicura,
        alt: 'Manicura en Spabella Stetic',
    },
    {
        category: 'Care Feet',
        title: 'Pedicura',
        description: 'Confort, higiene profunda y acabado elegante.',
        image: pedicura,
        alt: 'Pedicura en Spabella Stetic',
    },
    {
        category: 'Relax Therapy',
        title: 'Masajes',
        description: 'Protocolos descontracturantes, drenantes y de bienestar.',
        image: masajes,
        alt: 'Masajes en Spabella Stetic',
    },
    {
        category: 'Skin Reset',
        title: 'Peeling',
        description: 'Renovación progresiva para textura, tono y luminosidad.',
        image: peeling,
        alt: 'Peeling en Spabella Stetic',
    },
    {
        category: 'Tech Lift',
        title: 'Morpheus8',
        description: 'Radiofrecuencia fraccionada para redefinición subdérmica.',
        image: morpheus,
        alt: 'Morpheus8 en Spabella Stetic',
    },
    {
        category: 'Bio Repair',
        title: 'PDRN',
        description: 'Bioestimulación para regeneración y calidad de piel.',
        image: pdrn,
        alt: 'PDRN en Spabella Stetic',
    },
    {
        category: 'Tech Beauty',
        title: 'Depilación Láser',
        description: 'Tecnología avanzada para eliminación efectiva y duradera del vello.',
        image: depilacion,
        alt: 'Depilación Láser en Spabella Stetic',
    }
];

export default tratamientos;