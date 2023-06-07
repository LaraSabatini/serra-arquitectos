import React from "react"
import { useRouter } from "next/router"
import { CardStyled, Button } from "./styles"

interface ICard {
  portrait: string
  name: string
  work: string
  email: string
}

function Card({ portrait, name, work, email }: ICard) {
  const router = useRouter()

  return (
    <CardStyled>
      <div className="image">
        <img src={portrait} alt={name} />
      </div>
      <p>{name}</p>
      <span>{work}</span>
      <span>{email}</span>
      <Button
        type="button"
        onClick={() => router.push(`${router.asPath}&socio=${name}`)}
      >
        Mas información
      </Button>
    </CardStyled>
  )
}

export default Card
