import styled from "styled-components"
import theme from "@theme/index"

const CardStyled = styled.div`
  .image {
    width: 305px;
    height: 285px;
    padding-bottom: 16px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
  }

  p {
    margin: 0;
    font-family: "Bold";
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 8px;
  }

  span {
    font-family: "Regular";
    font-size: 15px;
    margin-bottom: 8px;
  }

  @media (max-width: 980px) {
    .image {
      width: 295px;
      height: 275px;
    }
  }

  @media (max-width: 768px) {
    .image {
      width: 225px;
      height: 205px;
    }

    p {
      font-size: 15px;
    }

    span {
      font-size: 12px;
    }
  }

  display: flex;
  flex-direction: column;
  color: ${theme.colors.black};
`

const Button = styled.button`
  color: #d9d9d9;
  background-color: ${theme.colors.black};
  font-family: "Regular";
  width: 120px;
  padding: 10px 0 8px 0;
  border: none;
  border-radius: 2px;
  margin-top: 8px;
  font-size: 14px;
  cursor: pointer;
`

export { CardStyled, Button }
