describe('API testing -- Post call', () => {
    //This block inserts the data which is mentioned in the body of the request
    it('POST request testing', () => {
    
    cy.request({method: 'POST', url: 'https://reqres.in/api/users', body: {
    "name": "Bingo",
    "job": "Team lead"
    }}).then((response) =>{
   
    expect(response.status).to.eq(201)
    console.log(response.body)
    expect(response.body.name).to.eq("Bingo")
    expect(response.statusText).to.eq("Created")
    })
    })
})