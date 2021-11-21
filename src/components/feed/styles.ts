import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { WIDTH, COLOR } from "../../styles";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListContainer = styled.div`
  width: ${WIDTH.main};
  position: relative;
`;

export const TopBar = styled.div`
  width: 100%;
  background-color: ${COLOR.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 2;
`;

export const TopBarContainer = styled.div`
  width: ${WIDTH.main};
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  & ul {
    display: flex;
    gap: 30px;
    font-size: 18px;
    font-weight: bold;
    .active {
      border-bottom: 3px solid black;
    }
  }
  & button {
    border: 1px solid ${COLOR.subColor};
    color: ${COLOR.subColor};
    padding: 8px 20px;
    background: none;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
  }
`;

export const Li = styled(NavLink)`
  appearance: none;
  color: black;
  padding-bottom: 11px;
`;
