import styled from "styled-components";
import { WIDTH, COLOR } from "../../styles/index";

export const Wapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: ${WIDTH.sub};
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 268px;
  left: calc(36% - (${WIDTH.sub} / 2));
  /* z-index: 3; */
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px 0;
    & div {
      width: 53px;
      height: 53px;
      border-radius: 50%;
      background-color: ${COLOR.mainColor};
      display: flex;
      justify-content: center;
      align-items: center;
      & textarea {
        opacity: 0;
        resize: none;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -99;
        cursor: default;
      }
    }
    & span {
      color: ${COLOR.subColor};
      font-size: 13px;
      font-weight: bold;
    }
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const PostInformation = styled.div`
  height: 157px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h1 {
    color: ${COLOR.blackColor};
    font-size: 29px;
    font-weight: bold;
  }

  & span {
    color: #c4c4c4;
  }

  & span:nth-child(1) {
    font-size: 17px;
    font-weight: normal;
  }

  & span:nth-child(3) {
    font-size: 13px;
    font-weight: bold;
  }
`;

export const Profile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #707070;
  cursor: pointer;
`;

export const TagBox = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const PhotoContainer = styled.div`
  display: flex;
  width: calc(${WIDTH.sub} + 140px);
  align-items: center;
  position: relative;
  left: -70px;
`;

export const PhotoBox = styled.div`
  width: ${WIDTH.sub};
  object-fit: contain;
  padding: 14px 0;
  display: flex;
  overflow: hidden;
  position: relative;
  & div {
    display: flex;
  }
`;

export const Photo = styled.img`
  width: ${WIDTH.sub};
  min-height: 50px;
`;

export const PrevBtn = styled.button`
  width: 45px;
  height: 45px;
  margin: 0 25px 0 0;
  background-color: #ffffff;
  border: 1px solid #afafaf;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* z-index: 3; */
`;

export const NextBtn = styled(PrevBtn)`
  margin: 0 0 0 25px;
`;

export const PhotoPageCount = styled.span`
  font-size: 13px;
  color: ${COLOR.blackColor};
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const ClothesInformation = styled.button`
  width: 40px;
  height: 24px;
  border: none;
  position: absolute;
  right: 16px;
  bottom: 24px;
  border-radius: 25%;
  background-color: ${COLOR.subColor};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Explanation = styled.div`
  margin: 15px 0 16px;
  & h6 {
    color: #c4c4c4;
    font-size: 17px;
    padding: 5px 0;
  }
  & p {
    width: ${WIDTH.sub};
    margin: 5px 0 14px;
  }
`;

export const CommentsBox = styled.div`
  margin: 10px 0;
  & p {
    font-size: 17px;
    color: ${COLOR.blackColor};
    margin: 8px 0;
  }
  & input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #bfbaba;
    padding: 10px 0;
    margin: 10px 0;
    outline: none;
    ::placeholder {
      color: ${COLOR.subTextColor};
    }
  }
`;
export const Comment = styled.div`
  margin: 14px 0;
  display: flex;
  width: 100%;

  & img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #707070;
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 10px;
    & span {
      font-size: 13px;
      color: #a2a2a2;
    }
    & p {
      font-size: 15px;
      color: ${COLOR.blackColor};
      margin: 10px 0 0;
    }
  }
`;
export const ClothesDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;
export const ClothesDetailBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000000;
  opacity: 0.4;
`;

export const ClothesDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 650px;
  background-color: #ffffff;
  border-radius: 10px;
  z-index: 10;
  & div {
    width: 400px;
    & div {
      width: 386px;
      margin: 0 10px;
    }
  }
  & h1 {
    font-size: 25px;
    font-weight: bold;
    margin: 0 0 22px 8px;
  }
  & hr {
    border: 0;
    height: 1px;
    background-color: #e1e1e1;
  }
`;

export const Sortation = styled.article`
  margin: 35px 0;
  & h6 {
    font-size: 17px;
    font-weight: bold;
  }
  & p {
    font-size: 15px;
    color: #a1a1a1;
    margin: 14px 0;
  }
`;

export const ClothesMore = styled.span`
  font-size: 12px;
  color: #a1a1a1;
  display: flex;
  justify-content: flex-end;
`;

export const Check = styled.button`
  width: 386px;
  height: 52px;
  background-color: ${COLOR.mainColor};
  color: #ffffff;
  font-size: 21px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
`;
