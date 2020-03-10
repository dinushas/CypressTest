# CypressTest

Installing Cypress

Install Cypress via npm

Create a new folder called CypressTest in C drive and open command prompt and go to that path (Example:- C:/CypressTest - cd /your/project/path)
and type -:  npm install cypress --save-dev
This will install Cypress locally as a dev dependency for your project.

Make sure that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory.

======================================================

Making a Cypress Cucumber integration
Let’s start by installing a preprocessor that we need to use the Gherkin syntax:

npm install cypress-cucumber-preprocessor

=======================================================

Also go to this file cypress/plugins/index.js and add following code.

const cucumber = require('cypress-cucumber-preprocessor').default;
 
module.exports = (on) => {
  on('file:preprocessor', cucumber())
};

====================================================================

To avoid making our step definitions global, we also add this configuration to our  package.json:

"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}

========================================================================
========================================================================

How to run cypress

Go to command prompt type and enter - npx cypress open
