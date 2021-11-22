import React, { MutableRefObject, useEffect, useRef } from "react";
import * as S from "./styles";
import { ImgProps } from "../../interfaces/detail";
import { WIDTH } from "../../styles/index";
import { ClothesInformation } from "../../assets/index";

const PhotoContatiner = ({ picture, open, show }: ImgProps) => {
  return (
    <>
      <S.PhotoContainer>
        <S.PhotoBox>
          <S.ClothesInformation onClick={open}>
            <ClothesInformation />
          </S.ClothesInformation>
         {/*  <div> */}
            <S.Photo src={picture} />
          {/* </div> */}
        </S.PhotoBox>
      </S.PhotoContainer>
    </>
  );
};

export default PhotoContatiner;
