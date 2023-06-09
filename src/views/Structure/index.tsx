import React from "react"
import Menu from "@components/Menu"
import MobileMenu from "@components/MobileMenu"
import Logo from "@components/Logo"
import {
  ViewContainer,
  MenuContainer,
  SliderContainer,
  Content,
  Head,
} from "./styles"

function LayoutView({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <ViewContainer>
      <Head>
        <Logo dimesion="normal" />
        <MobileMenu />
      </Head>
      <Content>
        <MenuContainer>
          <Menu />
        </MenuContainer>
        <SliderContainer>{children}</SliderContainer>
      </Content>
    </ViewContainer>
  )
}

export default LayoutView
