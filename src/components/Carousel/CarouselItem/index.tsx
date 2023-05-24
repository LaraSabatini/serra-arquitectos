import React from "react"
import { useRouter } from "next/router"
import sections from "@data/menu"
import { CarouselItemStyled, Description } from "./styles"

interface ICarouselItem {
  id: number
  principal: string
  type: string[]
  portrait: string
  visible: boolean
}

function CarouselItem({
  id,
  principal,
  type,
  portrait,
  visible,
}: ICarouselItem) {
  const router = useRouter()

  const filterType = sections[0].subsections.filter(
    subsection => subsection.name === type[0],
  )

  return (
    <CarouselItemStyled
      onClick={() =>
        router.replace(`/obras?id=${id}&categoria=${filterType[0].id}`)
      }
      visible={visible}
    >
      <Description>
        <b>{principal}</b>
        {type.join(" / ")}
      </Description>
      <img src={portrait} alt={`Portada de obra: ${principal}`} />
    </CarouselItemStyled>
  )
}

export default CarouselItem
