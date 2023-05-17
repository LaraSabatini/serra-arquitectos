import axios from "axios"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const sendRestorePasswordEmail = async (body: {
  recipients: string[]
}) => {
  try {
    const res = await axios.post(`${route}/restore-password`, body, axiosHeader)
    return res.data
  } catch (err) {
    return err
  }
}
