// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let randomUserName;
let password;

// Login screen

Cypress.Commands.add('loginScreen', function () {
    cy.get('#loginmodal > .modal-content').should('be.visible');    
    cy.get('#login_title').should('be.visible').and('have.text', 'Login with your warrior name');
})

Cypress.Commands.add('loginSetup', function () {

    // Get the base url from cypress.config.js file
    cy.visit(Cypress.config().baseUrl);

    // Click on "Register" button
    cy.get('#login').contains('Login').click();

    // Check whether the user is navigated to "Login" screen by checking the screen & heading of the screen
    cy.loginScreen();
    
  })

  Cypress.Commands.add('signUpSetup', function () {

    // Get the base url from cypress.config.js file
    cy.visit(Cypress.config().baseUrl);

    // Click on "Register" button
    cy.get('#rego').contains('Register').click();

    // Check whether the user is navigated to "Sign Up" screen by checking the screen & heading of the screen
    cy.get('#regomodal > .modal-content').should('be.visible');
    cy.get('#regomodal > .modal-content > .container > h1').should('be.visible');    
  })

  Cypress.Commands.add('randomUserAccountcreation', function () {

    // Step to reach the Sign Up page through the Home Page
    cy.signUpSetup();

    // generate random value for username
    let UserName = Math.random().toString(10).substring(3,8);
    let passWord = Math.random().toString(10).substring(3,8);
    
    // Check whether some fields are empty & some filled
    cy.get('#uname').type(UserName);
    cy.get('#pwd').type(passWord);
    cy.get('#psw-repeat').type(passWord);

    // Check whether a validation message is displayed
    cy.get('#popup').should('not.be.visible');

    // Click on "Sign Up" button
    cy.get('#signupbtn').click();

    // Check whether a validation message is displayed
    cy.get('#popup').should('not.be.visible');

    // Check whether the Sign Up window got closed
    cy.get('#regomodal > .modal-content').should('not.be.visible');

    // Check whether the user is navigated to "Login" screen & 
    cy.loginScreen();
    
  })

  Cypress.Commands.add('userLoginSuccessAndGameEntrySuccess', function (userType) {
      

    // For Existing user, once logged in "Continue your journey" page will be displayed.
    if (userType === 'Existing user'){
        // Step to reach the Game page through the Home Page. Below commands can be found in support/commands.js
        cy.loginSetup();

        // Get the User Name & password values from cypress.config.js file 
        cy.get('#worrior_username').type(Cypress.env('username'));
        cy.get('#worrior_pwd').type(Cypress.env('password'));

    }
    // For New user, once logged in "Welcome to the game" page will be displayed.
    else {

        // Create a new user/Sign Up. Step to reach the Sign Up page through the Home Page
        cy.signUpSetup();

        // generate random value for username
        randomUserName = Math.random().toString(10).substring(3,8);
        password = Math.random().toString(10).substring(3,8);
    
        // Fill in the fields
        cy.get('#uname').type(randomUserName);
        cy.get('#pwd').type(password);
        cy.get('#psw-repeat').type(password);

       // Check whether a validation message is displayed
        cy.get('#popup').should('not.be.visible');

        // Click on "Sign Up" button
        cy.get('#signupbtn').should('not.be.disabled').click();

        cy.log(2000);

        // Check whether a validation message is displayed
        cy.get('#popup').should('not.be.visible');

        // Check whether the Sign Up window got closed
        cy.get('#regomodal > .modal-content').should('not.be.visible');

        // Check whether the username of the new user is displayed in UserName field. Enter Password
        cy.get('#worrior_username').should('have.value', randomUserName);
        cy.get('#worrior_pwd').type(password);        
       
    }
    
    // Check whether a validation message is displayed
    cy.get('#login_popup').should('not.be.visible');

    // Click on "Login Warrior" button
    cy.get('#warrior').contains('Login warrior').click();

    // Check whether a validation message is displayed
    cy.get('#login_popup').should('not.be.visible');

    // Check whether the user is navigated to welcome/continue journey page
    cy.get('#loginmodal > .modal-content').should('be.visible');

    // For Existing user, once logged in "Continue your journey" page will be displayed.    
    if(userType === 'Existing user') {

        // Check whether the user is navigated to "Continue your journey" screen.
        cy.get('#login_title').should('be.visible').and('have.text', "Continue your Journey");

        // Check whether the player is greeted with the user name of the player
        cy.get('#user_txt').should('be.visible').and('have.text', Cypress.env('username'));

        // Check for current score
        cy.get('#user_score').should('be.visible').and('includes.text', 'Current Score:');
    }

    // For New user, once logged in "Welcome to the game" page will be displayed.
    else {
        // Check whether the user is navigated to "Welcome to the game" screen
        cy.get('#login_title').should('be.visible').and('have.text', 'Welcome to the game');

        
        cy.get('#user_txt').should('be.visible').and('have.text', randomUserName);       

    }

     // Start game button styling. Click on Start Game button
    cy.get('#start').should('not.be.disabled').and('have.text', 'Start game').and('have.css', 'background-color', 'rgb(213, 79, 240)').and('have.css', 'color', 'rgb(241, 241, 241)').click();
    return cy.wrap(randomUserName);
  });

  Cypress.Commands.add('enterBattleField', function () {

    // Click on 'Enter at your own risk?' button
     cy.get('#news').click();

  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  })

  
  