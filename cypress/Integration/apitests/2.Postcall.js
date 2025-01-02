describe("POST CALL",()=>{
    const dataJson = require('../../fixtures/postcall.json')
    let randomText = "";
    let testEmail = "";
    it("POST test call 2", ()=>{
        
        const pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        randomText = Array.from({ length: 10 }, () => 
            pattern.charAt(Math.floor(Math.random() * pattern.length))
        ).join('');

        testEmail = `${randomText}@gmail.com`;
       
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers:{
                'Authorization':'Bearer d3533c122fdbc616a31af8efb28214cbaaa199e7a95e0e0dca07d8e01e20e7ba'
            },
            body:{
            name: dataJson.name,         
            gender: dataJson.gender,           
            email: testEmail,
            status: dataJson.status
            }
        }).then((res)=>{
            console.log(res)
            cy.log(JSON.stringify(res))
            expect(res.status).to.equal(201)
            expect(res.body).has.property('email', testEmail)
        })
    })
})