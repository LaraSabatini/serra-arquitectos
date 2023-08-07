import React from "react"
import sections from "@data/menu"
import { CarouselItemStyled, Description } from "./styles"

interface ICarouselItem {
  id: number
  title: string
  type: string[]
  op: string
  portrait: string
  visible: boolean
}

function CarouselItem({
  id,
  title,
  type,
  op,
  portrait,
  visible,
}: ICarouselItem) {
  const filterType = sections[0].subsections.filter(
    subsection => subsection.name === type[0],
  )

  return (
    <CarouselItemStyled
      href={`https://serra-arquitectos.vercel.app/obras?id=${id}&categoria=${filterType[0]?.id}`}
      visible={visible}
    >
      <Description>
        <p>
          <b>{title}</b>
          {type.join(" / ")} - {op}
        </p>
      </Description>
      <img src={portrait} alt={`Portada de obra: ${title}`} />
    </CarouselItemStyled>
  )
}

export default CarouselItem
