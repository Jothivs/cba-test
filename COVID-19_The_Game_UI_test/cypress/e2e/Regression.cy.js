import QUESTION_LIST from "../fixtures/Question&Answers.json";

describe('Regression scenarios asked by the recruiter', () => {

  it('Player should be able to sign up, login, complete some questions and view the leaderboard', () => {

    // Do a successful user login. This function is defined in support/command.js file
    let newPlayerName;
    cy.userLoginSuccessAndGameEntrySuccess('New user').then(($name) => {
      newPlayerName = $name;
      cy.task('set', newPlayerName);
    });

    // Game Entry
    cy.enterBattleField();

    // In "No second chances" popup, click Start
    cy.get('#start').should('not.be.disabled').and('have.text', 'Start').click();

    // No second chances popup should close. Check for "The Beginning" header
    cy.get('#h3_battlefield').should('be.visible').and('have.text', "The Beginning");

    // URL should be as expected
    cy.url().should('include', '/news');

    // Check for the map
    cy.get('nav').should('be.visible');

    // Check for the article
    cy.get('article > div.modal-body').should('be.visible');

    // Get the question & answer file from fixtures folder
    cy.fixture("Question&Answers.json");

    // Answer question
    cy.get('#question').then(($btn1) => {

      if ($btn1.text().includes(QUESTION_LIST[0].question)) {
        cy.get('#answer_1').then(($btn2) => {

          if ($btn2.text().includes(QUESTION_LIST[0].correctAnswer[0])) {
            cy.get('#answer_1').contains(QUESTION_LIST[0].correctAnswer[0]).should('not.be.disabled').click();
          }
          else {
            cy.get('#answer_2').click();
          }
        });
      }
    });
    cy.get('#img-wfh').should('be.visible');
    cy.get('#correctModal > .modal-dialog > .modal-content > .modal-header > #staticBackdropLabel').should('be.visible').and('have.text', "That is correct!");
    cy.get('#correctModal > .modal-dialog > .modal-content > .modal-body').should('be.visible').and('includes.text', '\n        Eliminate the risk of exposure to the COVID-19 virus by keeping a safe distance, and work if possible. For more information about working from home visit Safe Work Australia .\n      ');
    cy.get('#continue').should('not.be.disabled').and('have.text', 'Continue...').click({ force: true });

    // View leaderboard
    cy.visit('https://responsivefight.herokuapp.com/leaderboard');
    cy.get(':nth-child(1) > .col-lg-12 > .option-label').should('be.visible').and('have.text', 'COVID-19 THE GAME - LEADERBOARD');

    // View the username & corresponding score of the player
    cy.task('get').then((newPlayerName) => {

      cy.get('tbody').contains("username").next().contains("score");
      cy.get('tbody').contains(newPlayerName).next().contains(1);

    });

  });

  it('Player should not be able to continue with the battle & should be allowed to retry,if wrong answer is answered', () => {

    // Do a successful user login. This function is defined in support/command.js file
    cy.userLoginSuccessAndGameEntrySuccess('New user')

    // Game Entry
    cy.enterBattleField();

    // In "No second chances" popup, click Start
    cy.get('#start').should('not.be.disabled').and('have.text', 'Start').click();

    // No second chances popup should close. Check for "The Beginning" header
    cy.get('#h3_battlefield').should('be.visible').and('have.text', "The Beginning");

    // URL should be as expected
    cy.url().should('include', '/news');

    // Check for the map
    cy.get('nav').should('be.visible');

    // Check for the article
    cy.get('article > div.modal-body').should('be.visible');

    // Get the question & answer file from fixtures folder
    cy.fixture("Question&Answers.json");
    cy.wait(500)
    // Answer question
    cy.get('#question').then(($btn1) => {

      if ($btn1.text().includes(QUESTION_LIST[0].question)) {
        cy.get('#answer_1').then(($btn2) => {

          if ($btn2.text().includes(QUESTION_LIST[0].wrongAnswer)) {
            cy.get('#answer_1').contains(QUESTION_LIST[0].wrongAnswer).should('not.be.disabled').click();
          }
          else {
            cy.get('#answer_2').click();
          }
        });
      }
    });
    cy.get('#incorrectModal > .modal-dialog > .modal-content > .modal-header').should('be.visible');
    cy.get('#incorrectModal > .modal-dialog > .modal-content > .modal-header > #staticBackdropLabel').should('be.visible').and('have.text', 'Oh no!')
    cy.get('#incorrectModal > .modal-dialog > .modal-content > .modal-body').should('be.visible');
    cy.get('#close_modal_btn_2').should('be.visible').and('have.text', 'Go home and start again').click();
    cy.get('.option-label').should('be.visible');

  });
});
