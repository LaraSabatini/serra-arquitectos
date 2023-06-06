import React, { useState, useEffect } from "react"
import { fernandoSerra, nicolasSerra, gonzaloSerra } from "@data/partners"
import { useRouter } from "next/router"
import { LeftOutlined } from "@ant-design/icons"
import {
  HeadContainer,
  DataP,
  BottomContent,
  DataPFull,
  GoBack,
} from "./styles"

function Partner() {
  const router = useRouter()
  const partner = router.query.socio as string

  const [currentPartner, setCurrentPartner] = useState(fernandoSerra)

  const searchPartner = () => {
    const partnerArray = [fernandoSerra, nicolasSerra, gonzaloSerra]
    const filterPartners = partnerArray.filter(item => item.name === partner)

    setCurrentPartner(filterPartners[0])
  }

  useEffect(() => {
    searchPartner()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partner])

  return (
    <div>
      <GoBack
        type="button"
        onClick={() => {
          delete router.query.socio
          router.push(router)
        }}
      >
        <LeftOutlined />
        Volver
      </GoBack>
      <HeadContainer>
        <div className="image">
          <img src={currentPartner.portrait} alt={currentPartner.name} />
        </div>
        <div className="personal-data">
          <p className="name">{currentPartner.name}</p>
          <span>{currentPartner.work}</span>
          <span className="email">{currentPartner.email}</span>
          {currentPartner.data[0].value.length <= 392 && (
            <DataP>
              <p className="title first">{currentPartner.data[0].title}</p>
              <p>{currentPartner.data[0].value}</p>
            </DataP>
          )}
        </div>
      </HeadContainer>
      <BottomContent>
        {currentPartner.data[0].value.length > 392 && (
          <DataPFull>
            <p className="title">{currentPartner.data[0].title}</p>
            <p>{currentPartner.data[0].value}</p>
          </DataPFull>
        )}
        <DataPFull>
          <p className="title">{currentPartner.data[1].title}</p>
          <p>{currentPartner.data[1].value}</p>
        </DataPFull>
        <DataPFull>
          <p className="title">{currentPartner.data[2].title}</p>
          <p>{currentPartner.data[2].value}</p>
        </DataPFull>
        {currentPartner.data[3]?.title !== undefined && (
          <DataPFull>
            <p className="title">{currentPartner.data[3].title}</p>
            <p>{currentPartner.data[3].value}</p>
          </DataPFull>
        )}
      </BottomContent>
    </div>
  )
}

export default Partner
