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

   .error-message {
    color: #ED553B;
   }
   `;

/* Wrapper style */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

/* ContentWrapper style */
export const ContentWrapper = styled.div`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
  flex: 1;
`;

/* Navbar Style */
export const Navigaiter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 96vw;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 55px;
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
  padding: 65px 50px 65px 50px;
  background-color: #f2f2f2;
  height: 150px;
  bottom: 0;
  width: 100vw;
`;

/* Button Style */
export const ButtonStyle = styled.button`
  text-align: center;
  align-items: center;
  background-color: #b2d1b6;
  border: none;
  border-radius: 10px;
  padding: 3px 15px 3px 15px;
  font-size: 16px;
  cursor: pointer;
`;
