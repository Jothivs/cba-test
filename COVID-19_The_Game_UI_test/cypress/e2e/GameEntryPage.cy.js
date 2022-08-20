describe('Game Entry Page', () => {

  it('Successfully logged in user should be able to reach Game Entry page and proceed to Battle Field', () => {

    // Do a successful user login. This function is defined in support/command.js file
    cy.userLoginSuccessAndGameEntrySuccess('New user');

    // Game Entry
    cy.enterBattleField();

    // Check if "No second chances" pop-up is displayed.
    cy.get('#introModal > .modal-dialog').should('be.visible');
    cy.get('#introModal > .modal-dialog > .modal-content > .modal-header > #staticBackdropLabel').should('be.visible').and('includes.text', 'No second ');

  });
})
