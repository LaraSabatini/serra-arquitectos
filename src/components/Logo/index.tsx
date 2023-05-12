import React from "react"
import { useRouter } from "next/router"
import LogoStyled, { Underline } from "./styles"

function Logo({ dimesion }: { dimesion: "large" | "normal" }) {
  const router = useRouter()

  return (
    <LogoStyled dimesion={dimesion} onClick={() => router.push("/home")}>
      <h1>
        <b>SERRA</b>
        Arquitectos
      </h1>
      {dimesion === "large" && <Underline className="underline" />}
    </LogoStyled>
  )
}

export default Logo
