import axios from "axios"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const getSites = async (page: number, category: number) => {
  try {
    const res = await axios.get(
      `${route}/page=${page}&category=${category}`,
      axiosHeader,
    )
    return res
  } catch (err: any) {
    return err.response
  }
}

export const getSitesForCarousel = async () => {
  try {
    const res = await axios.get(`${route}`, axiosHeader)
    return res
  } catch (err: any) {
    return err.response
  }
}
