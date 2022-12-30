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

/* Wrapper style */
export const Wrapper = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
`;

/* Navbar Style */
export const Navigaiter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 50px;
  text-align: center;
  align-items: center;
  max-width: 95%;

  a {
    text-decoration: none;
    margin: 0 0 0 10px;
  }
`;
