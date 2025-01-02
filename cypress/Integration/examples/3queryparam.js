describe(" API testing -- Query param examples", ()=>{

    it("Passing query parm", ()=>{
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/",
            qs:{page: 2}
        })
        .then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.data).has.length(6)
            expect(response.body.data[0]).has.property('email')
            console.log(response)
        })

    })

})