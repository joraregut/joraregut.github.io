export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Jorge Arévalo | Cientifico de datos',
    subtitle: 'Portafolio',
    description: 'Portafolio de proyectos de ciencia de datos, basado en tema de Astro',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },

    ],
    socialLinks: [
        {
            text: 'linkedin',
            href: 'https://www.linkedin.com/in/joraregut/'
        },
        {
            text: 'Github',
            href: 'https://github.com/joraregut'
        }
    ],
    hero: {
        title: 'Hola bienvenido a mi portafolio de proyectos',
        text: "Me llamo **Jorge Arévalo**, un cientifico de datos, me gusta la automatización y las soluciones que realmente funcionan, transformado problemas complejos en respuestas claras, usando herramientas como **Python, SQL, Power Query, y Machine Learning**. Mi enfoque combina precisión técnica con un toque creativo para resolver desafíos de negocio. Siéntete libre de explorar algunos de mis proyectos de codificación en <a href='https://github.com/joraregut'>GitHub</a> o conectemos en <a href='https://www.linkedin.com/in/joraregut/'>Linkedin</a>.",
    
        
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Ponte en contacto conmigo',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
