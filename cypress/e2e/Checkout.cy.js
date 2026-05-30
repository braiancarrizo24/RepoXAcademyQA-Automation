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

})