describe('API Testing -- Get call', function(){
    it('My test case1', function(){
       cy.request('GET','https://www.bstackdemo.com/').then((response)=>{
        expect(response.status).to.equal(200)
       })

    })
})