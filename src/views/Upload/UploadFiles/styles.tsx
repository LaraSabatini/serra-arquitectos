import styled, { css } from "styled-components"
import theme from "@theme/index"

const FilesContent = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`

const DraggableArea = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.black10};
  border-radius: 3px;
  gap: 10px;
  cursor: pointer;

  .info {
    text-align: center;
    font-size: ${theme.fontSizes.s};
    width: 200px;
    color: ${theme.colors.black70};
  }
`

const Gallery = styled.div`
  max-width: 600px;
  width: 600px;
  flex-wrap: wrap;
  display: flex;
  gap: 15px;

  img {
    height: 140px;
    width: 200px;
  }
`

const ImageContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;

  img {
    cursor: pointer;
    height: 140px;

    &:hover {
      -webkit-filter: brightness(0.5);
      filter: brightness(0.5);
    }
  }
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 auto;
  max-height: 550px;
  overflow: auto;

  gap: 15px;

  .img-title {
    margin: 0;
    display: flex;
    font-size: ${theme.fontSizes.m};
    align-items: center;
    gap: 4px;
  }

  .position {
    display: flex;
    align-items: center;

    p {
      padding-right: 12px;
    }
  }
`

const ImageInCarousel = styled.img<{ selected: boolean }>`
  border-radius: 3px;
  border: 1.5px solid transparent;

  ${props =>
    props.selected &&
    css`
      border: 1.5px solid ${theme.colors.black};
    `}
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  .current {
    img {
      width: 100%;
      height: auto;
    }
  }

  .gallery {
    display: flex;
    gap: 8px;
    width: 400px;
    overflow: auto;

    img {
      height: 50px;
      width: 50px;
    }
  }
`

export {
  FilesContent,
  DraggableArea,
  Gallery,
  ImageContainer,
  ModalContent,
  Images,
  ImageInCarousel,
}
