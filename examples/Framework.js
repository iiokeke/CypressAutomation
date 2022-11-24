/// <reference types="Cypress" />

describe('Framework suite', function()
{
    beforeEach(() => {
        //calling the file name from fixtures, and resolving the promise with 'then' function and pass data as info
        cy.fixture('example').then(function(data){

this.data = data //making the data from fixture global so that it can be used outside the function

        })

    })
    it('Framework Testcase', function(){
    
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get('.ng-valid').should('have.value',this.data.name)
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2') 

        //writing custamized reuseable function to add product to cart
        cy.get(':nth-child(2) > .nav-link').click()
        //cy.selectProduct('Blackberry')
        //cy.selectProduct('iphone X')
        
        this.data.productName.forEach(function(element){

            cy.selectProduct(element);

        }) 
        
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        var sum = 0
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
})