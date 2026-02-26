import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import windowsPage from "../pages/BrowserWindowsPage";

Given("I am on the Browser Windows page", () => {
    windowsPage.visit();
});

When("I click the new window button", () => {
    windowsPage.clickNewWindow();
});

Then("a new window should be opened", () => {
    cy.get('@windowOpen').should('be.called');
});

Then("I should see the message {string} in the new window", (message) => {
    windowsPage.validateNewWindowContent();
});
