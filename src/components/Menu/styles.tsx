import styled from "styled-components"
import theme from "@theme/index"

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const SocialContainer = styled.div`
  position: absolute;
  width: 100px;
  bottom: 55px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  a {
    text-decoration: none;
    color: ${theme.colors.black70};
  }
`

export default Container
