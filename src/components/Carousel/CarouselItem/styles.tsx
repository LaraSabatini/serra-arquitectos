import styled, { css } from "styled-components"
import theme from "@theme/index"

const CarouselItemStyled = styled.a<{ visible: boolean }>`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    !props.visible &&
    css`
      display: none;
    `}

  img {
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    object-position: center;

    border-radius: 5px;
    cursor: pointer;

    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: 0.3s;

    &:hover {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);
    }
  }

  @media (max-width: 450px) {
    img {
      border-radius: 0;
    }
  }
`

const Description = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: "Regular";
  color: ${theme.colors.white};

  background-color: ${theme.colors.black60};
  padding: 12px 20px;
  width: 250px;
  border: 2px solid rgba(245, 245, 245, 0.6);
  border-radius: 2px;
  z-index: 10;

  bottom: 19px;
  left: 19px;
  b {
    font-family: "Bold";
  }

  p {
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media (max-width: 1100px) {
    border: none;
    padding: 12px 0;
    width: 100%;
    bottom: 0;
    left: 0;

    p {
      margin-left: 20px;
    }
  }
`

export { CarouselItemStyled, Description }
