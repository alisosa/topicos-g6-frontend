import { roles } from "@/constants"

const rules = [
  {
    url: '/example',
    availableTo: [roles.admin, roles.proveedor, roles.socio]
  }
]

export default rules