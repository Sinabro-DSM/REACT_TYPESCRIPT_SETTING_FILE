import styled from "styled-components";
import { WIDTH, COLOR } from "../../../styles/index";

export const Header = styled.div`
    width: ${WIDTH.main};
    height: 108px;
    padding: 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & div {
        display: flex;
        align-items: center;
    }
`
export const Logo = styled.img`
    padding-right: 21px;
`
export const SearchBar = styled.div`
    width: 330px;
    border: 1px solid ${COLOR.subColor};
    border-radius: 50px;
    padding-left: 21px;
    padding: 13px;
    & input{
        border: none;
        height: 17px;
        color: ${COLOR.subColor};
        flex: 1;

        ::placeholder{
            color: ${COLOR.subColor};
            font-family: 나눔스퀘어;
        }
    & div{
        padding: 0 15px;
    }
    };

`
export const Profile = styled.img`
    width: 55px;
    height: 55px;
    border: 6px solid #F2F2F2;
    border-radius: 50px;
`