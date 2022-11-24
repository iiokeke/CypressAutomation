/// <reference types="Cypress" />

describe('CheckBoxes', function(){

    it('CheckBoxes Testcase', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        
        //alert firing 
        cy.on('window:alert',(str) => {

            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        }) 
        
        //confirm alaert
        cy.on('window:confirm', (str) => {

            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        //Opening Tab
        cy.get('#opentab').click() //.invoke('removeAttr','tagert').click()
        cy.url().should('include', 'rahulshettyacademy')
    })  


})

    

        
       


