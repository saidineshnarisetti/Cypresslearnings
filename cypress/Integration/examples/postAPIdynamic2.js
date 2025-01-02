describe('POST API Testing - With Dynamic Values read from fixture', () => {
    // This block inserts the data specified in the body of the request
    it('POST Request', () => {
        cy.fixture('user').then((Fixture)=>{
            const requestBody=Fixture;
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
            
    })
        
});
