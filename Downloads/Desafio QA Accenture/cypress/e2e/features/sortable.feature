Feature: Sortable
  As a user
  I want to sort elements in a list
  So that they are in the correct order

  Scenario: Sort elements in ascending order
    Given I am on the Sortable page
    When I sort the elements in ascending order
    Then the elements should be in the order:
      | One |
      | Two |
      | Three |
      | Four |
      | Five |
      | Six |
