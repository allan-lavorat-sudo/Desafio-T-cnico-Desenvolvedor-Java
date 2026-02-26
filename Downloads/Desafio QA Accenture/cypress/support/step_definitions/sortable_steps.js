import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import sortablePage from "../pages/SortablePage";

Given("I am on the Sortable page", () => {
    sortablePage.visit();
});

When("I sort the elements in ascending order", () => {
    sortablePage.sortAscending();
});

Then("the elements should be in the order:", (dataTable) => {
    const expectedOrder = dataTable.raw().map(row => row[0]);
    sortablePage.validateOrder(expectedOrder);
});
