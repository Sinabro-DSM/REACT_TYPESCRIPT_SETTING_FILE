import React from "react";
import * as S from "./styles";
import headerProps from "../../../interfaces/header";
import { Logo, Search } from "../../../assets/index";

const Header = ({ imgSrc }: headerProps) => {
  return (
    <S.Header>
      <div>
        <S.Logo src={Logo}></S.Logo>
        <S.SearchBar>
          <div>
            <Search />
          </div>
          <input placeholder={"무엇을 찾으시나요?"} />
        </S.SearchBar>
      </div>
      <S.Profile src={imgSrc}></S.Profile>
    </S.Header>
  );
};

export default Header;
