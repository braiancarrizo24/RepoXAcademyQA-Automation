describe ('Carrito de compras sauce demo',() => {

    beforeEach (() =>{
    cy.visit('https://www.saucedemo.com/')
    })

   it('Agregar un producto al carrito',()=>{
        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]')
        cy.get('[data-test="shopping-cart-link"]')
        cy.get('[data-test="shopping-cart-badge"]')
        

    })

    it('Agregar múltiples productos y verificar contador',()=>{
      
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]')
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="shopping-cart-link"]')
        cy.get('[data-test="shopping-cart-badge"]')


    })

    it('Eliminar un producto desde la página del carrito',()=>{
    
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="cart-list"]')
        cy.get('[data-test="cart-list"] > :nth-child(3)')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]')
        cy.get('[data-test="shopping-cart-badge"]')

    })
})