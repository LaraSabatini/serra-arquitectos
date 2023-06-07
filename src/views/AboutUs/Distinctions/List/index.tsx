import React from "react"
import { useRouter } from "next/router"
import {
  awards,
  exhibitions,
  magazines,
  journals,
  books,
} from "@data/distinctions"
import { LeftOutlined } from "@ant-design/icons"
import { Container } from "../../Studio/styles"
import { GoBack } from "../../Partners/Partner/styles"
import { Item } from "./styles"

function List() {
  const router = useRouter()

  const subsection = router.query.distincion as string
  return (
    <Container>
      <GoBack
        type="button"
        onClick={() => {
          delete router.query.distincion
          router.push(router)
        }}
      >
        <LeftOutlined />
        Volver
      </GoBack>
      {subsection === "premios" && (
        <>
          <h2 style={{ marginLeft: "28px" }}>Premios</h2>
          {awards.map(award => (
            <Item>
              <p className="year">
                <b>Año:</b> {award.year}
              </p>
              <ul>
                {award.items.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            </Item>
          ))}
        </>
      )}
      {subsection === "libros" && (
        <>
          <h2 style={{ marginLeft: "28px" }}>Libros</h2>
          {books.map(book => (
            <Item>
              <p className="year">
                <b>Año:</b> {book.year}
              </p>
              <ul>
                {book.items.map(item => (
                  <div>
                    {item?.month !== undefined ? (
                      <li>
                        <p>
                          <b>Mes:</b> {item?.month}
                        </p>
                        <p>
                          <b>Lugar:</b> {item?.lugar}
                        </p>
                        <p>
                          <b>Tema:</b> {item?.tema}
                        </p>
                        <p>
                          <b>Obras:</b> {item?.obras}
                        </p>
                      </li>
                    ) : (
                      <li>
                        <p>
                          <b>Obra: </b>
                          {item.title}
                        </p>
                      </li>
                    )}
                  </div>
                ))}
              </ul>
            </Item>
          ))}
        </>
      )}
      {subsection === "exposiciones" && (
        <>
          <h2 style={{ marginLeft: "28px" }}>Exposiciones</h2>
          {exhibitions.map(exhibition => (
            <Item>
              <p className="year">
                <b>Año:</b> {exhibition.year}
              </p>
              <ul>
                <li>
                  <p>
                    <b>Mes: </b>
                    {exhibition.months}
                  </p>
                  <p>
                    <b>Lugar: </b>
                    {exhibition.lugar}
                  </p>
                  <p>
                    <b>Tema: </b>
                    {exhibition.tema}
                  </p>

                  <p>
                    <b>Obras: </b>
                    {exhibition.obras}
                  </p>
                </li>
              </ul>
            </Item>
          ))}
        </>
      )}
      {subsection === "revistas" && (
        <>
          <h2 style={{ marginLeft: "28px" }}>Revistas</h2>
          {magazines.map(magazine => (
            <Item>
              <p className="year">
                <b>Año:</b> {magazine.year}
              </p>
              <ul>
                {magazine.items.map(item => (
                  <li>
                    <p>
                      <b>Titulo:</b> {item.title}
                    </p>

                    <p>
                      <b>Tema:</b> {item.tema}
                    </p>

                    <p>
                      <b>Trabajo Publicado:</b> {item.trabajoPublicado}
                    </p>
                    {item.comitente !== undefined && (
                      <p>
                        <b>Comitente:</b> {item.comitente}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </Item>
          ))}
        </>
      )}
      {subsection === "diarios" && (
        <>
          <h2 style={{ marginLeft: "28px" }}>Diarios</h2>
          {journals.map(journal => (
            <Item>
              <p className="year">
                <b>Año:</b> {journal.year}
              </p>
              <ul>
                {journal.items.map(item => (
                  <li>
                    <p>
                      <b>Titulo:</b> {item.title}
                    </p>

                    <p>
                      <b>Tema:</b> {item.tema}
                    </p>

                    <p>
                      <b>Trabajo Publicado:</b> {item.trabajoPublicado}
                    </p>
                  </li>
                ))}
              </ul>
            </Item>
          ))}
        </>
      )}
    </Container>
  )
}

export default List
