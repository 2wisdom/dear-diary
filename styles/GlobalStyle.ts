import styled, { createGlobalStyle } from "styled-components";

/* Global style */
export const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif;
       color: #000;
   }
   #root{
       margin: 0 auto;
   }
   `;

export const Navigaiter = styled.div`
  margin: 0 auto;
  text-align: center;
  align-items: center;
  max-width: 95%;

  ul {
    margin: 10px 20px 0 20px;
    display: flex;
    justify-content: right;
  }

  ul li {
    list-style: none;
    margin: 0 0 0 10px;
  }

  a {
    text-decoration: none;
  }
`;
