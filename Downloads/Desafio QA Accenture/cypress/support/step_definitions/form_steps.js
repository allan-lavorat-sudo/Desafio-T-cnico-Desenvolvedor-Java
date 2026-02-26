import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import formPage from "../pages/PracticeFormPage";

Given("I am on the Practice Form page", () => {
    formPage.visit();
});

When("I fill out the form with random data", () => {
    const randomData = {
        firstName: "Test",
        lastName: "User",
        email: `test_${Math.floor(Math.random() * 1000)}@example.com`,
        gender: "Male",
        mobile: "1234567890",
        subject: "Maths",
        hobby: "Sports",
        address: "123 Test St",
        state: "NCR",
        city: "Delhi"
    };
    formPage.fillForm(randomData);
});

When("I upload a text file", () => {
    formPage.fillForm({ filePath: 'test-upload.txt' });
});

When("I submit the form", () => {
    formPage.submit();
});

Then("I should see a success popup", () => {
    formPage.getPopup().should('be.visible');
    formPage.getPopup().contains('Thanks for submitting the form');
});

When("I close the popup", () => {
    formPage.closePopup();
});

Then("the popup should be closed", () => {
    formPage.getPopup().should('not.exist');
});
