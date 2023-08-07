import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { ISite } from "@interfaces/Site"
import sections from "@data/menu"
import { getSites } from "@services/sites/getSites.service"
import Site from "@components/Site"
import AllSites from "./AllSites"
import SitesContainer, { CardPlaceholder } from "./styles"
import IndividualSite from "./Site"

function SitesView() {
  const router = useRouter()

  const categoryId = parseInt(router.query.categoria as string, 10)

  const [sites, setSites] = useState<ISite[]>()
  const [loading, setLoading] = useState<boolean>(true)

  const getSiteList = async (id: number) => {
    const findFilter = sections[0].subsections.filter(
      section => section.id === id,
    )

    if (findFilter.length) {
      const req = await getSites(1, findFilter[0].name)
      setSites(req.data.data)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (sites?.length) {
      setLoading(false)
    }
  }, [sites])

  useEffect(() => {
    getSiteList(categoryId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router])

  return (
    <div>
      {categoryId !== 116 ? (
        <SitesContainer
          visual={
            (sites?.length && router.query.id === undefined) || loading
              ? "cards"
              : "site"
          }
        >
          {loading && router.query.id === undefined && (
            <>
              <CardPlaceholder />
              <CardPlaceholder />
              <CardPlaceholder />
              <CardPlaceholder />
              <CardPlaceholder />
              <CardPlaceholder />
              <CardPlaceholder />
              <CardPlaceholder />
              <CardPlaceholder />
            </>
          )}
          {sites?.length && router.query.id === undefined ? (
            sites.map(site => (
              <Site
                key={site.id}
                id={site.id as number}
                title={site.title}
                code={site.code}
                type={JSON.parse(site.type as string)}
                location={site.location}
                portrait={JSON.parse(site.images as string)[0]}
              />
            ))
          ) : (
            <div />
          )}
          {router.query.id !== undefined && <IndividualSite />}
        </SitesContainer>
      ) : (
        <AllSites />
      )}
    </div>
  )
}

export default SitesView
