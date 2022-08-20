describe('User Sign Up component', () => {
  it('User should be able to view Sign Up page & its components', () => {

    // Step to reach the Sign Up page through the Home Page. This function is defined in support/command.js file
    cy.signUpSetup();

    // Check to see if page description is visible & text check
    cy.get('#regomodal > .modal-content > .container > :nth-child(2)').should('be.visible').and('includes.text', 'Please fill in this form to create an account.');

    // User Name label field & input field styling with checks for placeholder text
    cy.get('#regomodal > .modal-content > .container > [for="uname"]').should('be.visible').and('have.text', 'User Name');
    cy.get('#uname').should('be.empty').and('have.attr', 'placeholder', '10 Characters max');

    // Password label field & input field styling with checks for placeholder text
    cy.get('[for="psw"]').should('be.visible').and('have.text', 'Password');
    cy.get('#pwd').should('be.empty').and('have.attr', 'placeholder', 'Enter Password');

    // Repeat Password label field & input field with checks for placeholder text
    cy.get('[for="psw-repeat"]').should('be.visible').and('have.text', 'Repeat Password');
    cy.get('#psw-repeat').should('be.empty').and('have.attr', 'placeholder', 'Repeat Password');

    // Sign Up button styling & action
    cy.get('#signupbtn').should('not.be.disabled').and('have.text', 'Sign Up').and('have.css', 'background-color', 'rgb(4, 170, 109)').and('have.css', 'color', 'rgb(51, 51, 51)').click();

    // Validation message styling
    cy.get('#popup').should('be.visible').and('have.css', 'color', 'rgb(245, 245, 245)').and('have.css', 'background-color', 'rgb(255, 0, 0)').and('have.css', 'color', 'rgb(245, 245, 245)');

    // Cancel button styling & action
    cy.get('.cancelbtn').should('not.be.disabled').and('have.text', 'Cancel').and('have.css', 'background-color', 'rgb(244, 67, 54)').and('have.css', 'color', 'rgb(51, 51, 51)').click();

    // Check whether the Sign Up screen got closed, when Cancel button got clicked
    cy.get('#regomodal > .modal-content').should('not.be.visible');
  })
})