import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;

interface ColorLevelWrapProps {
  deg: number;
}

export const ColorLevelWrap = styled.div<ColorLevelWrapProps>`
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  transform: ${({ deg }) => `rotate(${deg * 20}deg)`};
  position: absolute;
`;

interface ColorSquareProps {
  background: string;
}

export const ColorSquare = styled.button<ColorSquareProps>`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background-color: ${({ background }) => background};
  border: none;
`;
