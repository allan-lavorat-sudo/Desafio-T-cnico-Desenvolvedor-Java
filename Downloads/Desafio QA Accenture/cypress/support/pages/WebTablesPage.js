class WebTablesPage {
    visit() {
        cy.visit('/webtables');
    }

    addRecord(data) {
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type(data.firstName);
        cy.get('#lastName').type(data.lastName);
        cy.get('#userEmail').type(data.email);
        cy.get('#age').type(data.age);
        cy.get('#salary').type(data.salary);
        cy.get('#department').type(data.department);
        cy.get('#submit').click();
    }

    editRecord(firstName, newData) {
        // Find row by first name and click edit
        cy.contains('.rt-tr-group', firstName).find('[id^="edit-record-"]').click();
        if (newData.firstName) cy.get('#firstName').clear().type(newData.firstName);
        if (newData.lastName) cy.get('#lastName').clear().type(newData.lastName);
        cy.get('#submit').click();
    }

    deleteRecord(firstName) {
        cy.contains('.rt-tr-group', firstName).find('[id^="delete-record-"]').click();
    }

    validateRecordExists(firstName) {
        cy.contains('.rt-tbody', firstName).should('exist');
    }

    validateRecordDoesNotExist(firstName) {
        cy.contains('.rt-tbody', firstName).should('not.exist');
    }

    deleteAllRecords() {
        cy.get('[id^="delete-record-"]').each(($el) => {
            cy.wrap($el).click();
        });
    }
}

export default new WebTablesPage();
