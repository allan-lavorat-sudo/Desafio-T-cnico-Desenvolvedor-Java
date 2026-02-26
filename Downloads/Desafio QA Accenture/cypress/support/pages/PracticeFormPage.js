class PracticeFormPage {
    visit() {
        cy.visit('/forms');
        cy.contains('Practice Form').click();
    }

    fillForm(data) {
        cy.get('#firstName').type(data.firstName);
        cy.get('#lastName').type(data.lastName);
        cy.get('#userEmail').type(data.email);
        cy.get(`input[value="${data.gender}"]`).click({ force: true });
        cy.get('#userNumber').type(data.mobile);

        // Subjects
        cy.get('#subjectsInput').type(`${data.subject}{enter}`);

        // Hobbies
        cy.get('label').contains(data.hobby).click();

        // Upload file
        if (data.filePath) {
            cy.get('#uploadPicture').selectFile(data.filePath);
        }

        cy.get('#currentAddress').type(data.address);

        // State and City
        cy.get('#state').click().get('.css-26l3qy-menu').contains(data.state).click();
        cy.get('#city').click().get('.css-26l3qy-menu').contains(data.city).click();
    }

    submit() {
        cy.get('#submit').click({ force: true });
    }

    getPopup() {
        return cy.get('.modal-content');
    }

    closePopup() {
        cy.get('#closeLargeModal').click({ force: true });
    }
}

export default new PracticeFormPage();
