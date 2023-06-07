import styled from "styled-components"

const ListContainer = styled.div`
  .item {
    font-family: "Regular";
    padding: 8px 0;
    cursor: pointer;

    p {
      margin: 0;

      display: flex;
      align-items: center;
      gap: 8px;
    }

    @media (max-width: 500px) {
      padding: 4px 0;
    }
  }
`

const GeneralContainer = styled.div`
  display: flex;
  gap: 60px;
  z-index: 10;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0px;
  }
`

export { ListContainer, GeneralContainer }
