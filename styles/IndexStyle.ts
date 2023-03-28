import styled, { keyframes } from "styled-components";

/* Drawing Style */
const bookDrawingLength = 6500;
const pathAni = keyframes`
0% {stroke-dashoffset: ${bookDrawingLength}}
100% {stroke-dashoffset: 0}
`;

export const IndexStyle = styled.div`
  display: flex;
  margin-top: 10rem;

  @media screen and (max-width: 480px) {
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
    width: 825px;
    height: 404px;

    @media screen and (max-width: 480px) {
      width: 412.5px;
      height: 202px;
      margin: 30px 0 50px 0;
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
    margin-top: 60px;

    @media screen and (max-width: 480px) {
      margin-top: 0px;
      width: 300px;
    }
  }
`;
