import React, { useState, useEffect } from "react"
import { getSitesForCarousel } from "@services/sites"
import CarouselItem from "./CarouselItem"
import { CarouselContainer } from "./styles"

interface ISiteCarousel {
  id: number
  title: string
  type: string[]
  portrait: string
}

function Carousel() {
  const [current, setCurrent] = useState<number>(0)
  const [sitesArray, setSitesArray] = useState<ISiteCarousel[]>([])

  const getSites = async () => {
    const req = await getSitesForCarousel()

    const array: ISiteCarousel[] = []
    req.data.data.forEach(
      (site: { id: number; title: string; type: string; images: string }) =>
        array.push({
          id: site.id,
          title: site.title,
          type: JSON.parse(site.type),
          portrait: JSON.parse(site.images)[0],
        }),
    )
    setSitesArray(array)
  }

  useEffect(() => {
    if (sitesArray.length === 0) {
      getSites()
    }
  }, [sitesArray])

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
    </CarouselContainer>
  )
}

export default Carousel
