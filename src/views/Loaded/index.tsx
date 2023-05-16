import React from "react"
import { useRouter } from "next/router"
import Logo from "@components/Logo"
import Logo2 from "@components/Logo2"
import Logo3 from "@components/Logo3"
import Container from "./styles"

function LoadedView() {
  const router = useRouter()
  // a
  return (
    <Container>
      {router.query.logo === undefined && <Logo dimesion="large" />}
      {router.query.logo === "2" && <Logo2 dimesion="large" />}
      {router.query.logo === "3" && <Logo3 dimesion="large" />}
    </Container>
  )
}

export default LoadedView
