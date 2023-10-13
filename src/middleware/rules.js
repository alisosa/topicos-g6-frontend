import { roles } from "@/constants"

const rules = [
  {
    url: '/search',
    availableTo: [roles.admin, roles.socio]
  }
]

export default rules