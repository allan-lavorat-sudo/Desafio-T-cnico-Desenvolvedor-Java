Feature: Browser Windows
  As a user
  I want to handle multiple browser windows
  So that I can verify content in new tabs/windows

  Scenario: Handle new window and validate content
    Given I am on the Browser Windows page
    When I click the new window button
    Then a new window should be opened
    And I should see the message "This is a sample page" in the new window
