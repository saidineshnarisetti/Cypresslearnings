describe("API chaining call2", () => {
    it("should fetch resources and validate response", () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown',
        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.equal(200);
            expect(res.body.data).to.be.an('array').that.is.not.empty;
            const resourceId = res.body.data[0].id;
            cy.log(`Resource ID: ${resourceId}`);
            
            return cy.request({
                method: 'GET',
                url: `https://reqres.in/api/unknown/${resourceId}`,
            });
        }).then((getRes) => {
            // Validate the second GET response
            cy.log(JSON.stringify(getRes));
            expect(getRes.status).to.equal(200);
            expect(getRes.body.data).to.have.property('id',1);
            expect(getRes.body.data).to.have.property('name', 'cerulean');
        });
    });
});
