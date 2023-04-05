import styled from "styled-components";

export const UserStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }

  .go-creatediary-container,
  .go-getdiary-container {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 480px) {
      margin-bottom: 50px;
    }
  }

  .username-container,
  .mydiary-container {
    display: flex;
    font-weight: 700;
    font-size: 32px;
    justify-content: center;

    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
    }
  }

  .username {
    color: #407a47;
  }

  .container-margin {
    margin-bottom: 20px;
  }

  .diaries-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .scrollArea {
    height: 200px;
    overflow-x: scroll;
  }
`;
