import styled from "styled-components";

export const DiaryTitleStyle = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  position: relative;
  left: 20px;
  input,
  h3 {
    background-color: transparent;
    width: 625px;
    border: 3px solid transparent;
    border-bottom: 3px solid #78a67e;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    padding: 10px 20px 10px 20px;
    margin: 10px;
  }
`;

export const DiaryMainStyle = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  div {
    margin: 20px;
  }
`;
