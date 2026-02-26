Feature: Book Store API
  As a user
  I want to interact with the Book Store API
  So that I can manage my account and rent books

  Scenario: Full user flow in Book Store API
    Given I create a new user with random credentials
    And I generate an access token
    And I confirm the user is authorized
    And I list the available books
    When I rent two books
    Then I should see the rented books in the user details
