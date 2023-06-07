import React from "react"
import {
  PhoneOutlined,
  AimOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons"
import { Container } from "../Studio/styles"

function Contact() {
  return (
    <Container>
      <h2>Contacto</h2>
      <div className="contact">
        <PhoneOutlined />
        <p>(+54 11) 4393-6324</p>
      </div>
      <div className="contact">
        <AimOutlined />
        <p>Maipu 742, CABA, Argentina</p>
      </div>
      <div className="contact">
        <InstagramOutlined />
        <p>@serraarquitectos</p>
      </div>
      <div className="contact">
        <MailOutlined />
        <p>tecnica@serra-arquitectos.com.ar</p>
      </div>
      <iframe
        title="Ubicacion"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1871100416747!2d-58.37689859999999!3d-34.599429799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacbdb7789e7%3A0xd97ec1b3c64510f!2sArquitectos%20Serra%20Valera!5e0!3m2!1ses-419!2sar!4v1686167723512!5m2!1ses-419!2sar"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Container>
  )
}

export default Contact
