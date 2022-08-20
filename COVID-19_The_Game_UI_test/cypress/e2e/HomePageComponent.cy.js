describe('COVID-19 The Game Home Page component', () => {

  it('User should be able to view the home page and access its elements', () => {

    // Get the base url from cypress.config.js file
    cy.visit(Cypress.config().baseUrl);

    cy.get('.option-label > :nth-child(1)').should('be.visible');
    cy.get('.option-label > :nth-child(2)').should('be.visible');
    cy.get('.option-label').should('contain.text', "COVID-19 THE GAME");
    cy.get(':nth-child(3) > .col-sm-12 > .block').should('be.visible');
    cy.get(':nth-child(3) > .col-sm-12 > .block > p').should('have.text', 'The world has been taken over by super villain COVID19 and we need our super heroes to come to the rescue.\nWe need to combat this great threat, so I am looking to recruit a team of Super Heroes and build the CURE team.\nI am in search of heroes like The HandWasher, Invisible Distance, SOAP, WFH, and any other great warriors against COVID19, until CURE arrives to the rescue.')
    cy.get('.centered').should('be.visible');
    cy.get('#rego').should('not.be.disabled').and('have.text', ' Register').and('have.css', 'background-color', 'rgb(129, 165, 219)');
    cy.get('#login').should('not.be.disabled').and('have.text', ' Login').and('have.css', 'background-color', 'rgb(17, 165, 219)');
    cy.get('.summary').should('have.text', 'Please visit this project for more information');
  })
})