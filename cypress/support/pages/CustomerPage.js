class CustomerPage {
  verifyProductListVisible() {
    cy.contains('h1', 'Serverest Store').should('be.visible')
  }

  addToCart() {
    cy.get('[data-testid="adicionarNaLista"]').first().click()
  }

  verifyCartPage() {
    cy.url().should('include', '/minhaListaDeProdutos')
    cy.contains('h1', 'Lista de Compras').should('be.visible')
  }

  logout() {
    cy.get('[data-testid="logout"]').click()
  }
}

export default new CustomerPage()
