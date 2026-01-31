export const translations = {
  es: {
    site: {
      title: 'Carlos Ferreras',
      description: 'Desarrollador web y diseñador basado en España'
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
      back: 'volver'
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
      description: 'Web developer and designer based in Spain'
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
      back: 'back'
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
