import styled, { css } from "styled-components"

const CarouselContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`

const CarouselPreview = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  visibility: hidden;
  width: 95%;

  @media (max-width: 450px) {
    visibility: visible;
  }
`

const Image = styled.img<{ current: boolean }>`
  height: 87px;
  border-radius: 3px;

  ${props =>
    !props.current &&
    css`
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    `}
`

export { CarouselContainer, CarouselPreview, Image }
