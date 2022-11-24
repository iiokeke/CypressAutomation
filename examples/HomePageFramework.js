/// <reference types="Cypress" />
import HomePage from '../pageObject/HomePage'

describe('Framework suite', function(){

    beforeEach(() => {
        //calling the file name from fixtures, and resolving the promise with 'then' function and pass data as info
        cy.fixture('example').then(function(data){

this.data = data //making the data from fixture global so that it can be used outside the function

        })

    })
    it('Framework Testcase', function(){
        const homePage=new HomePage() //creating object for the homepage
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEntreprenur().should('be.disabled')//if radio button is disabled
        homePage.getShopTab().should('have.attr','minlength','2') //check if name min xter is 2

        //writing custamized reuseable function to add product to cart
        cy.get(':nth-child(2) > .nav-link').click()
        //cy.selectProduct('Blackberry')
        //cy.selectProduct('iphone X')

        this.data.productName.forEach(function(element){

            cy.selectProduct(element);

        }) 
    })
})