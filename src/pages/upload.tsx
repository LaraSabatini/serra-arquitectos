import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

function Upload() {
  const router = useRouter()
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session") as string)

    if (session === null) {
      router.replace("/login")
    } else if (session?.logged) {
      setIsLogged(true)
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{isLogged && <div>upload</div>}</div>
}

export default Upload
