import React, { useState } from "react"
import { signIn } from "@services/auth"
import { ISignIn } from "@interfaces/User"
import { useRouter } from "next/router"
import { Input, Space, Button } from "antd"
import { Container } from "./styles"

function LoginView() {
  const router = useRouter()
  const [logInData, setLoginData] = useState<ISignIn>({
    email: "",
    password: "",
  })
  const [requiredError, setRequiredError] = useState<boolean>(false)
  const [validationError, setValidationError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const validate = async () => {
    if (logInData.email === "" || logInData.password === "") {
      setRequiredError(true)
    } else {
      setLoading(true)
      setRequiredError(false)
      setValidationError(false)
      const req: any = await signIn(logInData)

      if (req.data.status === 200) {
        localStorage.setItem(
          "session",
          JSON.stringify({
            user: logInData.email,
            logged: true,
            token: req.headers.get("auth-token"),
          }),
        )
        router.push("/upload")
      } else {
        setValidationError(true)
      }
      setLoading(false)
    }
  }

  return (
    <Container>
      <h2>Iniciar Sesión</h2>
      <Space direction="vertical" size={12}>
        <Input
          placeholder="Email"
          required
          status={requiredError && logInData.email === "" ? "error" : ""}
          onChange={e => setLoginData({ ...logInData, email: e.target.value })}
        />
        <Input.Password
          placeholder="Contraseña"
          required
          status={requiredError && logInData.password === "" ? "error" : ""}
          onChange={e =>
            setLoginData({ ...logInData, password: e.target.value })
          }
          onPressEnter={validate}
        />
      </Space>
      {validationError && (
        <p className="error">El usuario y/o contraseña son incorrectos</p>
      )}
      <button
        type="button"
        className="url"
        onClick={() => {
          router.push(
            {
              pathname: "/login",
              query: { ...router.query, restore_password: "true" },
            },
            undefined,
            {},
          )
        }}
      >
        ¿Olvidaste tu contraseña? Recuperar
      </button>
      <Button type="primary" onClick={validate} loading={loading}>
        Ingresar
      </Button>
    </Container>
  )
}

export default LoginView
