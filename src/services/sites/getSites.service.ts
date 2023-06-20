import axios from "axios"
import axiosHeader from "../axiosHeader"
import { route } from "./index"

export const getSites = async (page: number, category: string) => {
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

export const getAllSites = async () => {
  try {
    const res = await axios.get(`${route}/all`, axiosHeader)
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

export const getSiteById = async (id: number) => {
  try {
    const res = await axios.get(`${route}/id=${id}`, axiosHeader)
    return res
  } catch (err: any) {
    return err.response
  }
}

export const getSiteByCode = async (code: string) => {
  try {
    const res = await axios.get(`${route}/code=${code}`, axiosHeader)
    return res
  } catch (err: any) {
    return err.response
  }
}
