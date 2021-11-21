import React from "react";
import * as S from "./styles";
import { Logo, Search } from "../../../assets/index";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();
  return (
    <S.Header>
      <div>
        <S.Logo src={Logo} onClick={() => history.push("/")} />
        <S.SearchBar>
          <div>
            <Search />
          </div>
          <input placeholder={"무엇을 찾으시나요?"} />
        </S.SearchBar>
      </div>
      <S.Profile
        src="https://img.hankyung.com/photo/202101/BF.25162383.1.jpg"
        onClick={() => history.push("/profile")}
      />
    </S.Header>
  );
};

export default Header;
