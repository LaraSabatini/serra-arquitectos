import { ISite } from "@interfaces/Site"

let sitesCache: ISite[] | null = null

const loadSites = async (): Promise<ISite[]> => {
  if (sitesCache) return sitesCache
  const res = await fetch("/data/sites.json")
  const data: ISite[] = await res.json()
  sitesCache = data.sort((a, b) => parseInt(b.code, 10) - parseInt(a.code, 10))
  return sitesCache
}

export const getSites = async (_page: number, category: string) => {
  const sites = await loadSites()
  const filtered = sites.filter(s => {
    const types = Array.isArray(s.type) ? s.type : []
    const hasImages = Array.isArray(s.images) && s.images.length > 0
    return (
      hasImages && types.some(t => t.toLowerCase() === category.toLowerCase())
    )
  })
  return { data: { data: filtered } }
}

export const getAllSites = async () => {
  const sites = await loadSites()
  return { data: { data: sites } }
}

export const getSitesForCarousel = async () => {
  const sites = await loadSites()
  return { data: { data: sites } }
}

export const getSiteById = async (id: number) => {
  const sites = await loadSites()
  const found = sites.filter(s => s.id === id)
  return { data: { data: found } }
}

export const getSiteByCode = async (code: string) => {
  const sites = await loadSites()
  const found = sites.filter(s => s.code === code)
  return { data: { data: found } }
}
