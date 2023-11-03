import { roles } from "@/constants"

const rules = [
  {
    url: '/search',
    availableTo: [roles.admin, roles.socio]
  },
  {
    url: '/form',
    availableTo: [roles.admin]
  }
]

export default rules