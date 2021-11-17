import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  display: flex;
  position: relative;
  justify-content: center;
`;

interface ColorLevelWrapProps {
  deg: number;
}

export const ColorLevelWrap = styled.div<ColorLevelWrapProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  transform: ${({ deg }) => `rotate(${deg * 20}deg)`} translateY(-250px);
  position: absolute;
  margin-top: 250px;
`;

interface ColorSquareProps {
  background: string;
}

export const ColorSquare = styled.button<ColorSquareProps>`
  width: 33px;
  height: 33px;
  border-radius: 5px;
  background-color: ${({ background }) => background};
  border: none;
  cursor: pointer;
`;
