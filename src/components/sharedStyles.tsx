import styled, { css } from "styled-components"
import theme from "@theme/index"

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const MenuItem = styled.div<{ selected: boolean }>`
  width: fit-content;
  font-family: "Regular";
  color: ${theme.colors.black70};
  font-size: ${theme.fontSizes.m};
  cursor: pointer;

  ${props =>
    props.selected &&
    css`
      font-family: "Bold";
      color: ${theme.colors.black};
    `}

  b {
    font-family: "Bold";
  }

  p {
    margin: 0;
    padding-left: 2px;
    padding-right: 5px;
    line-height: 16px;

    span {
      font-family: "Regular";
    }

    &:hover {
      box-shadow: inset 0 -0.5em 0 0 ${theme.colors.black10};
      font-family: "Bold";
      color: ${theme.colors.black};
    }
  }
`

const SubMenu = styled.div`
  width: 60%;
  height: fit-content;
`

export { Items, MenuItem, SubMenu }
