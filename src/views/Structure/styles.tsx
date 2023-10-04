import styled from "styled-components"

const ViewContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1800px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 450px) {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
  }
`

const Head = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 450px) {
    width: 95%;
    margin: 0 auto;
  }
`

const Content = styled.div`
  display: flex;
  width: 100%;
`

const MenuContainer = styled.div`
  width: 30%;
  padding-top: 42px;
  height: 80vh;
  max-height: 900px;

  @media (max-width: 1100px) {
    display: none;
  }
`

const SliderContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1100px) {
    width: 100%;
    margin-top: 40px;
  }

  @media (max-width: 450px) {
    width: 100vw;
  }
`

export { ViewContainer, MenuContainer, SliderContainer, Content, Head }
