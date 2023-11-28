/// <reference types="cypress" />

describe('login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  it('displays login page correctly', () => {
    cy.contains('Iniciar Sesión')
  })

  it('displays error message if email is missing', () => {
    cy.contains('Ingresa un email').should('not.exist')
    cy.get('input[name="password"]').type('ejemplo')
    cy.get('button[type="submit"]').click()
    cy.contains('Ingresa un email')
  })
  it('displays error message if password is missing', () => {
    cy.contains('Ingresa una contraseña').should('not.exist')
    cy.get('input[name="email"]').type('ejemplo')
    cy.get('button[type="submit"]').click()
    cy.contains('Ingresa una contraseña')
  })
})
