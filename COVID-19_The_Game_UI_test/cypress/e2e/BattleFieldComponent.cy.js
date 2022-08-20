describe('Battle field: The Beginning', () => {

  it('New Player should be able to access Battle field page and its features', () => {

    // Do a successful user login. This function is defined in support/command.js file
    cy.userLoginSuccessAndGameEntrySuccess('New user');

    // Game Entry
    cy.enterBattleField();

    // Check if "No second chances" pop-up is displayed and its features are visible
    cy.get('#introModal > .modal-dialog').should('be.visible');
    cy.get('.center').should('be.visible');
    cy.get('#introModal > .modal-dialog > .modal-content > .modal-header > #staticBackdropLabel').should('be.visible').and('have.text', 'No second chances!');
    cy.get('#introModal > .modal-dialog > .modal-content > .modal-body').should('be.visible').and('includes.text', 'In this battlefield if you give the wrong answer you will lose all accumulated points and start from the beginning.');
    cy.get('#start').should('not.be.disabled').and('have.text', 'Start');
    cy.get('.close').should('not.be.disabled').click();

    // "No second chances" pop-up should not be seen.
    cy.get('#introModal > .modal-dialog').should('be.visible');

    // Check for "The Beginning" header

    cy.get('#h3_battlefield').should('be.visible').and('have.text', "The Beginning");

    // URL should be as expected
    cy.url().should('include', '/news');

    // Check for the map
    cy.get('nav').should('be.visible');

    // Check for the article
    cy.get('article > div.modal-body').should('be.visible');

  });
})
