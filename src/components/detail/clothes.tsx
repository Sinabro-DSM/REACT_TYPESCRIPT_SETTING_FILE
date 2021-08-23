import React from "react";
import { ClothesDetail } from "../../interfaces/detail";
import * as S from "./styles";

const Clothes = ({ top, bottom, shoes, show, close }: ClothesDetail) => {
  if (!show) {
    return null;
  }
  return (
    <S.ClothesDetailContainer>
      <S.ClothesDetailBackground />
      <S.ClothesDetail>
        <div>
          <h1>의류 정보</h1>
          <hr />
          <div>
            <S.Sortation>
              <h6>상의</h6>
              <p>{top}</p>
              <S.ClothesMore> 더 알아보기 ＞</S.ClothesMore>
            </S.Sortation>
            <hr />
            <S.Sortation>
              <h6>하의</h6>
              <p>{bottom}</p>
              <S.ClothesMore> 더 알아보기 ＞</S.ClothesMore>
            </S.Sortation>
            <hr />
            <S.Sortation>
              <h6>신발</h6>
              <p>{shoes}</p>
              <S.ClothesMore> 더 알아보기 ＞</S.ClothesMore>
            </S.Sortation>
            <S.Check onClick={close}>확인</S.Check>
          </div>
        </div>
      </S.ClothesDetail>
    </S.ClothesDetailContainer>
  );
};

export default Clothes;
