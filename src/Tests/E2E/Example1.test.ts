// E2E Testing using Cypress
describe('User Management', () => {
    it('should create and fetch a user', () => {
        cy.visit('/users'); // Your app URL
    
        cy.get('[data-cy=create-user]').click(); // Simulate user action
        cy.get('[data-cy=user-name]').type('John Doe');
        cy.get('[data-cy=user-email]').type('john@example.com');
        cy.get('[data-cy=submit]').click();
    
        cy.get('[data-cy=user-list]').should('contain', 'John Doe');
    });
});
  