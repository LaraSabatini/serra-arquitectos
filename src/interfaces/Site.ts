export interface ISite {
  id?: number
  code: string
  year: number
  principal: string
  type: string[]
  location: string
  tasks: string[] | string
  description: string
  size: number
  images: string[] | string
}
