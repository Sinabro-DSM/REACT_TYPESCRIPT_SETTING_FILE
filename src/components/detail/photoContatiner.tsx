import React, { MutableRefObject, useEffect, useRef } from "react";
import * as S from "./styles";
import { ImgProps } from "../../interfaces/detail";
import { WIDTH } from "../../styles/index";
import { ClothesInformation, Prev, Next } from "../../assets/index";
const PhotoContatiner = ({ imgSrc, open, show }: ImgProps) => {
  const photoBoxRef: MutableRefObject<any> = useRef();
  const [photoLocation, setPhotoLocation] = React.useState<number>(1);
  const [translatePhoto, setTranslatePhoto] = React.useState<number>(0);

  const subWidthString: string[] = WIDTH.sub.split("p");
  const subWidth: number = +subWidthString[0];

  useEffect(() => {
    setTranslatePhoto(-(subWidth * (photoLocation - 1)));
  }, [photoLocation]);

  useEffect(() => {
    console.log(photoLocation);
    console.log(translatePhoto);
    photoBoxRef.current.style.transform = `translateX(${translatePhoto}px)`;
  }, [translatePhoto]);

  const NextSlide = () => {
    if (photoLocation < imgSrc.length) {
      setPhotoLocation(photoLocation + 1);
    } else {
      alert("사진을 더이상 넘길 수 없습니다.");
    }
  };

  const PrevSlide = () => {
    if (photoLocation <= 1) {
      alert("사진을 더이상 넘길 수 없습니다.");
    } else {
      setPhotoLocation(photoLocation - 1);
    }
  };

  return (
    <>
      <S.PhotoContainer>
        <S.PrevBtn onClick={PrevSlide}>
          <Prev />
        </S.PrevBtn>
        <S.PhotoBox>
          <S.ClothesInformation onClick={open}>
            <ClothesInformation />
          </S.ClothesInformation>
          <div ref={photoBoxRef}>
            {imgSrc.map((e: string, index: number) => (
              <S.Photo key={index} src={e} />
            ))}
          </div>
        </S.PhotoBox>
        <S.NextBtn onClick={NextSlide}>
          <Next />
        </S.NextBtn>
      </S.PhotoContainer>
      <S.PhotoPageCount>
        {photoLocation} / {imgSrc.length}
      </S.PhotoPageCount>
    </>
  );
};

export default PhotoContatiner;
