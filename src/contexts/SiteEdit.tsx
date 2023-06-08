import { createContext, useState, useMemo } from "react"
import { IEditContext } from "@interfaces/EditContext"
import { ISite } from "@interfaces/Site"
import { IFiles } from "@interfaces/Images"

export const EditSiteContext = createContext<IEditContext>({
  siteSelected: null,
  setSiteSelected: () => {},
  siteEdited: null,
  setSiteEdited: () => {},
  images: [],
  setImages: () => {},
  tasks: [],
  setTasks: () => {},
})

function EditSiteProvider({ children }: any) {
  const [siteSelected, setSiteSelected] = useState<ISite | null>(null)
  const [siteEdited, setSiteEdited] = useState<ISite | null>(null)

  const [images, setImages] = useState<IFiles[]>([])

  const [tasks, setTasks] = useState<string[]>([])

  const value: any = useMemo(
    () => ({
      siteSelected,
      setSiteSelected,
      siteEdited,
      setSiteEdited,
      images,
      setImages,
      tasks,
      setTasks,
    }),
    [siteSelected, siteEdited, images, tasks],
  )

  return (
    <EditSiteContext.Provider value={value}>
      {children}
    </EditSiteContext.Provider>
  )
}

export default EditSiteProvider
