import React from "react"
import { useRouter } from "next/router"
import { fernandoSerra, nicolasSerra, gonzaloSerra } from "@data/partners"
import Card from "./Card"
import Partner from "./Partner"
import { CardsContainer, SectionContainer } from "./styles"

function Partners() {
  const router = useRouter()
  const partner = router.query.socio as string

  return (
    <SectionContainer>
      {partner === undefined ? (
        <CardsContainer>
          <Card
            portrait={fernandoSerra.portrait}
            name={fernandoSerra.name}
            work={fernandoSerra.work}
            email={fernandoSerra.email}
          />
          <Card
            portrait={nicolasSerra.portrait}
            name={nicolasSerra.name}
            work={nicolasSerra.work}
            email={nicolasSerra.email}
          />
          <Card
            portrait={gonzaloSerra.portrait}
            name={gonzaloSerra.name}
            work={gonzaloSerra.work}
            email={gonzaloSerra.email}
          />
        </CardsContainer>
      ) : (
        <Partner />
      )}
    </SectionContainer>
  )
}

export default Partners
