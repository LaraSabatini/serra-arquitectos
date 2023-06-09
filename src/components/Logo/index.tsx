import React, { useState } from "react"
import { useRouter } from "next/router"
import LogoStyled, { Underline } from "./styles"

function Logo({ dimesion }: { dimesion: "large" | "normal" }) {
  const router = useRouter()

  const [isHovering, setIsHovering] = useState<boolean>(false)
  return (
    <LogoStyled dimesion={dimesion} onClick={() => router.push("/home")}>
      <h1
        onMouseOver={() => setIsHovering(!isHovering)}
        onFocus={() => setIsHovering(!isHovering)}
        className="animate__animated animate__fadeIn"
      >
        <b>SERRA</b>
        <span>ARQUITECTOS</span>
      </h1>
      {dimesion === "large" && <Underline className="underline" />}
    </LogoStyled>
  )
}

export default Logo
