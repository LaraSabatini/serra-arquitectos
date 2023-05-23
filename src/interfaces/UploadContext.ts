import { IFiles } from "@interfaces/Images"
import { ISite } from "./Site"

export interface IUploadContext {
  newSite: ISite
  setNewSite(newSite: ISite): void
  images: IFiles[]
  setImages(images: IFiles[]): void
  tasks: { id: number; text: string }[]
  setTasks(tasks: { id: number; text: string }[]): void
}
