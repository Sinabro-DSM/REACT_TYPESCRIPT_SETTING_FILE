import styled from "styled-components";
import { WIDTH, COLOR } from "../../../styles/index";

export const HeaderBox = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: white;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  width: ${WIDTH.main};
  height: 85px;
  padding: 0 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div {
    display: flex;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 90px;
  cursor: pointer;
`;

export const SearchBar = styled.div`
  width: 330px;
  border: 1px solid ${COLOR.subColor};
  border-radius: 50px;
  padding: 13px;
  & input {
    border: none;
    height: 17px;
    color: ${COLOR.subColor};
    font-size: 15px;
    flex: 1;
    margin-left: 10px;
    &::placeholder {
      color: ${COLOR.subColor};
      font-family: 나눔스퀘어;
    }
    & div {
      padding: 0 15px;
    }
  }
`;

export const Profile = styled.img`
  width: 55px;
  height: 55px;
  border: 6px solid #f2f2f2;
  border-radius: 50px;
  cursor: pointer;
`;
