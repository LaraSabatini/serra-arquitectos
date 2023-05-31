import React, { useState, useEffect } from "react"
import CarouselItem from "./CarouselItem"
import { CarouselContainer, CarouselPreview, Image } from "./styles"

interface ISiteCarousel {
  id: number
  title: string
  type: string[]
  portrait: string
}

function Carousel() {
  const [current, setCurrent] = useState<number>(0)
  const sitesArray: ISiteCarousel[] = [
    {
      id: 19,
      title: "ISSyS",
      type: ["Administrativo", "Salud"],
      portrait:
        "https://static.wixstatic.com/media/11a83c_c3e6b956840f45a29d2f790520f3923d~mv2.jpg/v1/fill/w_467,h_519,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/01_%20FRENTE.jpg",
    },
    {
      id: 25,
      title: "Centro de Computos Rio Limay",
      type: ["Administrativo"],
      portrait:
        "https://static.wixstatic.com/media/ada591_03b574e14b1246e3a7bc731e98099bce.jpg/v1/fill/w_980,h_640,al_c,q_85,enc_auto/ada591_03b574e14b1246e3a7bc731e98099bce.jpg",
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
          title={site.title}
          type={site.type}
          portrait={site.portrait}
        />
      ))}
      <CarouselPreview>
        {sitesArray.map((site, index) => (
          <Image
            current={current === index}
            key={site.id * 3}
            src={site.portrait}
            alt={site.title}
          />
        ))}
      </CarouselPreview>
    </CarouselContainer>
  )
}

export default Carousel
