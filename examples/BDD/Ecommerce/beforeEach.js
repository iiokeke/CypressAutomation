beforeEach(() => {
    //calling the file name from fixtures, and resolving the promise with 'then' function and pass data as info
    cy.fixture('example').then(function(data){

this.data = data //making the data from fixture global so that it can be used outside the function

    })

})