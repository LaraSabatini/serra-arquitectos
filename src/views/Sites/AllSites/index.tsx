import React, { useState, useEffect } from "react"
import { LinkOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"
import { ISite } from "@interfaces/Site"
import sections from "@data/menu"
import { Table } from "antd"
import { getAllSites } from "@services/sites/getSites.service"

type TablePaginationPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight"

function AllSites() {
  const router = useRouter()

  const [sites, setSites] = useState<ISite[]>([])
  const [amount, setAmount] = useState<number>(1)
  const top: TablePaginationPosition | "none" = "none"
  const bottom: TablePaginationPosition | "none" = "none"

  const getSiteList = async () => {
    const req = await getAllSites()
    setSites(req.data.data)
    setAmount(req.data.data.length)
  }

  useEffect(() => {
    getSiteList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columns = [
    {
      title: "Código",
      dataIndex: "code",
      key: "code",
      width: "100px",
      render: (text: string, data: any) => (
        <p style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          {text}
          {JSON.parse(data.images).length > 0 && <LinkOutlined />}
        </p>
      ),
    },
    {
      title: "Obra",
      dataIndex: "title",
      key: "title",
      width: "250px",
    },
    {
      title: "Categoria",
      dataIndex: "type",
      key: "type",
      width: "250px",
      render: (text: string) => (
        <p>
          {text.replaceAll("[", "").replaceAll("]", "").replaceAll('"', "")}
        </p>
      ),
    },
    {
      title: "Año",
      dataIndex: "year",
      key: "year",
      width: "150px",
    },
    {
      title: "Comitente",
      dataIndex: "principal",
      key: "principal",
      width: "370px",
    },
    {
      title: "Superficie",
      dataIndex: "size",
      key: "size",
      width: "100px",
      render: (text: string) => (
        <p>
          {parseInt(text as string, 10)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
          m²
        </p>
      ),
    },
  ]

  return (
    <div>
      <Table
        onRow={record => {
          return {
            onClick: () => {
              if (record.images !== "[]") {
                const filter = sections[0].subsections.filter(
                  sub => sub.name === JSON.parse(record.type as string)[0],
                )
                router.push(`obras?categoria=${filter[0].id}&id=${record.id}`)
              }
            },
            style: { cursor: record.images !== "[]" ? "pointer" : "auto" },
          }
        }}
        dataSource={sites}
        columns={columns}
        style={{ height: "90vh", overflowX: "auto" }}
        pagination={{
          pageSize: amount,
          position: [
            top as TablePaginationPosition,
            bottom as TablePaginationPosition,
          ],
        }}
      />
    </div>
  )
}

export default AllSites
