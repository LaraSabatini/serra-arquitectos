import styled from "styled-components"

const SitesContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;

  width: 878px;

  @media (max-width: 925px) {
    width: 580px;
  }
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
