import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { LogoWithout } from "../../../assets/index";
import InputBox from "../input/index";
import Button from "../button/index";

interface SigninProps {
    id: string,
    password: string
}

const Signin = () => {

    // const [data, setData] = useState<SigninProps[]>([]);

    // const { id, password }: SigninProps = {};


    const [data, setData] = useState<SigninProps>({
        id: "",
        password: ""
    });

    const { id, password } = data;

    useEffect(() => {
        console.log(data);
    });

    const idChange = (e: any) => {
        setData({
            ...data,
            id: e.target.value
        })
    };

    const pwChange = (e: any) => {
        setData({
            ...data,
            password: e.target.value
        });
        console.log(data);
    };



    return (
        <S.Wrapper>
            <S.Logo src={LogoWithout}></S.Logo>
            <InputBox onChange={idChange} title="Email" placeholder="이메일을 입력해주세요." />
            <InputBox onChange={pwChange} title="Password" placeholder="비밀번호를 입력해 주세요." />
            <Button title="SIGN IN" />
        </S.Wrapper>
    )
}

export default Signin;