Feature: To test the close button functionality in Newuser Account Registration popup 

  Scenario: Verify close button of newuser registration popup
    Given User is on the site main page
    When User enters the details "Sruthi" and "Sruthi123" then click on close button
    Then Verify popup closed and main page is shown
