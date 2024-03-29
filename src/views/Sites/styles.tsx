import styled, { css } from "styled-components"

const SitesContainer = styled.div<{ visual: "cards" | "site" }>`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-start;

  ${props =>
    props.visual === "cards"
      ? css`
          @media (max-width: 1400px) {
            width: 878px;
          }
          @media (max-width: 925px) {
            width: 580px;
          }

          @media (max-width: 500px) {
            width: 100%;
            justify-content: center;
            gap: 12px;
          }
        `
      : css`
          width: 100%;
        `}
`

export const CardPlaceholder = styled.div`
  /* transition: 0.3s; */
  cursor: pointer;
  width: 282px;
  height: 282px;

  @media (max-width: 380px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 500px) {
    width: 171px;
    height: 171px;
  }

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
