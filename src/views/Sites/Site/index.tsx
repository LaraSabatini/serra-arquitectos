import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { LeftOutlined } from "@ant-design/icons"
import { ISite } from "@interfaces/Site"
import { getSiteById } from "@services/sites"
import {
  GoBackButton,
  Container,
  Carousel,
  ImageContainer,
  Dots,
  Dot,
  DataItem,
  Data,
} from "./styles"

function IndividualSite() {
  const router = useRouter()

  const [site, setSite] = useState<ISite>()
  const [currentImage, setCurrentImage] = useState<number>(0)
  const [imagesArray, setImagesArray] = useState<string[]>([])

  const getSiteData = async () => {
    const req = await getSiteById(parseInt(router.query.id as string, 10))

    setSite({
      ...req.data.data[0],
      images: JSON.parse(req.data.data[0]?.images),
      tasks:
        req.data.data[0].tasks !== ""
          ? JSON.parse(req.data.data[0].tasks)
          : req.data.data[0].tasks,
      otherFields:
        req.data.data[0].otherFields !== ""
          ? JSON.parse(req.data.data[0].otherFields)
          : "",
      type: JSON.parse(req.data.data[0].type),
    })
    setImagesArray(JSON.parse(req.data.data[0].images))
  }

  useEffect(() => {
    getSiteData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (site !== undefined) {
      const interval = setInterval(() => {
        setCurrentImage(prevSlide => (prevSlide + 1) % site.images.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [site])

  return (
    <Container>
      <GoBackButton
        type="button"
        onClick={() => {
          delete router.query.id
          router.push(router)
        }}
      >
        <LeftOutlined />
        Volver
      </GoBackButton>
      <Carousel>
        <ImageContainer>
          <img src={site?.images[currentImage]} alt={site?.title} />
        </ImageContainer>
        <Dots>
          {imagesArray.length > 0 &&
            imagesArray.map((img, index) => (
              <Dot
                onClick={() => setCurrentImage(index)}
                type="button"
                selected={currentImage === index}
                key={img}
              />
            ))}
        </Dots>
      </Carousel>
      <Data>
        <div className="left">
          <p>OP {site?.code}</p>
          <b>{site?.title}</b>
        </div>
        <div className="right">
          <DataItem>
            <b>Año:</b> {site?.year}
          </DataItem>
          <DataItem>
            <b>Comitente:</b> {site?.principal}
          </DataItem>
          <DataItem>
            <b>Ubicación:</b> {site?.location}
          </DataItem>
          {site?.tasks !== "" && typeof site?.tasks !== "string" && (
            <DataItem>
              <b>Tareas realizadas:</b>
              {site?.tasks.map(item => (
                <p className="task">• {item}</p>
              ))}
            </DataItem>
          )}
          <DataItem>
            <b>Descripción:</b>{" "}
            {site?.description === "" ? "-" : site?.description}
          </DataItem>
          <DataItem>
            <b>Superficie total:</b>{" "}
            {parseInt(site?.size as string, 10)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
            m²
          </DataItem>
          {site?.otherFields !== "" &&
            typeof site?.otherFields !== "string" &&
            site?.otherFields.map(field => (
              <DataItem>
                <b>{field.type}: </b>
                {field.value.replace("m2", "m²")}
              </DataItem>
            ))}
        </div>
      </Data>
    </Container>
  )
}

export default IndividualSite
