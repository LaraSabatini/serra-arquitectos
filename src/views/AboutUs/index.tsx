import React from "react"
import { useRouter } from "next/router"
import Partners from "./Partners"

function AboutUsView() {
  const router = useRouter()

  const categoryId = parseInt(router.query.categoria as string, 10)

  return (
    <>
      {categoryId === 200 && <Partners />}
      <div />
    </>
  )
}

export default AboutUsView
