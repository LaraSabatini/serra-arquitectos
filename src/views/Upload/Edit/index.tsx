import React, { useState, useContext } from "react"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import { EditSiteContext } from "@contexts/SiteEdit"
import { uploadFile } from "@services/files"
import sections from "@data/menu"
import { ISite } from "interfaces/Site"
import { editSite, getSiteByCode } from "@services/sites/index"
import {
  Input,
  DatePicker,
  Select,
  Button,
  Tooltip,
  Form,
  Space,
  Modal,
} from "antd"
import { PlusOutlined, CloseOutlined } from "@ant-design/icons"
import Files from "./Files"
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
} from "../styles"
import { SearchContainer, ErrorMessage } from "./styles"

function EditSiteView({
  sessionData,
}: {
  sessionData: {
    logged: boolean
    token: string
    user: string
  }
}) {
  const router = useRouter()

  const { Search, TextArea } = Input

  const {
    siteSelected,
    setSiteSelected,
    siteEdited,
    setSiteEdited,
    tasks,
    setTasks,
    images,
  } = useContext(EditSiteContext)

  const [emptySearch, setEmptySearch] = useState<boolean>(false)

  const [addMoreInfo, setAddMoreInfo] = useState<boolean>(false)
  const [currentDynamicInfo, setCurrentDynamicInfo] = useState<{
    type: string
    value: string
  }>({
    type: "",
    value: "",
  })

  const onSearch = async (value: string) => {
    setEmptySearch(false)
    const req = await getSiteByCode(value)
    if (req.data.data.length) {
      const otherFields =
        req.data.data[0].otherFields === ""
          ? []
          : JSON.parse(req.data.data[0].otherFields)

      const tasksList =
        req.data.data[0].tasks === "" ? [] : JSON.parse(req.data.data[0].tasks)

      const originalImages =
        req.data.data[0].images === ""
          ? []
          : JSON.parse(req.data.data[0].images)

      setSiteSelected({
        ...req.data.data[0],
        originalImages,
        tasks: tasksList,
        type: JSON.parse(req.data.data[0].type),
        otherFields,
      })
      setSiteEdited({
        ...req.data.data[0],
        originalImages,
        tasks: tasksList,
        type: JSON.parse(req.data.data[0].type),
        otherFields,
      })
      setCurrentDynamicInfo(otherFields)
      setTasks(tasksList)
    } else {
      setEmptySearch(true)
    }
  }

  const [step, setStep] = useState(1)
  const [form] = Form.useForm()
  const [dynamicForm] = Form.useForm()
  const [requiredError, setRequiredError] = useState<boolean>(false)
  const [currentTask, setCurrentTask] = useState<string>("")

  const options = sections[0].subsections.map(item => ({
    id: item.id,
    value: item.name,
  }))

  const cleanStates = async () => {
    form.resetFields()
    dynamicForm.resetFields()
    setSiteSelected(null)
    setSiteEdited(null)
    setEmptySearch(false)
    setRequiredError(false)
  }

  const validateInputs = () => {
    return (
      siteEdited?.code === "" ||
      siteEdited?.principal === "" ||
      siteEdited?.type.length === 0 ||
      siteEdited?.location === ""
    )
  }

  const nextStep = async () => {
    const validation = validateInputs()

    setRequiredError(validation)

    if (!validation) {
      setStep(2)
    } else {
      setRequiredError(true)
    }
  }

  const success = () => {
    Modal.success({
      onOk: () => router.reload(),
      content: "La obra se ha editado con éxito.",
    })
  }

  const editSiteAction = async () => {
    if (siteEdited !== null) {
      let updateSiteSuccess = false

      const filterNewImages = images.filter(img => img.new)

      const imagesArray: string[] = filterNewImages.map(
        image =>
          `${process.env.NEXT_PUBLIC_API_URL}/OP-${siteEdited.code}/${image.name}`,
      )

      const filesArray = filterNewImages.map(image => image.file)

      if (filesArray.length) {
        const req = await uploadFile(
          `OP-${siteEdited.code}`,
          filesArray as File[],
          sessionData.token,
        )
        updateSiteSuccess = req.data.status === 201
      }
      const body: ISite = {
        ...siteEdited,
        tasks: tasks.length === 0 ? [""] : JSON.stringify(tasks),
        images: imagesArray.length === 0 ? [""] : JSON.stringify(imagesArray),
        otherFields: JSON.stringify(siteEdited.otherFields),
        type: JSON.stringify(siteEdited.type),
      }
      const updateReq = await editSite(body, sessionData.token)

      updateSiteSuccess = updateReq.data.status === 201

      if (updateSiteSuccess) success()
    }
  }

  return (
    <FormContainer>
      <h2>Editar obra</h2>
      <SearchContainer>
        <Search
          placeholder="Buscar por codigo de obra"
          onSearch={onSearch}
          style={{ width: 300 }}
        />
      </SearchContainer>
      {emptySearch && (
        <ErrorMessage>No hay una obra con ese codigo</ErrorMessage>
      )}
      {siteSelected !== null && siteEdited !== null && (
        <div>
          {step === 1 ? (
            <Content>
              <Form form={form} autoComplete="off">
                <div className="horizontal">
                  <Form.Item name="title">
                    <InputContainer>
                      <Label>Nombre de obra</Label>
                      <Input
                        status={
                          requiredError && siteEdited.title === ""
                            ? "error"
                            : ""
                        }
                        defaultValue={siteEdited.title}
                        style={{ width: "250px" }}
                        onChange={e =>
                          setSiteEdited({
                            ...siteEdited,
                            title: e.target.value,
                          })
                        }
                      />
                    </InputContainer>
                  </Form.Item>
                  <Form.Item name="code">
                    <InputContainer>
                      <Label>Codigo de obra</Label>
                      <Input
                        status={
                          requiredError && siteEdited.code === "" ? "error" : ""
                        }
                        defaultValue={siteEdited.code}
                        prefix="OP - "
                        style={{ width: "120px" }}
                        onChange={e =>
                          setSiteEdited({ ...siteEdited, code: e.target.value })
                        }
                      />
                    </InputContainer>
                  </Form.Item>
                  <Form.Item name="year">
                    <InputContainer>
                      <Label>Año</Label>
                      <DatePicker
                        defaultValue={dayjs(`${siteEdited.year}`, "YYYY")}
                        placeholder=""
                        onChange={(date, dateString) => {
                          setSiteEdited({ ...siteEdited, year: dateString })
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
                          requiredError && siteEdited.principal === ""
                            ? "error"
                            : ""
                        }
                        defaultValue={siteEdited.principal}
                        style={{ width: "267px" }}
                        onChange={e =>
                          setSiteEdited({
                            ...siteEdited,
                            principal: e.target.value,
                          })
                        }
                      />
                    </InputContainer>
                  </Form.Item>
                  <Form.Item name="type">
                    <InputContainer>
                      <Label>Tipo de obra</Label>
                      <Select
                        status={
                          requiredError && siteEdited.type.length === 0
                            ? "error"
                            : ""
                        }
                        mode="multiple"
                        defaultValue={siteEdited.type}
                        allowClear
                        style={{ width: "285px" }}
                        onChange={e =>
                          setSiteEdited({ ...siteEdited, type: e })
                        }
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
                          requiredError && siteEdited.location === ""
                            ? "error"
                            : ""
                        }
                        defaultValue={siteEdited.location}
                        onChange={e =>
                          setSiteEdited({
                            ...siteEdited,
                            location: e.target.value,
                          })
                        }
                        style={{ width: "267px" }}
                      />
                    </InputContainer>
                  </Form.Item>
                  <Form.Item name="size">
                    <InputContainer>
                      <Label>Superficie total</Label>
                      <Input
                        defaultValue={siteEdited.size}
                        onChange={e =>
                          setSiteEdited({
                            ...siteEdited,
                            size: e.target.value,
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
                            setTasks([...tasks, currentTask])
                            setCurrentTask("")
                          }}
                        />
                        <Button
                          type="primary"
                          icon={<PlusOutlined />}
                          onClick={() => {
                            setTasks([...tasks, currentTask])
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
                        <p className="item" key={task}>
                          • {task}
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
                      defaultValue={siteEdited.description}
                      onChange={e =>
                        setSiteEdited({
                          ...siteEdited,
                          description: e.target.value,
                        })
                      }
                      required
                      onPressEnter={() => {
                        setSiteEdited({
                          ...siteEdited,
                          description: `${siteEdited.description}\n`,
                        })
                      }}
                    />
                  </InputContainer>
                </Form.Item>
              </Form>
            </Content>
          ) : (
            <Files />
          )}
        </div>
      )}
      {siteEdited !== null && (
        <>
          <Buttons>
            <Button onClick={step === 1 ? cleanStates : () => setStep(1)}>
              {step === 1 ? "Cancelar" : "Volver"}
            </Button>
            <Button
              onClick={() => setAddMoreInfo(true)}
              icon={<PlusOutlined />}
            >
              Agregar información dinámica
            </Button>
            <Button
              onClick={() => {
                if (step === 1) {
                  nextStep()
                } else {
                  editSiteAction()
                }
              }}
              type="primary"
            >
              {step === 1 ? "Siguiente" : "Guardar cambios"}
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
                      const originalArray = siteEdited.otherFields as {
                        type: string
                        value: string
                      }[]
                      const newArray = [...originalArray, currentDynamicInfo]
                      setSiteEdited({
                        ...siteEdited,
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
                {siteEdited.otherFields.length > 0 &&
                  typeof siteEdited.otherFields !== "string" &&
                  siteEdited.otherFields.map(
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
                            if (siteEdited.otherFields.length > 1) {
                              const originalArray = siteEdited.otherFields as {
                                type: string
                                value: string
                              }[]
                              const newArray = originalArray.splice(index, 1)
                              setSiteEdited({
                                ...siteEdited,
                                otherFields: newArray,
                              })
                            } else {
                              setSiteEdited({
                                ...siteEdited,
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
        </>
      )}
    </FormContainer>
  )
}

export default EditSiteView
