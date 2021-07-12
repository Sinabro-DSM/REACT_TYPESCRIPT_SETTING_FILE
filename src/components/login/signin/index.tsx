import React from "react";
import * as S from "./styles";
import { LogoWithout } from "../../../assets/index";
import InputBox from "../input/index";
import Button from "../button/index";

const Signin = () => {
    return (
        <S.Wrapper>
            <S.Logo src={LogoWithout}></S.Logo>
            <InputBox title="Email" placeholder="이메일을 입력해주세요." />
            <InputBox title="Password" placeholder="비밀번호를 입력해 주세요." />
            <Button title="SIGN IN" />
        </S.Wrapper>
    )
}

export default Signin;