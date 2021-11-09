import React from "react";
import * as S from "./styles";
import { ProfileImg } from "../../../../assets/index";

const Profile = () => {
    return (
        <S.Wrapper>
            <S.Information>
                <S.Left>
                    <S.ProfileImg src={ProfileImg}></S.ProfileImg>
                    <div className="InfoWrapper">
                        <S.UserInfo>
                            <div>
                                <h1>윤준식</h1>
                                <button />
                            </div>
                            <div>
                                <p>asd123asd123@naver.com</p>
                            </div>
                        </S.UserInfo>
                        <S.Label>
                            <ul>
                                <li>팔로워</li>
                                <li>1</li>
                            </ul>
                            <hr />
                            <ul>
                                <li>팔로잉</li>
                                <li>12</li>
                            </ul>
                            <hr />
                            <ul>
                                <li>게시물</li>
                                <li>4</li>
                            </ul>
                        </S.Label>
                    </div>
                </S.Left>

                <S.Right>
                    <button>나만의 옷장 {'>'}</button>
                </S.Right>
            </S.Information>
        </S.Wrapper>

    )
}

export default Profile;