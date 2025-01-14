import React, { useEffect, useRef, useState } from 'react';
import {
  MediaPlayer,
  MediaProvider,
  type MediaPlayerInstance,
} from '@vidstack/react';
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { BunnyStreamClient, VideoMetadata } from './BunnyStreamClient';

export interface QuarkTVPlayerProps {
  videoId: string;
  client: BunnyStreamClient;
  autoPlay?: boolean;
  className?: string;
  onError?: (error: Error) => void;
  onMetadataLoad?: (metadata: VideoMetadata) => void;
}

export const QuarkTVPlayer = ({
  videoId,
  client,
  autoPlay = false,
  className = '',
  onError,
  onMetadataLoad,
}: QuarkTVPlayerProps) => {
  const playerRef = useRef<MediaPlayerInstance>(null);
  const [streamUrl, setStreamUrl] = useState<string>('');

  useEffect(() => {
    const setupPlayer = async () => {
      try {
        const [videoMetadata, url] = await Promise.all([
          client.getVideo(videoId),
          client.getHLSStreamUrl(videoId)
        ]);

        setStreamUrl(url);
        onMetadataLoad?.(videoMetadata);
      } catch (err) {
        console.error('Error setting up player:', err);
        const error = err instanceof Error ? err : new Error('Failed to setup player');
        onError?.(error);
      }
    };

    setupPlayer();
  }, [videoId, client, onError, onMetadataLoad]);

  if (!streamUrl) return null;

  return (
    <div className={`video-wrapper ${className}`}>
      <MediaPlayer
        ref={playerRef}
        src={{
          src: streamUrl,
          type: 'application/x-mpegurl',
        }}
        aspectRatio="16/9"
        autoplay={autoPlay}
        load="visible"
        streamType="live"
      >
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  );
}; 