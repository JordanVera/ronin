export type VideoItem = {
  id: number;
  title: string;
  type: "youtube" | "mp4";
  youtubeId?: string;
  src?: string;
  poster?: string;
};

export type EmbedItem = {
  id: number;
  title: string;
  type: string;
  url: string;
};

export const VIDEOS_DATA: VideoItem[] = [
  {
    id: 1,
    title: 'Ronin 2 Venue Film',
    type: 'youtube',
    youtubeId: 'Hw9dlVhBvxs',
  },
];

export const EMBEDS_DATA: EmbedItem[] = [
  {
    id: 1,
    title: 'Ronin Harrisburg — 3D Virtual Tour',
    type: 'matterport',
    url: 'https://my.matterport.com/show/?m=bhF2HsBmwJo&nt=1',
  },
  {
    id: 2,
    title: 'Ronin 2 — 3D Virtual Tour',
    type: 'matterport',
    url: 'https://my.matterport.com/show/?m=1G8QTeGjpxh&nt=1',
  },
];
