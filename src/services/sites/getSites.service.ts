import axios from "axios"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const getSites = async (page: number, category: number) => {
  const res = await axios.get(
    `${route}/page=${page}&category=${category}`,
    axiosHeader,
  )
  return res
}
