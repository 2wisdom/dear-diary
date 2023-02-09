import styled, { createGlobalStyle } from "styled-components";

/* Global style */
export const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif;
       color: #575757;
   }
   #root{
       margin: 0 auto;
   }
   `;

/* Wrapper style */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

/* ContentWrapper style */
export const ContentWrapper = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  flex: 1;
`;

/* Navbar Style */
export const Navigaiter = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin: 20px 10px 0 10px;
  text-align: center;
  align-items: center;

  a {
    text-decoration: none;
    margin: 0 10px 0 10px;
    cursor: pointer;
  }
`;

/* Footer Style */
export const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 65px 50px 0 50px;
  margin-top: 50px;
  background-color: #f2f2f2;
  height: 150px;
  bottom: 0;
`;
