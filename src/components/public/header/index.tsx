import React from "react";
import * as S from "./styles";
import headerProps from "../../../interfaces/header";
import {ReactComponent as Logo} from "../../../assets/logo.svg";
import {ReactComponent as Search} from "../../../assets/search.svg";

const Header = ({ imgSrc }: headerProps) => {
    return(
        <S.Header>
            <div>
            <Logo style={{padding :"0 21px 0 0"}}/>
            <S.SearchBar>
                <Search style={{padding :"0 15px"}}/>
                <input placeholder={"무엇을 찾으시나요?"} />
            </S.SearchBar>
            </div>
            <S.Profile src={imgSrc}></S.Profile>
        </S.Header>
    )
}

export default Header;