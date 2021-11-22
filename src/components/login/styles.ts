import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & input{
    font-family: "Sans-serif";
    ::placeholder{
      font-family: "Sans-serif";
    }
  }
`;

export const Logo = styled.img`
  width: 150px;
`;

export const GoSign = styled.p`
  text-decoration: underline;
  color: #a1a1a1;
  font-size: 14px;
  margin-top: 40px;
  cursor: pointer;
`;

export const GoButton = styled.button`
   width: 420px;
    height: 45px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: #000;
    border: none;
    color: #fff;
    margin-top: 30px;
    text-align: center;
`;