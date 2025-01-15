export default {
  logo: (
    <div className="flex items-center gap-2">
      <img 
        src="https://ik.imagekit.io/creepfilms/quark-tv-logo-just-logo.svg" 
        alt="QuarkTV Player" 
        className="h-8"
      />
      <span className="font-bold">QuarkTV Player</span>
    </div>
  ),
  project: {
    link: 'https://github.com/quarktv/quark-tv-player'
  },
  chat: {
    link: 'https://www.npmjs.com/package/@quarktv/quark-tv-player',
    icon: (
      <svg viewBox="0 0 780 250" className="h-6 w-6">
        <path fill="currentColor" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"/>
      </svg>
    )
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
      <meta property="og:title" content="QuarkTV Player" />
      <meta property="og:description" content="Modern React Video Player" />
    </>
  ),
  primaryHue: 271,
  components: {
    // Disable default paragraph wrapper
    p: ({ children }) => <>{children}</>,
  },
  // Hide sidebar
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
    hidden: true
  },
  // Hide TOC
  toc: {
    hidden: true
  },
  // Hide navigation buttons
  navigation: false,
  // Customize footer
  footer: {
    text: (
      <div className="flex w-full items-center justify-between">
        <div>
          MIT {new Date().getFullYear()} ©{' '}
          <a
            href="https://github.com/quarktv/quark-tv-player"
            target="_blank"
            rel="noopener noreferrer"
          >
            QuarkTV Player
          </a>
        </div>
      </div>
    )
  }
}