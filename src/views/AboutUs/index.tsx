import React from "react"
import { useRouter } from "next/router"
import Partners from "./Partners"
import Studio from "./Studio"
import Processes from "./Processes"
import Distinctions from "./Distinctions"
import Services from "./Services"
import Contacto from "./Contact"

function AboutUsView() {
  const router = useRouter()

  const categoryId = parseInt(router.query.categoria as string, 10)

  return (
    <>
      {categoryId === 200 && <Partners />}
      {categoryId === 201 && <Studio />}
      {categoryId === 203 && <Processes />}
      {categoryId === 204 && <Distinctions />}
      {categoryId === 205 && <Services />}
      {categoryId === 206 && <Contacto />}
    </>
  )
}

export default AboutUsView
