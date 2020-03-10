Feature: The Televistion

Scenario: Verify the link on the page
    Given I open Televistion page
    Then user verify the link on the page

Scenario: Verify the page title
    Given I open Televistion page
    Then user verify the page title

Scenario: Check filters - screen type
    Given I open Televistion page
    Then user checks screen type filters

Scenario: Check clear filters
    Given I open Televistion page
    When user checks screen type filters
    And user checks clear filters
    Then user checks screen types drop down list change to All


Scenario: Check compare checkbox
    Given I open Televistion page
    When user checks screen type filters
    And user clicks on compare check box
    And user clicks on compare product
    Then user checks page redirecting to the comprae page


Scenario: Check compare checkbox and remove all products link
    Given I open Televistion page
    When user checks screen type filters
    And user clicks on compare check box
    And user clicks on remove all products link
    Then user checks compare check box uncheck
