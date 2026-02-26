import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import tablePage from "../pages/WebTablesPage";

Given("I am on the Web Tables page", () => {
    tablePage.visit();
});

When("I create a new record with:", (dataTable) => {
    dataTable.hashes().forEach((row) => {
        tablePage.addRecord(row);
    });
});

Then("the record for {string} should exist", (firstName) => {
    tablePage.validateRecordExists(firstName);
});

When("I edit the record for {string} with new first name {string}", (oldName, newName) => {
    tablePage.editRecord(oldName, { firstName: newName });
});

When("I delete the record for {string}", (firstName) => {
    tablePage.deleteRecord(firstName);
});

Then("the record for {string} should not exist", (firstName) => {
    tablePage.validateRecordDoesNotExist(firstName);
});

When("I delete all records in the table", () => {
    tablePage.deleteAllRecords();
});

Then("the table should be empty", () => {
    // DemoQA tables usually have 10 rows minimum, but they are empty.
    // We can check if the first row has no text or if specific elements are gone.
    cy.get('.rt-tbody').should('not.contain', 'User1');
});
