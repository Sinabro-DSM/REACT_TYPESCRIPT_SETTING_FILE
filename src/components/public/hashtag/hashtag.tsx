import React from "react";
import * as S from "./styles";
import hashtagProps from "../../../interfaces/hashtag";

const Hashtag = ({ contents }: hashtagProps) => {
    return (
        <S.Hashtag># {contents}</S.Hashtag>
    )
}

export default Hashtag;