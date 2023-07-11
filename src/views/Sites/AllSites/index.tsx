import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { ISite } from "@interfaces/Site"
import sections from "@data/menu"
import { Table } from "antd"
import { getAllSites } from "@services/sites/getSites.service"

function AllSites() {
  const router = useRouter()

  const [sites, setSites] = useState<ISite[]>()

  const getSiteList = async () => {
    const req = await getAllSites()
    setSites(req.data.data)
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
          {JSON.parse(text).length > 1
            ? `${JSON.parse(text)[0]}, ${JSON.parse(text)[1]}`
            : `${JSON.parse(text)}`}
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
        pagination={{ pageSize: 6 }}
      />
    </div>
  )
}

export default AllSites
