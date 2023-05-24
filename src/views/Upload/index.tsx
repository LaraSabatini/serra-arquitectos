import React, { useState, useContext } from "react"
import { useRouter } from "next/router"
import { UploadSiteContext } from "@contexts/SiteUpload"
import { createFolder, deleteFolder, uploadFile } from "@services/files"
import { uploadSite } from "@services/sites"
import sections from "@data/menu"
import { ISite } from "interfaces/Site"
import {
  Input,
  DatePicker,
  Select,
  Button,
  Space,
  Tooltip,
  Form,
  Modal,
} from "antd"
import { PlusOutlined, CloseOutlined } from "@ant-design/icons"
import dayjs from "dayjs"
import { addTask } from "@helpers/index"
import Files from "./UploadFiles"
import {
  FormContainer,
  InputContainer,
  Label,
  Content,
  List,
  Buttons,
  ModalInputContainer,
  ModaContent,
  DynamicInfo,
} from "./styles"

function UploadView({
  sessionData,
}: {
  sessionData: {
    logged: boolean
    token: string
    user: string
  }
}) {
  const router = useRouter()
  const { newSite, setNewSite, tasks, setTasks, images } =
    useContext(UploadSiteContext)

  const success = () => {
    Modal.success({
      onOk: () => router.reload(),
      content: "La obra se ha subido con éxito.",
    })
  }

  const { TextArea } = Input
  const [form] = Form.useForm()
  const [dynamicForm] = Form.useForm()
  const [step, setStep] = useState(1)
  const [currentTask, setCurrentTask] = useState<string>("")
  const [requiredError, setRequiredError] = useState<boolean>(false)
  const [duplicationError, setDuplicationError] = useState<boolean>(false)
  const [folderCreated, setFolderCreated] = useState<boolean>(false)

  const [addMoreInfo, setAddMoreInfo] = useState<boolean>(false)
  const [currentDynamicInfo, setCurrentDynamicInfo] = useState<{
    type: string
    value: string
  }>({
    type: "",
    value: "",
  })

  const options = sections[0].subsections.map(item => ({
    id: item.id,
    value: item.name,
  }))

  const cleanStates = async () => {
    form.resetFields()
    dynamicForm.resetFields()
    setNewSite({
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
    })
    setTasks([])
    setCurrentTask("")
    setRequiredError(false)

    if (folderCreated) {
      await deleteFolder(`OP-${newSite.code}`, sessionData.token)
    }
  }

  const validateInputs = () => {
    return (
      newSite.code === "" ||
      newSite.principal === "" ||
      newSite.type.length === 0 ||
      newSite.location === ""
    )
  }

  const nextStep = async () => {
    if (!folderCreated) {
      const validation = validateInputs()

      setRequiredError(validation)

      if (!validation) {
        const req: any = await createFolder(
          { folderName: `OP-${newSite.code}` },
          sessionData.token,
        )
        if (req.data.status !== undefined && req.data.status === 201) {
          setFolderCreated(true)
          setDuplicationError(false)
          setStep(2)
        } else {
          setDuplicationError(true)
        }
      }
    } else {
      setStep(2)
    }
  }

  const createSite = async () => {
    let createSiteSuccess = false
    const tasksArray: string[] = tasks.map(task => task.text)

    const imagesArray: string[] = images.map(
      image =>
        `${process.env.NEXT_PUBLIC_API_URL}/OP-${newSite.code}/${image.name}`,
    )

    const filesArray = images.map(image => image.file)

    if (filesArray.length) {
      const req = await uploadFile(
        `OP-${newSite.code}`,
        filesArray,
        sessionData.token,
      )
      createSiteSuccess = req.data.status === 201
    }

    const body: ISite = {
      ...newSite,
      tasks: tasksArray.length === 0 ? [""] : JSON.stringify(tasksArray),
      images: imagesArray.length === 0 ? [""] : JSON.stringify(imagesArray),
      otherFields: JSON.stringify(newSite.otherFields),
      type: JSON.stringify(newSite.type),
    }

    const uploadReq = await uploadSite(body, sessionData.token)
    createSiteSuccess = uploadReq.data.status === 201

    if (createSiteSuccess) success()
  }

  return (
    <FormContainer>
      <h2>Subir obra nueva</h2>
      {step === 1 ? (
        <Content>
          <Form form={form} autoComplete="off">
            <div className="horizontal">
              <Form.Item name="title">
                <InputContainer>
                  <Label>Nombre de obra</Label>
                  <Input
                    status={
                      (requiredError && newSite.title === "") ||
                      duplicationError
                        ? "error"
                        : ""
                    }
                    defaultValue={newSite.title}
                    style={{ width: "250px" }}
                    onChange={e =>
                      setNewSite({ ...newSite, title: e.target.value })
                    }
                  />
                </InputContainer>
              </Form.Item>
              <Form.Item name="code">
                <InputContainer>
                  <Label>Codigo de obra</Label>
                  <Input
                    status={
                      (requiredError && newSite.code === "") || duplicationError
                        ? "error"
                        : ""
                    }
                    defaultValue={newSite.code}
                    prefix="OP - "
                    style={{ width: "120px" }}
                    onChange={e =>
                      setNewSite({ ...newSite, code: e.target.value })
                    }
                  />
                </InputContainer>
              </Form.Item>
              <Form.Item name="year">
                <InputContainer>
                  <Label>Año</Label>
                  <DatePicker
                    defaultValue={dayjs(`${newSite.year}`, "YYYY")}
                    placeholder=""
                    onChange={(date, dateString) => {
                      setNewSite({ ...newSite, year: dateString })
                    }}
                    picker="year"
                  />
                </InputContainer>
              </Form.Item>
            </div>
            <div className="horizontal">
              <Form.Item name="principal">
                <InputContainer>
                  <Label>Comitente</Label>
                  <Input
                    status={
                      requiredError && newSite.principal === "" ? "error" : ""
                    }
                    defaultValue={newSite.principal}
                    style={{ width: "267px" }}
                    onChange={e =>
                      setNewSite({ ...newSite, principal: e.target.value })
                    }
                  />
                </InputContainer>
              </Form.Item>
              <Form.Item name="type">
                <InputContainer>
                  <Label>Tipo de obra</Label>
                  <Select
                    status={
                      requiredError && newSite.type.length === 0 ? "error" : ""
                    }
                    mode="multiple"
                    defaultValue={newSite.type}
                    allowClear
                    style={{ width: "285px" }}
                    onChange={e => setNewSite({ ...newSite, type: e })}
                    options={options}
                  />
                </InputContainer>
              </Form.Item>
            </div>
            <div className="horizontal">
              <Form.Item name="location">
                <InputContainer>
                  <Label>Ubicacion</Label>
                  <Input
                    status={
                      requiredError && newSite.location === "" ? "error" : ""
                    }
                    defaultValue={newSite.location}
                    onChange={e =>
                      setNewSite({ ...newSite, location: e.target.value })
                    }
                    style={{ width: "267px" }}
                  />
                </InputContainer>
              </Form.Item>
              <Form.Item name="size">
                <InputContainer>
                  <Label>Superficie total</Label>
                  <Input
                    defaultValue={newSite.size}
                    onChange={e =>
                      setNewSite({
                        ...newSite,
                        size: parseInt(e.target.value, 10),
                      })
                    }
                    suffix="m²"
                    style={{ width: "120px" }}
                  />
                </InputContainer>
              </Form.Item>
            </div>

            <div className="vertical">
              <Form.Item name="tasks">
                <InputContainer>
                  <Label>Tareas realizadas</Label>
                  <Space.Compact style={{ width: "580px" }}>
                    <Input
                      defaultValue={currentTask}
                      onChange={e => setCurrentTask(e.target.value)}
                      onPressEnter={() => {
                        setTasks(addTask(tasks, currentTask))
                        setCurrentTask("")
                      }}
                    />
                    <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      onClick={() => {
                        setTasks(addTask(tasks, currentTask))
                        setCurrentTask("")
                      }}
                    />
                  </Space.Compact>
                </InputContainer>
              </Form.Item>

              <List>
                <Label>Tareas:</Label>
                {tasks.length > 0 &&
                  tasks.map(task => (
                    <p className="item" key={task.id}>
                      • {task.text}
                      <button
                        type="button"
                        onClick={() =>
                          setTasks(tasks.filter(item => item !== task))
                        }
                      >
                        <Tooltip title="Eliminar tarea">
                          <CloseOutlined />
                        </Tooltip>
                      </button>
                    </p>
                  ))}
              </List>
            </div>
            <Form.Item name="description">
              <InputContainer>
                <Label>Descripcion</Label>
                <TextArea
                  rows={4}
                  defaultValue={newSite.description}
                  onChange={e =>
                    setNewSite({ ...newSite, description: e.target.value })
                  }
                  required
                  onPressEnter={() => {
                    setNewSite({
                      ...newSite,
                      description: `${newSite.description}\n`,
                    })
                  }}
                />
              </InputContainer>
            </Form.Item>
          </Form>
          {duplicationError && (
            <p className="error">
              Ya existe una obra con el codigo seleccionado.
            </p>
          )}
        </Content>
      ) : (
        <Files />
      )}
      <Buttons>
        <Button onClick={step === 1 ? cleanStates : () => setStep(1)}>
          {step === 1 ? "Cancelar" : "Volver"}
        </Button>
        <Button onClick={() => setAddMoreInfo(true)} icon={<PlusOutlined />}>
          Agregar información dinámica
        </Button>
        <Button
          onClick={() => {
            if (step === 1) {
              if (!duplicationError) {
                nextStep()
              } else {
                setStep(2)
                setFolderCreated(true)
                setDuplicationError(false)
              }
            } else {
              createSite()
            }
          }}
          type="primary"
        >
          {!duplicationError
            ? "Siguiente"
            : "Subir fotos a la carpeta existente"}
        </Button>
      </Buttons>
      <Modal
        title="Agregar información dinámica"
        open={addMoreInfo}
        onCancel={() => setAddMoreInfo(false)}
        footer={[]}
      >
        <ModaContent>
          <Form form={dynamicForm} autoComplete="off">
            <ModalInputContainer>
              <InputContainer>
                <Label>Dato</Label>
                <Form.Item name="data">
                  <Input
                    defaultValue={currentDynamicInfo.type}
                    onChange={e =>
                      setCurrentDynamicInfo({
                        type: e.target.value,
                        value: currentDynamicInfo.value,
                      })
                    }
                  />
                </Form.Item>
              </InputContainer>
              <InputContainer>
                <Label>Valor</Label>
                <Form.Item name="value">
                  <Input
                    defaultValue={currentDynamicInfo.value}
                    onChange={e =>
                      setCurrentDynamicInfo({
                        type: currentDynamicInfo.type,
                        value: e.target.value,
                      })
                    }
                  />
                </Form.Item>
              </InputContainer>
              <Button
                icon={<PlusOutlined />}
                onClick={() => {
                  const originalArray = newSite.otherFields as {
                    type: string
                    value: string
                  }[]
                  const newArray = [...originalArray, currentDynamicInfo]
                  setNewSite({
                    ...newSite,
                    otherFields: newArray,
                  })
                  setCurrentDynamicInfo({
                    type: "",
                    value: "",
                  })
                  dynamicForm.resetFields()
                }}
              />
            </ModalInputContainer>
          </Form>
          <div>
            {newSite.otherFields.length > 0 &&
              typeof newSite.otherFields !== "string" &&
              newSite.otherFields.map(
                (field: { type: string; value: string }, index: number) => (
                  <DynamicInfo key={field.type}>
                    <p>
                      <b>Dato:</b> {field.type}
                    </p>
                    <p>
                      <b>Valor:</b> {field.value}
                    </p>
                    <Button
                      icon={<CloseOutlined style={{ fontSize: "10px" }} />}
                      size="small"
                      danger
                      onClick={() => {
                        if (newSite.otherFields.length > 1) {
                          const originalArray = newSite.otherFields as {
                            type: string
                            value: string
                          }[]
                          const newArray = originalArray.splice(index, 1)
                          setNewSite({
                            ...newSite,
                            otherFields: newArray,
                          })
                        } else {
                          setNewSite({
                            ...newSite,
                            otherFields: [],
                          })
                        }
                      }}
                    />
                  </DynamicInfo>
                ),
              )}
          </div>
        </ModaContent>
      </Modal>
    </FormContainer>
  )
}

export default UploadView
