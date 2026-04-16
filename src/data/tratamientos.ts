import type { ImageMetadata } from 'astro';
import amazonica from '@/assets/tratamientos/amazonica.webp';
import banhoderio from '@/assets/tratamientos/banhoderio.webp';
import cicatrices from '@/assets/tratamientos/cicatrices.webp';
import dermapen from '@/assets/tratamientos/dermapen.webp';
import despigmentacion from '@/assets/tratamientos/despigmentacion.webp';
import limpiezafacial from '@/assets/tratamientos/limpiezafacial.webp';
import manicura from '@/assets/tratamientos/manicura.webp';
import masajereductor from '@/assets/tratamientos/masajereductor.webp';
import masajesrelajantes from '@/assets/tratamientos/masajesrelajantes.webp';
import micropigmentacion from '@/assets/tratamientos/micropigmentacion.webp';
import pedicura from '@/assets/tratamientos/pedicura.webp';
import peluqueria from '@/assets/tratamientos/peluqueria.webp';
import pestanaspap from '@/assets/tratamientos/pestañaspap.webp';
import porcenalizacionfacial from '@/assets/tratamientos/porcenalizacionfacial.webp';
import lifting from '@/assets/tratamientos/lifting.webp';
import morpheus8 from '@/assets/tratamientos/morpheus8.webp';
import headspacoreano from '@/assets/tratamientos/headspacoreano.webp';
import hollywoodpeel from '@/assets/tratamientos/hollywoodpeel.webp';
import aguastar from '@/assets/tratamientos/aguastar.webp';
import laserhongos from '@/assets/tratamientos/laserhongos.webp';
import pdrn from '@/assets/tratamientos/pdrn.webp';
export interface Tratamiento {
    category: string;
    title: string;
    description: string;
    image: ImageMetadata;
    alt: string;
}

const tratamientos: Tratamiento[] = [
    {
        category: 'Estilo',
        title: 'Peluquería',
        description: 'Corte, color y estilismo con acabados perfectos.',
        image: peluqueria,
        alt: 'Peluquería en Spabella Stetic',
    },
    {
        category: 'Uñas',
        title: 'Manicura',
        description: 'Preparación, esmaltado y detalle técnico de larga duración.',
        image: manicura,
        alt: 'Manicura en Spabella Stetic',
    },
    {
        category: 'Uñas',
        title: 'Pedicura',
        description: 'Confort, higiene profunda y acabado elegante.',
        image: pedicura,
        alt: 'Pedicura en Spabella Stetic',
    },
    {
        category: 'Tecnología estética',
        title: 'Morpheus 8',
        description: 'Radiofrecuencia fraccionada para remodelación profunda y mejora de textura en rostro y cuerpo.',
        image: morpheus8,
        alt: 'Morpheus 8 en Spabella Stetic',
    },
    {
        category: 'Facial',
        title: 'Limpieza facial Agua Star',
        description: 'Higiene profunda y renovación suave para una piel fresca y luminosa.',
        image: limpiezafacial,
        alt: 'Limpieza facial Agua Star en Spabella Stetic',
    },
    {
        category: 'Facial',
        title: 'Dermapen',
        description: 'Microestimulación para mejorar textura, poros y apariencia general del rostro.',
        image: dermapen,
        alt: 'Dermapen en Spabella Stetic',
    },
    {
        category: 'Facial',
        title: 'Porcelanización facial',
        description: 'Protocolo para un acabado uniforme, suave y radiante en la piel del rostro.',
        image: porcenalizacionfacial,
        alt: 'Porcelanización facial en Spabella Stetic',
    },
    {
        category: 'Capilar',
        title: 'Head Spa coreano',
        description: 'Ritual de relajación y limpieza del cuero cabelludo con enfoque integral.',
        image: headspacoreano,
        alt: 'Head Spa coreano en Spabella Stetic',
    },
    {
        category: 'Mirada',
        title: 'Micropigmentación de cejas y laminación',
        description: 'Técnica de pigmentación para definir, corregir o embellecer la forma de las cejas.',
        image: micropigmentacion,
        alt: 'Micropigmentación de cejas y laminación en Spabella Stetic',
    },
    {
        category: 'Mirada',
        title: 'Pestañas punto por punto',
        description: 'Aplicación personalizada para realzar la mirada con un acabado delicado.',
        image: pestanaspap,
        alt: 'Pestañas punto por punto en Spabella Stetic',
    },
    {
        category: 'Mirada',
        title: 'Lifting de pestañas',
        description: 'Curvatura natural para una mirada más abierta sin extensiones.',
        image: lifting,
        alt: 'Lifting de pestañas en Spabella Stetic',
    },
    {
        category: 'Capilar',
        title: 'Hidratación capilar baño de río',
        description: 'Aporte intenso de hidratación para recuperar brillo, suavidad y movimiento.',
        image: banhoderio,
        alt: 'Hidratación capilar baño de río en Spabella Stetic',
    },
    {
        category: 'Capilar',
        title: 'Alisado cacao amazónica',
        description: 'Control de frizz y alisado progresivo con acabado sedoso y manejable.',
        image: amazonica,
        alt: 'Alisado cacao amazónica en Spabella Stetic',
    },
    {
        category: 'Regeneración',
        title: 'Tratamientos para cicatrices, estrías y queloides',
        description: 'Protocolos orientados a mejorar textura y apariencia de marcas en la piel.',
        image: cicatrices,
        alt: 'Tratamientos para cicatrices, estrías y queloides en Spabella Stetic',
    },
    {
        category: 'Masajes',
        title: 'Masajes reductores con cavitación',
        description: 'Técnicas enfocadas en modelar contorno y apoyar objetivos corporales.',
        image: masajereductor,
        alt: 'Masajes reductores con cavitación en Spabella Stetic',
    },
    {
        category: 'Masajes',
        title: 'Masajes relajantes',
        description: 'Experiencia de bienestar para disminuir tensión y recuperar equilibrio.',
        image: masajesrelajantes,
        alt: 'Masajes relajantes en Spabella Stetic',
    },
    {
        category: 'Láser',
        title: 'Láser Hollywood Peel',
        description: 'Peeling de efecto luminoso para mejorar tono y aspecto general del rostro.',
        image: hollywoodpeel,
        alt: 'Láser Hollywood Peel en Spabella Stetic',
    },
    {
        category: 'Piel',
        title: 'Despigmentación',
        description: 'Tratamiento para atenuar manchas y unificar visiblemente el tono de piel.',
        image: despigmentacion,
        alt: 'Despigmentación en Spabella Stetic',
    },
    {
        category: 'Hidratación',
        title: 'Agua Star',
        description: 'Hidratación profunda y revitalización para una piel fresca, suave y luminosa.',
        image: aguastar,
        alt: 'Agua Star en Spabella Stetic',
    },
    {
        category: 'Regeneración',
        title: 'PDRN',
        description: 'Tratamiento regenerativo para mejorar la textura y apariencia de la piel.',
        image: pdrn,
        alt: 'PDRN en Spabella Stetic',
    },
    {
        category: 'Láser',
        title: 'Láser Onicomicosis',
        description: 'Tratamiento láser para combatir infecciones fúngicas en las uñas.',
        image: laserhongos,
        alt: 'Láser Onicomicosis en Spabella Stetic',
    }
];

export default tratamientos;