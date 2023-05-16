import axios from "axios"
import { ISite } from "interfaces/Site"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const uploadSite = async (body: ISite) => {
  const res = await axios.post(`${route}`, body, axiosHeader)
  return res
}
