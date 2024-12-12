describe('Registration Form Tests', () => {
    beforeEach(() => {
        cy.visit('Formularz.html'); 
    });

    
it('should validate email format', () => {
    cy.get('#email').should('be.visible');
    cy.get('#email').type('invalid-email'); 
    cy.get('#password').type('ValidPassword123'); 
    cy.get('#confirm-password').type('ValidPassword123'); 
    cy.get('button[type="submit"]').click(); 

    cy.get('#email:invalid').should('exist'); 
});

    it('should validate password confirmation', () => {
        cy.get('#email').type('test@example.com'); 
        cy.get('#password').type('ValidPassword123'); 
        cy.get('#confirm-password').type('DifferentPassword');  
        cy.get('button[type="submit"]').click(); 
    
   
        cy.contains('Hasła muszą być takie same!').should('be.visible');
    });

    it('should register successfully with valid data', () => {
        cy.get('#email').type('test@example.com'); 
        cy.get('#password').type('ValidPassword123'); 
        cy.get('#confirm-password').type('ValidPassword123'); 
        cy.get('button[type="submit"]').click(); 
    
       
        cy.contains('Rejestracja zakończona sukcesem!').should('be.visible');
    });

    it('should require all fields to be filled out', () => {
        cy.get('form#registration-form').within(() => {
            cy.get('button[type="submit"]').click(); 
        });
        cy.get('input:invalid').should('have.length', 3); 
    });
});








