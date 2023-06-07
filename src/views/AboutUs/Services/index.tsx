/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react"
import { RightOutlined, DownOutlined } from "@ant-design/icons"
import { services } from "@data/services"
import { Container } from "../Studio/styles"
import { ListContainer, GeneralContainer } from "./styles"

function Services() {
  const [serviceOpen, setServiceOpen] = useState(services[0])

  return (
    <Container>
      <h2>Servicios</h2>
      <GeneralContainer>
        <ListContainer>
          {services.map(service => (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
              className="item"
              key={service.name}
              onClick={() => setServiceOpen(service)}
            >
              <p>
                {serviceOpen.name === service.name ? (
                  <b>{service.name}</b>
                ) : (
                  service.name
                )}

                {serviceOpen.name === service.name ? (
                  <RightOutlined style={{ fontSize: "12px" }} />
                ) : (
                  <DownOutlined style={{ fontSize: "12px" }} />
                )}
              </p>
            </div>
          ))}
        </ListContainer>
        <div className="list">
          {serviceOpen.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </div>
      </GeneralContainer>
      <img
        className="calco"
        alt="calco"
        src="https://static.wixstatic.com/media/ada591_4ce0481e6c6f4ebaa0e0bf2116a85b30.png/v1/fill/w_840,h_346,al_c,lg_1,q_85,enc_auto/ada591_4ce0481e6c6f4ebaa0e0bf2116a85b30.png"
      />
    </Container>
  )
}

export default Services
