import axios from "axios"
import { ISignUp } from "interfaces/User"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const signUp = async (body: ISignUp) => {
  const res = await axios.post(`${route}/signUp`, body, axiosHeader)
  return res
}
