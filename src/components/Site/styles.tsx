import styled from "styled-components"
import theme from "@theme/index"

const Card = styled.div<{ background: string }>`
  width: 282px;
  height: 282px;

  @media (max-width: 500px) {
    width: 171px;
    height: 171px;
  }

  @media (max-width: 380px) {
    width: 150px;
    height: 150px;
  }

  background: url(${props => props.background}) no-repeat top center;
  background-size: cover;
  cursor: pointer;

  -webkit-filter: grayscale(60%);
  filter: grayscale(60%);

  &:hover {
    transition: 0.3s;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.343) 0%,
        rgba(79, 79, 79, 0.288) 100%
      ),
      url(${props => props.background}) no-repeat top center;
    background-size: cover;

    .data {
      visibility: visible;
    }
  }

  .data {
    visibility: hidden;
    font-family: "Regular";

    padding: 24px 20px;
    width: 250px;
    height: 250px;
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 16px;
    p {
      margin: 0;
    }

    .title {
      font-family: "Bold";
    }
  }
`

export { Card }
