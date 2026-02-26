import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import progressPage from "../pages/ProgressBarPage";

Given("I am on the Progress Bar page", () => {
    progressPage.visit();
});

When("I click start and stop before or at 25%", () => {
    progressPage.clickStartStop();
    progressPage.stopAtPercentage(25);
});

Then("the progress bar value should be less than or equal to 25%", () => {
    progressPage.getProgressBarValue().should('be.lte', 25);
});

When("I click start again and wait for 100%", () => {
    progressPage.clickStartStop();
    // Wait for 100% (aria-valuenow)
    cy.get('.progress-bar', { timeout: 20000 }).should('have.attr', 'aria-valuenow', '100');
});

When("I reset the progress bar", () => {
    progressPage.reset();
});

Then("the progress bar should be reset", () => {
    progressPage.getProgressBarValue().should('eq', 0);
});
