const sections: {
  id: number
  name: string
  subsections: {
    id: number
    name: string
    route: string
  }[]
}[] = [
  {
    id: 1,
    name: "Obras",
    subsections: [
      {
        id: 100,
        name: "Administrativo",
        route: "obras",
      },
      {
        id: 101,
        name: "Comercial",
        route: "obras",
      },
      {
        id: 102,
        name: "Culto",
        route: "obras",
      },
      {
        id: 103,
        name: "Deportivo + Recreativo",
        route: "obras",
      },
      {
        id: 104,
        name: "Educación",
        route: "obras",
      },
      {
        id: 105,
        name: "Industrial",
        route: "obras",
      },
      {
        id: 106,
        name: "Salud",
        route: "obras",
      },
      {
        id: 107,
        name: "Seguridad",
        route: "obras",
      },
      {
        id: 108,
        name: "Servicios Especializados",
        route: "obras",
      },
      {
        id: 109,
        name: "Cultura + Esparcimiento",
        route: "obras",
      },
      {
        id: 110,
        name: "Transporte",
        route: "obras",
      },
      {
        id: 111,
        name: "Turismo",
        route: "obras",
      },
      {
        id: 112,
        name: "Viviendas colectivas",
        route: "obras",
      },
      {
        id: 113,
        name: "Viviendas individuales",
        route: "obras",
      },
      {
        id: 114,
        name: "Planes de vivienda",
        route: "obras",
      },
      {
        id: 115,
        name: "Planeamiento",
        route: "obras",
      },
      {
        id: 116,
        name: "Todas las obras",
        route: "obras",
      },
    ],
  },
  {
    id: 2,
    name: "Nosotros",
    subsections: [
      {
        id: 200,
        name: "Socios",
        route: "nosotros",
      },
      {
        id: 201,
        name: "Estudio",
        route: "nosotros",
      },
      {
        id: 203,
        name: "Procesos",
        route: "nosotros",
      },
      {
        id: 204,
        name: "Distinciones",
        route: "nosotros",
      },
      {
        id: 205,
        name: "Servicios",
        route: "nosotros",
      },
      {
        id: 206,
        name: "Contacto",
        route: "nosotros",
      },
    ],
  },
]

export default sections
