import React, { useEffect, useState } from "react";
import * as S from "../signin/styles";
import Logo from "../../../assets/logo.png";
import InputBox from "../input/index";
import {requestWithAccessToken, requestWithOutAccessToken} from "../../../utils/axios";
import Button from "../button/index";
import { useHistory } from "react-router";

interface SignupProps {
  id: string;
  nickname: string;
  password: string;
}

interface CheckProps {
  nameConfirm: boolean;
  passwordConfirm: boolean;
}

const Signup = () => {
  const [data, setData] = useState<SignupProps>({
    id: "",
    password: "",
    nickname: "",
  });

  const [check, setCheck] = useState<CheckProps>({
    nameConfirm: false,
    passwordConfirm: false,
  });

  const history = useHistory();

  const { id, password, nickname} = data;

  const {nameConfirm, passwordConfirm} = check;

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

  const emailCheck = () => {
    if(id.indexOf("@") == -1){
      return false;
    }
    else{
      return true;
    }
  }

  const nameCheck = () => {
    if(nickname.length < 2 || nickname.length > 8) {
      alert("이름은 두글자 이상 여덟글자 이하입니다.");
      return false;
    }
    else{
      return true;
    }
  }

  const passwordCheck = () => {
    if(password.length < 8) {
      alert("비밀번호는 여덟글자 이상입니다.");
      return false;
    }
    else{
      return true;
    }
  } 

  const signupBtn = async (e: any) => {
    nameCheck();
    passwordCheck();

    await requestWithOutAccessToken({
        method: "post",
        url: "/auth/signup",
        headers: {},
        data: {
            email: id,
            password,
            nickname
        }
    }).then((res) => {
        console.log(res)
        alert("회원가입 완료. 로그인 페이지로 이동합니다.");
        history.push("/signin");
    }).catch((err) => {
        console.log(err);
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
        onChange={nameChange}
        title="Nickname"
        placeholder="사용할 닉네임을 입력하세요. (2글자 ~ 8글자)"
      />
      <InputBox
        onChange={pwChange}
        title="Password"
        placeholder=" 사용할 비밀번호를 입력하세요. (8글자 이상)"
        type="password"
      />
      <S.GoButton onClick={signupBtn}>SIGN UP</S.GoButton>
    </S.Wrapper>
  );
};

export default Signup;
