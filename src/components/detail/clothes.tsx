import React, { useEffect, useState } from "react";
import { ClothesDetail, ClothesModal } from "../../interfaces/detail";
import * as S from "./styles";
import { requestWithOutAccessToken } from "../../utils/axios";

const Clothes = ({ show, close }: ClothesModal, { match }: any) => {
  const [clothes, setClothes] = useState<ClothesDetail>();
  const postId = match?.params?.id;

  const requesteCloset = (postId: number) => {
    requestWithOutAccessToken({
      method: "get",
      url: `/post/closet/${postId}`,
      headers: {},
      data: {},
    })
      .then((res) => {
        setClothes(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    requesteCloset(postId);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <S.ClothesDetailContainer>
      <S.ClothesDetailBackground onClick={close} />
      <S.ClothesDetail>
        <div>
          <h1>의류 정보</h1>
          <hr />
          <div>
            <S.Sortation>
              <h6>상의</h6>
              <p>{clothes?.topInfo}</p>
              <S.ClothesMore> 더 알아보기 ＞</S.ClothesMore>
            </S.Sortation>
            <hr />
            <S.Sortation>
              <h6>하의</h6>
              <p>{clothes?.bottomInfo}</p>
              <S.ClothesMore> 더 알아보기 ＞</S.ClothesMore>
            </S.Sortation>
            <hr />
            <S.Sortation>
              <h6>신발</h6>
              <p>{clothes?.shoesInfo}</p>
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
