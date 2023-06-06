import styled from "styled-components"
import theme from "@theme/index"

const HeadContainer = styled.div`
  width: 100%;
  .image {
    width: 305px;
    height: 285px;
    padding-bottom: 16px;
  }
  flex-wrap: wrap;

  @media (max-width: 450px) {
    width: 95%;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
  }

  display: flex;
  gap: 20px;

  .personal-data {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 5px;
  }

  .name {
    font-family: "Bold";
    height: 18px;
    margin: 0;
    width: fit-content;
    padding-right: 3px;
    box-shadow: inset 0 -0.5em 0 0 ${theme.colors.black10};
  }

  span {
    font-family: "Light";
  }

  .email {
    font-family: "Light-Italic";
  }
`

const DataP = styled.div`
  max-width: 620px;

  .first {
    margin-top: 86px;

    @media (max-width: 1010px) {
      margin-top: 0px;
    }
  }

  .title {
    font-family: "Bold";
    padding-bottom: 4px;
  }

  p {
    margin: 0;
    white-space: pre-wrap;
  }
`

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 50px;
`

const DataPFull = styled.div`
  .title {
    font-family: "Bold";
    padding-bottom: 4px;
  }

  p {
    margin: 0;
    white-space: pre-wrap;
  }

  @media (max-width: 1010px) {
    margin-top: 4px;
    padding-bottom: 0px;
  }
`

const GoBack = styled.button`
  border: none;
  background: transparent;
  font-family: "Regular";
  margin-bottom: 12px;
  cursor: pointer;

  span {
    padding-right: 8px;
  }
`

export { HeadContainer, DataP, BottomContent, DataPFull, GoBack }
