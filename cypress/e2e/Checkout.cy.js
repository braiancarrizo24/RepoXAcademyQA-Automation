describe('Checkouts',()=>{

 beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    login()
  })

  const login = () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  }

  const agregarProducto = (producto) => {
    cy.get(`[data-test="add-to-cart-${producto}"]`).click()
  }

  it('Completar checkout con datos válidos', () => {
    agregarProducto('sauce-labs-backpack')

    
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Juan')
    cy.get('[data-test="lastName"]').type('Pérez')
    cy.get('[data-test="postalCode"]').type('5000')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]')
    .should('be.visible')
    .and('contain','Thank you for your order!')

  })

})