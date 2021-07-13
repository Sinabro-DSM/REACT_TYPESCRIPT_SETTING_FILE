import styled from "styled-components";
import { COLOR, WIDTH } from "../../../styles/index";

export const Wrapper = styled.div`
    & div{
        width: ${WIDTH.main};
        display: flex;
        justify-content: space-between;

        & p{
            font-weight: bold;
        }

        & button{
            width: 80px;
            height: 30px;
            background: none;
            border: 1px solid ${COLOR.subColor};
            color: ${COLOR.subColor};
            font-weight: bold;
            border-radius: 5px;
        }
    }
`

