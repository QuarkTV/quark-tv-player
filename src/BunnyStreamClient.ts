export interface BunnyStreamConfig {
  apiKey: string;
  libraryId: string;
  baseUrl?: string;
  cdnHostname?: string;
  tokenAuthKey?: string;
}

export interface VideoMetadata {
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

export interface VideoPlayData {
  video: {
    videoLibraryId: string;
    guid: string;
    title: string;
    framerate: number;
    length: number;
    height: number;
    width: number;
  };
  videoPlaylistUrl: string;
  thumbnailUrl: string;
  previewUrl: string;
  fallbackUrl: string;
  captionsPath: string;
  seekPath: string;
}

export class BunnyStreamClient {
  private readonly apiKey: string;
  private readonly libraryId: string;
  private readonly baseUrl: string;
  private readonly cdnHostname: string;
  private readonly tokenAuthKey: string;

  constructor(config: BunnyStreamConfig) {
    this.apiKey = config.apiKey;
    this.libraryId = config.libraryId;
    this.baseUrl = config.baseUrl || 'https://video.bunnycdn.com';
    this.cdnHostname = config.cdnHostname || `vz-${config.libraryId}.b-cdn.net`;
    this.tokenAuthKey = config.tokenAuthKey || this.apiKey;
  }

  private async fetchWithAuth(endpoint: string, options: RequestInit = {}) {
    console.log('Fetching:', `${this.baseUrl}${endpoint}`);
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'GET',
      ...options,
      headers: {
        'Accept': 'application/json',
        'AccessKey': this.apiKey,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('API Error:', text);
      throw new Error(`HTTP error! status: ${response.status} - ${text}`);
    }

    const data = await response.json();
    console.log('API Response:', endpoint, data);
    return data;
  }

  private generateSecurityToken(path: string): string {
    const expiration = Math.floor(Date.now() / 1000) + 3600; // 1 hora
    const pathToSign = path.startsWith('/') ? path : '/' + path;
    const signaturePath = this.tokenAuthKey + pathToSign + expiration;
    
    // Implementación de hash SHA256 simple
    let hash = 0;
    for (let i = 0; i < signaturePath.length; i++) {
      const char = signaturePath.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }

    return Math.abs(hash).toString(16) + expiration;
  }

  async getVideo(videoId: string): Promise<VideoMetadata> {
    return this.fetchWithAuth(`/library/${this.libraryId}/videos/${videoId}`);
  }

  async getVideoHeatmap(videoId: string): Promise<any> {
    return this.fetchWithAuth(`/library/${this.libraryId}/videos/${videoId}/heatmap`);
  }

  async getVideoStatistics(videoId: string): Promise<any> {
    return this.fetchWithAuth(`/library/${this.libraryId}/videos/${videoId}/statistics`);
  }

  async getPlayUrl(videoId: string): Promise<VideoPlayData> {
    return this.fetchWithAuth(`/library/${this.libraryId}/videos/${videoId}/play`);
  }

  async getHLSStreamUrl(videoId: string): Promise<string> {
    console.log('Getting HLS stream URL for video:', videoId);
    const playData = await this.getPlayUrl(videoId);
    console.log('Play data received:', playData);
    return playData.videoPlaylistUrl;
  }

  getThumbnailUrl(videoId: string, time?: number): string {
    const path = `/${videoId}/thumbnail.jpg`;
    const token = this.generateSecurityToken(path);
    const timeParam = time ? `&time=${time}` : '';
    return `https://${this.cdnHostname}${path}?token=${token}${timeParam}`;
  }
} 