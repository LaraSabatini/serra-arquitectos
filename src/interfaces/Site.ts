export interface ISite {
  id?: number
  title: string
  code: string
  year: string
  principal: string
  type: string[] | string
  location: string
  tasks: string[] | string
  description: string
  size: number
  images: string[] | string
  otherFields: { type: string; value: string }[] | string
}
