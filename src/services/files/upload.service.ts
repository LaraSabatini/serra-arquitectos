import axios from "axios"
import { route } from "./index"

export const uploadFile = async (
  folderName: string,
  files: File[],
  authToken: string,
) => {
  const formData = new FormData()
  files.forEach(file => {
    formData.append("files", file)
  })

  const axiosHeader = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Auth-Token": `${authToken}`,
    },
  }

  try {
    const res = await axios.post(
      `${route}/folderName=${folderName}`,
      formData,
      axiosHeader,
    )
    return res
  } catch (err: any) {
    return err.response
  }
}
