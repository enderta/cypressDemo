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
            cy.xpath("(//*[@class='dropdown nav-item']//a//span)[5]").should('have.text', 'Joe King')

        })

        it('should be', function () {

            ////tbody//tr//td[1]
            cy.xpath("(//*[@id='entity-menu']//a)[2]").click({ force: true })
            let UIId = []
            cy.xpath("(//tbody//tr//td[1])[1]").then(($id) => {
                UIId = $id.text()
                cy.log(UIId)
                cy.request({
                    method: 'GET',
                    url: 'https://www.gmibank.com/api/tp-customers?page=0&size=20&sort=id,asc&cacheBuster=1670271521733',
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnaW5vLndpbnRoZWlzZXIiLCJhdXRoIjoiUk9MRV9FTVBMT1lFRSIsImV4cCI6MTY3MDMzNTcxMn0.ZaSkWlTxUs8F-sdb8iLmQAre7sm-QqxDshKNPKl4Cu1aPQa6KBJkeSpeXOuHCkF6m3EVQj_CrCtWYWIikmo8Bw"

                    }
                }).then((response) => {
                        cy.log(response.body)
                        expect(response.status).to.eq(200)
                        expect(response.body).to.have.length(20)
                        expect(response.body[0].id.toString()).to.eq(UIId.toString())
                        expect(response.body[0].firstName).to.eq("Vergie")
                        expect(response.body[0].lastName).to.eq("Will")

                    }
                )


            })
        })
            afterEach(() => {
                cy.get('#account-menu > .dropdown-toggle').click()
                cy.xpath("//span[.='Sign out']").click()
            })

        });
    });