describe('User Registration and Login', () => {
    it('should allow the user to register and then log in', () => {
      cy.visit('Formularz.html');
  
      cy.get('#email').type('testuser@example.com');
      cy.get('#password').type('password123');
      cy.get('#confirm-password').type('password123');
  
      cy.get('button[type="submit"]').click();
  
      cy.wait(1000); 
      cy.url().should('include', '/home.html'); 
  
      cy.contains('Witaj, testuser@example.com!').should('be.visible');
  
      cy.visit('Formularzlog.html'); 
  
      cy.get('#email').type('testuser@example.com');
      cy.get('#password').type('password123');

      cy.get('button[type="submit"]').click();
  
      cy.contains('Witaj, testuser@example.com!').should('be.visible');
    });
  });
  
  
  
  
  