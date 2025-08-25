import React, { useState } from "react"
import { useRouter } from "next/router"
import LogoStyled, { Underline } from "./styles"

function Logo({ dimesion }: { dimesion: "large" | "normal" }) {
  const router = useRouter()

  const [isHovering, setIsHovering] = useState<boolean>(false)
  return (
    <LogoStyled dimesion={dimesion} onClick={() => router.push("/home")}>
      {dimesion === "large" ? (
        <img
          onMouseOver={() => setIsHovering(!isHovering)}
          onFocus={() => setIsHovering(!isHovering)}
          className="animate__animated animate__fadeIn"
          width="300px"
          alt="logo serra arquitectos"
          src="https://www.serra-arquitectos.com.ar/logo/horizontal.png"
        />
      ) : (
        <img
          onMouseOver={() => setIsHovering(!isHovering)}
          onFocus={() => setIsHovering(!isHovering)}
          className="animate__animated animate__fadeIn"
          width="100px"
          alt="logo serra arquitectos"
          src="https://www.serra-arquitectos.com.ar/logo/vertical.png"
        />
      )}
      {dimesion === "large" && <Underline className="underline" />}
    </LogoStyled>
  )
}

export default Logo
