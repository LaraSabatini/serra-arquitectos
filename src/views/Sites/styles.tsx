import styled, { css } from "styled-components"

const SitesContainer = styled.div<{ visual: "cards" | "site" }>`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  height: 100%;

  ${props =>
    props.visual === "cards"
      ? css`
          @media (max-width: 1400px) {
            width: 878px;
          }
          @media (max-width: 925px) {
            width: 580px;
          }
        `
      : css`
          width: 100%;
          @media (max-width: 1100px) {
            width: 100%;
          }
        `}
`

export const CardPlaceholder = styled.div`
  transition: 0.3s;
  cursor: pointer;
  width: 282px;
  height: 282px;

  animation: skeleton-loading 1.5s linear infinite;

  @keyframes skeleton-loading {
    0% {
      background-color: #f5f5f5;
    }
    100% {
      background-color: #2730316e;
    }
  }
`

export default SitesContainer
