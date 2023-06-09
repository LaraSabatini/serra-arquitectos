import axios from "axios"
import { ISite } from "interfaces/Site"
import { route } from "./index"

export const uploadSite = async (body: ISite, authToken: string) => {
  const axiosHeader = {
    headers: {
      "Content-Type": "application/json",
      "Auth-Token": `${authToken}`,
    },
  }

  try {
    const res = await axios.post(`${route}`, body, axiosHeader)
    return res
  } catch (err: any) {
    return err.response
  }
}

export const editSite = async (body: ISite, authToken: string) => {
  const axiosHeader = {
    headers: {
      "Content-Type": "application/json",
      "Auth-Token": `${authToken}`,
    },
  }

  const res = await axios.put(`${route}`, body, axiosHeader)
  return res
}
