import React, { useState, useEffect } from "react"
import CarouselItem from "./CarouselItem"
import { CarouselContainer, CarouselPreview, Image } from "./styles"

interface ISiteCarousel {
  id: number
  title: string
  type: string[]
  op: string
  portrait: string
}

function Carousel() {
  const [current, setCurrent] = useState<number>(0)
  const sitesArray: ISiteCarousel[] = [
    {
      id: 132,
      title: "Conjunto de Viviendas Pro.Cre.Ar Santa Rosa",
      type: ["Planes de vivienda"],
      op: "Proyecto y Dirección de Obra",
      portrait: "./443-2.webp",
    },
    {
      id: 75,
      title: "Edificio Viviendas Camargo",
      type: ["Viviendas Colectivas"],
      op: "Proyecto",
      portrait: "./285.webp",
    },
    {
      id: 6,
      title: "Ciudad Judicial",
      type: ["Administrativo"],
      op: "Proyecto",
      portrait: "./272.webp",
    },
    {
      id: 6,
      title: "Estación Terminal de Omnibus",
      type: ["Transporte"],
      op: "Proyecto",
      portrait: "./167.webp",
    },
    {
      id: 384,
      title: "Terminal de pasajeros y torre de control del aeropuerto",
      type: ["Transporte"],
      op: "Proyecto",
      portrait: "./384.webp",
    },
    {
      id: 62,
      title: "Centro de interpretación ambiental Villa Traful",
      type: ["Turismo"],
      op: "Proyecto y Asistencia Técnica de Obra",
      portrait: "./378.webp",
    },
    {
      id: 53,
      title: "Instituto Penitenciario Chalican",
      type: ["Seguridad"],
      op: "Proyecto y Dirección de Obra",
      portrait: "./423.webp",
    },
    {
      id: 122,
      title: "Oficinas IFF",
      type: ["Administrativo"],
      op: "Anteproyecto",
      portrait: "./433.webp",
    },
    {
      id: 143,
      title: "Centro de Convenciones Cafayate",
      type: ["Turismo"],
      op: "Dirección de Obra",
      portrait: "./454.webp",
    },
    {
      id: 123,
      title: "ISSyS Comodoro Rivadaria",
      type: ["Administrativo"],
      op: "Proyecto y Asistencia Técnica de Obra",
      portrait: "./434.webp",
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
          op={site.op}
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
