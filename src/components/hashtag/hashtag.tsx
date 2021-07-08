import React from "react";
import Globalstyle from "../../styles/globalStyle";
import * as S from "./styles";
import hashtagProps from "../../interfaces/hashtag";

const Hashtag = ({ contents }: hashtagProps) => {
    return (
        <S.Wrapper>
            <Globalstyle />
            <S.Hashtag># {contents}</S.Hashtag>
        </S.Wrapper>
    )
}

export default Hashtag;