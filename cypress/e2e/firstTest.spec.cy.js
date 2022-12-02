///<reference types="cypress"/>
require("cypress-xpath");

describe('firsttest', function () {
    it('should be', function () {
        cy.visit('https://www.google.com/')
        cy.get('input[name="q"]').type('hello')
        cy.get('input[name="btnK"]').click()
        cy.get('div[class="g"]').should('be.visible')


    });
});