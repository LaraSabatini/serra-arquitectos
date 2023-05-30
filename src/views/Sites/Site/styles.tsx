import styled, { css } from "styled-components"
import theme from "@theme/index"

const GoBackButton = styled.button`
  font-family: "Regular";
  border: none;
  background-color: transparent;
  display: flex;
  gap: 8px;
  color: ${theme.colors.black};
  cursor: pointer;
  padding-bottom: 12px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 50px;
`

const Carousel = styled.div`
  width: 100%;
  height: 500px;
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(39, 48, 49, 0.03);

  border-radius: 5px;

  img {
    height: 100%;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
  }
`

const Dots = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 8px;
`

const Dot = styled.button<{ selected: boolean }>`
  width: 8px;
  height: 8px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: rgba(39, 48, 49, 0.5);
  cursor: pointer;

  ${props =>
    props.selected &&
    css`
      background-color: ${theme.colors.black};
    `}
`

const Data = styled.div`
  margin-top: 20px;
  display: flex;

  width: 100%;
  gap: 16px;
  .right {
    margin-top: 44px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 75%;
  }

  .left {
    width: 25%;
    font-family: "Regular";

    p {
      font-size: 14px;
    }

    b {
      font-family: "Bold";
      font-size: 20px;
      box-shadow: inset 0 -0.5em 0 0 ${theme.colors.black10};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;

    .left,
    .right {
      width: 100%;
    }
  }
`

const DataItem = styled.p`
  font-size: 16px;
  margin: 0;
  font-family: "Regular";
  b {
    font-family: "bold";
  }

  .task {
    margin-left: 12px;
  }
`

export {
  GoBackButton,
  Container,
  Carousel,
  ImageContainer,
  Dots,
  Dot,
  Data,
  DataItem,
}
