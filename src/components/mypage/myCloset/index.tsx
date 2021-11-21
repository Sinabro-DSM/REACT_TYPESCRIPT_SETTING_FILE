import React, { useEffect } from "react";
import { requestWithAccessToken } from "../../../utils/axios";
import * as S from "./styles";

const MyCloset = () => {

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    requestWithAccessToken({
      method: "GET",
      url: `/closet/${userId}`,
      headers: {},
      data:{}
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    });
  },[]);

  return (
    <S.Wrapper>
      <div>
        <p>좋아요 누른 게시물이 표시됩니다.</p>
        <button>돌아가기</button>
      </div>
      
    </S.Wrapper>
  );
};

export default MyCloset;
