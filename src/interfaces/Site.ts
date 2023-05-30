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

export interface ISiteCard {
  id: number
  title: string
  code: string
  type: string[]
  location: string
  portrait: string
}
