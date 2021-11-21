import React, { useEffect } from "react";
import * as S from "./styles";
import {BaseProfile} from "../../../assets/index";
import { useHistory } from "react-router";
import {requestWithAccessToken} from "../../../utils/axios";

interface UserProps {
  name: string;
  email: string;
  postCnt: number;
}

const Profile = ({name, email, postCnt} : UserProps) => {  
  const history = useHistory();

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    requestWithAccessToken({
      method: "GET",
      url: `/user/${userId}`,
      headers: {},
      data: {}
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Information>
        <S.Left>
          <S.ProfileImg src={BaseProfile}></S.ProfileImg>
          <div className="InfoWrapper">
            <S.UserInfo>
              <div>
                <h1>{name}</h1>
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
