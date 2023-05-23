import axios from "axios"
import { route } from "./index"

export const deleteFolder = async (folderName: string, authToken: string) => {
  const axiosHeader = {
    headers: {
      "Content-Type": "application/json",
      "Auth-Token": `${authToken}`,
    },
  }

  try {
    const res = await axios.delete(
      `${route}/folderName=${folderName}`,
      axiosHeader,
    )
    return res
  } catch (err: any) {
    return err.response
  }
}
