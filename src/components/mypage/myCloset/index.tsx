import React, { useEffect, useState } from "react";
import { requestWithAccessToken } from "../../../utils/axios";
import FeedCardList from "../../public/feedCardList";
import * as S from "./styles";

const MyCloset = () => {
  const userId = localStorage.getItem("userId");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    requestWithAccessToken({
      method: "GET",
      url: `/closet/${userId}`,
      headers: {},
      data:{}
    }).then((res) => {
      console.log(res);
      setArr(res);
    }).catch((err) => {
      console.log(err);
    });
  },[]);


  return (
    <S.Wrapper>
      <S.TopContainer>
        <S.Explain>좋아요 누른 게시물이 표시됩니다.</S.Explain>
        <S.BackBtn>돌아가기</S.BackBtn>
      </S.TopContainer>
      <S.ListContainer>
        <FeedCardList newArr={arr} />
      </S.ListContainer>
    </S.Wrapper>
  );
};

export default MyCloset;
