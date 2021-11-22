export interface DetailProps {
  picture: string | undefined;
  time: string | number;
  title: string;
  tag: string[];
  contents: string;
  commentCount: number | string;
  henger: number | string;
}

export interface CommentProps {
  //profileSrc: string;
  user_id: string;
  comment: string;
}

export interface ClothesModal {
  show: boolean;
  close: any;
}

export interface ClothesDetail {
  topInfo: string | undefined;
  bottomInfo: string | undefined;
  shoesInfo: string | undefined;
}

export interface HeartProps {
  hangerCnt: number | string | undefined;
}

export interface ImgProps {
  picture: string | undefined;
  open: any;
  show: boolean;
}
