describe("POST calls",() =>{
    it("POST call Hard code Json",()=>{
        const requestBody={
                name: "morpheus",
                job: "leader"
        }
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: requestBody
        })
        .then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal("morpheus")
            expect(response.body.job).to.equal("leader")
            console.log(response.body)
        })
    })

    it("Approch -2 POST call dynamically Json object",()=>{
        const requestBody={
                name: Math.random.toString(5).substring(2),
                job: Math.random.toString(5).substring(2)
        }
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: requestBody
        })
        .then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal(requestBody.name)
            expect(response.body.job).to.equal(requestBody.job)
            console.log(response.body)
        })

    })

    it("Approch -3 POST call From fixture files",()=>{
       cy.fixture('2postcall').then((myfixture)=>{
        const requestBody2 =myfixture;
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: requestBody2
        })
        .then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body.name).to.equal(requestBody2.name)
            expect(response.body.job).to.equal(requestBody2.job)
            expect(response.body).has.property('createdAt')
            expect(response.body).has.property('id')
            console.log(response.body)
        })
       })
        

    })

})