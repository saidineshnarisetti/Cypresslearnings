describe("Diff types of api calls", ()=> {
    it("Get call request",()=>{
    cy.request('GET','https://reqres.in/api/users?page=2')
    .its('status')
    .should('equal',200);
    })

    it("Post call request",()=>{
        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/users',
            body: {
                name: "morpheus",
                job: "leader"
            }
        })
        .its('status')
        .should('equal',201);
    })

    it("PUT call request",()=>{
        cy.request({
            method: 'PUT',
            url:'https://reqres.in/api/users/2',
            body: {
                name: "morpheus",
                job: "zion resident"
            }
        })
        .its('status')
        .should('equal',200);
    })

    it("DELETE call request",()=>{
        cy.request(
             'DELETE','https://reqres.in/api/users/2',
           
        )
        .its('status')
        .should('equal',204);
    })

})