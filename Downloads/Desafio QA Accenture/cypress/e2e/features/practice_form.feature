Feature: Practice Form
  As a student
  I want to fill out the practice form
  So that I can register for a course

  Scenario: Successfully submit the practice form
    Given I am on the Practice Form page
    When I fill out the form with random data
    And I upload a text file
    And I submit the form
    Then I should see a success popup
    When I close the popup
    Then the popup should be closed
