/// <reference types="Cypress" />


describe('Framework suite', function()
{
    it('Framework Testcase', function(){
      cy.request('http://216.10.245.166/Library/Addbook.php',
      {
        "name":"Learn Appium Automation with Java",
         "isbn":"bceed",
         "aisle":"227",
         "author":"John foe"

      }).then(function(response)
      {
        expect(response.body).to.have.property('Msg','successfully added')
      })
    })
})