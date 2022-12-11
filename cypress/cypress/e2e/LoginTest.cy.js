///<reference types="cypress"/>
require("cypress-xpath");

describe ('login', function () {
    it('user',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://amazon.com')

    })
})