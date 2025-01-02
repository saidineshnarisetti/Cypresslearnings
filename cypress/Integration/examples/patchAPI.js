describe('API testing -- Patch call', () => {
    it('My test case -- Patch call', function(){
        cy.request({method: 'PATCH', url: 'https://reqres.in/api/users/2', body: {
         "name": "Angel",
         "job": "zion resident"
    }}).then((response) =>{
    
        expect(response.status).to.eq(200)
    
        expect(response.body.name).to.eq("Angel")
        expect(response.body.job).to.eq("zion resident")
        })
    })
})
