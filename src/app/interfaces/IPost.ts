
export interface IPost {
  publishDate: Date;
  postMessage: string;
  author: string;
  likes?: number;
  dislikes?: number;
}
