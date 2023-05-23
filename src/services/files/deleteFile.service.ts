import axios from "axios"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const deleteFile = async (fileRoute: string) => {
  const res = await axios.delete(`${route}/fileRoute=${fileRoute}`, axiosHeader)
  return res
}
