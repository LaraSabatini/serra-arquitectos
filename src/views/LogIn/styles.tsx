import styled from "styled-components"
import theme from "@theme/index"

const Container = styled.div`
  border: 1px solid ${theme.colors.black70};
  width: 300px;
  border-radius: 5px;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  gap: 20px;

  h2 {
    margin: 0;
    font-size: ${theme.fontSizes.m};
    font-family: "Bold";
  }

  .url {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: "Thin-Italic";
    align-self: flex-end;
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .error {
    color: red;
    margin: 0;
    text-align: center;
    font-size: ${theme.fontSizes.s};
  }
`

export { Container }
