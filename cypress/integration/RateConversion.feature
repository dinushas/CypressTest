
Feature:  Check the GBP/USD rate

Scenario: Check the rate conversion for 1 GBP to USD
    Given user open google page
    When user eneters rate conversion for "1 GBP to USD"
    Then user  checks if the value of the pound is "1" 
    And user checks the value of the USD is greater than "0"

  

   

