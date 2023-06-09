import axios from "axios"
import { route } from "./index"

export const createFolder = async (
  body: { folderName: string },
  authToken: string,
) => {
  const axiosHeader = {
    headers: {
      "Content-Type": "application/json",
      "Auth-Token": `${authToken}`,
    },
  }

  try {
    const res = await axios.post(`${route}/new-folder`, body, axiosHeader)
    return res
  } catch (err: any) {
    return err.response
  }
}
