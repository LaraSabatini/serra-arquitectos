import styled from "styled-components"
import theme from "@theme/index"

const Container = styled.div`
  width: 100%;
  height: 90%;
  position: relative;

  .calco {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media (max-width: 450px) {
    width: 95%;
    margin: 0 auto;

    .calco {
      width: 300px !important;
    }
  }

  @media (max-width: 1100px) {
    height: 70vh;
  }

  @media (max-width: 900px) {
    .calco {
      width: 500px;
    }
  }

  h2 {
    margin: 0;
    font-family: "Bold";
    font-size: 16px;
    line-height: 18px;

    color: ${theme.colors.black};
    box-shadow: inset 0 -0.5em 0 0 ${theme.colors.black10};
    width: fit-content;
    padding-right: 3px;

    margin-bottom: 16px;
  }

  p {
    margin: 0;
    padding-bottom: 4px;
  }
  padding-bottom: 50px;

  iframe {
    width: 100%;
    height: 90%;
    border: none;
    -webkit-filter: grayscale(60%);
    filter: grayscale(60%);
  }

  .contact {
    display: flex;
    align-items: center;
    gap: 8px;

    padding-bottom: 12px;

    p {
      padding-bottom: 0px;
    }
  }
`

const TextContainer = styled.div`
  ul {
    margin-top: 4px;
  }
`

export { Container, TextContainer }
