import styled from "styled-components"
import theme from "@theme/index"

const FormContainer = styled.div`
  border: 1px solid ${theme.colors.black};
  border-radius: 5px;
  padding: 20px;
  width: fit-content;
  h2 {
    font-family: "Bold";
    font-size: ${theme.fontSizes.m};
    margin: 0;
  }
`

const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: fit-content;

  .horizontal {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .vertical {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }

  .error {
    margin: 0;
    font-size: ${theme.fontSizes.s};
    color: red;
    margin-top: -30px;
    margin-left: 10px;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

const Label = styled.p`
  margin: 0;
  padding-left: 3px;
  font-size: ${theme.fontSizes.s};
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.black10};
  width: 98%;
  border-radius: 3px;
  max-height: 130px;
  overflow: auto;
  margin-top: -30px;

  padding: 5px;
  gap: 3px;
  .item {
    margin: 0;

    display: flex;
    align-items: flex-start;
    padding: 3px;
    justify-content: space-between;

    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    }

    &:hover {
      background-color: white;
    }
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  justify-content: flex-end;
`

const ModaContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 400px;
  overflow: auto;
`

const ModalInputContainer = styled.div`
  display: flex;
  gap: 15px;
  button {
    margin-top: 25px;
  }
`

const DynamicInfo = styled.div`
  padding-bottom: 5px;
  display: flex;
  gap: 15px;
  align-items: center;
  p {
    margin: 0;
    width: 180px;

    b {
      font-family: "Bold";
    }
  }
`

export {
  FormContainer,
  InputContainer,
  Label,
  Content,
  List,
  Buttons,
  ModalInputContainer,
  ModaContent,
  DynamicInfo,
}
