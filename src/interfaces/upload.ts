export interface InputProps {
  label: string;
  pholder: string;
  choose: boolean;
  event: any;
  name: string;
  hashtagArr?: string[];
  value?: string;
}

export interface DescirptionProp {
  event: any;
  name: string;
}

export interface AddImgProps {
  callbackSetImgArr(imgArr: any): void;
  callbackSetImgUrl(imgUrl: any): void;
}

export interface UploadInfor {
  title: string;
  files: any[];
  topInfo: string;
  bottomInfo: string;
  shoesInfo: string;
  content: string;
  tags: string[];
}
