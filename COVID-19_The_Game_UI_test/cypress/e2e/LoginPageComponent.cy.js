describe('User login components', () => {
  it('User should be able to view login page & its components', () => {

    // Step to reach the Login page through the Home Page. This function is defined in support/command.js file
    cy.loginSetup();

    // User Name label field & input field styling with checks
    cy.get('#unamelabel').should('be.visible').and('have.text', 'User Name');
    cy.get('#worrior_username').should('be.visible');

    // Password label field & input field styling with checks
    cy.get('#pwdlabel').should('be.visible').and('have.text', 'Password');
    cy.get('#worrior_pwd').should('be.visible');

    // Login Warrior button styling
    cy.get('#warrior').should('not.be.disabled').and('have.text', 'Login warrior').and('have.css', 'background-color', 'rgb(129, 165, 219)').and('have.css', 'color', 'rgb(241, 241, 241)');

    // Cancel button styling & action
    cy.get('#close').should('not.be.disabled').and('have.text', 'Cancel').and('have.css', 'background-color', 'rgb(255, 0, 0)').and('have.css', 'color', 'rgb(241, 241, 241)').click();

    // Check whether the Login screen got closed, when Cancel button got clicked
    cy.get('#loginmodal > .modal-content').should('not.be.visible');
  })
})