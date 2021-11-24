import React, { useEffect, useState } from "react";
import * as S from "./styles";
import {BaseProfile} from "../../../assets/index";
import { useHistory } from "react-router";
import {requestWithAccessToken, requestWithOutAccessToken} from "../../../utils/axios";
import FeedCardList from "../../public/feedCardList";

interface UserProps {
  nickname: string;
  email: string;
  postCnt: number;
  postId: [];
}

const Profile = () => {  
  const history = useHistory();

  const [arr, setArr] = useState([]);

  const userId = localStorage.getItem("userId");

  const [data, setData] = useState<UserProps>({
    nickname: "",
    email: "",
    postCnt: 0,
    postId: []
  })
  const {nickname, email, postCnt, postId} = data;

  useEffect(() => {
    requestWithAccessToken({
      method: "GET",
      url: `/user/${userId}`,
      headers: {},
      data: {}
    }).then((res) => {
      const {nickname, email, postCnt, postId } = res;
      console.log(res); 
      setData({
        nickname,
        email,
        postCnt, 
        postId
      });
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  postId.map((v: any, index: number) => {
    requestWithOutAccessToken({
      method: "GET",
      url: `/post/${postId}`,
      headers: {},
      data: {}
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  });
  
  return (
    <S.Wrapper>
      <S.Information>
        <S.Left>
          <S.ProfileImg src={BaseProfile}></S.ProfileImg>
          <div className="InfoWrapper">
            <S.UserInfo>
              <div>
                <h1>{nickname}</h1>
                <button />
              </div>
              <div>
                <p>{email}</p>
              </div>
            </S.UserInfo>
            <S.Label>
              {/* <ul>
                <li>팔로워</li>
                <li>1</li>
              </ul>
              <hr />
              <ul>
                <li>팔로잉</li>
                <li>12</li>
              </ul>
              <hr /> */}
              <ul>
                <li>게시물</li>
                <li>{postCnt}</li>
              </ul>
            </S.Label>
          </div>
        </S.Left>
        <S.ListContainer>
          <FeedCardList newArr={arr}></FeedCardList>
        </S.ListContainer>
        <S.Right>
          <button onClick={() => history.push("/mycloth")}>
            나만의 옷장 {">"}
          </button>
        </S.Right>
      </S.Information>
    </S.Wrapper> 
  );
};

export default Profile;
