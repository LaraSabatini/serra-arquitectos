import styled from "styled-components"
import theme from "@theme/index"

const Container = styled.div`
  width: 100%;

  @media (max-width: 450px) {
    width: 95%;
    margin: 0 auto;
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
`

const TextContainer = styled.div`
  ul {
    margin-top: 4px;
  }
`

export { Container, TextContainer }
