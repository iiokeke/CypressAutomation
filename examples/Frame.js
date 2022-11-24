/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('CheckBoxes', function()
{
    
    it('Frames Testcase', function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find([href*='mentorship']).eq(0).click()
    }) 

})

   