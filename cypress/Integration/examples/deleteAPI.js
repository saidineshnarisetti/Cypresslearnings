describe('API testing delete API', () => {
    it('My test case -- delete API', function(){
        cy.request({method: 'DELETE', url: 'https://reqres.in/api/users/2'}).then((response) =>{
    
        expect(response.status).to.eq(204)
        console.log(response.body)
        })
    })
})