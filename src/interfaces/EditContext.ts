import { IFiles } from "@interfaces/Images"
import { ISite } from "./Site"

export interface IEditContext {
  siteSelected: null | ISite
  setSiteSelected(siteSelected: ISite | null): void
  siteEdited: null | ISite
  setSiteEdited(siteEdited: ISite | null): void
  images: IFiles[]
  setImages(images: IFiles[]): void
  tasks: string[]
  setTasks(tasks: string[]): void
}
