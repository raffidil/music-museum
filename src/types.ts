export type LocalizedText = {en: string; fa: string; am: string};

export type Track = {
  title: LocalizedText;
  imagePath?: string;
  audioPath: string;
};
export type Album = {
  title: LocalizedText;
  avatarPath?: string;
  type?: 'album' | 'sound';
  tracks: Track[];
};

export type Content = {
  homeTitle?: LocalizedText;
  albums?: Album[];
};
