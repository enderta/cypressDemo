///<reference types="cypress"/>
require("cypress-xpath");

describe('firsttest', function () {
it('should be', function () {
    cy.request("https://restcountries.com/v2/all").then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body[0].name).to.eq("Afghanistan")
        expect(response.body).to.have.length(250)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
    }
    )
}
)
})