class BrowserWindowsPage {
    visit() {
        cy.visit('/alertsWindows');
        cy.contains('Browser Windows').click();
    }

    clickNewWindow() {
        // Cypress handles new windows differently (it doesn't support multiple windows well).
        // A common workaround is to remove target="_blank" or follow the window.open call.
        // However, for this challenge, we can stub window.open or just visit the URL if we can find it.
        // The requirement says: "Certifica-se que uma nova janela foi aberta, e validar a msg 'This is a sample page'"

        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });
        cy.get('#windowButton').click();
    }

    validateNewWindowContent() {
        // Since we stubbed it, we can check if it was called and then visit the URL manually
        cy.get('@windowOpen').should('be.calledWith', '/sample');
        cy.visit('/sample');
        cy.contains('This is a sample page').should('be.visible');
    }
}

export default new BrowserWindowsPage();
