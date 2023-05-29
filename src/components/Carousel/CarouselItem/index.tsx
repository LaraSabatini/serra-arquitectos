import React from "react"
import sections from "@data/menu"
import { CarouselItemStyled, Description } from "./styles"

interface ICarouselItem {
  id: number
  title: string
  type: string[]
  portrait: string
  visible: boolean
}

function CarouselItem({ id, title, type, portrait, visible }: ICarouselItem) {
  const filterType = sections[0].subsections.filter(
    subsection => subsection.name === type[0],
  )

  return (
    <CarouselItemStyled
      href={`http://localhost:3000/obras?id=${id}&categoria=${filterType[0].id}`}
      visible={visible}
    >
      <Description>
        <b>{title}</b>
        {type.join(" / ")}
      </Description>
      <img src={portrait} alt={`Portada de obra: ${title}`} />
    </CarouselItemStyled>
  )
}

export default CarouselItem
