import styled from "styled-components";

export const DiaryStyle = styled.div`
  @media screen and (max-width: 480px) {
    width: 400px;
  }

  .diary-title-container {
    display: flex;
    text-align: center;
    align-items: center;
    position: relative;
    justify-content: center;
    /* right: 20px; */
  }

  .diary-title-input {
    background-color: transparent;
    width: 625px;
    border: 3px solid transparent;
    border-bottom: 3px solid #78a67e;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    padding: 10px 20px 10px 20px;
    margin: 10px;

    @media screen and (max-width: 480px) {
      max-width: 400px;
    }
  }

  /* .diary-main-container {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  } */

  .main-container {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    /* margin: 0; */

    @media screen and (max-width: 480px) {
      /* width: 400px; */
    }
  }

  .chevron-icon {
    margin: 0 0 0 5px;
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

    @media screen and (max-width: 480px) {
      width: 85%;
    }
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

    @media screen and (max-width: 480px) {
      /* max-width: 400px; */
      width: 100%;
    }
  }

  .image-hidden {
    display: none;
  }

  .click-hidden {
    display: none;
  }

  .diary-content-wrapper {
    margin: 0 20px 0 20px;
  }

  .diary-content-container {
    max-width: 900px;
    display: flex;
    justify-content: space-between;
  }

  .diary-content-container div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px 10px 0px;
    align-items: center;
    text-align: center;
  }

  .button-container {
    display: flex;
    justify-content: right;
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

    @media screen and (max-width: 480px) {
      width: 400px;
    }
  }

  input[type="date"] {
    border: 1px solid transparent;
    font-size: 16px;
  }
`;

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

    @media screen and (max-width: 480px) {
      max-width: 400px;
    }
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
    justify-content: center;
    margin: 0;

    @media screen and (max-width: 480%) {
      width: 80%;
    }
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

    @media screen and (max-width: 480px) {
      width: 380px;
    }
  }

  .upladLabel {
    cursor: pointer;
  }

  input[type="file"] {
    visibility: hidden;
  }

  .upload-image {
    max-width: 600px;
    /* width: 90%; */
    max-height: 450px;

    @media screen and (max-width: 480px) {
      /* max-width: 400px; */
      /* width: 100%; */
    }
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
