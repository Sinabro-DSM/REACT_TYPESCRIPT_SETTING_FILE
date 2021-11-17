import styled from "styled-components";
import { COLOR, WIDTH } from "./../../styles/index";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: ${WIDTH.main};
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  & .line {
    width: 140px;
    height: 3px;
    background-color: ${COLOR.subColor};
  }
  & .title {
    margin-top: 25px;
    color: ${COLOR.blackColor};
    font-size: 50px;
    font-weight: 800;
    & strong {
      color: ${COLOR.subColor};
    }
  }
  & .sub-title {
    margin-top: 46px;
    font-size: 30px;
    color: ${COLOR.blackColor};
    font-weight: bold;
  }
  & .description {
    margin-top: 70px;
    font-size: 23px;
    color: ${COLOR.subTextColor};
    line-height: 40px;
  }
`;
