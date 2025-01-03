describe("POST CALL",()=>{

    it("POST test call 2", ()=>{
        let randomText = "";
        let testEmail = "";
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
                "name": "saidinesh",
                "email": testEmail,
                "gender": "male",
                "status": "active"
            }
            
            
        }).then((res)=>{
            console.log(res)
            cy.log(JSON.stringify(res))
            expect(res.status).to.equal(201)
            expect(res.body).to.have.property('id');
            const userId = res.body.id;
            cy.log(`User ID created: ${userId}`);

            return cy.request({
                method: "DELETE",
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    'Authorization': 'Bearer d3533c122fdbc616a31af8efb28214cbaaa199e7a95e0e0dca07d8e01e20e7ba'
                }
            });
        }).then((getRes) => {
            expect(getRes.status).to.equal(204);
        });
    })
})