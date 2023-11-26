const roles = {
  admin: 'ADMIN',
  proveedor: 'PROVEEDOR',
  socio: 'SOCIO'
}

const questionTypes = [
  { id: 'boolean', label: 'Verdadero o Falso' },
]

const categories = [
  { id: 'textil', label: 'Textil' },
  { id: 'alimentario', label: 'Alimentario' },
  { id: 'transporte', label: 'Transporte' },
]

const sizes = {
  drawer: {
    width: 240
  }
}

const userInvitations = {
  partner: 'invitePartner',
  provider: 'inviteProvider'
}

const resultsPerPage = 9

export { roles, sizes, resultsPerPage, categories, questionTypes, userInvitations }