import React from "react";
import * as S from "../signin/styles";
import { LogoWithout } from "../../../assets/index";
import InputBox from "../input/index";
import Button from "../button/index";

const Signup = () => {
    return (
        <S.Wrapper>
            <S.Logo src={LogoWithout}></S.Logo>
            <InputBox title="Email" placeholder="이메일을 입력해주세요." />
            <InputBox title="Nickname" placeholder="사용할 닉네임을 입력하세요." />
            <InputBox title="Password" placeholder=" 사용할 비밀번호를 입력하세요." />
            <InputBox title="Password check" placeholder="비밀번호를 확인해 주세요." />
            <Button title="SIGN UP" />
        </S.Wrapper>
    )
}

export default Signup;