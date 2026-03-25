Feature: Newuser Account Registration

  Scenario: newuser account registration
    Given User is on the application main page
    When User enters the details "Sruthi" and "Sruthi123" then click on signup button
    Then Verify "Sign up successful." message is shown