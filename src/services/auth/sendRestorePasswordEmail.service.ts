import axios from "axios"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const sendRestorePasswordEmail = async (body: {
  recipients: string[]
}) => {
  const res = await axios.post(`${route}/restore-password`, body, axiosHeader)
  return res
}
