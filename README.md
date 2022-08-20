                                         CBA Test - UI Test Automation
                                                      
Technology used – Javascript, Cypress, Chai assertion library, mocha

Running locally from Command Line:

Please make sure you have node.js & cypress latest version installed and configured on your system. More information regarding installation of have node.js & cypress can be found here: https://docs.cypress.io/guides/getting-started/installing-cypress#yarn-add

Step - 1: git clone https://github.com/Jothivs/cba-test.git

Step - 2: Open a Terminal window

Step - 3: cd COVID-19 The Game

Step - 4: ***node.js & cypress installation as explained in above URL**

Step - 5: npm run RunCode

Note: After test execution, please look inside /reports/mochawesome-report folder to view the HTML Reports.

                                                     (OR)

If wishing to see the execution in an open browser. 

  •	Do all steps from 1 to 4.
	
  •	In Step-5 type: npx cypress open
	
  •	Cypress application window opens. In the “Welcome to Cypress!”, click on “E2E Testing”
	
  •	Choose a browser of your choice & click on “Start E2E Testing in Edge”.
	
  •	Select any of the specs you wish to run from “E2E specs”. Details below:
	
    o	HomePageComponent.cy.js: Includes regression test scripts for ‘Home page’ elements’ visibility, look & feel.
		
    o	SignUpPageComponent.cy.js: Includes regression test scripts for ‘Sign Up’ page elements’ visibility, look & feel.
		
    o	LoginPageComponent.cy.js: Includes regression test scripts for ‘Login’ page elements’ visibility, look & feel.
		
    o	GameEntryComponent.cy.js: Includes regression test scripts for ‘Game Entry’ page elements’ visibility, look & feel.
		
    o	BattleFieldComponent.cy.js: Includes regression test scripts for ‘BattleField’ page elements’ visibility, look & feel.
		
    o	SignUpPage.cy.js: Test scripts for Sign Up functionality with positive, negative & multiple user scenarios.
		
    o	Login.cy.js: Test scripts for Login functionality with positive, negative & multiple user scenarios.
		
    o	GameEntryPage.cy.js:  Test scripts for entry to game functionality with positive & negative scenarios. 
		
    o	Regression.cy.js: Testing e2e journey from user creation to leader board with positive & negative scenarios.
		
    o	BattleFieldPage.cy: Testing e2e journey from user creation to leader board by answering all questions.
		    
Issues and Bugs:

For issues or bugs please check under issues tab of this Git repository.

Note: /news page doesn’t display question sometimes. In that case, screen refresh is required, to get questions to be displayed.

Bonus questions completed:

•	HTML Reporting, videos & screenshots of tests available.
•	Uploaded test run results from different browser in “Test run reports” folder.
•	Create User “Ray_Hermann28” with more than 4000 points on the leaderboard

                                                      API Testing
                                                                    
Technology used – Javascript, Chai assertion library
Tool used – Postman

Running locally:

Please make sure you have postman installed.

•	git clone https://github.com/Jothivs/cba-test.git
•	Open postman in your computer. 
•	Import both the collection & environment file found in “COVID-19 The Game API Test” folder.
•	Run the collection by selecting “Run collection” option.
