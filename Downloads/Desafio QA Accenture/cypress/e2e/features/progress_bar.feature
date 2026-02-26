Feature: Progress Bar
  As a user
  I want to interact with a progress bar
  So that I can control its progress

  Scenario: Stop progress bar before 25% and reset at 100%
    Given I am on the Progress Bar page
    When I click start and stop before or at 25%
    Then the progress bar value should be less than or equal to 25%
    When I click start again and wait for 100%
    And I reset the progress bar
    Then the progress bar should be reset
