/// <reference types="Cypress" />

describe('CheckBoxes', function(){

    it('CheckBoxes Testcase', function(){ 
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Make it visible before click using Jquery
        cy.get('div.mouse-hover-content').invoke('show').contains('Top').click()
        cy.url().should('include','top')
         
        //OR use force true
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    

    })
})

    

        