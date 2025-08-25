import styled from "styled-components"

const CardsContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 100px;

  @media (max-width: 450px) {
    justify-content: center;
  }
`

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export { CardsContainer, SectionContainer }
