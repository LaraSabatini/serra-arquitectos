import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import LoginView from "@views/LogIn"
import RestorePasswordView from "@views/RestorePassword"

function Login() {
  const router = useRouter()

  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session") as string)

    if (session?.logged) {
      setIsLogged(true)
      router.replace("/upload")
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {!isLogged && (
        <>
          {router.query.restore_password === "true" && <RestorePasswordView />}
          {router.query.restore_password === undefined && <LoginView />}
        </>
      )}
    </div>
  )
}
export default Login
