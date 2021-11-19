import React, { useEffect, useState } from "react";
import * as S from "../styles";
import Logo from "../../../assets/logo.png";
import InputBox from "../input/index";
import Button from "../button/index";
import { useHistory } from "react-router";
import {requestWithAccessToken, requestWithOutAccessToken} from "../../../utils/axios";

interface SigninProps {
  id: string;
  password: string;
}

const Signin = () => {
  // const [data, setData] = useState<SigninProps[]>([]);

  // const { id, password }: SigninProps = {};

  const history = useHistory();

  const [data, setData] = useState<SigninProps>({
    id: "",
    password: "",
  });

  const { id, password } = data;

  useEffect(() => {
    console.log(data);
  });

  const idChange = (e: any) => {
    setData({
      ...data,
      id: e.target.value,
    });
  };

  const pwChange = (e: any) => {
    setData({
      ...data,
      password: e.target.value,
    });
    console.log(data);
  };

  const signinBtn = async(e: any) => {
    await requestWithOutAccessToken({
      method: "POST",
      url: "/auth/login",
      headers: {},
      data: {
        "email": id,
        "password": password
      }
    }).then((res) => {
      console.log(res.data);
      alert("로그인 성공 메인페이지로 이동합니다.");
      history.push("/");
    }).catch((err) => {
      console.log(err);
      alert("아이디나 비밀번호를 잘못 입력하셨습니다.");
    })
  }

  return (
    <S.Wrapper>
      <S.Logo src={Logo} />
      <InputBox
        onChange={idChange}
        title="Email"
        placeholder="이메일을 입력해주세요."
      />
      <InputBox
        onChange={pwChange}
        title="Password"
        placeholder="비밀번호를 입력해 주세요."
        type="password"
      />
      <S.GoButton onClick={signinBtn}>SIGN IN</S.GoButton>
      <S.GoSign onClick={() => history.push("/signup")}>
        계정이 없으신가요?
      </S.GoSign>
    </S.Wrapper>
  );
};

export default Signin;
