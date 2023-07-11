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
      id: 18,
      title: "Plaza San Miguel de Garicoits",
      type: ["Deportivo + Recreativo"],
      portrait: "./187.jpg",
    },
    {
      id: 14,
      title: "Iglesia de Dios Padre",
      type: ["Culto"],
      portrait: "./205.jpg",
    },
    {
      id: 6,
      title: "Ciudad Judicial",
      type: ["Administrativo"],
      portrait: "./272.jpg",
    },
    {
      id: 75,
      title: "Edificio Viviendas Camargo",
      type: ["Viviendas Colectivas"],
      portrait: "./285.jpg",
    },
    {
      id: 151,
      title: "Conjunto de Viviendas ProCreAr, Santa Rosa",
      type: ["Planes de vivienda"],
      portrait: "./377.jpg",
    },
    {
      id: 62,
      title: "Centro de interpretación ambiental Villa Traful",
      type: ["Turismo"],
      portrait: "./378.jpg",
    },
    {
      id: 384,
      title: "Terminal de pasajeros y torre de control del aeropuerto",
      type: ["Transporte"],
      portrait: "./384.jpg",
    },
    {
      id: 53,
      title: "Instituto Penitenciario Chalican",
      type: ["Seguridad"],
      portrait: "./423.jpg",
    },
    {
      id: 122,
      title: "Oficinas IFF",
      type: ["Administrativo"],
      portrait: "./433.jpg",
    },
    {
      id: 123,
      title: "ISSyS Comodoro Rivadaria",
      type: ["Administrativo"],
      portrait: "./434.jpg",
    },
    {
      id: 132,
      title: "Conjunto de Viviendas Pro.Cre.Ar Santa Rosa",
      type: ["Planes de vivienda"],
      portrait: "./443.2.png",
    },
    {
      id: 143,
      title: "Centro de Convenciones Cafayate",
      type: ["Turismo"],
      portrait: "./454.png",
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
