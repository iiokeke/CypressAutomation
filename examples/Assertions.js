describe("Assertions", ()=>{

    it("Implicit assertion", () =>{

        //should and

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //cy.url().should('include','orangehrmlive.com')
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrm')

        //another form:

        /*cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')*/

        //Multiple should can be replace with AND:

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greenhrm') //negative assertion

        //checking title
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        //Checking logo or any element
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        //cy.Xpath("//a").should('have.length',5) //To check the number links presents on the web
        cy.get("[placeholder='Username']").type('Admin')
        cy.get("[placeholder='Username']").should('have.value','Admin')


    })




})