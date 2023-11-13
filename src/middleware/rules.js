import { roles } from "@/constants"

const rules = [
  {
    url: '/search',
    availableTo: [roles.admin, roles.socio]
  },
  {
    url: '/form',
    availableTo: [roles.admin]
  },
  {
    url: '/providerForm',
    availableTo: [roles.proveedor]
  },
  {
    url: '/providerForm/:id',
    availableTo: [roles.proveedor]
  },
  {
    url: '/inviteProvider',
    availableTo: [roles.socio]
  }
]

export default rules