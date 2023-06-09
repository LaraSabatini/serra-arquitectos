import React, { useState } from "react"
import { useRouter } from "next/router"
import { sendRestorePasswordEmail } from "@services/auth"
import { ArrowLeftOutlined } from "@ant-design/icons"
import { Input, Space, Button } from "antd"
import RestorePasswordForm from "../RestorePasswordForm"
import { Container } from "../LogIn/styles"

function RestorePassword() {
  const router = useRouter()
  const { redirected } = router.query

  const [requestStatus, setRequestStatus] = useState<string | null>(null)
  const [requiredError, setRequiredError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [recipient, setRecipient] = useState<string>("")

  const validate = async () => {
    if (recipient === "") {
      setRequiredError(true)
    } else {
      setRequiredError(false)
      setLoading(true)

      const req = await sendRestorePasswordEmail({ recipients: [recipient] })
      if (req.status === 201) {
        setRequestStatus("success")
      } else {
        setRequestStatus("error")
      }
      setLoading(false)
    }
  }

  return (
    <Container>
      <h2>Recuperar contraseña</h2>
      {requestStatus === "success" && (
        <div>
          <p>¡Excelente!</p>
          <span>Recibirás un email con instrucciones para recuperarla.</span>
        </div>
      )}

      {redirected === undefined &&
        (requestStatus === null || requestStatus === "error") && (
          <>
            <Space direction="vertical" size={12}>
              <Input
                placeholder="Email"
                status={requiredError ? "error" : ""}
                required
                onChange={e => setRecipient(e.target.value)}
                onPressEnter={validate}
              />
            </Space>
            {requestStatus === "error" && (
              <p className="error">
                La cuenta que intentas recuperar no existe.
              </p>
            )}
            <div className="buttons">
              <Button type="primary" loading={loading} onClick={validate}>
                Enviar mail de recuperación
              </Button>
              <Button
                onClick={() =>
                  router.replace("/login", undefined, { shallow: true })
                }
                icon={<ArrowLeftOutlined />}
              >
                Volver al inicio de sesión
              </Button>
            </div>
          </>
        )}
      {redirected !== undefined && requestStatus === null && (
        <RestorePasswordForm />
      )}
    </Container>
  )
}

export default RestorePassword
