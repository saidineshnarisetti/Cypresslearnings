describe('POST API Testing - With Dynamic Values', () => {
    // This block inserts the data specified in the body of the request
    it('POST Request', () => {
    
        const requestBody = {
            id: Math.floor(Math.random() * 1000),
            username: Math.random().toString(36).substring(2, 12),
            firstName: Math.random().toString(36).substring(2, 7),
            lastName: Math.random().toString(36).substring(2, 7),
            email: Math.random().toString(36).substring(2, 10) + "@gmail.com",
            password: Math.random().toString(36).substring(2, 15),
            phone: Math.floor(Math.random() * 9000000000 + 1000000000).toString(),
            userStatus: Math.floor(Math.random() * 2) 
        };
        
        cy.request({
            method: 'POST', 
            url: 'https://petstore.swagger.io/v2/user', 
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.type).to.eq("unknown")
            console.log(response.body);
            // Optionally, you can add more assertions here to verify the response
        });
    });
});
