

///<referance types= "Cypress"/>
describe('Test get api calls',()=>{
    it('Get users functions',()=>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers:{
                'Authorization':'Bearer d3533c122fdbc616a31af8efb28214cbaaa199e7a95e0e0dca07d8e01e20e7ba'
            }
        }).then((res)=>{
          expect(res.status).to.equal(200)
          console.log(res)
        console.log(res.body.length)
         expect(res.body.length).to.equal(10);

        })
    })
    it('Get users name 2 ',()=>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            //url: 'https://gorest.co.in/public/v2/users/7616278',
            headers:{
                'Authorization':'Bearer d3533c122fdbc616a31af8efb28214cbaaa199e7a95e0e0dca07d8e01e20e7ba'
            }
        }).then((res)=>{
          expect(res.status).to.equal(200)
          console.log(res)

        })
    })
    
} )