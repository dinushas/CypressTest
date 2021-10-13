# Test 01

1.    a) We need to check whether all the values are displayed properly for base currency and target currency with respect to the database.

b) In DB we need to write query in the currency table like select distinct (currency_name) from currency and the count should match with the drop-down count.

 c) Then we need to check after giving the amount and the conversion rate the value is converted properly and saved in database. Whatever value will be stored in DB the calculation will be based on that.

We need to check value is matching with DB or nor.



2.      Functional test to check the basic add, edit, delete functionality.

Non functional test to check how the system respond when large number of currencies added.



3.     Functional test to check the basic add, edit, delete functionality.

Non-functional test to check how the system respond when large number of currencies added.

 

4.      Alignment of all the controls, Text contrast (ratio between text and background colour of the form)

UI:All the options of the drop downs are visible properly and selected

Spelling of the controls


5.      developer need to make sure that always the latest conversion rate gets updated in the database so that the calculation can be done with proper value

We will just connect to the database with our automation script and assert the value


6.      we need to test additional scenarios to selection of country with respect to the currency. So, it's kind of integration testing. Integration between country and currency

7.      Mandatory fields are not marked

The title of the page is in white so it's not readable





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
