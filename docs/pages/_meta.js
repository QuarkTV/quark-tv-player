export default {
  index: {
    title: 'Home',
    type: 'page',
    display: 'hidden'
  },
  docs: {
    title: 'Documentation',
    type: 'page'
  },
  guides: {
    title: 'Guides',
    type: 'menu',
    items: {
      'getting-started': {
        title: 'Getting Started',
        href: '/guides/getting-started'
      },
      'basic-usage': {
        title: 'Basic Usage',
        href: '/guides/basic-usage'
      },
      'customization': {
        title: 'Customization',
        href: '/guides/customization'
      },
      'advanced': {
        title: 'Advanced Usage',
        href: '/guides/advanced'
      }
    }
  },
  providers: {
    title: 'Providers',
    type: 'menu',
    items: {
      'bunny-stream': {
        title: 'Bunny Stream',
        href: '/providers/bunny-stream'
      },
      'cloudflare': {
        title: 'Cloudflare Stream (Coming Soon)',
        href: '/providers/cloudflare'
      },
      'aws': {
        title: 'AWS MediaLive (Coming Soon)',
        href: '/providers/aws'
      }
    }
  },
  'api-reference': {
    title: 'API Reference',
    type: 'menu',
    items: {
      'player': {
        title: 'QuarkTVPlayer',
        href: '/api-reference/player'
      },
      'clients': {
        title: 'Stream Clients',
        href: '/api-reference/clients'
      },
      'types': {
        title: 'TypeScript Types',
        href: '/api-reference/types'
      },
      'events': {
        title: 'Events',
        href: '/api-reference/events'
      },
      'styles': {
        title: 'Styling API',
        href: '/api-reference/styles'
      }
    }
  },
  examples: {
    title: 'Examples',
    type: 'menu',
    items: {
      'basic': {
        title: 'Basic Examples',
        href: '/examples/basic'
      },
      'advanced': {
        title: 'Advanced Examples',
        href: '/examples/advanced'
      },
      'customization': {
        title: 'Customization Examples',
        href: '/examples/customization'
      },
      'providers': {
        title: 'Provider Examples',
        href: '/examples/providers'
      }
    }
  }
}