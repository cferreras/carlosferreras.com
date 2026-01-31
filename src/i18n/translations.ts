export const translations = {
  es: {
    site: {
      title: 'Carlos Ferreras',
      description: 'Desarrollador web y diseñador basado en España. Especializado en crear sitios web modernos, aplicaciones funcionales y experiencias digitales únicas.',
      keywords: ['Carlos Ferreras', 'desarrollador web', 'diseñador web', 'España', 'frontend', 'backend', 'JavaScript', 'TypeScript', 'Astro', 'React', 'programador', 'portfolio', 'desarrollo web'],
      author: 'Carlos Ferreras',
      url: 'https://carlosferreras.com',
      ogImage: '/og-image-es.jpg'
    },
    header: {
      name: 'Carlos Ferreras',
      about: 'Sobre mí',
      aboutText: 'Soy desarrollador web y diseñador basado en España. Me encanta crear sitios web y aplicaciones hermosas y funcionales.'
    },
    links: {
      blog: 'Blog'
    },
    blog: {
      title: 'Blog',
      subtitle: 'Pensamientos y actualizaciones de Carlos Ferreras.',
      back: 'volver',
      seo: {
        title: 'Blog | Carlos Ferreras',
        description: 'Artículos sobre desarrollo web, diseño, tecnología y más. Compartiendo conocimientos y experiencias como desarrollador.',
        keywords: ['blog', 'desarrollo web', 'programación', 'diseño web', 'tecnología', 'tutoriales', 'artículos técnicos']
      }
    },
    footer: {
      text: 'Construido con ❤️ usando Astro. Échale un vistazo en'
    },
    language: {
      es: 'ES',
      en: 'EN',
      switch: 'Cambiar idioma'
    }
  },
  en: {
    site: {
      title: 'Carlos Ferreras',
      description: 'Web developer and designer based in Spain. Specialized in creating modern websites, functional applications, and unique digital experiences.',
      keywords: ['Carlos Ferreras', 'web developer', 'web designer', 'Spain', 'frontend', 'backend', 'JavaScript', 'TypeScript', 'Astro', 'React', 'programmer', 'portfolio', 'web development'],
      author: 'Carlos Ferreras',
      url: 'https://carlosferreras.com',
      ogImage: '/og-image-en.jpg'
    },
    header: {
      name: 'Carlos Ferreras',
      about: 'About me',
      aboutText: 'I\'m a web developer and designer based in Spain. I love creating beautiful and functional websites and applications.'
    },
    links: {
      blog: 'Blog'
    },
    blog: {
      title: 'Blog',
      subtitle: 'Thoughts and updates from Carlos Ferreras.',
      back: 'back',
      seo: {
        title: 'Blog | Carlos Ferreras',
        description: 'Articles about web development, design, technology and more. Sharing knowledge and experiences as a developer.',
        keywords: ['blog', 'web development', 'programming', 'web design', 'technology', 'tutorials', 'technical articles']
      }
    },
    footer: {
      text: 'Built with ❤️ using Astro. Check it out at'
    },
    language: {
      es: 'ES',
      en: 'EN',
      switch: 'Switch language'
    }
  }
} as const;

export type Lang = 'es' | 'en';

export function getTranslations(lang: Lang) {
  return translations[lang];
}
