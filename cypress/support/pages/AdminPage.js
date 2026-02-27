class AdminPage {
  goToProductRegistration() {
    cy.get('[data-testid="cadastrar-produtos"]').click()
  }

  logout() {
    cy.get('[data-testid="logout"]').click()
  }

  verifyWelcomeMessage() {
    cy.contains('h1', 'Bem Vindo').should('be.visible')
  }
}

export default new AdminPage()
