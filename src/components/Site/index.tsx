import React from "react"
import { useRouter } from "next/router"
import { ISiteCard } from "@interfaces/Site"
import { Card } from "./styles"

function Site({ id, title, code, type, portrait }: ISiteCard) {
  const router = useRouter()

  return (
    <Card
      // background={portrait}
      style={{
        background: `url(${portrait}) no-repeat top center`,
        backgroundSize: "cover",
        filter: "grayscale(60%)",
        WebkitFilter: "grayscale(60%)",
      }}
      onClick={() => {
        router.query.id = `${id}`
        router.push(router)
      }}
    >
      <div className="data">
        <p className="title">{title}</p>
        <p>
          OP {code} - {type.join(" / ")}
        </p>
      </div>
    </Card>
  )
}

export default Site
