import styled from "styled-components";

export const DiaryTitleStyle = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  position: relative;
  justify-content: center;
  /* right: 20px; */

  input {
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
  justify-content: center;

  .main-container {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0;
  }

  .chevron-icon {
    margin: 0 20px 0 20px;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .plus-icon {
    margin: 0 20px 0 20px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .upload-btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 600px;
    height: 450px;
  }

  .upladLabel {
    cursor: pointer;
  }

  input[type="file"] {
    visibility: hidden;
  }

  .upload-image {
    max-width: 600px;
    max-height: 450px;
  }

  .image-hidden {
    display: none;
  }

  .click-hidden {
    display: none;
  }
`;

export const DiaryContentStyle = styled.div`
  max-width: 900px;

  div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 10px 0;
    align-items: center;
    text-align: center;
  }

  .content-container {
    justify-content: center;
  }

  textarea {
    width: 600px;
    min-height: 100px;
    font-size: 16px;
    resize: none;
    background-color: transparent;
    border: 1px solid transparent;
  }

  input[type="date"] {
    border: 1px solid transparent;
    font-size: 16px;
  }
`;
