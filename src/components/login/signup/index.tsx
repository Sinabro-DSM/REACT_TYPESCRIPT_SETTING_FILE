import React, { useState } from "react";
import * as S from "../signin/styles";
import Logo from "../../../assets/logo.png";
import InputBox from "../input/index";
import Button from "../button/index";

interface SignupProps {
  id: string;
  nickname: string;
  password: string;
}

interface CheckProps {
  emailCk: boolean;
  passwordCk: boolean;
}

const Signup = () => {
  const [data, setData] = useState<SignupProps>({
    id: "",
    password: "",
    nickname: "",
  });

  const { id, password, nickname } = data;

  const [check, setCheck] = useState<CheckProps>({
    emailCk: false,
    passwordCk: false,
  });

  const { emailCk, passwordCk } = check;

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
  };

  const nameChange = (e: any) => {
    setData({
      ...data,
      nickname: e.target.value,
    });
  };

  return (
    <S.Wrapper>
      <S.Logo src={Logo} />
      <InputBox
        onChange={idChange}
        title="Email"
        placeholder="이메일을 입력해주세요."
      />
      <InputBox
        onChange={nameChange}
        title="Nickname"
        placeholder="사용할 닉네임을 입력하세요."
      />
      <InputBox
        onChange={pwChange}
        title="Password"
        placeholder=" 사용할 비밀번호를 입력하세요."
      />
      <InputBox
        title="Password check"
        placeholder="비밀번호를 확인해 주세요."
      />
      <Button title="SIGN UP" />
    </S.Wrapper>
  );
};

export default Signup;
