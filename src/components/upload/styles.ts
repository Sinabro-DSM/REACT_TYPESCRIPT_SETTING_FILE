import styled from "styled-components";
import { WIDTH } from "../../styles";
import { COLOR } from "./../../styles/index";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: ${WIDTH.sub};
  display: flex;
  flex-direction: column;
  & label {
    font-size: 20px;
    color: black;
    & span {
      color: #7e7e7e;
      font-size: 14px;
      margin-left: 7px;
    }
  }
`;

export const InpBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  & input {
    border: none;
    width: 100%;
    border-bottom: 1px solid #bfbaba;
    padding-bottom: 14px;
    margin-top: 38px;
    font-size: 14px;
    color: gray;
    background: none;
    &::placeholder {
      color: #a8a8a8;
    }
  }
  & textarea {
    outline: none;
    margin-top: 30px;
    width: 100%;
    height: 160px;
    box-sizing: border-box;
    font-size: 15px;
    color: gray;
    padding: 24px;
    background-color: white;
    resize: none;
    border: 1px solid #bfbaba;
    border-radius: 5px;
    font-family: 나눔스퀘어;
    &::placeholder {
      color: #a8a8a8;
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const AddBtn = styled.button`
  width: 32px;
  height: 32px;
  border: 1px solid ${COLOR.subColor};
  color: ${COLOR.subColor};
  font-size: 25px;
  margin-left: 10px;
  border-radius: 80%;
  background: none;
  &::after {
    content: "+";
  }
`;

export const Description = styled.p`
  margin-top: 25px;
  font-size: 15px;
  color: #a8a8a8;
`;

export const PreviewBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 20px;
  justify-items: center;
  margin-top: 30px;
  & img {
    width: 100%;
    height: 110px;
    object-fit: cover;
    cursor: pointer;
    box-sizing: border-box;
  }
`;

export const HashtagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 100%;
  margin-top: 24px;
  & button {
    margin-top: 5px;
  }
`;

export const SubBtn = styled.button`
  width: 100%;
  padding: 10px 0;
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-top: 70px;
  margin-bottom: 130px;
  background-color: ${COLOR.mainColor};
  border: none;
  border-radius: 5px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 85%;
  & svg {
    position: absolute;
    right: 0;
    margin: 5px;
  }
`;
