///<reference types="cypress"/>
require("cypress-xpath");

describe('firsttest', function () {
    it('should be', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
     cy.visit('https://www.gmibank.com/')
        cy.get('#account-menu > .dropdown-toggle').click()
        cy.get('#login-item > span').click()
        cy.get('#username').type('gino.wintheiser')
        cy.get('#password').type('%B6B*q1!TH')
        cy.xpath("//button[@type='submit']").click()
       cy.xpath("(//*[@class='dropdown nav-item']//a//span)[5]").should('have.text','Joe King')


    });
});