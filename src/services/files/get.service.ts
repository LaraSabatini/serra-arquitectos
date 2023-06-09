import axios from "axios"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const getFile = async (
  folderName: string,
  file_name: string,
  file_extension: string,
) => {
  const res = await axios.get(
    `${route}/folderName=${folderName}&file_name=${file_name}&file_extension=${file_extension}`,
    axiosHeader,
  )
  return res
}
