import styled from "styled-components";

/* wrapper style */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* div in form style */
  form div {
    margin: 10px 0 10px 0;
    display: grid;
    grid-template-columns: 180px 200px;
    align-items: center;
    text-align: center;
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
    padding: 8px 5px 8px 5px;

    border: none;
    border-bottom: 1px solid #000;
  }

  input:focus {
    border: 2px solid #000;
    border-radius: 5px;
  }

  /* button style */
  button {
    padding: 3px 5px 3px 5px;
    background-color: #e8e9ec;
    border: none;
    border-radius: 3px;
  }

  button:hover {
    transition: all 0.5s;
    background-color: #ababab;
  }
`;
