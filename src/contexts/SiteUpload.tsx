import { createContext, useState, useMemo } from "react"
import { IUploadContext } from "@interfaces/UploadContext"
import { ISite } from "@interfaces/Site"
import { IFiles } from "@interfaces/Images"

const defaultSite = {
  title: "",
  code: "",
  year: "2023",
  principal: "",
  type: [],
  location: "",
  tasks: [],
  description: "",
  size: 0,
  images: [],
  otherFields: [],
}

export const UploadSiteContext = createContext<IUploadContext>({
  newSite: defaultSite,
  setNewSite: () => {},
  images: [],
  setImages: () => {},
  tasks: [],
  setTasks: () => {},
})

function UploadSiteProvider({ children }: any) {
  const [newSite, setNewSite] = useState<ISite>(defaultSite)

  const [images, setImages] = useState<IFiles[]>([])

  const [tasks, setTasks] = useState<{ id: number; text: string }[]>([])

  const value: any = useMemo(
    () => ({
      newSite,
      setNewSite,
      images,
      setImages,
      tasks,
      setTasks,
    }),
    [newSite, images, tasks],
  )

  return (
    <UploadSiteContext.Provider value={value}>
      {children}
    </UploadSiteContext.Provider>
  )
}

export default UploadSiteProvider
