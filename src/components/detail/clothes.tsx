import React, { RefObject, useEffect, useRef, useState } from "react";
import { ClothesDetail, ClothesModal } from "../../interfaces/detail";
import * as S from "./styles";
import { requestWithOutAccessToken } from "../../utils/axios";

const Clothes = ({ show, close }: ClothesModal, { match }: any) => {
  const [clothes, setClothes] = useState<ClothesDetail>();
  const postId = match?.params?.id;
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const shoesRef = useRef<HTMLDivElement>(null);

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

  const moveToSearch = (clothes: any) => {
    window.open(
      `https://www.google.com/search?q=${clothes.current?.innerHTML}`
    );
  };

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
              <p ref={topRef}>{clothes?.topInfo}</p>
              <S.ClothesMore onClick={(e) => moveToSearch(topRef)}>
                더 알아보기 ＞
              </S.ClothesMore>
            </S.Sortation>
            <hr />
            <S.Sortation>
              <h6>하의</h6>
              <p ref={bottomRef}>{clothes?.bottomInfo}</p>
              <S.ClothesMore onClick={(e) => moveToSearch(bottomRef)}>
                더 알아보기 ＞
              </S.ClothesMore>
            </S.Sortation>
            <hr />
            <S.Sortation>
              <h6>신발</h6>
              <p ref={shoesRef}>{clothes?.shoesInfo}</p>
              <S.ClothesMore onClick={(e) => moveToSearch(shoesRef)}>
                더 알아보기 ＞
              </S.ClothesMore>
            </S.Sortation>
            <S.Check onClick={close}>확인</S.Check>
          </div>
        </div>
      </S.ClothesDetail>
    </S.ClothesDetailContainer>
  );
};

export default Clothes;
