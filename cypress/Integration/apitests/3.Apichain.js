describe("API chaining call", () => {
    let randomText = "";
    let testEmail = "";
    const dataJson = require('../../fixtures/postcall.json');
    //Test comments
    it("POST test call", () => {
        const pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        randomText = Array.from({ length: 10 }, () => 
            pattern.charAt(Math.floor(Math.random() * pattern.length))
        ).join('');

        testEmail = `${randomText}@gmail.com`;

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'Authorization': 'Bearer d3533c122fdbc616a31af8efb28214cbaaa199e7a95e0e0dca07d8e01e20e7ba'
            },
            body: {
                name: dataJson.name,
                gender: dataJson.gender,
                email: testEmail,
                status: dataJson.status
            }
        }).then((res) => {
            // Validate response
            cy.log(JSON.stringify(res));
            expect(res.status).to.equal(201);
            expect(res.body).to.have.property('email', testEmail);
            expect(res.body).to.have.property('id');

            
            const userId = res.body.id;
            cy.log(`User ID created: ${userId}`);
            
            return cy.request({
                method: "GET",
                url: `https://gorest.co.in/public/v2/users/${userId}`,
                headers: {
                    'Authorization': 'Bearer d3533c122fdbc616a31af8efb28214cbaaa199e7a95e0e0dca07d8e01e20e7ba'
                }
            });
        }).then((getRes) => {
            // Validate GET response
            expect(getRes.status).to.equal(200);
            expect(getRes.body).to.have.property('email', testEmail);
        });
    });
});
