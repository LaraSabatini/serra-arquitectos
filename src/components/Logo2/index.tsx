import React, { useState } from "react"
import { useRouter } from "next/router"
import LogoStyled, { Underline } from "../Logo/styles"

function Logo2({ dimesion }: { dimesion: "large" | "normal" }) {
  const router = useRouter()

  const [isHovering, setIsHovering] = useState<boolean>(false)
  return (
    <LogoStyled dimesion={dimesion} onClick={() => router.push("/home")}>
      <h1
        onMouseOver={() => setIsHovering(!isHovering)}
        onFocus={() => setIsHovering(!isHovering)}
        className="animate__animated animate__fadeInUp"
        //
        // animate__zoomIn
      >
        <b>SERRA</b>
        Arquitectos
      </h1>
      {dimesion === "large" && <Underline className="underline" />}
    </LogoStyled>
  )
}

export default Logo2
