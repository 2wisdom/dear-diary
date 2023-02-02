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

  /* svg path */
  path {
    stroke: #78a67e;
    stroke-width: 3;
    fill: none;
    stroke-dasharray: ${bookDrawingLength};
    animation: ${pathAni} 5s ease-in;
  }

  .title-image {
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
`;
