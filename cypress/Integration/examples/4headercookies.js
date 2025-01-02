describe("API testing headers and cookies", () => {
    let authtoken; // Declare authtoken outside the hooks for global access

    before("header cookies -- API chaining", () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/api-clients/',
            headers: { 'Content-Type': 'application/json' }, // Corrected header and value
            body: {
                clientName: "Saidinesh",
                clientEmail: Math.random().toString(36).substring(2) + "@gmail.com" // Corrected Math.random usage
            }
        }).then((response) => {
            expect(response.status).to.equal(201); // Assuming status 201 for successful creation, adjust if needed
            authtoken = response.body.accessToken; // Assigning authtoken here
            console.log(authtoken);
        });
    });

    it("Creating order -- API chaining", () => {
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json', // Corrected header and value
                'Authorization': 'Bearer ' + authtoken // Using authtoken correctly
            },
            body: {
                "bookId": 1,
                "customerName": "Saidinesh"
            }
        }).then((response) => {
            expect(response.status).to.equal(201); // Status 201 for successful creation
            const order = response.body.orderId;
            console.log(order);
        });
    });


    it("Featching order -- API chaining", () => {
        cy.request({
            method: 'GET',
            url: 'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': 'Bearer ' + authtoken
            },
            cookies:{
                'cookieName':'mycookie'
            }
        
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).has.length(1);
        });
    });
});
