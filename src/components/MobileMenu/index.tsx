import React, { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import sections from "@data/menu"
import { Items, MenuItem, SubMenu } from "@components/sharedStyles"
import { Container, Button, MenuTab, SocialContainer } from "./styles"

function MobileMenu() {
  const router = useRouter()

  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const [menuOpened, setMenuOpened] = useState<number | null>(null)
  const [options, setOptions] = useState<
    { id: number; name: string; route: string }[]
  >([])

  return (
    <Container>
      <Button type="button" onClick={() => setOpenMenu(!openMenu)}>
        <div id="nav-icon3" className={openMenu ? "open" : ""}>
          <span />
          <span />
          <span />
          <span />
        </div>
      </Button>
      <MenuTab className={openMenu ? "visible" : ""}>
        <Items>
          <MenuItem
            onClick={() => router.push("/home")}
            selected={router.pathname === "/home"}
          >
            <p>Inicio</p>
          </MenuItem>
          {sections.map(section => (
            <MenuItem
              key={section.id}
              onClick={() => {
                if (menuOpened === section.id) {
                  // setMenuOpened(null)
                  setOptions([])
                } else {
                  setMenuOpened(section.id)
                  setOptions(section.subsections)
                }
              }}
              selected={
                router.pathname === `/${section.name.toLowerCase()}` ||
                menuOpened === section.id
              }
            >
              <p>
                {section.name}
                {router.pathname === `/${section.name.toLowerCase()}` && (
                  <span>
                    {" "}
                    /{" "}
                    {
                      section.subsections.filter(
                        subsection =>
                          subsection.id ===
                          parseInt(router.query.categoria as string, 10),
                      )[0]?.name
                    }
                  </span>
                )}
              </p>
            </MenuItem>
          ))}
        </Items>
        {menuOpened !== null && options.length > 0 && (
          <SubMenu>
            <Items>
              {options.map(option => (
                <MenuItem
                  key={option.id}
                  onClick={() => {
                    router.push(`${option.route}?categoria=${option.id}`)
                    setMenuOpened(null)
                    setOptions([])
                    setOpenMenu(false)
                  }}
                  selected={
                    parseInt(router.query.categoria as string, 10) === option.id
                  }
                >
                  <p>{option.name}</p>
                </MenuItem>
              ))}
            </Items>
          </SubMenu>
        )}
        <SocialContainer>
          <Link href="https://www.linkedin.com/company/serra-arquitectos/">
            LinkedIn
          </Link>
          <Link href="https://www.instagram.com/serraarquitectos/">
            Instagram
          </Link>
          <Link href="mailto:tecnica@serra-arquitectos.com.ar">Email</Link>
        </SocialContainer>
      </MenuTab>
    </Container>
  )
}

export default MobileMenu
