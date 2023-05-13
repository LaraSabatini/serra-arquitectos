import { styled } from "styled-components"

const ViewContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  max-width: 1800px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Head = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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

  @media (max-width: 980px) {
    display: none;
  }
`

const SliderContainer = styled.div`
  width: 70%;
  @media (max-width: 980px) {
    width: 100%;
    margin-top: 40px;
  }
`

export { ViewContainer, MenuContainer, SliderContainer, Content, Head }
