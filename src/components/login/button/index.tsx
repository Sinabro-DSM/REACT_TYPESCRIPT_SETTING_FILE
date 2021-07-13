import React, { FC, HTMLProps } from "react";
import * as S from "./styles";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    title: string;
}

const Button: FC<ButtonProps> = (props) => {
    return (
        <S.Wrapper>{props.title}</S.Wrapper>
    )
}

export default Button;