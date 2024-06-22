export interface PictureData {
  id: string;
  urls: { small: string; regular: string };
  alternative_slugs: { en: string };
  likes: number;
  user: {name: string, location: string};
  description: string;
  alt_description: string;
}