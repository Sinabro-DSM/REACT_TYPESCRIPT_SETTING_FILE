export interface PostProps {
  profileSrc: string;
  imgSrc: string[];
  time: string | number;
  title: string;
  tag: string[];
  contents: string;
  commentCount: number | string;
  heart: number | string;
  //userId: number | string;
  //postId: number | string;
}

export interface CommentProps {
  profileSrc: string;
  name: string;
  contents: string;
  //userId: number | string;
}
