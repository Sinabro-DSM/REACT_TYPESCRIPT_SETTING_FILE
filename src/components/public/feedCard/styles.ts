import styled from "styled-components";
import { COLOR } from "./../../../styles/index";

export const Wrapper = styled.div`
  width: 370px;
  padding: 20px 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 20px rgb(50, 50, 50, 0.1);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 10px #fff1bb;
  }
`;

const PADDING_CONTAINER = styled.div`
  padding: 0 30px;
`;

export const ProfileBox = styled(PADDING_CONTAINER)`
  display: flex;
  align-items: center;
  & img {
    width: 33px;
    height: 33px;
    border-radius: 80%;
    cursor: pointer;
  }
  & span {
    margin-left: 10px;
    font-size: 15px;
    color: ${COLOR.blackColor};
  }
`;

export const RepImg = styled.img`
  width: 100%;
  object-fit: contain;
  margin-top: 20px;
`;

export const InforBox = styled(PADDING_CONTAINER)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  & time {
    color: ${COLOR.subTextColor};
    font-size: 13px;
  }
  & span {
    color: ${COLOR.blackColor};
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }
`;

export const TagBox = styled.div`
  display: flex;
  margin-top: 14px;
`;

export const GoodBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
  align-items: center;
  & span {
    color: #9f9f9f;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    margin-left: 4px;
  }
`;
