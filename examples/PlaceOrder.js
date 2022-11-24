/// <reference types="Cypress" />

describe('My Second Test', () => {

    it('My Second TestCase!', () => {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
  
        cy.get('.products').as('productlocator')
  
        cy.get('@productlocator').find('.product').each(($el,index,$list) => {
          
          const textVeg=$el.find('h4.product-name').text()
          if(textVeg.includes('Cashews'))
          {
            cy.wrap($el).find('button').click()
          
          }
        })
        cy.get("img[alt='Cart']").click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        
      
    })
})

   