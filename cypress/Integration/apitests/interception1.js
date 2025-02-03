///<referance types= "Cypress"/>
describe("Testing Interception",()=>{
  
    it('Intercept by matching POST method', () => {
        cy.visit('https://reqres.in/');
        cy.intercept('POST', 'api/users', (req) => {
        req.reply({
            status: 200,
            body: {
            "name": "John",
            "job": "QA Manager",
        }
        })
        }).as('updateuser')
        cy.get("[data-id=post]").click()
        cy.wait('@updateuser')
    })
})