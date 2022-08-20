describe('User login', () => {

  beforeEach(function () {

    // Step to reach the Login page through the Home Page. This command can be found in support/commands.js
    cy.loginSetup();

  });

  it('User should not be able to login if username and password fields are left blank', () => {

    // Check whether User Name & Password fields are empty
    cy.get('#worrior_username').should('be.empty');
    cy.get('#worrior_pwd').should('be.empty');

    // Check whether a validation message is displayed
    cy.get('#login_popup').should('not.be.visible');

    // Click on "Login Warrior" button
    cy.get('#warrior').contains('Login warrior').click();

    // Check the validation message
    cy.get('#login_popup').should('be.visible').and('have.text', 'Wrong username or password').and('have.css', 'background-color', 'rgb(255, 0, 0)')

  });

  it('User should not be able to login if username field is left blank', () => {

    // Enter User Name
    cy.get('#worrior_username').type('abc');

    // Check whether Password field is empty
    cy.get('#worrior_pwd').should('be.empty');

    // Check whether a validation message is displayed
    cy.get('#login_popup').should('not.be.visible');

    // Click on "Login Warrior" button
    cy.get('#warrior').contains('Login warrior').click();

    // Check the validation message
    cy.get('#login_popup').should('be.visible').and('have.text', 'Wrong username or password').and('have.css', 'background-color', 'rgb(255, 0, 0)')

  });

  it('User should not be able to login if password field is left blank', () => {

    cy.get('#worrior_username').should('be.empty');
    cy.get('#worrior_pwd').type('abc');
    cy.get('#login_popup').should('not.be.visible');
    cy.get('#warrior').contains('Login warrior').click();
    cy.get('#login_popup').should('be.visible').and('have.text', 'Wrong username or password').and('have.css', 'background-color', 'rgb(255, 0, 0)')

  });

  it('User should not be able to login if incorrect details are provided for username & password fields', () => {

    cy.get('#worrior_username').type('zzz');
    cy.get('#worrior_pwd').type('zzz');
    cy.get('#login_popup').should('not.be.visible');
    cy.get('#warrior').contains('Login warrior').click();
    cy.get('#login_popup').should('be.visible').and('have.text', 'Wrong username or password').and('have.css', 'background-color', 'rgb(255, 0, 0)')

  });

  it('User should be able to login if correct details are provided for username & password fields', () => {

    cy.userLoginSuccessAndGameEntrySuccess('New user');

  });
})