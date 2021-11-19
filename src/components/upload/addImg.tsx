import * as S from "./styles";
import { AddImgProps } from "./../../interfaces/upload";
import { useEffect, useState } from "react";
import { Check } from "../../assets";

export default function AddImg({
  callbackSetImgArr,
  callbackSetImgUrl,
}: AddImgProps) {
  const [imgArr, setImgArr] = useState<any[]>([]);
  const [representImg, setRepresentImg] = useState<number>(0);
  const getSrc = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files;
    callbackSetImgArr((arr: any[]) => [...arr, file[0]]);
    const reader = new FileReader();
    reader.onload = (event) => {
      setImgArr((arr) => [...arr, event.target?.result!.toString()]);
    };
    reader.readAsDataURL(file[0]);
  };

  useEffect(() => {
    callbackSetImgUrl(imgArr[0]);
  }, [imgArr, callbackSetImgUrl]);

  return (
    <S.InpBox>
      <input
        type="file"
        id="file"
        style={{ display: "none" }}
        accept="image/png, image/jpeg, image/jpg"
        onChange={getSrc}
      />
      <S.FlexBox>
        <label>
          사진추가
          <span>({imgArr.length}/10)</span>
        </label>
        <S.AddBtn onClick={() => document.getElementById("file")?.click()} />
      </S.FlexBox>
      {imgArr.length > 0 && (
        <>
          <S.PreviewBox>
            {imgArr.map((e, index) => (
              <S.ImgWrapper key={index}>
                {index === representImg && <Check />}
                <img src={e} onClick={() => setRepresentImg(index)} alt="" />
              </S.ImgWrapper>
            ))}
          </S.PreviewBox>
        </>
      )}
    </S.InpBox>
  );
}
