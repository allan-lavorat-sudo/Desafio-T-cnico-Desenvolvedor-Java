Feature: Web Tables
  As a user
  I want to manage records in a web table
  So that I can keep information up to date

  Scenario: CRUD operations on Web Tables
    Given I am on the Web Tables page
    When I create a new record with:
      | firstName | lastName | email | age | salary | department |
      | Allan     | Lavorat  | allan@test.com | 30 | 5000 | QA |
    Then the record for "Allan" should exist
    When I edit the record for "Allan" with new first name "AllanEdited"
    Then the record for "AllanEdited" should exist
    When I delete the record for "AllanEdited"
    Then the record for "AllanEdited" should not exist

  Scenario Outline: Bonus - Dynamic record creation
    Given I am on the Web Tables page
    When I create a new record with:
      | firstName | lastName | email | age | salary | department |
      | <firstName> | <lastName> | <email> | <age> | <salary> | <department> |
    Then the record for "<firstName>" should exist

    Examples:
      | firstName | lastName | email | age | salary | department |
      | User1     | Test     | user1@test.com | 21 | 1000 | IT |
      | User2     | Test     | user2@test.com | 22 | 2000 | IT |
      | User3     | Test     | user3@test.com | 23 | 3000 | IT |
      | User4     | Test     | user4@test.com | 24 | 4000 | IT |
      | User5     | Test     | user5@test.com | 25 | 5000 | IT |
      | User6     | Test     | user6@test.com | 26 | 6000 | IT |
      | User7     | Test     | user7@test.com | 27 | 7000 | IT |
      | User8     | Test     | user8@test.com | 28 | 8000 | IT |
      | User9     | Test     | user9@test.com | 29 | 9000 | IT |
      | User10    | Test     | user10@test.com | 30 | 10000 | IT |
      | User11    | Test     | user11@test.com | 31 | 11000 | IT |
      | User12    | Test     | user12@test.com | 32 | 12000 | IT |

  Scenario: Bonus - Delete all dynamic records
    Given I am on the Web Tables page
    When I delete all records in the table
    Then the table should be empty
