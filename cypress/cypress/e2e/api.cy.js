///<reference types="cypress"/>
require("cypress-xpath");

describe('firsttest', function () {
it('should be', function () {
   /* cy.request("https://restcountries.com/v2/all").then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body[0].name).to.eq("Afghanistan")
        expect(response.body).to.have.length(250)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
    }
    )*/
    cy.request({

            method: 'GET',
            url: 'https://www.gmibank.com/api/tp-customers?page=0&size=20&sort=id,asc&cacheBuster=1670271521733',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnaW5vLndpbnRoZWlzZXIiLCJhdXRoIjoiUk9MRV9FTVBMT1lFRSIsImV4cCI6MTY3MDY4MzY3OH0.qjaMYRFb9e_TY6mBeci6rakEpOrm4JRfvFTNzrRWhISvp5yKd-oVV5AjSgmjz8PjoojUWNnK48lE7jmK5v6DMw"

            }
        }).then((response) => {
                cy.log(response.body)
                expect(response.status).to.eq(200)
                expect(response.body).to.have.length(20)



            }
        )
    })
})