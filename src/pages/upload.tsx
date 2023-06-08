import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import LayoutView from "@views/Structure"
import UploadSite from "@views/Upload"

function Upload() {
  const router = useRouter()
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [sessionData, setSessionData] = useState<{
    logged: boolean
    token: string
    user: string
  }>({
    logged: false,
    token: "",
    user: "",
  })

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session") as string)

    if (session === null) {
      router.replace("/login")
    } else if (session?.logged) {
      setSessionData(session)
      setIsLogged(true)
    }
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {isLogged && (
        <LayoutView>
          <UploadSite sessionData={sessionData} />
        </LayoutView>
      )}
    </div>
  )
}

export default Upload
