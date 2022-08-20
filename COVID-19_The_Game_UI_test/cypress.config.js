const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        setX: (val) => {
          return (x = val);
        },
        getX: () => {
          return x;
        },
        set: (val) => {
          return (newPlayerName = val);
        },
        get: () => {
          return newPlayerName;
        },

      })

    },

    "baseUrl": "https://responsivefight.herokuapp.com/",
    "specPattern": [
      ".\\cypress\\e2e\\HomePageComponent.cy.js",
      ".\\cypress\\e2e\\SignUpPageComponent.cy.js",
      ".\\cypress\\e2e\\LoginPageComponent.cy.js",
      ".\\cypress\\e2e\\GameEntryComponent.cy.js",
      ".\\cypress\\e2e\\BattleFieldComponent.cy.js",
      ".\\cypress\\e2e\\SignUpPage.cy.js",
      ".\\cypress\\e2e\\Login.cy.js",
      ".\\cypress\\e2e\\GameEntryPage.cy.js",
      ".\\cypress\\e2e\\BattleFieldPage.cy.js",
      ".\\cypress\\e2e\\Regression.cy.js"

    ],
    "env": {
      "username": "aaaaaaaaaa",
      "password": "12345"
    },
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/report/mochawesome-report",
      "reportFilename": "Report",
      "overwrite": false,
      "embeddedScreenshots": true,
      "charts": true,
      "html": true,
      "json": true,
      "reportPageTitle": "HTML Report"
    },
    
    "watchForFileChanges": false,
    "viewportWidth": 1920,
    "viewportHeight": 1080
  }


});
