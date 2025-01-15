import React, { useEffect, useRef, useState } from 'react';
import { MediaPlayer, MediaPlayerInstance, MediaProvider, type MediaLoadingStrategy } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { BunnyStreamClient, VideoMetadata } from './BunnyStreamClient';

export interface StreamerInfo {
  name: string;
  title: string;
  category?: string;
  viewers?: number;
  avatarUrl?: string;
  isLive?: boolean;
}

export interface QuarkTVPlayerProps {
  // Core Props (Required)
  videoId: string;
  client: BunnyStreamClient;

  // Core Props (Optional)
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: 'none' | 'metadata' | 'auto';

  // Stream Information
  streamerInfo?: StreamerInfo;
  showStreamInfo?: boolean;

  // Event Handlers
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
  onError?: (error: Error) => void;
  onMetadataLoad?: (metadata: VideoMetadata) => void;
  onQualityChange?: (quality: string) => void;
  onVolumeChange?: (volume: number) => void;
  onFullscreenChange?: (isFullscreen: boolean) => void;
  onTimeUpdate?: (time: number) => void;
  onPiPChange?: (enabled: boolean) => void;

  // Customization Props
  className?: string;
  style?: React.CSSProperties;
  theme?: 'dark' | 'light';
  aspectRatio?: string;
  controls?: boolean | React.ReactNode;
  hideControls?: boolean;

  // Advanced Props
  keyboardShortcuts?: boolean;
  hotkeys?: boolean;
  pip?: boolean;
  defaultQuality?: string;
  bufferDuration?: number;
  liveEdgeOffset?: number;
  loadingComponent?: React.ReactNode;
  icons?: {
    play?: React.ReactNode;
    pause?: React.ReactNode;
    volume?: React.ReactNode;
    fullscreen?: React.ReactNode;
  };
}

export const QuarkTVPlayer = ({
  // Core Props
  videoId,
  client,
  autoPlay = false,
  muted = false,
  loop = false,
  preload = 'metadata',

  // Stream Information
  streamerInfo,
  showStreamInfo = true,

  // Event Handlers
  onPlay,
  onPause,
  onEnded,
  onError,
  onMetadataLoad,
  onQualityChange,
  onVolumeChange,
  onFullscreenChange,
  onTimeUpdate,
  onPiPChange,

  // Customization Props
  className = '',
  style,
  theme = 'dark',
  aspectRatio = '16/9',
  controls = true,
  hideControls = false,

  // Advanced Props
  keyboardShortcuts = true,
  hotkeys = true,
  pip = true,
  defaultQuality = 'auto',
  bufferDuration = 30,
  liveEdgeOffset = 10,
  loadingComponent,
  icons
}: QuarkTVPlayerProps) => {
  const playerRef = useRef<MediaPlayerInstance>(null);
  const [streamUrl, setStreamUrl] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentQuality, setCurrentQuality] = useState<string>('');

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

  useEffect(() => {
    if (!playerRef.current) return;

    const player = playerRef.current;

    // Set up event listeners
    player.addEventListener('play', () => onPlay?.());
    player.addEventListener('pause', () => onPause?.());
    player.addEventListener('ended', () => onEnded?.());
    player.addEventListener('volumechange', () => onVolumeChange?.(player.volume));
    player.addEventListener('fullscreenchange', () => {
      setIsFullscreen(document.fullscreenElement !== null);
      onFullscreenChange?.(document.fullscreenElement !== null);
    });
    player.addEventListener('timeupdate', () => onTimeUpdate?.(player.currentTime));
    player.addEventListener('qualitychange', (event: any) => {
      const quality = event.detail?.quality || defaultQuality;
      setCurrentQuality(quality);
      onQualityChange?.(quality);
    });
    player.addEventListener('enterpictureinpicture', () => onPiPChange?.(true));
    player.addEventListener('leavepictureinpicture', () => onPiPChange?.(false));

    return () => {
      // Clean up event listeners
      player.removeEventListener('play', () => onPlay?.());
      player.removeEventListener('pause', () => onPause?.());
      player.removeEventListener('ended', () => onEnded?.());
      player.removeEventListener('volumechange', () => onVolumeChange?.(player.volume));
      player.removeEventListener('fullscreenchange', () => {
        setIsFullscreen(document.fullscreenElement !== null);
        onFullscreenChange?.(document.fullscreenElement !== null);
      });
      player.removeEventListener('timeupdate', () => onTimeUpdate?.(player.currentTime));
      player.removeEventListener('qualitychange', (event: any) => {
        const quality = event.detail?.quality || defaultQuality;
        setCurrentQuality(quality);
        onQualityChange?.(quality);
      });
      player.removeEventListener('enterpictureinpicture', () => onPiPChange?.(true));
      player.removeEventListener('leavepictureinpicture', () => onPiPChange?.(false));
    };
  }, [onPlay, onPause, onEnded, onVolumeChange, onFullscreenChange, onTimeUpdate, onQualityChange, onPiPChange, defaultQuality]);

  if (!streamUrl) {
    return loadingComponent || null;
  }

  const customClassName = `quark-player ${theme} ${className}`.trim();

  return (
    <div className={customClassName} style={style}>
      <MediaPlayer
        ref={playerRef}
        data-testid="media-player"
        src={{
          src: streamUrl,
          type: 'application/x-mpegurl',
        }}
        aspectRatio={aspectRatio}
        autoplay={autoPlay}
        muted={muted}
        loop={loop}
        load={preload as MediaLoadingStrategy}
        streamType="live"
      >
        <MediaProvider />
        {typeof controls === 'boolean' ? (
          controls && (
            <DefaultVideoLayout
              icons={{ ...defaultLayoutIcons, ...icons }}
            />
          )
        ) : (
          controls
        )}
        {showStreamInfo && streamerInfo && (
          <div className="stream-info">
            {streamerInfo.avatarUrl && (
              <img
                src={streamerInfo.avatarUrl}
                alt={streamerInfo.name}
                className="streamer-avatar"
              />
            )}
            <div className="streamer-details">
              <h3>{streamerInfo.name}</h3>
              <p>{streamerInfo.title}</p>
              {streamerInfo.category && <span>{streamerInfo.category}</span>}
              {streamerInfo.viewers !== undefined && (
                <span>{streamerInfo.viewers.toLocaleString()} viewers</span>
              )}
              {streamerInfo.isLive && <span className="live-badge">LIVE</span>}
            </div>
          </div>
        )}
      </MediaPlayer>
    </div>
  );
}; 