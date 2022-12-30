import styled from "styled-components";

/* wrapper style */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* div in form style */
  form div {
    margin: 10px 0 10px 0;
    display: grid;
    grid-template-columns: 180px 200px;
  }
  /* text style */
  h1 {
    margin: 0 0 20px 0;
  }
  p {
    color: #f13a37;
    text-align: right;
    min-width: 100px;
  }
  /* input box style */
  input {
    padding: 1px 5px 1px 5px;
  }
`;
