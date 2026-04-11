# Spabella Stetic

Landing page desarrollada con Astro para presentar la marca Spabella Stetic, sus servicios principales y un flujo de contacto directo por WhatsApp.

El proyecto está planteado como una página rápida, visual y orientada a conversión, con animaciones sutiles, secciones modulares y SEO centralizado desde el layout principal.

## Resumen

- Sitio: https://spabellastetic.com
- Tipo de proyecto: landing page estática
- Objetivo: captación de clientes y reservas
- Stack principal: Astro, Tailwind CSS v4 y GSAP
- Contacto principal: WhatsApp

## Stack

- Astro 6
- Tailwind CSS 4 con integración vía Vite
- GSAP para animaciones de entrada y movimiento sutil
- PNPM como gestor de paquetes
- Node.js 22.12.0 o superior

## Scripts

Todos los comandos se ejecutan desde la raíz del proyecto.

| Comando | Descripción |
| --- | --- |
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Inicia el entorno local de desarrollo |
| `pnpm build` | Genera la versión de producción en `dist/` |
| `pnpm preview` | Sirve la build de producción localmente |
| `pnpm astro -- --help` | Muestra ayuda del CLI de Astro |

## Estructura del proyecto

```text
/
├── astro.config.mjs
├── package.json
├── public/
│   └── fonts/
├── src/
│   ├── animations/
│   │   ├── contact.ts
│   │   ├── hero.ts
│   │   ├── index.ts
│   │   └── services.ts
│   ├── assets/
│   │   └── img/
│   ├── components/
│   │   ├── Contact.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── ServiceCard.astro
│   │   └── Services.astro
│   ├── data/
│   │   └── tratamientos.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── README.md
```

## Arquitectura rápida

### Layout global

[src/layouts/Layout.astro](src/layouts/Layout.astro) centraliza:

- título de la página
- meta description por defecto
- canonical dinámico
- etiquetas Open Graph
- etiquetas Twitter Card
- JSON-LD del negocio

Esto evita duplicar SEO en cada vista y deja el proyecto preparado para escalar a más páginas si luego se añaden rutas nuevas.

### Página principal

[src/pages/index.astro](src/pages/index.astro) compone la landing con estas secciones:

- Navbar
- Hero
- Services
- Contact
- Footer

### Componentes

- [src/components/Navbar.astro](src/components/Navbar.astro): navegación principal y CTA de reserva.
- [src/components/Hero.astro](src/components/Hero.astro): portada principal de la landing.
- [src/components/Services.astro](src/components/Services.astro): bloque destacado de servicios y renderizado de cards.
- [src/components/ServiceCard.astro](src/components/ServiceCard.astro): tarjeta reutilizable para tratamientos.
- [src/components/Contact.astro](src/components/Contact.astro): formulario de cita, redes, horarios y mapa.

### Datos

[src/data/tratamientos.ts](src/data/tratamientos.ts) concentra la información de los tratamientos y sus imágenes. Esto permite mantener el contenido de tarjetas desacoplado de la vista.

### Animaciones

Las animaciones están separadas por sección en [src/animations/index.ts](src/animations/index.ts) y módulos asociados para mantener el código limpio y escalable.

## SEO

El proyecto ya incluye configuración SEO base desde el layout:

- canonical con base en `https://spabellastetic.com`
- description por defecto
- Open Graph para compartir en redes
- Twitter Card
- datos estructurados tipo `BeautySalon`

Si en el futuro agregas nuevas páginas, puedes pasar `title`, `description` e `image` al layout para personalizar el SEO por ruta.

## Flujo de contacto

La conversión principal del sitio ocurre por WhatsApp.

En [src/components/Contact.astro](src/components/Contact.astro):

- el usuario completa nombre, tratamiento, fecha y hora
- el formulario valida campos requeridos
- la fecha se restringe al día actual o posterior
- el mensaje se formatea automáticamente
- se abre WhatsApp con el texto listo para enviar

## Diseño y estilo

- El proyecto usa Tailwind CSS como base visual.
- Se priorizó mantener componentes sin CSS local siempre que fuera posible.
- La identidad visual combina tonos cálidos, fondo editorial y botones de conversión claros.
- Las clases utilitarias siguen una línea consistente entre navegación, servicios y contacto.

## Requisitos de entorno

- Node.js `>=22.12.0`
- PNPM instalado globalmente

## Desarrollo local

1. Instala dependencias:

```bash
pnpm install
```

2. Inicia el entorno de desarrollo:

```bash
pnpm dev
```

3. Abre la URL local mostrada por Astro en consola, normalmente:

```bash
http://localhost:4321
```

## Build de producción

```bash
pnpm build
pnpm preview
```

La salida final se genera en la carpeta `dist/`.

## Mantenimiento recomendado

- Sustituir enlaces placeholder de redes sociales por URLs reales si cambian.
- Revisar el contenido SEO del layout al crear nuevas páginas.
- Mantener las imágenes optimizadas para evitar degradar Lighthouse.
- Reutilizar [src/data/tratamientos.ts](src/data/tratamientos.ts) para nuevos servicios en lugar de hardcodearlos en el componente.
- Si se agregan nuevas secciones animadas, extender [src/animations/index.ts](src/animations/index.ts) en vez de volver a scripts inline grandes.

## Licencia

Uso interno del proyecto Spabella Stetic.
