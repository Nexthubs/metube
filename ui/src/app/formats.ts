export interface Format {
  id: string;
  text: string;
  qualities: Quality[];
}

export interface Quality {
  id: string;
  text: string;
}

export const Formats: Format[] = [
  {
    id: 'any',
    text: '任意',
    qualities: [
      { id: 'best', text: '最佳' },
      { id: '2160', text: '2160p' },
      { id: '1440', text: '1440p' },
      { id: '1080', text: '1080p' },
      { id: '720', text: '720p' },
      { id: '480', text: '480p' },
      { id: 'worst', text: 'Worst' },
      { id: 'audio', text: 'Audio Only' },
    ],
  },
  {
    id: 'mp4',
    text: 'MP4',
    qualities: [
      { id: 'best', text: '最佳' },
      { id: 'best_ios', text: '最佳 (iOS)' },
      { id: '2160', text: '2160p' },
      { id: '1440', text: '1440p' },
      { id: '1080', text: '1080p' },
      { id: '720', text: '720p' },
      { id: '480', text: '480p' },
      { id: 'worst', text: '最差' },
    ],
  },
  {
    id: 'm4a',
    text: 'M4A',
    qualities: [
      { id: 'best', text: '最佳' },
      { id: '192', text: '192 kbps' },
      { id: '128', text: '128 kbps' },
    ],
  },
  {
    id: 'mp3',
    text: 'MP3',
    qualities: [
      { id: 'best', text: '最佳' },
      { id: '320', text: '320 kbps' },
      { id: '192', text: '192 kbps' },
      { id: '128', text: '128 kbps' },
    ],
  },
  {
    id: 'opus',
    text: 'OPUS',
    qualities: [{ id: 'best', text: '最佳' }],
  },
  {
    id: 'wav',
    text: 'WAV',
    qualities: [{ id: 'best', text: '最佳' }],
  },
  {
    id: 'flac',
    text: 'FLAC',
    qualities: [{ id: 'best', text: '最佳' }],
  },
  {
    id: 'thumbnail',
    text: '图片',
    qualities: [{ id: 'best', text: '最佳' }],
  },
];
