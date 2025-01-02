describe('Google Page', () => {
    it('Should open Google page', () => {
      // Visit the Google page
      cy.visit('https://www.google.com');
  
      // Assert that the page title contains "Google"
      cy.title().should('include', 'Google');
      cy.log('This is sample tests');

      
      // cy.visit('http://www.facebook.com')

      // cy.title().should('include','Facebook')
    });
  });
  

