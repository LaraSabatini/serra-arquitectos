import React, { useState } from "react"
import { useRouter } from "next/router"
import { IChangePassword } from "interfaces/User"
import { changePassword } from "@services/auth"
import { Input, Space, Button } from "antd"

function RestorePasswordForm() {
  const router = useRouter()
  const { email, pass } = router.query

  const [requestStatus, setRequestStatus] = useState<string | null>(null)
  const [requiredError, setRequiredError] = useState<boolean>(false)
  const [validateError, setValidateError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [newPassword, setNewPassword] = useState<{
    password: string
    passwordDuplicate: string
  }>({
    password: "",
    passwordDuplicate: "",
  })

  const validateChange = async () => {
    if (newPassword.password === "" || newPassword.passwordDuplicate === "") {
      setRequiredError(true)
    } else if (newPassword.password !== newPassword.passwordDuplicate) {
      setValidateError(true)
    } else {
      setRequiredError(false)
      setValidateError(false)

      setLoading(true)
      const body: IChangePassword = {
        email: email as string,
        password: pass as string,
        newPassword: newPassword.password,
      }

      const req = await changePassword(true, body)
      if (req.status === 201) {
        setRequestStatus("success")
      } else {
        setRequestStatus("error")
      }
      setLoading(false)
    }
  }

  return (
    <>
      {requestStatus === "success" && (
        <>
          <div>
            <p>¡Excelente!</p>
            <span>La contraseña se ha cambiado correctamente.</span>
          </div>
          <Button
            type="primary"
            onClick={() =>
              router.replace("/login", undefined, { shallow: true })
            }
          >
            Iniciar sesión
          </Button>
        </>
      )}
      {requestStatus === "error" && (
        <>
          <div>
            <p>¡UPS!</p>
            <span>Ocurrio un error al intentar cambiar la contraseña.</span>
          </div>
          <Button
            type="primary"
            onClick={() =>
              router.replace("/login?restore_password=true", undefined, {
                shallow: true,
              })
            }
          >
            Intentar nuevamente
          </Button>
        </>
      )}

      {requestStatus === null && (
        <>
          <Space direction="vertical" size={12}>
            <Input.Password
              placeholder="Nueva contraseña"
              status={
                requiredError && newPassword.password === "" ? "error" : ""
              }
              onChange={e =>
                setNewPassword({ ...newPassword, password: e.target.value })
              }
            />
            <Input.Password
              placeholder="Repite la nueva contraseña"
              onPressEnter={validateChange}
              status={
                requiredError && newPassword.passwordDuplicate === ""
                  ? "error"
                  : ""
              }
              onChange={e =>
                setNewPassword({
                  ...newPassword,
                  passwordDuplicate: e.target.value,
                })
              }
            />
            {validateError && (
              <p className="error">Las contraseñas no coinciden</p>
            )}
          </Space>
          <Button type="primary" onClick={validateChange} loading={loading}>
            Confirmar
          </Button>
        </>
      )}
    </>
  )
}

export default RestorePasswordForm
