/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
let name


Given('I open ecommerce page',() =>{

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

//When I added items to cart
When('I added items to cart',function(){

    cy.get(':nth-child(2) > .nav-link').click()
        
        this.data.productName.forEach(function(element){

            cy.selectProduct(element);
        }) 

        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click() 
})

//And validate the total prices
And('validate the total prices',()=>{
    
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>
        {
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum)+Number(res)
           
        }).then(function()
        {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element)
        {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })
})

// Then select the country, submit and verify success message
Then('select the country, submit and verify success message',()=>
{ 
        cy.get('[class="btn btn-success"]').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('[for="checkbox2"]').click({force: true})
        cy.get('.ng-untouched > .btn').click()

        cy.get('.alert').then(function(element)
        {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
})
//When I fill the form details
When('I fill the form details',function(dataTable)
{ 
    //[Emy, Male]
    name = dataTable.rawTable[1][0]
    cy.get(':nth-child(1) > .form-control').type(dataTable.rawTable[1][0])
    cy.get('select').select(dataTable.rawTable[1][1])
})
//And validate the forms behaviour
And('validate the forms behaviour',function()
{
    cy.get('.ng-valid').should('have.value',name)
    cy.get('#inlineRadio3').should('be.disabled')//if radio button is disabled
    cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2') //check if name min xter is 2
})
//Then select the the shop page
Then('select the the shop page',function()
{
    cy.get(':nth-child(2) > .nav-link').click()
})