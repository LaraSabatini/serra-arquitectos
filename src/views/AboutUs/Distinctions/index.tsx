/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react"
import { useRouter } from "next/router"
import List from "./List"
import { Container, TextContainer } from "../Studio/styles"

function Distinctions() {
  const router = useRouter()

  const subsection = router.query.distincion as string
  return (
    <Container>
      {subsection === undefined ? (
        <>
          <h2>Distinciones</h2>
          <TextContainer>
            <p>
              <b>Consideraciones</b>
            </p>
            <br />
            <p>
              El Estudio ha recibido diversas distinciones y premios por la
              labor desarrollada ya sea en concursos nacionales,
              internacionales, bienales de arquitectura u otros motivos.
            </p>
            <p>
              Los trabajos realizados se han publicado en medios gráficos
              especializados y de interés general. La difusión alcanzó a
              publicaciones periódicas, boletines y diarios nacionales y
              extranjeros.
            </p>
            <p>
              Las propuestas y soluciones elaboradas han alcanzado repercusión a
              través de muestras y exposiciones realizadas en nuestro país y en
              EE.UU, Francia, Italia, Brasil, China y Japón.
            </p>
            <p>
              En las obras premiadas y/o publicadas que se mencionan a
              continuación han participado: Previas a 1974, Arquitecto Fernando
              H. Serra.
            </p>
            <p>
              Posteriores a 1974 y hasta 1991, Arquitectos. Fernando H. Serra y
              Jorge O. Valera.
            </p>
            <p>
              Posteriores a 1991 y hasta 2005 Arquitectos. Fernando H. Serra,
              Jorge O. Valera, Gonzalo Serra y Nicolás Serra 2005 en adelante
              Arquitectos. Fernando H. Serra, Gonzalo Serra y Nicolás Serra
            </p>
          </TextContainer>
          <br />
          <TextContainer>
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`${router.asPath}&distincion=premios`)}
            >
              Premios
            </h2>
            <p>29 Premios recibidos entre 1962 y 2008.</p>
          </TextContainer>
          <br />
          <TextContainer>
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`${router.asPath}&distincion=libros`)}
            >
              Libros
            </h2>
            <p>
              Se ha editado un libro dedicado a sus obras por la Unión
              Internacional de Arquitectos y en otros 4 libros dedicados a
              arquitectura argentina contemporánea se muestran obras o dibujos
              del Estudio, entre 1986 y 1995.
            </p>
          </TextContainer>
          <br />
          <TextContainer>
            <h2
              style={{ cursor: "pointer" }}
              onClick={() =>
                router.push(`${router.asPath}&distincion=exposiciones`)
              }
            >
              Exposiciones
            </h2>
            <p>
              22 obras del Estudio han sido exhibidas diferentes exposiciones
              nacionales y extranjeras entre 1981 y 2008.
            </p>
          </TextContainer>
          <br />
          <TextContainer>
            <h2
              style={{ cursor: "pointer" }}
              onClick={() =>
                router.push(`${router.asPath}&distincion=revistas`)
              }
            >
              Revistas
            </h2>
            <p>61 apariciones en revistas entre 1963 y 2008.</p>
          </TextContainer>
          <br />
          <TextContainer>
            <h2
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`${router.asPath}&distincion=diarios`)}
            >
              Diarios
            </h2>
            <p>40 apariciones en diarios entre 1970 y 1999.</p>
          </TextContainer>
        </>
      ) : (
        <List />
      )}
    </Container>
  )
}

export default Distinctions
