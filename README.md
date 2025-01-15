# 📺 QuarkTV Player

A modern and lightweight React video player component optimized for live streaming, built on top of Vidstack with a Twitch-like design.

![QuarkTV Player](https://ik.imagekit.io/creepfilms/image.png?updatedAt=1736822430077)

<div align="center">
  
[![npm version](https://img.shields.io/npm/v/@quarktv/quark-tv-player.svg?style=flat-square)](https://www.npmjs.com/package/@quarktv/quark-tv-player)
[![npm downloads](https://img.shields.io/npm/dm/@quarktv/quark-tv-player.svg?style=flat-square)](https://www.npmjs.com/package/@quarktv/quark-tv-player)
[![Docs](https://github.com/QuarkTV/quark-tv-player/actions/workflows/docs.yml/badge.svg)](https://github.com/QuarkTV/quark-tv-player/actions/workflows/docs.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎥 Supported Providers](#-supported-providers)
- [📦 Installation](#-installation)
- [🚀 Quick Start](#-quick-start)
- [🔧 Configuration](#-configuration)
- [🎮 Usage Examples](#-usage-examples)
- [🎨 Styling Guide](#-styling-guide)
- [🔌 API Reference](#-api-reference)
- [🎯 Best Practices](#-best-practices)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## ✨ Features

- 🎯 **Optimized for Live Streaming**
  - HLS support out of the box
  - Live indicator with animation
  - Automatic quality switching
  - Low-latency optimizations
  - Multi-provider support

- 🎨 **Modern UI**
  - Twitch-inspired design
  - Customizable theme
  - Responsive controls
  - Clean and minimal interface
  - Provider-specific features

- 📱 **Fully Responsive**
  - Works on all screen sizes
  - Touch-friendly controls
  - Adaptive quality selection
  - Mobile-first approach

- ⚡ **Performance Focused**
  - Lightweight bundle size
  - Efficient rendering
  - Optimized video delivery
  - Minimal dependencies

## 🎥 Supported Providers

QuarkTV Player is designed to work seamlessly with multiple streaming providers. Here's our current and planned support:

### Current Support

- 🟢 **Bunny.net Stream**
  - Full HLS support
  - Token authentication
  - Automatic quality switching
  - Low-latency streaming
  - Built-in CDN

### Coming Soon

- 🟡 **Cloudflare Stream** (Coming Q2 2025)
  - Global edge network
  - Adaptive bitrate streaming
  - Analytics integration
  - DRM support
  - Custom domains

- 🟡 **AWS MediaLive** (Coming Q3 2025)
  - Integration with AWS ecosystem
  - RTMP ingestion
  - Channel archiving
  - Multi-protocol output
  - Advanced monitoring

### Provider Comparison

| Feature | Bunny.net | Cloudflare* | AWS* |
|---------|-----------|-------------|-------|
| Global CDN | ✅ | ✅ | ✅ |
| Low Latency | ✅ | ✅ | ✅ |
| Auto Quality | ✅ | ✅ | ✅ |
| Analytics | ✅ | ✅ | ✅ |
| DRM | ❌ | ✅ | ✅ |
| Price | $$ | $$ | $$$ |

*Coming soon

## 📦 Installation

1. Install the package and its peer dependencies:

```bash
# Using npm
npm install @quarktv/quark-tv-player

# Using yarn
yarn add @quarktv/quark-tv-player

# Using pnpm
pnpm add @quarktv/quark-tv-player
```

2. Import the required styles in your app's entry point:

```tsx
// If using Next.js, add this to your app/layout.tsx or _app.tsx
import '@quarktv/quark-tv-player/dist/styles.css';

// If using Vite/CRA, add to your main.tsx/App.tsx
import '@quarktv/quark-tv-player/dist/styles.css';
```

## 🚀 Quick Start

1. Initialize your preferred streaming client:

```tsx
// Using Bunny.net Stream
import { BunnyStreamClient } from '@quarktv/quark-tv-player';

const client = new BunnyStreamClient({
  libraryId: 'your-library-id',  // From Bunny.net dashboard
  apiKey: 'your-api-key',        // Your API key
});

// Coming soon: Cloudflare Stream
import { CloudflareStreamClient } from '@quarktv/quark-tv-player';

const cloudflareClient = new CloudflareStreamClient({
  accountId: 'your-account-id',
  apiToken: 'your-api-token',
});

// Coming soon: AWS MediaLive
import { AWSMediaLiveClient } from '@quarktv/quark-tv-player';

const awsClient = new AWSMediaLiveClient({
  region: 'us-east-1',
  credentials: {
    accessKeyId: 'your-access-key',
    secretAccessKey: 'your-secret-key',
  },
});
```

2. Use the player component:

```tsx
import { QuarkTVPlayer } from '@quarktv/quark-tv-player';

function App() {
  return (
    <QuarkTVPlayer
      videoId="your-video-id"
      client={client} // Use any supported streaming client
      autoPlay={true}
      onError={(error) => console.error('Video error:', error)}
      onMetadataLoad={(metadata) => console.log('Video metadata:', metadata)}
    />
  );
}
```

## 🔧 Configuration

### Provider-Specific Configuration

#### Bunny Stream Client

```tsx
const client = new BunnyStreamClient({
  // Required
  libraryId: string,    // Your Bunny Stream library ID
  apiKey: string,       // Your API key for authentication

  // Optional
  baseUrl?: string,     // Custom API endpoint
  cdnHostname?: string, // Custom CDN hostname
  tokenAuthKey?: string // Custom token for authentication
});
```

#### Cloudflare Stream Client (Coming Soon)

```tsx
const client = new CloudflareStreamClient({
  // Required
  accountId: string,    // Your Cloudflare account ID
  apiToken: string,     // Your API token

  // Optional
  customDomain?: string,  // Custom domain for delivery
  analytics?: boolean,    // Enable analytics
  drmEnabled?: boolean   // Enable DRM protection
});
```

#### AWS MediaLive Client (Coming Soon)

```tsx
const client = new AWSMediaLiveClient({
  // Required
  region: string,         // AWS region
  credentials: {
    accessKeyId: string,
    secretAccessKey: string,
  },

  // Optional
  channelId?: string,     // Specific channel ID
  outputGroup?: string,   // Output group configuration
  monitoring?: boolean    // Enable CloudWatch monitoring
});
```

### Player Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| videoId | string | required | The ID of the video to play |
| client | StreamClient | required | Instance of any supported streaming client |
| autoPlay | boolean | false | Whether to start playing automatically |
| className | string | '' | Additional CSS classes |
| onError | (error: Error) => void | undefined | Error callback |
| onMetadataLoad | (metadata: VideoMetadata) => void | undefined | Metadata loaded callback |
| provider | 'bunny' \| 'cloudflare' \| 'aws' | 'bunny' | Override default provider detection |

## 🎮 Usage Examples

### Basic Implementation

```tsx
import { QuarkTVPlayer, BunnyStreamClient } from '@quarktv/quark-tv-player';

// Initialize client
const client = new BunnyStreamClient({
  libraryId: process.env.NEXT_PUBLIC_BUNNY_LIBRARY_ID,
  apiKey: process.env.NEXT_PUBLIC_BUNNY_API_KEY,
});

// Use in your component
export default function VideoPlayer() {
  return (
    <div className="video-container">
      <QuarkTVPlayer
        videoId="your-video-id"
        client={client}
        autoPlay={false}
        onError={(error) => console.error('Video error:', error)}
        onMetadataLoad={(metadata) => console.log('Video metadata:', metadata)}
      />
    </div>
  );
}
```

### With Custom Styling

```tsx
// styles/player.css
.video-container {
  max-width: 1280px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

media-player {
  --media-brand: #9147ff;         /* Primary color */
  --media-focus-ring: #9147ff;    /* Focus outline color */
  --media-background: #0e0e10;    /* Player background */
}
```

## 🎨 Styling Guide

### Theme Customization

The player uses CSS variables for theming. Here are all available variables:

```css
media-player {
  /* Colors */
  --media-brand: #9147ff;         /* Primary brand color */
  --media-focus-ring: #9147ff;    /* Focus outline color */
  --media-background: #0e0e10;    /* Player background */

  /* Controls */
  --media-controls-color: #ffffff;
  --media-controls-background: linear-gradient(to top, rgb(0 0 0 / 0.8), transparent);

  /* Live Indicator */
  --media-live-indicator-color: #ff0000;
}
```

### Live Button Customization

```css
.live-status media-live-button {
  background: #ff0000;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
```

## 🔌 API Reference

### BunnyStreamClient Methods

```typescript
class BunnyStreamClient {
  // Get video metadata
  async getVideo(videoId: string): Promise<VideoMetadata>;

  // Get video heatmap data
  async getVideoHeatmap(videoId: string): Promise<any>;

  // Get video statistics
  async getVideoStatistics(videoId: string): Promise<any>;

  // Get video playback URL
  async getPlayUrl(videoId: string): Promise<VideoPlayData>;

  // Get HLS stream URL
  async getHLSStreamUrl(videoId: string): Promise<string>;

  // Get thumbnail URL
  getThumbnailUrl(videoId: string, time?: number): string;
}
```

### VideoMetadata Interface

```typescript
interface VideoMetadata {
  videoLibraryId: string;
  guid: string;
  title?: string;
  dateUploaded?: string;
  views?: number;
  isPublic?: boolean;
  length?: number;
  status?: number;
  thumbnailUrl?: string;
  resolutions?: string[];
  encodeProgress?: number;
  storageSize?: number;
  captions?: Array<{
    srclang: string;
    label: string;
    url: string;
  }>;
}
```

## 🎯 Best Practices

1. **Error Handling**
```tsx
<QuarkTVPlayer
  videoId={videoId}
  client={client}
  onError={(error) => {
    console.error('Video error:', error);
    // Implement your error UI/logic here
  }}
/>
```

2. **Responsive Design**
```css
.video-wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  aspect-ratio: 16/9;
}
```

3. **Performance Optimization**
```tsx
// Lazy load the player
const VideoPlayer = dynamic(() => import('@quarktv/quark-tv-player'), {
  ssr: false,
  loading: () => <div>Loading player...</div>
});
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

MIT © [QuarkTV](https://github.com/quarktv)

---

Made with ❤️ by [QuarkTV Team](https://github.com/quarktv)
