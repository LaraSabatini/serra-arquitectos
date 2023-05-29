import React, { useState, useEffect } from "react"
import CarouselItem from "./CarouselItem"
import { CarouselContainer } from "./styles"

function Carousel() {
  const [current, setCurrent] = useState<number>(0)

  // Bring last 5 sites uploaded via API
  const sitesArray = [
    {
      id: 1,
      principal: "ISSyS",
      type: ["Administrativo", "Salud"],
      portrait:
        "https://static.wixstatic.com/media/11a83c_c3e6b956840f45a29d2f790520f3923d~mv2.jpg/v1/fill/w_467,h_519,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/01_%20FRENTE.jpg",
    },
    {
      id: 2,
      principal: "Centro de Computos",
      type: ["Administrativo"],
      portrait:
        "https://static.wixstatic.com/media/ada591_03b574e14b1246e3a7bc731e98099bce.jpg/v1/fill/w_940,h_614,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ada591_03b574e14b1246e3a7bc731e98099bce.jpg",
    },
    {
      id: 3,
      principal: "Centro de Computos",
      type: ["Culto"],
      portrait:
        "https://static.wixstatic.com/media/ada591_60ff245735c84351a28bdef46158deaf.jpg/v1/fill/w_480,h_701,al_c,lg_1,q_80,enc_auto/ada591_60ff245735c84351a28bdef46158deaf.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prevSlide => (prevSlide + 1) % sitesArray.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [sitesArray.length])

  return (
    <CarouselContainer>
      {sitesArray.map((site, index) => (
        <CarouselItem
          key={site.id}
          visible={current === index}
          id={site.id}
          principal={site.principal}
          type={site.type}
          portrait={site.portrait}
        />
      ))}
    </CarouselContainer>
  )
}

export default Carousel
