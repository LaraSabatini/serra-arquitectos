import axios from "axios"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const uploadFile = async (folderName: string, formData: any) => {
  const res = await axios.post(
    `${route}/folderName=${folderName}`,
    formData,
    axiosHeader,
  )
  return res
}
