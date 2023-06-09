import React, { useState } from "react"
import { Select } from "antd"
import EditSiteProvider from "@contexts/SiteEdit"
import UploadSiteProvider from "@contexts/SiteUpload"
import UploadView from "./Create"
import EditSiteView from "./Edit"
import { InputContainer, Label, Container } from "./styles"

function UploadSite({
  sessionData,
}: {
  sessionData: {
    logged: boolean
    token: string
    user: string
  }
}) {
  const [optionSelected, setOptionSelected] = useState<string | null>(null)

  const options = [
    { id: 1, value: "Crear Obra" },
    { id: 2, value: "Editar Obra Existente" },
  ]

  return (
    <>
      {optionSelected === null && (
        <Container>
          <InputContainer>
            <Label>Selecciona la acción que deseas realizar</Label>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "285px" }}
              onChange={e => setOptionSelected(e[0])}
              options={options}
            />
          </InputContainer>
        </Container>
      )}
      {optionSelected === "Crear Obra" && (
        <UploadSiteProvider>
          <UploadView sessionData={sessionData} />
        </UploadSiteProvider>
      )}
      {optionSelected === "Editar Obra Existente" && (
        <EditSiteProvider>
          <EditSiteView sessionData={sessionData} />
        </EditSiteProvider>
      )}
    </>
  )
}

export default UploadSite
