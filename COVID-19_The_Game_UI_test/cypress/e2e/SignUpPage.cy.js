import USER_LIST from "../fixtures/userSignUpData.json"

describe('User Sign Up', () => {

  beforeEach(function () {

    // Step to reach the Sign Up page through the Home Page
    cy.signUpSetup();

    // Get the data file from fixtures folder
    cy.fixture("userSignUpData.json").as("user");

  });

  USER_LIST.forEach((user) => {

    // Negative scenarios: User creation unsuccessful & checks for validation messages
    it(user.scenario, () => {

      // Type in values for the fields
      cy.get('#uname').type(user.userName);
      cy.get('#pwd').type(user.password);
      cy.get('#psw-repeat').type(user.repeatPassword);

      // Check whether a validation message is displayed
      cy.get('#popup').should('not.be.visible');

      // Click on "Sign Up" button
      cy.get('#signupbtn').click();
      
      // Check the validation message
      cy.get('#popup').should('be.visible').and('have.text', user.validationMessage);
    })

  });

  // Postive scenario: User creation successful
  it('Positive scenario: User should be allowed to create a user account, if all the fields are filled in Sign Up page', () => {

    cy.randomUserAccountcreation();

  })
})



