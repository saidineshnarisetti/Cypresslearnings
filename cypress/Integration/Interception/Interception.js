describe('Interception example', ()=>{
    
    it.only('Interception example 1', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({
            path: '/posts'
        }).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts').then(inter=>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            
        })
    })

    it('mocking with interception example 1', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.intercept('GET', '/posts', {totalposts:5}).as(gets)
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@gets').then(inter=>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            
        })
    })
})