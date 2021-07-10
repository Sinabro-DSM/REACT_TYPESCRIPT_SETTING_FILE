import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { COLOR } from './index';
// npm i styled-reset
// npm i --save-dev @types/styled-components

const GlobalStyle = createGlobalStyle`
    ${reset};
    html{
        scroll-behavior: smooth;
    }
    body{
        font-family:나눔스퀘어;
        background:${COLOR.backgroundColor};
    }
    *{
        -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;  
    }
    a{
        text-decoration:none;
    }
    button{
        outline:none;
        cursor:pointer;
    }
    input{
        outline:none;
    }
    select{
        outline:none;
    }
    ul{
        list-style:none;
    }
    input:-webkit-autofill { 
        box-shadow: 0 0 0 30px transparent inset ; 
    } 
    img{
        object-fit:cover;
    }
`;

export default GlobalStyle;
