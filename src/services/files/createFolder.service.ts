import axios from "axios"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const createFolder = async (body: { folderName: string }) => {
  const res = await axios.post(`${route}/new-folder`, body, axiosHeader)
  return res
}
