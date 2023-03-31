import styled, { keyframes } from "styled-components";

/* Drawing Style */
const bookDrawingLength = 6500;
const pathAni = keyframes`
0% {stroke-dashoffset: ${bookDrawingLength}}
100% {stroke-dashoffset: 0}
`;

export const IndexStyle = styled.div`
  display: flex;
  max-width: 1200px;

  @media screen and (max-width: 1018px) {
    flex-direction: column;
    margin-top: 0px;
  }

  /* svg path */
  path {
    stroke: #78a67e;
    stroke-width: 3;
    fill: none;
    stroke-dasharray: ${bookDrawingLength};
    animation: ${pathAni} 5s ease-in;
  }

  .index-book-image {
    width: 600px;
    height: auto;

    @media screen and (max-width: 1018px) {
      width: 500px;
      margin: 30px 0 50px 0;
    }

    @media screen and (max-width: 480px) {
      width: 90%;
      height: 202px;
    }
  }

  .title-image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    animation: fadein 4s ease-in;

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .index-title-image {
    @media screen and (max-width: 480px) {
      width: 85%;
    }
  }

  /* .index-book-image,
  .index-title-image {
    @media screen and (max-width: 1018px) {
      width: 90%;
    }
  } */
`;
