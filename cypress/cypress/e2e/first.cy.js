///<reference types="cypress"/>
require("cypress-xpath");

describe('firsttest', function () {
    context('720p resolution', () => {
        beforeEach(() => {
            cy.viewport(1280, 720)
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

        })

        it('should be', function () {



        })
        afterEach(() => {
            cy.get('#account-menu > .dropdown-toggle').click()
          cy.xpath("//span[.='Sign out']").click()
        }   )

    });
});