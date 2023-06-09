import styled, { css } from "styled-components"
import theme from "@theme/index"

const Container = styled.div`
  border: 1px solid ${theme.colors.black};
  border-radius: 5px;
  padding: 20px;
  width: 100%;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

const Label = styled.p`
  margin: 0;
  padding-left: 3px;
  font-size: ${theme.fontSizes.s};
`

const FormContainer = styled.div`
  border: 1px solid ${theme.colors.black};
  border-radius: 5px;
  padding: 20px;
  width: fit-content;
  h2 {
    font-family: "Bold";
    font-size: ${theme.fontSizes.m};
    margin: 0;
  }
`

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: fit-content;

  .horizontal {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .vertical {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }

  .error {
    margin: 0;
    font-size: ${theme.fontSizes.s};
    color: red;
    margin-top: -30px;
    margin-left: 10px;
  }
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.black10};
  width: 98%;
  border-radius: 3px;
  max-height: 130px;
  overflow: auto;
  margin-top: -30px;

  padding: 5px;
  gap: 3px;
  .item {
    margin: 0;

    display: flex;
    align-items: flex-start;
    padding: 3px;
    justify-content: space-between;

    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }

    &:hover {
      background-color: white;
    }
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  justify-content: flex-end;
`

const ModaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 400px;
  overflow: auto;
`

const ModalInputContainer = styled.div`
  display: flex;
  gap: 15px;
  button {
    margin-top: 25px;
  }
`

const DynamicInfo = styled.div`
  padding-bottom: 5px;
  display: flex;
  gap: 15px;
  align-items: center;
  p {
    margin: 0;
    width: 180px;

    b {
      font-family: "Bold";
    }
  }
`

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
  max-height: 300px;
  overflow: auto;
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
  InputContainer,
  Label,
  Container,
  FormContainer,
  Content,
  List,
  Buttons,
  ModalInputContainer,
  ModaContent,
  DynamicInfo,
  FilesContent,
  DraggableArea,
  Gallery,
  ImageContainer,
  ModalContent,
  Images,
  ImageInCarousel,
}
