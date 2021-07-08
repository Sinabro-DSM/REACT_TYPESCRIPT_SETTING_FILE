export interface FeedCardProps {
  profileSrc: string;
  name: string;
  imgSrc: string;
  time: string | number;
  title: string;
  tag: string[];
  heart: number | string;
  userId: number | string;
  feedId: number | string;
}
