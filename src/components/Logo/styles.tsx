import styled, { css } from "styled-components"
import theme from "@theme/index"

const LogoStyled = styled.div<{ dimesion: "large" | "normal" }>`
  h1 {
    margin: 0;
    display: flex;
    align-items: flex-end;
    gap: 4px;

    span {
      font-family: "Regular";
      font-size: 20px;
      height: 17px;
    }
    color: ${theme.colors.black70};
    height: 20px;

    b {
      height: 20px;
      color: ${theme.colors.black};
      font-family: "Bold";
      font-size: 24px;
    }
  }

  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  height: 40px;
  margin-bottom: 16px;
  gap: 5px;
  cursor: pointer;
  transition: all 0.5s;

  ${props =>
    props.dimesion === "large" &&
    css`
      height: 60px;
      h1 {
        gap: 8px;
        height: 36px;

        span {
          font-size: ${theme.fontSizes.l};
          height: 23px;
        }
        b {
          height: 36px;
          font-size: ${theme.fontSizes.xl};
        }
      }

      &:hover {
        -webkit-animation: text-shadow-drop-bottom 0.5s both;
        animation: text-shadow-drop-bottom 0.5s both;
        gap: 10px;
        transition: all 0.5s;

        @-webkit-keyframes text-shadow-drop-bottom {
          0% {
            text-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }
          100% {
            text-shadow: 0 10px 5px transparent;
          }
        }
        @keyframes text-shadow-drop-bottom {
          0% {
            text-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }
          100% {
            text-shadow: 0 10px 5px transparent;
          }
        }
      }
    `}
`

export const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.black};

  -webkit-animation: slide-in-fwd-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-fwd-center 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @-webkit-keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
      width: 0%;
      height: 0px;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
      width: 100%;
      height: 1px;
    }
  }
  @keyframes slide-in-fwd-center {
    0% {
      -webkit-transform: translateZ(-1400px);
      transform: translateZ(-1400px);
      opacity: 0;
      width: 0%;
      height: 0px;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
      width: 100%;
      height: 1px;
    }
  }
`

export default LogoStyled
