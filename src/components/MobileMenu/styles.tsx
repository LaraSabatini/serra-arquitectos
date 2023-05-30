import styled from "styled-components"
import theme from "@theme/index"

const Container = styled.div`
  display: none;
  position: relative;

  @media (max-width: 1100px) {
    display: flex;

    .visible {
      transform: translateX(-89.3%);
    }
  }
`

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  height: fit-content;

  #nav-icon3 {
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 20px;
    height: 12px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
  }

  #nav-icon3 span {
    display: block;
    position: absolute;
    width: 20px;
    height: 2px;
    border-radius: 3px;
    background-color: ${theme.colors.black};
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon3 span:nth-child(1) {
    top: 0px;
  }

  #nav-icon3 span:nth-child(2),
  #nav-icon3 span:nth-child(3) {
    top: 5px;
  }

  #nav-icon3 span:nth-child(4) {
    top: 10px;
  }

  #nav-icon3.open span:nth-child(1) {
    top: 5px;
    width: 0%;
    left: 50%;
  }

  #nav-icon3.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  #nav-icon3.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  #nav-icon3.open span:nth-child(4) {
    top: 5px;
    width: 0%;
    left: 50%;
  }
`

const MenuTab = styled.div`
  background-color: white;
  width: 50vw;
  padding: 20px;
  height: 100vh;
  position: absolute;
  top: 200%;
  transform: translateX(100%);
  transition: transform 0.5s linear;
  z-index: 10;

  display: flex;
  justify-content: space-between;

  @media (max-width: 500px) {
    width: 90vw;
  }
`

export { Container, Button, MenuTab }
