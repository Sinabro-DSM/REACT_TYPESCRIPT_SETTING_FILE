import styled from "styled-components";
import { COLOR, WIDTH } from "../../../styles/index";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const BackBtn = styled.button`
    width: 80px;
    height: 30px;
    background: none;
    border: 1px solid ${COLOR.subColor};
    color: ${COLOR.subColor};
    font-weight: bold;
    border-radius: 5px;
`

export const Explain = styled.p`
    font-weight: bold;
`

export const TopContainer = styled.div`
    width: ${WIDTH.main};
    display: flex;
    justify-content: space-between;
`

export const ListContainer = styled.div`
  width: ${WIDTH.main};
  position: relative;
`
