import QUESTION_LIST from "../fixtures/Question&Answers.json";

describe('Battle field: The Beginning', () => {

  it('New Player should be able to access battle field, answer all questions correctly & view the score in leaderboard', () => {


    // Do a successful user login. This function is defined in support/command.js file
    cy.userLoginSuccessAndGameEntrySuccess('New user').then(($name) => {
      let newPlayerName = $name;
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

    // Loop through to pick questions dynamically from .json file & answer the questions         
    for (let i = 0; i < QUESTION_LIST.length; i = i + 1) {

      for (let j = 0; j < QUESTION_LIST.length; j = j + 1) {
        cy.get('#question').then(($btn) => {
          //cy.log($btn.text());
          if ($btn.text().includes(QUESTION_LIST[j].question)) {

            // To address same question with different answers.


            cy.get('#answer_1').then(($btn) => {

              for (let k = 0; k < QUESTION_LIST[j].correctAnswer.length; k++) {
                let x = 0;
                //cy.log($btn.text());
                if ($btn.text().includes(QUESTION_LIST[j].correctAnswer[k])) {
                  cy.get('#answer_1').contains(QUESTION_LIST[j].correctAnswer[k]).should('not.be.disabled').click();
                  x = 1;
                }
                //cy.log("entered k loop")
                //cy.log(x);
                cy.task('setX', x);
                if (x === 1) {
                  break;
                }
              }
            });
            //cy.log('Exited k for loop')

            cy.task('getX').then((x) => {
              //cy.log(x);
              if (x === 0) {
                cy.get('#answer_2').then(($btn) => {

                  for (let l = 0; l < QUESTION_LIST[j].correctAnswer.length; l++) {
                    let y = 0;

                    //cy.log($btn.text());

                    if ($btn.text().includes(QUESTION_LIST[j].correctAnswer[l])) {
                      cy.get('#answer_2').contains(QUESTION_LIST[j].correctAnswer[l]).should('not.be.disabled').click();
                      y = 1;

                    }
                    //cy.log("entered l loop")
                    //cy.log(y);
                    if (y === 1) {
                      break;
                    }
                  }
                });
              }
            });
            cy.get('#img-wfh').should('be.visible');
            cy.get('#correctModal > .modal-dialog > .modal-content > .modal-header > #staticBackdropLabel').should('be.visible').and('have.text', "That is correct!");
            cy.get('#correctModal > .modal-dialog > .modal-content > .modal-body').should('be.visible').and('includes.text', '\n        Eliminate the risk of exposure to the COVID-19 virus by keeping a safe distance, and work if possible. For more information about working from home visit Safe Work Australia .\n      ');
            cy.get('#continue').should('not.be.disabled').and('have.text', 'Continue...').click({ force: true });
          }

        });
        cy.wait(1000);

      }
    }

  });
});
