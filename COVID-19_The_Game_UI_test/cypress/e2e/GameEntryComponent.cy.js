describe('Game Entry Component', () => {

  it('User should be able to access Game Entry page and its features', () => {
    // Do a successful user login. This function is defined in support/command.js file
    cy.userLoginSuccessAndGameEntrySuccess('New user');

    // URL should be as expected
    cy.url().should('include', '/covid');

    // Heading should be visible
    cy.get('.alpha-heading').should('be.visible');

    // Coronavirus image should be visible
    cy.get('#world_img').should('be.visible');

    // Welcome text should be displayed.
    cy.get('#welcome_text').should('be.visible').and('includes.text', 'Welcome ');

    // 'Enter at your own risk?' button should be visible
    cy.get('#news').should('be.visible').and('have.text', 'Enter at your own risk?');

    // Footer text should be visible
    cy.get('.footer-text').should('be.visible');

    // Number of footer moving messages should be 7.
    cy.get('.ticker-move').children().should('have.length', 7)

    // Check the text of all the messages
    cy.get('.ticker-move > :nth-child(1)').should('contain.text', "Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.");
    cy.get('.ticker-move > :nth-child(2)').should('contain.text', "Maintain at least 1 metre (3 feet) distance between yourself and others.");
    cy.get('.ticker-move > :nth-child(3)').should('contain.text', "Avoid going to crowded places.");
    cy.get('.ticker-move > :nth-child(4)').should('contain.text', "Avoid touching eyes, nose and mouth.");
    cy.get('.ticker-move > :nth-child(5)').should('contain.text', "Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover.");
    cy.get('.ticker-move > :nth-child(6)').should('contain.text', "Keep up to date on the latest information from trusted sources.");
    cy.get('.ticker-move > :nth-child(7)').should('contain.text', "Visit WHO.int for more information.");

  });
})
