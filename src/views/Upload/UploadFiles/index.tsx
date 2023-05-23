import React, { useState, useRef, ChangeEvent, useContext } from "react"
import { UploadSiteContext } from "@contexts/SiteUpload"
import { IFiles } from "@interfaces/Images"
import { Modal, Button, Tooltip } from "antd"
import {
  InboxOutlined,
  DeleteFilled,
  PaperClipOutlined,
} from "@ant-design/icons"
import {
  FilesContent,
  DraggableArea,
  Gallery,
  ImageContainer,
  ModalContent,
  Images,
  ImageInCarousel,
} from "./styles"

function Files() {
  const { images, setImages } = useContext(UploadSiteContext)

  const [currentImage, setCurrentImage] = useState<IFiles | null>(null)

  const hiddenImageInput = useRef<HTMLInputElement>(null)
  const drop = React.useRef(null)

  const removeImage = () => {
    const filterImages = images.filter(img => img !== currentImage)

    setImages(filterImages)
    setCurrentImage(filterImages.length ? filterImages[0] : null)
  }

  const onUpload = (files: File[]) => {
    const filesCleanedArray: IFiles[] = []

    files.forEach(file => {
      const originalName = file.name

      const fileRenamed = originalName.replaceAll(" ", "-")

      const splitName = fileRenamed.split(".")

      const extension = splitName[fileRenamed.split(".").length - 1]

      let finalName: string = fileRenamed
      if (splitName.length > 2) {
        finalName = `${splitName.slice(0, -1).join("-")}.${extension}`
      }

      const newFile = new File([file], finalName, {
        type: file.type,
      })

      filesCleanedArray.push({
        name: finalName,
        uri: URL.createObjectURL(file),
        file: newFile,
      })
    })

    setImages([...images, ...filesCleanedArray])
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const arr = Array.from(e.target.files)
      onUpload(arr)
    }
  }

  const handleDragOver = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: any) => {
    e.preventDefault()
    e.stopPropagation()

    const { files } = e.dataTransfer
    const arr: File[] = Array.from(files)

    if (files && files.length) {
      onUpload(arr)
    }
  }

  const clickInput = () => {
    if (hiddenImageInput.current !== null) {
      hiddenImageInput.current.click()
    }
  }

  return (
    <FilesContent>
      <DraggableArea
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        ref={drop}
        onClick={clickInput}
      >
        <InboxOutlined style={{ fontSize: "50px" }} />
        <span className="info">
          Clickea o arrastra los archivos hasta este sector
        </span>
        <input
          ref={hiddenImageInput}
          style={{ display: "none" }}
          type="file"
          multiple
          onChange={e => handleFileChange(e)}
          accept="image/png, image/jpeg, image/jpg"
        />
      </DraggableArea>
      <Gallery>
        {images.length > 0 &&
          images.map(img => (
            <ImageContainer key={img.name} onClick={() => setCurrentImage(img)}>
              <img alt={img.name} src={img.uri} />
            </ImageContainer>
          ))}
      </Gallery>
      <Modal
        open={currentImage !== null}
        onCancel={() => setCurrentImage(null)}
        footer={[
          <Tooltip key="delete" title="Eliminar imagen">
            <Button icon={<DeleteFilled />} danger onClick={removeImage} />
          </Tooltip>,
        ]}
      >
        <ModalContent>
          <Images>
            <div className="current">
              {currentImage !== null && (
                <img src={currentImage?.uri} alt={currentImage.uri} />
              )}
            </div>
            <div className="gallery">
              {images.map(img => (
                <ImageInCarousel
                  key={img.name}
                  onClick={() => setCurrentImage(img)}
                  selected={currentImage?.name === img.name}
                  src={img?.uri}
                  alt={img.uri}
                />
              ))}
            </div>
          </Images>
          <p className="img-title">
            <PaperClipOutlined />
            {currentImage?.name}
          </p>
        </ModalContent>
      </Modal>
    </FilesContent>
  )
}

export default Files
