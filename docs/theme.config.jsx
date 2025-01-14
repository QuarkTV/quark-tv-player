import { useRouter } from 'next/router'

const config = {
  logo: <div className="w-32 h-8 relative">
    <img 
      src="https://ik.imagekit.io/creepfilms/quark-tv-logo-white.svg?updatedAt=1736890944138"
      alt="QuarkTV Player"
      className="w-full h-full object-contain"
    />
  </div>,
  project: {
    link: 'https://github.com/quarktv/quark-tv-player'
  },
  docsRepositoryBase: 'https://github.com/quarktv/quark-tv-player/tree/main/docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – QuarkTV Player'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="QuarkTV Player: A modern React video player optimized for live streaming" />
    </>
  ),
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark'
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} © <a href="https://github.com/quarktv/quark-tv-player" target="_blank">QuarkTV Player</a>
      </span>
    )
  },
  sidebar: {
    titleComponent: ({ title, type }) => <span className="nx-text-sm">{title}</span>,
    defaultMenuCollapseLevel: 2
  },
  toc: {
    float: true,
    backToTop: true,
    title: "En esta página"
  },
  navigation: {
    prev: true,
    next: true
  },
  // Nextra 4.0.0 specific options
  defaultShowCopyCode: true,
  search: {
    placeholder: 'Buscar en la documentación...'
  },
  editLink: {
    text: 'Editar esta página en GitHub'
  },
  feedback: {
    content: '¿Preguntas? Danos tu feedback →'
  },
  gitTimestamp: false
}

export default config 