import styled from "styled-components";
import { WIDTH } from "../../../styles";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: ${WIDTH.main};
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  height: auto;
`;

export const Content = styled.div`
  width: auto;
  margin-top: 40px;
`;
