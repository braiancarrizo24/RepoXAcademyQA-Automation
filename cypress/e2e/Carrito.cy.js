describe('Carrito de compras Sauce Demo', () => {

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

  
  it('Agregar un producto al carrito', () => {
    agregarProducto('sauce-labs-backpack')

    cy.get('[data-test="remove-sauce-labs-backpack"]').should('exist')
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')

  })

  
  it('Agregar múltiples productos y verificar contador', () => {
    agregarProducto('sauce-labs-backpack')
    agregarProducto('sauce-labs-bike-light')
    agregarProducto('sauce-labs-onesie')

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '3')

  })

  
  it('Eliminar un producto desde la página del carrito', () => {
    agregarProducto('sauce-labs-backpack')
    agregarProducto('sauce-labs-bike-light')

    
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="cart-list"]').should('be.visible')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')

  })

})