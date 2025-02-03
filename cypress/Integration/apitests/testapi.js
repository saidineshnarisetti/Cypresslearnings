const { method } = require("bluebird")

///<referance types= "Cypress"/>
let randomText=""
let testEmail=""
describe("Test api call",()=>{

    const pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for(var i=0;i<10;i++)
        randomText+=pattern.charAt(Math.floor(Math.random()* pattern.length))
        
        testEmail = randomText+'@gmail.com';

    it("API call1",()=>{
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers:{
                'Authorization':'Bearer d3533c122fdbc616a31af8efb28214cbaaa199e7a95e0e0dca07d8e01e20e7ba'
            }
        }).then((res)=>{
            console.log(res.status)
            expect(res.status).equal(200)
            console.log(res.body)
            expect(res.body).not.to.be.null;
            expect(res.body.length).to.be.equal(10);
            expect(res.duration).to.be.lessThan(2000); 
        })
    })
    it("API call2", ()=>{
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v1/users",
            headers:{
                'Authorization':'Bearer d3533c122fdbc616a31af8efb28214cbaaa199e7a95e0e0dca07d8e01e20e7ba'
            },
            body:{
                "name": "Test User",
                "gender":"male",
                "email": testEmail,
                "status":"active"
            }
        }).then((res)=>{
            expect(res.status).equal(201)
            expect(res.body.data.name).equal("Test User")
            expect(res.body.data.email).equal(testEmail)
        })
    })

})