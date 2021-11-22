import styled from "styled-components";
import { COLOR } from "../../../styles/index";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Information = styled.div`
  width: 1200px;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  .InfoWrapper {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 50px;
  }
`;

export const Right = styled.div`
  & button {
    width: 130px;
    height: 40px;
    font-size: 16px;
    color: #fff;
    background-color: ${COLOR.mainColor};
    border: none;
    border-radius: 5px;
  }
`;

export const ProfileImg = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  & div:nth-of-type(1) {
    display: flex;
  }
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 30px;
    font-weight: bold;
  }

  & button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid ${COLOR.subColor};
    background: none;
    margin-left: 10px;
    &::after {
      content: "+";
      color: ${COLOR.subColor};
      font-size: 20px;
    }
  }

  & p {
    margin-top: 15px;
    color: #959595;
    font-weight: bold;
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  & hr {
    margin-top: 0;
    margin-bottom: 0;
  }
  & ul {
    text-align: center;
    /* border-right: 1px solid;
        &:nth-of-type(3){
            border: none;
        } */
  }
  & li {
    font-size: 20px;
    font-weight: 550;
    &:nth-of-type(2) {
      margin-top: 20px;
    }
  }
`;
