import axios from "axios"
import { IChangePassword } from "interfaces/User"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const changePassword = async (
  encrypted: boolean,
  body: IChangePassword,
) => {
  try {
    const res = await axios.put(
      `${route}/change-password&encrypted=${encrypted}`,
      body,
      axiosHeader,
    )
    return res.data
  } catch (err) {
    return err
  }
}
