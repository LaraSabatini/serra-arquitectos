import axios from "axios"
import { ISignIn } from "interfaces/User"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const signIn = async (body: ISignIn) => {
  try {
    const res = await axios.post(`${route}/signIn`, body, axiosHeader)
    return res.data
  } catch (err) {
    return err
  }
}
